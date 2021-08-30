import response from '../api/response-it.js';

//Function wrapper
(function showList(f){
    let ol, li, button, p;
    // element list document
    ol = document.getElementById('list');
    for(let i = 0; i < response.length; i++){
        //Create element for DOM
        li = document.createElement('li');
        p = document.createElement('p');
        button = document.createElement('button');
        //Create attribute in the button
        button.setAttribute('data-show', false);
        //Insert value in the tag html
        p.innerHTML = response[i].request;
        //Insert element in the DOM
        li.append(p);
        li.append(button);
        ol.append(li);
    }

    // invoche function eventButton
    f();

}(eventButton));

/**
 * Funzione che mostra la risposta facendo click sul pulsante
 * @param {Object} ele 
 */
function eventButton(){
    let attribute = document.querySelectorAll('button[data-show]');
    attribute.forEach((ele, key) => {
        ele.addEventListener('click', function(event){
            let read = event.target.dataset.show;
            //verifichiamo se la risposta è stata aperta oppure no
            if(read !== 'true'){
                read = 'true';
                event.target.setAttribute('data-show', read);
                showReply(event.target, key);
            } else {
                read = 'false';
                event.target.setAttribute('data-show', read);
                deleteReply(event.target);
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