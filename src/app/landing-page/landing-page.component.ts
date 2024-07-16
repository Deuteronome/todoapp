import { Component } from '@angular/core';
import { HomeTextComponent } from '../home-text/home-text.component';
import { HomeSliderComponent } from '../home-slider/home-slider.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HomeTextComponent,
    HomeSliderComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
