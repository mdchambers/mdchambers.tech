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
                <h2 className="subtitle">Data analyst / full-stack web developer</h2>
            </div>
        </section>
        {/* <img className="profilePic" src={pic} alt="Profile"></img>                 */}
    </Layout>
)
