import axios from "axios";
import { Gallery } from "../models/Gallery.js";
import { AppState } from "../AppState.js";

const galleryApi = axios.create({
    baseURL: 'https://sandbox.codeworksacademy.com/api/',
})

class GalleryService {
    async changePage(pageNumber) {
        const response = await galleryApi.get(`artworks?page=${pageNumber}`)
        console.log('pagenumber', response.data);
        const gallery = response.data.artworks.map(Data => new Gallery(Data))
        AppState.gallery = gallery
        AppState.currentPage = response.data.page
    }

    async showGallery() {
        const response = await galleryApi.get('artworks')
        console.log('gallery??', response.data);
        const gallery = response.data.artworks.map(Data => new Gallery(Data))
        console.log('art ', gallery);
        AppState.gallery = gallery
    }


}

export const galleryService = new GalleryService()