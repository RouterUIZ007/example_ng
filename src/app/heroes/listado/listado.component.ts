import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Iron', 'Cap', 'widows', 'widows', 'widows']
  ultimoHeroe: string = '';

  borrrarH(): void {
    this.ultimoHeroe = this.heroes.pop() || "";

  }
}
