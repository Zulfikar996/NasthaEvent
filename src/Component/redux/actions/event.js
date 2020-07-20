import axios from "axios";
import "dotenv/config";

export const postEvent = (data) => {
    return {
        type: 'POST_EVENT',
        payload: axios({
            method: "POST",
            url: `${process.env.REACT_APP_API_URL}`,
            data: data
        })
    }
}

export const getEventLimit = () => {
    return {
        type: 'GET_EVENTLIMIT',
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}?limit=5`,
        })
    }
}

export const getEvent = () => {
    return {
        type: 'GET_EVENT',
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}`,
        })
    }
}

export const getSearch = (name) => {
    return {
        type: 'GET_EVENTSEARCH',
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}?name=${name}`,
        })
    }
}

export const paginationProduct = (page) => {
    return {
        type: 'PAGINATION',
        payload: axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}?page=${page}`,
        })
    }
}