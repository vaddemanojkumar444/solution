import { Character } from "../../characters/models/character";

export interface Movie {
  id: number;
  title:string;
  episode_id:number;
  opening_crawl:string;
  director:string;
  producer:string;
  realease_date:string;
  characters: string[];
  charactersData: Character[];
  planets:string[];
  starships:string[];
  vehicles:string[];
  species:string[];
  created: string;
  edited: string;
  url:string
}

export interface MoviesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Movie[];
}
