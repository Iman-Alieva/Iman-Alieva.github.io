import { createAddContactItem } from "./createContactItem.js";
import { createDeleteClient } from "./deleteClientForm.js";
import { createClientSTR } from "./addClient.js";
import { createClientTable } from "./createClientsTable.js";
import { editClient } from "./editClient.js";

export const createAddContactModal = (modalName, modalFormName, data, clientElement) => {
    const modalAdd = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalTitle = document.createElement('h2');
    const modalForm = document.createElement('form');
    const modalInputName = document.createElement('input');
    const modalLabelName = document.createElement('label');
    const modalInputTask = document.createElement('input');
    const modalLabelTask = document.createElement('label');
    const modalInputSurname = document.createElement('input');
    const modalLabelSurname = document.createElement('label');
    const modalInputLastname = document.createElement('input');
    const modalLabelLastname = document.createElement('label');
    const modalAddContact = document.createElement('button');
    const modalsubmit = document.createElement('button');
    const modalBackBtn = document.createElement('button');
    const modalCloseBtn = document.createElement('button');
    const modalCloseBtnSpan = document.createElement('span');
    const labelNameAsterisk = document.createElement('span');
    const labelSurnameAsterisk = document.createElement('span');
    const modalInputNameWrap = document.createElement('div');
    const modalInputSurnameWrap = document.createElement('div');
    const modalInputLastnameWrap = document.createElement('div');
    const modalInputTaskWrap = document.createElement('div');
    const modalContactContainer = document.createElement('div');
    const modalContactContent = document.createElement('div');
    const errorBlock = document.createElement('p');

    modalTitle.textContent = ``;
    modalInputName.placeholder = `Имя`;
    modalInputSurname.placeholder = `Фамилия`;
    modalInputLastname.placeholder = `Отчество`;
    modalInputTask.placeholder = `Задача`;
    modalInputName.required = true
    modalInputSurname.required = true
    modalInputTask.required = true
    modalsubmit.innerHTML = `<svg class="client-load client-load--margin inactive" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_224_2787)"><path d="M3.00008 8.04008C3.00008 10.8236 5.2566 13.0801 8.04008 13.0801C10.8236 13.0801 13.0801 10.8236 13.0801 8.04008C13.0801 5.2566 10.8236 3.00008 8.04008 3.00008C7.38922 3.00008 6.7672 3.12342 6.196 3.34812" stroke="#B89EFF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/></g><defs><clipPath id="clip0_224_2787"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
    Сохранить`;
    modalsubmit.type= `submit`;
    modalBackBtn.textContent = `Отмена`;
    modalLabelName.textContent = 'Имя';
    modalLabelSurname.textContent = 'Фамилия';
    modalLabelLastname.textContent = 'Отчество';
    modalLabelTask.textContent = 'Задача';
    modalLabelName.for = 'clientName';
    modalLabelSurname.for = 'clientSurname';
    modalLabelLastname.for = 'clientLastName';
    modalInputName.id = 'name';
    modalInputSurname.id = 'surname';
    modalInputLastname.id = 'lastName';
    modalInputTask.id = 'task';
    modalInputName.name = 'name';
    modalInputSurname.name = 'surname';
    modalInputLastname.name = 'lastName';
    modalInputTask.name = 'task'
    labelNameAsterisk.textContent = '*';
    labelSurnameAsterisk.textContent = '*';
    modalAddContact.innerHTML = `
    <span class="add-contacts-btn__icon"></span>
    Добавить контакт
    `;
    modalAddContact.type= `button`;

    modalAdd.classList.add('modal', modalName, 'modal-active');
    modalContent.classList.add('modal__content', 'modal-active');
    modalTitle.classList.add('modal__title');
    modalForm.classList.add('modal__form', modalFormName, 'modal-form');
    modalInputName.classList.add('modal-form__input');
    modalInputSurname.classList.add('modal-form__input');
    modalInputLastname.classList.add('modal-form__input');
    modalInputTask.classList.add('modal-form__input');
    modalAddContact.classList.add('modal__add-contacts', 'add-contacts-btn', 'btn-reset');
    modalsubmit.classList.add('modal-form__submit', 'btn-reset', 'btn-primary');
    modalCloseBtn.classList.add('modal__close', 'btn-reset');
    modalBackBtn.classList.add('modal__back', 'btn-reset');
    modalCloseBtnSpan.classList.add('modal__close-span');
    modalLabelName.classList.add('modal-form__label');
    modalLabelSurname.classList.add('modal-form__label');
    modalLabelLastname.classList.add('modal-form__label');
    modalLabelTask.classList.add('modal-form__label');
    labelNameAsterisk.classList.add('modal-form__label-asterisk');
    labelSurnameAsterisk.classList.add('modal-form__label-asterisk');
    modalInputNameWrap.classList.add('modal-form__inwrap');
    modalInputSurnameWrap.classList.add('modal-form__inwrap');
    modalInputLastnameWrap.classList.add('modal-form__inwrap');
    modalInputTaskWrap.classList.add('modal-form__inwrap');
    modalContactContainer.classList.add('modal-contact-container');
    modalContactContent.classList.add('modal-contact-content');
    errorBlock.classList.add('modal-form__error');

    // modalContactContainer.append(modalContactContent);
    // modalContactContainer.append(modalAddContact);

    modalInputSurnameWrap.append(modalInputSurname,modalLabelSurname);
    modalInputNameWrap.append(modalInputName,modalLabelName);
    modalInputLastnameWrap.append(modalInputLastname,modalLabelLastname);
    modalLabelName.append(labelNameAsterisk);
    modalLabelSurname.append(labelSurnameAsterisk);
    modalInputTaskWrap.append(modalInputTask, modalLabelTask)
    modalForm.append(modalInputSurnameWrap,modalInputNameWrap,modalInputLastnameWrap, modalInputTaskWrap, errorBlock, modalsubmit,);

    modalCloseBtn.append(modalCloseBtnSpan);
    modalContent.append(modalTitle,modalForm,modalCloseBtn,modalBackBtn,);

    modalAdd.append(modalContent);

    if(modalAdd.classList.contains('modal-edit')) {
        const modalId = document.createElement('span');
        modalId.classList.add('modal__title-span');

        modalInputName.value = `${data.name}`;
        modalInputSurname.value = `${data.surname}`;
        modalInputLastname.value = `${data.lastName}`;
        modalInputTask.value = `${data.task}`
        modalTitle.innerHTML = `Изменить данные`;
        modalTitle.append(modalId);

        if(modalForm.classList.contains('modal-edit__form')) {
            modalForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const arr = JSON.parse(localStorage.getItem('contacts'))
                const obj = {
                    name: modalInputName.value,
                    surname: modalInputSurname.value,
                    lastName: modalInputLastname.value,
                    task: modalInputTask.value,
                    id: data.id
                }
                Object.assign(arr.find((item )=> item.id === obj.id), obj)
                localStorage.setItem('contacts', JSON.stringify(arr))
                editClient(clientElement, Object.assign(arr.find((item )=> item.id === obj.id), obj))
                modalAdd.remove();
            });
        };

        modalBackBtn.addEventListener('click', () => {
            modalAdd.remove();
            document.body.append(deleteClientModal.clientDeleteModal);
            deleteItem(data.id);
        });
    };

    if(modalForm.classList.contains('modal-add__form')) {
        modalBackBtn.addEventListener('click', () => {
            modalAdd.remove();
        });

        modalForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            createClientSTR(modalInputName.value, modalInputSurname.value, modalInputLastname.value, modalInputTask.value)
            modalAdd.remove();
        });
    };
    
    modalAddContact.addEventListener('click', () => {
        let contactsItemMatch = document.querySelectorAll('.modal-contact');
        modalContactContainer.classList.add('modal-contact-container--full');
        
        if(contactsItemMatch.length < 9) {
            const contactItem = createAddContactItem();
            modalContactContent.append(contactItem.contactContainer);
        } else {
            const contactItem = createAddContactItem();
            modalContactContent.append(contactItem.contactContainer);
            modalAddContact.classList.add('add-contacts-btn--hidden');
        };
    });

    modalCloseBtn.addEventListener('click', () => {
        modalAdd.remove();
    });
    return modalAdd;
};