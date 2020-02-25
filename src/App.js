import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainContent from "./components/Main/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="app_container">
            <div className="header">
                <Header/>
            </div>

            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="main_content">
                <MainContent/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
