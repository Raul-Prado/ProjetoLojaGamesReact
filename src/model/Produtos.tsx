import Categoria from './Categoria';

export default interface Produtos {
    id: number;
    nome: string;
    preco: number;
    foto: string;
    curtir: number;
    categoria: Categoria | null; // chave estrageira
  }