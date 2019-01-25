// this utilizes api fetch calls to be called by contacat list and contact forms
const Contacts = {
  GetAllContacts(input) {
     return fetch("http://localhost:8088/Data")
    .then(response => response.json())
  },
  GetAllContactsPost(newContact) {
    // We want to return this fetch request so that at the point it is called, we can take advantage of the asynchronous nature of promises to wait for this to be done before getting the latest data and rerendering the DOM.
    return fetch("http://localhost:8088/Data", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newContact)
    })
  },
  GetData(DataId) {
      return fetch(`http://localhost:8088/Data/${DataId}`)
      .then(response => response.json())
    },
deletedata(DataId) {
  return fetch(`http://localhost:8088/Data/${DataId}`,{
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    }
  })
},
// In order to edit an existing food item, we need the id to identify which food item we want to edit and the new data we want to replace the existing data with. So this time, we have two arguments for the method.
PutData(DataId , editedcontacts) {
  return fetch(`http://localhost:8088/Data/${DataId}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body:JSON.stringify(editedcontacts)
  })
},
GetData2(Input) {
  return fetch(`http://localhost:8088/Data/?Name_like=${Input}`)
  .then(response => response.json())
},

}
export default Contacts

