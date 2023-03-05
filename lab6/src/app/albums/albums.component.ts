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
  newAlbum: Album;
  loaded: boolean;
  constructor(private albumService: AlbumService){
      this.newAlbum = {} as Album;
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


  addAlbum() {
      this.loaded = false;
      this.albumService.addAlbum(this.newAlbum).subscribe((album) => {
          this.data.unshift(album);
          this.newAlbum = {} as Album;
          // console.log(album);
          this.loaded = true;
      })
      // console.log(this.newAlbum);
  }


    rm(id: number): void {
        this.data = this.data.filter((x) => x.id !== id);
        // for(let i of this.data) {
        //     console.log(i.id)
        // }
        this.albumService.deleteAlbum(id).subscribe((id) => {
            console.log("Deleted", id);
        })
    }


}
