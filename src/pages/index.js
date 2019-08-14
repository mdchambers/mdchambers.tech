import React from "react"

// import { TypographyStyle, GoogleFont } from "react-typography"
// import typography from "../utils/typography"

// import { FaGithub, FaLinkedin } from "react-icons/fa"

import NavBeads from "../components/NavBeads/NavBeads"
import Slide from "../components/Slide/Slide"

// import VideoSlide from "../components/Slides/VideoSlide"
import IntroSlide from "../components/Slides/IntroSlide"
import AboutSlide from "../components/Slides/AboutSlide"
import ProjectsSlide from "../components/Slides/ProjectsSlide"
import ContactSlide from "../components/Slides/ContactSlide"

import "./index.scss"
// import pic from '../assets/crop.jpg';

export default () => {
  const slideInfo = {
    intro: {
      name: "Intro",
      bg: "#351f39",
      content: <IntroSlide />,
    },
    about: {
      name: "About Me",
      bg: "#726a95",
      content: <AboutSlide />,
    },
    projects: {
      name: "Projects",
      bg: "#709fb0",
      content: <ProjectsSlide />,
    },
    contact: {
      name: "Contact",
      bg: "#a0c1b8",
      content: <ContactSlide />,
    },
  }
  const slides = []
  const navInfo = {
    ids: [],
    names: [],
  }
  Object.entries(slideInfo).forEach(([key, val]) => {
    slides.push(
      <Slide id={key} key={key} bg={val.bg}>
        {val.content}
      </Slide>
    )
    navInfo.ids.push(key)
    navInfo.names.push(val.name)
  })

  // Set top nav to logo
  navInfo.names[0] = <img src="img/favicon2.png" alt="profile" />

  return (
    <React.Fragment>
      <main>
        <NavBeads ids={navInfo.ids} names={navInfo.names} />
        {slides}
      </main>
    </React.Fragment>
  )
}
