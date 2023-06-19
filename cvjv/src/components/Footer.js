
import "./Footer.css"


const Footer = () => {

    const today = new Date();

  return <p className="footer"> 
    © {today.getFullYear()} Juraj Valenta - CV
    </p>
}

export default Footer
