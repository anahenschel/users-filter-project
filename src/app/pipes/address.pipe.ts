import { Pipe, PipeTransform } from '@angular/core';
import { IAddres } from '../interfaces/user/addres.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddres): string {

    const INVALID_ADDRESS = !address || !address.cidade || !address.estado
                             address.numero === null ||  address.numero === undefined || !address.rua;


    if(INVALID_ADDRESS){
      return "Endereço indisponível";
    }

    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`;

  }

}
