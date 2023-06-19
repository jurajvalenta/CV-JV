import '../components/SkillBar.css';
import { TbCertificate } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';


const RightColumn = () => {

  const { t, } = useTranslation();
  return (
    <div className="right" >
      <div className="container">
      <hr />
      <b>{t("SKILLS")}</b>
      <hr />
        <div className="skill-box">
          <span className="title">Photoshop</span>
          <div className="skill-bar">
            <span className="skill-per eighty">
              <span className="tooltip">80%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Illustrator</span>
          <div className="skill-bar">
            <span className="skill-per eighty">
              <span className="tooltip">80%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">JavaScript</span>
          <div className="skill-bar">
            <span className="skill-per fifty">
              <span className="tooltip">50%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">ReactJS</span>
          <div className="skill-bar">
            <span className="skill-per fifty">
              <span className="tooltip">50%</span>
            </span>
          </div>
        </div>
      <div className="skill-box">
          <span className="title">HTML</span>
          <div className="skill-bar">
            <span className="skill-per sixty">
              <span className="tooltip">60%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">CSS</span>
          <div className="skill-bar">
            <span className="skill-per fifty">
              <span className="tooltip">50%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">SQL</span>
          <div className="skill-bar">
            <span className="skill-per fourty">
              <span className="tooltip">40%</span>
            </span>
          </div>
        </div>
      <div className="skill-box">
          <span className="title">Prestashop</span>
          <div className="skill-bar">
            <span className="skill-per eighty">
              <span className="tooltip">80%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Wordpress</span>
          <div className="skill-bar">
            <span className="skill-per seventy">
              <span className="tooltip">70%</span>
            </span>
          </div>
        </div>
      <hr />
      </div>
      <div className="container">
        <b>{t("CERTIFICATES")}</b>
        <hr />
          <p><TbCertificate/> CCNA EXPLORATION</p>
          <span className="certificate-title"> Network Fundamentals</span>
          <p><TbCertificate/> CCNA EXPLORATION</p>
          <span className="certificate-title"> Routing Protocols and Concepts</span>
      </div>
    </div>
  )
}

export default RightColumn
