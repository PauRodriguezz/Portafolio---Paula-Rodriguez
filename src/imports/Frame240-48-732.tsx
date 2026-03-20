import imgImage32 from "figma:asset/400fe0a7dd7f6df350bd394bf20ee6dea6b56757.png";

function Frame() {
  return (
    <div className="absolute bg-[#f2fff9] border-[#9cf5cc] border-[1.093px] border-solid h-[61px] left-[32px] rounded-[14.579px] top-[10px] w-[179px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] left-[83.91px] text-[#21c072] text-[13px] text-center top-[31.91px] w-[152px]">
        <p className="leading-[17px]">Comprensión del flujo del usuario</p>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[351px] left-[112px] top-[26px] w-[998px]" data-name="image 32">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage32} />
      </div>
      <Frame />
    </div>
  );
}