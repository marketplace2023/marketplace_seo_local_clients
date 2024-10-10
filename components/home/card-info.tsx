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
    <Card className="flex items-center justify-between p-6 bg-gray-50 rounded-xl border border-gray-800 shadow-sm">
      <CardContent className="flex flex-col">
        <CardTitle className="text-lg font-bold text-green-500">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-700">
          {description}
        </CardDescription>
      </CardContent>
      <Image src={image} width={150} height={150} alt={`${title} logo`} />
    </Card>
  );
};

export default CardInfo;
