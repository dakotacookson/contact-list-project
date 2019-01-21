import Contacts from "./contactColection"
import DataId from "./contact"
const contactFormedit = {
    createAndAppendFormedit(DataId, response)  {
        // Creating the HTML form
        // Creates header on top of the form page
        let formHeader = document.createElement("h2");
        formHeader.textContent = "Add a New Contact"
        // Creates the fieldset for user input
        let contactNameField = document.createElement("fieldset");
        // Creates the input text fields for user input
        let contactNameLabel = document.createElement("label");
        contactNameLabel.setAttribute("for", "contactName");
        contactNameLabel.textContent = "Name"
        let contactNameInput = document.createElement("input");
        contactNameInput.setAttribute("id", "contactName2");
        contactNameInput.setAttribute("name", "contactName")
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

        contactAddressField.appendChild(contactAddressLabel);
        contactAddressField.appendChild(contactAddressInput);

        let contactNumberField = document.createElement("fieldset");

        let contactNumberLabel = document.createElement("label");
        contactNumberLabel.textContent = "Phone Number"
        contactNumberLabel.setAttribute("for", "contactNumber");
        let contactNumberInput = document.createElement("input");
        contactNumberInput.setAttribute("id", "contactNumber2");
        contactNumberInput.setAttribute("name", "contactNumber");

        contactNumberField.appendChild(contactNumberLabel);
        contactNumberField.appendChild(contactNumberInput);

        let contactSaveButton = document.createElement("button");
        contactSaveButton.textContent = "Save Edit"
        contactSaveButton.setAttribute("class", "contactSave2")

        contactSaveButton.addEventListener("click", this.handleNewContact)
        console.log(contactSaveButton);

        let contactTimeField = document.createElement("fieldset");

        let contactTimeLabel = document.createElement("label");
        contactTimeLabel.textContent = "Time"
        contactTimeLabel.setAttribute("for", "contactTime");
        let contacTimeInput = document.createElement("input");
        contacTimeInput.setAttribute("id", "contactTime2");
        contacTimeInput.setAttribute("name", "contactTime");

        contactTimeField.appendChild(contactTimeLabel);
        contactTimeField.appendChild(contacTimeInput);


        let contactFormFragment = document.createDocumentFragment()
        contactFormFragment.appendChild(formHeader);
        contactFormFragment.appendChild(contactNameField);
        contactFormFragment.appendChild(contactAddressField);
        contactFormFragment.appendChild(contactNumberField);
        contactFormFragment.appendChild(contactTimeField);
        contactFormFragment.appendChild(contactSaveButton);
        let formArticle = document.querySelector(".form");
        formArticle.appendChild(contactFormFragment)

    },
    handleNewContact() {
        let inputContactName = document.getElementById("contactName2").value
        let inputContactAddress = document.getElementById("contactAddress2").value;
        let inputContactNumber = document.getElementById("contactNumber2").value;
        let InputBestTimeToReach = document.getElementById("contactTime2").value;

        let newContact2 = {
            Name: inputContactName,
            PhoneNumber: inputContactNumber,
            Address: inputContactAddress,
            BestTimeToReach: InputBestTimeToReach
        }
        console.log(newContact2)
        // contact.makeDOMcomponentFromObject(contactObject)
        Contacts.PutData(DataId)
    }
}

export default contactFormedit