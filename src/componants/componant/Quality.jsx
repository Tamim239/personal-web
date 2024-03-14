import { AnimationOnScroll } from "react-animation-on-scroll";
import { FaArrowRight } from "react-icons/fa6";
export default function Quality() {
  return (
    <div className="my-10 w-4/5 mx-auto">
      <AnimationOnScroll animateIn="fadeIn">
        <div className=" text-white text-center py-5 space-y-3">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#7A47E0] to-[#7656b6] bg-clip-text text-transparent">My Quality Services</h1>
          <p className="text-xl md:w-2/3 md:mx-auto">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
      </AnimationOnScroll>
      <div className="scroll-smooth">
        {/* quality 1 */}
        <div className="text-white flex items-center justify-between gap-5 p-5 hover:bg-gradient-to-r from-[#7A47E0] to-[#391E6E]">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-[#7A47E0]">01</h2>
            <h1 className="text-4xl font-bold">Branding Design</h1>
          </div>
          <div className="flex items-center w-1/2 gap-5">
            <p className="text-xl">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
            <a className="text-3xl font-bold text-[#7A47E0] rotate-45" href="">
              <FaArrowRight />
            </a>
          </div>
        </div>
        {/* quality 2 */}
        <div className="text-white flex items-center justify-between gap-5 p-5 hover:bg-gradient-to-r from-[#7A47E0] to-[#391E6E]">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-[#7A47E0]">01</h2>
            <h1 className="text-4xl font-bold">Web Design</h1>
          </div>
          <div className="flex items-center w-1/2 gap-5">
            <p className="text-xl">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
            <a className="text-3xl font-bold text-[#7A47E0] rotate-45" href="">
              <FaArrowRight />
            </a>
          </div>
        </div>
        {/* quality 3 */}
        <div className="text-white flex items-center justify-between gap-5 p-5 hover:bg-gradient-to-r from-[#7A47E0] to-[#391E6E]">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-[#7A47E0]">01</h2>
            <h1 className="text-4xl font-bold">UI/UX Design</h1>
          </div>
          <div className="flex items-center w-1/2 gap-5">
            <p className="text-xl">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
            <a className="text-3xl font-bold text-[#7A47E0] rotate-45" href="">
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
