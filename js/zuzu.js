const clickCheckbox = (ele) => {
    ele.classList.toggle("zuzu__checkbox__checked")
}

const clickSwitch = (ele) => {
    ele.classList.toggle("zuzu__switch__on")
}

const clickRadio = (ele) => {
    ele.classList.toggle("zuzu__radio__checked")
}

const clickSelectbox = (ele) => {
    document.querySelector(".zuzu__selectbox__selection").style.display = "block"
}

const clickSelectboxItem = (ele) => {
    document.querySelector(".zuzu__selectbox__selected").innerText = ele.innerText
    setTimeout(() => {
        document.querySelector("body").click()
    }, 10);
}












document.querySelector("body,html").addEventListener("click", () => {
    clickBodyElement()
})


const clickBodyElement = () => {
    console.log("body클릭")
    document.querySelector(".zuzu__selectbox__selection").style.display = "none"
}