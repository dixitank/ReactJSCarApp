import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../common/FieldInput';

export const CarForm = ({ handleSubmit, pristine, reset, submitting, heading, handleSave, handleCancel }) => {
    return (
        <form onSubmit={handleSubmit(handleSave)}>
            <h1>{heading}</h1>

            <Field
                type="text"
                name="model"
                label="Car model"
                placeholder="Car Model"
                component={FieldInput}
            />

            <Field
                type="text"
                name="brand"
                label="Car brand"
                placeholder="Car brand"
                component={FieldInput}
            />

            <Field
                type="text"
                name="version"
                label="Car version"
                placeholder="Version of Car"
                component={FieldInput}
            />
            <Field
                type="number"
                name="year"
                label="Year of release"
                placeholder="Year of release"
                component={FieldInput}
            />

            <Field
                type="number"
                name="price"
                label="Price"
                placeholder="Price"
                component={FieldInput}
            />
            <Field
                type="number"
                name="fuel"
                label="Fuel Consumption"
                placeholder="Fuel Consumption in miles/Litre"
                component={FieldInput}
            />
            <Field
                type="number"
                name="annualMaintainence"
                label="Annual maintainence"
                placeholder="Annual Maintainence in $"
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

    if (!values.model) {
        errors.model = 'Required';
    }

    if (!values.make) {
        errors.make = 'Required';
    }

    if (!values.version) {
        errors.version = 'Required';
    }

    if (!values.year) {
        errors.year = 'Required';
    }

    if (!values.price) {
        errors.price = 'Required';
    }

    if (!values.fuel) {
        errors.fuel = 'Required';
    }

    if (!values.annualMaintainence) {
        errors.annualMaintainence = 'Required';
    }

    return errors;
};



CarForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
};



export default reduxForm({
    form: 'CarForm',
    validate
})(CarForm);
