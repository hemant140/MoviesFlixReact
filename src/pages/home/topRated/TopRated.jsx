import React, { useState } from 'react'
import "./style.scss"

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import Cards from '../../../components/cards/Cards'
import useFetch from "../../../hook/UseFetch"






const TopRated = () => {

    const [endpoint, setEndpoint] = useState("movie");
    const { data, loading } = useFetch(`/${endpoint}/top_rated`)


    const onTabChange = (tab) => {
        setEndpoint(tab === "Movie" ? "movie" : "tv");

    };

    return (
        <div className='carouseSection'>
            <ContentWrapper>
                <span className='carouseTitle'>Top Rated</span>

                <SwitchTabs data={["Movie", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>

            <Cards endpoint={endpoint} data={data?.results} loading={loading} />
        </div>
    )
}

export default TopRated