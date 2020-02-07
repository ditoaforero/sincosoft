import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'buscar'
})

@Injectable()
export class BuscarPipe implements PipeTransform{
    transform(items:any, term:any):any {
        
        let nombreCompleto:string;
        // Si no hay ningun termino de busqueda retorna todos los items
        if (term===undefined){
            return items;
        }
        return items.filter(function(item){
            nombreCompleto=item.nombre+item.primerApellido+item.segundoApellido;
            return nombreCompleto.toLowerCase().includes(term.toLowerCase());
        });
    }
}