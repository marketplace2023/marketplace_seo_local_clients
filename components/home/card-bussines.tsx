import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const ProfileCard = () => {
  return (
    <Card className="max-w-sm mx-auto shadow-lg rounded-lg p-4">
      <CardHeader className="flex flex-col items-center">
        <div className="relative">
          <Image
            src="/assets/profile.jpg"
            alt="Michael Simbal"
            width={100}
            height={100}
            className="rounded-full"
          />
          <span className="absolute top-0 right-0 block h-4 w-4 bg-green-400 rounded-full ring-2 ring-white"></span>
        </div>
        <CardTitle className="text-xl font-bold mt-4">Michael Simbal</CardTitle>
        <p className="text-gray-500 text-sm">Marketing Exec. at Denva Corp</p>
      </CardHeader>
      <CardContent className="text-center mt-4">
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto,
          placeat!
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <div className="w-full bg-gray-100 p-2 rounded-lg flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-500">Status</span>
          <Badge className="bg-green-100 text-green-600 rounded-md">
            Open for side gigs
          </Badge>
        </div>
        <div className="w-full bg-gray-100 p-2 rounded-lg flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500">Joined On</span>
          <span className="text-sm font-medium text-gray-900">
            Apr 08, 2022
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
