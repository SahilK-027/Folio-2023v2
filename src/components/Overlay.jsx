import React, { useState, useEffect } from "react";

function CurrentTime() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Function to update the current time every second
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => {
            clearInterval(interval);
        };
    }, []);

    return <span>{currentTime.toLocaleTimeString()}</span>;
}
const Overlay = () => {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                padding: 40,
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                pointerEvents: "none",
            }}>
            <div
                style={{
                    width: "100%",
                    padding: 0,
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <p
                    style={{
                        fontFamily: "'Antonio', sans-serif",
                        flex: "1 1 0%",
                        height: 30,
                        fontSize: 50,
                        fontWeight: "700",
                        lineHeight: "30px",
                        color: "black",
                        letterSpacing: -2,
                    }}>
                    SAHIL KANDHARE
                </p>
                <div style={{ flex: "1 1 0%", display: "flex", gap: "2em" }}></div>
                <p style={{ flex: "1 1 0%", height: 30, fontSize: 20, lineHeight: "30px", textAlign: "right", color: "black" }}>Welcome ツ !</p>
            </div>
            <div style={{ height: 60 }} />
            <div style={{ width: "100%", padding: 0, display: "inline-flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "center" }}>
                <p style={{ flex: "1 1 0%", height: "100%", fontSize: 12, lineHeight: "1.5em", color: "black" }}>
                    <b>CREATIVE WEB DEVELOPER</b>
                    <br />
                    <i className="fa-solid fa-location-dot"></i> Location: India, Pune.
                    <br />
                    <i className="fa-solid fa-hourglass-start"></i> Current Time: <CurrentTime />.
                    <br />
                    <b>———</b>
                </p>
                <div style={{ width: 10 }} />
                <p
                    style={{
                        transform: " translateY(33%) translateX(33%) rotate(90deg)",
                        display: "flex",
                        padding: "10px 20px",
                        backgroundColor: "#fff",
                        color: "#000",
                        fontSize: "16px",
                        textDecoration: "none",
                        borderRadius: "3px",
                        transition: "transform 0.2s ease",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        flexDirection: "column"
                    }}
                >
                    <a href="./resume.pdf" download style={{ textAlign: "center", textDecoration: "none", color: "black", padding: "0" }}>
                        RESUME
                        <i style={{ padding: "4px", transform: "rotate(-90deg)" }} className="fa-solid fa-download"></i>
                    </a>
                </p>
            </div>
            <div
                className="full"
                style={{
                    fontFamily: "'Antonio', sans-serif",
                    width: "100%",
                    padding: 0,
                    flex: "3 1 0%",
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "center",
                }}>
                <p style={{ flex: "1 1 0%", fontSize: 250, lineHeight: "1em", color: "black", margin: 0, letterSpacing: -10 }}>SK</p>
                <div style={{ width: 10 }} />
                <p style={{ flex: "1 1 0%", fontSize: 250, lineHeight: "100%", textAlign: "right", color: "black", margin: 0, letterSpacing: -10 }}>_027</p>
            </div>
            <div style={{ height: 60 }} />

            <div
                style={{
                    pointerEvents: "all",
                    pointer: "auto",
                    width: "100%",
                    padding: 0,
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    flex: "1 1 0%",
                }}>
                <p className="full" style={{ whiteSpace: "nowrap", flex: "1 1 0%", fontSize: 12, lineHeight: "1.5em", color: "black" }}>
                    <b> <i className="fa-regular fa-envelope"></i> Contact Me Here:</b>
                    <br />
                    <a href="mailto:sahilkandhare027@gamil.com">sahilkandhare027@gamil.com</a>
                </p>
                <div style={{ width: 10 }} />
                <p
                    className="full"
                    style={{
                        fontFamily: "'Antonio', sans-serif",
                        flex: "1 1 0%",
                        fontSize: 16,
                        fontWeight: "700",
                        lineHeight: "1em",
                        textAlign: "center",
                        color: "black",
                        letterSpacing: -0.5,
                        whiteSpace: "nowrap",
                    }}>
                    EMBRACING INFINITE LOOPS, EXPLORING ENDLESS POSSIBILITIES.
                </p>
                <div style={{ width: 10 }} />
                <p className="full" style={{ flex: "1 1 0%", fontSize: 12, lineHeight: "1em", textAlign: "right", color: "black" }}></p>
            </div>
            <div style={{ position: "absolute", bottom: 40, right: 40 }}>
                <p style={{ flex: "1 1 0%", fontSize: 20, lineHeight: "1em", textAlign: "right", color: "black" }}>
                    <a target="_blank" href="https://github.com/sahilk-027"><i className="fa-brands fa-github"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/sahilk027/"><i className="fa-brands fa-linkedin"></i></a>
                </p>
            </div>

        </div>

    )
}
export default Overlay;