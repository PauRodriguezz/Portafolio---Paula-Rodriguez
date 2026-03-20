import imgImage28 from "figma:asset/a88ac027d7fe44d62bcae7399d16d47867b8bbd0.png";
import imgImage36 from "figma:asset/c752ce9163eb17ac786c8cdea6f297e28aa39c2b.png";

function Frame() {
  return <div className="absolute bg-[#f2fff9] border-[#9cf5cc] border-[1.093px] border-solid h-[89px] left-0 rounded-[14.579px] top-[20px] w-[175px]" />;
}

function Frame2() {
  return (
    <div className="absolute h-[125px] left-[920px] top-[26px] w-[175px]">
      <Frame />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] left-[91px] text-[#21c072] text-[13px] text-center top-[81.5px] w-[152px]">
        <p className="leading-[17px]">Pantallas diseñadas</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Montserrat:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[57px] text-[#21c072] text-[30px] top-[48px] whitespace-nowrap">
        <p className="leading-[28px]">+20</p>
      </div>
    </div>
  );
}

function Frame1() {
  return <div className="absolute bg-[#f2fff9] border-[#9cf5cc] border-[1.093px] border-solid h-[89px] left-[6px] rounded-[14.579px] top-[19px] w-[170px]" />;
}

function Frame3() {
  return (
    <div className="absolute h-[125px] left-[920px] top-[136px] w-[183px]">
      <Frame1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] left-[91px] text-[#21c072] text-[13px] text-center top-[81px] w-[152px]">
        <p className="leading-[17px]">Componentes reutilizables</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Montserrat:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[57px] text-[#21c072] text-[30px] top-[48px] whitespace-nowrap">
        <p className="leading-[28px]">+25</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#f2fff9] border-[#9cf5cc] border-[1.093px] border-solid h-[61px] left-[39px] rounded-[14.579px] top-[10px] w-[179px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] left-[83.91px] text-[#21c072] text-[13px] text-center top-[31.91px] w-[152px]">
        <p className="leading-[17px]">Evolución de wireframes</p>
      </div>
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute h-[344px] left-[89px] top-[27px] w-[602px]" data-name="image 28">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage28} />
      </div>
      <Frame2 />
      <Frame3 />
      <div className="absolute h-[343px] left-[687px] top-[27px] w-[172px]" data-name="image 36">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-102.91%] max-w-none top-0 w-[202.98%]" src={imgImage36} />
        </div>
      </div>
      <Frame4 />
    </div>
  );
}