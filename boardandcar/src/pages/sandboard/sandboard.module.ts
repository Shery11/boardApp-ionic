import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SandboardPage } from './sandboard';

@NgModule({
  declarations: [
    SandboardPage,
  ],
  imports: [
    IonicPageModule.forChild(SandboardPage),
  ],
})
export class SandboardPageModule {}
