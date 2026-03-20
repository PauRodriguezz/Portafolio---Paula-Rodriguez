import { Heart, Search, Lightbulb, Layout } from 'lucide-react';
import svgPaths from "../../imports/svg-61fl7yadkj";
import imgUserPersona from "../../assets/08c4ca018d9e9c61631dadda11958e0256a69a39.png";
import imgConclusiones from "../../assets/5476f2344b189e070cd128328f62ce72acac3dac.png";
import imgUserFlow from "../../assets/400fe0a7dd7f6df350bd394bf20ee6dea6b56757.png";
import imgWireframesLow from "../../assets/a88ac027d7fe44d62bcae7399d16d47867b8bbd0.png";
import imgWireframesHigh from "../../assets/582718edc25857bcc0a628012a6f2085f4b5e7f0.png";
import imgImage34 from "../../assets/ebf7fa1c5c83aeba6e1a4d9df89fad58f6637d8d.png";
import imgImage35 from "../../assets/5e128deecb1c3704e0fd7cbb252d80b6f6a8c41f.png";

export default function CookorExpandedContent() {
  return (
    <div className="space-y-12">
      {/* Contexto, Problema, Solución */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {/* Contexto */}
        <div className="bg-[#EAF9F2] border border-[#00C896] rounded-[15px] transition-all duration-300 hover:shadow-lg hover:scale-105 px-[16px] py-[26px]">
          <h4 className="font-['Montserrat',sans-serif] font-bold text-[18px] text-[#00C896] mb-3 text-center">
            CONTEXTO
          </h4>
          <p className="font-['Montserrat',sans-serif] text-[15px] text-gray-700 leading-relaxed">
            App diseñada para ayudar a las personas a descubrir, guardar y organizar recetas de forma simple y personalizada.
          </p>
        </div>

        {/* Problema */}
        <div className="bg-[#EAF9F2] border border-[#00C896] rounded-[15px] transition-all duration-300 hover:shadow-lg hover:scale-105 px-[16px] py-[26px]">
          <h4 className="font-['Montserrat',sans-serif] font-bold text-[18px] text-[#00C896] mb-3 text-center">
            PROBLEMA
          </h4>
          <p className="font-['Montserrat',sans-serif] text-[15px] text-gray-700 leading-relaxed">
            Las personas encuentran recetas en distintas plataformas — redes sociales, blogs, vídeos — lo que hace difícil guardarlas, organizarlas y volver a encontrarlas cuando las necesitan.
          </p>
        </div>

        {/* Solución */}
        <div className="bg-[#EAF9F2] border border-[#00C896] rounded-[15px] transition-all duration-300 hover:shadow-lg hover:scale-105 px-[16px] py-[26px]">
          <h4 className="font-['Montserrat',sans-serif] font-bold text-[18px] text-[#00C896] mb-3 text-center">
            SOLUCIÓN
          </h4>
          <p className="font-['Montserrat',sans-serif] text-[15px] text-gray-700 leading-relaxed">
            Diseñé una app que permite explorar recetas, guardarlas en colecciones y filtrarlas por ingredientes, preferencias o tipo de comida, haciendo que descubrir y organizar recetas sea simple y placentero.
          </p>
        </div>
      </div>

      {/* Mi proceso */}
      <div>
        <h3 className="font-['Montserrat',sans-serif] font-semibold text-[24px] text-[#21c072] mb-6 text-center">
          Mi proceso
        </h3>

        {/* Process cards - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Empatizar */}
          <div className="bg-white border border-[#b5f3d6] rounded-[15px] p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col items-center">
              {/* Título */}
              <h4 className="font-['Montserrat',sans-serif] font-extrabold text-[#21c072] mb-4 text-[15px]">
                Empatizar
              </h4>
              
              {/* Icono - Corazón */}
              <div className="w-[45px] h-[45px] mb-6 flex items-center justify-center">
                <Heart className="w-[38px] h-[38px] text-[#574E4E]" strokeWidth={1.5} />
              </div>
              
              {/* Lista */}
              <ul className="font-['Montserrat',sans-serif] text-[12px] text-black leading-[18px] list-disc ml-5 w-full">
                <li className="mb-0">Benchmarking</li>
                <li className="mb-0">Mapa de empatía</li>
                <li className="mb-0">User Persona</li>
                <li>Encuestas cuantitativas</li>
              </ul>
            </div>
          </div>

          {/* Definir */}
          <div className="bg-white border border-[#b5f3d6] rounded-[15px] p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col items-center">
              {/* Título */}
              <h4 className="font-['Montserrat',sans-serif] font-extrabold text-[15px] text-[#21c072] mb-4">
                Definir
              </h4>
              
              {/* Icono - Lupa */}
              <div className="w-[45px] h-[45px] mb-6 flex items-center justify-center">
                <Search className="w-[35px] h-[35px] text-[#574E4E]" strokeWidth={2} />
              </div>
              
              {/* Lista */}
              <ul className="font-['Montserrat',sans-serif] text-[12px] text-black leading-[18px] list-disc ml-5 w-full">
                <li className="mb-0">POV (Point of View)</li>
                <li className="mb-0">Storytelling</li>
                <li className="mb-0">Storyboard</li>
                <li>MVP</li>
              </ul>
            </div>
          </div>

          {/* Idear */}
          <div className="bg-white border border-[#b5f3d6] rounded-[15px] p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col items-center">
              {/* Título */}
              <h4 className="font-['Montserrat',sans-serif] font-extrabold text-[15px] text-[#21c072] mb-4">
                Idear
              </h4>
              
              {/* Icono - Bombilla con estrella */}
              <div className="w-[45px] h-[45px] mb-6 flex items-center justify-center relative">
                {/* Bombilla */}
                <svg className="absolute block w-[26px] h-[34px]" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 26.125 34.0417">
                  <path d={svgPaths.p55a3c50} stroke="#574E4E" strokeWidth="2.375" fill="none" />
                </svg>
                {/* Estrella decorativa alrededor */}
                <div className="absolute w-[60px] h-[60px] flex items-center justify-center">
                  <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 66.8333 66.8333">
                    <path d={svgPaths.p22657a80} stroke="#574E4E" strokeLinecap="round" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
              </div>
              
              {/* Lista */}
              <ul className="font-['Montserrat',sans-serif] text-[12px] text-black leading-[18px] list-disc ml-5 w-full">
                <li className="mb-0">Arquitectura de la información</li>
                <li>Flujo de usuario</li>
              </ul>
            </div>
          </div>

          {/* Prototipar */}
          <div className="bg-white border border-[#b5f3d6] rounded-[15px] p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col items-center">
              {/* Título */}
              <h4 className="font-['Montserrat',sans-serif] font-extrabold text-[15px] text-[#21c072] mb-4">
                Prototipar
              </h4>
              
              {/* Icono - Layout/Diseño */}
              <div className="w-[45px] h-[45px] mb-6 flex items-center justify-center">
                <Layout className="w-[35px] h-[35px] text-[#574E4E]" strokeWidth={1.5} />
              </div>
              
              {/* Lista */}
              <ul className="font-['Montserrat',sans-serif] text-[12px] text-black leading-[18px] list-disc ml-5 w-full">
                <li className="mb-0">Wireframes baja fidelidad</li>
                <li className="mb-0">Wireframes media fidelidad</li>
                <li className="mb-0">Wireframes alta fidelidad</li>
                <li>Wireflows</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Conociendo al usuario - User Persona y Conclusiones */}
      <div className="relative">
        {/* Badge "Conociendo al usuario" */}
        <div className="flex justify-center mb-4">
          <div className="bg-[#f2fff9] rounded-[14.579px] px-36 py-4">
            <p className="font-['Montserrat',sans-serif] text-[#21c072] text-center leading-[17px] text-[14px]">
              Conociendo al usuario
            </p>
          </div>
        </div>

        {/* Grid con User Persona y Conclusiones */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6">
          {/* User Persona - imagen izquierda */}
          <div className="w-full">
            <img 
              src={imgUserPersona} 
              alt="User Persona - Rocío Sanz" 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          {/* Conclusiones - imagen derecha */}
          <div className="w-full flex items-start">
            <img 
              src={imgConclusiones} 
              alt="Conclusiones" 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Comprensión del flujo del usuario */}
      <div className="relative">
        {/* Badge "Comprensión del flujo del usuario" */}
        <div className="flex justify-center mb-4">
          <div className="bg-[#f2fff9] rounded-[14.579px] px-6 py-4">
            <p className="font-['Montserrat',sans-serif] text-[13px] text-[#21c072] text-center leading-[17px]">
              Comprensión del flujo del usuario
            </p>
          </div>
        </div>

        {/* Imagen del User Flow */}
        <div className="w-full">
          <img 
            src={imgUserFlow} 
            alt="Comprensión del flujo del usuario" 
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Wireframes */}
      <div className="relative">
        {/* Layout completo horizontal */}
        <div className="flex flex-col lg:flex-row items-start gap-6 w-full -mb-16">
          
          {/* Columna izquierda: Imágenes */}
          <div className="flex-grow relative">
            {/* Imágenes de wireframes - Horizontal */}
            <div className="flex flex-col sm:flex-row gap-4 items-start justify-start -mt-16">
              {/* Wireframes sketches/baja/media fidelidad */}
              <div className="w-full sm:w-auto flex items-start relative">
                {/* Badge "Evolución de wireframes" - Sobrepuesto en esquina superior izquierda */}
                <div className="absolute top-12 left-0 z-10">
                  <div className="bg-[#f2fff9] border border-[#9cf5cc] rounded-[14.579px] px-6 py-4 inline-block shadow-lg">
                    <p className="font-['Montserrat',sans-serif] text-[13px] text-[#21c072] text-center leading-[17px]">
                      Evolución de<br />wireframes
                    </p>
                  </div>
                </div>
                
                <img 
                  src={imgWireframesLow} 
                  alt="Wireframes sketches, baja y media fidelidad" 
                  className="h-[450px] w-auto object-contain rounded-lg"
                />
              </div>

              {/* Wireframes alta fidelidad (pantallas móviles finales) */}
              <div className="w-full sm:w-auto flex items-start">
                <img 
                  src={imgWireframesHigh} 
                  alt="Wireframes alta fidelidad" 
                  className="h-[450px] w-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Badges con números - Columna derecha */}
          <div className="flex-shrink-0 flex flex-row lg:flex-col gap-4 mt-4 lg:mt-8 w-full lg:w-auto justify-center lg:justify-start">
            {/* +20 Pantallas diseñadas */}
            <div className="bg-[#f2fff9] border border-[#9cf5cc] rounded-[14.579px] px-4 py-3 w-[140px]">
              <p className="font-['Montserrat',sans-serif] font-extrabold text-[24px] text-[#21c072] text-center leading-[24px] mb-2">
                +20
              </p>
              <p className="font-['Montserrat',sans-serif] text-[12px] text-[#21c072] text-center leading-[16px]">
                Pantallas diseñadas
              </p>
            </div>

            {/* +25 Componentes reutilizables */}
            <div className="bg-[#f2fff9] border border-[#9cf5cc] rounded-[14.579px] px-4 py-3 w-[140px]">
              <p className="font-['Montserrat',sans-serif] font-extrabold text-[24px] text-[#21c072] text-center leading-[24px] mb-2">
                +25
              </p>
              <p className="font-['Montserrat',sans-serif] text-[12px] text-[#21c072] text-center leading-[16px]">
                Componentes reutilizables
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Identidad visual y Decisiones de color */}
      <div className="relative mt-18 lg:-mt-8">
        {/* Layout con badges e imágenes */}

        <div className="flex flex-col lg:flex-row gap-6 w-full relative">
          
          {/* Imagen izquierda - Decisiones de color */}
          <div className="w-full lg:w-[40%] flex flex-col gap-4">
            {/* Badge "Decisiones de color" */}
            <div className="flex justify-start">
              <div className="bg-[#f2fff9] border border-[#9cf5cc] rounded-[14.579px] px-6 py-4 inline-block shadow-lg">
                <p className="font-['Montserrat',sans-serif] text-[13px] text-[#21c072] text-center leading-[17px]">
                  Decisiones de color
                </p>
              </div>
            </div>
            
            <img 
              src={imgImage34} 
              alt="Decisiones de color" 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          {/* Imagen derecha - Identidad visual */}
          <div className="w-full lg:w-[60%] flex flex-col gap-4">
            {/* Badge "Identidad visual" */}
            <div className="flex justify-end">
              <div className="bg-[#f2fff9] border border-[#9cf5cc] rounded-[14.579px] px-6 py-4 inline-block shadow-lg">
                <p className="font-['Montserrat',sans-serif] text-[13px] text-[#21c072] text-center leading-[17px]">
                  Identidad visual
                </p>
              </div>
            </div>
            
            <img 
              src={imgImage35} 
              alt="Identidad visual" 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Aprendizaje */}
      <div className="bg-[#EAF9F2] border border-[#9cf5cc] rounded-[15px] px-8 py-6">
        <h4 className="font-['Montserrat',sans-serif] font-bold text-[18px] text-[#21c072] mb-4">
          APRENDIZAJE
        </h4>
        <p className="font-['Montserrat',sans-serif] text-[15px] text-gray-700 leading-relaxed">
          Este proyecto me permitió profundizar en arquitectura de información y organización de contenido, 
          enfocándome en crear una experiencia de navegación clara e intuitiva. Además, aprendí la importancia 
          de iterar las pantallas a partir del feedback de usuarios y de construir componentes reutilizables 
          que aseguren consistencia visual y faciliten la evolución del producto.
        </p>
      </div>

      {/* Call to Action Button */}
      <div className="flex justify-center -mt-4">
        <a 
          href="https://www.behance.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00C896] text-white px-8 py-4 rounded-[12px] font-['Montserrat',sans-serif] text-[16px] hover:bg-[#00A67A] transition-colors shadow-md inline-block"
        >
          Ver case study completo ↗
        </a>
      </div>
    </div>
  );
}