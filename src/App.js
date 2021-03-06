import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainContent from "./components/Main/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import {connect} from "react-redux";
import {setItemsCreator} from "./store/reducers/mersedes-reducer";


function App(props) {
    return (
            <div className="app_container">
                <div className="header">
                    <Header/>
                </div>

                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="main_content">
                    <MainContent cars={props.cars} isReady={props.isReady} />
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
    );
}

const mapStateToProps = (state) => ({
    cars: state.items.cars,
    isReady: state.items.isReady
});

const mapDispatchToProps = (dispatch) => ({
    setItems: (item) => dispatch(setItemsCreator(item))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
