
import "../components/PrintButton.css"
import '../components/SkillBar.css';
import { languageSkills, extraSkills } from "../data";
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
        {languageSkills.map((oneLanguage) => (
          <div className="skill-box">
            <div key={oneLanguage.id}>
              <span className="title">{t(oneLanguage.language)}</span>
              <div className="skill-bar">
                <span className={`skill-per ${oneLanguage.class}`}>
                  <span className="tooltip">{oneLanguage.level}%</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container">
        <hr />
        {extraSkills.map((oneExtraSkill) => (
          <b key={oneExtraSkill.id}>{t(oneExtraSkill.title)}</b>
        ))}
        <hr />
        <div className="skill-box">
          {extraSkills.map((oneExtraSkill) => <span className="title" key={oneExtraSkill.id}>{t(oneExtraSkill.drivingLicense)}</span>
          )}
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
