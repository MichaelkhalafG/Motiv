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
let item_list1 = [
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
    }
];
let item_list2 = [
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
function Navbar() {
    return (
        <div className="row navbar d-md-flex d-none flex-column justify-content-start col-xl-2 col-lg-3 col-4 p-4 m-0" key="nav">
            <Logo />
            {Navlist(item_list1)}
            <div className='nav_item_down p-4 '>
                {Navlist(item_list2)}
            </div>
        </div>
    )
}
export default Navbar;
