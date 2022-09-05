import React, { useState } from 'react';
import Table from './common/table.component';

function StudentList (props) { 
    const [students, setStudents] = useState(
        [
            {
                name: "habib",
                roll: 15,
                imgPath: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,12,128,176_AL_.jpg",
                father_name: "xyz"
            },
            {
                name: "iqbal",
                roll: 0,
                imgPath: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,12,128,176_AL_.jpg"
            }
        ]
    );
        
    const columns = [ 
        { label: "Name", path: "name", content: (item, path) => <td> {item[path]} </td> }, 
        { label: "Roll", path: "roll", content: (item, path) => <td> {item[path]} </td> }, 
        { label: "Photo", path: "imgPath", content: (item, path) => <td> <img src={item[path]} /></td> },
        { label: "Father's name", path: "father_name", content: (item, path) => <td> <button> {item[path]}</button></td> }
    ];

    return (
        <Table 
            items={students}
            columns={columns}
        />
    );
}
 
export default StudentList;