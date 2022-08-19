import '../Form/form.css'
import Button from '../Button/index'
import { useNavigate } from 'react-router-dom';



function Form() {

    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/cadastro/categoria");
      };
    return(   
              <form onSubmit={handleSubmit} className='form__cadastroVideo'>
               <h1 className='title__form'>Cadastrar Video</h1>
               <input type='text' placeholder='Categoria' className="input input__categoria" required></input>
               <input type='text' placeholder='Titulo' className="input input__name" required></input>
               <input type='text' placeholder='Descricao do Video'  className="input input__fileUrl" required/>
               <input type='text' placeholder='URL'  className="input input__fileUrl" required/>
               <Button typeof='submit' className='btn__enviar'> Enviar </Button>
              </form>                  
    )
}

export default Form;