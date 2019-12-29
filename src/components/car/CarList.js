import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



const getCaret = direction => {
    if (direction === 'asc') {
        return (
            <span> <i className="fa fa-sort-asc" aria-hidden="true"/></span>
        );
    }

    if (direction === 'desc') {
        return (
            <span> <i className="fa fa-sort-desc" aria-hidden="true"/></span>
        );
    }

    return (
        <span> <i className="fa fa-sort" aria-hidden="true" /></span>
    );
};



const titleFormatter = (cell, row) => {
  return `<a href=${row.watchHref} target="_blank">${cell}</a>`;
};



class CarList extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            sortIndicator: true,
            noDataText: 'No data'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            clickToSelect: true, 
            hideSelectColumn: true            
        };
    }



    render() {
        let years = [...new Set(this.props.cars.map(car=> car.yearOfRelease))];
        return (
            <BootstrapTable data={this.props.cars}  selectRow={this.selectRowProp}  options={this.options} bordered={false} striped hover condensed>
                <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>
                
                <TableHeaderColumn 
                    dataField="model"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Model
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="brand"
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', condition: 'eq', delay: 0 }}
                    columnTitle
                >
                    Brand
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="version"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Version
                </TableHeaderColumn>  

                <TableHeaderColumn 
                    dataField="yearOfRelease"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                    filter={{type: 'NumberFilter',options: years}}
                >
                    Year Of Release
                </TableHeaderColumn>  
                
                <TableHeaderColumn 
                    dataField="price"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    price
                </TableHeaderColumn>    
                
                <TableHeaderColumn 
                    dataField="fuelConsumption"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Fuel Consumption
                </TableHeaderColumn> 
                
                <TableHeaderColumn 
                    dataField="annualMaintenanceCost"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Annual Maintainence Cost
                </TableHeaderColumn>                               
            </BootstrapTable>
        );
    }

}



CarList.propTypes = {
    cars: PropTypes.array.isRequired
};



export default CarList;
