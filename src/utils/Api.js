import axios from 'axios';

const Base_url = "https://api.themoviedb.org/3";

const MOVIE_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzY2MTk1ODQ5Y2YxYmQwYWQzYzQ0YWJiYzk3ZTE3NSIsInN1YiI6IjY0NDc1ZGQzMzU4MThmMDU3MmY4ZTEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U3bJORrI019hsyJh2-6dlTYYayI7zclcCThizCqz4Kk";

const headers = {

    Authorization: "bearer " + MOVIE_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {

    try {
        const { data } = await axios.get(Base_url + url, {
            headers,
            params
        })
        return data;

    } catch (error) {

        console.log(error);
        return error;

    }
}

