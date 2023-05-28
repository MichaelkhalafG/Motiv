import moving_car from '../img/car_top_view.png'
import $ from 'jquery';
import DONE from '../img/done.png'
function BuyButton(props) {
    function car_go(id) {
        $(id).addClass("car_body_after_click");
        $(id).removeClass("car_body");
    }
    function car_go2(id) {
        $(id).addClass("moving_button_after_click");
        $(id).removeClass("moving_button");
    }
    return (
        <button className="btn bg-dark col-9 p-2 border-0 rounded-4 button_moving_action" onClick={async () => { car_go(props.id_for_function); car_go2(props.id_for_function2); console.log(props.id) }}>
            <h6 className='text-center text-light m-0 py-1'>{props.Name}</h6>
            <div className="row justify-content-start bg-dark p-2 moving_button" id={props.id2}>
                <div className="row col-10 moving_car_container">
                    <h6 className='col-4 text-center text-light m-0'> </h6>
                    <div className='col-8 text-center text-light m-0'> ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- </div>
                    <div className="moving_car m-0 p-0 bg-light">
                        <img src={moving_car} alt="moving_car" className="car_body m-0 p-0" id={props.id} />
                    </div>
                </div>
                <h6 className='col-2 text-center row text-light m-0'><img src={DONE} alt="DONE" className='col-5 pt-1 done_img' />Done</h6>
            </div>
        </button>
    );
}
export default BuyButton;