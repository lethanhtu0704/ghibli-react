import axiosClient from "./axiosClient";

const movieApi = {
    getAll: (params) => {
        const url = '/films';
        return axiosClient.get(url, { params });
    },

    getFilm: (id) => {
        const url = `/films/${id}`;
        return axiosClient.get(url);
    },

    getAllPeople: (params) => {
        const url = '/people';
        return axiosClient.get(url, { params });
    },
}

export default movieApi;