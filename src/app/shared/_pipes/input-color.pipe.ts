import { Pipe, PipeTransform } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

@Pipe({
  name: 'inputColor',
  pure: false
})
export class InputColorPipe implements PipeTransform {

  transform(value: AbstractControl, ...args: any[]): any {
    console.log(42);
    
    if(value.dirty || value.touched){
      if(value.valid){
        return 'success';
      }
      else{
        return 'danger';
      }
    }
    else{
      return 'primary';
    }
  }

}
