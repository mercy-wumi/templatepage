import React from 'react';
// import { useSelector } from 'react-redux';

// used react-redux and hooks

const Pagination = ({
    maxPageLimit, minPageLimit, handlePrevious,
    numOfPages, handleClick, handleNext, pages, currentPage
}) => {

    // const currentPage = useSelector((state) => state.currentPage);
    return (
        <div className='pagination'>
            <button
                className='btn'
                onClick={handlePrevious}
                disabled={currentPage === pages[0] ? true : false}
            >
                Previous
            </button>
            {pages.map(number => {
                if( number < maxPageLimit +1 && number > minPageLimit) {
                return(
                    <ul className='pageNumbers'>
                        <li id={number} onClick={handleClick}>
                            {currentPage}
                            <span> of {numOfPages}</span>
                        </li>
                    </ul>
                )
                } else {
                    return null;
                }
            })}
            <button
                className='btn'
                onClick={handleNext}
                disabled={currentPage === numOfPages ? true : false}
            >
                Next
            </button>
        </div>
    )
}


export default Pagination;