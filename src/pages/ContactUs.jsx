import React, { useState } from "react";
import PropTypes from "prop-types";
import InputGroup from "../components/common/InputGroup";
import Buttons from "../components/common/buttons/Buttons";
import ConfirmationModal from "../components/common/modal/ConfirmationModal";

const ContactUs = () => {
    const [activeTab, setActiveTab] = useState("project");
    const [visible, setVisible] = useState(false);
    const handleInputGroupChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
    };
    const handleChange = () => {
        setVisible(true);
    };
    return (
        <div className="contact-us-container">
            <div className="contact-us-body">
                <div className="comics-desc-top"></div>
                <div className="contact-us-content">
                    <div className="contact-us-left-col">
                        <div className="contact-us-header">
                            <div
                                className="header-text link"
                                onClick={() => setActiveTab("project")}
                            >
                                <span> Start A Project</span>
                                <div
                                    className={`${
                                        activeTab === "project"
                                            ? "selected-tab"
                                            : ""
                                    }`}
                                ></div>
                            </div>
                            <div
                                className="header-text link"
                                onClick={() => setActiveTab("message")}
                            >
                                <span> Drop a message</span>
                                <div
                                    className={`${
                                        activeTab === "message"
                                            ? "selected-tab"
                                            : ""
                                    }`}
                                ></div>
                            </div>
                        </div>
                        <div className="left-col-body">
                            <div className="input-cont">
                                <InputGroup
                                    placeHolder="Name"
                                    handleChange={handleInputGroupChange}
                                    name="name"
                                    value={"name"}
                                />
                                <InputGroup
                                    placeHolder="Surname"
                                    handleChange={handleInputGroupChange}
                                    name="name"
                                    value={"name"}
                                />
                            </div>
                            <div className="input-cont">
                                <InputGroup
                                    placeHolder="Email:"
                                    handleChange={handleInputGroupChange}
                                    name="name"
                                    value={"name"}
                                />
                                <InputGroup
                                    placeHolder="Tel."
                                    handleChange={handleInputGroupChange}
                                    name="name"
                                    value={"name"}
                                />
                            </div>
                            <div className="input-cont">
                                <InputGroup
                                    placeHolder={
                                        "Tell us about your project timline and budget:"
                                    }
                                    handleChange={handleInputGroupChange}
                                    textArea
                                    name="name"
                                    value={"name"}
                                />
                            </div>
                        </div>
                        <div className="btn-container">
                            <Buttons
                                classname="white-btn "
                                text="Send message"
                                handleChange={handleChange}
                                name="name"
                                value={"name"}
                            />
                        </div>
                    </div>
                    <div className="contact-us-right-col">
                        <div className="right-col-header">
                            <span>CONTACT</span>
                            <span>INFORMATION </span>
                        </div>
                        <div className="adress-container">
                            <address>Yerevan, Armenia Address</address>
                            <address>
                                <a href="tel: +374 91 132112">+374 91 132112</a>
                            </address>
                            <address>
                                <a href="tel: +374 91 132112">+374 91 132112</a>
                            </address>
                            <address>
                                <a href="mailto:info@mayro.school">
                                    info@mayro.school
                                </a>
                            </address>
                        </div>
                        <div className="social-links-container">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/mayro.comics"
                            >
                                Facebook
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/mayro_comics"
                            >
                                Instagram
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/company/mayrocomics/about/"
                            >
                                Linkedin
                            </a>
                        </div>
                    </div>
                </div>
                <div className="comics-desc-bottom"></div>
            </div>
            <ConfirmationModal visible={visible} setVisible={setVisible} />
        </div>
    );
};

ContactUs.propTypes = {};

export default ContactUs;
