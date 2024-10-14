// app/clients/[id]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { clientsData } from "@/components/data/mock-data";

interface Client {
  id: number;
  name: string;
  title: string;
  description: string;
  status: string;
  joinedDate: string;
  imageUrl: string;
}

export default function ClientDetail({ params }: { params: { id: string } }) {
  const client = clientsData.find((c) => c.id === Number(params.id));

  if (!client) {
    return <div>Cliente no encontrado</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link
        href="/"
        className="mb-4 inline-block text-blue-600 hover:text-blue-800"
      >
        &larr; Volver a la lista de clientes
      </Link>
      <Card className="max-w-2xl mx-auto shadow-lg rounded-lg p-6">
        <CardHeader className="flex flex-col items-center">
          <div className="relative">
            <Image
              src={client.imageUrl}
              alt={client.name}
              width={200}
              height={200}
              className="rounded-full"
            />
            <span className="absolute top-0 right-0 block h-6 w-6 bg-green-400 rounded-full ring-2 ring-white"></span>
          </div>
          <CardTitle className="text-3xl font-bold mt-6">
            {client.name}
          </CardTitle>
          <p className="text-gray-500 text-xl mt-2">{client.title}</p>
        </CardHeader>
        <CardContent className="text-center mt-6">
          <p className="text-gray-600 text-lg">{client.description}</p>
        </CardContent>
        <CardFooter className="flex flex-col items-center mt-6">
          <div className="w-full bg-gray-100 p-4 rounded-lg flex justify-between items-center mb-4">
            <span className="text-lg font-medium text-gray-500">Status</span>
            <Badge className="bg-green-100 text-green-600 rounded-md text-lg px-4 py-2">
              {client.status}
            </Badge>
          </div>
          <div className="w-full bg-gray-100 p-4 rounded-lg flex justify-between items-center">
            <span className="text-lg font-medium text-gray-500">Joined On</span>
            <span className="text-lg font-medium text-gray-900">
              {client.joinedDate}
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
