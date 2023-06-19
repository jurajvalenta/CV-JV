import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Left from "./layout/leftColumn";
import Right from "./layout/rightColumn";
import Center from "./layout/centerColumn";
import Header from "./layout/Header";
import Footer from "./components/Footer";



const App = () => {

  const componentRef = useRef();
 
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Juraj Valenta - CV",
    onBeforeGetContent: () => {
      componentRef.current.classList.add("print");
    },
    onAfterPrint: () => {
      componentRef.current.classList.remove("print");
    },
  });

  return (
    <div ref={componentRef}>
      <Header />
      <div className={"layout"} >
        <Left handlePrint={handlePrint}/>
        <Center />
        <Right />
      </div>
      <Footer />
    </div>
  );
};

export default App;
