import './css/dept.css';
import './css/news.css';

import workshop from '../images/events/workshop.jpg'
import Environment from '../images/events/environmentday.jpeg'
import kannada from '../images/events/kannadaRajosthava.jpeg'


function News(){
    return(
        <div className="News-section">

            <h2 className="News-main-headder">News & Events</h2>

            <hr/>

            <div className="news">

                <div className='news-container flex'>
                    <div className='news-texts'>
                        <h2 className='news-headder'>Three days Workshop from 14thto 16th June</h2>
                        <h4 className='news-subtext'>
                            Department of Computer Science & Engineering conducted three days workshop on Android application Development and Python Programming from 14th to 16th June 2023.
                        </h4>
                    </div>
                    <img className='news-image' src={workshop} alt="workshop" />
                </div>

                <hr/>

                <div className='news-container flex'>
                    <img className='news-image' src={Environment} alt="Environment day" />
                    <div className='news-texts' >
                        <h2 className='news-headder'>World Environment Day Celebration</h2>
                        <h4 className='news-subtext'>
                         NSS Unit of our Institute celebrated World Environment Day on 5thJune 2023 in our campus.
                        </h4>
                    </div>
                    
                </div>

                <hr/>

                <div className='news-container flex'>
                    <div className='news-texts'>
                        <h2 className='news-headder'>Kannada Rajyotsava Celebration</h2>
                        <h4 className='news-subtext'>
                            Kannada Rajyotsava was celebrated on 26th Nov 2022 at STJ Institute of Technology.
                        </h4>
                    </div>
                    <img className='news-image' src={kannada} alt="Kannada Rajosthava" />
                </div>

                <hr/>

            </div>

            <div className='flex-center'>
                <h3 className='button-text'>View More</h3> 
            </div>

        </div>
    );
}

export default News;