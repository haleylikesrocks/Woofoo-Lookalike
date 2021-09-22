import React, { useEffect}  from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const SavedForms = ({ savedForms, loadForm }) => {

  const history = useHistory();

  const handleClick = (formId, savedForms) => {
    loadForm(formId, savedForms);
    history.push(formId);
  }
  
    useEffect(() => {

    }, [savedForms]);
  return (
    <div>
      <h1>Saved Forms</h1>
      <ul>
        {savedForms.map((form, index) => (
          <Link key={index} to={`${form.formId}`} onClick={() => handleClick(form.formId, savedForms)}>
            <li key={index}>{form.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SavedForms;
