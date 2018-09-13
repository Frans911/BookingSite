
import { Routes } from '@angular/router'
import { IntroComponent } from './components/intro/intro.component';
import { HomeComponent } from './components/home/home.component';

export const routes:Routes = [
    {path:'',component:IntroComponent},
    {path:'home',component:HomeComponent}
]