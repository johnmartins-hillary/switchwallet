import React from 'react';
import GettingStarted from '../components/GettingStarted';
import Layout from '../components/Layout';
import Multichain from '../components/Multichain';
import FiatToCrypto from '../components/FiatToCrypto';
import Supports from '../components/Supports';
import Welcome from '../components/Welcome';
import NextLevel from '../components/NextLevel';
import Partners from '../components/Partners';

function Home() {
    return (
        <Layout>
            <Welcome />
            <Multichain />
            <FiatToCrypto />
            <Supports />
            <GettingStarted />
            <Partners />
            <NextLevel />
        </Layout>
    )
}

export default Home;