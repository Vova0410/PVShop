import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Model.module.css';




const Model = (props) => {
    //console.log("Model++++", props);

    return (
        <NavLink className={classes.model_link} activeClassName={classes.active_model_link} to={props.model.modelUrl}>
            <div className={classes.container}>
                <div className={classes.img_wrapper}>
                    <img src={props.model.modelImg} alt={props.model.modelName} className={classes.img}/>
                </div>
                <div className={classes.title}>
                    {props.model.modelName}
                </div>
            </div>
        </NavLink>
    )
};

export default Model;


/*<Switch >
 <Route exact={} path={} render={() => <CarMo del/>}/>

 </Switch>*/


/*
 image={props.model.modelImg}
 title={props.model.modelName}
 */
