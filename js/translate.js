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
        }
        catch(error){
            console.log(error);
        }
    });
});

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