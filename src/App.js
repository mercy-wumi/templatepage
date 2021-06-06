import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TemplateCard from './components/TemplateCard/TemplateCard';

function App() {

  const [loading, setLoading] = useState(true);

  // state for template
  const [template, setTemplate] = useState([]);

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
    <div className="App">
      <TemplateCard
        loading={loading}
        template={template}       
      />
    </div>
  );
}

export default App;
