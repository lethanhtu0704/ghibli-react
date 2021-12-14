import axiosClient from "./axiosClient";

const peopleApi = {
    getAll: (params) => {
        const url = '/people';
        return axiosClient.get(url, { params });
    },

    getCharacter: (id) => {
        const url = `/people/${id}`;
        return axiosClient.get(url);
    },
}

export default peopleApi;