import React from 'react';

const Filters = () => {
    return (
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
    )
}

export default Filters;