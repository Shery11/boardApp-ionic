import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WindsurfPage } from './windsurf';

@NgModule({
  declarations: [
    WindsurfPage,
  ],
  imports: [
    IonicPageModule.forChild(WindsurfPage),
  ],
})
export class WindsurfPageModule {}
