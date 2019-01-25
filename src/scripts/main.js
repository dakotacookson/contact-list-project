// the meeting point for all working code
import contactForm from "./ContactForm";
import data from "./contactList";
import Contacts from "./contactColection"
contactForm.createAndAppendForm()
data.getdataset()
let formArticle = document.querySelector(".output");
let Search3 = document.createElement("button");
Search3.textContent = "Search"
formArticle.append(Search3)
Search3.addEventListener("click", () => {
    let Input = document.getElementById("contactSearch").value
    console.log(Input)
    Contacts.GetData2(Input)
    data.getdataset2(Input)
    if (document.getElementById("contactSearch").value != " "){
        document.getElementById("contactSearch").value = " "
    }
})