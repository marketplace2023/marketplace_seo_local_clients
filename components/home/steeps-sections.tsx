import { stepsData } from "../data/mock-data";
import CollapsibleSection from "./collapsible-section";

const SteepsSection = () => {
  return (
    <>
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mt-2">Our Working Process </h1>
        <p className="text-base text-gray-500 mt-4">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div>
        {stepsData.map((stepInfo) => (
          <CollapsibleSection
            key={stepInfo.step}
            step={stepInfo.step}
            title={stepInfo.title}
            content={stepInfo.content}
          />
        ))}
      </div>
    </>
  );
};

export default SteepsSection;
