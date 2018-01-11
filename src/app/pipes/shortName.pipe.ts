import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortName'
})

export class ShortName implements PipeTransform {
    transform(value: any, short:boolean): any {
        if(short){
        let temp = new Array();
        temp = value.split(' ');
        return temp[0] + ' ' + temp[1].substr(0,1);
    }
    return value;
    }
}