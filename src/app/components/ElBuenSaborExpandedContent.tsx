import imgBurger from "figma:asset/b94e63f2468ec090026daf5f772e2340d8db6aaf.png";
import imgLaptop from "../../assets/b0fd3600be304ef14fc5496f3dec7df16b209759.png";
import { FileText, Grid3x3, Laptop } from 'lucide-react';
import svgPaths from "../../imports/svg-uhvwz848hx";
import toolsSvgPaths from "../../imports/svg-iyrkywbrvr";
import imgModulos from "../../assets/Frame_laptop.png";

export default function ElBuenSaborExpandedContent() {
  return (
    <div className="space-y-12">
      {/* Logo y descripción con el título curvado */}
      

      {/* Contexto, Problema, Solución */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {/* Contexto */}
        <div className="bg-[#fdf3ee] border border-[#f2c9b8] rounded-[15px] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#e8845a] m-[0px] px-[16px] py-[26px]">
          <h4 className="font-['Montserrat',sans-serif] font-bold text-[18px] text-[#e8845a] mb-3 text-center">
            CONTEXTO
          </h4>
          <p className="font-['Montserrat',sans-serif] text-[15px] text-gray-700 leading-relaxed">
            Aplicación de escritorio para digitalizar las operaciones de un restaurante tradicional, mejorando la experiencia del cliente al hacer pedidos y optimizando la gestión interna del negocio.
          </p>
        </div>

        {/* Problema */}
        <div className="bg-[#fdf3ee] border border-[#f2c9b8] rounded-[15px] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#ea4335] px-[16px] py-[26px]">
          <h4 className="font-['Montserrat',sans-serif] font-bold text-[18px] text-[rgba(234,67,53,0.61)] mb-3 text-center text-[#e8845a]">
            PROBLEMA
          </h4>
          <p className="font-['Montserrat',sans-serif] text-[15px] text-gray-700 leading-relaxed">
            Muchos restaurantes pequeños gestionan sus pedidos y operaciones de forma manual o con herramientas desconectadas, lo que genera errores, demoras y dificulta para organizar la información del negocio.
          </p>
        </div>

        {/* Solución */}
        <div className="bg-[#fdf3ee] border border-[#f2c9b8] rounded-[15px] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#ea4335] px-[16px] py-[26px]">
          <h4 className="font-['Montserrat',sans-serif] font-bold text-[18px] text-[rgba(234,67,53,0.61)] mb-3 text-center text-[#e8845a]">
            SOLUCIÓN
          </h4>
          <p className="font-['Montserrat',sans-serif] text-[15px] text-gray-700 leading-relaxed">
            Diseñé y desarrollé una aplicación con interfaces diferenciadas para que los clientes realicen pedidos, y otra para que el restaurante gestione pedidos, productos y personal desde un solo sistema integral.
          </p>
        </div>
      </div>

      {/* Mi proceso */}
      <div>
        <h3 className="font-['Montserrat',sans-serif] font-semibold text-[24px] text-[#e8845a] mb-12 text-center">
          Mi proceso
        </h3>

        {/* Process visualization */}
        <div className="relative w-full max-w-[1200px] mx-auto px-4 mb-16">
          {/* Contenedor principal */}
          <div className="relative min-h-[350px]">
            
            {/* Líneas onduladas conectoras - Desktop only */}
            <div className="hidden lg:block absolute top-[30px] left-[20%] right-[20%] h-[38px]">
              <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 706.343 40.2861">
                <path d={svgPaths.p3f48e600} stroke="#F2C9B8" strokeOpacity="0.65" strokeDasharray="10 5" className="animate-[dash_20s_linear_infinite]" />
              </svg>
            </div>

            {/* Grid de 3 columnas */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
              
              {/* Columna 1: Análisis */}
              <div className="flex flex-col items-center">
                {/* Círculo con ícono */}
                <div className="relative w-[90px] h-[87px] mb-8">
                  <svg className="absolute w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 87">
                    <path d={svgPaths.p32a32e80} fill="#FDF3EE" stroke="#F2C9B8" />
                  </svg>
                  {/* Ícono File Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-[29px] h-[33px]" fill="none" preserveAspectRatio="none" viewBox="0 0 29.667 33">
                      <path d={svgPaths.p28731d00} fill="#574E4E" fillOpacity="0.65" />
                    </svg>
                  </div>
                </div>

                {/* Título */}
                <h4 className="font-['Montserrat',sans-serif] font-medium text-[20px] text-[#e8845a] mb-4">
                  Análisis
                </h4>

                {/* Lista */}
                <ul className="font-['Montserrat',sans-serif] text-[13px] text-black leading-[18px] list-disc ml-6 space-y-2 max-w-[296px]">
                  <li className="mx-[0px] mt-[0px] mb-[6px]">Análisis de requisitos e historia de usuario</li>
                  <li>Identificación de las necesidades de los usuarios, tanto clientes como personal del restaurante</li>
                </ul>
              </div>
              

              {/* Columna 2: Diseño */}
              <div className="flex flex-col items-center">
                {/* Círculo con ícono */}
                <div className="relative w-[90px] h-[87px] mb-8">
                  <svg className="absolute w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 87">
                    <path d={svgPaths.p32a32e80} fill="#FDF3EE" stroke="#F2C9B8" />
                  </svg>
                  {/* Ícono Figma (Grid) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-[40px] h-[39px]" fill="none" preserveAspectRatio="none" viewBox="0 0 40 39">
                      <path clipRule="evenodd" d={svgPaths.p3708be30} fill="#574E4E" fillOpacity="0.5" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Título */}
                <h4 className="font-['Montserrat',sans-serif] font-medium text-[20px] text-[#e8845a] mb-4">
                  Diseño
                </h4>

                {/* Lista */}
                <ul className="font-['Montserrat',sans-serif] text-[13px] text-black leading-[18px] list-disc ml-6 space-y-2 max-w-[281px]">
                  <li className="mx-[0px] mt-[0px] mb-[6px]">Diseño de flujos de usuario para pedidos y gestión del restaurante</li>
                  <li>Diseño de interfaces centradas en el usuario y la usabilidad</li>
                </ul>
              </div>

              {/* Columna 3: Desarrollo */}
              <div className="flex flex-col items-center">
                {/* Círculo con ícono */}
                <div className="relative w-[90px] h-[87px] mb-8">
                  <svg className="absolute w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 87">
                    <path d={svgPaths.p32a32e80} fill="#FDF3EE" stroke="#F2C9B8" />
                  </svg>
                  {/* Ícono Laptop */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-[41px] h-[26px]" fill="none" preserveAspectRatio="none" viewBox="0 0 41 25.834">
                      <path d={svgPaths.p17d8a2f0} fill="#574E4E" fillOpacity="0.65" />
                    </svg>
                  </div>
                </div>

                {/* Título */}
                <h4 className="font-['Montserrat',sans-serif] font-medium text-[20px] text-[#e8845a] mb-4">
                  Desarrollo
                </h4>

                {/* Lista */}
                <ul className="font-['Montserrat',sans-serif] text-[13px] text-black leading-[18px] list-disc ml-6 space-y-2 max-w-[248px]">
                  <li className="mx-[0px] mt-[0px] mb-[6px]">Desarrollo del frontend de la aplicación</li>
                  <li>Implementación del backend y la API REST</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Flecha animada bajando desde Análisis */}
      <div className="hidden lg:flex flex-col items-start mt-[-110px] col-start-1 ml-26">
        <svg height="60" width="20" className="overflow-visible">
          <line
            x1="10" y1="0" x2="10" y2="50"
            stroke="#F2C9B8" strokeWidth="1.5"
            strokeDasharray="6 4"
            className="animate-[dash_3s_linear_infinite]"
          />
          <polygon points="4,44 10,56 16,44" fill="#F2C9B8" />
        </svg>
      </div>

      {/* Tabla usuarios + módulos */}
      <div className="pt-0 -mt-2 max-w-3xl mx-auto">
        {/* Tabla — desktop */}
        <table className="w-full border-collapse hidden md:table">
          <thead>
            <tr className="border-b-[1.5px] border-[#e8845a]">
              <th className="font-['Montserrat',sans-serif] text-[16px] font-semibold tracking-[0.12em] text-[#e8845a] pb-3 text-center w-[160px]">Perfil</th>
              <th className="font-['Montserrat',sans-serif] text-[16px] font-semibold tracking-[0.12em] text-[#e8845a] pb-3 text-center">Necesidades identificadas</th>
            </tr>
          </thead>
          <tbody>
            {[
              { initials: 'CL', name: 'Cliente', needs: ['Registro y login sencillo y seguro', 'Catálogo claro con precios y stock', 'Carrito intuitivo sin fricciones'] },
              { initials: 'CA', name: 'Cajero', needs: ['Gestión de estados de pedido', 'Facturación automática y envío por email'] },
              { initials: 'CO', name: 'Cocinero', needs: ['Listado de pedidos con detalle de recetas', 'Cambio de estado a "Listo" rápido'] },
              { initials: 'DE', name: 'Delivery', needs: ['Pedidos asignados con dirección y datos', 'Confirmación de entrega para cerrar el ciclo'] },
              { initials: 'AD', name: 'Administrador', needs: ['Gestión de usuarios y roles', 'Reportes y panel de estadísticas'] },
            ].map((user, i, arr) => (
              <tr key={user.initials} className={`${i < arr.length - 1 ? 'border-b border-[#f2c9b8]' : ''} hover:bg-[#fffaf8] transition-colors`}>
                
                {/* Avatar + nombre centrados en la celda */}
                <td className="py-4 w-[180px] align-middle">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#fdf3ee] border border-[#f2c9b8] flex items-center justify-center text-[15px] font-bold text-[#e8845a] flex-shrink-0 ml-6">
                      {user.initials}
                    </div>
                    <span className="font-['Montserrat',sans-serif] text-[15px] font-semibold text-[#574E4E]">
                      {user.name}
                    </span>
                  </div>
                </td>
                {/* Necesidades — bloque centrado, texto alineado a la izquierda */}
                <td className="py-4 align-top">
                  <div className="flex flex-col gap-1 items-start max-w-[380px] mx-auto">
                    {user.needs.map((need, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#574E4E] mt-1.5 flex-shrink-0 opacity-60" />
                        <span className="font-['Montserrat',sans-serif] text-[14px] text-[#574E4E] leading-relaxed">{need}</span>
                      </div>
                    ))}
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

        {/* Cards — mobile */}
        <div className="md:hidden flex flex-col gap-3">
          {/* Header */}
          <div className="grid border-b-[1.5px] border-[#e8845a] pb-2 mb-1">
            <span className="font-['Montserrat',sans-serif] text-[11px] font-semibold tracking-[0.12em] text-[#e8845a] text-center">Perfiles y Necesidades identificadas</span>
          </div>
          {[
            { initials: 'CL', name: 'Cliente', needs: ['Registro y login sencillo y seguro', 'Catálogo claro con precios y stock', 'Carrito intuitivo sin fricciones'] },
            { initials: 'CA', name: 'Cajero', needs: ['Gestión de estados de pedido', 'Facturación automática y envío por email'] },
            { initials: 'CO', name: 'Cocinero', needs: ['Listado de pedidos con detalle de recetas', 'Cambio de estado a "Listo" rápido'] },
            { initials: 'DE', name: 'Delivery', needs: ['Pedidos asignados con dirección y datos', 'Confirmación de entrega para cerrar el ciclo'] },
            { initials: 'AD', name: 'Administrador', needs: ['Gestión de usuarios y roles', 'Reportes y panel de estadísticas'] },
          ].map((user) => (
            <div key={user.initials} className="bg-[#fdf3ee] border border-[#f2c9b8] border-l-4 border-l-[#e8845a] rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#f2c9b8] flex items-center justify-center text-[11px] font-bold text-[#e8845a] flex-shrink-0">
                  {user.initials}
                </div>
                <span className="font-['Montserrat',sans-serif] text-[13px] font-semibold text-[#3a3a3a]">{user.name}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {user.needs.map((need, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e8845a] mt-1.5 flex-shrink-0 opacity-60" />
                    <span className="font-['Montserrat',sans-serif] text-[12px] text-gray-500 leading-relaxed">{need}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Flecha punteada animada */}
        <div className="flex flex-col items-center py-2">
          <svg height="80" width="20" className="overflow-visible">
            <line
              x1="10" y1="0" x2="10" y2="68"
              stroke="#F2C9B8" strokeWidth="1.5"
              strokeDasharray="6 4"
              className="animate-[dash_3s_linear_infinite]"
            />
            <polygon points="4,62 10,74 16,62" fill="#F2C9B8" />
          </svg>
        </div>

        {/* Título módulos */}
        <p className="font-['Montserrat',sans-serif] font-medium text-[20px] tracking-[0.14em] text-[#e8845a] text-center mb-2">
          Módulos del sistema
        </p>
      </div>

      {/* Laptop + módulos alrededor */}
      <div className="flex justify-center w-full px-">
          <img src={imgModulos} alt="Módulos del sistema" className="w-full max-w-[800px] h-auto object-contain" />
      </div>
        
      {/* Tools debajo */}
      <div className="mt-">
          <h3 className="font-['Montserrat',sans-serif] font-semibold text-[#e8845a] text-[18px] mb-4">Tools</h3>
          <div className="flex flex-wrap gap-6 items-center">
            {/* acá van los mismos SVGs de tools que ya tenés */}
                        {/* Figma */}
            <div className="w-[36px] h-[36px]">
              <svg className="w-full h-full" fill="none" viewBox="0 0 47 47">
                <path clipRule="evenodd" d={toolsSvgPaths.p20cd9580} fill="#574E4E" fillRule="evenodd" />
              </svg>
            </div>

            {/* Bootstrap */}
            <div className="w-[36px] h-[36px]">
              <svg className="w-full h-full" fill="none" viewBox="0 0 47 47">
                <g clipPath="url(#clip0_bootstrap)">
                  <path clipRule="evenodd" d={toolsSvgPaths.p1b5a9a00} fill="#574E4E" fillRule="evenodd" />
                </g>
                <defs>
                  <clipPath id="clip0_bootstrap">
                    <rect fill="white" height="47" width="47" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* React */}
            <div className="w-[36px] h-[36px]">
              <svg className="w-full h-full" fill="none" viewBox="0 0 47 47">
                <path d={toolsSvgPaths.p1a5e3800} fill="#574E4E" />
                <path clipRule="evenodd" d={toolsSvgPaths.p37d36f80} fill="#574E4E" fillRule="evenodd" />
              </svg>
            </div>

            {/* Java */}
            <div className="w-[36px] h-[36px] relative overflow-hidden">
              <svg className="absolute w-[73.66%] h-full left-[13.14%]" fill="none" viewBox="0 0 34.6485 46.9083">
                <path d={toolsSvgPaths.p35e74000} fill="#574E4E" />
              </svg>
            </div>

            {/* Segunda fila */}
            {/* Spring */}
            <div className="w-[36px] h-[36px]">
              <svg className="w-full h-full" fill="none" viewBox="0 0 47 47">
                <path d={toolsSvgPaths.p3cf50c70} fill="#574E4E" />
                <path d={toolsSvgPaths.p4215c00} fill="#574E4E" />
                <path d={toolsSvgPaths.p2f3ce500} fill="white" />
              </svg>
            </div>

            {/* GitHub */}
            <div className="w-[36px] h-[36px] relative overflow-hidden">
              <svg className="w-full h-full" fill="none" viewBox="0 0 47 47.0001">
                <path clipRule="evenodd" d={toolsSvgPaths.p1beba180} fill="#574E4E" fillRule="evenodd" />
              </svg>
            </div>

            {/* MySQL */}
            <div className="w-[36px] h-[36px]">
              <svg className="w-full h-full" fill="none" viewBox="0 0 47 47">
                <path d={toolsSvgPaths.p25e3eac0} fill="#574E4E" />
              </svg>
            </div>
          </div>
        

      </div>      

      {/* Aprendizaje */}
      <div className="bg-[#fdf3ee] border-l-[6px] border-[#f2c9b8] rounded-[15px] p-8">
        <h4 className="font-['Montserrat',sans-serif] font-bold text-[#e8845a] mb-4 text-[18px]">
          APRENDIZAJE
        </h4>
        <p className="font-['Montserrat',sans-serif] text-gray-700 leading-relaxed mb-4 text-[15px]">
          Este proyecto me enseñó a diseñar experiencias para distintos tipos de usuarios dentro de un mismo sistema. 
Realizar el análisis de requerimientos e historias de usuario desde el inicio me permitió entender el problema en profundidad antes de diseñar cualquier pantalla y esa base fue clave para tomar mejores decisiones de diseño. Además trabajar en paralelo los flujos del cliente y del restaurante me obligó a priorizar la claridad, la eficiencia y la organización en cada interfaz.
        </p>
      </div>
    </div>
  );
}