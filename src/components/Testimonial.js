import React from "react";
import "./Testimonial.css";
import user1 from "./images/user1.jpeg";
import user2 from "./images/user2.jpeg";
import user3 from "./images/user3.jpeg";

const Testimonial = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={user1} alt="user1" />
            <p>
              It is not everyday that you come across a passionate and
              trustworthy financial advisor.John Doe is a true professional,who
              does his work really well.Thanks John!
            </p>
            <p>
              <span>Johnson.M.J</span>
            </p>
            <p>Director of "Financial Times"</p>
          </div>
          <div className="card">
            <img src={user2} alt="user1" />
            <p>
              In just two very short meetings with John,he managed to find the
              solution personally catered to my situation and expectations,he is
              punctual,well informed and very reliable
            </p>
            <p>
              <span>Joseph Grace</span>
            </p>
            <p>manager at first City Ltd</p>
          </div>
          <div className="card">
            <img src={user3} alt="user1" />
            <p>
              A very professional advisor,who is true to his word.John has
              demonstrated a high amount of integrity in the time i have known
              him and he is fast to response,and i love his job.
            </p>
            <p>
              <span>Moses Newton</span>
            </p>
            <p>Managing Director of BPW Global</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
