import React from "react";
import Display from "./styles/DisplayStyle";
import Image, { Logo } from "./styles/ImageStyle";
import Button, { DetailButton } from "./styles/ButtonStyle";

const Header = () => {
  return (
    <div>
      <Display>
        <Logo src="./images/logo.png" alt="logo" />
        <div>
          <Button primary="red">Apply Courses</Button>
          <Button secondary>Talk to Adviser</Button>
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
          <Button secondary>New Career</Button>
          <DetailButton>Details</DetailButton>
        </div>

        <Image src="./images/hero.jpg" alt="hero" />
      </Display>
    </div>
  );
};

export default Header;
