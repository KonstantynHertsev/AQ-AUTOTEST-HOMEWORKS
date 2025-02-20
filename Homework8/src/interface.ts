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

  class Obj2 {
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
 }


async function getJson(): Promise<Country> {
    const response = await fetch('https://restcountries.com/v3.1/name/ukraine');
    const json = await response.json() as Country[];
    return json[0];    
}

(async () => {
    const data = await getJson();
    const obj2 = new Obj2(data);

    console.log(obj2.getSummary()); 
})();
