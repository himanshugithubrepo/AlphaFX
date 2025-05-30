import CategoryCard from "./CategoryCard";

export default function Categories({ category }) {
  return (
    <div>
      <h3 className="text-3xl m-2 ">{category}</h3>
      <div className="lg:flex lg:overflow-x-scroll flex-wrap lg:flex-nowrap">
        <CategoryCard
          source="https://github.com/himanshugithubrepo/eduhub"
          title="EduHub"
          description="A full-stack educational platform built using Django, enabling students and educators to share and access structured learning content."
        />
        <CategoryCard
          source="https://github.com/himanshugithubrepo/bitcoincoinpriceprediction"
          title="Bitcoin Price Prediction"
          description="Developed a time-series forecasting model to predict Bitcoin price trends using historical data and deep learning."
        />
        <CategoryCard
          source="https://github.com/himanshugithubrepo/hiflix"
          title="Hiflix"
          description="A fully responsive OTT platform user interface inspired by Netflix."
        />
        <CategoryCard
          source="https://github.com/himanshugithubrepo/grafana-dash"
          title="Grafana Inspired Dashboard"
          description="A fully responsive OTT platform user interface inspired by Netflix."
        />
      </div>
    </div>
  );
}
