import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../common/FieldInput';

export const CarSearchForm = ({ handleSubmit, pristine, reset, submitting, heading, handleSave, handleCancel }) => {
    return (
        <form onSubmit={handleSubmit(handleSave)}>
            <h1>{heading}</h1>

            <Field
                type="text"
                name="distance"
                label="Distance To Travel"
                placeholder="Distance To Travel"
                component={FieldInput}
            />

            <Field
                type="text"
                name="cost"
                label="Expected Cost of Fuel"
                placeholder="Expected Cost of Fuel"
                component={FieldInput}
            />


            <div>
                <button type="submit" disabled={submitting} className="btn btn-primary"><i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit</button>

                {heading === 'Add' && <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default btn-space">Clear Values</button>}

                <button type="button" className="btn btn-default btn-space" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};





const validate = values => {
    const errors = {};

    if (!values.distance) {
        errors.model = 'Required';
    }

    if (!values.cost) {
        errors.brand = 'Required';
    }

    return errors;
};



CarSearchForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
};



export default reduxForm({
    form: 'CarSearchForm',
    validate
})(CarSearchForm);