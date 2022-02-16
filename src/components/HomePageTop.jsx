import React, { useState } from "react";
import ComicsIntroduction from "./common/ComicsIntroduction";
import HomePageSlider from "./common/HomePageSlider";

const HomePageTop = () => {
    const [index, setIndex] = useState(0);
    const imagesArr = [
        "/assets/images/fake/slider1.png",
        "/assets/images/fake/slider2.png",
    ];
    return (
        <>
            <div className="home-com-int">
                {index === 0 ? (
                    <ComicsIntroduction
                        coverName="01"
                        headerText="“Velvet Revolution”"
                        text="comics"
                        btnText="Buy now"
                        shortText='The "Velvet Revolution" comic book is about the events that took 
             place in Armenia a year ago, and was later characterized as "revolution" by people in Armenia. '
                        isVisible
                    />
                ) : (
                    <ComicsIntroduction
                        coverName="02"
                        headerText="“Velvet Revolution”"
                        text="comics"
                        btnText="Buy now"
                        shortText='The "Velvet Revolution" comic book is about the events that took 
         place in Armenia a year ago, and was later characterized as "revolution" by people in Armenia. '
                        isVisible
                    />
                )}
            </div>
            <div className="home-images-slider">
                <HomePageSlider
                    imagesArr={imagesArr}
                    index={index}
                    setIndex={setIndex}
                />
            </div>
        </>
    );
};

export default HomePageTop;
