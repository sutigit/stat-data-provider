import { Country } from './lib/enums'


export default class StatDataProvider {
    country: Country;

    constructor(options: { country: Country }) {
        this.country = options.country;
    }

    getCountry() {
        return this.country;
    }
}

export { Country }