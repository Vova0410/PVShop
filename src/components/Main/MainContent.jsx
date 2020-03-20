import React from 'react';
import {Route} from "react-router-dom";
import BmwModel from "./Models/BmwModel";
import classes from './MainContent.module.css';
import AirsuspensionsContainer from "./AirSuspensions/AirsuspensionsContainer";


const MainContent = (props) => {
    //console.log('MainContent', props);
    if(!props.isReady){
        return "Loading!!!!!!!!!!!!!!!!!!!!!!"
    } else {

        return(
            <div className={classes.content_wrapper}>
                <Route path="/mercedes" render={() => "Mercedes"}/>
                <Route exact path="/bmw/" render={() => <BmwModel />}/>
                <Route path="/bmw/:carName" render={() => <AirsuspensionsContainer />}/>
                <Route path="/range-rover" render={() => "Range"}/>
                <Route path="/audi" render={() => "Audi"}/>
            </div>
        )
    }

};


export default MainContent;