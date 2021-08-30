import language from '../language/it.js'

//Button for the translate
let btn = document.querySelectorAll('.translate button');

btn.forEach(ele => {
    ele.addEventListener('click', async function(event){
        let language = event.target.id;
        try{

            const [module, lang] = await Promise.all([
                import(`../api/response-${language}.js`),
                import(`../language/${language}.js`)
            ]);
            //change language list
            changeLanguage('li p:first-child', module.default, 'request');
            //change language title
            changeLanguage('.title', lang.default, 'title');
            //set language button name
            eventButton(lang.default[0]);
        }
        catch(error){
            console.log(error);
        }
    });
});

//set default language button name
eventButton(language[0]);

/**
 * funzione che imposta la logica del cambio lingua
 */
function changeLanguage(selector, module, property = undefined){
    const ele = document.querySelectorAll(selector);
    ele.forEach((ele, index) => {
        if(property) ele.innerHTML = module[index][property];
        else ele.innerHTML = module;
    });
}

/**
 * Funzione che cambia la traduzione del pulsante
 * @param {Object} ele 
 */
 function eventButton(module){
    let attribute = document.querySelectorAll('button[data-show]');
    attribute.forEach((ele) => {
        //default button name
        buttonName(ele, ele.dataset.show, module);
        ele.addEventListener('click', function(event){
            let read = event.target.dataset.show;
            //verifichiamo se la risposta è stata aperta oppure no
            buttonName(event.target, read, module);
        });
    });
}

/**
 * Funzione che cambia in base al valore booleano il nome del pulsante
 */
function buttonName(btn, status, name = ''){
    if( status === 'false' ) btn.innerHTML = name['showSolution'];
    else btn.innerHTML = name['hideSolution'];
}