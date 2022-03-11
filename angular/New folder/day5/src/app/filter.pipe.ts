import { Pipe, PipeTransform } from '@angular/core';
import { Speaker } from './_models/speaker';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(speks: Speaker[], searchTerm: string): Speaker[] {
    if (!speks || !searchTerm) {
        return speks;
    }

    return speks.filter(e =>
      e.fullName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)


  }

}
