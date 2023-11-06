import clgimg from '../images/clg.png';

import '../App.css'

function Mainimg(){

    return(
        <div className='clg-pic'>
            <h1 className='main-text'>Empowering Minds, Inspiring Futures</h1>
            <img src={clgimg} className='MainImage' alt='clgimg'></img>
        </div>
    );
}

export default Mainimg;