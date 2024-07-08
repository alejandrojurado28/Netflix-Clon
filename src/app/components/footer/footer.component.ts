import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  public footerItems = [
    { name: 'Preguntas frecuentes' },
    { name: 'Centro de ayuda' },
    { name: 'Cuenta' },
    { name: 'Zona de prensa' },
    { name: 'Inversores' },
    { name: 'Empleo' },
    { name: 'Canjear tarjetas regalo' },
    { name: 'Comprar tarjetas regalo' },
    { name: 'Formas de ver' },
    { name: 'Términos de uso' },
    { name: 'Privacidad' },
    { name: 'Preferencias de cookies' },
    { name: 'Información corporativa' },
    { name: 'Contáctanos' },
    { name: 'Prueba de velocidad' },
    { name: 'Garantía legal' },
    { name: 'Avisos legales' },
    { name: 'Solo en Netflix' },
    { name: 'Opciones de anuncios' },
  ]

}
