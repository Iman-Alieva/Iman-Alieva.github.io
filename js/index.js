'use strict';
import { createAddContactModal } from "./createAddClientModal.js";
import { createClientTable } from "./createClientsTable.js";

const app = async () => {
    const addUserBtn = document.querySelector('.add-client-btn');
    addUserBtn.addEventListener('click', () => {
        document.body.append(createAddContactModal('modal-add', 'modal-add__form'));
    });

    let clients = [];
    if(JSON.parse(localStorage.getItem('contacts'))) {
        clients = JSON.parse(localStorage.getItem('contacts'))
        clients.map((item) => document.querySelector('.clients__list').append(createClientTable(item)))
    }

    // if(document.querySelectorAll('.client__item').length === clients.length) {
    //     const datePointBtn = document.querySelectorAll('.client__created');
    //     [].forEach.call(datePointBtn, (displayBtn) => {
    //         displayBtn.addEventListener('click', (e) => {
    //             console.log(e.target)
    //             e.target.classList.toggle('active')
    //         })
    //     });
    // }

};

app();