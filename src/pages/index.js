import React from "react";

import { TypographyStyle, GoogleFont } from 'react-typography';
import typography from '../utils/typography';


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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
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
                                        Download my resume
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
                                        Investigate my portfolio
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
                                    <p className="is-size-5">
                                        github
                                        <br/>
                                        linkedin
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
