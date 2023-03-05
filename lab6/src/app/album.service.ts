import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album} from "./models";
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

}
