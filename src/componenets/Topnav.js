import logo from '../img/logo.png'
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
import profile from '../img/portrait.png'
import notification from '../img/notification.png'

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
    let profile_list = [
        {
            imgsrc: profile,
            imgalt: 'Profile',
            text: 'Profile',
            id: 'Profile'
        },
        {
            imgsrc: notification,
            imgalt: 'Notification',
            text: 'Notification',
            id: 'Notification'
        },
    ]
    return (
        <nav className="topnavbar navbar-expand-md sticky-top p-3 col-12 bg-white" id='topnav'>
            <div className="">
                <button className="navbar-toggler d-md-none d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon col-6">
                        <img src={logo} alt="logo" />
                    </span>
                    <h6 className='m-0 ms-1 mt-1 p-0 col-6'>Motiv.</h6>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <div className='row col-12 d-none d-md-flex justify-content-between'>
                        <form className="ps-4 col-4" role="search">
                            <div className='search-container '>
                                <input className="form-control border-0 bg-color1 me-2 p-2" type="search" placeholder="&#xf002; | Search or Type" aria-label="Search" />
                            </div>
                        </form>
                        <div className="d-flex col-2 pe-5 justify-content-around">
                            <button className="col-4 border-0 bg-white rounded-circle"><img src={notification} alt="notification" className='col-8' /></button>
                            <button className="col-4 border-0 bg-white rounded-circle"><img src={profile} alt="profile" className='rounded-circle col-12' /></button>
                        </div>
                    </div>
                    <ul className="navbar-nav d-md-none col-12  me-auto mb-2 mb-lg-0">
                        <div className='top_nav_item col-sm-4 col-6'>
                            {Navlist(item_list)}
                            <div className='d-md-none d-flex'>
                                {Navlist(profile_list)}
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );

}
export default Topnav;