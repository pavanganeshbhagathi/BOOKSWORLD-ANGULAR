import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryFilterComponent } from './components/gallery-filter/gallery-filter.component';
import { MusicalComponentsComponent } from './components/musical-components/musical-components.component';
import { LoginheaderComponent } from './components/loginheader/loginheader.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'galleryFilter', component: GalleryFilterComponent, outlet: 'imageOutlet' },
  { path: 'musicalComponents', component: MusicalComponentsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
