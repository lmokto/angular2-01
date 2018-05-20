import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensage : 'Un gran poder requiere una gran responsabilidad.',
        autor: 'Been parker'
    }

    personajes: string[] = ["Spiderman", "Vemon", "Dr. Octupus"];
}