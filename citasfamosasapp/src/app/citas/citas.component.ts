import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ FormsModule para ngModel/ngForm
import { IonicModule } from '@ionic/angular';
import { SqliteCitasService } from '../services/sqlite-citas.service';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {

  // Variables de formulario
  nuevaFrase: string = '';
  autor: string = '';

  // Lista de citas
  citas: { id: number, frase: string, autor: string }[] = [];

  // Permitir eliminar según preferences
  permitirEliminar: boolean = true;

  constructor(private citasService: SqliteCitasService) {}

  async ngOnInit(): Promise<void> {
    console.log('CitasComponent cargado');

    // Cargar configuración de permitir eliminar
    const { value } = await Preferences.get({ key: 'permitirEliminar' });
    this.permitirEliminar = value === 'true';

    // Inicializar base de datos y cargar citas
    await this.citasService.initDB();
    this.citas = await this.citasService.getTodas();
  }

  // Agregar nueva cita
  async agregar(): Promise<void> {
    if (this.nuevaFrase.trim().length >= 5 && this.autor.trim().length >= 2) {
      await this.citasService.agregar(this.nuevaFrase, this.autor);
      // Limpiar formulario
      this.nuevaFrase = '';
      this.autor = '';
      // Recargar lista de citas
      this.citas = await this.citasService.getTodas();
    }
  }

  // Eliminar cita
  async eliminar(id: number): Promise<void> {
    await this.citasService.eliminar(id);
    this.citas = await this.citasService.getTodas();
  }
}
