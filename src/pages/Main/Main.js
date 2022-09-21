import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Blog,
  Education,
  Experience,
  Contacts,
  Projects,
  Services,
  // Testimonials,
  // Achievement,
} from "../../components";
import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Portfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      {/* <Testimonials /> */}
      {/* <Achievement /> */}
      <Services />
      <Blog />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
