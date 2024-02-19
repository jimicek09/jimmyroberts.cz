window.onload = function() {

    let currentLanguage = "en"; // possible values: "en", "cs"
    const languageSelector = document.getElementById('languagePicker');

    if (window.localStorage.getItem("language") === "cs") {
        currentLanguage = "cs";
        languageSelector.value = "cs";
    } else {
        currentLanguage = "en";
        languageSelector.value = "en";
    }

    languageSelector.addEventListener('change', function(event) {
        if (event.target.value === "en") {
            window.localStorage.setItem("language", "en");
            currentLanguage = "en";
        } else {
            window.localStorage.setItem("language", "cs");
            currentLanguage = "cs";
        }
        translate()
    });

    const englishStrings = {
        TITLE_TAG_INDEX_PAGE: "Jimmy Roberts Portfolio",
        SELECT_LANGUAGE_LABEL: "Select language",
        SELECT_LANGUAGE_OPT_CZ: "Czech",
        SELECT_LANGUAGE_OPT_EN: "English",
        MENU_HOME: "Home",
        MENU_PROGRAMMING: "Programming",
        MENU_DESIGN: "Design",
        MENU_CREATIVE: "Creative",
        MENU_CONTACT: "Contact",
        TITLE_INDEX_PAGE: "Welcome to my portfolio",
        TEXT_HOME_P1: "Welcome to my portfolio. I am a 9th grade school student originally from Prague, living in a village called Lety, about 25Km south of Prague by the Berounka River in the Czech Republic.",
        TEXT_HOME_P2: "I am interested in programming, game design and web applications. I am currently learning HTML, CSS and JavaScript. I am also interested in creative activities such as pottery, woodwork and origami. I play the piano and thanks to my Czech mother and British father, I am bilingual in both Czech and English.",
        TEXT_HOME_P3: "I have created this website to showcase my projects and to share my contact information.",
        TEXT_HOME_P4: "Thanks for your interest, I hope you enjoy looking at my work.",
        TITLE_TAG_PROGRAMMING_PAGE: "Jimmy Roberts - Programming",
        TITLE_PROGRAMMING_PAGE: "Programming Project",
        TEXT_PROGRAMMING_P1: "Over the past five or six years I have been learning HTML, CSS and some basic Javascript with my Dad who works as a software engineer / architect. I have managed to create a few projects that I am proud of and I would like to share them with you here. I hope you enjoy them.",
        TEXT_NOUGHTS_AND_CROSSES: "This is a simple game of Noughts and Crosses (also known as Tic-Tac-Toe) that I created using HTML, CSS and Javascript.",
        TEXT_SPELLITIN: "This is a simple game of spelling words that I created using HTML, CSS and Javascript. It's also good for training touch typing.",
        LINK_TEXT_SOURCE_ON_GITHUB: "Source code on GitHub.com",
        SITE_NAME_JIMMYROBERTSCZ: "Personal Portfolio Website (this site)",
        TEXT_JIMMYROBERTSCZ: "This is my personal portfolio website that I created using HTML, CSS and Javascript.",
        TITLE_TAG_DESIGN_PAGE: "Jimmy Roberts - Design",
        TITLE_DESIGN_PAGE: "Design Projects",
        TEXT_DESIGN_P1: "I love video games, and I'm fascinated by the process of creating them. I've been learning about game design with some help from my Dad on the coding side. Here are a few projects that we created together.",
        TEXT_SPELLITIN_REACT: "This is a simple game of spelling words that we created together using React.js for UI and Zustand for state management. The game is quite addictive, and it's also good for training touch typing. Fill in the blanks to spell the word correctly. It's tougher than it looks!",
        TEXT_CAR: "A simple game of skill. Using the up and down arrows the player must navigate the car keeping its wheels on the road at all times. Beware though! ... the road gets narrower. Space bar pauses the game.",
        TEXT_TANK_1: "A very simple tank game designed by me and coded by my Dad. The tank moves up and down and the turret moves higher and lower. The player must shoot and hit the target quickly to pass on to the next level.",
        TEXT_TANK_2: "Controls",
        LI_MOVE_UP: "S - move tank up",
        LI_MOVE_DOWN: "X - move tank down",
        LI_TURRET_UP: "D - move turret up",
        LI_TURRET_DOWN: "C - move turret down",
        LI_FIRE: "Space - fire",







    }

    const czechStrings = {
        TITLE_TAG_INDEX_PAGE: "Jimmy Roberts Portfolio",
        SELECT_LANGUAGE_LABEL: "Vyberte jazyk",
        SELECT_LANGUAGE_OPT_CZ: "Čeština",
        SELECT_LANGUAGE_OPT_EN: "Angličtina",
        MENU_HOME: "Domů",
        MENU_PROGRAMMING: "Programování",
        MENU_DESIGN: "Design",
        MENU_CREATIVE: "Kreativní",
        MENU_CONTACT: "Kontakt",
        TITLE_INDEX_PAGE: "Vítejte v mém portfoliu",
        TEXT_HOME_P1: "Vítejte v mém portfoliu. Jsem žák 9. třídy původem z Prahy, žijící ve vesnici zvané Lety, asi 25 km jižně od Prahy u řeky Berounky v České republice.",
        TEXT_HOME_P2: "Zajímám se o programování, návrh her a webové aplikace. V současné době se učím HTML, CSS a JavaScript. Zajímám se také o kreativní aktivity, jako je keramika, truhlářství a origami. Hraji na klavír a díky mé české matce a britskému otci jsem dvojjazyčný jak v češtině, tak v angličtině.",
        TEXT_HOME_P3: "Vytvořil jsem tuto webovou stránku, abych představil své projekty a sdílel své kontaktní údaje.",
        TEXT_HOME_P4: "Děkuji za váš zájem, doufám, že se vám bude líbit mé práce.",
        TITLE_TAG_PROGRAMMING_PAGE: "Jimmy Roberts - Programování",
        TITLE_PROGRAMMING_PAGE: "Programovací projekt",
        TEXT_PROGRAMMING_P1: "Během posledních pěti nebo šesti let jsem se učil HTML, CSS a nějaký základní Javascript s mým otcem, který pracuje jako softwarový inženýr / architekt. Podařilo se mi vytvořit několik projektů, na které jsem hrdý, a rád bych se s vámi o ně podělil. Doufám, že se vám budou líbit.",
        TEXT_NOUGHTS_AND_CROSSES: "Jedná se o jednoduchou hru Noughts and Crosses (také známou jako Tic-Tac-Toe), kterou jsem vytvořil pomocí HTML, CSS a Javascript.",
        TEXT_SPELLITIN: "Jedná se o jednoduchou hru na psaní slov, kterou jsem vytvořil pomocí HTML, CSS a Javascript. Je také dobrá pro trénink psaní na dotykové klávesnici.",
        LINK_TEXT_SOURCE_ON_GITHUB: "Zdrojový kód na GitHub.com",
        SITE_NAME_JIMMYROBERTSCZ: "Osobní portfoliová webová stránka (tato stránka)",
        TEXT_JIMMYROBERTSCZ: "Toto je moje osobní portfoliová webová stránka, kterou jsem vytvořil pomocí HTML, CSS a Javascript.",
        TITLE_TAG_DESIGN_PAGE: "Jimmy Roberts - Design",
        TITLE_DESIGN_PAGE: "Design Projekty",
        TEXT_DESIGN_P1: "Miluji videohry a fascinuje mě proces jejich tvorby. Učím se o návrhu her s pomocí mého otce na straně kódování. Zde je několik projektů, které jsme společně vytvořili.",
        TEXT_SPELLITIN_REACT: "Jedná se o jednoduchou hru na psaní slov, kterou jsme společně vytvořili pomocí React.js pro UI a Zustand pro správu stavu. Hra je docela návyková a je také dobrá pro trénink psaní na dotykové klávesnici. Vyplňte mezery, abyste slovo napsali správně. Je to těžší, než to vypadá!",
        TEXT_CAR: "Jedná se o jednoduchou hru dovednosti. Pomocí šipek nahoru a dolů musí hráč navigovat autem tak, aby jeho kola byla po celou dobu na silnici. Pozor! ... silnice se zužuje. Mezerník pozastavuje hru.",
        TEXT_TANK_1: "Velmi jednoduchá tanková hra navržená mnou a naprogramovaná mým otcem. Tank se pohybuje nahoru a dolů a věž se pohybuje výše a níže. Hráč musí rychle střílet a zasáhnout cíl, aby přešel na další úroveň.",
        TEXT_TANK_2: "Ovládání",
        LI_MOVE_UP: "S - pohyb tanku nahoru",
        LI_MOVE_DOWN: "X - pohyb tanku dolů",
        LI_TURRET_UP: "D - pohyb věže nahoru",
        LI_TURRET_DOWN: "C - pohyb věže dolů",
        LI_FIRE: "Mezerník - střelba",









    }

    function setLanguage(language) {

    }

    function translate() {

        const translatables = document.querySelectorAll('[data-tk]');
        console.log(translatables)

        for (let i = 0; i < translatables.length; i++) {
            const translationKey = translatables[i].getAttribute('data-tk');
            // console.log(translationKey)
            // console.log(englishStrings[translationKey]);

            if (currentLanguage === "en") {
                translatables[i].innerText = englishStrings[translationKey];
            } else {
                translatables[i].innerText = czechStrings[translationKey];
            }
        }

        for (const [key, value] of Object.entries(englishStrings)) {

            // console.log(`${key}: ${value}`);
        }
    }
    translate()
}
