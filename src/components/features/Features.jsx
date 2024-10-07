import { useState } from "react";
import FeatureItem from "./FeatureItem";

const Features = () => {
  const [featuresList, setFeaturesList] = useState([
    { id: 1, title: "درآمد", price: "۴۸,۶۸۰,۰۰۰", profit: "۴۴ +" },
    { id: 2, title: "فروش", price: "۲۹,۰۰۰,۰۰۰", profit: "۱۷.۵ +" },
    { id: 3, title: "هزینه ها", price: "۱۵,۲۰۰,۰۰۰", profit: "۳۴.۲ -" },
  ]);
  return (
    <div className="flex gap-4">
      {featuresList.map((feature) => (
        <FeatureItem key={feature.id} feature={feature} />
      ))}
    </div>
  );
};

export default Features;
