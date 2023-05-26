import { BounceLoader } from 'react-spinners';
function Loading(props) {
    return (
        <div className="row justify-content-center col-12 loading_tap">
            <BounceLoader className='col-5 '
                color="#A162F7"
                cssOverride={{}}
                size={150}
                speedMultiplier={1}
            />
        </div>
    )
}
export default Loading;