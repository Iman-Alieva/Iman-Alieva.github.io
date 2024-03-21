import { createClientTable } from "./createClientsTable.js";

export const sort = async (data) => {
    const clientDataArr = [];
    const dataArr = [];
    const idArr = [];
    const clientCreatedAt = [];
    const clientUpdatedAt = [];
    const clientList = document.querySelector('.client-table-list');
    const displayBtns = document.querySelectorAll('.display__btn');
    for(const client of data) {
        clientDataArr.push(client);
        clientCreatedAt.push(new Date(client.createdAt).getTime());
        clientUpdatedAt.push(new Date(client.updatedAt).getTime());
        dataArr.push(createClientTable(client));
    };

    for(let client of dataArr) {
        idArr.push(Number(client.id));
    };

    if(idArr.length === data.length) {
        idArr.sort((a, b) => a - b);
    };

    function sortList(btnType, btnDirection) {
        document.querySelector('.js-fullname-sort-text').textContent = btnType !== 'fullname' ? '' : document.querySelector('.js-fullname-sort-text').textContent;
        [].forEach.call(displayBtns, (displayBtn) => {
            if(btnType !== displayBtn.getAttribute('data-type')) {
                displayBtn.classList.replace('display__btn--up', 'display__btn--down');
            }
        });

        btnDirection[3] == 'display__btn--up' ? btnDirection.replace('display__btn--up', 'display__btn--down') : btnDirection.replace('display__btn--down', 'display__btn--up');
        let sortedClients;

        switch(true) {
            case btnType === 'id' :
                return sortedClients = btnDirection[3] == 'display__btn--up' ? idArr.sort((a, b) => a - b) : idArr.sort((a, b) => b - a);
            case btnType === 'createdAt' :
                return sortedClients = btnDirection[3] == 'display__btn--up' ? clientCreatedAt.sort((a, b) => a - b) : clientCreatedAt.sort((a, b) => b - a);
            case btnType === 'updatedAt' :
                return sortedClients = btnDirection[3] == 'display__btn--up' ? clientUpdatedAt.sort((a, b) => a - b) : clientUpdatedAt.sort((a, b) => b - a);
        };
    };

    function createRow(btnType, btnDirection) {
        const clients = document.querySelectorAll('.client__item');
        let sortResult = sortList(btnType, btnDirection);

        [].forEach.call(clients, (client) => {
            clientList.removeChild(client);
            if(btnType === 'fullname') {
                let nameSortedClients = [];
                [].forEach.call(clients, (client) => {
                    for(let clientTd of client.querySelectorAll('.client__fullname')) {
                        nameSortedClients.push(clientTd.textContent);
                        sortResult = btnDirection[3] == 'display__btn--up' ? nameSortedClients.sort() : nameSortedClients.sort().reverse();
                        document.querySelector('.js-fullname-sort-text').textContent = btnDirection[3] == 'display__btn--up' ? "А-Я" : "Я-А";
                    };
                });
            };
        });

        [].forEach.call(sortResult, (sorted) => {
            [].forEach.call(clientDataArr, (clientData) => {
                if(clientData.id.substr(clientData.id.length - 6) == sorted) {
                    clientList.append(createClientTable(clientData));
                };
                if(btnType === 'createdAt' || btnType === 'updatedAt') {
                    if(new Date(clientData[btnType]).getTime() === sorted) {
                        clientList.append(createClientTable(clientData));
                    };
                };
            });
            [].forEach.call(clients, (client) => {
                    for(let clientTd of client.querySelectorAll('.client__fullname')) { {
                        if(clientTd.textContent === sorted) {
                            clientList.append(client);
                        };
                    };
                };
            });
        });
    };

    [].forEach.call(displayBtns, (displayBtn) => {
        if(displayBtn.getAttribute('data-type')) {
            displayBtn.addEventListener('click', (e) => {
                createRow(e.currentTarget.getAttribute('data-type'), e.currentTarget.classList);
            });
        };
    });
};
