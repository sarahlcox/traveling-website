import React from 'react';
import SearchContainer from '../components/Search/SearchContainer.js';
import CardLayout from '../components/Layout/CardLayout.js';

 
function Home () {
    return (
        <div>
            <SearchContainer />
            <CardLayout />
        </div>
    )
}

export default Home;