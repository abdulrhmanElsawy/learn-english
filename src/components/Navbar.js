import './css/navbar.css';

import Logo from './images/logo.png';

import { Link as RouterLink } from 'react-router-dom';
import { useEffect,useRef  } from "react";
import $ from 'jquery';




function Navbar(){
    useEffect(() => {
        $("#open-nav").on("click", function() {
            $(".nav-elements").slideDown(400);
            $(".nav-elements").css({display: "flex"});
        });

        $("#close-nav").on("click", function() {
            $(".nav-elements").slideUp(400);
        });

        if ($(window).width() < 950) {
            $(".nav-elements ul li:not(.special)").on("click", function() {
                $(".nav-elements").slideUp(400);
            });
        }

        if ($(window).width() > 950) {
            $(".nav-elements ul li a").on("click", function() {
                $(this).next().toggleClass("active");
            });
        }

        if ($(window).width() < 950) {
            $(".nav-elements ul li a").on("click", function() {
                $(this).next().toggleClass("active");
            });
        }

        if ($(window).width() > 950) {
            $(".nav-elements ul li .inner-eles a").on("click", function() {
                $(".nav-elements ul li .inner-eles").removeClass("active");

            });
        }
        
        if ($(window).width() < 950) {
            $(".nav-elements ul li .inner-eles a").on("click", function() {
                $(".nav-elements ul li .inner-eles").removeClass("active");
                $(".nav-elements").slideUp(400);
            });

        }


    const loadingElement = document.getElementById("loading");
    if (loadingElement) {
        loadingElement.remove();
    }
    }, []);


    return(
        <>
            <nav>
                <div className='container-fluid'>
                    <div className='nav-content'>
                        <div className='logo'>
                            <RouterLink to="/">
                                <img src={Logo} />
                            </RouterLink>
                        </div>

                        <button id="open-nav"> <i className="las la-bars"></i> </button>
                        <div className='nav-elements'>
                        <button id="close-nav"> <i className="las la-times"></i> </button>

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
                </div>
            </nav>
        </>
    )
}

export default Navbar;