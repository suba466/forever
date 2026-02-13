import React, { useState, useEffect } from 'react';
import './index.css';

// Importing assets correctly
import cuteImg from './assets/cute.jpeg';
import heartImg from './assets/heart.jpeg';
import kissImg from './assets/kiss.jpeg';
import redLipsImg from './assets/red lips.jpeg';
import selfieImg from './assets/selfie.jpeg';
import hugImg from './assets/hug.jpeg';
import mallImg from './assets/mall.jpeg';
import annapoornaImg from './assets/annapoorna.jpeg';
import animeImg from './assets/anime.jpeg';

const App = () => {
    const [accepted, setAccepted] = useState(false);
    const [hearts, setHearts] = useState([]);
    const [surpriseHearts, setSurpriseHearts] = useState([]);
    const [noButtonText, setNoButtonText] = useState("No");
    const [finalAccepted, setFinalAccepted] = useState(false);

    // Combined Carousel index
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            type: 'letter',
            value: "Hey bad boy...luv u so much da ❤️....enaku epdi start pandrathu thrla ...but ok naa unna 1st paathathula irunthey solta🙈...entrance xam la unna paatha aana face avlo theliva kooda paakla ....irunthaalu kutty spark annaiku blue shirt tha potrunthe ....and nee enta pesna 1st word......143 tha 🙈🙈...aana apo thrla nee ivlo imprtant aavenu....how sweet la ....ipo nenacha kooda avlo happy aaguthu .....luv u sooooooooo much da chello.....apm epdiyo na select aagi clg vanthe ...vanthu paatha aalalku nee avanga aalu nee avanga crush nu soldraanga..apm ellarkitaiyu sanda poytu yaaru paaka koodathu solli unna sallika salika sight adiche...",

        },
        {
            type: 'photo',
            value: cuteImg,
            caption: "Itho ipdi irunthu thaa da enna mayakune...avlo amaithi knjam terror aa iruka maari iruppe ...aana naa paakrapo face thanmaiya softaa irukku ...unna paakrapo apdi shy aagu .....cutest to the core da chello nee❤️"
        },
        {
            type: 'photo',
            value: heartImg,
            caption: "Haa...apm intha shirt kooda podra apo cringe aa feel panniviyoo nu nenaiche ...but nee sweet da chello.....podrapo enna thonuchu solu.....You have my whole heart, forever and always....cha semaiya irukka da neee"
        },
        {
            type: 'letter',
            value: "Apm....clg la silar sight adikra maari la irupaange...athu ennavo thrla enaku apdila paaka koodathu ivaru irukaaru ....nee pothu nenaipe aana veru crush aa iruntha yen ipdila thonuthu nu yosipe ...but thrla unna avlo pudiku lyte aa yaaraichu paathaalu adutha second nee en mind la varuve illana antha place ku nee vanthruve ....athuka apm enna en kannu unna vitu pogave pogaathu ....unna mattu paathutey iruppe.....yenaku en unmeyla ivlo obession nu apo thrla ...ipo thana therithu ......luv u da hotteiiii",
            caption: "My sunshine...☀️"
        },
        {
            type: 'photo',
            value: kissImg,
            caption: "Intha pic a paakumpothey illuthu pudichu antha red velvetaa nalla sappanu thonuthu da.....ummmmmmaaaaaaaaaaaaaaaaa 💋😘"
        },
        {
            type: 'photo',
            value: redLipsImg,
            caption: "Intha pic ethu highlight therima ....un lips tha ...enna romba disturb pannuthu ....epo nerla vanthu kuduppe?????alagu da chelo neeee💄🌹"
        },
        {
            type: 'letter',
            value: "Apm vera neraiya moment irukku...daily attendance la sign potutu unna eti paathutu porathu....maching putfits paakrathu .....apm window valiya paakrathu apmm.....sir um enna paakreeng nu oru kutty doubt vanthuchu.....epona conference tym la .....conference ku munaadi naal work la senjutu iruthomey....apo naa en frnds ta pesitu irunthu...neey kitta oru 4 steps talli irunthu yaartaiyo pesitu irunthe..apo naanu paakre sir um enna tha paathutu iruntheenga aana athu normalla paakra maari illa....apo jollyaa irunthchu apm valakam pola....athu summa nu vittute ....but aana antha oru varusham ...epdila sight adiche theriyuma .....corridor la ukkarathey unna paaka tha da chelo...",
            caption: "My dream come true... 🌙"
        },
        {
            type: 'photo',
            value: selfieImg,
            caption: "Looking at you makes my heart skip a beat! 😍📸....unna ipdiye paathutey iruklaam pola irukku"
        },
        {
            type: 'letter',
            value: "Ithela connect panni paatha .....namma relationship onnu normallaa apdiye set aana maari thrla...something spl tha da chello.....ipo keykre.....will be my valentine?????????",
            caption: "Forever yours? 💍"
        }
    ];

    useEffect(() => {
        // Generate floating hearts for the first screen
        const newHearts = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 15}s`,
            size: `${Math.random() * 20 + 10}px`,
            duration: `${Math.random() * 10 + 10}s`
        }));
        setHearts(newHearts);
    }, []);

    useEffect(() => {
        if (accepted) {
            // Generate floating hearts for the surprise screen
            const newHearts = Array.from({ length: 30 }).map((_, i) => ({
                id: i,
                left: `${Math.random() * 100}%`,
                delay: `${Math.random() * 10}s`,
                size: `${Math.random() * 30 + 20}px`,
                duration: `${Math.random() * 15}s`
            }));
            setSurpriseHearts(newHearts);
        }
    }, [accepted]);

    const handleNoHover = () => {
        setNoButtonText("Yes");
    };

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

    if (finalAccepted) {
        return (
            <div className="app-container final-bg">
                <div className="surprise-hearts-container">
                    {surpriseHearts.map(heart => (
                        <div
                            key={heart.id}
                            className="surprise-heart"
                            style={{
                                left: heart.left,
                                animationDelay: heart.delay,
                                animationDuration: heart.duration,
                                fontSize: heart.size
                            }}
                        >
                            ❤
                        </div>
                    ))}
                </div>
                <div className="final-content">

                    <div className="unified-collage-frame">
                        <div className="composite-photo">
                            <img src={hugImg} alt="Hug" className="composite-img top-left" />
                            <img src={mallImg} alt="Mall" className="composite-img top-right" />
                            <img src={annapoornaImg} alt="Annapoorna" className="composite-img bottom-left" />
                            <img src={animeImg} alt="Anime" className="composite-img bottom-right" />
                            <div className="composite-heart-overlay">❤️</div>
                        </div>
                        <p className="composite-caption">Building Our Forever... ✨</p>
                    </div>
                    <button className="btn-primary" onClick={() => { setFinalAccepted(false); setAccepted(false); setCurrentIndex(0); }}>Restart ❤️</button>
                </div>
            </div>
        );
    }

    if (accepted) {
        return (
            <div className="app-container surprise-bg">
                <div className="surprise-hearts-container">
                    {surpriseHearts.map(heart => (
                        <div
                            key={heart.id}
                            className="surprise-heart"
                            style={{
                                left: heart.left,
                                animationDelay: heart.delay,
                                animationDuration: heart.duration,
                                fontSize: heart.size
                            }}
                        >
                            ❤
                        </div>
                    ))}
                </div>

                <div className="surprise-content">


                    <div className="main-carousel">
                        <button onClick={prevSlide} className="nav-btn main-nav">❮</button>

                        <div className="carousel-view-full">
                            <div className="carousel-item-container">
                                {slides[currentIndex].type === 'photo' ? (
                                    <img src={slides[currentIndex].value} alt="Moment" className="carousel-img-large" />
                                ) : (
                                    <div className="letter-card-view">
                                        <p className="letter-text-large">{slides[currentIndex].value}</p>
                                        {currentIndex === slides.length - 1 && (
                                            <div className="button-group final-buttons">
                                                <button
                                                    className="btn-primary"
                                                    onClick={() => setFinalAccepted(true)}
                                                >
                                                    Yes
                                                </button>
                                                <button
                                                    className="btn-secondary"
                                                    onMouseEnter={handleNoHover}
                                                    onMouseLeave={() => setNoButtonText("No")}
                                                    onClick={() => setFinalAccepted(true)}
                                                >
                                                    {noButtonText}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}
                                <div className="caption-overlay">
                                    <p className="caption-text">{slides[currentIndex].caption}</p>
                                </div>
                            </div>
                        </div>

                        <button onClick={nextSlide} className="nav-btn main-nav">❯</button>
                    </div>

                    <p className="slide-counter">{currentIndex + 1} / {slides.length}</p>
                    <button className="btn-primary" onClick={() => { setAccepted(false); setCurrentIndex(0); }}>Back</button>
                </div>
            </div>
        );
    }

    return (
        <div className="app-container">
            <div className="hearts-container">
                {hearts.map(heart => (
                    <div
                        key={heart.id}
                        className="heart"
                        style={{
                            left: heart.left,
                            animationDelay: heart.delay,
                            animationDuration: heart.duration,
                            fontSize: heart.size
                        }}
                    >
                        ❤
                    </div>
                ))}
            </div>

            <div className="content-card">
                <h4 className="valentine-name">Hey Enakku pudichavaney!! <span className="heart-icon">❤</span></h4>

                <p className="valentine-question">
                    Will u be my valentine......
                </p>
                <div className="button-group">
                    <button
                        className="btn-primary"
                        onClick={() => setAccepted(true)}
                    >
                        Yes
                    </button>
                    <button
                        className="btn-secondary"
                        onMouseEnter={handleNoHover}
                        onMouseLeave={() => setNoButtonText("No")}
                        onClick={() => setAccepted(true)}
                    >
                        {noButtonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
