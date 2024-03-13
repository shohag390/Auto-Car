import React from 'react';
import About from '../About/About';
import Achievement from '../Achievement/Achievement';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Branches from '../Branches/Branches';
import Cars from '../Cars/Cars';
import Dealer from '../Dealer/Dealer';
import Galary from '../Galary/Galary';
import HotDeal from '../HotDeal/HotDeal';
import Services from '../Services/Services';
import Supports from '../Supports/Supports';
import Testimonials from '../Testimonials/Testimonials';
import NewsLatter from '../NewsLatter/NewsLatter';

const Home = () => {
    return (
        <div>
            <Banner />
            <Cars />
            <About />
            <Supports />
            <Dealer />
            <Galary />
            <NewsLatter />
            <Achievement />
            <HotDeal />
            <Testimonials />
            <Services />
            <Branches />
            <Blogs />
        </div>
    );
};

export default Home;