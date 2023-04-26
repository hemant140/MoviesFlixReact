import React, { useState } from 'react'
import "./style.scss"

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import Cards from '../../../components/cards/Cards'
import useFetch from "../../../hook/UseFetch"






const Trending = () => {

    const [endpoint, setEndpoint] = useState("day");
    const { data, loading } = useFetch(`/trending/movie/${endpoint}`)


    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");

    };

    return (
        <div className='carouseSection'>
            <ContentWrapper>
                <span className='carouseTitle'>Trending</span>

                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>

            <Cards endpoint={endpoint} data = {data?.results} loading ={loading} />
        </div>
    )
}

export default Trending
