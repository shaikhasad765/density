"use client";
import React, {useEffect} from 'react';
import '../Assets/CSS/Hero.css'; // Styles
import apple from '../Assets/Images/apple.png'
import thead from '../Assets/Images/thirdhead.png'
import fihead from '../Assets/Images/fifthhead.png'
import icon from '../Assets/Images/icon.png'
import sevft from '../Assets/Images/sevenfoot.png'
import ninlogo from '../Assets/Images/ninthlogo.png'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import gsap from "gsap"; // GSAP

// Emote Imports
import angry from '../Assets/Images/emote/angry.png'
import emb from '../Assets/Images/emote/embarrased.png'
import happy from '../Assets/Images/emote/happy.png'
import raise from '../Assets/Images/emote/raisedeye.png'
import sleep from '../Assets/Images/emote/sleepy.png'
import wow from '../Assets/Images/emote/wow.png'


function Hero() {
    useEffect(() => {
        // Animation with GSAP for the background image
        gsap.from('.firstdetails', { opacity: 1, x: -1300, scale: 1.001, duration: 0.7, ease: 'power2.out' });
        gsap.to('.firstdetails', { opacity: 1, x: 90, scale: 1.05, duration: 0.7, ease: 'power2.out' });

        gsap.from('.thirdhead', { opacity: 1, x: -1300, scale: 1.001, duration: 0.7, ease: 'power2.out' });
        gsap.to('.thirdhead', { opacity: 1, x: 90, scale: 1.05, duration: 0.7, ease: 'power2.out' });

        gsap.from('.imgs', { opacity: 1, x: 1300, scale: 1.001, duration: 1.0, ease: 'power2.out' });
        gsap.to('.imgs', { opacity: 1, x: 50, scale: 1.05, duration: 1.2, ease: 'power2.out' });

        gsap.from('.comcont', { opacity: 1, x: 1300, scale: 1.001, duration: 1.0, ease: 'power2.out' });
        gsap.to('.comcont', { opacity: 1, x: 90, scale: 1.05, duration: 1.2, ease: 'power2.out' });

        gsap.from('.forp', { opacity: 1, x: -1300, scale: 1.001, duration: 1.0, ease: 'power2.out' });
        gsap.to('.forp', { opacity: 1, x: 50, scale: 1.05, duration: 1.2, ease: 'power2.out' });

        gsap.from('.sevenmidcont', { opacity: 1, x: -1300, scale: 1.001, duration: 1.0, ease: 'power2.out' });
        gsap.to('.sevenmidcont', { opacity: 1, x: 10, scale: 1.05, duration: 1.2, ease: 'power2.out' });

        gsap.from('.sevennum', { opacity: 1, y: 1000, duration: 1.0, ease: 'power2.out' });
        gsap.to('.sevennum', { opacity: 1, y: -5, duration: 1.2, ease: 'power2.out' });

        gsap.from('.snames', { opacity: 1, x: 1000,  duration: 1.0, ease: 'power2.out' });
        gsap.to('.snames', { opacity: 1, x: -5, duration: 1.2, ease: 'power2.out' });


    }, []);

    return (
        <section className="hero">
            {/* First Cont */}
            <div className="firstcont">
                <div className='firstdetails'>

                    <p 
                        
                        style={{
                            fontSize:"32px",
                            fontWeight:"500",
                            paddingTop: "250px"
                        }}>
                        Ahead app
                    </p>

                    <p className='p-text'>Master your life</p>
                    <p className='p-text'>by mastering</p>
                    <p className='p-text'>emotions</p>
                    
                    <div className='firstendcont'>
                        <div className='storebtn'>

                            <Image 
                                style={{
                                    width:"60px",
                                    height:"60px",
                                    padding:"1px",
                                    marginLeft:"10px"
                                }}
                                src={apple} 
                                alt="apple" 
                            />

                            <button 
                                type='submit'
                                style={{paddingLeft:"10px",fontSize:"18px"}}
                                >
                                    Download on the 
                                    <p 
                                        style={{
                                            fontSize:"26px",
                                            fontWeight:"500",
                                            letterSpacing:"3px"
                                        }}>
                                            App Store
                                    </p>
                            </button>

                        </div>
                        <div className='ratingcont'>
                            <div className='rating'>
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" />
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" />
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" />
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" />
                                <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" />
                            </div>
                            <div className='ratingtext'>
                                100+ AppStore reviews
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Cont */}
            <div className='secondcont'>
                <div>
                    <p style={{
                        fontSize:"60px",
                        fontWeight:"700",
                        width:"500px"
                    }}>
                        EQ beats IQ
                    </p>
                </div>

                <div>
                    <p 
                        style={{
                            fontSize:"32px",
                            width:"650px",
                            padding:"5px",
                            paddingLeft:"90px",
                            marginTop:"105px"
                        }}>
                        People with high emotional
                        intelligence (EQ) live more fulfilled
                        lives. They tend to be happier and
                        have healthier relationships.
                    </p>
                </div>
                    
                <div>
                    <p                         
                        style={{
                            fontSize:"32px",
                            width:"590px",
                            marginTop:"100px"
                        }}>
                        They are more successful in their
                        pursuits and make for inspiring
                        leaders. According to science, they
                        earn $29k a year.
                    </p>
                </div>
            </div>

            {/* Third Cont */}
            <div className='thirdhead'>
                <p>Does this sound familiar...</p>
                <Image className="imgs"  src={thead} alt="" />
            </div>
            <div className='thirdmain'>
                    <div 
                        className='comcont'
                        style={{
                            backgroundColor:"#d8f2ff"
                        }}
                        >
                        <Image src={happy} alt="" />
                        <p className='comtext'>Squabble with your partner</p>
                        <p style={{fontSize:"14px", marginTop:"7px"}}>Accuse them of doing that thing
                            they always do it, instead of
                            calm and addressing 
                        </p>
                    </div>

                    <div                         
                        className='comcont'
                        style={{
                            backgroundColor:"#eeebfe"
                        }}
                        >
                        <Image src={angry} alt="" />
                        <p className='comtext'>You argue with a colleague</p>
                        <p style={{fontSize:"14px", marginTop:"7px"}}>You get angry and defensive, instead of
                            staying open and working towards
                            common around
                        </p>
                    </div>

                    <div 
                        className='comcont'
                        style={{
                            transform:"rotate(-6deg)",
                            backgroundColor:"#6341ef",
                            color:"white"
                        }}
                        >
                        <Image src={emb} alt="" />
                        <p className='comtext'>You get a promotion at work</p>
                        <p style={{fontSize:"14px", marginTop:"7px"}}>You question yourself and wonder when
                            they'll realize you're an unqualified
                            imposter.
                        </p>
                    </div>

                    <div                         
                        className='comcont'
                        style={{
                            backgroundColor:"#ffefd5"
                        }}>
                        <Image src={raise} alt="" />
                        <p className='comtext'>You attend a class reunion</p>
                        <p style={{fontSize:"14px", marginTop:"7px"}}>
                            You compare wourself with your peers
                            achievements, instead of makjing your
                            self-judgement more independent of
                            others.
                        </p>
                    </div>

                    <div 
                        className='comcont'
                        style={{
                            backgroundColor:"#f3e9db"
                        }}>
                        <Image src={sleep} alt="" />
                        <p className='comtext'>You are tired at work</p>
                        <p style={{fontSize:"14px", marginTop:"7px"}}>You play on your phone and dont work
                            thats why you are tired and sleepy
                        </p>
                    </div>

                    <div                         
                        className='comcont'
                        style={{
                            backgroundColor:"#daeed9"
                        }}>
                        <Image src={wow} alt="" />
                        <p className='comtext'>You have been awarded</p>
                        <p style={{fontSize:"14px", marginTop:"7px"}}>You have achieved employee of the year
                            and now you are a senior
                        </p>
                    </div>
            </div>

            {/* Fourth container */}

            <div className='fourthcont'>
                <div className='forthdetails'>

                    <p className='forp'                 
                        style={{
                            fontSize:"32px",
                            fontWeight:"500",
                            paddingTop: "200px"
                        }}>
                        Built out of frustration
                    </p>

                    <p className='p-text forp' style={{fontSize:"90px", width:"880px", marginLeft:"-30px"}}>Meet the ahead app</p>
                    
                    <p 
                        style={{
                            fontSize:"37px", 
                            width:"750px",
                            marginTop:"100px",
                            marginLeft:"1000px"
                        }}>
                        A personalized pocket coach that provides bite-
                        sized, science-driven tools to boost emotional
                        intelligence.
                    </p>
                    
                    <p style={{fontSize:"37px", width:"780px", marginTop:"40px", marginLeft:"1000px"}}>        
                        Think of it as a pocket cheerleader towards a
                        better, more fulfilling.
                    </p>
                </div>
            </div>

            {/* Fifth container */}
            <div className='fifthcont'>
                <p  className='forp'
                    style={{
                        fontSize:"32px",
                        fontWeight:"500",
                        paddingTop: "200px"
                    }}>
                    Wrong with self-improvement & how we're fizing it.
                </p>
                <div className='fifthhead'>
                    <p  className='forp'                    
                        style={{
                            fontSize:"80px",
                            fontWeight:"500",
                            paddingTop: "20px",
                            fontWeight:"700"
                        }}>
                        Self-improvement. Ugh.
                    </p>
                    <Image className='imgs'
                        src={fihead} 
                        style={{
                            width:"70px", 
                            height:"85px",
                            marginTop: "40px",
                            marginLeft:"20px"
                        }}
                        alt="" />
                </div>
                <div className='fifthscroll'>
                    <div className='fifthdivcont'>
                        <div className='fifthdivider'>
                        </div>
                        <div className='fifthcontent'>
                            <div>
                                <p style={{fontWeight:"bold",fontSize:"32px", marginTop:"-33px"}}>
                                    <b 
                                        style={{
                                            fontSize:"50px",
                                            color:"#6540f2",
                                            marginLeft:"-3px",
                                            borderRadius:"70px"
                                        }}>&bull;
                                    </b>
                                    &emsp;It's not as easy as 1-2-3
                                </p>
                                <p style={{marginLeft:"48px"}}>The journey of change may be long, but our sessions are quick. We get
                                    to the point and tell you what you want to know (and nothing else).
                                </p>
                            </div>

                            <div>
                                <p style={{fontWeight:"bold",fontSize:"32px", marginTop:"-33px"}}>
                                    <b 
                                        style={{
                                            fontSize:"50px",
                                            color:"#6540f2",
                                            marginLeft:"-3px",
                                            borderRadius:"50px"
                                        }}>&bull;
                                    </b>
                                    &emsp;Old habits are hard to break</p>
                                <p style={{marginLeft:"48px"}}>And bad behaviors die hard. Fortunately, we give you great, science-
                                    backed techniques to use.
                                </p>
                            </div>

                            <div>
                                <p style={{fontWeight:"bold",fontSize:"32px", marginTop:"-33px"}}>
                                    <b 
                                        style={{
                                            fontSize:"50px",
                                            color:"#6540f2",
                                            marginLeft:"-3px",
                                            borderRadius:"70px"
                                        }}>&bull;
                                    </b>
                                    &emsp;You and your motivation don't have a
                                    long-term relationship.
                                </p>
                                <p style={{marginLeft:"48px"}}>Luckily, we can proactively prepare you for the marathon, not just the
                                    race. Effective, memorable exerciseswill help you stick to your goals.
                                </p>
                            </div>

                            <div>
                                <p style={{fontWeight:"bold",fontSize:"32px", marginTop:"-33px"}}>
                                    <b 
                                        style={{
                                            fontSize:"50px",
                                            color:"#6540f2",
                                            marginLeft:"-3px",
                                            borderRadius:"70px"
                                        }}>&bull;
                                    </b>
                                    &emsp;Books just don't offer practical solutions.</p>
                                <p style={{marginLeft:"48px"}}>Rememher when vou learned to ride a bike iust hv reading? Yeah we don't either</p>
                            </div>

                            <div>
                                <p style={{fontWeight:"bold",fontSize:"32px", marginTop:"-33px"}}>
                                    <b 
                                        style={{
                                            fontSize:"50px",
                                            color:"#6540f2",
                                            marginLeft:"-3px",
                                            borderRadius:"70px"
                                        }}>&bull;
                                    </b>
                                    &emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p style={{marginLeft:"48px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>

                            <div>
                                <p style={{fontWeight:"bold",fontSize:"32px", marginTop:"-33px"}}>
                                    <b 
                                        style={{
                                            fontSize:"50px",
                                            color:"#6540f2",
                                            marginLeft:"-3px",
                                            borderRadius:"70px"
                                        }}>&bull;
                                    </b>
                                    &emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p style={{marginLeft:"48px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sixth Container */}
            <div className='secondcont'>
                <div>
                    <p style={{
                        fontSize:"60px",
                        fontWeight:"700",
                        width:"500px"
                    }}>
                        Be the best you with EQ
                    </p>
                </div>

                <div>
                    <p 
                        style={{
                            fontSize:"32px",
                            width:"650px",
                            padding:"5px",
                            paddingLeft:"90px",
                            marginTop:"30px"
                        }}>
                    Not having your own emotions
                    under control might be holding
                    you back.
                    </p>
                </div>
                    
                <div>
                    <p                         
                        style={{
                            fontSize:"32px",
                            width:"590px",
                            marginTop:"30px"
                        }}>
                        Additionally, not understanding
                        those of others stops you from
                        being parent, friend you can be.
                    </p>
                </div>
            </div>

            {/* Seventh Container */}
            <div className='sevencont'>

                <div className='sevenhead'>
                    <p 
                        style={{
                            marginTop:"100px",
                            fontSize:"35px"
                        }}>
                        Let your friends, family, and co-workers (anonymously) rate your social skills.
                    </p>
                    <p 
                        style={{
                            fontSize:"85px",
                            fontWeight:"bolder"
                        }}>Ever wondered what others think of you?</p>
                </div>

                <div className='sevenmid'>
                    <div className='sevennum'>
                    </div>
                    <div className='sevennumcont' style={{display:"flex", justifyContent:"space-between"}}>
                        <div className='sevenmidcont' style={{display:"flex", flexDirection:"column", alignItems:"center", paddingLeft:"30px"}}>
                            <p>Answer questions on your social skills</p>
                        </div>
                        
                        <div className='sevenmidcont' style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <p>Let others anonymously answer the same</p>
                            <p>questions about you</p>
                        </div>
                        
                        <div className='sevenmidcont' style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <p>Find out where you and others see things</p>
                            <p>the same way - and where not!</p>
                        </div>
                    </div>
                </div>

                <div className='sevenfoot'>
                    <div className='sevenfootmain'>
                        <div className='snames'>
                            <div 
                                style={{
                                    backgroundColor:"#6341ef",
                                    color:"white",
                                    width:"120px",
                                    marginBottom:"10px",
                                    marginTop:"-60px",
                                    marginLeft:"-10px"
                                    }}>
                                <p style={{fontSize:"22px",fontWeight:"bold"}}>You</p>
                            </div>

                            <div 
                                style={{
                                    marginLeft:"660px",
                                    backgroundColor:"#fdb338",
                                    color:"white",
                                    marginTop:"-60px",
                                    width:"200px",
                                    marginBottom:"10px"
                                }}>
                                <p style={{fontSize:"22px",fontWeight:"bold"}}>Anonymonos 2</p>
                            </div>
                        </div>

                        <div className='sevenline'>
                            <Image src={sevft} alt="" />
                        </div>

                        <div className='snames'>
                            <div 
                                style={{
                                    backgroundColor:"#40c2fd",
                                    color:"white",
                                    minWidth:"200px",
                                    marginBottom:"10px",
                                    marginLeft:"350px",
                                    marginTop:"20px"
                                    }}>
                                <p style={{fontSize:"22px",fontWeight:"bold"}}>Anonymonos 1</p>
                            </div>

                            <div 
                                style={{
                                    marginLeft:"650px",
                                    backgroundColor:"#58c995",
                                    color:"white",
                                    minWidth:"200px",
                                    marginBottom:"10px",
                                    marginTop:"20px",
                                }}>
                                <p style={{fontSize:"22px",fontWeight:"bold"}}>Anonymonos 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Eigth Container */}
            <div className='eighthcont'>
                <div className='eighthitems'> 

                    <p>We take privacy seriously</p>

                    <p 
                        style={{
                            fontSize:"27px",
                            fontWeight:"bold",
                            marginTop:"5px"
                        }}>
                        Before you get started
                    </p>

                    <p>"We won't share your answers with anyone (and won't ever tell</p>
                    <p>you which friends said what about you)"</p>

                    <p                        
                        style={{
                            marginTop:"30px"
                        }}>
                        with love, &emsp; &emsp; &emsp; &emsp; &emsp; &ensp;
                    </p>

                    <button 
                        type='submit'
                        style={{
                            backgroundColor:"black",
                            color:"white",
                            padding:"5px",
                            borderRadius:"50px",
                            paddingLeft:"15px",
                            paddingRight:"15px",
                            marginTop:"30px"
                        }}
                        >
                        Start a test
                    </button>

                    <p                        
                        style={{
                            marginTop:"10px",
                            fontSize:"10px"
                        }}>
                        Take only 5 minutes
                    </p>
                </div>
            </div>

            {/* Ninth Container */}
            <div className='ninthcont'>

                <div className='ninthleft'>
                    <p 
                    style={{
                        fontSize:"80px",
                        fontWeight:"bolder"
                        }}>Work with us
                    </p>
                    <div 
                        style={{
                            backgroundColor:"white", 
                            borderTopLeftRadius:"20px",
                            borderTopRightRadius:"20px",
                            marginTop:"40px",
                            padding:"40px",
                            paddingLeft:"55px"
                        }}>
                        <Image src={ninlogo} alt="logo" />
                        <p style={{fontSize:"40px", fontWeight:"bold", marginTop:"20px"}}>About</p>
                        <p style={{fontSize:"33px", marginTop:"20px", width:"98%"}}> At ahead our goal is to make self-</p>
                        <p style={{fontSize:"33px", width:"98%"}}> improvement fun and lasting. We know there's</p>
                        <p style={{fontSize:"33px", width:"98%"}}> a way how to make it work. And that's what</p>
                        <p style={{fontSize:"33px", width:"98%"}}> aHead is all about!</p>
                            
                            
                            
                        
                    </div>
                        <div 
                            style={{
                                backgroundColor:"#fef6f1",
                                marginTop:"-17px",
                                width:"100%",
                                padding:"40px",
                                borderRadius:"20px",
                                paddingLeft:"55px"
                                }}>
                            <p                     
                                style={{
                                        fontSize:"40px",
                                        fontWeight:"bolder"
                                    }}>Product
                            </p>

                            <p style={{fontSize:"33px", marginTop:"20px", width:"98%"}}>Sure, you could spend ages reading books or</p>
                            <p style={{fontSize:"33px", width:"98%"}}>sitting in seminars on how to become a better</p>
                            <p style={{fontSize:"33px", width:"98%"}}>spouse, parent, or manager - like we did...</p>
                        </div>
                </div>

                <div className='ninthright'>
                    <p style={{fontSize:"80px", color:"#6442ee", fontWeight:"bold", paddingLeft:"300px", marginBottom:"20px"}}>ahead</p>
                    <div className='rightcontscroll'>
                        <div className='rightcont'>
                            <p style={{fontSize:"30px", fontWeight:"bold", marginTop:"30px", paddingLeft:"30px"}}>Power through, even when the going gets tough</p>
                            <p style={{fontSize:"20px", marginTop:"10px", width:"98%", paddingLeft:"30px"}}>We help you spot and work around</p>
                            <p style={{fontSize:"20px", marginTop:"10px", width:"98%", paddingLeft:"30px"}}>whatever stands in the way, be it bad</p>
                            <p style={{fontSize:"20px", marginTop:"10px", width:"98%", paddingLeft:"30px"}}>habits, fears, etc.</p>
                        </div>

                        <div className='rightcont'>
                            <p style={{fontSize:"30px", fontWeight:"bold", marginTop:"30px", paddingLeft:"30px"}}>Learn more about who you are and where you want to go</p>
                            <p style={{fontSize:"20px", marginTop:"10px", width:"98%", paddingLeft:"30px"}}>We ask the right questions to help you</p>
                            <p style={{fontSize:"20px", marginTop:"10px", width:"98%", paddingLeft:"30px"}}>better understand why you do things the</p>
                            <p style={{fontSize:"20px", marginTop:"10px", width:"98%", paddingLeft:"30px"}}>way you do.</p>
                        </div>

                        <div className='rightcont'>
                            <p style={{fontSize:"30px", fontWeight:"bold", marginTop:"30px", paddingLeft:"30px"}}>Play and grow together with others on the same journey</p>
                            <p style={{fontSize:"20px", marginTop:"10px", width:"98%", paddingLeft:"30px"}}>Ahead feels like a game, not like a chore.</p>
                            <p style={{fontSize:"20px", marginTop:"10px", width:"98%", paddingLeft:"30px"}}>See yourself grow every day towards</p>
                            <p style={{fontSize:"20px", marginTop:"10px", width:"98%", paddingLeft:"30px"}}>achieving your goals!</p>
                        </div>

                        <div className='rightcont'>
                            <p style={{fontSize:"30px", fontWeight:"bold", marginTop:"30px", paddingLeft:"30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <p style={{fontSize:"20px", marginTop:"10px", width:"98%", paddingLeft:"30px"}}>Lorem ipsum dolor sit amet</p>
                            <p style={{fontSize:"20px", marginTop:"10px", width:"98%", paddingLeft:"30px"}}>Lorem ipsum dolor sit amet</p>
                            <p style={{fontSize:"20px", marginTop:"10px", width:"98%", paddingLeft:"30px"}}>Lorem ipsum dolor sit amet</p>
                        </div>

                        <div className='rightcont'>
                            <p style={{fontSize:"30px", fontWeight:"bold", marginTop:"30px", paddingLeft:"30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <p style={{fontSize:"20px", marginTop:"10px", width:"98%", paddingLeft:"30px"}}>Lorem ipsum dolor sit amet</p>
                            <p style={{fontSize:"20px", marginTop:"10px", width:"98%", paddingLeft:"30px"}}>Lorem ipsum dolor sit amet</p>
                            <p style={{fontSize:"20px", marginTop:"10px", width:"98%", paddingLeft:"30px"}}>Lorem ipsum dolor sit amet</p>
                        </div>

                        <div className='rightcont'>
                            <p style={{fontSize:"30px", fontWeight:"bold", marginTop:"30px", paddingLeft:"30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <p style={{fontSize:"20px", marginTop:"10px", width:"98%", paddingLeft:"30px"}}>Lorem ipsum dolor sit amet</p>
                            <p style={{fontSize:"20px", marginTop:"10px", width:"98%", paddingLeft:"30px"}}>Lorem ipsum dolor sit amet</p>
                            <p style={{fontSize:"20px", marginTop:"10px", width:"98%", paddingLeft:"30px"}}>Lorem ipsum dolor sit amet</p>
                        </div>


                    </div>
                </div>

            </div>
            {/* Tenth Container */}

            <div className='tenthcont'>
                <p>Open vacancies</p>
            </div>
            <div className='vaccont' 
                    style={{
                        display:"flex", 
                        alignItems:"center", 
                        justifyContent:"space-between",
                        margin:"50px",
                        marginBottom:"50px"
                        }}>

                <div className='vac'>
                    <p>Senior Full-Stack Engineer</p>
                    <ul>
                        <li>Full-time position</li>
                        <li>Berlin or remote</li>
                        <li>$65-85k, 0.5-1.50% equity share options</li>
                    </ul>
                </div>
                
                <div className='vac'>
                    <p>Senior Designer</p>
                    <ul type="bullet">
                        <li>Full-time position</li>
                        <li>Berlin or remote</li>
                        <li>$40-55k, 0.25-0.50% equity share options</li>
                    </ul>
                </div>

                <div className='vac'>
                    <p>Superstar Intern</p>
                    <ul type="bullet">
                        <li>Full-time position</li>
                        <li>Berlin or remote</li>
                        <li>$20-24k, 0.5-1.50% equity share options</li>
                    </ul>
                </div>

            </div>

            <br/>
            <br/>
            <hr/>

            {/* Eleven Container */}
            <div className='elevencont'>
                <Image src={icon} alt="" />
                <p>ahead</p>
            </div>
            <div className='elevenmain'>
                <div 
                    style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        width:"28px",
                        height:"28px",
                        backgroundColor:"#94f1d6",
                        borderRadius:"60px",
                        marginRight:"5px"
                    }}>
                    <FontAwesomeIcon icon={fas.faLocationDot} />
                </div> 
                <p style={{marginRight:"100px"}}>Auguststraße 26, 10117 Berlin</p>

                <div 
                    style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        width:"28px",
                        height:"28px",
                        backgroundColor:"#94f1d6",
                        borderRadius:"60px",
                        marginRight:"5px"
                    }}>
                    <FontAwesomeIcon icon={fas.faEnvelope} />
                </div> 
                <p>hi@ahead-app.com</p>
            </div>
            <div 
                className='btncont'
                style={{
                    display:"flex",
                    width:"100%",
                    justifyContent:"center",
                    alignItems:"center",
                    flexDirection:"column"
                }}
                >
                <div className='storebtn' 
                        style={{
                            transform:"scale(0.8)", 
                            marginLeft:"28px",
                            marginTop:"30px"
                            }}>

                    <Image 
                        style={{
                            width:"60px",
                            height:"60px",
                            padding:"1px",
                            marginLeft:"10px"
                        }}
                        src={apple} 
                        alt="apple" 
                    />

                    <button 
                        type='submit'
                        style={{paddingLeft:"10px",fontSize:"18px"}}
                        >
                            Download on the 
                            <p 
                                style={{
                                    fontSize:"26px",
                                    fontWeight:"500",
                                    letterSpacing:"3px"
                                }}>
                                    App Store
                            </p>
                    </button>
                </div>
                <br/>
                <p>@ 2022 Ahead app. All right reserved</p>
            </div>

        </section>
    );
}

export default Hero;

