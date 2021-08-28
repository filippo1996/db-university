import response from '../api/response.js';

//Function wrapper
(function showList(f){
    let ol, li, button;
    // element list document
    ol = document.getElementById('list');
    for(let i = 0; i < response.length; i++){
        //Create element for DOM
        li = document.createElement('li');
        button = document.createElement('button');
        //Create attribute in the button
        button.setAttribute('data-show', 'reply');
        //Insert name in the tag button
        buttonName(button);
        //Insert value in the tag html
        li.innerHTML = response[i].request;
        //Insert element in the DOM
        li.append(button);
        ol.append(li);
    }

    // invoche function eventButton
    f();

}(eventButton));

/**
 * Funzione che cambia in base al valore booleano il nome del pulsante
 */
function buttonName(btn, bool = false){
    if( bool ) btn.innerHTML = 'Nascondi Soluzione';
    else btn.innerHTML = 'Mostra Soluzione';
}


/**
 * Funzione che mostra la risposta facendo click sul pulsante
 * @param {Object} ele 
 */
function eventButton(){
    let attribute = document.querySelectorAll('button[data-show="reply"]');
    attribute.forEach((ele, key) => {
        let read = false;
        ele.addEventListener('click', function(event){
            //verifichiamo se la risposta è stata aperta oppure no
            if(read !== true){
                read = true;
                showReply(event.target, key);
                buttonName(event.target, read);
            } else {
                read = false;
                deleteReply(event.target);
                buttonName(event.target, read);
            }
        });
    });

    /**
     * Funzione che mostra la risposta nel DOM
     */
    function showReply(btn, index){
        // eliminiamo l'elemento della risposta se è già presente
        deleteReply(btn);
        let li = btn.parentElement;
        let p = document.createElement('p');
        p.className = 'response';
        p.innerHTML = response[index].reply;
        li.append(p);
    }

    /**
     * Funzione che cancella la risposta
     */
    function deleteReply(btn){
        let li = btn.parentElement;
        let p = li.querySelector('.response');
        if(p === null) {
            return false;
        }
        p.remove();
    }
}