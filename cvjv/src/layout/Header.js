import jv from "../img/jv.png";
import "./header.css";
import "../components/PrintButton.css"
import { ImLocation } from 'react-icons/im';
import { useTranslation } from 'react-i18next';




const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="header">

        <div className="title-name">
          <img src={jv} alt="jv" className="photo" />
          <h1> Juraj VALENTA</h1>
        </div>
      </div>

      <div className="contact">
        <div className="contact-center">

          <div className="contact-block">
            <p>{t("Tel. contact")}:</p>
            <a href="callto:+421 915 129 626">+421 915 129 626</a>
          </div>

          <div className="contact-block">
            <p>E-mail:</p>
            <a href="mailto:jurajvalenta@gmail.com">jurajvalenta@gmail.com</a>
          </div>

          <div className="contact-block">
            <p>{t("Residence")}:</p>
            <a href="https://goo.gl/maps/3UXnT7UuuUjBeYpK8"><ImLocation />Banská Bystrica, Slovakia </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
