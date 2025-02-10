interface ServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceCard = ({ className, children }: ServiceCardProps) => {
  return (
    <div
      className={`bg-background/80 backdrop-blur-sm border  text-center rounded-lg p-[20px] mb-[20px] md:mb-0 ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default ServiceCard;
