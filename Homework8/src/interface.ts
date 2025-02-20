export interface Country {
    name: {
      common: string;
      official: string;
      nativeName: {
        [key: string]: {
          official: string;
          common: string;
        }
      }
    }
    population: number;
    area: number;
}

  export class Obj2 {
    commonName: string;
    commonOfficial: string;
    nativeNames: string[];
    population: number;
    area: number;
    totalInfo: string;


    constructor (country: Country) {
        this.commonName = country.name.common;
        this.commonOfficial = country.name.official;
        this.nativeNames = Object.keys(country.name.nativeName) .map(kye =>
            country.name.nativeName[kye].common
        );
        this.population = country.population;
        this.area = country.area;
        this.totalInfo = `Country: ${this.commonName} | Population: ${this.population.toLocaleString()} | Area: ${this.area.toLocaleString()} km²`;
    }

    getSummary() {
        return `${this.totalInfo}\nNative Names: ${this.nativeNames.join(', ')}`;
    }
 };