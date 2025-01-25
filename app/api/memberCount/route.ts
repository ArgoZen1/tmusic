import { NextResponse } from 'next/server';

// Cache pour stocker le nombre de membres
let cachedMemberCount: number | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 300000; // 5 minutes de cache
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 300000; // Minimum 5 minutes entre les requêtes

export async function GET() {
  try {
    const currentTime = Date.now();
    const serverId = process.env.DISCORD_SERVER_ID;
    const token = process.env.DISCORD_BOT_TOKEN;

    if (!serverId || !token) {
      console.error('Variables d\'environnement Discord manquantes');
      throw new Error('ID du serveur Discord ou token manquant');
    }

    // Utiliser le cache si disponible et valide
    if (cachedMemberCount !== null && (currentTime - cacheTimestamp) < CACHE_DURATION) {
      return NextResponse.json({ memberCount: cachedMemberCount });
    }

    // Vérifier si nous pouvons faire une nouvelle requête
    if (currentTime - lastRequestTime < MIN_REQUEST_INTERVAL) {
      // Si trop tôt, renvoyer le cache même s'il est expiré
      if (cachedMemberCount !== null) {
        return NextResponse.json({ memberCount: cachedMemberCount });
      }
    }

    lastRequestTime = currentTime;

    const response = await fetch(`https://discord.com/api/v10/guilds/${serverId}/preview`, {
      headers: {
        'Authorization': `Bot ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'DiscordBot (TMusic, 1.0.0)'
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      // Si rate limit, utiliser le cache existant
      if (response.status === 429 && cachedMemberCount !== null) {
        return NextResponse.json({ memberCount: cachedMemberCount });
      }
      
      throw new Error(`Erreur API Discord: ${response.status}`);
    }

    const data = await response.json();
    
    if (typeof data.approximate_member_count !== 'number') {
      throw new Error('Format de réponse Discord invalide');
    }
    
    // Mise à jour du cache
    cachedMemberCount = data.approximate_member_count;
    cacheTimestamp = currentTime;

    return NextResponse.json({ memberCount: cachedMemberCount });
  } catch (error) {
    // En cas d'erreur, renvoyer le cache si disponible
    if (cachedMemberCount !== null) {
      return NextResponse.json({ memberCount: cachedMemberCount });
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Erreur inconnue' },
      { status: 500 }
    );
  }
}