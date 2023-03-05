import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ALBUMS, Album} from "../models";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;
  loaded: boolean;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.album = {} as Album;
    this.loaded = true;
  }

  ngOnInit() {
     this.route.paramMap.subscribe((params ) => {
         const id = Number(params.get('id'));
         // this.album = ALBUMS.find((al: Album) => al.id === id ) as Album;
        this.loaded = false;
         this.albumService.getAlbum(id).subscribe((album) => {
            this.album = album;
            this.loaded = true;
         })
     })

      // this.albumService.getAlbum().subscribe((this.album.id) => {
      //    return this.
      // })

  }


  rm (): void {
      ALBUMS[this.album.id-1] = {} as Album;
  }

}