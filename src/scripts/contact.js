// contains a templates that creates an html componenet that can be apenmeded tot he dom by contcat list
const contact = {
    MakeDOMBuilder(contactobject){
    let docfrag = document.createDocumentFragment()
    let sec = document.createElement("section")
    let sec2 = document.createElement("section")
    let sec3 = document.createElement("section")
    sec.textContent += contactobject.Name
    sec2.textContent += contactobject.PhoneNumber
    sec3.textContent += contactobject.BestTimeToReach
    docfrag.appendChild(sec)
    docfrag.appendChild(sec2)
    docfrag.appendChild(sec3)
    return docfrag
    }
    }
export default contact
