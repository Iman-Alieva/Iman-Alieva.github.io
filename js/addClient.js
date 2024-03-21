import { createClientTable } from "./createClientsTable.js";

export const createClientSTR = (name, surname, lastName, task) => {
    const itemRandomId = Math.random() * 11225365;
    const id = itemRandomId.toFixed(2);
    let listArr = []
    if (localStorage.getItem('contacts') == null) {
        listArr = [];
      } else {
        listArr = JSON.parse(localStorage.getItem('contacts'))
    }

    const obj = {
        name: name,
        surname: surname,
        lastName: lastName,
        task: task,
        dates: {
            0: false,
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false,
            7: false,
            8: false,
            9: false,
            10: false,
            11: false,
            12: false,
            13: false,
            14: false,
            15: false,
            16: false,
            17: false,
            18: false,
            19: false,
            20: false,
            21: false,
            22: false,
            23: false,
            24: false,
            25: false,
            26: false,
            27: false,
            2: false,
        },
        id: id
    }
    listArr.push(obj)
    localStorage.setItem('contacts', JSON.stringify(listArr))
    document.querySelector('.clients__list').append(createClientTable(obj))

    return {
        name,
        surname,
        lastName
    }
}