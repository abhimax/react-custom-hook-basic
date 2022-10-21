import { useEffect, useState } from "react";

const useCounter = (isFwd = true) => {
        const [counter, setCounter] = useState(0);
        useEffect(() => {
          const interval = setInterval(() => {
            if(isFwd){
              setCounter((prevCounter) => prevCounter + 1);
            }else{
              setCounter((prevCounter) => prevCounter - 1);
            }
          }, 1000);
      
          return () => clearInterval(interval);
        }, []);
        return counter;
}
export default useCounter;