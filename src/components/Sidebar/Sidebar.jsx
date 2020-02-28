import React from 'react';
import * as  axios from 'axios';
import {connect} from "react-redux";
import {setItemsCreator} from "../../store/reducers/mersedes-reducer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



class Sidebar extends React.Component {

    componentDidMount() {
        const {setItems} = this.props;
        axios.get('models.json').then(response => setItems(response.data))
    }

    render() {
        console.log(this.props.mercedes, this.props.isReady);
        return (
            <List component="nav">
                {!this.props.isReady ? 'Loading...' : this.props.mercedes.map((item, index) => (
                    <ListItem button divider key={index}>
                        <ListItemText primary={item.title} />
                    </ListItem>
            ))}
            </List>
        )

    }


}

const mapStateToProps = (state) => ({
    mercedes: state.mercedes.mercedes,
    isReady: state.mercedes.isReady
});

const mapDispatchToProps = (dispatch) => ({
    setItems: (item) => dispatch(setItemsCreator(item))
});


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);