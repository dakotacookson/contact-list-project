// appends list of contacts to the dom by iterating over each data set and into the templetes to create contact components finds dom
// element to append things to with query selector then appaneds it
import Contacts from "./contactColection"
import contact from "./contact"
const data = {
    getdataset() {
        Contacts.GetAllContacts().then(response => {
            let docfrag2 = document.createDocumentFragment()
            response.forEach(eachcontact => {
                let newdomthinigny = contact.MakeDOMBuilder(eachcontact)
                docfrag2.appendChild(newdomthinigny)

            });
            let output = document.querySelector(".output")
            output.appendChild(docfrag2)
        })
    }
}
export default data
