import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as carAction from '../../action/CarAction';
import CarList from './CarList';



export class SearchCarListContainerByCriteria extends React.Component {

    constructor() {
        super();

        this.handleAddCar = this.handleAddCar.bind(this);
        this.handleSeachByMileage = this.handleSeachByMileage.bind(this);
    }


    componentDidMount() {
       
    }

    handleAddCar() {
        this.props.history.push('/addCar');
    }

    handleSeachByMileage() {
        this.props.history.push('/carsByMileage');
    }

    render() {
        const { cars } = this.props;

        if (!cars) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <h1>Cars</h1>                        
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <div className="btn-group" role="group">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.handleAddCar}
                            >
                                <i className="fa fa-plus" aria-hidden="true"/> New
                            </button>

                            <button
                                type="button"
                                className="btn btn-warning ml-2"
                                onClick={this.handleSeachByMileage}
                            >
                                <i className="fa fa-plus" aria-hidden="true"/> Search By Mileage
                            </button>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <CarList cars={cars} />
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    cars: state.carsReducer.cars
});



const mapDispatchToProps = dispatch => ({
    action: bindActionCreators(carAction, dispatch)

});



SearchCarListContainerByCriteria.propTypes = {
    cars: PropTypes.array,
    action: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(SearchCarListContainerByCriteria);
