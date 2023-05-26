import { useState, useEffect } from "react";
import CarsCard from "./CarsCard";
import Loading from './Loading';
function Booking(params) {
    const [MitsubishiCars, setMitsubishiCars] = useState([]);
    const [BMWCars, setBMWCars] = useState([]);
    const [GolfCars, setGolfCars] = useState([]);
    const [Range_RoverCars, setRange_RoverCars] = useState([]);
    const [neworold, setneworold] = useState('');
    const [CarType, setCarType] = useState('');
    const [CarPrice, setCarPrice] = useState('');
    const [Cars, setCars] = useState([]);
    useEffect(() => {
        setneworold('Old & New');
        setCarType('Mitsubishi');
        setCarPrice('All Cars')
        fetch('https://myfakeapi.com/api/cars/name/Mitsubishi').then((res) => res.json()).then((data) => { setMitsubishiCars(data.Cars); setCars(data.Cars); });
        fetch('https://myfakeapi.com/api/cars/name/BMW').then((res) => res.json()).then((data) => { setBMWCars(data.Cars); });
        fetch('https://myfakeapi.com/api/cars/model/Golf').then((res) => res.json()).then((data) => { setGolfCars(data.Cars); });
        fetch('https://myfakeapi.com/api/cars/model/Range Rover').then((res) => res.json()).then((data) => { setRange_RoverCars(data.Cars); });
    }, []);
    console.log(Cars);
    let element;
    if (Cars.length === 0) {
        element = <Loading />
    } else {
        if (neworold === 'Old & New') {
            element = Cars.map(((car) => CarsCard(car)));
        } else if (neworold === 'New') {
            element = Cars.map(((car) => car.car_model_year >= 2000 ? CarsCard(car) : null));
        } else if (neworold === 'Old') {
            element = Cars.map(((car) => car.car_model_year < 2000 ? CarsCard(car) : null));
        }
        if (CarPrice === 'All Cars') {
            element = Cars.map(((car) => CarsCard(car)));
        } else if (CarPrice === '1000 $ - 2000 $') {
            element = Cars.map(((car) => parseFloat(car.price.replaceAll("$", "")) >= 1000 && parseFloat(car.price.replaceAll("$", "")) < 2000 ? CarsCard(car) : null));
        } else if (CarPrice === '2000 $ - 3000 $') {
            element = Cars.map(((car) => parseFloat(car.price.replaceAll("$", "")) >= 2000 && parseFloat(car.price.replaceAll("$", "")) < 3000 ? CarsCard(car) : null));
        } else if (CarPrice === '3000 $ - 4000 $') {
            element = Cars.map(((car) => parseFloat(car.price.replaceAll("$", "")) >= 3000 && parseFloat(car.price.replaceAll("$", "")) < 4000 ? CarsCard(car) : null));
        }
        if (CarPrice === 'All Cars' && neworold === 'Old & New') {
            element = Cars.map(((car) => CarsCard(car)));
        } else if (CarPrice === 'All Cars' && neworold === 'New') {
            element = Cars.map(((car) => car.car_model_year >= 2000 ? CarsCard(car) : null));
        } else if (CarPrice === 'All Cars' && neworold === 'Old') {
            element = Cars.map(((car) => car.car_model_year < 2000 ? CarsCard(car) : null));
        } else if (CarPrice === '1000 $ - 2000 $' && neworold === 'Old & New') {
            element = Cars.map(((car) => parseFloat(car.price.replaceAll("$", "")) >= 1000 && parseFloat(car.price.replaceAll("$", "")) < 2000 ? CarsCard(car) : null));
        } else if (CarPrice === '1000 $ - 2000 $' && neworold === 'New') {
            element = Cars.map(((car) => parseFloat(car.price.replaceAll("$", "")) >= 1000 && parseFloat(car.price.replaceAll("$", "")) < 2000 && car.car_model_year >= 2000 ? CarsCard(car) : null));
        } else if (CarPrice === '1000 $ - 2000 $' && neworold === 'Old') {
            element = Cars.map(((car) => parseFloat(car.price.replaceAll("$", "")) >= 1000 && parseFloat(car.price.replaceAll("$", "")) < 2000 && car.car_model_year < 2000 ? CarsCard(car) : null));
        } else if (CarPrice === '2000 $ - 3000 $' && neworold === 'Old & New') {
            element = Cars.map(((car) => parseFloat(car.price.replaceAll("$", "")) >= 2000 && parseFloat(car.price.replaceAll("$", "")) < 3000 ? CarsCard(car) : null));
        } else if (CarPrice === '2000 $ - 3000 $' && neworold === 'New') {
            element = Cars.map(((car) => parseFloat(car.price.replaceAll("$", "")) >= 2000 && parseFloat(car.price.replaceAll("$", "")) < 3000 && car.car_model_year >= 2000 ? CarsCard(car) : null));
        } else if (CarPrice === '2000 $ - 3000 $' && neworold === 'Old') {
            element = Cars.map(((car) => parseFloat(car.price.replaceAll("$", "")) >= 2000 && parseFloat(car.price.replaceAll("$", "")) < 3000 && car.car_model_year < 2000 ? CarsCard(car) : null));
        } else if (CarPrice === '3000 $ - 4000 $' && neworold === 'Old & New') {
            element = Cars.map(((car) => parseFloat(car.price.replaceAll("$", "")) >= 3000 && parseFloat(car.price.replaceAll("$", "")) < 4000 ? CarsCard(car) : null));
        } else if (CarPrice === '3000 $ - 4000 $' && neworold === 'New') {
            element = Cars.map(((car) => parseFloat(car.price.replaceAll("$", "")) >= 3000 && parseFloat(car.price.replaceAll("$", "")) < 4000 && car.car_model_year >= 2000 ? CarsCard(car) : null));
        } else if (CarPrice === '3000 $ - 4000 $' && neworold === 'Old') {
            element = Cars.map(((car) => parseFloat(car.price.replaceAll("$", "")) >= 3000 && parseFloat(car.price.replaceAll("$", "")) < 4000 && car.car_model_year < 2000 ? CarsCard(car) : null));
        }
    }
    function isempty() {
        if (Cars.length === 0) {
            element =
                <div class="alert alert-danger py-5" role="alert">
                    ther is no cars
                </div>
        }
    }
    return (
        <div className="p-5 pe-4 pt-4 col-12 booking_tap">
            <h4 className="my-3 ms-2">Booking</h4>
            <section className="row d-flex col-12 pb-4 justify-content-md-start justify-content-center">
                <div className="dropdown text-center col-xl-2 col-md-4 col-6 p-md-0 pb-3">
                    <button className="btn shadow_box btn-white bg-white dropdown-toggle py-0 rounded-5" key={1}
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="mx-sm-3 mx-0 drop-text">{neworold}</span>
                    </button>
                    <ul className="dropdown-menu ">
                        <li><button className="dropdown-item" onClick={() => { setneworold('Old & New'); }}>Old & New</button></li>
                        <li><button className="dropdown-item" onClick={() => { setneworold('New'); }}>New</button></li>
                        <li><button className="dropdown-item" onClick={() => { setneworold('Old'); }}>Old</button></li>
                    </ul>
                </div>
                <div className="dropdown text-center col-xl-2 col-md-4 col-6 p-md-0 pb-3">
                    <button className="btn shadow_box btn-white bg-white dropdown-toggle py-0 rounded-5" key={2}
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="mx-sm-3 mx-0 drop-text">{CarType}</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" onClick={() => { setCarType('Mitsubishi'); setCars(MitsubishiCars); }}>Mitsubishi</button></li>
                        <li><button className="dropdown-item" onClick={() => { setCarType('BMW'); setCars(BMWCars); }}>BMW</button></li>
                        <li><button className="dropdown-item" onClick={() => { setCarType('Golf'); setCars(GolfCars); }}>Golf</button></li>
                        <li><button className="dropdown-item" onClick={() => { setCarType('Range Rover'); setCars(Range_RoverCars); }}>Range Rover</button></li>
                        <li><button className="dropdown-item" onClick={() => { setCarType('All Cars Types'); setCars(MitsubishiCars.concat(BMWCars, GolfCars, Range_RoverCars)); }}>All Cars Types</button></li>
                    </ul>
                </div>
                <div className="dropdown text-center col-xl-2 col-md-4 col-6 p-md-0 pb-3">
                    <button className="btn shadow_box btn-white bg-white dropdown-toggle py-0 rounded-5" key={2}
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="mx-sm-3 mx-0 drop-text">{CarPrice}</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" onClick={() => { setCarPrice("1000 $ - 2000 $"); }}>1000 $ - 2000 $</button></li>
                        <li><button className="dropdown-item" onClick={() => { setCarPrice("2000 $ - 3000 $"); }}>2000 $ - 3000 $</button></li>
                        <li><button className="dropdown-item" onClick={() => { setCarPrice("3000 $ - 4000 $"); }}>3000 $ - 4000 $</button></li>
                        <li><button className="dropdown-item" onClick={() => { setCarPrice("All Cars"); }}>All Cars</button></li>
                    </ul>
                </div>
            </section>
            <section className="row col-12 justify-content-center">
                {element}
            </section >
        </div >
    )
}
export default Booking;