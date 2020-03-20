/**
 * Created by Dell on 01.03.2020.
 */
import React from 'react';
import Model from "./Models";
import {setItemsCreator} from "../../../store/reducers/car-reducer";
import {connect} from "react-redux";

const BmwModel = (props) => {
    let bmw = props.cars.filter(car => car.title === "BMW")[0];
    //console.log("BMWWWW", props);

    return(
        bmw.models.map( (model, index) => <Model model={model} key={index} />)
    )
};


const mapStateToProps = (state) => ({
    cars: state.items.cars,
    isReady: state.items.isReady
});

const mapDispatchToProps = (dispatch) => ({
    setItems: (item) => dispatch(setItemsCreator(item))
});


export default connect(mapStateToProps, mapDispatchToProps)(BmwModel);

