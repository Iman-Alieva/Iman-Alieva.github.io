import { formatDateDisplay, formatTimeDisplay, contactsList } from "./clientItemFunctional.js";
import { createAddContactModal } from "./createAddClientModal.js";
import { createDeleteClient } from "./deleteClientForm.js";

export const createClientTable = (obj) => {
    const clientContainer = document.createElement('tr');
    const clientId = document.createElement('span');
    const clientFullName = document.createElement('td');
    const clientName = document.createElement('span');
    const clientSurname = document.createElement('span');
    const clientLastName = document.createElement('span');
    const clientTask = document.createElement('p');
    const clientCreated = document.createElement('td');
    const createdDate1 = document.createElement('button');
    const createdDate2 = document.createElement('button');
    const createdDate3 = document.createElement('button');
    const createdDate4 = document.createElement('button');
    const createdDate5 = document.createElement('button');
    const createdDate6 = document.createElement('button');
    const createdDate7 = document.createElement('button');
    const createdDate8 = document.createElement('button');
    const createdDate9 = document.createElement('button');
    const createdDate10 = document.createElement('button');
    const createdDate11 = document.createElement('button');
    const createdDate12 = document.createElement('button');
    const createdDate13 = document.createElement('button');
    const createdDate14 = document.createElement('button');
    const createdDate15 = document.createElement('button');
    const createdDate16 = document.createElement('button');
    const createdDate17 = document.createElement('button');
    const createdDate18 = document.createElement('button');
    const createdDate19 = document.createElement('button');
    const createdDate20 = document.createElement('button');
    const createdDate21 = document.createElement('button');
    const createdDate22 = document.createElement('button');
    const createdDate23 = document.createElement('button');
    const createdDate24 = document.createElement('button');
    const createdDate25 = document.createElement('button');
    const createdDate26 = document.createElement('button');
    const createdDate27 = document.createElement('button');
    const createdDate28 = document.createElement('button');
    const createdDate29 = document.createElement('button');
    
    const clientActions = document.createElement('td');
    const clientEdit = document.createElement('button');
    const clientDelete = document.createElement('button');
    const deleteClientModal = createDeleteClient();

    clientName.textContent = obj.name;
    clientSurname.textContent = obj.surname;
    clientLastName.textContent = obj.lastName;
    clientTask.textContent = obj.task;
    clientEdit.innerHTML = `<svg class="client__actions-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.7" clip-path="url(#clip0_121_2103)"><path d="M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z" fill="#9873FF"/></g><defs><clipPath id="clip0_121_2103"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>    
    <svg class="client-load inactive" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_224_2787)"><path d="M3.00008 8.04008C3.00008 10.8236 5.2566 13.0801 8.04008 13.0801C10.8236 13.0801 13.0801 10.8236 13.0801 8.04008C13.0801 5.2566 10.8236 3.00008 8.04008 3.00008C7.38922 3.00008 6.7672 3.12342 6.196 3.34812" stroke="#9873FF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/></g><defs><clipPath id="clip0_224_2787"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
    Изменить`;
    clientDelete.innerHTML = `<svg class="client__actions-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.7" clip-path="url(#clip0_121_2128)"><path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#F06A4D"/></g><defs><clipPath id="clip0_121_2128"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>    
    Удалить`;
    

    clientContainer.classList.add('client__item');
    clientId.classList.add('client__id');
    clientFullName.classList.add('client__fullname');
    clientName.classList.add('client__name');
    clientSurname.classList.add('client__surname');
    clientLastName.classList.add('client__lastname');
    clientTask.classList.add('client__task');
    clientCreated.classList.add('client__created');
    createdDate1.classList.add('client__created-date');
    createdDate2.classList.add('client__created-date');
    createdDate3.classList.add('client__created-date');
    createdDate4.classList.add('client__created-date');
    createdDate5.classList.add('client__created-date');
    createdDate6.classList.add('client__created-date');
    createdDate7.classList.add('client__created-date');
    createdDate8.classList.add('client__created-date');
    createdDate9.classList.add('client__created-date');
    createdDate10.classList.add('client__created-date');
    createdDate11.classList.add('client__created-date');
    createdDate12.classList.add('client__created-date');
    createdDate13.classList.add('client__created-date');
    createdDate14.classList.add('client__created-date');
    createdDate15.classList.add('client__created-date');
    createdDate16.classList.add('client__created-date');
    createdDate17.classList.add('client__created-date');
    createdDate18.classList.add('client__created-date');
    createdDate19.classList.add('client__created-date');
    createdDate20.classList.add('client__created-date');
    createdDate21.classList.add('client__created-date');
    createdDate22.classList.add('client__created-date');
    createdDate23.classList.add('client__created-date');
    createdDate24.classList.add('client__created-date');
    createdDate25.classList.add('client__created-date');
    createdDate26.classList.add('client__created-date');
    createdDate27.classList.add('client__created-date');
    createdDate28.classList.add('client__created-date');
    createdDate29.classList.add('client__created-date');
    clientActions.classList.add('client__actions');
    clientDelete.classList.add('client__actions-btn', 'client__delete', 'btn-reset');
    clientEdit.classList.add('client__actions-btn', 'client__edit', 'btn-reset');

    clientId.textContent = obj.id.substr(obj.id.length - 6);
    clientContainer.id = obj.id.substr(obj.id.length - 6);
    clientFullName.append(clientName, clientSurname, clientLastName);
    clientCreated.append(createdDate1,createdDate2,createdDate3,createdDate4,createdDate5,createdDate6,createdDate7,createdDate8,createdDate9,createdDate10,createdDate11,createdDate12,createdDate13,createdDate14,createdDate15,createdDate16,createdDate17,createdDate18,createdDate19,createdDate20,createdDate21,createdDate22,createdDate23,createdDate24,createdDate25,createdDate26,createdDate27,createdDate28,createdDate29);
    clientActions.append(clientEdit, clientDelete);
    clientContainer.append(clientId, clientFullName, clientTask, clientCreated, clientActions);


    function deleteItem(id) {
        deleteClientModal.clientDeleteBtn.addEventListener('click', () => {
            deleteClientModal.clientDeleteModal.remove();
            clientContainer.remove();
            localStorage.setItem(
                'contacts',
                JSON.stringify(
                JSON.parse(localStorage.getItem('contacts') ?? '[]')
                .filter((item) => item.id !== id),
            )
        );
        });
    };

    clientDelete.addEventListener('click', () => {
        document.body.append(deleteClientModal.clientDeleteModal);
        deleteItem(obj.id);
    });

    let clients = [];
    clients = JSON.parse(localStorage.getItem('contacts'));
    for(let item of clients) {
        if(obj.id === item.id) {
            const datePointBtn = clientCreated.querySelectorAll('.client__created-date');
            [].forEach.call(datePointBtn, (displayBtn) => {
                console.log()
                if(clients.length > 0 && Array.from(datePointBtn).indexOf(displayBtn)) {
                    clients.find((item) => {
                    if (obj.id === item.id) {
                        if(item.dates[Array.from(datePointBtn).indexOf(displayBtn)] === true) {
                            displayBtn.classList.add('active');
                        }
                    }
                    })
                }

                displayBtn.addEventListener('click', (e) => {
                    const point = Array.from(datePointBtn).indexOf(e.target)
                    console.log(point)
                    let newClients = [];
                    newClients = JSON.parse(localStorage.getItem('contacts'));
                    newClients.find((item) => {
                        if (obj.id === item.id) {
                            if(item.dates[point] === false) {
                                item.dates[point] = true;
                                e.target.classList.add('active');
                            } else {
                                item.dates[point] = false;
                                e.target.classList.remove('active');
                            }
                        }
                    });

                    localStorage.setItem('contacts', JSON.stringify(newClients))
                });
            });
        };
    };

    clientEdit.addEventListener('click', (e) => {
        const getClient = async (btn) => {
            const localList = JSON.parse(localStorage.getItem('contacts'));
            for(let client of localList) {
                if(client.id === obj.id) {
                    document.body.append(createAddContactModal('modal-edit', 'modal-edit__form', client, clientContainer));
                };
            };
        };
        
        getClient(e.currentTarget);
    });

    return clientContainer;
};
