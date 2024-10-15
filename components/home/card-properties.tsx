import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { propertiesData } from "../data/mock-data";

// Definir la interfaz de Property
interface Property {
  id: number;
  name: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  imageUrl: string;
  agentName: string;
  agentTitle: string;
}

// Definir las propiedades que recibe PropertyCard
interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card className="max-w-sm mx-auto shadow-lg rounded-lg">
      <CardHeader className="relative">
        <Image
          src={property.imageUrl}
          alt={property.name}
          width={400}
          height={250}
          className="rounded-t-lg"
        />
        <div className="absolute top-2 left-2 bg-white p-1 rounded">
          <Badge className="bg-yellow-300 text-black">For Sale</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-bold">{property.name}</CardTitle>
        <div className="flex justify-between text-gray-600 my-2">
          <div className="flex items-center">
            <span className="mr-1">🛏️</span> {property.bedrooms} Bedrooms
          </div>
          <div className="flex items-center">
            <span className="mr-1">🛁</span> {property.bathrooms} Bathrooms
          </div>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <span className="mr-1">📏</span> {property.size} sqm
        </div>
        <div className="text-xl font-bold text-blue-600">{property.price}</div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 bg-gray-100 rounded-b-lg">
        <div className="flex items-center">
          <Image
            src="/assets/agent.jpg" // Aquí podrías usar property.agentImage si deseas añadir imágenes de los agentes.
            alt={property.agentName}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm font-semibold">{property.agentName}</p>
            <p className="text-xs text-gray-500">{property.agentTitle}</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="text-green-600 text-xl">📞</button>
          <button className="text-green-600 text-xl">🟢</button>
        </div>
      </CardFooter>
    </Card>
  );
};

const PropertiesGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {propertiesData.map((property: Property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertiesGrid;
