import car from '../img/car1.png'
import Vector1 from '../img/Vector1.png'
import Vector2 from '../img/Vector2.png'
import Vector3 from '../img/Vector3.png'
import Vector4 from '../img/Vector4.png'
import AddFav from './AddFav'
function CarsCard(props) {
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
                    <svg className="col-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#caa5fd" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    <button className="btn btn-outline-light bg-color2 col-9 p-2 border-0 rounded-4">
                        <h6 className='text-center m-0 py-1'> Buy {props.car_model} {props.car_model_year}</h6>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CarsCard;