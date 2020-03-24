/**
 * Created by Dell on 21.03.2020.
 */
import React from 'react';
import {connect} from "react-redux";
import {Route, withRouter} from "react-router-dom";
import * as  axios from 'axios';
import {setAirSusCreator} from "../../../store/reducers/airsus-reducer";



class AirsuspensionsContainer extends React.Component {

    componentDidMount() {
        axios.get('airsuspensions.json').then(respons => console.log("RESPONS", respons.data))
    }

    render() {
        console.log("AirsuspensionsContainer", this.props);
        return(
            this.props.match.params.carName
        )
    };
    }


const mapStateToProps = (state) => ({
    cars: state.items.cars,
    //isReady: state.items.isReady
});

const mapDispatchToProps = (dispath) => ({
    setAirsus: (airSus) => setAirSusCreator(airSus)
});

let WithRouterAirsuspensionsContainer = withRouter(AirsuspensionsContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithRouterAirsuspensionsContainer);