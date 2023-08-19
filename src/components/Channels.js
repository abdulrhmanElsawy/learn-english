import './css/ourservices.css';

import Channel1 from './images/youtube/channel1.png';
import Channel2 from './images/youtube/channel2.png';
import Channel3 from './images/youtube/channel3.jpg';
import Channel4 from './images/youtube/channel4.png';
import Channel5 from './images/youtube/channel5.png';
import youtube from './images/youtube/youtube.svg';







import { Link as RouterLink } from 'react-router-dom';



function Channels(){
    return(
        <>
            <section id="videos" className='our-services'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className='services-header'>
                                <span> Videos </span>
                                <h1> Learning videos </h1>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>

                                
                            <div className='dataflow'>
                                    <img src={youtube} />
                                </div>

                                <a target='_blank' href="https://youtube.com/playlist?list=PL5bLw9Uguvv3kSpd1tM79vb0DGAG67dab">
                                    <img src={Channel1}/>
                                </a>
                                <h1> Vocabulary </h1>
                                <a target='_blank' href="https://youtube.com/playlist?list=PL5bLw9Uguvv3kSpd1tM79vb0DGAG67dab">
                                    Learn more
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>

                                
                            <div className='dataflow'>
                                    <img src={youtube} />
                                </div>


                                <a target='_blank' href="https://youtube.com/playlist?list=PL2IkMHFHWdEo-t2mIKmk_HwrJYOTwlT0i">
                                    <img src={Channel2} />
                                </a>
                                <h1> Grammar for beginners </h1>

                                <a target='_blank' href="https://youtube.com/playlist?list=PL2IkMHFHWdEo-t2mIKmk_HwrJYOTwlT0i">
                                    Learn more
                                </a>
                            </div>
                        </div>


                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service' >

                                
                            <div className='dataflow'>
                                    <img src={youtube} />
                                </div>

                                <a target='_blank' href="https://youtube.com/playlist?list=PLs_glF4TIn5YtumSFsPXjIrPMtcRxDJoP">
                                    <img src={Channel3}  />
                                </a>
                                <h1> Grammar for intermediate </h1>


                                <a target='_blank' href="https://youtube.com/playlist?list=PLs_glF4TIn5YtumSFsPXjIrPMtcRxDJoP">
                                    Learn more
                                </a>
                            </div>
                        </div>


                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>

                            <div className='dataflow'>
                                    <img src={youtube} />
                                </div>
                                
                                <a target='_blank' href="https://youtube.com/playlist?list=PLD6t6ckHsrubRV7Wb42ggOhVNrBRAte13">
                                    <img src={Channel4} />
                                </a>
                                <h1> Writing </h1>

                                <a target='_blank' href="https://youtube.com/playlist?list=PLD6t6ckHsrubRV7Wb42ggOhVNrBRAte13">
                                    Learn more
                                </a>
                            </div>
                        </div>



                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <div className='service'>

                                
                            <div className='dataflow'>
                                    <img src={youtube} />
                                </div>

                                <a target='_blank' href="https://youtube.com/playlist?list=PLzVm1SmjPKc_OnC56MbILOmdXvGV_3kE9">
                                    <img src={Channel5}/>
                                </a>
                                <h1> Conversation </h1>

                                <a target='_blank' href="https://youtube.com/playlist?list=PLzVm1SmjPKc_OnC56MbILOmdXvGV_3kE9">
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

export default Channels;