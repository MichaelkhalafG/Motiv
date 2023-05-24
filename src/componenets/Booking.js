import { useState, useEffect } from "react";
import CarsCard from "./CarsCard";
function Booking(params) {
    const [MitsubishiCars, setMitsubishiCars] = useState([]);
    const [BMWCars, setBMWCars] = useState([]);
    const [GolfCars, setGolfCars] = useState([]);
    const [Range_RoverCars, setRange_RoverCars] = useState([]);
    const [neworold, setneworold] = useState('');
    const [CarType, setCarType] = useState('');
    const [Cars, setCars] = useState([]);
    useEffect(() => {
        setneworold('Old & New');
        setCarType('Mitsubishi');
        fetch('https://myfakeapi.com/api/cars/name/Mitsubishi').then((res) => res.json()).then((data) => { setMitsubishiCars(data.Cars); setCars(data.Cars); });
        fetch('https://myfakeapi.com/api/cars/name/BMW').then((res) => res.json()).then((data) => { setBMWCars(data.Cars); });
        fetch('https://myfakeapi.com/api/cars/model/Golf').then((res) => res.json()).then((data) => { setGolfCars(data.Cars); });
        fetch('https://myfakeapi.com/api/cars/model/Range Rover').then((res) => res.json()).then((data) => { setRange_RoverCars(data.Cars); });
    }, []);
    console.log(MitsubishiCars);
    let element;
    if (neworold === 'Old & New') {
        element = Cars.map(((car) => CarsCard(car)));
    } else if (neworold === 'New') {
        element = Cars.map(((car) => car.car_model_year >= 2000 ? CarsCard(car) : null));
    } else if (neworold === 'Old') {
        element = Cars.map(((car) => car.car_model_year < 2000 ? CarsCard(car) : null));
    }

    return (
        <div className="p-5 pt-4 col-12 booking_tap">
            <h4 className="my-3 ms-2">Booking</h4>
            <section className="d-flex pb-4 justify-content-between">
                <div className="col-lg-5 col-sm-7 col-8 d-flex justify-content-start">
                    <div className="dropdown col-md-4 col-5">
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
                    <div className="dropdown col-md-4 col-5">
                        <button className="btn shadow_box btn-white bg-white dropdown-toggle py-0 rounded-5" key={2}
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="mx-sm-3 mx-0 drop-text">{CarType}</span>
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" onClick={() => { setCarType('Mitsubishi'); setCars(MitsubishiCars) }}>Mitsubishi</button></li>
                            <li><button className="dropdown-item" onClick={() => { setCarType('BMW'); setCars(BMWCars) }}>BMW</button></li>
                            <li><button className="dropdown-item" onClick={() => { setCarType('Golf'); setCars(GolfCars) }}>Golf</button></li>
                            <li><button className="dropdown-item" onClick={() => { setCarType('Range Rover'); setCars(Range_RoverCars) }}>Range Rover</button></li>
                            <li><button className="dropdown-item" onClick={() => { setCarType('All Cars Types'); setCars(MitsubishiCars.concat(BMWCars, GolfCars, Range_RoverCars)) }}>All Cars Types</button></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-2 col-4 d-flex justify-content-center">
                    {/* <a href="#" className="col-lg-2 col-sm-3 col-3 mx-2"><img
                        src="../content/media/images/con-icon1.png" alt="control1" className="col-12" /></a>
                    <a href="#" className="col-lg-2 col-sm-3 col-3 mx-2"><img
                        src="../content/media/images/con-icon2.png" alt="control2" className="col-12" /></a> */}
                </div>
            </section>
            <section className="row col-12 justify-content-center">
                {element}
            </section >
        </div >
    )
}
export default Booking;