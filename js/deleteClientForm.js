export const createDeleteClient = () => {
    const clientDeleteModal = document.createElement('div');
    const clientDeleteContent = document.createElement('div')
    const clientDeleteTitle = document.createElement('h3');
    const clientDeleteDescr = document.createElement('p');
    const clientDeleteBtn = document.createElement('button');
    const clientDeleteBack = document.createElement('button');
    const clientDeleteClose = document.createElement('button');
    const clientDeleteCloseSpan = document.createElement('span');

    clientDeleteTitle.textContent = 'Удалить клиента';
    clientDeleteDescr.textContent = 'Вы действительно хотите удалить данного клиента?';
    clientDeleteBtn.textContent = 'Удалить';
    clientDeleteBack.textContent = 'Отмена';

    clientDeleteModal.classList.add('modal', 'modal-delete', 'modal-active');
    clientDeleteContent.classList.add('modal__content', 'modal-delete__content', 'modal-active');
    clientDeleteTitle.classList.add('modal__title', 'modal-delete__title');
    clientDeleteDescr.classList.add('modal__descr');
    clientDeleteBtn.classList.add('modal-form__submit', 'btn-reset', 'btn-primary');
    clientDeleteClose.classList.add('modal__close', 'btn-reset');
    clientDeleteBack.classList.add('modal__back', 'btn-reset');
    clientDeleteCloseSpan.classList.add('modal__close-span');

    clientDeleteClose.addEventListener('click', () => {clientDeleteModal.remove();});
    clientDeleteBack.addEventListener('click', () => {clientDeleteModal.remove();});

    clientDeleteClose.append(clientDeleteCloseSpan);
    clientDeleteContent.append(clientDeleteTitle, clientDeleteDescr, clientDeleteBtn, clientDeleteBack, clientDeleteClose);
    clientDeleteModal.append(clientDeleteContent);

    return { clientDeleteModal, clientDeleteBtn };
};
