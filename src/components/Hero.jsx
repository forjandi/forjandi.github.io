import Button from "./global/Button";

const Hero = () => {
  return (
    <div className="container text-center max-w-screen-xl px-[20px] md:px-[80px] lg:px-[120px] max-h-screen h-auto sm:h-2/6 lg:h-5/6 my-10 sm:my-20 md:my-10 lg:my-32">
      <h1 className="text-[30px] leading-[40px] py-20 font-light md:text-[60-px] md:leading-[60px] lg:text-[80px] lg:leading-[100px] uppercase">
        Inteligencia Artificial y Soluciones de Software a Medida
      </h1>
      <Button href="#contact">Contáctanos</Button>
    </div>
  );
};

export default Hero;
