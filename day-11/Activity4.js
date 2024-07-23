//Task 6
const promise = fetch(`https://api.weatherapi.com/v1/current.json?key=6236436f4797466b990135125242307&q=India&aqi=no`);
promise.then((response) => {
    const data = response.json();
    console.log(data);
})

//Task 7
const url = `https://api.weatherapi.com/v1/current.json?key=6236436f4797466b990135125242307&q=India&aqi=no`;
const getData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Using Try-Catch :: ", data.location, data.current);
    } catch (error) {
        console.log(error);
    }
}

getData();