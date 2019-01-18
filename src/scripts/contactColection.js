// this utilizes api fetch calls to be called by contacat list and contact forms
const Contacts = {
    GetAllContacts() {
       return fetch("http://localhost:8088/Data")
      .then(response => response.json())
    }
}
export default Contacts