"use client";
import { useState } from "react";

interface CollapsibleSectionProps {
  step: number;
  title: string;
  content: string;
}

const CollapsibleSection = ({
  step,
  title,
  content,
}: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div className="border rounded-lg p-4 bg-gray-100 m-8">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            {step < 10 ? `0${step}` : step} {title}
          </div>
          <button className="text-2xl focus:outline-none" onClick={toggleOpen}>
            {isOpen ? "-" : "+"}
          </button>
        </div>
        {isOpen && (
          <div className="mt-4">
            <p className="text-gray-600">{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollapsibleSection;
