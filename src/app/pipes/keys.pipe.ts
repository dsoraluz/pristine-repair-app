import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    let keys2 = [];
    let keys3 = [];
    let keys4 = [];

    for (let key in value) {
      keys.push({key: key, value: value[key]});
      console.log("keys",keys);
      console.log("values", value);
    }

    // for (let key in keys) {
    //   // console.log('keys', keys[key]);
    //   keys2.push({value: keys[key]});
    //   keys3.push(keys2[key]);
    //   console.log('keys2', value[key]);
    //   console.log('Keys3', keys3);
    //
    // }

    // for (let key in keys2){
    //   keys3.push(keys2[key]);
    //   console.log(keys3);
    // }


    // for (let key in keys3) {
    //   keys4.push({key:key , value: keys3[key]});
    //   console.log(keys4);
    //
    // }
    return keys;
  }
}
