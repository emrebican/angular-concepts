export interface IPokemon {
  id: number;
  name: string;
  type: string;
  isCool: boolean;
  isStylish: boolean;
}

export interface IAnimal {
  name: string;
  environment: string;
  isMammal: boolean;
}

export interface ISerie {
  title: string;
  year: number;
  like: boolean;
}

export interface ITodoList {
  title: string;
  isComplete: boolean;
}
