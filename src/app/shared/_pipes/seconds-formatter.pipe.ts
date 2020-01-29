import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsFormatter'
})
export class SecondsFormatterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let seconds = value % 60;
    let minutes = Math.floor(value / 60) % 60;
    let hours = Math.floor(value / 3600);
    return `${hours < 10? '0': ''}${hours}
    :${minutes < 10? '0': ''}${minutes}
    :${seconds < 10? '0': ''}${seconds}`;
  }

}
