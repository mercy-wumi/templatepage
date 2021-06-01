import React, { useEffect, useState } from 'react';
import './TemplateCard.css';
import axios from 'axios';

const TemplateCard = () => {

const [template, setTemplate] = useState([]);

useEffect(() => {
    const getTemplate = async () => {
        try {
            const resp = await axios.get('https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates');
            console.log(resp);
            const allTemplates = resp.data;
            setTemplate(allTemplates);
        } catch (error) {
            console.log(error);
        }
};
getTemplate();
}, []);

    return (
        <div className='grid-container'>
            {template.splice(0, 24).map((items) =>  {
                return (
                    <div className='gridItem'>
                        <div className='card'>
                            <div className='allSpace'>
                                <h3 className='spaceBtm'>{items.name}</h3>
                                <p className='spaceBtm'>{items.description}</p>
                            </div>
                            <div className='useTemplate'>
                                <p className='formatTextColor'><a href={items.links}>Use Template</a></p>
                            </div>
                        </div>
                    </div>
                );
            })};
        </div>
    );
}

export default TemplateCard;