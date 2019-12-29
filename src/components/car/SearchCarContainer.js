import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as carAction from '../../action/CarAction';
import CarSearchForm from './CarSearchForm'; 


export class SearchCarContainer extends React.Component {


    constructor() {
        super();
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }



    componentDidMount() {

    }



    handleSave(values) {
        let distanceToTravel = parseInt(values.distance);
        let fuelPricePerLitre = parseFloat(values.cost);

        this.props.action.getCarsByMileageAction(distanceToTravel, fuelPricePerLitre)
            .then(() => {
                this.props.history.push('/viewCarsByCustomSearch');
            }).catch(error => {
                toastr.error(error);
            });
    }



    handleCancel(event) {
        event.preventDefault();
        this.props.history.replace('/carsByMileage');
    }



    render() {
        const { initialValues } = this.props;
        const heading = initialValues && initialValues.id ? 'Edit' : 'Add';

        return (
            <div className="container">
                 <CarSearchForm
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



SearchCarContainer.propTypes = {
    action: PropTypes.object.isRequired,
    history: PropTypes.object,
    initialValues: PropTypes.object,
    match: PropTypes.object.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(SearchCarContainer);
