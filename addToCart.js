const btnArray = document.querySelectorAll('.addToCartBtn')
let orderArray

if (JSON.parse(localStorage.getItem(`Order`)) === null) {

    localStorage.setItem("Order", JSON.stringify([]))
    orderArray = JSON.parse(localStorage.getItem(`Order`))
} else {

    orderArray = JSON.parse(localStorage.getItem(`Order`))
}


for (let i = 0; i < btnArray.length; i++) {
    btnArray[i].onclick = () => addToCart(btnArray[i], i)
    btnArray[i].classList.add("no-checked")
}



function addToCart(choice, indexBtn) {

    orderArray = JSON.parse(localStorage.getItem(`Order`))
    if (btnArray[indexBtn].classList.contains("no-checked")) {
        const btn = btnArray[indexBtn]
        btn.innerHTML = "&#x2714;"
        btn.classList.remove("no-checked")
        btn.classList.add("checked")
    } else {
        const btn = btnArray[indexBtn]
        btn.innerHTML = "Panier"
        btn.classList.remove("checked")
        btn.classList.add("no-checked")
    }



    const name = choice.parentElement.parentElement.querySelector('h3').textContent
    const price = choice.parentElement.querySelector('.price').textContent.split('')
    price.shift()



    const body = {
        name: name,
        price: parseFloat(price.join('')),
        quantity: 1,
        indexBtn: indexBtn,
        type: "box"
    }


    for (let i = 0; i < orderArray.length; i++) {
        if (orderArray[i] != null || orderArray[i] != undefined) {
            if (body.name === orderArray[i].name) {
                delete orderArray[i]
                localStorage.setItem("Order", JSON.stringify(orderArray))
                return
            }
        }
    }


    orderArray.push(body)

    localStorage.setItem("Order", JSON.stringify(orderArray))

}

//---------------------------//
//----------SLIDER-----------//
//---------------------------//

const sliderBtnArray = document.querySelectorAll('.addToCartBtn-slider')
for (let i = 0; i < sliderBtnArray.length; i++) {
    sliderBtnArray[i].onclick = () => sliderAddToCart(sliderBtnArray[i], i)
    sliderBtnArray[i].classList.add("slider-no-checked")
}


function sliderAddToCart(choice, indexBtn) {
    
    orderArray = JSON.parse(localStorage.getItem(`Order`))
    if (sliderBtnArray[indexBtn].classList.contains("slider-no-checked")) {
        const btn = sliderBtnArray[indexBtn]
        btn.innerHTML = "&#x2714;"
        btn.classList.remove("fa-cart-shopping")
        btn.classList.remove("fa-solid")
        btn.classList.remove("slider-no-checked")
        btn.classList.add("slider-checked")
    } else {
        const btn = sliderBtnArray[indexBtn]
        btn.innerHTML = ""
        btn.classList.remove("slider-checked")
        btn.classList.add("fa-cart-shopping")
        btn.classList.add("fa-solid")
        btn.classList.add("slider-no-checked")
    }
    
    const name = choice.parentElement.parentElement.querySelector('.infos .name').textContent
    const price = choice.parentElement.parentElement.querySelector('.prix').textContent.split('')
    price.pop()
    const body = {
        name: name,
        price: parseFloat(price.join('')),
        quantity: 1,
        indexBtn: indexBtn,
        type: "slider"
    }


    for (let i = 0; i < orderArray.length; i++) {
        if (orderArray[i] != null || orderArray[i] != undefined) {

            if (body.name === orderArray[i].name) {
                delete orderArray[i]
                localStorage.setItem("Order", JSON.stringify(orderArray))
                return
            }
        }
    }


    orderArray.push(body)

    localStorage.setItem("Order", JSON.stringify(orderArray))
}

orderArray.forEach(item => {
    if (item == null) {
        return
    }
    if (item.type === "box") {
        const btn = btnArray[item.indexBtn]
        btn.innerHTML = "&#x2714;"
        btn.classList.remove("no-checked")
        btn.classList.add("checked")
    } else if (item.type === "slider") {
        const btn = sliderBtnArray[item.indexBtn]
        btn.innerHTML = "&#x2714;"
        btn.classList.remove("fa-solid")
        btn.classList.remove("fa-cart-shopping")
        btn.classList.remove("slider-no-checked")
        btn.classList.add("slider-checked")
    }
});