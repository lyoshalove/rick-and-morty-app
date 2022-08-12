export interface ICharacterData {
  characters: Characters
}

export interface Characters {
  __typename: string
  results: ICharacterMainScreen[]
}


export interface ICharacterMainScreen {
  id: number;
  name: string;
  status: string;
  image: string;
}