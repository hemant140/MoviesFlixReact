import { useRef } from 'react'
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
// import CircleRating from "../circleRating/CircleRating";
// import Genres from "../genres/Genres";

import "./style.scss";
import MovieRating from '../rating/MovieRating';
import Genres from '../genres/Genres';

const Cards = ({ data, loading, endpoint }) => {

    const cardsContainer = useRef();
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();

    const skItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        );
    };

    const navigation = (dir) => {
        const container = cardsContainer.current;

        const scrollAmount = dir === "left" ?
            container.scrollLeft -
            (container.offsetWidth + 20)
            :
            container.scrollLeft +
            (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        })
    }
    return (
        <div className='cards'>
            <ContentWrapper>
                <BsFillArrowLeftCircleFill
                    className='cardsLeftNav arrow'
                    onClick={() => navigation("left")}

                />

                <BsFillArrowRightCircleFill
                    className='cardsRightNav arrow'
                    onClick={() => navigation("right")}
                />

                {!loading ? (<div className='cardsItems'
                    ref={cardsContainer}
                >
                    {data?.map((item) => {
                        const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;
                        return (
                            <div
                                key={item.id}
                                className='cardsItem'
                                onClick={() => navigate(`/${item.media_type || endpoint}/${item.id}`)}
                            >
                                <div className='posterBlock'>
                                    <Img src={posterUrl} />
                                    <MovieRating
                                        rating={item.vote_average.toFixed(1)}
                                    />

                                    <Genres data={item.genre_ids.slice(0, 2)} />
                                </div>
                                <div className="textBlock">
                                    <span className="title">
                                        {item.title || item.
                                            name}
                                    </span>
                                    <span className="date">
                                        {dayjs(item.release_Date).format(
                                            "MMM D, YYYY"
                                        )}
                                    </span>
                                </div>

                            </div>
                        )
                    })}
                </div>
                ) : (
                    <div className="loadingSkeleton">
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                    </div>
                )}

            </ContentWrapper>

        </div >
    )
}

export default Cards
