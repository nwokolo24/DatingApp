import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from "ngx-bootstrap/tabs";
import { GalleryModule, ImageItem } from 'ng-gallery';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    }),
    TabsModule.forRoot(),
    GalleryModule,
    ImageItem
  ],
  exports: [
    BsDropdownModule,
    ToastrModule,
    TabsModule,
    GalleryModule,
    ImageItem
  ]
})
export class SharedModule { }
