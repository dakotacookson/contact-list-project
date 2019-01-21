// appends list of contacts to the dom by iterating over each data set and into the templetes to create contact components finds dom
// element to append things to with query selector then appaneds it
import Contacts from "./contactColection"
import contact from "./contact"
const data = {
    getdataset() {
        Contacts.GetAllContacts().then(response => {
            let BifDOMFrag = document.createDocumentFragment()
            //big container to be appoeneded to dom
            response.forEach(eachcontact => {
                let newdomthinigny = contact.MakeDOMBuilder(eachcontact)
                //small contaier to be filled
                BifDOMFrag.appendChild(newdomthinigny)
            });
            let output = document.querySelector(".output")
            output.appendChild(BifDOMFrag)
        })
    }
}
export default data
