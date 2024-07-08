import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'Questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {

  public faqItems = [
    { question: '¿Qué es Netflix?', description: 'Netflix es un servicio de streaming que ofrece una amplia variedad de series, películas, títulos de anime, documentales y otros contenidos premiados en miles de dispositivos conectados a internet.', showDescription: false },
    { question: '¿Cuánto cuesta Netflix?', description: 'Disfruta de Netflix en tu smartphone, tableta, Smart TV, ordenador o dispositivo de streaming, todo por una tarifa mensual fija. Planes desde 5,49 € a 17,99 € al mes. Sin cargos adicionales ni contratos.', showDescription: false },
    { question: '¿Dónde puedo ver Netflix?', description: 'Disfruta donde quieras y cuando quieras. Inicia sesión con tu cuenta de Netflix para disfrutar al instante de todo el contenido de Netflix.com desde tu ordenador personal o en cualquier dispositivo conectado a internet que ofrezca la aplicación de Netflix, entre ellos, smart TV, smartphones, tabletas,', showDescription: false },
    { question: '¿Cómo cancelo?', description: 'Netflix es flexible. Sin contratos liosos ni compromisos. Puedes cancelar fácilmente tu cuenta en línea con tan solo dos clics. Sin cargos por cancelación: activa o cancela tu cuenta en cualquier momento.', showDescription: false },
    { question: '¿Qué puedo ver en Netflix?', description: 'Netflix dispone de una amplia biblioteca de originales de Netflix galardonados, títulos de anime, series de TV, documentales, largometrajes y otros contenidos. Ve todo el contenido que quieras, cuando quieras.', showDescription: false },
    { question: '¿Es Netflix bueno para los niños?', description: 'Los perfiles infantiles incluyen controles parentales protegidos por PIN que te permiten restringir la calificación por edades del contenido que pueden ver los niños y bloquear determinados títulos que no quieras que vean.', showDescription: false },
  ];

  toggleDescription(item: any): void {
    item.showDescription = !item.showDescription;
  }

}
