import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',

})

export class HeroeComponent{
    nombre: string = 'Iron man xD'
    edad: number = 45
    
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
        
    }
    obtenerNombre(): string{
        return `${ this.nombre } - ${ this.edad }`;
    }
    cambiarNombrte(): void {
        this.nombre = "SUper manx xD x2"
    }
    cambiarEdad(): void {
        this.edad = 1;
    }
}
