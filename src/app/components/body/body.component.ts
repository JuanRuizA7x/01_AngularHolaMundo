import { Component } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    mostrar:boolean = true;

    frase:any = {
        mensaje: 'Un gran poder conlleva una gran responsabilidad',
        autor: 'Ben Parker'
    };

    personajes:string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];

}