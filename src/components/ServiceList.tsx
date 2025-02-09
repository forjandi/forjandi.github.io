import ServiceCard from "./ServiceCard";
import aiImage from "../assets/ai.png";
import apiImage from "../assets/apis.png";
import e2eImage from "../assets/e2e.png";

const services = [
  {
    id: 1,
    img: apiImage.src,
    title: "Chatbots IA",
    description:
      "Atiende a tus clientes 24/7 con chatbots inteligentes que responden en WhatsApp o llamadas. Optimiza tu servicio, automatiza consultas frecuentes y mejora la experiencia del usuario con respuestas rápidas y precisas.",
    colSpan: 3,
  },
  {
    id: 2,
    img: aiImage.src,
    title: "Soluciones IA",
    description:
      "Automatiza tareas, mejora tu atención al cliente y ahorra tiempo con agentes de IA personalizados que se adaptan a las necesidades de tu negocio.",
    colSpan: 3,
  },
  {
    id: 3,
    img: e2eImage.src,
    title: "Transformación Digital",
    description:
      "Desarrollamos sistemas personalizados, gestionando todo el proceso desde el análisis hasta su implementación y puesta en producción. También te acompañamos en la capacitación de tu equipo para garantizar una transición exitosa.",
    colSpan: 4,
  },
  undefined,
];

const ServiceList = () => {
  return (
    <div className="gap-[20px] md:grid md:grid-cols-6">
      {services.map((service, index) => {
        if (!service)
          return (
            <ServiceCard className="col-span-2 hidden md:block" key={index} />
          );

        const { img, title, description, colSpan } = service;

        return (
          <ServiceCard className={`col-span-${colSpan}`} key={index}>
            <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between gap-[20px]">
              <h3 className="md:text-left">{title}</h3>
              <img
                src={img}
                alt={title}
                className="rounded-full max-w-[100px]"
              />
            </div>
            <p className="text-left text-[17px] leading-[25px] mt-[20px]">
              {description}
            </p>
          </ServiceCard>
        );
      })}
    </div>
  );
};

export default ServiceList;
