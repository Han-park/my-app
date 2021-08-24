import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Main from "./Main";
import Menu from "./Menu";
import Sidebar from "./Sidebar";

function App(){
    return(
        <div>
            <Header/>
            <Main />
            <Sidebar/>
        </div>
    );

}

export default App;