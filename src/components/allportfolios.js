import port1 from "../images/homegrown.png";
import port2 from "../images/budgetTracker.png";
import port3 from "../images/E-commerce.png";
import port4 from "../images/weatherDash.png";
import port5 from "../images/fitnessTracker.png";
import port6 from "../images/hangryapp.png";




const portfolioData = [
    {
        id: 1,
        category: 'Javascript, MVC',
        link1: 'https://github.com/caitie-gorham/project-2',
        link2: "https://homegrown-app-grizzlies.herokuapp.com/",
        icon1: 'GH',
        icon2: 'App',
        image: port1,
        title: 'HomeGrown App',
        description: 'We created an app using the MVC model.  This app allows users to track and get info on their plants.'
    },
    {
        id: 2,
        category: 'Javascript, PWA',
        link1: 'https://github.com/Haru2727/myBudget',
        link2: "https://budget-tracker27.herokuapp.com/",
        icon1: 'GH',
        icon2: 'App',
        image: port2,
        title: 'Online/Offline Bidget Tracker',
        description: 'This app used the PWA model and its use was to be able to work both online and offline.'
    },
    {
        id: 3,
        category: 'Javasript, ORM',
        link1: 'https://github.com/Haru2727/e-commerce-back-end',
        link2: "",
        icon1: 'GH',
        icon2: '',
        image: port3,
        title: 'E-commerce Backend',
        description: 'E-commerce is huge these days and this is a backend framework for a E-commerce store.'
    },
    {
        id: 4,
        category: 'Javascript, API',
        link1: 'https://github.com/Haru2727/Weather_Dashboard',
        link2: "https://haru2727.github.io/Weather_Dashboard/",
        icon1: 'GH',
        icon2: 'App',
        image: port4,
        title: 'Weather Dashboard',
        description: 'Search any city to find its upcoming forecast this can allow you to plan your day based off the weather.'
    },
    {
        id: 5,
        category: 'Javascript',
        link1: 'https://github.com/Haru2727/myFitnessTracker',
        link2: "https://working-on-my-fitness2.herokuapp.com/?id=607dca670057a80015d93e82",
        icon1: 'GH',
        icon2: 'App',
        image: port5,
        title: 'Fitness Tracker',
        description: 'Fitness trackers allow users to input their workouts in order to track their progress towards a health lifestyle.'
    },
    {
        id: 6,
        category: 'Javascript',
        link1: 'https://github.com/spicyJackrabbits/theFoodApp',
        link2: "https://spicyjackrabbits.github.io/theFoodApp/",
        icon1: 'GH',
        icon2: 'App',
        image: port6,
        title: 'Hungry v Hangry App',
        description: 'Based on your craving and hunger level you are given either the closest option to you or the five closest options.'
    },
]

export default portfolioData;