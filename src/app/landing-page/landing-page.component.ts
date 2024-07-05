import { Component } from '@angular/core';
import { HomeComponent } from '../components/Home/home.component';
import { CardsComponent } from '../components/cards/cards.component';

@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [HomeComponent, CardsComponent],
  templateUrl: './landing-page.component.html',
  styles: ``
})
export class LandingPageComponent {

}
