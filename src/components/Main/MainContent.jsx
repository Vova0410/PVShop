import React from 'react';
import {Route} from "react-router-dom";
import BmwModel from "./Mdels/BmwModel";
import classes from './MainContent.module.css';


const MainContent = (props) => {
    console.log('MainContent', props);
    if(!props.isReady){
        return "Loading!!!!!!!!!!!!!!!!!!!!!!"
    } else {
        let bmw = props.cars.filter(car => car.title === "BMW");
        console.log("BMWWWW", bmw);
        return(
            <div className={classes.content_wrapper}>
                <Route path="/mercedes" render={() => "Mercedes"}/>
                <Route path="/bmw" render={() => <BmwModel bmw={bmw[0]} isReady={props.isReady} />}/>
                <Route path="/range-rover" render={() => "Range"}/>
                <Route path="/audi" render={() => "Audi"}/>
            </div>
        )
    }

};


export default MainContent;