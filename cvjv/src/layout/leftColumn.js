
import "../components/PrintButton.css"

import '../components/SkillBar.css';
import { useTranslation } from 'react-i18next';

import PrintButton from "../components/PrintButton";


const lngs = {
  en: { nativeName: 'English' },
  sk: { nativeName: 'Slovak' }
};

const LeftColumn = ({ handlePrint }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="left">
      <div className="container">
        <hr />
        <b>{t("Language skills")}</b>
        <hr />
        <div className="skill-box">
          <span className="title">{t("Slovak")}</span>
          <div className="skill-bar">
            <span className="skill-per hundret">
              <span className="tooltip">100%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">{t("English")}</span>
          <div className="skill-bar">
            <span className="skill-per seventy">
              <span className="tooltip">70%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">{t("German")}</span>
          <div className="skill-bar">
            <span className="skill-per twentyfive">
              <span className="tooltip">25%</span>
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <hr />
        <b>{t("Driving license")}</b>
        <hr />
        <div className="skill-box">
          <span className="title">{t("B, B1")}</span>
        </div>
      </div>

      <div className="buttons">
        <PrintButton handlePrint={handlePrint} />
            {Object.keys(lngs).map((lng) => (
            <button className="btn" key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
      </div>
    </div>
  );
};

export default LeftColumn;
