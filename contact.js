const form = document.querySelector('.contact-formulaire form')

form.onsubmit = (e) => {
    e.preventDefault()
    form.style.display = "none"

    const messageContainer = document.createElement('div')
    document.querySelector('.contact-formulaire').appendChild(messageContainer)
   
    messageContainer.style.padding = '10px'


    messageContainer.innerHTML = `<div id="success" style="padding : 0"><div id='check'>&#x2713;</div><h3 class="sub-heading" style="margin-top: 25px "> Votre message a été envoyé avec succées !</h3></div>`
    
    success.style.cssText = "padding : 0 !important;"
    check.style.cssText ="width : fit-content; background :green; color : white; font-weight: 600;font-size : 50px; text-align : center; margin : auto; padding : 0 17px; border-radius : 50%"

    

} 
