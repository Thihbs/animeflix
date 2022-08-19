import Axios from "axios";


export async function getCategorias(){
  return Axios
  .get('http://localhost:3001/categoria')
  .then(res => res.data)

}