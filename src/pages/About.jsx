import React from 'react';
import Banner from '../components/Banner';
import GetStarted from '../components/GetStarted';
import Mission from '../components/Mission';
import QuickTransfers from '../components/QuickTransfers';
import Team from '../components/Team';
import Layout from '../components/Layout';

function About() {
    return (
        <Layout>
            <Banner />
            <QuickTransfers />
            <Team />
            <Mission />
            <GetStarted />
        </Layout>
    )
}

export default About;