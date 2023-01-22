const saveCommandLocalStorage = (command) => {
    localStorage.setItem("Order", JSON.stringify(command))
    if(localStorage.getItem("totalPrice") == 0){
        oldBtnSell = document.querySelector(".btn-sell")
        oldBtnSell.style.display="none"
    }
}

const btnArray2 = document.querySelectorAll('.addToCartBtn')
const sliderBtnArray2 = document.querySelectorAll('.addToCartBtn-slider')

const cartContent = document.querySelector(".item-container")
// recuperer la div content
const popupDiv = document.querySelector("#container-cart")
document.querySelector("#btnPopup").addEventListener("click", (e) => {
  
    
    let oldBtnSell = document.querySelector(".btn-sell")
    if (oldBtnSell != null) {
        oldBtnSell.remove()
    }

  

    if (popupDiv.classList.contains("active")) {
        popupDiv.classList.remove("active")
        popupDiv.classList.add("hidden")
    } else {
        popupDiv.classList.remove("hidden")
        popupDiv.classList.add("active")

        document.querySelector("#btnClose").addEventListener("click", (e) => {
            popupDiv.classList.remove("active")
            popupDiv.classList.add("hidden")
        })

        if (document.querySelector(".item") != null) {
            document.querySelectorAll(".item").forEach(itemToDelete => {
                itemToDelete.remove()
            })
        }
        let command = JSON.parse(localStorage.getItem(`Order`))
        localStorage.setItem("totalPrice", 0)
        command.map((item, index) => {
            if (item == null) {
                return
            }


            // creation de la balise item
            const itemDiv = document.createElement("div")
            itemDiv.classList.add("item")
            itemDiv.id = "item-" + index

            //creation de l'ajout et la supression de la quantiter
            const quantityDiv = document.createElement("div")
            quantityDiv.classList.add("quantity")
            const pMinus = document.createElement("p")
            pMinus.classList.add("minus")
            pMinus.innerHTML = "&minus;"
            pMinus.addEventListener("click", (e) => {
                
                
                if (command[index].quantity === 1) {
                    itemDiv.remove()
                    delete command[index]
                    localStorage.setItem("totalPrice", Math.round((parseFloat(localStorage.getItem("totalPrice")) - item.price) * 100) / 100)
                    document.querySelector("#price-total").innerHTML = localStorage.getItem("totalPrice") + " €"
                    saveCommandLocalStorage(command)


                    
                    if (item.type === "box") {
                        const btn = btnArray2[item.indexBtn]
                        btn.innerHTML = "Panier"
                        btn.classList.remove("checked")
                        btn.classList.add("no-checked")
                    } else if (item.type === "slider") {
                        const btn = sliderBtnArray2[item.indexBtn]
                        btn.innerHTML = ""
                        btn.classList.remove("slider-checked")
                        btn.classList.add("fa-cart-shopping")
                        btn.classList.add("fa-solid")
                        btn.classList.add("slider-no-checked")
                    }
                    
                    return

                } else {
                    command[index].quantity--
                    saveCommandLocalStorage(command)
                }
                pQuantity.innerHTML = command[index].quantity
                itemDiv.querySelector(".price").innerHTML = item.price * item.quantity + " €"
                localStorage.setItem("totalPrice", Math.round((parseFloat(localStorage.getItem("totalPrice")) - item.price) * 100) / 100)
                document.querySelector("#price-total").innerHTML = localStorage.getItem("totalPrice") + " €"
             
            })
           
            quantityDiv.appendChild(pMinus)
            const pQuantity = document.createElement("p")
            pQuantity.classList.add("nbr")
            pQuantity.innerText = item.quantity
            quantityDiv.appendChild(pQuantity)
            const pPlus = document.createElement("p")
            pPlus.classList.add("plus")
            pPlus.innerHTML = "&plus;"
            pPlus.addEventListener("click", (e) => {
                command[index].quantity++
                pQuantity.innerHTML = command[index].quantity
                itemDiv.querySelector(".price").innerHTML = item.price * item.quantity + " €"
                localStorage.setItem("totalPrice", Math.round((parseFloat(localStorage.getItem("totalPrice")) + item.price) * 100) / 100)
                document.querySelector("#price-total").innerHTML = localStorage.getItem("totalPrice") + " €"
                saveCommandLocalStorage(command)
            })
            quantityDiv.appendChild(pPlus)
            itemDiv.appendChild(quantityDiv)


            const pTitleItem = document.createElement("p")
            pTitleItem.classList.add("title-item")
            pTitleItem.innerHTML = item.name
         
            const pPrice = document.createElement("p")
            pPrice.classList.add("price")
            pPrice.innerHTML = item.price * item.quantity + "&nbsp;€"
            itemDiv.appendChild(pTitleItem)
            itemDiv.appendChild(pPrice)

            cartContent.appendChild(itemDiv)


            localStorage.setItem("totalPrice", Math.round((parseFloat(localStorage.getItem("totalPrice")) + (item.price * item.quantity)) * 100) / 100)
        })
        document.querySelector("#price-total").innerHTML = localStorage.getItem("totalPrice") + " €"
        if (parseFloat(localStorage.getItem("totalPrice")) != 0) {
            
            const sellBtn = document.createElement("button")
            sellBtn.textContent = "Payer"
            sellBtn.classList.add("btn")
            sellBtn.classList.add("btn-sell")
            sellBtn.addEventListener("click", () => {
                document.location = "/index-paiement.html"
            })
            document.querySelector("#content").appendChild(sellBtn)
        }
    }
})



localStorage.setItem("totalPrice", 0)


