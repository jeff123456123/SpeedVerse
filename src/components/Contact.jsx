import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="my-20 min-h-96 w-screen scroll-mt-24 px-10">
      <div className="relative rounded-lg bg-black py-24 text-white sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=85"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=900&q=85"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=85"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=900&q=85"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join SPEEDVERSE
          </p>

          <AnimatedTitle
            title="celebrate <b>S</b>peed <br /> and shout <br /> S<b>I</b>UUU together."
            className="special-font !md:text-[6.2rem] w-full font-speedverse !text-5xl !font-black !leading-[.9]"
          />

          <Button
            to="/join"
            title="Join the celebration"
            containerClass="mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
