const img = document.querySelector("img");

img.onclick = ()=>{
    const mySrc = img.getAttribute("src");
    if (mySrc === "images/firefox-icon.png")
    {
        img.setAttribute("src", "images/firefox-icon2.png");
    }
    else{
        img.setAttribute("src", "images/firefox-icon.png");
    }
}

let mybtn = document.querySelector("button");
let myheading = document.querySelector("h1");

//mybtn.addEventListener("click", setUserName);
mybtn.onclick = () => {
    if (!localStorage.getItem("name"))
    {
        setUserName();
    }
    else
    {
        myname = localStorage.getItem("name");
        myheading.textContent = `Mozilla cool, ${myname}`;
    }
        
}
function setUserName(){
    const myname = prompt("Please enter your name");
    if(!myname)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem("name", myname);
        myheading.textContent = `Mozilla cool, ${myname}`;
    }
}