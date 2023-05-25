import dheart from '../img/dheart icon.png'
import heart from '../img/heart icon.png'
import React from 'react';
class AddFav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavorite: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            isFavorite: !prevState.isFavorite,
        }));
    }

    render() {
        return (
            <button className="border-0 bg-white col-2" onClick={this.handleClick}>
                {this.state.isFavorite ? <img src={heart} alt="heart" className="col-8" /> : <img src={dheart} alt="dheart" className="col-8" />}
            </button>
        );
    }
}
export default AddFav;