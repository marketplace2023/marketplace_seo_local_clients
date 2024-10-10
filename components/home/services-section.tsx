import { servicesData } from "../data/mock-data";
import CardInfo from "./card-info";

const ServicesSection = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 mb-6">
      {servicesData.map((service, index) => (
        <CardInfo
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
        />
      ))}
    </div>
  );
};

export default ServicesSection;
