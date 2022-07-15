import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hiddenPassword'
})
export class HiddenPasswordPipe implements PipeTransform {

  transform(value: string, on: boolean): unknown {
    let hiddenPassword: string = '';
    if(on) {
      for(let i=0; i<value.length; i++) {
        hiddenPassword += "•";
      }
      return hiddenPassword;
    }
    else return value;
    
  }

}
