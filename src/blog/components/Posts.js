import React from "react";
import {Link} from 'react-router-dom'
import {MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol} from "mdb-react-ui-kit";

const Posts = ({ posts, loading}) => {
    if(loading){
        return <h2> Cargando... </h2>
    }

    return <li className="list-group mb-4">
        <MDBRow>
            <MDBCol size={12}>
                <MDBTable className="table table-striped table-bordered border border-dark"
                    striped
                    bordered
                    small
                >
                <MDBTableHead className='bg-primary border-dark'>
                    <tr>
                        <th scope="col"> Nombre </th>
                        <th scope="col"> Teléfono </th>
                        <th scope="col"> Origen </th>
                        <th scope="col"> Destino </th>
                        <th scope="col"> Tiempo de viaje </th>
                        <th scope="col"> Acciones </th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody className="table-light border-dark">
                    {posts && posts.map((blog, index) => (
                        <tr key={index}>
                            <td> {blog.nombre} </td>
                            <td> {blog.telefono} </td>
                            <td> {blog.origen} </td>
                            <td> {blog.destino} </td>
                            <td> {blog.tiempo} </td>
                            <td align="center">
                            <Link to={`/edit/${blog._id}`} className="btn btn-info"> <i className="fa-solid fa-user-pen"> Editar.</i> </Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <p></p>
                            <Link to={`/delete/${blog._id}`} className="btn btn-danger"> <i className="fa-solid fa-trash-can"> Eliminar.</i> </Link>
                            </td>
                        </tr>
                        ))}
                </MDBTableBody>
                </MDBTable>
            </MDBCol>
        </MDBRow>
    </li>
};

export default Posts