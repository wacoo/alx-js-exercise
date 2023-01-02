const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
    const name = prompt("What is your name?");
    alert(`Hello ${name}, nice ot see you!`);
    headingA.textContent = `Welcome ${name}`;
}

//Event
const text = document.querySelector('#textb');
const disp = document.querySelector('#disp');

text.addEventListener('keydown', (event) => disp.textContent = `You pressed "${event.key}"`);