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
  edAlbum: Album;
  loaded: boolean;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.album = {} as Album;
    this.edAlbum = {} as Album
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


  // rm (id: number): void {
  //     this.albumService.deleteAlbum(id).subscribe((id) => {
  //
  //     })
  // }

    Edit(){
      this.loaded = false;
      this.album.title = this.edAlbum.title
      this.albumService.editAlbum(this.album).subscribe((album) => {
          console.log(album);
          this.loaded = true;
        })
    }

}
