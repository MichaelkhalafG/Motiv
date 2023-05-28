import car from '../img/car1.png'
import Vector1 from '../img/Vector1.png'
import Vector2 from '../img/Vector2.png'
import Vector3 from '../img/Vector3.png'
import Vector4 from '../img/Vector4.png'
import AddFav from './AddFav'
import BuyButton from './BuyButton'
function CarsCard(props) {
    let id = ['#', props.car_model, props.car_model_year, props.id];
    id = id.join('').replaceAll(' ', '');
    let id2 = ['#', props.car_model, props.car_model_year, props.id, "2"];
    id2 = id2.join('').replaceAll(' ', '');
    let button_name = "Buy " + props.car_model + " " + props.car_model_year;
    let button_props = {
        car_model: props.car_model,
        car: props.car,
        id_for_function: id,
        id_for_function2: id2,
        id: id.replaceAll('#', ''),
        id2: id2.replaceAll('#', ''),
        Name: button_name
    }
    return (
        <div className="card h-100 border-0 col-xl-4 bg-light col-sm-6 col-12 align-self-center p-1"
            data-aos="fade-up" data-aos-duration="1500" key={props.id} >
            <div className="bg-white rounded-4 p-3">
                <div className="card-body row">
                    <div className='col-10'>
                        <h6 className="card-title">{props.car_model}</h6>
                        <p className="card-text ">{props.car}</p>
                    </div>
                    <AddFav />
                </div>
                <div className="row justify-content-center col-12">
                    <img src={car} className="col-7 car_card_img" alt="car1" />
                </div>
                <div className="row col-12 pt-4 justify-content-between">
                    <div className="col-6 m-0 p-2">
                        <img src={Vector1} alt="vector1" className="col-2 m-0 p-0" />
                        <span className="col-10 m-0 p-2" >color : {props.car_color}</span>
                    </div>
                    <div className="col-6 m-0 p-2">
                        <img src={Vector3} alt="vector1" className="col-2 m-0 p-0" />
                        <span className="col-10 m-0 p-2" >made in : {props.car_model_year}</span>
                    </div>
                    <div className="col-6 m-0 p-2">
                        <img src={Vector2} alt="vector1" className="col-2 m-0 p-0" />
                        <span className="col-10 m-0 p-2" >price : {props.price}</span>
                    </div>
                    <div className="col-6 m-0 p-2">
                        <img src={Vector4} alt="vector1" className="col-2 m-0 p-0" />
                        <span className="col-10 m-0 p-2" >availability : {props.availability.toString()}</span>
                    </div>
                </div>
                <div className='row pb-3 pt-0 justify-content-center'>
                    {BuyButton(button_props)}
                </div>
            </div>
        </div>
    )
}
export default CarsCard;