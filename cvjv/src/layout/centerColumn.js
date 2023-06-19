import { useState } from "react";
import infoBlocks from "../data";
import InfoBlock from "../components/infoBlock";
import "./centerColumn.css"
import { useTranslation } from 'react-i18next';



const CenterColumn = () => {
  const [showMoreWork, setShowMoreWork] = useState(false);
  const [showMoreEducation, setShowMoreEducation] = useState(false);

  const handleShowMoreWork = () => {
    setShowMoreWork(!showMoreWork);
  };

  const handleShowMoreEducation = () => {
    setShowMoreEducation(!showMoreEducation);
  };

  const { t, } = useTranslation();

  return (
    <div className="center">
      <div className="info-block">
      <h1>{t("WORK EXPERIENCE")}</h1>
      {infoBlocks
        .filter((oneInfoBlock) => oneInfoBlock.type === "job")
        .slice(0, showMoreWork ? infoBlocks.length : 2)
        .map((oneInfoBlock) => (
          <InfoBlock key={oneInfoBlock.id} {...oneInfoBlock} />
        ))}
        
      {infoBlocks.length > 2 && (
        <button className="show" showmorework={showMoreWork.toString()} onClick={handleShowMoreWork}>{showMoreWork ? t("Show less") : t("Show more")}</button>
      )} 
      </div>
      <div className="info-block">
      <h1>{t("EDUCATION")}</h1>
      {infoBlocks
        .filter((oneInfoBlock) => oneInfoBlock.type === "school")
        .slice(0, showMoreEducation ? infoBlocks.length : 2)
        .map((oneInfoBlock) => (
          <InfoBlock key={oneInfoBlock.id} {...oneInfoBlock} />
        ))}
        
      {infoBlocks.length > 2 && (
        <button className="show" showmoreeducation={showMoreEducation.toString()} onClick={handleShowMoreEducation}>{showMoreEducation ? t("Show less") : t("Show more")}</button>
      )} 
      </div>
    </div>
   
  );
};

export default CenterColumn;
