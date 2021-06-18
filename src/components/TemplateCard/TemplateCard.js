import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './TemplateCard.css';
import Loader from 'react-loader-spinner';
import Pagination from '../Pagination/Pagination';
import Filters from '../Filters/Filters';
import { fetchTemplates } from '../../store/action';

const TemplateCard = ({
    fetchTemplates,
    loading,
    template,
    // error
}) => {

    useEffect(()=> {
        fetchTemplates()
    }, []);
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
            <Filters />
            <div className='warning-alert'>
                <span> Tada! Get started with a free template. Can't find what you are looking for? Search from the 1000+ available templates</span>
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
                        <Pagination
                            maxPageLimit={maxPageLimit}
                            minPageLimit={minPageLimit}
                            numOfPages={numOfPages}
                            handlePrevious={handlePrevious}
                            handleNext={handleNext}
                            handleClick={handleClick}
                            pages={pages}
                            currentPage={currentPage}
                        />
                    </div>
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        template: state.template,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTemplates: () => dispatch(fetchTemplates())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateCard);