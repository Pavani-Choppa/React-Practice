import {useState} from 'react';
import './ConditionalRendering.css'

function ConditionalRendering() {
  const [boxColor,setBoxColor] = useState("red");
  
//   const renderELement = () => {
//     if(boxColor === "red"){
//         return <div className="box red-box"></div>
//     }
//     return  <div className="box green-box"></div>
     
//   }

    // const renderELement = () => {
    //     switch(boxColor){
    //         case "red": return <div className="box red-box"></div>;
    //         case "green":return  <div className="box green-box"></div>;
    //         default : return null;
    //     }
     
    // }

    // const renderELement = () => {
    //     return boxColor === "red" ? (<div className="box red-box"></div>) 
    //     :(<div className="box green-box"></div>)
     
    // }

  return (
    <div className="container">
      <h2>Conditional Rendering</h2>
      
      <div className="buttons">
        {boxColor === "red" && (
            <>
                <button
                    className={boxColor === "red" ? "red-btn active":"red-btn"}
                    onClick={() => setBoxColor("red")}
                    >
                    Red
                    </button>

                    <button
                    className={boxColor === "green" ? "green-btn active":"green-btn"}
                    onClick={() => setBoxColor("green")}
                    >
                    Green
                    </button>
            </>
        )}   
        {boxColor === "green" && (
            <>
                    <button
                        className="red-btn"
                        onClick={() => setBoxColor("red")}
                        >
                        Red
                        </button>

                        <button
                        className="green-btn active"
                        onClick={() => setBoxColor("green")}
                        >
                        Green
                        </button>
            </>
        )} 
        
      </div>

      <div className="boxes">
        {/* {renderELement()} */}
        {/* {boxColor === "red" ? (<div className="box red-box"></div>) 
        :(<div className="box green-box"></div>)} */}
        {/* {boxColor === "red" ? (<div className="box red-box"></div>): null}   
        {boxColor === "green" ? (<div className="box green-box"></div>): null}    */}
         {boxColor === "red" && <div className="box red-box"></div>}   
         {boxColor === "green" && <div className="box green-box"></div>}
      </div>
    </div>
  );
}

export default ConditionalRendering;