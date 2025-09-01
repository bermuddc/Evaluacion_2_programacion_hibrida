import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SqliteCitasService {
  private citasMock: { id: number, frase: string, autor: string }[] = [];

  constructor() {}

  async initDB(): Promise<void> {
    console.log('Base simulada inicializada');
  }

  async agregar(frase: string, autor: string): Promise<void> {
    const nueva = {
      id: Date.now(),
      frase,
      autor
    };
    this.citasMock.push(nueva);
  }

  async eliminar(id: number): Promise<void> {
    this.citasMock = this.citasMock.filter(c => c.id !== id);
  }

  async getTodas(): Promise<{ id: number, frase: string, autor: string }[]> {
    return this.citasMock;
  }
}
