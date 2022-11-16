const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/parents-summer-2022.jpg") {
        myImage.setAttribute("src", "images/bv-phone.jpg")
    }
    else{
        myImage.setAttribute("src", "images/parents-summer-2022.jpg")
    }
}