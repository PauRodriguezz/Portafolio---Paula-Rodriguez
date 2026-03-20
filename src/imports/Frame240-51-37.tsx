import imgImage34 from "figma:asset/ebf7fa1c5c83aeba6e1a4d9df89fad58f6637d8d.png";
import imgImage35 from "figma:asset/5e128deecb1c3704e0fd7cbb252d80b6f6a8c41f.png";

function Frame() {
  return (
    <div className="absolute bg-[#f2fff9] border-[#9cf5cc] border-[1.093px] border-solid h-[39px] left-[929px] rounded-[14.579px] top-[16px] w-[177px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] left-[87.91px] text-[#21c072] text-[13px] text-center top-[18.41px] w-[152px]">
        <p className="leading-[17px]">Identidad visual</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#f2fff9] border-[#9cf5cc] border-[1.093px] border-solid h-[39px] left-[63px] rounded-[14.579px] top-[28px] w-[177px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] left-[87.91px] text-[#21c072] text-[13px] text-center top-[18.41px] w-[152px]">
        <p className="leading-[17px]">Decisiones de color</p>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute h-[257px] left-[63px] top-[78px] w-[384.112px]" data-name="image 34">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage34} />
      </div>
      <Frame />
      <Frame1 />
      <div className="absolute h-[256.048px] left-[474px] top-[73px] w-[635px]" data-name="image 35">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage35} />
      </div>
    </div>
  );
}