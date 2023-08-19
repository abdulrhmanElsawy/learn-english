import './css/ourservices.css';

import Paper1 from './images/papers/islcollective.png';
import Paper2 from './images/papers/EnglishCLUB.png';
import Paper3 from './images/papers/eslgold.webp';
import Paper4 from './images/papers/grammarly.png';
import Paper5 from './images/papers/busyteacher.png';
import Paper6 from './images/papers/education.png';
import Paper7 from './images/papers/teachnology.png';







import { Link as RouterLink } from 'react-router-dom';



function Papers(){
    return(
        <>
            <section id="worksheets" className='our-services'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className='services-header'>
                                <span> Worksheets </span>
                                <h1> Reality filled with enrichment worksheets </h1>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>

                                <a target='_blank' href="https://en.islcollective.com/">
                                    <img src={Paper1}/>
                                </a>
                                <h1> ISL Collective </h1>
                                <p>
                                    A site that offers a wide range of worksheets and various activities for learning English.
                                </p>
                                <a target='_blank' href="https://en.islcollective.com/">
                                    Learn more
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>
                                <a target='_blank' href="https://www.englishclub.com/">
                                    <img src={Paper2} />
                                </a>
                                <h1> EnglishClub </h1>


                                <p>
                                Provides free English language learning worksheets and lessons, including grammar.
                                </p>

                                <a target='_blank' href="https://www.englishclub.com/">
                                    Learn more
                                </a>
                            </div>
                        </div>


                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service' >

                                <a target='_blank' href="http://www.eslflow.com/">
                                    <img src={Paper3}  />
                                </a>
                                <h1> ESL Flow </h1>

                                <p>
                                    It offers various worksheets and activities for learning English, including grammar.
                                </p>


                                <a target='_blank' href="http://www.eslflow.com/">
                                    Learn more
                                </a>
                            </div>
                        </div>


                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>

                                
                                <a target='_blank' href="https://www.grammarly.com/">
                                    <img src={Paper4} />
                                </a>
                                <h1> Grammarly </h1>

                                <p>
                                    Not only is it a grammar and grammar checking tool, but it also provides lessons and learning activities.
                                </p>


                                <a target='_blank' href="https://www.grammarly.com/">
                                    Learn more
                                </a>
                            </div>
                        </div>



                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>
                                <a target='_blank' href=" https://busyteacher.org/">
                                    <img src={Paper5} className='special'/>
                                </a>
                                <h1> BusyTeacher </h1>

                                <p>
                                    It provides various worksheets and activities for learning English.
                                </p>



                                <a target='_blank' href=" https://busyteacher.org/">
                                    Learn more
                                </a>
                            </div>
                        </div>

                        


                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>
                                <a target='_blank' href="https://www.education.com/worksheets/">
                                    <img src={Paper6}/>
                                </a>
                                <h1>Education.com </h1>

                                <p>
                                    A site that offers worksheets and educational activities on a variety of subjects, including English.
                                </p>


                                <a target='_blank' href="https://www.education.com/worksheets/">
                                    Learn more
                                </a>
                            </div>
                        </div>




                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>
                                <a target='_blank' href="http://www.teach-nology.com/worksheets/language_arts/grammar/">
                                    <img src={Paper7} />
                                </a>
                                <h1> Teach-nology </h1>

                                <p>
                                It contains a wide range of worksheets and activities for various subjects, including English.
                                </p>


                                <a target='_blank' href="http://www.teach-nology.com/worksheets/language_arts/grammar/">
                                    Learn more
                                </a>
                            </div>
                        </div>

                        


                        

                    </div>
                </div>
            </section>
        </>
    )
}

export default Papers;