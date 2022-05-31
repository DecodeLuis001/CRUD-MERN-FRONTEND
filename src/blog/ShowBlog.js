import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

//datatables
import {MDBContainer} from "mdb-react-ui-kit";
import Posts from './components/Posts';
import Pagination from './components/Pagination';

const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = () => {
    //configuracion de los hooks.
        //hook: corresponde a una api de react que nos permite gestionar los estados de los componentes funcionales.
    /*const [blogs, setBlog] = useState([]) //useState devuleve dos valores: 1º un valor con estado, 2º una funcion para actualizar.
    useEffect( ()=>{
        getBlogs()
    }, [])*/

    //Para la barra de busqueda.
    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    //procedimiento para mostrar todos los datos:
    /*const getBlogs = async () => {
        const res = await axios.get(URI) 
        setBlog(res.data);
        setTablaUsuarios(res.data);
    }*/

    const handleChange = e => {
        setBusqueda(e.target.value);
        //console.log("Busqueda: "+e.target.value);
        filtrar(e.target.value)
    }

    const filtrar=(terminoBusqueda)=> {
        // eslint-disable-next-line array-callback-return
        var resultadoBusqueda = tablaUsuarios.filter((elemento)=>{
            if(elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            || elemento.telefono.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            || elemento.origen.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            || elemento.destino.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ){
                return elemento;
            }
        })
        setPosts(resultadoBusqueda);
    }

    //procedimiento para eliminar un registro.
    /*const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`)
        getBlogs()
    }*/

    //Para la paginacion
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(4);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(URI);
            setPosts(res.data);
            setLoading(false);
            setTablaUsuarios(res.data);
        }
        fetchPosts();
    }, [])
    
    //conseguir la tabla actual.
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //Cambiar pagina
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //console.log(posts)
    return(
        <MDBContainer>
            <div className='App'>
                <p></p>
                <div className='containerInput border border-primary border-3'>
                    <input
                        className='form-control inputBuscar'
                        value={busqueda}
                        placeholder="Puede buscar por: Nombre, Teléfono, Origen o Destino."
                        onChange={handleChange}
                    >
                    </input>
                </div>
            </div>
            <p></p>
            <Link to="/create" className='btn btn-primary mt-2 mb-2'> <i className="fa-solid fa-user-plus"></i> Crear nuevo usuario.</Link>
            <div style={{ marginTop: "10px" }}>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination 
            postsPerPage={postPerPage} 
            totalPosts={posts.length}
            paginate={paginate}
            >
            </Pagination>
            {/*<MDBRow>
                    <MDBCol size={12}>
                        <MDBTable className="table table-striped table-bordered border border-dark"
                            striped
                            bordered
                            small
                        >
                            <MDBTableHead className='table-info border border-dark'>
                                <tr>
                                    <th scope="col"> Nombre </th>
                                    <th scope="col"> Teléfono </th>
                                    <th scope="col"> Origen </th>
                                    <th scope="col"> Destino </th>
                                    <th scope="col"> Tiempo de viaje </th>
                                    <th scope="col"> Acciones </th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {posts && posts.map((blog) => (
                                    <tr key={blog.id}>
                                        <td> {blog.nombre} </td>
                                        <td> {blog.telefono} </td>
                                        <td> {blog.destino} </td>
                                        <td> {blog.origen} </td>
                                        <td> {blog.tiempo} </td>
                                        <td>
                                            <Link to={`/edit/${blog.id}`} className="btn btn-info"> <i className="fa-solid fa-user-pen"> Editar.</i> </Link>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <p></p>
                                            <Link to={`/delete/${blog.id}`} className="btn btn-danger"> <i className="fa-solid fa-trash-can"> Eliminar.</i> </Link>
                                        </td>
                                    </tr>
                                ))}
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCol>
                </MDBRow>*/}
            </div>
        </MDBContainer>        
    )
}

export default CompShowBlogs