import './css/ourservices.css';

import Website1 from './images/websites/duolingo.svg';
import Website2 from './images/websites/khanacademy.png';
import Website3 from './images/websites/britishcouncil.svg';
import Website4 from './images/websites/bbc.png';
import Website5 from './images/websites/eslgold.webp';
import Website6 from './images/websites/engvid.png';
import Website7 from './images/websites/coursera.svg';
import Website8 from './images/websites/edx-logo-elm.svg';
import Website9 from './images/websites/memrise.svg';
import Website10 from './images/websites/fluentU.png';
import Website11 from './images/websites/rosettastone.svg';
import Website12 from './images/websites/babbe.png';
import Website13 from './images/websites/TOEFL.svg';
import Website14 from './images/websites/tesol_horz_notag.png';



import { Link as RouterLink } from 'react-router-dom';



function Websites(){
    return(
        <>
            <section id="websites" className='our-services'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className='services-header'>
                                <span> Links </span>
                                <h1> International sites for learning English </h1>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>

                                <a target='_blank' href="https://www.duolingo.com">
                                    <img src={Website1}/>
                                </a>
                                <h1> Duolingo </h1>
                                <p>
                                    Duolingo is a platform where you can learn various languages through interactive lessons and quizzes. It's designed to make learning fun and engaging.

                                </p>
                                <a target='_blank' href="https://www.duolingo.com">
                                    Learn more
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>
                                <a target='_blank' href="https://www.khanacademy.org/">
                                    <img src={Website2} />
                                </a>
                                <h1> Khan Academy </h1>


                                <p>
                                Khan Academy offers free educational resources and video lessons on a wide range of subjects, including math, science, and even English language learning.

                                </p>

                                <a target='_blank' href="https://www.khanacademy.org/">
                                    Learn more
                                </a>
                            </div>
                        </div>


                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service' >

                                <a target='_blank' href="https://learnenglish.britishcouncil.org/">
                                    <img src={Website3} className='special' />
                                </a>
                                <h1> British Council </h1>

                                <p>
                                The British Council's website provides English language learning resources, including lessons, games, and activities, to help improve your English skills.

                                </p>


                                <a target='_blank' href="https://learnenglish.britishcouncil.org/">
                                    Learn more
                                </a>
                            </div>
                        </div>


                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>

                                
                                <a target='_blank' href="http://www.bbc.co.uk/learningenglish">
                                    <img src={Website4} />
                                </a>
                                <h1> BBC Learning English </h1>

                                <p>
                                BBC Learning English offers language learning materials, videos, and articles to help you practice and improve your English language skills.
                                </p>


                                <a target='_blank' href="http://www.bbc.co.uk/learningenglish">
                                    Learn more
                                </a>
                            </div>
                        </div>



                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>
                                <a target='_blank' href="http://www.eslgold.com/">
                                    <img src={Website5}/>
                                </a>
                                <h1> ESLgold </h1>

                                <p>
                                ESLgold provides a collection of English learning resources, including grammar explanations, vocabulary exercises, and quizzes for learners of all levels.
                                </p>



                                <a target='_blank' href="http://www.eslgold.com/">
                                    Learn more
                                </a>
                            </div>
                        </div>

                        


                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>
                                <a target='_blank' href="https://www.engvid.com/">
                                    <img src={Website6}/>
                                </a>
                                <h1>EngVid </h1>

                                <p>
                                EngVid offers free video lessons on a variety of English language topics, making it easier to understand grammar rules and improve your communication skills.
                                </p>


                                <a target='_blank' href="https://www.engvid.com/">
                                    Learn more
                                </a>
                            </div>
                        </div>




                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>
                                <a target='_blank' href="https://www.coursera.org/">
                                    <img src={Website7} />
                                </a>
                                <h1> Coursera </h1>

                                <p>
                                </p>


                                <a target='_blank' href="https://www.coursera.org/">
                                    Learn more
                                </a>
                            </div>
                        </div>

                        
                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>
                                <a target='_blank' href="https://www.edx.org//">
                                    <img src={Website8} />
                                </a>
                                <h1> edX </h1>

                                <p>
                                </p>


                                <a target='_blank' href="https://www.edx.org/">
                                    Learn more
                                </a>
                            </div>
                        </div>


                            
                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>
                                <a target='_blank' href="https://www.memrise.com/">
                                    <img src={Website9} />
                                </a>
                                <h1> Memrise </h1>

                                <p>
                                Memrise is a platform that uses spaced repetition techniques to help you memorize vocabulary and phrases in multiple languages, including English.
                                </p>


                                <a target='_blank' href="https://www.memrise.com/">
                                    Learn more
                                </a>
                            </div>
                        </div>

                        
                            
                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>
                                <a target='_blank' href="https://www.fluentu.com/">
                                    <img src={Website10} />
                                </a>
                                <h1> FluentU </h1>

                                <p>
                                FluentU offers language learning through real-world videos, such as movie trailers, news, and music videos, to help improve your listening and comprehension skills.
                                </p>


                                <a target='_blank' href="https://www.fluentu.com/">
                                    Learn more
                                </a>
                            </div>
                        </div>


                        
                            
                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>
                                <a target='_blank' href="https://www.rosettastone.com/">
                                    <img src={Website11} />
                                </a>
                                <h1> Rosetta Stone </h1>

                                <p>
                                Rosetta Stone is a well-known language learning software that provides immersive learning experiences for a variety of languages, including English.
                                </p>


                                <a target='_blank' href="https://www.rosettastone.com/">
                                    Learn more
                                </a>
                            </div>
                        </div>


                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>
                                <a target='_blank' href="https://www.babbel.com/">
                                    <img src={Website12} />
                                </a>
                                <h1> Babbel </h1>

                                <p>
                                Babbel offers language courses with a focus on practical conversation skills. It's designed to help learners speak confidently in real-life situations.
                                </p>


                                <a target='_blank' href="https://www.babbel.com/">
                                    Learn more
                                </a>
                            </div>
                        </div>



                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>
                                <a target='_blank' href="https://www.ets.org/toefl">
                                    <img src={Website13} />
                                </a>
                                <h1> ETS TOEFL </h1>

                                <p>
                                TS TOEFL is the official website for the Test of English as a Foreign Language (TOEFL), a widely recognized English proficiency exam for non-native English speakers.
                                </p>


                                <a target='_blank' href="https://www.ets.org/toefl">
                                    Learn more
                                </a>
                            </div>
                        </div>


                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>
                                <a target='_blank' href="https://www.tesol.org">
                                    <img src={Website14} />
                                </a>
                                <h1> TESOL </h1>

                                <p>
                                TESOL, or Teachers of English to Speakers of Other Languages, is an organization that provides resources, professional development, and support for English language educators.
                                </p>


                                <a target='_blank' href="https://www.tesol.org">
                                    Learn more
                                </a>
                            </div>
                        </div>


                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className='notes'>
                                <p> <span> Note:  </span> Please note that some of these sites may offer free resources and some may have costs for certain lessons or courses. Check out each site for more information about the resources they provide </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Websites;