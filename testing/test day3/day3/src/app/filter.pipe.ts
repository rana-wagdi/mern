import { Pipe, PipeTransform } from '@angular/core';
import { Department } from './_modules/department';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(depts: Department[], searchTerm: string): Department[] {
    if (!depts || !searchTerm) {
        return depts;
    }

    return depts.filter(e =>
      e.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)


  }

}