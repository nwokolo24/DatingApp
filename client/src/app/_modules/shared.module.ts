import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from "ngx-bootstrap/tabs";
import { GalleryModule } from 'ng-gallery';
import { NgxGalleryModule } from 'ngx-gallery';

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
    NgxGalleryModule
  ],
  exports: [
    BsDropdownModule,
    ToastrModule,
    TabsModule,
    GalleryModule,
    NgxGalleryModule
  ]
})
export class SharedModule { }
