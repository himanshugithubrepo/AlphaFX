import CategoryCard from "./CategoryCard";
import colorgrad1 from '../assets/colorgrad1.jpg'
import colorgrad2 from '../assets/colorgrad2.jpg'
import vfx1 from '../assets/vfx1.jpg'
import vfx2 from '../assets/vfx2.jpg'


export default function Categories({ category }) {

  const colorGradImages =[colorgrad1,colorgrad2];
  const vfxImages =[vfx1,vfx2];


  return (
    
      
    <div className="relative w-full min-h-screen px-4 py-16 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
  
    <div className="flex flex-wrap justify-center gap-6">
      <CategoryCard
        images={colorGradImages}
        source="https://github.com/himanshugithubrepo/eduhub"
        title="Color Grading"
        description="A full-stack educational platform built using Django, enabling students and educators to share and access structured learning content."
      />
      <CategoryCard
        images={vfxImages}
        source="https://github.com/himanshugithubrepo/bitcoincoinpriceprediction"
        title="VFX"
        description="Developed a time-series forecasting model to predict Bitcoin price trends using historical data and deep learning."
      />

      <CategoryCard
        images={vfxImages}
        source="https://github.com/himanshugithubrepo/bitcoincoinpriceprediction"
        title="3D"
        description="Developed a time-series forecasting model to predict Bitcoin price trends using historical data and deep learning."
      />
      
    </div>
  
</div>

    
  );
}
