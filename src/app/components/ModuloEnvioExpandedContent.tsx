import svgPaths from "../../imports/svg-uhvwz848hx";
import imgInterfaz from "../../assets/interfazme.png";
import imgUS from "../../assets/imageUS.png";
import imgRq from "../../assets/imageRq.png";

export default function ModuloEnvioExpandedContent() {
  return (
    <div className="space-y-12">
      {/* Contexto, Problema, Solución */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {/* Contexto */}
        <div className="bg-[#fafdff] border border-[#bcc8d1] rounded-[15px] p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#6695a5]">
          <h4 className="font-['Montserrat',sans-serif] font-bold text-[18px] text-[#6695a5] mb-3 text-center">
            CONTEXTO
          </h4>
          <p className="font-['Montserrat',sans-serif] text-[15px] text-gray-700 leading-relaxed">
            Módulo de gestión de envíos para un sistema logístico, que permite a los operadores visualizar, buscar y administrar el estado de los envíos desde un solo lugar.
          </p>
        </div>

        {/* Problema */}
        <div className="bg-[#fafdff] border border-[#bcc8d1] rounded-[15px] p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#6695a5]">
          <h4 className="font-['Montserrat',sans-serif] font-bold text-[18px] text-[#6695a5] mb-3 text-center">
            PROBLEMA
          </h4>
          <p className="font-['Montserrat',sans-serif] text-[15px] text-gray-700 leading-relaxed">
            Gestionar envíos se vuelve complejo cuando la información está dispersa o los estados no se actualizan con claridad, dificultando el seguimiento y control de los pedidos.
          </p>
        </div>

        {/* Solución */}
        <div className="bg-[#fafdff] border border-[#bcc8d1] rounded-[15px] p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#6695a5]">
          <h4 className="font-['Montserrat',sans-serif] font-bold text-[18px] text-[#6695a5] mb-3 text-center">
            SOLUCIÓN
          </h4>
          <p className="font-['Montserrat',sans-serif] text-[15px] text-gray-700 leading-relaxed">
            Diseñé un módulo que permite a los operadores visualizar envíos, buscar por número de orden y actualizar estados, mejorando el seguimiento y la gestión de la información.
          </p>
        </div>
      </div>

      {/* Mi proceso */}
      <div>
        <h3 className="font-['Montserrat',sans-serif] font-bold text-[24px] lg:text-[28px] text-[#6695a5] mb-8 text-center">
          Mi proceso
        </h3>

        {/* Process visualization - Replicando diseño de Figma */}
        <div className="relative w-full max-w-[1200px] mx-auto px-4 mb-16">
          {/* Contenedor principal */}
          <div className="relative min-h-[350px]">
            
            {/* Líneas onduladas conectoras - Desktop only */}
            <div className="hidden lg:block absolute top-[30px] left-[20%] right-[20%] h-[38px]">
              <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 706.343 40.2861">
                <path d={svgPaths.p3f48e600} stroke="#BCC8D1" strokeOpacity="0.65" strokeDasharray="10 5" className="animate-[dash_20s_linear_infinite]" />
              </svg>
            </div>

            {/* Grid de 3 columnas */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
              
              {/* Columna 1: Análisis */}
              <div className="flex flex-col items-center">
                {/* Círculo con ícono */}
                <div className="relative w-[90px] h-[87px] mb-8">
                  <svg className="absolute w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 87">
                    <path d={svgPaths.p32a32e80} fill="#FAFDFF" stroke="#BCC8D1" />
                  </svg>
                  {/* Ícono File Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Ícono Usuario */}
                    <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-[40px] h-[40px]" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="8" r="4" stroke="#6695A5" strokeWidth="1"/>
                        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="#6695A5" strokeWidth="1"/>
                    </svg>
                    </div>
                  </div>
                </div>

                {/* Título */}
                <h4 className="font-['Montserrat',sans-serif] font-medium text-[20px] text-[#6695a5] mb-4">
                  Análisis
                </h4>

                {/* Lista */}
                <ul className="font-['Montserrat',sans-serif] text-[13px] text-black leading-[18px] list-disc ml-6 space-y-2 max-w-[296px]">
                  <li className="mx-[0px] mt-[0px] mb-[6px]">Identificación de necesidades de los operadores</li>
                  <li className="mx-[0px] mt-[0px] mb-[6px]">Definición de Requerimientos</li>
                  <li>Elaboración de historias de usuario con criterios de aceptación</li>
                </ul>
              </div>

              {/* Columna 2: Diseño */}
              <div className="flex flex-col items-center">
                {/* Círculo con ícono */}
                <div className="relative w-[90px] h-[87px] mb-8">
                  <svg className="absolute w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 87">
                    <path d={svgPaths.p32a32e80} fill="#FAFDFF" stroke="#BCC8D1" />
                  </svg>
                  {/* Ícono Figma (Grid) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-[40px] h-[39px]" fill="none" preserveAspectRatio="none" viewBox="0 0 40 39">
                      <path clipRule="evenodd" d={svgPaths.p3708be30} fill="#6695A5" fillOpacity="0.5" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Título */}
                <h4 className="font-['Montserrat',sans-serif] font-medium text-[20px] text-[#6695a5] mb-4">
                  Diseño
                </h4>

                {/* Lista */}
                <ul className="font-['Montserrat',sans-serif] text-[13px] text-black leading-[18px] list-disc ml-6 space-y-2 max-w-[281px]">
                  <li className="mx-[0px] mt-[0px] mb-[6px]">Diseño de flujos de usuario</li>
                  <li>Diseño de la interfaz</li>
                </ul>
              </div>

              {/* Columna 3: Desarrollo */}
              <div className="flex flex-col items-center">
                {/* Círculo con ícono */}
                <div className="relative w-[90px] h-[87px] mb-8">
                  <svg className="absolute w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 87">
                    <path d={svgPaths.p32a32e80} fill="#FAFDFF" stroke="#BCC8D1" />
                  </svg>
                  {/* Ícono Laptop */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-[41px] h-[26px]" fill="none" preserveAspectRatio="none" viewBox="0 0 41 25.834">
                      <path d={svgPaths.p17d8a2f0} fill="#6695A5" fillOpacity="0.65" />
                    </svg>
                  </div>
                </div>

                {/* Título */}
                <h4 className="font-['Montserrat',sans-serif] font-medium text-[20px] text-[#6695a5] mb-4">
                  Validación
                </h4>

                {/* Lista */}
                <ul className="font-['Montserrat',sans-serif] text-[13px] text-black leading-[18px] list-disc ml-6 space-y-2 max-w-[248px]">
                  <li className="mx-[0px] mt-[0px] mb-[6px]">Desarrollo de Casos de prueba </li>
                  <li >Testing automatizado con Cypress</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Prototipo y documentación */}
      <div className="relative">
        {/* Grid con interfaz y documentación */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 mt-[-60px]">
          {/* interfaz modulo envio - imagen izquierda */}
          <div className="w-full">
            <img 
              src={imgInterfaz} 
              alt="Interfaz - Modulo envío" 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          {/* Documentación - imagen derecha */}
          <div className="relative w-full h-full min-h-[300px]">
            {/* Imagen base */}
            <img 
                src={imgUS} 
                alt="Historia de usuario realizada" 
                className="w-full h-auto object-contain rounded-lg"
            />
            {/* Imagen superpuesta */}
            <img 
                src={imgRq} 
                alt="Requerimientos" 
                className="absolute bottom-[20px] left-[-15px] w-[90%] h-auto object-contain rounded-lg shadow-md"
            />

            </div>
        </div>
      </div>


      {/* Aprendizaje */}
      <div className="bg-[#fafdff] border-l-[6px] border-[#bcc8d1] rounded-[15px] p-8">
        <h4 className="font-['Montserrat',sans-serif] font-bold text-[#6695a5] mb-4 text-[18px]">
          APRENDIZAJE
        </h4>
        <p className="font-['Montserrat',sans-serif] text-gray-700 leading-relaxed mb-4 text-[15px]">
        Este proyecto me permitió integrar el diseño de la experiencia con el análisis funcional. Además de diseñar la interfaz, planifiqué su futura validación mediante la definición de criterios de aceptación y test cases, lo que me permitió anticipar escenarios de uso y asegurar que el diseño pudiera ser evaluado correctamente durante la etapa de testing.
        </p>
      </div>

      {/* Call to Action Button */}
      <div className="flex justify-center pt-4">
        <a 
          href="https://github.com/PauRodriguezz/shipping_management_system_analysis"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#6695a5] text-white px-8 py-4 rounded-[12px] font-['Montserrat',sans-serif] text-[16px] hover:bg-[#557a88] transition-colors shadow-md inline-block mt-[-20px]"
        >
          Ver documentación ↗
        </a>
      </div>
    </div>
  );
}