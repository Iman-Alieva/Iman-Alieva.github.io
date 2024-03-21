export const createAddContactItem = () => {
    const contactContainer = document.createElement('div');
    const contactSelect = document.createElement('div');
    const contactSelectBtn = document.createElement('input')
    const contactSelectArrow = document.createElement('span')
    const contactInfo = document.createElement('input');
    const contactDelete = document.createElement('div');
    const contactDeleteBtn = document.createElement('button');
    const contactDeleteTooltip = document.createElement('div')
    const contactList = document.createElement('ul');
    const contactEmail = document.createElement('li');
    const contactVk = document.createElement('li');
    const contactFacebook = document.createElement('li');
    const contactPhone = document.createElement('li');
    const contactOther = document.createElement('li');
    const contactEmailBtn = document.createElement('button');
    const contactVkBtn = document.createElement('button');
    const contactFacebookBtn = document.createElement('button');
    const contactPhoneBtn = document.createElement('button');
    const contactOtherBtn = document.createElement('button');

    contactSelectBtn.value = 'Телефон';
    contactSelectBtn.setAttribute('readonly', true);
    contactSelectBtn.name = 'type';
    contactInfo.placeholder = 'Введите данные контакта';
    contactInfo.name = 'value';
    contactEmailBtn.type = 'button';
    contactVkBtn.type = 'button';
    contactFacebookBtn.type = 'button';
    contactPhoneBtn.type = 'button';
    contactOtherBtn.type = 'button';
    contactEmailBtn.textContent = 'Email';
    contactVkBtn.textContent = 'Vk';
    contactFacebookBtn.textContent = 'Facebook';
    contactPhoneBtn.textContent = 'Телефон';
    contactOtherBtn.textContent = 'Другое';
    contactDeleteTooltip.textContent = 'Удалить контакт';
    contactDeleteBtn.type = 'button';

    contactDeleteBtn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_121_1495)">
    <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#B0B0B0"/>
    </g>
    <defs>
    <clipPath id="clip0_121_1495">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>    
    `;
    
    contactContainer.classList.add('modal-contact');
    contactSelect.classList.add('modal-contact__select');
    contactInfo.classList.add('modal-contact__input', 'modal-form__input');
    contactDelete.classList.add('modal-contact__delete')
    contactDeleteBtn.classList.add('modal-contact__delete-btn', 'btn-reset');
    contactSelectBtn.classList.add('modal-contact__select-btn', 'btn-reset');
    contactSelectArrow.classList.add('modal-contact__select-arrow')
    contactList.classList.add('modal-contact__list', 'list-reset');
    contactEmail.classList.add('modal-contact__item');
    contactVk.classList.add('modal-contact__item');
    contactFacebook.classList.add('modal-contact__item');
    contactPhone.classList.add('modal-contact__item', 'modal-contact__item--active');
    contactEmailBtn.classList.add('modal-contact__item-btn', 'btn-reset');
    contactVkBtn.classList.add('modal-contact__item-btn', 'btn-reset');
    contactFacebookBtn.classList.add('modal-contact__item-btn', 'btn-reset');
    contactPhoneBtn.classList.add('modal-contact__item-btn', 'btn-reset');
    contactDeleteTooltip.classList.add('modal-contact__delete-tooltip', 'tooltip');
    contactOther.classList.add('modal-contact__item');
    contactOtherBtn.classList.add('modal-contact__item-btn', 'btn-reset');

    contactDeleteBtn.append(contactDeleteTooltip);
    contactEmail.append(contactEmailBtn);
    contactVk.append(contactVkBtn);
    contactFacebook.append(contactFacebookBtn);
    contactPhone.append(contactPhoneBtn);
    contactOther.append(contactOtherBtn);
    contactDelete.append(contactDeleteBtn,contactDeleteTooltip);
    contactList.append(contactPhone,contactEmail,contactVk,contactFacebook, contactOther,);
    contactSelect.append(contactSelectBtn,contactSelectArrow,contactList,);
    contactContainer.append(contactSelect,contactInfo,contactDelete,);

    contactDeleteBtn.addEventListener('click', () => {
        let contactsItemMatch = document.querySelectorAll('.modal-contact');

        if(contactsItemMatch.length == 1) {
            document.querySelector('.modal-contact-container').classList.remove('modal-contact-container--full');
        };
        document.querySelector('.add-contacts-btn').classList.remove('add-contacts-btn--hidden');
        contactContainer.remove();
    });

    contactSelectBtn.addEventListener('click', () => {
        contactList.classList.toggle('modal-contact__list--active');
        contactSelectBtn.classList.toggle('modal-contact__select-btn--up');
    });

    const setType = (type) => {
        type.addEventListener('click', () => {
            contactSelectBtn.value = type.textContent;
            // contactSelectBtn.textContent = type.textContent;
            contactList.classList.remove('modal-contact__list--active');
            contactSelectBtn.classList.remove('modal-contact__select-btn--up');
        });
    };

    const typesArray = [contactEmail, contactVk, contactFacebook, contactPhone, contactOther];

    for (const type of typesArray) {
        setType(type);
    };
   
    return {
        contactContainer,
        contactSelect,
        contactSelectBtn,
        contactInfo,
        contactDeleteBtn
    };
};