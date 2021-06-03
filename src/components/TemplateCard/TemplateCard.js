import React, { useEffect, useState } from 'react';
import './TemplateCard.css';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const TemplateCard = () => {

const [template, setTemplate] = useState([]);
const [loading, setLoading] = useState(true);

const [searchText, setSearchText] = useState('');
const [templatelist, setTemplateList] = useState(template);

const handleChange = (e) => {
    setSearchText(e)
}

const filteredTemplate = () => {

}
useEffect(() => {
    const getTemplate = async () => {
        try {
            const resp = await axios.get('https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates');
            console.log(resp);
            const allTemplates = resp.data;
            setLoading(false);
            setTemplate(allTemplates);
        } catch (error) {
            console.log(error);
        }
};
getTemplate();
}, []);

    return (
        <div className='container'>
            <div className='searchbar'>
                <div className='search-container'>
                    <input
                        type='text'
                        placeholder='search Templates...'
                        onChange={(event)=> handleChange(event.target.value)}
                    />
                </div>
                <div className='select'>
                    <span className='gap'> Sort By: </span>
                    <select name='category' className='category gap'>
                        <option value='all'>All</option>
                        <option value='agriculture'>Agriculture</option>
                        <option value='education'>Education</option>
                        <option value='commerce'>Commerce</option>
                    </select>
                    <select name='category' className='category gap'>
                        <option value='all'>Default </option>
                        <option value='agriculture'>Ascending</option>
                        <option value='education'>Descending</option>
                    </select>
                    <select name='category' className='category'>
                        <option value='all'>Default </option>
                        <option value='agriculture'>Ascending</option>
                        <option value='education'>Descending</option>
                    </select>
                </div>
            </div>
            <div className='warning-alert'>
                <span> Tada! Get started with afree template. Can't find what you are looking for? Search from the 1000+ available templates</span>
            </div>
            <div>
                {loading 
                    ? <Loader type="ThreeDots" className='loader' /> 
                    : <div className='grid-container'>
                        {template.splice(0, 24).map((items) =>  {
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
                }
            </div>
        </div>
    );
}

export default TemplateCard;