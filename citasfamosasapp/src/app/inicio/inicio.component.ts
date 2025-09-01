import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CitasService } from '../services/citas.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  frase: string = '';
  autor: string = '';

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    const cita = this.citasService.getCitaAleatoria();
    this.frase = cita.frase;
    this.autor = cita.autor;
  }
}
