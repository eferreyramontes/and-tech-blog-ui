import React from 'react';
import { Field, ErrorMessage } from 'formik';

const field = (props) => {
    switch (props.type) {
        case 'text':
            return (<Field className="input" type={props.type} name={props.name} placeholder={props.placeholder} />);
        case 'textarea':
            return (<Field className="textarea" as={props.type} name={props.name} placeholder={props.placeholder} />);
        case 'select':
            return (
                <Field className='select' as='select' name={props.name} placeholder={props.placeholder} >
                    {props.options.map(element => (<option key={element} value={element} label={element} />))}
                </Field >
            );
        default:
            return (<span></span>)
    }
}

const FormField = (props) => {
    return (
        <div className="field">
            <label className="label">{props.title}</label>
            <div className="control">
                {field(props)}
                <ErrorMessage
                    style={{ margin: '5px' }}
                    className="notification is-danger is-light"
                    component="div"
                    name={props.name} />
            </div>
        </div>
    )
};

export default FormField;

