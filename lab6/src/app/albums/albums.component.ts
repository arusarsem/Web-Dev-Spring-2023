import {Component, OnInit} from '@angular/core';
import { ALBUMS, Album } from "../models";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  data: Album[];
  loaded: boolean;
  constructor(private albumService: AlbumService){
      this.loaded = true;
      this.data = [];
  }

  ngOnInit() {
    this.getPosts()
      // this.data = ALBUMS;
  }

  getPosts() {
      this.loaded = false;
      this.albumService.getAlbums().subscribe((album) => {
          this.data = album;
          this.loaded = true;
      })
  }


}
