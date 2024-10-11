import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface CardInfoProps {
  title: string;
  description: string;
  image: string;
}

const CardInfo: React.FC<CardInfoProps> = ({ title, description, image }) => {
  return (
    <Card className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-800 shadow-md hover:shadow-lg">
      <CardContent className="flex flex-col">
        <CardTitle className="text-md font-semibold text-lime-600">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-700">
          {description}
        </CardDescription>
      </CardContent>
      <Image src={image} width={120} height={120} alt={`${title} logo`} />
    </Card>
  );
};

export default CardInfo;
