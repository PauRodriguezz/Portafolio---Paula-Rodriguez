import imgCatComputer from "../../assets/80acfc0c7b90218ea96865be1f5ab2788b50fad7.png";
import imgNestly from "../../assets/f7e6f3dce9ebef6b43d6acdf8624aa43bcdbc010.png";
import imgElBuenSabor from "../../assets/93f33c1b960490f021ef1e50917aca70811c71d0.png";
import imgCookor from "../../assets/524aa2e08ce70ab81dd470498fbd5cf881e40338.png";
import imgModuloEnvios from "../../assets/0949a49469739fc136ce7ce3ffa37fb4f3099391.png";
import imgGatito from "../../assets/unnamed.jpg";
import { motion } from 'motion/react';
import FloatingCircles from './FloatingCircles';
import { StarLarge, StarMedium, StarSmall } from './DecorativeStars';
import AboutMe from './AboutMe';
import ProjectCard from './ProjectCard';
import NestlyExpandedContent from './NestlyExpandedContent';
import ElBuenSaborExpandedContent from './ElBuenSaborExpandedContent';
import CookorExpandedContent from './CookorExpandedContent';
import ModuloEnvioExpandedContent from './ModuloEnvioExpandedContent';
import { Mail } from 'lucide-react';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative bg-white overflow-hidden min-h-screen">
      <div className="fixed inset-0 pointer-events-none z-0">
        <FloatingCircles />
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 py-32">
        {/* Floating Circles Animation */}
        
        
        {/* Decorative Stars - Hidden on mobile for cleaner look */}
        <StarLarge className="absolute w-[7px] h-[8px] top-[57px] left-[93px] hidden lg:block" />
        <StarLarge className="absolute w-[7px] h-[8px] top-[183px] left-[231px] hidden lg:block" />
        <StarSmall className="absolute w-[2.5px] h-[3px] top-[191px] left-[228px] hidden lg:block" />
        <StarLarge className="absolute w-[7px] h-[8px] top-[242px] left-[1043px] hidden xl:block" />
        <StarMedium className="absolute w-[7px] h-[6px] top-[565px] left-[1034px] hidden xl:block" />
        <StarSmall className="absolute w-[2.5px] h-[3px] top-[574px] left-[1045px] hidden xl:block" />
        <StarMedium className="absolute w-[7px] h-[6px] top-[589px] left-[651px] hidden lg:block" />
        <StarSmall className="absolute w-[2.5px] h-[3px] top-[598px] left-[662px] hidden lg:block" />
        <StarMedium className="absolute w-[7px] h-[6px] top-[627px] left-[1226px] hidden xl:block" />
        <StarSmall className="absolute w-[2.5px] h-[3px] top-[636px] left-[1237px] hidden xl:block" />
        <StarMedium className="absolute w-[7px] h-[6px] top-[692px] left-[234px] hidden lg:block" />
        <StarSmall className="absolute w-[2.5px] h-[3px] top-[701px] left-[245px] hidden lg:block" />

        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              {/* Available for work badge */}
              <div className="inline-flex items-center gap-6 bg-[#f4f6f6] px-5 py-3 rounded-[15px] border border-[#6695a5]">
                <motion.div 
                  className="w-[15px] h-[15px] relative shrink-0"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                    <circle cx="7.5" cy="7.5" fill="#6695A5" r="7.5" />
                  </svg>
                </motion.div>
                <p className="font-['Montserrat',sans-serif] text-[15px] text-[#574e4e]">
                  Disponible para colaborar
                </p>
              </div>

              {/* Cat Illustration - Mobile only */}
              <div className="flex justify-center lg:hidden -my-4">
                <img
                  src={imgCatComputer}
                  alt="Ilustración de un gato con una computadora"
                  className="w-full max-w-[250px] h-[200px] object-cover object-center"
                />
              </div>

              {/* Main heading */}
              <h1 className="font-['Orelega_One',sans-serif] text-[56px] sm:text-[72px] lg:text-[96px] text-[#6695a5] leading-tight mt-4 lg:mt-0">
                Paula Rodriguez
              </h1>

              {/* Subtitle */}
              <p className="font-['Oooh_Baby',sans-serif] text-[28px] sm:text-[32px] text-[#6695a5]">
                Ingeniera en Sistemas - Diseñadora UX/UI
              </p>

              {/* Description */}
              <div className="font-['Montserrat',sans-serif] text-[20px] sm:text-[24px] text-[#6695a5] space-y-1">
                <p>Me apasiona convertir problemas complejos en interfaces claras, pensando siempre en la persona del otro lado de la pantalla.</p>
    
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button
                  onClick={() => scrollToSection('proyectos')}
                  className="bg-[#6695a5] text-white px-8 py-4 rounded-[15px] border border-[#b5dde9] font-['Montserrat',sans-serif] text-[20px] sm:text-[24px] hover:bg-[#557a88] transition-colors"
                >
                  Ver proyectos
                </button>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="bg-transparent text-[#6695a5] px-8 py-4 rounded-[15px] border border-[#6695a5] font-['Montserrat',sans-serif] text-[20px] sm:text-[24px] hover:bg-[#6695a5] hover:text-white transition-colors"
                >
                Contactame
                </button>
              </div>

              {/* Scroll indicator */}
              <p className="font-['Montserrat',sans-serif] text-[16px] text-[#6695a5] bottom-28 hidden lg:block">
                Desplázate para explorar
              </p>
            </div>

            {/* Right Content - Cat Illustration */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={imgCatComputer}
                alt="Ilustración de un gato con una computadora"
                className="hidden lg:block w-full max-w-[400px] lg:max-w-[500px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <AboutMe />

      {/* Placeholder sections for navigation */}
      <section id="proyectos" className="min-h-screen px-6 lg:px-20 py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl w-full mx-auto">
          <h2 className="font-['Orelega_One',sans-serif] text-[48px] lg:text-[72px] text-[#6695a5] mb-12 text-center">
            Proyectos
          </h2>
          
          <div className="space-y-8">
            {/* Nestly */}
            <ProjectCard
              title="Nestly"
              description="App que conecta familias con prestadores de servicios de cuidado y limpieza de forma simple, confiable y segura."
              tags={['Case study', 'UX/UI']}
              tools={['Figma', 'User Research', 'Usability Testing', 'Arquitectura de la información', 'Wireframes', 'Prototipo', 'Design System']}
              imageUrl={imgNestly}
              gradientFrom="#E8D5F2"
              gradientTo="#B8D5E8"
              expandedContent={<NestlyExpandedContent />}
              behanceLink="https://www.behance.net/gallery/241127055/Nestly-UXUI-Design-Case-Study"
              buttonLabel = "Ver en Behance ↗"
            />

            {/* El buen sabor */}
            <ProjectCard
              title="El buen sabor"
              description="Sistema de gestión para restaurantes que integra pedidos online y administración interna, mejorando la experiencia del cliente y la organización del negocio."
              tags={['App Desktop', 'UX/UI', 'Desarrollo Full Stack']}
              tools={['Figma', 'UX Research', 'Prototipado', 'Análisis Funcional', 'Design System']}
              imageUrl={imgElBuenSabor}
              gradientFrom="#FFE8D5"
              gradientTo="#FFF4E8"
              buttonColor="#e8845a"
              buttonHoverColor="#d67548"
              tagBgColor="rgba(232,132,90,0.24)"
              tagTextColor="#eb4f42"
              toolBorderColor="#f2c9b8"
              toolTextColor="#ea4335"
              titleColor="#e8845a"
              expandedContent={<ElBuenSaborExpandedContent />}
              hideSecondaryButton={true}
            />

            {/* Cookor */}
            <ProjectCard
              title="Cookor"
              description="Aplicación que permite descubrir recetas utilizando los ingredientes disponibles en casa, simplificando la planificación de comidas"
              tags={['Case study', 'UX/UI', 'Mobile']}
              tools={['Figma', 'UX Research', 'Prototipado', 'Arquitectura de la información', 'Design System']}
              imageUrl={imgCookor}
              gradientFrom="#EAF9F2"
              gradientTo="#EAF9F2"
              buttonColor="#00C896"
              buttonHoverColor="#00A67A"
              tagBgColor="#D5F9ED"
              tagTextColor="#00C896"
              toolBorderColor="#00C896"
              toolTextColor="#00C896"
              titleColor="#00C896"
              expandedContent={<CookorExpandedContent />}
              behanceLink="https://www.behance.net/gallery/216129647/Cookor-App-de-Recetas-Saludables"
              buttonLabel = "Ver en Behance ↗"
            />

            {/* Modulo de envios */}
            <ProjectCard
              title="Modulo de envíos"
              description="Módulo de gestión de envíos diseñado para facilitar el seguimiento y la actualización de estados, permitiendo a los operadores logísticos administrar pedidos de forma clara y eficiente."
              tags={['App Desktop', 'UX/UI']}
              tools={['Figma', 'UX Research', 'Analisis Funcional', 'Prototipado', 'Historias de usuario', 'Test Cases']}
              imageUrl={imgModuloEnvios}
              gradientFrom="#A7C7E7"
              gradientTo="#D6EAF8"
              expandedContent={<ModuloEnvioExpandedContent />}
              behanceLink="https://github.com/PauRodriguezz/shipping_management_system_analysis"
              buttonLabel = "Ver documentos ↗"
            />
          </div>
        </div>
      </section>

      <section id="contacto" className="flex items-center justify-center px-6 lg:px-20 bg-white py-20">
        <div className="max-w-7xl w-full mx-auto text-center -translate-y-16">
          <h2 className="font-['Orelega_One',sans-serif] text-[48px] lg:text-[72px] text-[#6695a5] mb-8">
           Encontrame acá 
          </h2>
    
          {/* Texto */}
          <p className="font-['Montserrat',sans-serif] text-[18px] lg:text-[22px] text-[#6695a5] mb-10">
            Si te interesa conocer más sobre mi trabajo, estaré encantada de conversar.
          </p>

          {/* Contacto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 justify-items-center max-w-[700px] mx-auto">

            {/* Email */}
            <a 
              href="mailto:paurodriguez028@gmail.com"
              className="flex items-center gap-3 text-[#6695a5] font-['Montserrat',sans-serif] text-[18px] hover:underline w-[320px]"
            >
              <Mail size={30} />
              paurodriguez028@gmail.com
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/paula--rodriguez/"
              target="_blank"
              className="flex items-center gap-3 text-[#6695a5] font-['Montserrat',sans-serif] text-[18px] hover:underline w-[320px]"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#6695a5">
                <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 
                0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20.45H3.56V9h3.56v11.45zM5.34 
                7.54c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.07 2.06-2.07 
                1.14 0 2.06.93 2.06 2.07 0 1.14-.92 2.07-2.06 2.07zM20.45 
                20.45h-3.56v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 
                0-2.14 1.45-2.14 2.96v5.7H9.33V9h3.42v1.56h.05c.48-.91 
                1.65-1.86 3.4-1.86 3.63 0 4.3 2.39 4.3 5.49v6.26z"/>
              </svg>
              Paula Rodriguez
            </a>
                        {/* Behance */}
            <a 
              href="https://www.behance.net/paularodriguezz"
              target="_blank"
              className="flex items-center gap-3 text-[#6695a5] font-['Montserrat'] text-[18px] hover:underline w-[320px]"
            >
              {/* SVG Behance */}
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#6695a5">
                <path d="M22 7h-7V5h7v2zm-9.5 3.5c.8-.4 1.5-1.2 
                1.5-2.5 0-2.1-1.7-3-3.8-3H2v14h8.5c2.5 0 
                4.5-1.3 4.5-3.8 0-1.8-1.2-2.9-2.5-3.2zM6 
                7h3c1 0 1.5.5 1.5 1.2S10 9.5 9 9.5H6V7zm3.2 
                9H6v-3h3.2c1.2 0 1.8.6 1.8 1.5S10.4 16 
                9.2 16zM22 14.5c0-3.3-2.4-5.5-5.5-5.5S11 
                11.2 11 14.5c0 3.2 2.4 5.5 5.5 5.5 2.4 0 
                4.3-1.2 5.1-3h-2.5c-.5.7-1.4 1.2-2.6 
                1.2-1.6 0-2.7-.9-2.9-2.3H22v-1.4zm-8.3-.8c.2-1.3 
                1.2-2.2 2.8-2.2 1.5 0 2.6.9 2.7 2.2h-5.5z"/>
              </svg>
              Paula Rodriguez
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/PauRodriguezz"
              target="_blank"
              className="flex items-center gap-3 text-[#6695a5] font-['Montserrat'] text-[18px] hover:underline w-[320px]"
            >
              {/* SVG GitHub */}
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#6695a5">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 
              11.38.6.1.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 
              1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 
              1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.93 
              0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 
              0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 
              0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 
              1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 
              3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 
              2.22 0 1.6-.01 2.88-.01 3.27 0 .32.21.69.82.57A12.01 
              12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>  
              Pau Rodriguezz
            </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 mt-6">
        {/* Texto */}
        {/* Imagen */}
        <img 
          src={imgGatito}
          alt="Gatito"
          className="w-[150px] h-auto object-contain"
        />
        <p className="font-['Oooh_Baby',sans-serif] text-[24px] text-[#6695a5] leading-snug max-w-[300px] text-center">
          Gracias por llegar hasta acá
        </p>


      </div>
        </div>
      </section>


    </main>
  );
}