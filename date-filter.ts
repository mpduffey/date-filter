import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'dateFilter'})
export class DateFilter implements PipeTransform {
  transform(value, lowValue, highValue) {
    return value >= lowValue || value <= highValue;
  }
}