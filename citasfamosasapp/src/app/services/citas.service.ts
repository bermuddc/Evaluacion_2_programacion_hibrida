import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private citas: { frase: string, autor: string }[] = [];

  constructor() {
    const guardadas = localStorage.getItem('citas');
    this.citas = guardadas ? JSON.parse(guardadas) : [
      { frase: 'El éxito consiste en obtener lo que se desea. La felicidad en disfrutar lo que se obtiene.', autor: 'Ralph Waldo Emerson' },
      { frase: 'Sé el cambio que deseas ver en el mundo.', autor: 'Mahatma Gandhi' },
      { frase: 'La creatividad es la inteligencia divirtiéndose.', autor: 'Albert Einstein' }
    ];
  }

  getTodas(): { frase: string, autor: string }[] {
    return [...this.citas];
  }

  agregar(frase: string, autor: string): void {
    this.citas.push({ frase, autor });
    this.guardar();
  }

  eliminar(index: number): void {
    this.citas.splice(index, 1);
    this.guardar();
  }

  private guardar(): void {
    localStorage.setItem('citas', JSON.stringify(this.citas));
  }

  getCitaAleatoria(): { frase: string, autor: string } {
    const index = Math.floor(Math.random() * this.citas.length);
    return this.citas[index];
  }
}