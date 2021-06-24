import React from 'react';
import { connect } from 'react-redux';
import './Filters.css';
import { filterHandler } from '../../store/action';

const Filters = ({ filterHandler, handleChange }) => {
    return (
        <div className='searchbar'>
            <div className='search-container'>
                <input
                    type='text'
                    placeholder='search Templates...'
                    onChange={handleChange}
                />
            </div>
            <div className='select'>
                <div className='spaceAround'>
                    <span className='gap'> Sort By: </span>
                    <select name='category' onChange={filterHandler} className='category gap'>
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
                    <select name='category' className='category '>
                        <option value='default'>Default </option>
                        <option value='ascending'>Ascending</option>
                        <option value='descending'>Descending</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterHandler: (e) => dispatch(filterHandler(e.target.value))
    }
}

export default connect(null, mapDispatchToProps)(Filters);