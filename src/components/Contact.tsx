import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Clock, Send, Twitter, Linkedin, Instagram, Github, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'contato@dynamocode.com',
    link: 'mailto:contato@dynamocode.com'
  },
  {
    icon: Phone,
    title: 'Telefone',
    content: '+55 (11) 99999-9999',
    link: 'tel:+5511999999999'
  },
  {
    icon: MapPin,
    title: 'Endereço',
    content: 'São Paulo, SP - Brasil',
    link: '#'
  },
  {
    icon: Clock,
    title: 'Horário',
    content: 'Seg-Sex: 9h às 18h',
    link: '#'
  }
];

const socialLinks = [
  { icon: Twitter, name: 'Twitter', link: '#' },
  { icon: Linkedin, name: 'LinkedIn', link: '#' },
  { icon: Instagram, name: 'Instagram', link: '#' },
  { icon: Github, name: 'GitHub', link: '#' }
];

const serviceOptions = [
  'Desenvolvimento Web',
  'E-commerce',
  'Design UI/UX',
  'Aplicativo Mobile',
  'SEO',
  'Consultoria',
  'Outro'
];

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    
    // Simula o envio do formulário
    setTimeout(() => {
      setIsSubmitted(true);
      // Reseta o formulário após 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: '',
        });
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      {/* Background fixo da seção */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,144,255,0.1),transparent_70%)]"></div>
      <div className="absolute top-1/3 -left-64 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary-light font-semibold tracking-wide uppercase mb-2"
          >
            Fale Conosco
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Vamos criar algo incrível juntos
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Conte-nos sobre seu projeto e descubra como podemos ajudar a transformar sua visão em realidade
          </motion.p>
        </div>
  
        <div ref={ref} className="relative max-w-6xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* Formulário */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
                    <p className="text-gray-600 mb-6">Obrigado pelo seu contato. Retornaremos em breve.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Nome Completo <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 transition-all duration-200"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 transition-all duration-200"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
  
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 transition-all duration-200"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 transition-all duration-200"
                          placeholder="Nome da sua empresa"
                        />
                      </div>
                    </div>
  
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                          Serviço de Interesse <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 transition-all duration-200"
                        >
                          <option value="" disabled>Selecione um serviço</option>
                          {serviceOptions.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                          Orçamento Estimado
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formState.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 transition-all duration-200"
                        >
                          <option value="" disabled>Selecione uma faixa</option>
                          <option value="Até R$ 5.000">Até R$ 5.000</option>
                          <option value="R$ 5.000 - R$ 10.000">R$ 5.000 - R$ 10.000</option>
                          <option value="R$ 10.000 - R$ 20.000">R$ 10.000 - R$ 20.000</option>
                          <option value="R$ 20.000 - R$ 50.000">R$ 20.000 - R$ 50.000</option>
                          <option value="Acima de R$ 50.000">Acima de R$ 50.000</option>
                        </select>
                      </div>
                    </div>
  
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Detalhes do Projeto <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 transition-all duration-200 resize-none"
                        placeholder="Descreva seu projeto, objetivos e expectativas..."
                      />
                    </div>
  
                    <div className="flex items-center">
                      <input
                        id="privacy"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-primary-light border-gray-300 rounded focus:ring-primary-light"
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                        Concordo com a <a href="#" className="text-primary-light hover:underline">Política de Privacidade</a>
                      </label>
                    </div>
  
                    {/* Botão de Envio com efeito de background animado */}
                    <div className="relative">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative w-full py-4 bg-[#142D55] text-white rounded-xl font-medium shadow-lg shadow-[#142D55]/20 hover:shadow-[#142D55]/30 transition-all duration-300 flex items-center justify-center overflow-hidden group"
                      >
                        <span className="relative">Enviar Mensagem</span>
                        <Send className="relative w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        <motion.div 
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `linear-gradient(to right, rgba(20,45,85,0.1) 1px, transparent 1px),
                                              linear-gradient(to bottom, rgba(20,45,85,0.1) 1px, transparent 1px)`,
                            backgroundSize: '50px 50px'
                          }}
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.4, 0.3],
                          }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.button>
                    </div>
                  </form>
                )}
              </div>
  
              {/* Área de Informações com efeito de background animado */}
              <div className="lg:col-span-2 relative">
                <div className="absolute inset-0 overflow-hidden">
                  {/* Base animada semelhante à seção de Serviços */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-dark/90" />
                  <motion.div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(74,144,255,0.1) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(74,144,255,0.1) 1px, transparent 1px)`,
                      backgroundSize: '50px 50px'
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.4, 0.3],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
  
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute w-1 h-1 rounded-full bg-primary-light/40"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [-20, 20, -20],
                        x: [-20, 20, -20],
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
  
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={`orb-${i}`}
                      className="absolute rounded-full"
                      style={{
                        width: `${300 + i * 150}px`,
                        height: `${300 + i * 150}px`,
                        filter: 'blur(80px)',
                        background: `radial-gradient(circle at center, rgba(74,144,255,${0.15 - i * 0.03}) 0%, transparent 70%)`,
                      }}
                      animate={{
                        x: [
                          `${Math.random() * 40}%`,
                          `${Math.random() * 40 + 20}%`,
                          `${Math.random() * 40}%`,
                        ],
                        y: [
                          `${Math.random() * 40}%`,
                          `${Math.random() * 40 + 20}%`,
                          `${Math.random() * 40}%`,
                        ],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 15 + i * 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
  
                <div className="relative h-full p-8 lg:p-12">
                  <div className="h-full flex flex-col">
                    <div className="mb-10">
                      <h3 className="text-xl font-semibold text-white mb-2">Informações de Contato</h3>
                      <p className="text-white/80">Estamos prontos para atender você por diversos canais</p>
                    </div>
                    
                    <div className="flex-grow space-y-8">
                      {contactInfo.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <motion.a
                            key={index}
                            href={item.link}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start space-x-4 text-white group"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                              <p className="text-white/80">{item.content}</p>
                            </div>
                          </motion.a>
                        );
                      })}
                    </div>
  
                    <div className="mt-12">
                      <h4 className="text-white text-lg font-semibold mb-4">Nos siga</h4>
                      <div className="flex space-x-4">
                        {socialLinks.map((social) => {
                          const Icon = social.icon;
                          return (
                            <motion.a
                              key={social.name}
                              href={social.link}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                            >
                              <Icon className="w-5 h-5 text-white" />
                            </motion.a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Fim da Área de Informações */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
