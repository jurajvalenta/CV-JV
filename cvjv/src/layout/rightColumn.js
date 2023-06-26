import '../components/SkillBar.css';
import { TbCertificate } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
import { skills, certificates } from "../data";


const RightColumn = () => {

  const { t, } = useTranslation();
  return (
    <div className="right" >
      <div className="container">
        <hr />
        <b>{t("SKILLS")}</b>
        <hr />
        {skills.map((oneSkill) => (
          <div className="skill-box">
            <div key={oneSkill.id}>
              <span className="title">{t(oneSkill.name)}</span>
              <div className="skill-bar">
                <span className={`skill-per ${oneSkill.class}`}>
                  <span className="tooltip">{oneSkill.level}%</span>
                </span>
              </div>
            </div>
          </div>
        ))}
        <hr />
      </div>
      <div className="container">
        <b>{t("CERTIFICATES")}</b>
        <hr />
        {certificates.map((oneCertificate) => (
          <div>
            <p><TbCertificate /> {oneCertificate.name}</p>
            <span className="certificate-title">{oneCertificate.subject}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RightColumn
