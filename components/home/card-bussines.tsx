import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { clientsData } from "../data/mock-data";
import Link from "next/link";

// Definir la interfaz de Cliente
interface Client {
  id: number;
  name: string;
  title: string;
  description: string;
  status: string;
  joinedDate: string;
  imageUrl: string;
}

// Definir las propiedades que recibe ProfileCard
interface ProfileCardProps {
  client: Client;
}

const ProfileCard = ({ client }: ProfileCardProps) => {
  return (
    <Link href={`/clients/${client.id}`}>
      <Card className="max-w-sm mx-auto shadow-lg rounded-lg p-4">
        <CardHeader className="flex flex-col items-center">
          <div className="relative">
            <Image
              src={client.imageUrl}
              alt={client.name}
              width={100}
              height={100}
              className="rounded-full"
            />
            <span className="absolute top-0 right-0 block h-4 w-4 bg-green-400 rounded-full ring-2 ring-white"></span>
          </div>
          <CardTitle className="text-xl font-bold mt-4">
            {client.name}
          </CardTitle>
          <p className="text-gray-500 text-sm">{client.title}</p>
        </CardHeader>
        <CardContent className="text-center mt-4">
          <p className="text-gray-600 text-sm">{client.description}</p>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <div className="w-full bg-gray-100 p-2 rounded-lg flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-500">Status</span>
            <Badge className="bg-green-100 text-green-600 rounded-md">
              {client.status}
            </Badge>
          </div>
          <div className="w-full bg-gray-100 p-2 rounded-lg flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">Joined On</span>
            <span className="text-sm font-medium text-gray-900">
              {client.joinedDate}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

const ClientsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {clientsData.map((client: Client) => (
        <ProfileCard key={client.id} client={client} />
      ))}
    </div>
  );
};

export default ClientsGrid;
