import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompCreateBlog = () => {
    //Uso de los hooks
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [origen, setOrigen] = useState('')
    const [destino, setDestino] = useState('')
    const [tiempo, setTiempo] = useState('')
    const navigate = useNavigate()

    //Procedimiento de guardado
    const store = async (e) => {
        e.preventDefault()
        //Para enviar los datos del front al back
        await axios.post(URI, {nombre: nombre, telefono: telefono, origen: origen, destino: destino, tiempo: tiempo})
        navigate('/')
    }

    return (
        <div>
            <h1>
                Creación de datos.
            </h1>

            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'> Nombre: </label>
                    <input
                        value={nombre}
                        onChange={ (e)=> setNombre(e.target.value)}
                        type="text"
                        className='form-control'
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'> Telefono: </label>
                    <input
                        value={telefono}
                        onChange={ (e)=> setTelefono(e.target.value)}
                        type="text"
                        className='form-control'
                    ></input>
                </div>
                <div className='mb-3'>
                <label className='form-label'> Punto de origen: </label>
                <select value={origen}
                        onChange={ (e)=> setOrigen(e.target.value)} 
                        type="text" 
                        id="origen" 
                        name="origen" 
                        className="form-select" 
                        aria-label="Default select example"
                        >
                          <option value="" disabled> ----- </option>
                          <option value="Guanajuato"> Guanajuato </option>
                          <option value="Leon"> León </option>
                          <option value="Irapuato"> Irapuato </option>
                          <option value="Salamanca"> Salamanca </option>
                          <option value="Valle de Santiago"> Valle de Santiago </option>
                          <option value="Celaya"> Celaya </option>
                          <option value="Abasolo"> Abasolo </option>
                          <option value="San Miguel de Allende"> San Miguel de Allende </option>
                </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label'> Lugar de destino: </label>
                    <select value={destino}
                        onChange={ (e)=> setDestino(e.target.value)}
                        type="text"
                        id="destino" 
                        name="destino" 
                        className="form-select" 
                        aria-label="Default select example"
                        >
                          <option value="" disabled> ----- </option>
                          <option value="Guanajuato"> Guanajuato </option>
                          <option value="Leon"> León </option>
                          <option value="Irapuato"> Irapuato </option>
                          <option value="Salamanca"> Salamanca </option>
                          <option value="Valle de Santiago"> Valle de Santiago </option>
                          <option value="Celaya"> Celaya </option>
                          <option value="Abasolo"> Abasolo </option>
                          <option value="San Miguel de Allende"> San Miguel de Allende </option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label'> Duración estimada del viaje: </label>
                    <input
                        value={tiempo}
                        onChange={ (e)=> setTiempo(e.target.value)}
                        type="text"
                        className='form-control'
                    ></input>
                </div>
                <button type='submit' className='btn btn-primary'> <i className="fa-solid fa-floppy-disk"> Guardar. </i> </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/" className="btn btn-secondary"> <i className="fa-solid fa-ban"> Cancelar. </i> </a>
            </form>
        </div>
    )
}

export default CompCreateBlog