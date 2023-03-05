import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AlbumsComponent} from "./albums/albums.component";
import {AlbumDetailComponent} from "./album-detail/album-detail.component";
import {AlbumPhotosComponent} from "./album-photos/album-photos.component";

const routes: Routes = [
    {path:  'home', component: HomeComponent },
    {path:  'about', component: AboutComponent },
    {path:  'albums', component: AlbumsComponent },
    {path:  'albums/:id', component: AlbumDetailComponent },
    {path:  '', redirectTo: 'home', pathMatch: 'full'},
    {path:  'albums/:id/photo', component: AlbumPhotosComponent},
    {path:  'albums/:id/albums', redirectTo: 'albums', pathMatch: 'full'},
    {path:  '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
