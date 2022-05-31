import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalPosts / postsPerPage); i++)
    {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                <em> <u> Puede consultar los itinerarios usando la paginación: </u> &nbsp;&nbsp;&nbsp;&nbsp; </em>
                {   pageNumbers.map(number => (
                       <li key={number} className='page-item'>
                           <a onClick={() => paginate(number)} href="#!" className="page-link">
                               P:{number}
                           </a>
                       </li>
                   ))
                }
            </ul>
        </nav>
    )
}

export default Pagination