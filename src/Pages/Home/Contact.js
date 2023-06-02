import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
const Contact = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["#01011F", "#410404", "#171717", "#2D2D2D"];

  const springProps = useSpring({
    backgroundColor: colors[colorIndex],
    padding: "20px",
    textAlign: "center",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((colorIndex + 1) % colors.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [colorIndex, colors.length]);

  return (
    <selection>
      <animated.div style={springProps}>
        <div>
          <h2 className="lg:text-5xl text-primary text-4xl text-center font-bold mt-10 pb-5">
            Contact Us
          </h2>
          <h2 className="text-3xl text-white font-bold">
            Stay connected with us
          </h2>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="input w-full max-w-xs my-5"
          />
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="input w-full max-w-xs mb-5"
          />
          <br />
          <textarea
            className="textarea  w-full max-w-xs"
            placeholder="Your Message"
          ></textarea>{" "}
          <br />
          <input
            type="submit"
            value="Submit"
            className="text-white font-bold py-2 px-5 rounded mt-5 mb-10 normal-case bg-gradient-to-r from-secondary to-primary w-full max-w-xs"
          />
        </div>
      </animated.div>
    </selection>
  );
};

export default Contact;
