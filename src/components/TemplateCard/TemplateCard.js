import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './TemplateCard.css'
import Loader from 'react-loader-spinner';
import Pagination from '../Pagination/Pagination';
import Filters from '../Filters/Filters';
import { fetchTemplates } from '../../store/action';

const TemplateCard = ({
    fetchTemplates,
    // filterHandler,
    loading,
    templateData,
    // category
    // error
}) => {

    useEffect(() => {
        fetchTemplates()
        // eslint-disable-next-line
    }, []);
    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const itemsPerPage = 24;

    const maxPageLimit = 1;
    const minPageLimit = 0;

    useEffect(() => {
        setFilteredData(
            templateData && templateData.filter(templates => {
                return templates && templates.name.toLowerCase().includes(search.toLowerCase().trim())
            })
        )
        console.log(filteredData);
        // eslint-disable-next-line
    }, [search, templateData]);

    // useEffect(() => {
    //     categoryFilter()
    //     eslint-disable-next-line
    // }, [category, templateData]);

    const categoryHandler = () => {
        switch (category) {
            case 'health':
                setFilteredData(templateData && templateData.filter((filteredTemplate) =>
                filteredTemplate.category.filter((categories) => categories.includes("health"))));
                console.log(templateData)
                break;
            case 'education':
                setFilteredData(templateData && templateData.filter((filteredTemplate) =>
                filteredTemplate.category.filter((categories) => categories === 'education')));
                break;
            case 'ecommerce':
                setFilteredData(templateData && templateData.filter((filteredTemplate) =>
                filteredTemplate.category.filter((categories) => categories === 'ecommerce')));
                break;
            default:
                setFilteredData(templateData);
        }
    }
    
    console.log(category)
    // console.log(templateData[0].category)

    useEffect(() => {
        categoryHandler()
        // eslint-disable-next-line
    }, [category, templateData]);

    const handleChange = (e) => {
        setSearch(e.target.value)
    };

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    const filterHandler = (e) => {
        setCategory(e.target.value);
    }
    const pages = [];
    for (let i = 1; i <= Math.ceil(filteredData && filteredData.length / itemsPerPage); i++) {
        pages.push(i);
    }
    console.log(filteredData)

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    }
    const handlePrevious = () => {
        setCurrentPage(currentPage - 1);
    }

    const numOfPages = Math.round(filteredData && filteredData.length / 24);
    // const indexOfLastitem = currentPage * itemsPerPage;
    // const indexOfFirstitem = indexOfLastitem - itemsPerPage;
    // const currentItem = templateData && templateData.slice(indexOfFirstitem, indexOfLastitem);

    // console.log(currentItem);
    return (
        <div className='container'>
            <Filters
                handleChange={handleChange}
                filterHandler={filterHandler}
            />
            <div className='warning-alert'>
                <span> Tada! Get started with a free template. Can't find what you are looking for? Search from the 1000+ available templates</span>
            </div>
            <div className='searchbar'>
                <span className='search-container'>All Templates</span>
                <span className='select'>{filteredData && filteredData.length} templates</span>
            </div>
            <div>
                {loading
                    ? <Loader type="ThreeDots" className='loader' />
                    : <div>
                        <div className='grid-container'>
                            {filteredData && filteredData.slice(0, itemsPerPage).map((items) => {
                                {/* {templateData && templateData.slice(0, 24).map((items) => { */ }
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
                        </div>
                        <div>
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
                    </div>
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        templateData: state.template,
        error: state.error,
        // category: state.category
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTemplates: () => dispatch(fetchTemplates()),
        // filterHandler: (e) => dispatch(filterHandler(e.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateCard);