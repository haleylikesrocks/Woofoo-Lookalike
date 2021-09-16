import React from 'react';
import { add_single_line_type, add_checkbox } from '../actions/action-types';
import AddASingleLine from './AddASingleLine';
import CheckBox from './CheckBox';

class CurrentForm extends React.Component {
    shouldComponentUpdate(nextProps) {
        console.log(nextProps);
        console.log(this.props.fields.length !== nextProps.fields.length);
        if (this.props.fields.length !== nextProps.fields.length) {
            return true;
        }        
        return false;
    }

    render() {
        console.log(this.props);
    return (
        <div>
        {
            this.props.fields.map((field, index) => {
                console.log(field);
            switch(field.type) {
                case add_single_line_type:
                    return <AddASingleLine key={index}/>
                case add_checkbox:
                    return <CheckBox key={index}/>
                default:
                    return null;
            }
        }
    )}
    </div>)
}
}

export default CurrentForm;

