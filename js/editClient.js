import { contactsList } from "./clientItemFunctional.js";

export const editClient = (clientElement, data) => {
    clientElement.querySelector('.client__name').textContent = data.name;
    clientElement.querySelector('.client__surname').textContent = data.surname;
    clientElement.querySelector('.client__lastname').textContent = data.lastName;
    clientElement.querySelector('.client__task').textContent = data.task;
    console.log(data)
}
