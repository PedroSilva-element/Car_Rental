import { carro } from "../car.js";
//import { refreshTime } from "./time/currentTime.js";

const itens = document.querySelector('.itensList');

//const dt = new Date();



const or = 0;
const crono = "Ok";
const horaAtual = "star";
const horaFim = "Depois";
const botFim = `<button>Finalizar</button>`;

export const itensOp = (order = or + 1, carr = carro.value, temp = crono, init = horaAtual, end = horaFim, finish = botFim) => {
    return itens.innerHTML += `
    <div>
        <span>${order}</span>
        <span>${carr}</span>
        <span class="temp">${temp}</span>
        <span>${init}</span>
        <span>${end}</span>
        <span>${finish}</span>
    </div>
    `
}