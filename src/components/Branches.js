import './css/dept.css';

import cse from '../images/Departmets/cse.jpg';
import ise from '../images/Departmets/ise.jpg';
import ece from '../images/Departmets/ECE.jpg';
import eee from '../images/Departmets/eee.jpg';
import civil from '../images/Departmets/civil.jpg';
import mech from '../images/Departmets/mech.jpg';


function Branches(){

    return(

        <div >

            <h2 className="dept-main-text">Engineering Departments</h2>

            <div className='department-container'> 

                <div className='departments'>
                    <img className='dept-img' src={cse} alt='cse'></img>
                    <h2 className='dept-text'>Computer Science</h2>
                </div>

                <div className='departments'>
                    <img className='dept-img' src={ise} alt='ise'></img>
                    <h2 className='dept-text'>Information Science</h2>
                </div>

                <div className='departments' >
                    <img className='dept-img' src={ece} alt='ece'></img>
                    <h2 className='dept-text'>Electronics & Communication</h2>
                </div>

                <div className='departments'>
                    <img className='dept-img' src={eee} alt='eee'></img>
                    <h2 className='dept-text'>Electrical & Electronics</h2>
                </div>

                <div className='departments'>
                    <img className='dept-img' src={civil} alt='civil'></img>
                    <h2 className='dept-text'>Civil</h2>
                </div>

                <div className='departments'>
                    <img className='dept-img' src={mech} alt='mech'></img>
                    <h2 className='dept-text'>Mechanical</h2>
                </div>
                
            </div>
            
        </div>

    );

}

export default Branches;