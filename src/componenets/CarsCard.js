import car from '../img/car1.png'
import Vector1 from '../img/Vector1.png'
import Vector2 from '../img/Vector2.png'
import Vector3 from '../img/Vector3.png'
import Vector4 from '../img/Vector4.png'
import AddFav from './AddFav'
function CarsCard(props) {
    let favorno = false;
    return (
        <div className="card h-100 border-0 col-xl-4 bg-light col-sm-6 col-12 align-self-center p-1"
            data-aos="fade-up" data-aos-duration="900" key={props.id} >
            <div className="bg-white rounded-4 p-3">
                <div className="card-body row">
                    <div className='col-10'>
                        <h6 className="card-title">{props.car}</h6>
                        <p className="card-text ">{props.car_model}</p>
                    </div>
                    <button className="border-0 bg-white col-2" onClick={() => { favorno = !favorno }} id={props.id} >
                        {AddFav(favorno)}
                    </button>
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
                <div className='row py-4 justify-content-center'>
                    <button className="btn btn-secondary col-10 p-2 border-0 rounded-4">
                        <h6 className='text-center m-0 py-1'> Buy {props.car_model} {props.car_model_year} Now</h6>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CarsCard;