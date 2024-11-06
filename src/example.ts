// EXAMPLE USAGE AND TESTING

// importing
import StatDataProvider, { Country } from './main';

// usage
const provider = new StatDataProvider({
    country: Country.FINLAND,
});

// Main feature 1: Listing endpoints
// -------------------------------
// const endpoints = provider.getEndpoints();
// endpoints.forEach(endpoint => {
//     console.log(endpoint);
// })


// Main feature 2: Listening to loading event
// -------------------------------
// provider.on('loading', (status) => {
//     console.log(status);
// });


// Main feature 3: Fetching endpoint data
// -------------------------------
// const data = provider.fetchData(endpoints[123].code);