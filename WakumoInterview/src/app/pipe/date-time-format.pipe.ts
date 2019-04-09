import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

export class Constants {
  static readonly DATE_FMT = 'yyyy/MM/dd';
  static readonly DATE_TIME_FMT = `${Constants.DATE_FMT} - hh:mm`;
}


@Pipe({
  name: 'dateTimeFormat'
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return super.transform(value, Constants.DATE_TIME_FMT);
  }

}

