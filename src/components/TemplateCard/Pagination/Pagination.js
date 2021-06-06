import React from 'react';
import './Pagination.css';

const Pagination = ({
    // template,
    // itemsPerPage,
    // currentPage
    pages,
    handleClick
}) => {

    // const pages = [];
    // for ( let i = 1; i <= Math.ceil(template.length / itemsPerPage); i++) {
    //     pages.push(i);
    // }

    // const indexOfLastitem = currentPage * itemsPerPage;
    // const indexOfFirstitem = indexOfLastitem - itemsPerPage;
    // const currentItem = template.slice(indexOfFirstitem, indexOfLastitem);
    return (
        <div>
            <button>Previous</button>
            {pages.map(number => {
                return(
                    <ul className='pageNumbers'>
                        <li id={number} onClick={handleClick}>
                            {number}
                        </li>
                    </ul>
                )
            })}
            <button>Next</button>
        </div>
    )
};

export default Pagination;