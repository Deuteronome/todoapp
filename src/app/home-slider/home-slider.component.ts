import { Component, OnInit } from '@angular/core';
import { SlideService } from '../services/slide.service';
import { Slide } from '../models/slide';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-home-slider',
  standalone: true,
  imports: [
    NgClass,
    NgStyle
  ],
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.scss'
})
export class HomeSliderComponent implements OnInit {
  slideList!: Slide[];

  constructor(private slideService:SlideService) {}

  ngOnInit(): void {
    this.slideList = this.slideService.getSlides();
  }

}
