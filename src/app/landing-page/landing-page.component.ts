import { Component } from '@angular/core';
import { HomeComponent } from '../components/Home/home.component';
import { CardsComponent } from '../components/cards/cards.component';
import { QuestionsComponent } from '../components/questions/questions.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [HomeComponent, CardsComponent, QuestionsComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styles: ``
})
export class LandingPageComponent {

}
