import dheart from '../img/dheart icon.png'
import heart from '../img/heart icon.png'
function AddFav(favorno) {
    if (favorno) {
        return (<img src={heart} alt="dheart" className="col-8" />);
    } else {
        return (<img src={dheart} alt="dheart" className="col-8" />);
    }
}
export default AddFav;