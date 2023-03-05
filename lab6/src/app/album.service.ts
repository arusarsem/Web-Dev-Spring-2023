import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album, AlbumPhotos} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
    BASE_URL = 'https://jsonplaceholder.typicode.com/albums/';

    constructor(private client: HttpClient) { }

    getAlbums(): Observable<Album[]> {
        return this.client.get<Album[]>(`${this.BASE_URL}`)
    }


    getAlbum(id: Number): Observable<Album> {
        return this.client.get<Album>(`${this.BASE_URL}${id}`)
    }

    getAlbumPhoto(id: Number): Observable<AlbumPhotos[]> {
        return this.client.get<AlbumPhotos[]>(`${this.BASE_URL}${id}/photos`)
    }


    addAlbum(album: Album): Observable<Album> {
        return this.client.post<Album>(`${this.BASE_URL}`, album);
    }


    deleteAlbum(id: number): Observable<Album> {
        return this.client.delete<Album>(`${this.BASE_URL}${id}`);
    }

    editAlbum(album: Album): Observable<Album> {
        return this.client.put<Album>(`${this.BASE_URL}${album.id}`, album);
    }

}
