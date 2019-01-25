        import Contacts from "./contactColection"
        import data from "./contactList"
        // contains a templates that creates an html componenet that can be apenmeded tot he dom by contcat list
        const contact = {
            MakeDOMBuilder(contactobject) {
                let docfrag = document.createDocumentFragment()
                let Search3 = document.createElement("button");
                Search3.textContent = "Search"
                docfrag.append(Search3)
                Search3.addEventListener("click", () => {
                    let Input = document.getElementById("contactSearch").value
                    console.log(Input)
                        Contacts.GetData2(Input)
                        data.getdataset2(Input)
                })
        let sec = document.createElement("h1")
        sec.textContent += "Name:"
        sec.textContent += " "
        sec.textContent += contactobject.Name
        docfrag.appendChild(sec)
        let sec4 = document.createElement("h3")
        sec4.textContent += "Adress:"
        sec4.textContent += " "
        sec4.textContent += contactobject.Address
        docfrag.appendChild(sec4)
        let sec2 = document.createElement("h3")
        sec2.textContent += "PhoneNumber:"
        sec2.textContent += " "
        sec2.textContent += contactobject.PhoneNumber
        docfrag.appendChild(sec2)
        let sec3 = document.createElement("h3")
        sec3.textContent += "BestTimeToReach:"
        sec3.textContent += " "
        sec3.textContent += contactobject.BestTimeToReach
        docfrag.appendChild(sec3)
        let Delete = document.createElement("button");
        Delete.textContent = "Delete"
        docfrag.appendChild(Delete)
        Delete.addEventListener("click", () => {
            let DataId = contactobject.id
            Contacts.deletedata(DataId)
            .then(response => data.getdataset()
                )
        })
        let Edit = document.createElement("button");
        Edit.textContent = "Edit"
        docfrag.appendChild(Edit)
        Edit.addEventListener("click", () => {
            let articleId = contactobject.id
            let DataId = contactobject.id
            const Form2 = document.querySelector(".output2")
            Form2.innerHTML = " "
            Contacts.GetData(DataId)
                .then(response => contactFormedit.createAndAppendFormedit(response, articleId , input)
                )
        }
        )
                      return docfrag
        }
    }
export default contact