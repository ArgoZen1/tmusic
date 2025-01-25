"use client";

import Image from "next/image";
import {
  Mic2,
  Users,
  Calendar,
  Trophy,
  Lock,
  ShieldCheck,
  Headphones,
  Radio,
  PenTool,
  Edit2,
  Camera,
  Music,
  FileAudio
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import titi from "@/public/images/titi-min.webp";
import TMUSIC from "@/public/images/TMUSICLOGO-min.webp";

export default function Home() {
  const [memberCount, setMemberCount] = useState<number>(0);

  useEffect(() => {
    const fetchMemberCount = async () => {
      try {
        const response = await fetch("/api/memberCount");
        const data = await response.json();
        if (data.memberCount) {
          setMemberCount(data.memberCount);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du nombre de membres:",
          error
        );
      }
    };

    fetchMemberCount();
    const interval = setInterval(fetchMemberCount, 300000);
    return () => clearInterval(interval);
  }, []);

  const animationCards = [
    // Vos cartes d'animation
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#1a1814] to-[#1a1814] relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[url('/images/fond-min.webp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="relative mb-8 group">
            {/* Softer glowing rings */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FFDD58]/40 via-[#FF8F53]/40 to-[#FFB953]/40 rounded-full opacity-85 blur-xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FFDD58]/30 via-[#FF8F53]/30 to-[#FFB953]/30 rounded-full opacity-65 blur-2xl group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-[#FFDD58]/20 via-[#FF8F53]/20 to-[#FFB953]/20 rounded-full opacity-40 blur-3xl group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Glass effect container */}
            <div className="relative rounded-full p-1 bg-gradient-to-r from-[#FFB953]/10 to-[#FF8F53]/10 backdrop-blur-xl overflow-hidden">
              {/* Glass effect */}
              <Image
                src={titi}
                alt="Photo de TiTi"
                className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover transform transition-all duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-r from-[#DB7C26] via-[#DB7C26] to-[#DB7C26] text-transparent bg-clip-text mb-4 text-center">
            TMusic
          </h1>
          <p className="text-xl sm:text-3xl font-light text-white/90 mb-4 text-center">
            Êtes-vous prêt à faire vibrer vos cordes vocales ?
          </p>
          <p className="text-lg sm:text-xl text-white/70 mb-8 text-center">
            Où la musique et l&apos;amitié se rencontrent !
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full">
            <a
              href="https://discord.gg/tmusic"
              target="_blank"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#DB7C26] to-[#FFDD58] rounded-full text-center text-black font-semibold hover:scale-105 transition-transform"
            >
              Rejoindre le Discord
            </a>
            <motion.a
              href="https://tiktok.com/@titi.covermusic"
              className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-full bg-transparent border-2 border-[#FFB953]/50 text-[#FFB953] font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FFB953] to-[#FF8F53] opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-out" />
              <span className="relative flex items-center justify-center gap-2">
                <Music className="w-5 h-5" />
                Suivre TiTi sur TikTok
              </span>
            </motion.a>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFB953]/10 to-[#FF8F53]/10 backdrop-blur-lg rounded-full border border-[#FFB953]/20"
          >
            <Users className="w-5 h-5 text-[#FFB953]" />
            <span className="text-white/80 text-sm sm:text-base">
              <b className="text-[#FFB953]">{memberCount.toLocaleString()}</b> membres nous ont déjà rejoint !
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section with Improved Cards */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold text-center mb-20"
          >
            <span className="bg-gradient-to-r from-[#FFB953] via-[#FF8F53] to-[#FFB953] text-transparent bg-clip-text inline-flex items-center gap-4 flex-wrap justify-center">
              Ce que nous offrons
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Mic2,
                title: "Salons de Chant",
                description: "Des salons vocaux dédiés pour chanter ou écouter les performances avec une liste de passage moderne gérée par un bot",
              },
              {
                icon: Trophy,
                title: "Auditions chant",
                description: "Participez à nos concours de chant avec des jurys compétents et obtenez des rôles selon votre niveau",
              },
              {
                icon: Calendar,
                title: "Événements Spéciaux",
                description: "Des événements uniques et des soirées karaoké tout au long de l'année dans les vocaux de chant",
              },
              {
                icon: Lock,
                title: "Vocaux Privés",
                description: "Des salons privés pour plus de liberté et d'intimité",
              },
              {
                icon: ShieldCheck,
                title: "Staff à l'Écoute",
                description: "Une équipe dévouée pour vous accompagner et garder une ambiance conviviale sur le serveur",
              },
              {
                icon: FileAudio,
                title: "Communauté RAP",
                description: "Un espace dédié aux passionnés de rap et de freestyle",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 sm:p-8 rounded-2xl overflow-hidden"
              >
                {/* Enhanced card background with musical pattern */}
                <div className="absolute inset-0 opacity-80">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFB953]/20 via-[#FF8F53]/20 to-[#FFB953]/20 rounded-2xl" />
                  <div className="absolute inset-[1px] bg-[#131415] rounded-2xl backdrop-blur-xl" />
                </div>

                {/* Hover effects with musical notes animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB953] via-[#FF8F53] to-[#FFB953] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" />

                {/* Content with improved spacing */}
                <div className="relative space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-[#FFB953] to-[#FF8F53] text-[#131415] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-[#FFB953] to-[#FF8F53] text-transparent bg-clip-text">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base md:text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animation Events Section with Enhanced Cards */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-[#FFB953] via-[#FF8F53] to-[#FFB953] text-transparent bg-clip-text inline-flex items-center gap-4 flex-wrap justify-center">
              <Music className="w-8 h-8 sm:w-10 sm:h-12 text-[#FFB953] hidden custom705:block" />
              Événements Animation
              <Music className="w-8 h-8 sm:w-10 sm:h-12 text-[#FFB953] hidden custom705:block" />
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-20 text-center px-4"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#FFB953] to-[#FF8F53] text-transparent bg-clip-text mb-6">Animateur</h3>
            <p className="text-base sm:text-lg md:text-xl text-white/70">
              Les Animateurs sont responsables de créer et de gérer les événements sur le serveur. 
              Leur mission est de mettre l&apos;ambiance et de s&apos;assurer que chaque membre passe 
              un moment agréable. Ils recueillent aussi les avis pour rendre les animations plus attrayantes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Karaoké",
                icon: Mic2,
                description: "Des soirées karaoké pour chanter entre amis et découvrir de nouveaux talents.",
              },
              {
                title: "Défis de chant",
                icon: Radio,
                description: "Des défis de chant variés pour pimenter vos performances vocales et vous dépasser.",
              },
              {
                title: "Concours de dessin",
                icon: PenTool,
                description: "Laissez libre cours à votre créativité lors de concours de dessin à thème.",
              },
              {
                title: "Concours d'écriture",
                icon: Edit2,
                description: "Exprimez-vous à travers des concours d'écriture et partagez votre passion avec la communauté.",
              },
              {
                title: "Photographie",
                icon: Camera,
                description: "Montrez vos plus beaux clichés et votez pour la meilleure photo du serveur !",
              },
              {
                title: "Et bien d'autres événements...",
                icon: Calendar,
                description: "Animations saisonnières, surprises festives et plein d'autres idées pour vous divertir !",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 sm:p-8 rounded-2xl overflow-hidden"
              >
                {/* Enhanced card background with musical pattern */}
                <div className="absolute inset-0 opacity-80">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFB953]/20 via-[#FF8F53]/20 to-[#FFB953]/20 rounded-2xl" />
                  <div className="absolute inset-[1px] bg-[#131415] rounded-2xl backdrop-blur-xl" />
                </div>

                {/* Hover effects with musical notes animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB953] via-[#FF8F53] to-[#FFB953] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" />

                {/* Content with improved spacing */}
                <div className="relative space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-[#FFB953] to-[#FF8F53] text-[#131415] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <card.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#FFB953] to-[#FF8F53] text-transparent bg-clip-text">
                    {card.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base md:text-lg">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section with Enhanced Animation */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-[#FFB953] via-[#FF8F53] to-[#FFB953] text-transparent bg-clip-text inline-flex items-center gap-4 flex-wrap justify-center">
              <Music className="w-8 h-8 sm:w-12 sm:h-12 text-[#FFB953] hidden custom705:block" />
              Rejoignez l&apos;Aventure
              <Music className="w-8 h-8 sm:w-12 sm:h-12 text-[#FFB953] hidden custom705:block" />
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto px-4"
          >
            Que vous soyez un chanteur chevronné ou débutant, il y a une place pour vous chez TMusic. 
            Venez partager votre passion pour la musique dans une ambiance bienveillante et sans jugement !
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <motion.a
              href="https://discord.gg/tmusic" 
              target="_blank"
              className="group relative px-8 sm:px-10 py-4 sm:py-6 overflow-hidden rounded-full bg-gradient-to-r from-[#FFB953] to-[#FF8F53] text-[#131415] font-medium shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FF8F53] to-[#FFB953] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
              <Headphones className="w-5 h-5 sm:w-6 sm:h-6 relative" />
              <span className="relative">Rejoindre TMusic</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer with Enhanced Blur Effect */}
      <footer className="relative py-8 px-4 sm:px-6 lg:px-8 backdrop-blur-xl bg-gradient-to-t from-black/50 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
        <Image
            src={TMUSIC}
            alt="Logo TMusic"
            className="mx-auto mb-6 w-full max-w-[100px] h-[100px] rounded-full object-cover"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/50 text-sm sm:text-base"
          >
            © {new Date().getFullYear()} TMusic. Tous droits réservés.
          </motion.p>
        </div>
      </footer>
    </main>
  );
}
