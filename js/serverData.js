
// const SERVER_URL = `http://localhost:3000/api/clients`;

// export const getClientsList = async () => {
//     const response = await fetch(`${SERVER_URL}`);
//     const res = response.json();

//    return res;
// };

// export const createClientObj = async (clientObj) => {
//     const response = await fetch(`${SERVER_URL}`, {
//         method: 'POST',
//         body: JSON.stringify(clientObj)
//     });

//     const result = await response.json();
//     return result;
// };

// export const deleteClientObj = async (id) => {
//     const response = await fetch(`${SERVER_URL}/${id}`, {
//         method: 'DELETE',
//     });

//     console.log(response)
//     return response
// };

// export const changeClient = async (client, id) => {
//     const response = await fetch(`${SERVER_URL}/${id}`, {
//         method: 'PATCH',
//         body: JSON.stringify(client),
//     });

//     return client;
// };

// export const findClient = async (value) => {
//     const response = await fetch(`${SERVER_URL}?search=${value}`, {
//         method: 'GET'
//     });

//     const result = await response.json();

//     return result;
// }