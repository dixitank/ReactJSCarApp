import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as carAction from '../../action/CarAction';
import CarForm from './CarForm'; 


export class AddCarContainer extends React.Component {


    constructor() {
        super();
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }



    componentDidMount() {
        
    }

    handleSave(values) {
        const car = {
            model: values.model,
            brand: values.brand,
            version: values.version,
            yearOfRelease: parseInt(values.year),
            price: parseFloat(values.price),
            fuelConsumption: parseFloat(values.fuel),
            annualMaintenanceCost: parseFloat(values.annualMaintainence)
        };

        this.props.action.saveCarAction(car)
            .then(() => {
                toastr.success('Car saved');
                this.props.history.push('/cars');
            }).catch(error => {
                toastr.error(error);
            });
    }



    handleCancel(event) {
        event.preventDefault();
        this.props.history.replace('/cars');
    }



    render() {
        const { initialValues } = this.props;
        const heading = 'Add Car details';

        return (
            <div className="container">
                <CarForm
                    heading={heading}
                    handleSave={this.handleSave}
                    handleCancel={this.handleCancel}
                    initialValues={this.props.initialValues}
                />
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    return {}
};



const mapDispatchToProps = dispatch => ({
    action: bindActionCreators({ ...carAction }, dispatch)
});



AddCarContainer.propTypes = {
    action: PropTypes.object.isRequired,
    history: PropTypes.object,
    initialValues: PropTypes.object,
    match: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCarContainer);
