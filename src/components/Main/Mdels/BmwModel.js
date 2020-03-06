/**
 * Created by Dell on 01.03.2020.
 */
import React from 'react';
import Model from "./Models";


const BmwModel = (props) => {
    console.log("!!!!!!!!!!!!!", props.bmw.models);


    return(

         props.bmw.models.map( (model, index) => <Model model={model} key={index} />)
    )
};

export default BmwModel;