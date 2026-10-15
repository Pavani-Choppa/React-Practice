import React from "react";
import ReactDOM from "react-dom/client";
import MyImageComponent from "./MyImageComponent";
// import ClassComponent from "./ClassComponent";
import App from "./App";
// import Student from "./Student";
// import useStateHookEx from "./useStateHookEx";
// import FunctionalHooks from "./functionalHooks";
// import FunctionalHooks from "./FunctionalHooks";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);





// root.render(<App />);
root.render(<>
              {/* <ClassComponent /> */}
              <App /> 
              {/* <Student name="Pavani" age="20" college="JNTUCEP" />
              <Student name="Pavi" age="21" college="JNTUP" /> */}
              {/* <useStateHookEx /> */}
              {/* <FunctionalHooks /> */}
              {/* <MyImageComponent /> */}
            </>);