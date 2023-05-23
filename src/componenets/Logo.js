import logo from '../img/logo.png'
function Logo() {
    return (
        <div className="row p-2 col-12">
            <img src={logo} alt="logo" className='col-3' />
            <h3 className='col-9 m-0 p-0'>Motiv .</h3 >
        </div>
    )
}
export default Logo;