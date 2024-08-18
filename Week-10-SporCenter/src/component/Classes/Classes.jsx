import { useState } from "react";

const Classes = () => {

    function handleOnClick(event) {
        const content = document.querySelector(".classes-content");

        if (event.target.id === "yoga") {
            content.innerHTML = "";
            content.innerHTML = `<h2>Yoga Content</h2>`
        }
        if (event.target.id === "group") {
            content.innerHTML = "";
            content.innerHTML = `<h2>Group Content</h2>`
        }
        if (event.target.id === "solo") {
            content.innerHTML = "";
            content.innerHTML = `<h2>Solo Content</h2>`
        }
        if (event.target.id === "stretch") {
            content.innerHTML = "";
            content.innerHTML = `<h2>Stretch Content</h2>`
        }

    }

    return (
        <>
            <div className="classes">
                <div className="classes-title">
                    <h2>Our Classes</h2>
                </div>
                <div className="classes-para">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, nihil.</p>
                </div>
                <div className="classes-btn">
                    <a id="yoga" onClick={handleOnClick} href="#">Yoga</a>
                    <a id="group" onClick={handleOnClick} href="#">Group</a>
                    <a id="solo" onClick={handleOnClick} href="#">Solo</a>
                    <a id="stretch" onClick={handleOnClick} href="#">Stretch</a>
                </div>

                <div className="classes-content"></div>
            </div>
        </>
    )
}
export default Classes;