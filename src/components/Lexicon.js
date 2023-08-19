import './css/ourservices.css';

import dic1 from './images/dictionary/arabicenglish.webp';
import dic2 from './images/dictionary/englisharabic.png';






import { Link as RouterLink } from 'react-router-dom';



function Lexicon(){
    return(
        <>
            <section id="dictionary" className='our-services'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className='services-header'>
                                <span> Dictionary </span>
                                <h1> English-Arabic or Arabic-English dictionary </h1>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>

                                <a target='_blank' href="https://www.almaany.com/ar/dict/ar-en/">
                                    <img src={dic1}/>
                                </a>
                                <h1> Arabic to English Dictionary </h1>
                                <p>
                                    A site that offers a wide range of worksheets and various activities for learning English.
                                </p>
                                <a target='_blank' href="https://www.almaany.com/ar/dict/ar-en/">
                                    Learn more
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>
                                <a target='_blank' href="http://www.aratools.com/">
                                    <img src={dic2} />
                                </a>
                                <h1> English to Arabic Dictionary </h1>
                                <p></p>
                                <a target='_blank' href="http://www.aratools.com/">
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

export default Lexicon;