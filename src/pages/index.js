import React from "react";

import { TypographyStyle, GoogleFont } from 'react-typography';
import typography from '../utils/typography';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import Layout from '../containers/Layout/Layout';

import './index.scss';
import pic from '../assets/crop.jpg';

export default () => (
    <Layout>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        <section className="hero is-success heroGradient is-medium">
            <div className="hero-body header">
                <h1 className="title">Michael D Chambers</h1>
                <h2 className="subtitle">data analyst / full-stack web developer</h2>
            </div>
        </section>
        <section>
            <div className="container main-body">
                <div className="columns is-multiline">
                    <div className="column about-me is-full">
                        <article className="media">
                            <div className="media-content">
                                <div className="content">
                                    <h1 className="title is-size-4">About Me</h1>
                                    <p className="subtitle is-size-6">
                                        Hi! I'm a full-stack web developer with experience in a variety of web technologies (please peruse my resume for details). 
                                        I received my PhD in Biochemistry in UCLA, during which I developed software to derive insights from large biological
                                        data sets. During that time, I discovered my true passion lies in software development more generally, and since graduation I
                                        have sought to apply my skills to interesting problems outside of the sciences.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="column is-one-third">
                        <article className="media">
                            <div className="media-content">
                                <div className="content">
                                    <h1 className="title is-size-4">Resume</h1>
                                    <p className="subtitle is-size-5">
                                        Download my resume <a className="nounderline" href={'resume.pdf'}>here</a>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="column is-one-third">
                        <article className="media">
                            <div className="media-content">
                                <div className="content">
                                    <h1 className="title is-size-4">Portfolio</h1>
                                    <p className="subtitle is-size-5">
                                        Check out my GitHub!
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>                
                    <div className="column is-one-third">
                        <article className="media">
                            <div className="media-content">
                                <div className="content">
                                    <h1 className="title is-size-4">Social Media</h1>
                                    <p className="subtitle is-size-5">
                                        <a className="nounderline" href="https://github.com/perturbation">
                                            <FaGithub style={{ verticalAlign: 'middle' }}/> Github
                                        </a>
                                        <br style={{ lineHeight: "25px" }}/>
                                        <a className="nounderline" href="https://www.linkedin.com/in/mdchambers/">
                                            <FaLinkedin style={{ verticalAlign: 'middle' }}/> LinkedIn
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
        {/* <img className="profilePic" src={pic} alt="Profile"></img>                 */}
    </Layout>
)
