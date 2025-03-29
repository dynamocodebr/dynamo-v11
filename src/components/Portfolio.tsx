import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import pfLea from '../img/pf-lea.png';
import pfHomeBlu from '../img/pf-homeblu.png';
import pfEventos from '../img/pf-eventos.png';
import pfBarbearia from '../img/pf-barbearia.png';
import pfShopping from '../img/pf-shopping.png';
import pfBikcraft from '../img/pf-bikcraft.png';
import pfEnergize from '../img/pf-energize.png';


const projects = [
  {
    title: 'Terapeuta Léa',
    description: 'Site One Page desenvolvido para a terapeuta Léa Fischer, destacando sua trajetória, serviços, formas de contato, e etc... Com um design intuitivo e navegação fluida.',
    image: pfLea,
    category: 'One Page',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://leamasterterapeuta.com.br/',
  },
  {
    title: 'Home Blu Imóveis',
    description: 'Site desenvolvido para a imobiliaria Home Blu Imoveis, apresentando os imóveis disponíveis de forma organizada e intuitiva. Conta com  um painel administrativo para cadastro e gerenciamento dos imóveis. ',
    image: pfHomeBlu,
    category: 'Imobiliaria',
    tags: ['HTML', 'CSS', 'JavaScript', 'Wordpress', 'PHP'],
    link: 'https://homebluimoveis.com.br/',
  },
  {
    title: 'Método Energize',
    description: 'Site One Page desenvolvido para o Método Energize, apresentando seus serviços de ginástica laboral em empresas, também apresenta um blog com. Com um design leve e intuitivo, destaca os benefícios da prática e facilita o contato para agendamentos.',
    image: pfEnergize,
    category: 'One Page',
    tags: ['HTML', 'CSS', 'JavaScript', 'Wordpress'],
    link: 'https://metodoenergize.com.br/',
    github: '#'
  },
  {
    title: 'Modelo Shopping',
    description: 'Modelo de site institucional desenvolvido para um possivel shopping. Apresenta categorias de produtos, detalhes individuais e funcionalidades típicas que todo shopping precisa.',
    image: pfShopping,
    category: 'Institucional',
    tags: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'TypeScript'],
    link: 'https://shopping-center-pi.vercel.app/',
    github: '#'
  },
  {
    title: 'Modelo Barbearia',
    description: 'Modelo de site institucional desenvolvido para um possivel barbearia. Apresenta toda a estrutura que o negócio precisa',
    image: pfBarbearia,
    category: 'Institucional',
    tags: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'TypeScript'],
    link: 'https://shopping-center-pi.vercel.app/',
    github: '#'
  },
  {
    title: 'Modelo Eventos',
    description: 'Modelo de site institucional desenvolvido para um possivel site de eventos. Apresenta toda a estrutura que o negócio precisa',
    image: pfEventos,
    category: 'Institucional',
    tags: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'TypeScript'],
    link: 'https://electro-fest.vercel.app/',
    github: '#'
  },
  {
    title: 'Modelo Institucional',
    description: 'Site desenvolvido para a empresa fictícia Bikcraft, especializada na fabricação de bicicletas elétricas artesanais e personalizadas. Apresenta os modelos disponíveis, detalhes dos produtos, informações sobre seguros e formas de contato.',
    image: pfBikcraft,
    category: 'Institucional',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://bikcraft-iota-topaz.vercel.app/',
    github: '#'
  }
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideInterval = 5000000;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, slideInterval);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="portfolio" className="relative py-12 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50/90" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary-light font-semibold tracking-wide uppercase mb-4"
          >
            Nossos Trabalhos
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4"
          >
            Portfólio
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto"
          >
            Conheça alguns dos nossos projetos mais recentes e impactantes
          </motion.p>
        </div>

        <div className="relative">
          {/* Main Slider */}
          <div className="relative h-auto min-h-[400px] sm:h-[500px] mb-6">
            {/* Navigation Buttons - Fixed position */}
            <div className="absolute inset-x-0 top-[150px] sm:top-1/2 -translate-y-1/2 z-10 flex justify-between px-4">
              <motion.button
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition-colors duration-200"
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
              </motion.button>

              <motion.button
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition-colors duration-200"
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
              </motion.button>
            </div>

            {/* Main Slider Content */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={() => setIsAnimating(false)}
                className="lg:absolute inset-0"
              >
                <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:items-center">
                  {/* Project Image */}
                  <div className="relative h-[300px] sm:h-[400px] group">
                    <motion.div
                      className="relative h-full rounded-2xl overflow-hidden shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={projects[currentIndex].image}
                        alt={projects[currentIndex].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary-light/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <motion.a
                          href={projects[currentIndex].link}
                          className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-6 h-6 text-primary-light" />
                        </motion.a>
                        
                      </div>
                    </motion.div>
                  </div>

                  <div className="text-center lg:text-left p-4 sm:p-8">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-block px-4 py-2 rounded-full bg-primary-light/10 text-primary-light font-medium text-sm mb-4"
                    >
                      {projects[currentIndex].category}
                    </motion.span>

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
                    >
                      {projects[currentIndex].title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-base sm:text-lg text-gray-600 mb-6"
                    >
                      {projects[currentIndex].description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
                    >
                      {projects[currentIndex].tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                      <motion.a
                        href={projects[currentIndex].link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-6 py-3 bg-primary-light text-white rounded-lg hover:bg-primary-light/90 transition-colors duration-200 flex items-center justify-center"
                      >
                        Ver Projeto
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </motion.a>
                      
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project Previews - Hidden on mobile */}
          <div className="hidden lg:grid grid-cols-5 gap-4 mt-4">
            {projects.map((project, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative h-24 rounded-lg overflow-hidden ${
                  index === currentIndex ? 'ring-2 ring-primary-light' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-black/50 ${
                  index === currentIndex ? 'bg-opacity-0' : 'bg-opacity-50'
                }`} />
              </motion.button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-200 rounded-full mt-8 overflow-hidden">
            <motion.div
              className="h-full bg-primary-light"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;