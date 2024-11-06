// importing
import StatDataProvider, { Country } from './main';

// usage
const provider = new StatDataProvider({
    country: Country.FINLAND,
});

console.log(provider.getCountry());