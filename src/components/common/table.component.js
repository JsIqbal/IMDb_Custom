import React, { Component } from 'react';
import TableHeader from './table.header.component';
import TableBody from './table.body.component';

/*
    1. Stateless functional component : when we know that no state is needed.
*/

function Table(props) {
    const { items, columns } = props;

    return (
        <table className="table">
            <TableHeader columns={columns} />
            <TableBody items={items} columns={columns} />
        </table>
    );
}
 
export default Table;