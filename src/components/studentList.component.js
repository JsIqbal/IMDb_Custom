import React, { Component } from 'react';
import Table from './common/table.component';

class StudentList extends Component {
    state = { 
        data: [
            {
                name: "habib",
                roll: 15,
                imgPath: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,12,128,176_AL_.jpg"
            },
            {
                name: "iqbal",
                roll: 0,
                imgPath: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,12,128,176_AL_.jpg"
            }
        ]
    }
    columns = [ 
        { label: "name", path: "name", content: (item, path) => <td> {item[path]} </td> }, 
        { label: "roll", path: "roll", content: (item, path) => <td> {item[path]} </td> }, 
        { label: "imgPath", path: "imgPath", content: (item, path) => <td> <img src={item[path]} /></td> } 
    ];

    render() { 
        return (
            <Table 
                items={this.state.data}
                columns={this.columns}
            />
        );
    }
}
 
export default StudentList;