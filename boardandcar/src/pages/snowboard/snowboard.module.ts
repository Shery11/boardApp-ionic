import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SnowboardPage } from './snowboard';

@NgModule({
  declarations: [
    SnowboardPage,
  ],
  imports: [
    IonicPageModule.forChild(SnowboardPage),
  ],
})
export class SnowboardPageModule {}
