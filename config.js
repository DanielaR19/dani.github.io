/* ----- Config template ----- */
const BASEURL = window.location.origin;

let assetsArrayJs = [
    {
        name: 'Custom JS',
        version: '?v=1.3',
        urlLocal: '/sessions-theme-2024/assets/js/main.js',
        urlDevl: 'https://documentacionebc.s3.amazonaws.com/academia/temas/sessions-theme-2024/js/main.js',
        urlQa: 'https://danielar19.github.io/dani.github.io/main.js',
        urlProd: 'https://documentacionebc.s3.amazonaws.com/academia/temas/sessions-theme-2024/js/main.js'
    }
];

let assetsArrayCss = [
    {
        name: 'Custom CSS',
        version: '?v=1.3',
        urlLocal: '/sessions-theme-2024/assets/css/style.css',
        urlDevl: 'https://documentacionebc.s3.amazonaws.com/academia/temas/sessions-theme-2024/css/style.css',
        urlQa: 'https://documentacionebc.s3.amazonaws.com/academia/temas/sessions-theme-2024/qa/style.css',
        urlProd: 'https://documentacionebc.s3.amazonaws.com/academia/temas/sessions-theme-2024/css/style.css'
    }
];

/* ----- Add assets -----*/
if (assetsArrayJs) addScripts(assetsArrayJs);
if (assetsArrayCss) addStyles(assetsArrayCss);

function addScripts(assetsArray) {
    assetsArray.forEach(element => {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = false; // Is scripts load in order

        if (BASEURL == 'http://127.0.0.1:5500') { // Localhost
            if (element.urlLocal) script.src = element.urlLocal + element.version;

        } else if (BASEURL == 'https://mdev.ebc.edu.mx') { // Moodle Devl
            if (element.urlDevl) script.src = element.urlDevl + element.version;

        } else if (BASEURL == 'https://moodleqa.ebc.edu.mx') { // Moodle QA
            if (element.urlQa) script.src = element.urlQa + element.version;

        } else if (BASEURL == 'https://moodlepro.ebc.edu.mx') { // Moodle Prod
            if (element.urlProd) script.src = element.urlProd + element.version;
        }

        if (script.src) document.body.appendChild(script);
    });
}

function addStyles(assetsArray) {
    assetsArray.forEach(element => {
        let linkStyle = document.createElement('link');

        linkStyle.rel = 'stylesheet';
        linkStyle.type = 'text/css';

        if (BASEURL == 'http://127.0.0.1:5500') { // Localhost
            if (element.urlLocal) linkStyle.href = element.urlLocal + element.version;

        } else if (BASEURL == 'https://mdev.ebc.edu.mx') { // Moodle Devl
            if (element.urlDevl) linkStyle.href = element.urlDevl + element.version;

        } else if (BASEURL == 'https://moodleqa.ebc.edu.mx') { // Moodle QA
            if (element.urlQa) linkStyle.href = element.urlQa + element.version;

        } else if (BASEURL == 'https://moodlepro.ebc.edu.mx') { // Moodle Prod
            if (element.urlProd) linkStyle.href = element.urlProd + element.version;
        }

        if (linkStyle.href) document.write(linkStyle.outerHTML);
    });
}