import React from "react"

import styled from "@emotion/styled"

const GradientHero = styled.section`
  text-align: left;
  background: #0f0c29; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #1f4037, #99f2c8);
  background: linear-gradient(to right, #1f4037, #99f2c8);

  box-shadow: 0px 20px 20px black;

  & > div {
    width: 75%;
    margin: auto;
  }
`
const Title = styled.h1`
  margin-top: 0;
`;

const Subtitle = styled.h2`
  color: #b1cccc;
`

const ProfilePicWrapper = styled.div`
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 50%;
  display: block;
  margin: auto;

`

const Hero = () => {
  return (
    <GradientHero className="hero is-small">
      <div className="hero-body">
        <div className="columns is-vcentered">
          <ProfilePicWrapper className="column is-one-third">
            <ProfilePic src="img/self2_crop.png" alt="" />
          </ProfilePicWrapper>
          <div className="column">
            <Title className="title">Michael D Chambers</Title>
            <Subtitle className="subtitle">
              full-stack web developer & data analyst
            </Subtitle>
          </div>
        </div>
      </div>
    </GradientHero>
  )
}

export default Hero
