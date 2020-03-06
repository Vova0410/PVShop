import React from 'react';
import * as  axios from 'axios';
import {connect} from "react-redux";
import {setItemsCreator} from "../../store/reducers/car-reducer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {NavLink} from "react-router-dom";


class Sidebar extends React.Component {

    componentDidMount() {
        const {setItems} = this.props;
        axios.get('models.json').then(response => setItems(response.data))
    }

    render() {
        console.log(this.props.cars, this.props.isReady);
        return (
            <List component="nav">
                {!this.props.isReady ? 'Loading...' : this.props.cars.map((item, index) => (
                    <NavLink to={item.url} key={index} style={{textDecoration: 'none'}}>
                        <ListItem button divider >
                            <ListItemText primary={item.title}/>
                        </ListItem>
                    </NavLink>

                ))}
            </List>
        )

    }


}

const mapStateToProps = (state) => ({
    cars: state.items.cars,
    isReady: state.items.isReady
});

const mapDispatchToProps = (dispatch) => ({
    setItems: (item) => dispatch(setItemsCreator(item))
});


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);