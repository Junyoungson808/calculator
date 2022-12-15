import { useContext } from "react";
import { CalcContext } from "../Context/CalcContext";
// import { Textfit } from 'react-textfit';

const Screen = () => {
  const { calc } = useContext(CalcContext);
  
  return (
    <div className="screen">12312412312</div>
  )
}

export default Screen;