const total = parseFloat(localStorage.getItem("totalPrice"))

document.querySelector("#total").innerHTML = total + " €"

const form = document.querySelector("form")
const orderSection = document.querySelector(".order")
form.onsubmit = (e) => {
    e.preventDefault()
    console.log('submited')
    orderSection.innerHTML = `<div id="success" style="padding : 0"><div id='check'>&#x2713;</div><h3 class="sub-heading" style="margin-top: 25px "> Votre commande a été passée avec succées !</h3>
    <h3 class="sub-heading"style="color:black !important" > On se retrouve dans quelques instants... </h3></div>`
    
    success.style.cssText = "padding : 0 !important; margin-top : 200px"
    check.style.cssText ="width : fit-content; background :green; color : white; font-weight: 600;font-size : 50px; text-align : center; margin : auto; padding : 0 17px; border-radius : 50%"

};