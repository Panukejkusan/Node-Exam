const axios = require('axios');
const yargs = require('yargs');

const userName = yargs.argv.userName;
const followers = yargs.argv.followers;

console.log(userName, followers);

const getUser = async (userName) => {
    const url = `https://api.github.com/users/${userName}`;
    const response = await axios.get(url);
    return response.data;
}

const getRepos = async (userName) => {
    const url = `https://api.github.com/users/${userName}/repos`;
    const response = await axios.get(url);
    return response.data;
}

const getWeather = async (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=${location}`;
    const response = await axios.get(url);
    return response.data;
}

(async () => {
    try {
        // getUser(userName).then(user => {  // same 
        //     console.log("Name: " + user.name);
        // })

        const user = await getUser(userName); // same 
        console.log("Name: " + user.name);
        
        if (followers === "show"){ 
            console.log("Followers: " + user.followers);
        }
        console.log("Number of repos: " + user.public_repos);
        const repos = await getRepos(userName);
        console.log("Names of repos: ");
        repos.forEach(repo => console.log(repo.name));
        const weather = await getWeather(user.location);
        console.log("Weather description: ", weather.main) 
        if (weather.weather.length > 0){
            console.log(weather.weather[0].description);
        }
    }
    catch (error) {
        console.log("Błąd komunikacji z serwerem", error.message);
    }
})();

