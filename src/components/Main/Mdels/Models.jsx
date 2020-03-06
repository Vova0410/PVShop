import React from 'react';
import classes from './Model.module.css';



const Model = (props) => {
    console.log(props);

    return (
        <div className={classes.container}>
            <div >
                <img src={props.model.modelImg} alt={props.model.modelName} className={classes.img}/>
            </div>
            <div className={classes.title}>
                {props.model.modelName}
            </div>
        </div>


    )
};

export default Model;


/*
 image={props.model.modelImg}
 title={props.model.modelName}
 */
