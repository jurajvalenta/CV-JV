import { BiPrinter } from 'react-icons/bi';
import "./PrintButton.css"
import { useTranslation } from 'react-i18next';

const PrintButton = ({ handlePrint }) => {
  const { t, } = useTranslation();
    const handleButtonClick = () => {
      handlePrint();
    }

  return <button className="btn" onClick={handleButtonClick}><BiPrinter/> {t("Print")}</button>
};

export default PrintButton;
