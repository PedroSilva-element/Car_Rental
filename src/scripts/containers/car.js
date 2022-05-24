import { itensOp } from "./components/linhaTable.js";

export const carro = document.querySelector("#carro");
const itens = document.querySelector('.itensList');
const periodo = document.querySelector('#duracao');

const go = document.querySelector('.iniciar');

go.addEventListener('click', ()=>{
    itensOp()
    
});