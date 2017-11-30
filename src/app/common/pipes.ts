import {PipeTransform, Pipe } from '@angular/core';
import {DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormatPipe',
})

export class dateFormatPipe implements PipeTransform {
  transform(value: string) {
       var datePipe = new DatePipe("en-US");
        value = datePipe.transform(value, 'MMM-dd-yyyy');
        return value;
    }
}
