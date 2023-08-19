import './css/landing.css';

import LandingImg from './images/landing.webp';

function Landing(){
    return(
        <>
            <section className='landing'>
                <div className='landing-content'>
                    <img src={LandingImg}/>
                    <div className='text'>
                        <h1> 
                            Let’s Learn English Together
                        </h1>

                        <p> The place where we all come together to learn English in a spirit of collaboration and inspiration. This platform represents an educational community based on interaction and sharing, as we seek to grow and develop together in the language world. </p>

                        <div className='landing-links'>


                            <a href="#websites">
                                Global websites
                            </a>

                            <a href="#worksheets">
                                Worksheets
                            </a>

                            <a href="#videos">
                                Learning videos
                            </a>

                            <a href="#dictionary">
                                Dictionary
                            </a>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing;