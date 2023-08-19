import './css/footer.css';
import Logo from './images/logo.png'

import { Link as RouterLink } from 'react-router-dom';


function Footer(){
    return(
        <>
            <footer>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-5 col-md-5 col-sm-6 col-xs-12'>
                            <div className='footer-content'>
                                <img loading="lazy" src={Logo}/>
                                <p>
                                With my deep interest in learning English and my passion for education, I created this site myself. I am Jumana Jaber Al Harami, a high school student in the State of Qatar. I believe English is vital to global communication and goal achievement. Through this website, I look forward to sharing my knowledge and experience with you and building an educational community that inspires everyone to grow
                                </p>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                            <div className='footer-content'>
                                <h1> Usefull Links </h1>

                                <ul>
                                <li>
                                    <a href="#websites">
                                        Global websites
                                    </a>
                                </li>

                                <li>
                                    <a href="#worksheets">
                                        Worksheets
                                    </a>
                                </li>

                                
                                <li>
                                    <a href="#videos">
                                        Learning videos
                                    </a>
                                </li>

                                </ul>
                            </div>

                        </div>

                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                            <div className='footer-content'>
                            <h1> Address </h1>

                                <h2> Qatar </h2>
                                <a href="mailto:Jalharami20@outlook.com"> Jalharami20@outlook.com </a>
                            </div>
                        </div>


                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className='footer-content'>
                                <h3> Let’s Learn English Together &copy; 2022 . All Rights Reserved. </h3>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;