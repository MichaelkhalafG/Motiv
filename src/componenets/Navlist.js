function Navlist(props) {
    return (
        <div className="row col-12 p-3 pe-4 pt-5">
            <div className="col-12 d-flex flex-column justify-content-start">
                {props.map((item) => {
                    return (
                        <button key={item.id} onClick={() => { }} className="row p-2 border-0 navitem">
                            <img src={item.imgsrc} alt={item.imgalt} className='col-3' />
                            <h6 className='col-9 m-0 p-0'>{item.text}</h6 >
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
export default Navlist