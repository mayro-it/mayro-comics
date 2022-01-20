import React from "react";
import ComicsDesc from "../components/common/ComicsDesc";
import ComicsIntroduction from "../components/common/ComicsIntroduction";
import HomePageSlider from "../components/common/HomePageSlider";
import PageFooter from "../components/common/PageFooter";
import CoverFlow from "../components/sliders/CoverFlow";
import LinerSlider from "../components/sliders/LinerSlider";

const HomePage = () => {
    const imagesArr = [
        "/assets/images/fake/slider1.png",
        "/assets/images/fake/slider2.png",
        "/assets/images/fake/slider1.png",
        "/assets/images/fake/slider2.png",
    ];
    return (
        <div className="home-page">
            <div className="home-page-container">
                <div className="home-page-top">
                    <div className="home-com-int">
                        <ComicsIntroduction
                            coverName="01"
                            headerText="“Velvet Revolution”"
                            text="comics"
                            btnText="Buy now"
                            shortText='The "Velvet Revolution" comic book is about the events that took 
                        place in Armenia a year ago, and was later characterized as "revolution" by people in Armenia. '
                            isVisible
                        />
                    </div>
                    <div className="home-images-slider">
                        <HomePageSlider imagesArr={imagesArr} />
                    </div>
                </div>
                <ComicsDesc />
                <div className="home-page-top hame-page-cooparate">
                    <div className="home-com-int">
                        <ComicsIntroduction
                            headerText="Cooperate is"
                            text="great"
                            btnText={"Learn More"}
                            shortText='The "Velvet Revolution" comic book is about the events that took place in Armenia a year ago, and was later 
                    characterized as "revolution" by people in Armenia. This is not a story about politicians, or about the development of 
                    political movements in the country, or a revolution or a change of power, instead its a story about the victory of the people and peace. '
                        />
                    </div>
                    <div className="home-images-slider">
                        {/* <CoverFlow /> */}
                        <LinerSlider  imagesArray={imagesArr}/>
                        {/* <HomePageSlider imagesArr={imagesArr} /> */}
                    </div>
                </div>
                </div>
                <div className="home-page-image">
                    <img
                        src="/assets/images/homePage.png"
                        alt="home page image"
                    />
                </div>
        
            <PageFooter />
        </div>
    );
};

export default HomePage;
