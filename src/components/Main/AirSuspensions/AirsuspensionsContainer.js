/**
 * Created by Dell on 21.03.2020.
 */
import React from 'react';
import {connect} from "react-redux";
import {Route, withRouter} from "react-router-dom";



const AirsuspensionsContainer = (props) => {
console.log("AirsuspensionsContainer", props);
    return(
       "Airsuspensions"
    )
};

const mapStateToProps = (state) => ({
    cars: state.items.cars,
    isReady: state.items.isReady
});

let WithRouterAirsuspensionsContainer = withRouter(AirsuspensionsContainer);

export default connect(mapStateToProps)(WithRouterAirsuspensionsContainer);