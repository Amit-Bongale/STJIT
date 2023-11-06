import './css/about.css'
import './css/dept.css'


function About(){
    
    return(
        <div className="about-section flex-center">

            <div className="abt">
                <h2>About Us</h2>
                <p>
                    Sri Taralabalu Jagadguru Institute of Technology is established by the religious Organization namely, Sri Taralabalu Jagadguru Brihanmath, which is well-known in Karnataka for its yeoman service in the field of rural education. Under the auspices of this organization are running more than 172 institutions right from nursery to the Engineering College all over the State of Karnataka
                </p>
            </div>

            <div className="link">
                <h2>About Us</h2>
                <div className='links'>
                    <div className='link-item'> Cet-rank-list </div>
                    <div className='link-item'> D-Bookstore </div>
                    <div className='link-item'> VTU-results </div>
                    <div className='link-item'> VTU-Notification </div>
                    <div className='link-item'> acadamic-calender </div>
                </div>

            </div>

            <div className="contact">

                <h2>Contact Information</h2>
                <p>
                    Ranebennur, Haveri Dist.,
                    Karnataka - 581115, India.
                    08373-266343, 262075     
                    principal@stjit.ac.in          
                    Mon-Fri 9:00am - 5:00pm
                    Sat 09:00 am to 1:15 pm   

                    Grievance Redressal         
                    Leave Management System       
                </p>

            </div>

        </div>
    );
}

export default About;