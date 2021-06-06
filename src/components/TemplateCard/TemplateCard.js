import React, { useState } from 'react';
import './TemplateCard.css';
import Loader from 'react-loader-spinner';
// import Pagination from './Pagination/Pagination'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const TemplateCard = ({
    // searchText,
    // handleChange,
    template,
    loading,
}) => {


    // state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

    const maxPageLimit = 1;
    const minPageLimit = 0;

  const handleClick = (event) => {
      setCurrentPage(Number(event.target.id));
  }

  const pages = [];
    for ( let i = 1; i <= Math.ceil(template.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    }
    const handlePrevious = () => {
        setCurrentPage(currentPage - 1);
    }

    const numOfPages = Math.round(template.length / 24);
    const indexOfLastitem = currentPage * itemsPerPage;
    const indexOfFirstitem = indexOfLastitem - itemsPerPage;
    const currentItem = template.slice(indexOfFirstitem, indexOfLastitem);
    
    return (
        <div className='container'>
            <div className='searchbar'> 
                <div className='search-container'>
                    <input
                        type='text'
                        placeholder='search Templates...'
                    />
                </div>
                <div className='select'>
                    <span className='gap'> Sort By: </span>
                    <select name='category' className='category gap'>
                        <option value='all'>All</option>
                        <option value='health'>Health</option>
                        <option value='education'>Education</option>
                        <option value='ecommerce'>E-commerce</option>
                    </select>
                    <select name='category' className='category gap'>
                        <option value='default'>Default </option>
                        <option value='ascending'>Ascending</option>
                        <option value='descending'>Descending</option>
                    </select>
                    <select name='category' className='category'>
                        <option value='default'>Default </option>
                        <option value='ascending'>Ascending</option>
                        <option value='descending'>Descending</option>
                    </select>
                </div>
            </div>
            <div className='warning-alert'>
                <span> Tada! Get started with afree template. Can't find what you are looking for? Search from the 1000+ available templates</span>
            </div>
            <div className='searchbar'>
                <span className='search-container'>All Templates</span>
                <span className='select'>{template.length} templates</span>
            </div>
            <div>
                {loading 
                    ? <Loader type="ThreeDots" className='loader' /> 
                    : <div className='grid-container'>
                        {currentItem.map((items) =>  {
                        return (
                            <div className='gridItem'>
                                <div className='card'>
                                    <div className='allSpace'>
                                        <h3 className='spaceBtm'>{items.name}</h3>
                                        <p className='spaceBtm'>{items.description}</p>
                                    </div>
                                    <div className='useTemplate'>
                                        <a href={items.links}>Use Template</a>
                                    </div>
                                </div>
                            </div>
                        );
                        })}
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
                    </div>
                }
            </div>
        </div>
    );
}

export default TemplateCard;