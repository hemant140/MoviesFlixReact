import React, { useEffect, useState } from 'react'
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../../hook/UseFetch';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';


const HomeBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home)
  const { data, loading } = useFetch("/movie/upcoming")

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path

    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
    }

  }

  return (
    <div className='homeBanner'>
      {!loading && <div className="backdrop-img">
        <Img src={background} />
      </div>}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className='homeBannerContent'>
          <span className='title'>Welcome</span>
          <span className='subTitle'>
            Millions of movies, Tv shows and people to discover.
            Explore now.
          </span>
          <div className='serchInput'>
            <input type='text'
              placeholder='Search movie and tv show'
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={() => navigate(`/search/${query}`)}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HomeBanner
