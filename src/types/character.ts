interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface From {
  name: string;
  url: string;
}

interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: From;
  location: From;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface CharacterResponse {
  info: Info;
  results: Result[];
}

export type { CharacterResponse, Result as Character };
