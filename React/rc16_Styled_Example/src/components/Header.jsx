import React from "react";
import Display from "./styles/DisplayStyle";
import Image, { Logo } from "./styles/ImageStyle";

const Header = () => {
  return (
    <div>
      <Display>
        <Logo src="./images/logo.png" alt="logo" />
        <div>
          <button>Apply Courses</button>
          <button>Talk to Adviser</button>
        </div>
      </Display>

      <Display>
        <div>
          <h1>The IT Career of Your Dreams Starts Here</h1>
          <p>
            Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.
          </p>
          <button>New Career</button>
          <button>Details</button>
        </div>

        <Image src="./images/hero.jpg" alt="hero" />
      </Display>
    </div>
  );
};

export default Header;
