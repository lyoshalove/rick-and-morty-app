export interface ILocationsResults {
  __typename: string;
  id: string;
  name: string;
  type: string;
}

export interface ILocations {
  __typename: string;
  results: ILocationsResults[];
}

export interface ILocationsData {
  locations: ILocations;
}