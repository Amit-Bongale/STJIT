

import clglogo from '../images/clg-logo.png';


function Header(){
    return(

        <div className='navbar flex'>
        <div className='logo'>
          <img id='clg-logo' src={clglogo} alt='STJIT Logo'></img>
          <h2 className='logo-text'>Sri Taralabalu Institute of technology</h2>
        </div>
        
        <div className='nav-link flex'>
          <h5 className='nav-item'> Home</h5>
          <h5 className='nav-item'> About</h5>
          <h5 className='nav-item'> Admission</h5>
          <h5 className='nav-item'> Department</h5>
          <h5 className='nav-item'> placement</h5>
          <h5 className='nav-item'> Facullties</h5>
          <h5 className='nav-item'> Contact</h5>
        </div>

      </div>

    );
}

export default Header;