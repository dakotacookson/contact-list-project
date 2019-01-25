import Contacts from "./contactColection"
import data from "./contactList";
//appends the form to the dom
//on button click sends user input to database

const contactFormedit = {
    createAndAppendFormedit(response , articleId)  {
        // Creating the HTML form
        // Creates header on top of the form page
        let formHeader = document.createElement("h2");
        formHeader.textContent = "Save Edit"
        // Creates the fieldset for user input
        let contactNameField = document.createElement("fieldset");
        // Creates the input text fields for user input
        let contactNameLabel = document.createElement("label");
        contactNameLabel.setAttribute("for", "contactName");
        contactNameLabel.textContent = "Name"
        let contactNameInput = document.createElement("input");
        contactNameInput.setAttribute("id", "contactName2");
        contactNameInput.setAttribute("name", "contactName")
        contactNameInput.defaultValue = response.Name
        // Appends the user fieldset and input boxes to the DOM
        contactNameField.appendChild(contactNameLabel);
        contactNameField.appendChild(contactNameInput);

        let contactAddressField = document.createElement("fieldset");

        let contactAddressLabel = document.createElement("label");
        contactAddressLabel.textContent = "Address"
        contactAddressLabel.setAttribute("for", "contactAddress");
        let contactAddressInput = document.createElement("input");
        contactAddressInput.setAttribute("id", "contactAddress2");
        contactAddressInput.setAttribute("name", "contactAddress");
        contactAddressInput.defaultValue = response.Address

        contactAddressField.appendChild(contactAddressLabel);
        contactAddressField.appendChild(contactAddressInput);

        let contactNumberField = document.createElement("fieldset");

        let contactNumberLabel = document.createElement("label");
        contactNumberLabel.textContent = "Phone Number"
        contactNumberLabel.setAttribute("for", "contactNumber");
        let contactNumberInput = document.createElement("input");
        contactNumberInput.setAttribute("id", "contactNumber2");
        contactNumberInput.setAttribute("name", "contactNumber");
        contactNumberInput.defaultValue = response.PhoneNumber

        contactNumberField.appendChild(contactNumberLabel);
        contactNumberField.appendChild(contactNumberInput);

        let contactSaveButton = document.createElement("button");
        contactSaveButton.textContent = "Save Edit"
        contactSaveButton.setAttribute("class", "contactSave")

        contactSaveButton.addEventListener("click", this.handleNewContact)
        console.log(contactSaveButton);

        let contactTimeField = document.createElement("fieldset");

        let contactTimeLabel = document.createElement("label");
        contactTimeLabel.textContent = "Time"
        contactTimeLabel.setAttribute("for", "contactTime");
        let contacTimeInput = document.createElement("input");
        contacTimeInput.setAttribute("id", "contactTime2");
        contacTimeInput.setAttribute("name", "contactTime");
        contacTimeInput.defaultValue = response.BestTimeToReach

        contactTimeField.appendChild(contactTimeLabel);
        contactTimeField.appendChild(contacTimeInput);

        contactSaveButton.addEventListener("click", () => {
        let editedcontacts = {
            Name: contactNameInput.value,
            Address: contactAddressInput.value,
            PhoneNumber: contactNumberInput.value,
            BestTimeToReach: contacTimeInput.value
          }
          Contacts.PutData(response.id, editedcontacts)
          .then(response => {
            Contacts.GetAllContacts(articleId)
            data.getdataset()
          })})
let contactItemArticle = document.querySelector(".form")
while (contactItemArticle.firstChild) {
    contactItemArticle.removeChild(contactItemArticle.firstChild);
}
contactItemArticle.appendChild(contactNameField)
contactItemArticle.appendChild(contactAddressField)
contactItemArticle.appendChild(contactNumberField)
contactItemArticle.appendChild(contactTimeField)
contactItemArticle.appendChild(contactSaveButton)
}}
export default contactFormedit
