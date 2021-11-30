import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsisNotation'
})
export class EllipsisNotationPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {

    const len = args[0] || 16;

    if (value.length <= len) return value;

    return value.slice(0, len) + '...';
  }

}
