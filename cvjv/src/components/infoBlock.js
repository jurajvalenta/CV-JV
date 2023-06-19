import { BsFillGeoAltFill } from "react-icons/bs";
import  "./infoBlock.css";
import { useTranslation } from 'react-i18next';

const InfoBlock = ({title, subject, place, adress, years}) => {

  const { t, } = useTranslation();

  return (
    <div className="one-infoBlock">
        <section>
            <div className="subject-years"><h2>{t(title)}</h2><p className="years">{years}</p></div>
            <hr />
            <p>{t(subject)}</p>
            <hr />
            <p>{t(place)}</p>
            <p><BsFillGeoAltFill /> {adress}</p>
            <br />
        </section>
    </div>
  )
}

export default InfoBlock
