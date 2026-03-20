import imgProfile from "../../assets/d1bcbc248585fe73a0e3a41698c41f069fa77726.png";
import svgPaths from "../../imports/svg-xguidl90xa";
import { motion } from 'motion/react';

export default function AboutMe() {
  const skills = [
    "Frontend Development",
    "Mobile / Web Design",
    "Prototipado",
    "Análisis Funcional",
    "UI design",
    "Usability Testing",
    "Arquitectura de la información",
    "Wireframing",
    "User Research",
    "User flows",
    "Data & IA",
    "Backend Development"
  ];

  return (
    <section id="sobre-mi" className="min-h-screen px-6 lg:px-20 py-12 lg:py-20 bg-white">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-24 mb-16 lg:mb-24">
          {/* Profile Image */}
          <div className="shrink-0">
            <img
              src={imgProfile}
              alt="Paula Rodriguez"
              className="w-[200px] h-[200px] lg:w-[254px] lg:h-[244px] rounded-full object-cover"
            />
          </div>

          {/* Title and Description */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-['Orelega_One',sans-serif] text-[56px] lg:text-[96px] text-[#6695a5] mb-6 lg:mb-8 leading-tight text-center">
              Sobre Mi
            </h2>
            <div className="font-['Montserrat',sans-serif] text-[20px] lg:text-[24px] text-[#6695a5] space-y-4">
              <p>Soy estudiante de Ingeniería en Sistemas próxima a recibirme y con alma de diseñadora.</p>
              <p>
                Lo que más disfruto es combinar el análisis funcional con el diseño UX/UI: mi formación técnica me permite entender los problemas desde adentro, hablar el idioma del usuario y traducir todo eso en interfaces simples, funcionales y claras.
              </p>
            </div>
          </div>
        </div>

        {/* Education and Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-24">
          {/* Education Section */}
          <div>
            <h3 className="font-['Orelega_One',sans-serif] text-[40px] lg:text-[48px] text-[#6695a5] mb-4">
              Educación
            </h3>
            <div className="space-y-8">
              {/* Education Item 1 */}
              <div className="space-y-1">
                <p className="font-['Montserrat',sans-serif] font-extralight text-[12px] lg:text-[13px] text-[#6695a5]">| Marzo 2020 - Presente | (95% de carrera completada)</p>
                <p className="font-['Montserrat',sans-serif] font-medium text-[18px] lg:text-[20px] text-[#6695a5]">
                  Ingeniería en Sistemas de Información
                </p>
                <p className="font-['Montserrat',sans-serif] text-[12px] lg:text-[13px] text-[#6695a5]">
                  Universidad Tecnológica Nacional (UTN-FRM)
                </p>

              </div>

              {/* Education Item 2 */}
              <div className="space-y-1">
                <p className="font-['Montserrat',sans-serif] font-medium text-[18px] lg:text-[20px] text-[#6695a5]">
                  Diseño UX/UI
                </p>
                <p className="font-['Montserrat',sans-serif] text-[12px] lg:text-[13px] text-[#6695a5]">
                  Casa del Futuro
                </p>
              </div>

              {/* Education Item 3 */}
              <div className="space-y-1">
                <p className="font-['Montserrat',sans-serif] font-medium text-[18px] lg:text-[20px] text-[#6695a5]">
                  Data Analytics
                </p>
                <p className="font-['Montserrat',sans-serif] text-[12px] lg:text-[13px] text-[#6695a5]">
                  UTN BA
                </p>
              </div>

              {/* Education Item 4 */}
              <div className="space-y-1">
                <p className="font-['Montserrat',sans-serif] font-medium text-[18px] lg:text-[20px] text-[#6695a5]">
                  Diseño de experiencia de usuario
                </p>
                <p className="font-['Montserrat',sans-serif] text-[12px] lg:text-[13px] text-[#6695a5]">
                  Coursera - Google
                </p>
              </div>
            </div>
          </div>

          {/* Lo que puedo ofrecer */}
          <div>
            <h3 className="font-['Orelega_One',sans-serif] text-[40px] lg:text-[48px] text-[#6695a5] mb-6">
              Lo que puedo ofrecer
            </h3>

            <div className="space-y-6">
              
              {/* Item 1 */}
              <p className="font-['Montserrat',sans-serif] text-[16px] lg:text-[18px] text-[#6695a5] leading-relaxed">
                <span className="font-semibold">
                  Compromiso total en el proyecto:
                </span>{" "}
                Doy lo mejor sin importar la etapa del proyecto.
              </p>

              {/* Item 2 */}
              <p className="font-['Montserrat',sans-serif] text-[16px] lg:text-[18px] text-[#6695a5] leading-relaxed">
                <span className="font-semibold">
                  Diseño centrado en el usuario:
                </span>{" "}
                Cada decisión se basa en las necesidades reales, desde el primer boceto hasta el producto final.
              </p>

              {/* Item 3 */}
              <p className="font-['Montserrat',sans-serif] text-[16px] lg:text-[18px] text-[#6695a5] leading-relaxed">
                <span className="font-semibold">
                  Organización y perseverancia:
                </span>{" "}
                Los obstáculos son parte del proceso — no paro hasta encontrar la mejor solución.
              </p>

              {/* Item 4 */}
              <p className="font-['Montserrat',sans-serif] text-[16px] lg:text-[18px] text-[#6695a5] leading-relaxed">
                <span className="font-semibold">
                  Velocidad sin perder criterio:
                </span>{" "}
                Incorporo IA para iterar más rápido sin resignar calidad de diseño.
              </p>

            </div>
        </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16 lg:mb-24">
          <h3 className="font-['Orelega_One',sans-serif] text-[40px] lg:text-[48px] text-[#6695a5] mb-8">
            Skills
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-[15px] border border-[#6695a5] transition-all duration-300 hover:bg-[#6695a5] hover:text-white hover:shadow-md cursor-pointer group"
              >
                <p className="font-['Montserrat',sans-serif] text-[15px] lg:text-[16px] text-[#6695a5] whitespace-nowrap group-hover:text-white transition-colors duration-300">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <h3 className="font-['Orelega_One',sans-serif] text-[40px] lg:text-[48px] text-[#6695a5] mb-8">
            Tools
          </h3>
          <div className="overflow-hidden relative">
            <motion.div
              className="flex gap-8 items-center"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* First set of tools */}
              <div className="flex gap-8 items-center shrink-0">
                {/* Figma */}
                <div className="w-[50px] h-[50px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47 47">
                    <path clipRule="evenodd" d={svgPaths.p20cd9580} fill="#574E4E" fillRule="evenodd" />
                  </svg>
                </div>

                {/* Notion */}
                <div className="w-[50px] h-[50px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47 47">
                    <path clipRule="evenodd" d={svgPaths.p30d87800} fill="white" fillRule="evenodd" />
                    <path d={svgPaths.p15004b40} fill="#574E4E" />
                    <path clipRule="evenodd" d={svgPaths.p35f8d840} fill="#574E4E" fillRule="evenodd" />
                  </svg>
                </div>

                {/* Bootstrap */}
                <div className="w-[50px] h-[50px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47 47">
                    <g clipPath="url(#clip0_5_225)">
                      <path clipRule="evenodd" d={svgPaths.p1b5a9a00} fill="#574E4E" fillRule="evenodd" />
                    </g>
                    <defs>
                      <clipPath id="clip0_5_225">
                        <rect fill="white" height="47" width="47" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                {/* HTML5 */}
                <div className="w-[50px] h-[50px] shrink-0 flex items-center justify-center">
                  <svg className="block w-[36px] h-[50px]" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 33.2328 46.908">
                    <path d={svgPaths.p9dbc100} fill="#574E4E" />
                  </svg>
                </div>

                {/* CSS3 */}
                <div className="w-[50px] h-[50px] shrink-0 flex items-center justify-center">
                  <svg className="block w-[36px] h-[50px]" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 33.4866 46.9079">
                    <path d={svgPaths.p30eb8100} fill="#574E4E" />
                  </svg>
                </div>

                {/* JavaScript */}
                <div className="w-[50px] h-[50px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47 47">
                    <g clipPath="url(#clip0_5_236)">
                      <path d={svgPaths.p96a8580} fill="#444444" />
                    </g>
                    <defs>
                      <clipPath id="clip0_5_236">
                        <rect fill="white" height="47" width="47" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                {/* React */}
                <div className="w-[50px] h-[50px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47 47">
                    <path d={svgPaths.p1a5e3800} fill="#574E4E" />
                    <path clipRule="evenodd" d={svgPaths.p37d36f80} fill="#574E4E" fillRule="evenodd" />
                  </svg>
                </div>

                {/* Java */}
                <div className="w-[50px] h-[50px] shrink-0 flex items-center justify-center">
                  <svg className="block w-[38px] h-[50px]" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 34.6485 46.9083">
                    <path d={svgPaths.p35e74000} fill="#574E4E" />
                  </svg>
                </div>

                {/* Spring */}
                <div className="w-[50px] h-[50px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47 47">
                    <path d={svgPaths.p3cf50c70} fill="#574E4E" />
                    <path d={svgPaths.p4215c00} fill="#574E4E" />
                    <path d={svgPaths.p2f3ce500} fill="white" />
                  </svg>
                </div>

                {/* MySQL */}
                <div className="w-[50px] h-[50px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47 47">
                    <path d={svgPaths.p25e3eac0} fill="#574E4E" />
                  </svg>
                </div>

                {/* GitHub */}
                <div className="w-[50px] h-[50px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47 47">
                    <path clipRule="evenodd" d={svgPaths.p1beba180} fill="#574E4E" fillRule="evenodd" />
                  </svg>
                </div>

                {/* Python */}
                <div className="w-[50px] h-[50px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47 47">
                    <path d={svgPaths.p336b2700} fill="#574E4E" />
                  </svg>
                </div>

                {/* Looker */}
                <div className="w-[80px] h-[50px] shrink-0 flex items-center justify-center">
                  <svg className="block w-[80px] h-[22px]" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 68.0004 18.0641">
                    <path d={svgPaths.p3fc44bc0} fill="#34A853" />
                    <path d={svgPaths.pb88700} fill="#FBBC04" />
                    <path d={svgPaths.p38315e00} fill="#EA4335" />
                    <path d={svgPaths.p14d26a80} fill="#4285F4" />
                    <path d={svgPaths.p2e5dc9f0} fill="#5F6368" />
                  </svg>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex gap-8 items-center shrink-0">
                {/* Figma */}
                <div className="w-[50px] h-[50px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47 47">
                    <path clipRule="evenodd" d={svgPaths.p20cd9580} fill="#574E4E" fillRule="evenodd" />
                  </svg>
                </div>

                {/* Notion */}
                <div className="w-[50px] h-[50px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47 47">
                    <path clipRule="evenodd" d={svgPaths.p30d87800} fill="white" fillRule="evenodd" />
                    <path d={svgPaths.p15004b40} fill="#574E4E" />
                    <path clipRule="evenodd" d={svgPaths.p35f8d840} fill="#574E4E" fillRule="evenodd" />
                  </svg>
                </div>

                {/* Bootstrap */}
                <div className="w-[50px] h-[50px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47 47">
                    <g clipPath="url(#clip0_5_225_2)">
                      <path clipRule="evenodd" d={svgPaths.p1b5a9a00} fill="#574E4E" fillRule="evenodd" />
                    </g>
                    <defs>
                      <clipPath id="clip0_5_225_2">
                        <rect fill="white" height="47" width="47" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                {/* HTML5 */}
                <div className="w-[50px] h-[50px] shrink-0 flex items-center justify-center">
                  <svg className="block w-[36px] h-[50px]" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 33.2328 46.908">
                    <path d={svgPaths.p9dbc100} fill="#574E4E" />
                  </svg>
                </div>

                {/* CSS3 */}
                <div className="w-[50px] h-[50px] shrink-0 flex items-center justify-center">
                  <svg className="block w-[36px] h-[50px]" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 33.4866 46.9079">
                    <path d={svgPaths.p30eb8100} fill="#574E4E" />
                  </svg>
                </div>

                {/* JavaScript */}
                <div className="w-[50px] h-[50px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47 47">
                    <g clipPath="url(#clip0_5_236_2)">
                      <path d={svgPaths.p96a8580} fill="#444444" />
                    </g>
                    <defs>
                      <clipPath id="clip0_5_236_2">
                        <rect fill="white" height="47" width="47" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                {/* React */}
                <div className="w-[50px] h-[50px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47 47">
                    <path d={svgPaths.p1a5e3800} fill="#574E4E" />
                    <path clipRule="evenodd" d={svgPaths.p37d36f80} fill="#574E4E" fillRule="evenodd" />
                  </svg>
                </div>

                {/* Java */}
                <div className="w-[50px] h-[50px] shrink-0 flex items-center justify-center">
                  <svg className="block w-[38px] h-[50px]" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 34.6485 46.9083">
                    <path d={svgPaths.p35e74000} fill="#574E4E" />
                  </svg>
                </div>

                {/* Spring */}
                <div className="w-[50px] h-[50px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47 47">
                    <path d={svgPaths.p3cf50c70} fill="#574E4E" />
                    <path d={svgPaths.p4215c00} fill="#574E4E" />
                    <path d={svgPaths.p2f3ce500} fill="white" />
                  </svg>
                </div>

                {/* MySQL */}
                <div className="w-[50px] h-[50px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47 47">
                    <path d={svgPaths.p25e3eac0} fill="#574E4E" />
                  </svg>
                </div>

                {/* GitHub */}
                <div className="w-[50px] h-[50px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47 47">
                    <path clipRule="evenodd" d={svgPaths.p1beba180} fill="#574E4E" fillRule="evenodd" />
                  </svg>
                </div>

                {/* Python */}
                <div className="w-[50px] h-[50px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 47 47">
                    <path d={svgPaths.p336b2700} fill="#574E4E" />
                  </svg>
                </div>

                {/* Looker */}
                <div className="w-[80px] h-[50px] shrink-0 flex items-center justify-center">
                  <svg className="block w-[80px] h-[22px]" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 68.0004 18.0641">
                    <path d={svgPaths.p3fc44bc0} fill="#34A853" />
                    <path d={svgPaths.pb88700} fill="#FBBC04" />
                    <path d={svgPaths.p38315e00} fill="#EA4335" />
                    <path d={svgPaths.p14d26a80} fill="#4285F4" />
                    <path d={svgPaths.p2e5dc9f0} fill="#5F6368" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}