import Contacts from "./contactColection"
import data from "./contactList"
import contactFormedit from "./contactedit"
// contains a templates that creates an html componenet that can be apenmeded tot he dom by contcat list
const contact = {
    MakeDOMBuilder(contactobject) {
        let docfrag = document.createDocumentFragment()
        let sec = document.createElement("h1")
        sec.innerHTML += "Name:"
        sec.innerHTML += " "
        sec.innerHTML += contactobject.Name
        docfrag.appendChild(sec)
        let sec4 = document.createElement("h3")
        sec4.innerHTML += "Adress:"
        sec4.innerHTML += " "
        sec4.innerHTML += contactobject.Address
        docfrag.appendChild(sec4)
        let sec2 = document.createElement("h3")
        sec2.innerHTML += "PhoneNumber:"
        sec2.innerHTML += " "
        sec2.innerHTML += contactobject.PhoneNumber
        docfrag.appendChild(sec2)
        let sec3 = document.createElement("h3")
        sec3.innerHTML += "BestTimeToReach:"
        sec3.innerHTML += " "
        sec3.innerHTML += contactobject.BestTimeToReach
        docfrag.appendChild(sec3)
        let Delete = document.createElement("button");
        Delete.innerHTML = "Delete"
        docfrag.appendChild(Delete)
        Delete.addEventListener("click", () => {
            let DataId = contactobject.id
            Contacts.deletedata(DataId)
                .then(response => data.getdataset()
                )
        })
        let Edit = document.createElement("button");
        Edit.innerHTML = "Edit"
        docfrag.appendChild(Edit)
        Edit.addEventListener("click", () => {
            let articleId = contactobject.id
            let DataId = contactobject.id
            const Form2 = document.querySelector(".output2")
            Form2.innerHTML = " "
            Contacts.GetData(DataId)
                .then(response => contactFormedit.createAndAppendFormedit(response, articleId)
                )
        }
        )
        let emty = document.createElement("div");
        let hrtag = document.createElement("hr");
        emty.append(hrtag)
        docfrag.append(emty)
        return docfrag
    }
}
export default contact