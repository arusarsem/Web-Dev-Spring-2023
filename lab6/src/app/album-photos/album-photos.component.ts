import {Component, OnInit} from '@angular/core';
import {Album, AlbumPhotos} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
    loaded: boolean;
    albumId : number | undefined
    data: AlbumPhotos[]
    constructor(private route: ActivatedRoute, private albumService: AlbumService) {
        this.loaded = true;
        this.data = [];
    }

    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
           const id=  Number(params.get('id'));
           this.albumId = id;
           this.loaded = false;
           this.albumService.getAlbumPhoto(id).subscribe((albumPhoto) => {
               this.data = albumPhoto;
               this.loaded = true;
           })
        })
    }



}
