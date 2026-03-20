import imgImage29 from "figma:asset/08c4ca018d9e9c61631dadda11958e0256a69a39.png";
import imgImage33 from "figma:asset/5476f2344b189e070cd128328f62ce72acac3dac.png";

function Frame() {
  return (
    <div className="absolute bg-[#f2fff9] border-[#9cf5cc] border-[1.093px] border-solid h-[61px] left-[35px] rounded-[14.579px] top-[11px] w-[159px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] left-[78.41px] text-[#21c072] text-[13px] text-center top-[33.91px] w-[127px]">
        <p className="leading-[17px]">Conociendo al usuario</p>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute h-[327px] left-[124px] top-[42px] w-[677px]" data-name="image 29">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage29} />
      </div>
      <Frame />
      <div className="absolute h-[205px] left-[829px] top-[42px] w-[427px]" data-name="image 33">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage33} />
      </div>
    </div>
  );
}