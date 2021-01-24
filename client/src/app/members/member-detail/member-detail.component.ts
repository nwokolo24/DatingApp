import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';
import { Gallery, GalleryRef, GalleryItem } from 'ng-gallery';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  galleryId = 'mixedExample';
  member: Member;

  constructor(private memberService: MembersService, private route: ActivatedRoute, private gallery: Gallery) { }

  ngOnInit(): void {
    this.loadMember();

    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      }
    ]
  }

  getImages(): NgxGalleryImage[] {
    const imageUrls = [];
    for(const photo of this.member.photos){
      imageUrls.push({
        small: photo?.url,
        medium: photo?.url,
        big: photo?.url
      })
    }
    
    return imageUrls;
  }

  loadMember(){
    this.memberService.getMember(this.route.snapshot.paramMap.get("username")).subscribe(member =>{
      this.member = member;
    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
    galleryRef.addImage({
      src: this.member.photoUrl,
      thumb: this.member.photoUrl,
    });
    galleryRef.addImage({
      src: this.member.photoUrl,
      thumb: this.member.photoUrl,
    });
    galleryRef.addImage({
      src: this.member.photoUrl,
      thumb: this.member.photoUrl,
    });
    })
  }

}
