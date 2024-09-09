import { IAddres } from './addres.interface';
import { IStatus } from './status.interface';

export interface IUser {
  nome: string;
  email: string;
  senha: string;
  idade: number;
  endereco: IAddres;
  telefone: string;
  ativo: boolean;
  funcao: string;
  dataCadastro: string;
  status: IStatus;
}
