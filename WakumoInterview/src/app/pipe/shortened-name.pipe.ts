import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenedName'
})
export class ShortenedNamePipe implements PipeTransform {

  transform(text: string) {
    if (!text) {
      return '';
    }
    const shortenedText = text
      .split(' ')
      .map((sub: any) => sub.slice(0, 1).toUpperCase())
      .join('');

    return shortenedText.slice(0, 1) + shortenedText.slice(-1);
  }
}
