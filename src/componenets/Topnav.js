import Logo from './Logo'
import Dashboard from '../img/Dashboard.png'
import Assets from '../img/Assets.png'
import Booking from '../img/Booking.png'
import Buy_Cars from '../img/Buy_Cars.png'
import Sell_Car from '../img/Sell_Car.png'
import Services from '../img/Services.png'
import Calender from '../img/Calender.png'
import Messages from '../img/Messages.png'
import Settings from '../img/Settings.png'
import Logout from '../img/Logout.png'
import Navlist from './Navlist'

function Topnav() {
    let item_list = [
        {
            imgsrc: Dashboard,
            imgalt: 'Dashboard',
            text: 'Dashboard',
            id: 'Dashboard'
        },
        {
            imgsrc: Assets,
            imgalt: 'Assets',
            text: 'Assets',
            id: 'Assets'
        },
        {
            imgsrc: Booking,
            imgalt: 'Booking',
            text: 'Booking',
            id: 'Booking'
        },
        {
            imgsrc: Buy_Cars,
            imgalt: 'Buy Cars',
            text: 'Buy Cars',
            id: 'Buy Cars'
        },
        {
            imgsrc: Sell_Car,
            imgalt: 'Sell Car',
            text: 'Sell Car',
            id: 'Sell Car'
        }, {
            imgsrc: Services,
            imgalt: 'Services',
            text: 'Services',
            id: 'Services'
        },
        {
            imgsrc: Calender,
            imgalt: 'Calender',
            text: 'Calender',
            id: 'Calender'
        },
        {
            imgsrc: Messages,
            imgalt: 'Messages',
            text: 'Messages',
            id: 'Messages'
        },
        {
            imgsrc: Settings,
            imgalt: 'Settings',
            text: 'Settings',
            id: 'Settings'
        },
        {
            imgsrc: Logout,
            imgalt: 'Logout',
            text: 'Logout',
            id: 'Logout'
        }
    ];
    return (
        <nav className="topnavbar navbar-expand-md sticky-top p-3 col-12 bg-white">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <form className="d-flex col-4" role="search">
                        <input className="form-control me-2 p-2" type="search" placeholder="&#xf002; |Search or Type" aria-label="Search" />
                    </form>
                    <ul className="navbar-nav d-md-none me-auto mb-2 mb-lg-0">
                        {Navlist(item_list)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Topnav;