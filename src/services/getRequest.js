import {useState,useEffect} from 'react';
import { getCategorias } from './api';



function FetchGet(){

const [dadosIniciais1, setDadosIniciais1] = useState([]);




console.log(dadosIniciais1);
useEffect(() => {
  async function fecthCategoria() {
    await getCategorias().then(setDadosIniciais1);
    console.log(dadosIniciais1);
  }
  fecthCategoria();
}, [])


useEffect(() => {
  console.log(dadosIniciais1) 
}, [dadosIniciais1])

return dadosIniciais1
}




export default FetchGet;