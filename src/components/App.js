import React from "react";
import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";
import MainContent from "./MainContent";
import ResultItem from "./ResultItem";


function App() {
    return <div className = "app-container" >
        <SideMenu / >
         <TopMenu / >
        <MainContent / >
        <ResultItem name="Bubby's" price="$$$" location="Tribeca" />
      <ResultItem name="Nathan's Famous" price="$" location="Coney Island" />

        </div>;
}

export default App;