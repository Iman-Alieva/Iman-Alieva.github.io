import { findClient, } from "./serverData.js";
import { createClientTable } from "./createClientsTable.js";

const searchInp = document.querySelector('.header__search');

const checkcClientList = async (searchValue) => {
    const clientResponse = await findClient(searchValue);
    const clientList = document.querySelector('.clients__list');
    const clientSearchedList = document.querySelector('.searched-table-list');

    function cleanSearchedList() {
        clientSearchedList.querySelectorAll('.client__item').forEach(client => {
            clientSearchedList.removeChild(client);
        });
    };

    if(searchValue !== '') {
        clientList.classList.add('block');
        document.querySelector('.add-client-btn').style.display = 'none';
        clientSearchedList.classList.add('active');

        cleanSearchedList()

        clientResponse.forEach(client => {
            clientSearchedList.append(createClientTable(client));
        });
    } else {
        clientList.classList.remove('block');
        document.querySelector('.add-client-btn').style.display = 'inline-block';
        clientSearchedList.classList.remove('active');
        cleanSearchedList();
    };
};

searchInp.addEventListener('input', e => {
    checkcClientList(e.target.value.trim());
});