import React from "react";
import ReactDOM from "react-dom/client";
import ClassComponent from "./ClassComponent";
import App from "./App";
import Student from "./Student";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);





// root.render(<App />);
root.render(<>
              {/* <ClassComponent />
              <App /> */}
              <Student name="Pavani" age="20" college="JNTUCEP" />
              <Student name="Pavi" age="21" college="JNTUP" />

            </>);