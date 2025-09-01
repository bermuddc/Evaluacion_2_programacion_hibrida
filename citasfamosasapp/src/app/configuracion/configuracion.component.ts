import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss']
})
export class ConfiguracionComponent implements OnInit {
  permitirEliminar: boolean = true;
  borrarCitaInicio: boolean = false;

  async ngOnInit() {
    const eliminar = await Preferences.get({ key: 'permitirEliminar' });
    const borrar = await Preferences.get({ key: 'borrarCitaInicio' });

    this.permitirEliminar = eliminar.value === 'true';
    this.borrarCitaInicio = borrar.value === 'true';
  }

  async toggleEliminar(event: any) {
    this.permitirEliminar = event.detail.checked;
    await Preferences.set({
      key: 'permitirEliminar',
      value: String(this.permitirEliminar)
    });
  }

  async toggleBorrarInicio(event: any) {
    this.borrarCitaInicio = event.detail.checked;
    await Preferences.set({
      key: 'borrarCitaInicio',
      value: String(this.borrarCitaInicio)
    });
  }
}