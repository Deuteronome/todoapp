import { Injectable } from "@angular/core";
import { Slide } from "../models/slide";

@Injectable({
    providedIn: 'root'
})

export class SlideService {
    private slides: Slide[] = [
        new Slide('/assets/slides/slide1.jpg', 'Planifiez avec Plaisir', '-7deg'),
        new Slide('/assets/slides/slide2.jpg', 'Sentez l\'Accomplissement à Chaque Étape', '11deg'),
        new Slide('/assets/slides/slide3.jpg', 'Simplifiez Votre Vie Quotidienne', '5deg')
    ];

    getSlides() {
        return [...this.slides];
    }
}