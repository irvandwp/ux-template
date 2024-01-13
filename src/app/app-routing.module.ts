import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
		path: 'home',
		loadChildren: () =>
			import('../modules/home/home.module').then(
				(m) => m.HomeModule
			),
	},
	{
		path: 'videos',
		loadChildren: () =>
			import('../modules/videos/videos.module').then(
				(m) => m.VideosModule
			),
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
