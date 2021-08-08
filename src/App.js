import React, {useState, useEffect} from "react";
import AppDesktop from "./AppDesktop";
import AppMobile from "./AppMobile";

export default function App(){
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  return(
    <div>
      {width >= 600 ? <AppDesktop /> : <AppMobile />}
    </div>
  )
}