import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GridComponentComponent } from './components/grid-component/grid-component.component';
import { PipesModule } from 'src/pipes/pipes.module';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ChannelComponent } from './components/channel/channel.component';


@NgModule({
  declarations: [
    HomePageComponent,
    GridComponentComponent,
    ActivityListComponent,
    ChannelComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PipesModule
  ]
})
export class HomeModule { }
