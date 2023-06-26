import jv from "../img/jv.png";
import "./header.css";
import "../components/PrintButton.css"
import { contact } from "../data";
import { ImLocation } from 'react-icons/im';
import { useTranslation } from 'react-i18next';




const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="header">
       
        <div className="title-name">
          <img src={jv} alt="jv" className="photo" />
         {contact.map((titleName) => <h1>{titleName.name}</h1> )} 
        </div>
      </div>

      <div className="contact">
        
        {contact.map((oneElement) => (
          <div className="contact-center">
          <div className="contact-block">
            <p>{t("Tel. contact")}:</p>
            <a href={`callto:${oneElement.phone}`}>{oneElement.phone}</a>
          </div>

          <div className="contact-block">
            <p>E-mail:</p>
            <a href={`mailto:${oneElement.email}`}>{oneElement.email}</a>
          </div>

          <div className="contact-block">
            <p>{t("Residence")}:</p>
            <a href={`${oneElement.location}`}><ImLocation />{oneElement.residence}</a>
          </div>
        </div>
        ))}
      </div>
      
    </>
  )
}

export default Header
