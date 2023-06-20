import React from 'react';
import CarosulSlider from '../CarosulSlider/CarosulSlider';
import ReactTabs from '../ReactTabs/ReactTabs';
import Gallery from '../Gallery/Gallery';
import CorToySection from '../CorToySection/CorToySection';
const Home = () => {
    return (
        <div>
            <CarosulSlider />
            <Gallery />
            <ReactTabs />
            <CorToySection />
        </div>
    );
};

export default Home;