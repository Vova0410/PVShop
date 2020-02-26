import React from 'react';
import * as  axios from 'axios';
import {connect} from "react-redux";
import {setItemsCreator} from "../../store/reducers/mersedes-reducer";
import {Dropdown, Menu} from "semantic-ui-react";


class Sidebar extends React.Component {

    componentDidMount() {
        const {setItems} = this.props;
        axios.get('models.json').then(response => setItems(response.data))
    }

    render() {
        console.log(this.props.mercedes, this.props.isReady);
        return (
            <div>
                {!this.props.isReady ? 'Loading...' : this.props.mercedes.map((item, index) => (
                <Menu secondary vertical key={index}>
                    <Dropdown item text={item.title}>
                        <Dropdown.Menu>
                            <Dropdown.Item>Electronics</Dropdown.Item>
                            <Dropdown.Item>Automotive</Dropdown.Item>
                            <Dropdown.Item>Home</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu>
            ))}
            </div>
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