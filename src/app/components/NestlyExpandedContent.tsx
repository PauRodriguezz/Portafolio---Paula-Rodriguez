import imgIPhone15Pro from "figma:asset/f7e6f3dce9ebef6b43d6acdf8624aa43bcdbc010.png";
import imgImage23 from "../../assets/b1734bb1b472ec1f7d2626eff95327654e6f4762.png";
import imgImage24 from "../../assets/afadb43a4058d68b76750093c8c927197b910ff0.png";
import imgImage25 from "../../assets/4d06db547a8eb23e211bed601e774c9d488a7a70.png";
import { MessageCircleHeart, Search, Lightbulb, PenTool, Users } from 'lucide-react';

export default function NestlyExpandedContent() {
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
            App ideada para facilitar la contratación de servicios de cuidado y limpieza mediante perfiles detallados y referencias sin que el ajetreo dificulte la vida de las personas.
          </p>
        </div>

        {/* Problema */}
        <div className="bg-[#fafdff] border border-[#bcc8d1] rounded-[15px] p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#6695a5]">
          <h4 className="font-['Montserrat',sans-serif] font-bold text-[18px] text-[#6695a5] mb-3 text-center">
            PROBLEMA
          </h4>
          <p className="font-['Montserrat',sans-serif] text-[15px] text-gray-700 leading-relaxed">
            Las familias buscan disponer de prestadores de servicios informados para garantizar confianza, agilizar búsquedas, generar poca información, bajo precio de la aplicación y contar para cualquier tipo de requerimiento sin que sea complejo.
          </p>
        </div>

        {/* Solución */}
        <div className="bg-[#fafdff] border border-[#bcc8d1] rounded-[15px] p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#6695a5]">
          <h4 className="font-['Montserrat',sans-serif] font-bold text-[18px] text-[#6695a5] mb-3 text-center">
            SOLUCIÓN
          </h4>
          <p className="font-['Montserrat',sans-serif] text-[15px] text-gray-700 leading-relaxed">
            Diseñar una app que permite explorar prestadores de servicios, verificados, con reseñas, que faciliten la elección, filtrar de una interfaz clara y conectarlos a través de una interfaz clara.
          </p>
        </div>
      </div>

      {/* Mi proceso */}
      <div>
        <h3 className="font-['Montserrat',sans-serif] font-bold text-[24px] lg:text-[28px] text-[#6695a5] mb-8 text-center">
          Mi proceso
        </h3>
        <p className="font-['Montserrat',sans-serif] text-[15px] text-gray-600 mb-4 text-center max-w-4xl mx-auto">
          Metodología utilizada: Design Thinking junto con los Principios de Diseño centrado en el usuario
        </p>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Empatizar / Analizar */}
          <div className="border border-gray-300 rounded-[20px] p-5 bg-white flex flex-col transition-all duration-300 hover:shadow-md hover:border-[#6695a5]">
            <h5 className="font-['Montserrat',sans-serif] font-medium text-[14px] text-[#6695a5] mb-4 text-center h-[40px] flex items-center justify-center">
              Empatizar / Analizar
            </h5>
            <div className="mb-4 h-[36px] flex items-center justify-center">
              <MessageCircleHeart size={36} className="text-[#98799B]" strokeWidth={1.5} />
            </div>
            <ul className="font-['Montserrat',sans-serif] text-[12px] text-gray-700 space-y-1 text-left w-full flex-1">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Mapa de empatía</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Protopersona</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Benchmarking</span>
              </li>
            </ul>
          </div>

          {/* Definir / Analizar */}
          <div className="border border-gray-300 rounded-[20px] p-5 bg-white flex flex-col transition-all duration-300 hover:shadow-md hover:border-[#6695a5]">
            <h5 className="font-['Montserrat',sans-serif] font-medium text-[14px] text-[#6695a5] mb-4 text-center h-[40px] flex items-center justify-center">
              Definir / Analizar
            </h5>
            <div className="mb-4 h-[36px] flex items-center justify-center">
              <Search size={36} className="text-[#98799B]" strokeWidth={1.5} />
            </div>
            <ul className="font-['Montserrat',sans-serif] text-[12px] text-gray-700 space-y-1 text-left w-full flex-1">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Punto de vista (POV)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>MVP</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Card sorting</span>
              </li>
            </ul>
          </div>

          {/* Idear / Diseñar */}
          <div className="border border-gray-300 rounded-[20px] p-5 bg-white flex flex-col transition-all duration-300 hover:shadow-md hover:border-[#6695a5]">
            <h5 className="font-['Montserrat',sans-serif] font-medium text-[14px] text-[#6695a5] mb-4 text-center h-[40px] flex items-center justify-center">
              Idear / Diseñar
            </h5>
            <div className="mb-4 h-[36px] flex items-center justify-center">
              <Lightbulb size={36} className="text-[#98799B]" strokeWidth={1.5} />
            </div>
            <ul className="font-['Montserrat',sans-serif] text-[12px] text-gray-700 space-y-1 text-left w-full flex-1">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Arquitectura de la información</span>
              </li>
            </ul>
          </div>

          {/* Prototipar / Diseñar */}
          <div className="border border-gray-300 rounded-[20px] p-5 bg-white flex flex-col transition-all duration-300 hover:shadow-md hover:border-[#6695a5]">
            <h5 className="font-['Montserrat',sans-serif] font-medium text-[14px] text-[#6695a5] mb-4 text-center h-[40px] flex items-center justify-center">
              Prototipar / Diseñar
            </h5>
            <div className="mb-4 h-[36px] flex items-center justify-center">
              <PenTool size={36} className="text-[#98799B]" strokeWidth={1.5} />
            </div>
            <ul className="font-['Montserrat',sans-serif] text-[12px] text-gray-700 space-y-1 text-left w-full flex-1">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Wireframes baja fidelidad</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Wireframes media fidelidad</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Wireframes alta fidelidad</span>
              </li>
            </ul>
          </div>

          {/* Evaluar / Validar */}
          <div className="border border-gray-300 rounded-[20px] p-5 bg-white flex flex-col transition-all duration-300 hover:shadow-md hover:border-[#6695a5]">
            <h5 className="font-['Montserrat',sans-serif] font-medium text-[14px] text-[#6695a5] mb-4 text-center h-[40px] flex items-center justify-center">
              Evaluar / Validar
            </h5>
            <div className="mb-4 h-[36px] flex items-center justify-center">
              <Users size={36} className="text-[#98799B]" strokeWidth={1.5} />
            </div>
            <ul className="font-['Montserrat',sans-serif] text-[12px] text-gray-700 space-y-1 text-left w-full flex-1">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Pruebas de eficacia</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Pruebas de eficiencia</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Pruebas de satisfacción</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Wireframes Section */}
      <div>
        
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Wireframes Baja Fidelidad */}
          <div className="space-y-4">
            
            <div className="rounded-[15px] p-6 flex justify-center bg-[#ffffff] relative">
              <img
                src={imgImage23}
                alt="Wireframes baja fidelidad"
                className="w-full max-w-[950px] h-auto rounded-lg mx-[1px] my-[0px]"
              />
              <div className="absolute top-2 right-2 bg-[#d4e8ed] text-[#6695a5] px-5 py-3 rounded-[12px] shadow-md text-center" style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 10% 50%)'
              }}>
                <div className="font-['Montserrat',sans-serif] font-bold text-[28px] leading-tight">
                  +25
                </div>
                <div className="font-['Montserrat',sans-serif] font-normal text-[12px]">
                  componentes reutilizables
                </div>
              </div>
            </div>
          </div>

          {/* Wireframes Alta Fidelidad */}
          <div className="space-y-4">
            
            <div className="rounded-[15px] p-6 bg-[#ffffff] mt-[-30px]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Imagen 1 - Perfil Prestador con banderín (más grande - 2 columnas) */}
                <div className="lg:col-span-2 space-y-3">
                  <div className="bg-[#d4e8ed] text-[#6695a5] pl-6 pr-8 py-3 rounded-[12px] shadow-md inline-block mb-[-15px] relative z-10" style={{
                    clipPath: 'polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%)'
                  }}>
                    <div className="font-['Montserrat',sans-serif] font-semibold text-[13px] text-center leading-tight">
                      Decisiones basadas en<br />research
                    </div>
                  </div>
                  <img
                    src={imgImage24}
                    alt="Perfil prestador"
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                {/* Imagen 2 - Pantallas con banderín (más chica - 1 columna) */}
                <div className="lg:col-span-1 relative">
                  <div className="bg-[#d4e8ed] text-[#6695a5] px-5 py-3 rounded-[12px] shadow-md absolute top-2 right-2 text-center" style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 10% 50%)'
                  }}>
                    <div className="font-['Montserrat',sans-serif] font-bold text-[32px] leading-tight">
                      +30
                    </div>
                    <div className="font-['Montserrat',sans-serif] font-normal text-[11px] leading-tight">
                      Pantallas diseñadas
                    </div>
                  </div>
                  <img
                    src={imgImage25}
                    alt="Pantallas diseñadas"
                    className="w-full h-auto rounded-lg mt-24"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prototipo Final */}
      <div>
        
        
      </div>

      {/* Stats */}
      

      {/* Aprendizaje */}
      <div className="bg-[#fafdff] border-l-[6px] border-[#bcc8d1] rounded-[15px] p-8">
        <h4 className="font-['Montserrat',sans-serif] font-bold text-[#6695a5] mb-4 text-[18px]">
          APRENDIZAJE
        </h4>
        <p className="font-['Montserrat',sans-serif] text-gray-700 leading-relaxed mb-4 text-[15px]">
          Este proyecto fortaleció mis habilidades en UX Research y Design Thinking. Realicé encuestas a 10 usuarios y pruebas de usabilidad con 5 personas para validar decisiones de diseño, lo que me permitió priorizar las funcionalidades del MVP con base en necesidades reales.
        </p>
        <p className="font-['Montserrat',sans-serif] text-gray-700 leading-relaxed text-[15px]">
          A lo largo del proceso diseñe más de 30 pantallas comenzando con wireframes de baja fidelidad hasta llegar al prototipo final. Además, desarrollé una librería de componentes reutilizables que garantizó consistencia visual y facilitó la escalabilidad de la interfaz.
        </p>
      </div>

      {/* Call to Action Button */}
      <div className="flex justify-center pt-4">
        <a 
          href="https://www.behance.net/gallery/241127055/Nestly-UXUI-Design-Case-Study"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#6695a5] text-white px-8 py-4 rounded-[12px] font-['Montserrat',sans-serif] text-[16px] hover:bg-[#557a88] transition-colors shadow-md inline-block mt-[-20px]"
        >
          Ver case study completo ↗
        </a>
      </div>
    </div>
  );
}