import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/blogs/'

const CompDelBlog = () => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [origen, setOrigen] = useState('')
    const [destino, setDestino] = useState('')
    const [tiempo, setTiempo] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //Procedimiento para actualizar o editar.
    const delate = async (e) => {
        e.preventDefault()
        await axios.delete(URI+id, {
            nombre: nombre,
            telefono: telefono,
            origen: origen,
            destino: destino,
            tiempo: tiempo,
        })
        navigate('/')
    }

    useEffect( ()=>{
        getBlogById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getBlogById = async () => {
        const res = await axios.get(URI+id)
        setNombre(res.data.nombre)
        setTelefono(res.data.telefono)
        setOrigen(res.data.origen)
        setDestino(res.data.destino)
        setTiempo(res.data.tiempo)
    }

    return (
        <div className='mb-3'>
        <h1>
            ¿Desea eliminar este usuario?
        </h1>

        <form onSubmit={delate}>
            <div className='mb-3'>
                <label className='form-label'> Nombre: </label>
                <input
                    value={nombre}
                    onChange={ (e)=> setNombre(e.target.value)}
                    type="text"
                    className='form-control'
                    readOnly
                ></input>
            </div>
            <div className='mb-3'>
                <label className='form-label'> Teléfono: </label>
                <input
                    value={telefono}
                    onChange={ (e)=> setTelefono(e.target.value)}
                    type="text"
                    className='form-control'
                    readOnly
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
                        disabled="disabled">
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
                <label className='form-label'> Puesto: </label>
                <select value={destino}
                    onChange={ (e)=> setDestino(e.target.value)}
                    type="text"
                    id="destino" 
                    name="destino" 
                    className="form-select" 
                    aria-label="Default select example"
                    disabled="disabled">
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
                    readOnly
                ></input>
            </div>
            <button type='submit' className='btn btn-danger'>  <i className="fa-solid fa-eraser">  Eliminar Usuario. </i> </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/" className="btn btn-secondary"> <i className="fa-solid fa-ban"> Cancelar. </i> </a>
        </form>
        </div>
    )
}

export default CompDelBlog