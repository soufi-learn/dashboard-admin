import { useState } from "react";
import FeatureItem from "./Featureitem";

const Features = () => {
  const [featuresList, setFeaturesList] = useState([
    { id: 1, title: "درآمد", price: "۴۸,۶۸۰,۰۰۰", profit: "۲۴.۵ -" },
    { id: 2, title: "درآمد", price: "۴۸,۶۸۰,۰۰۰", profit: "۲۴.۵ +" },
    { id: 3, title: "درآمد", price: "۴۸,۶۸۰,۰۰۰", profit: "۲۴.۵ -" },
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
