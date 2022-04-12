import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function GenerateTable(first_column,second_column,three_column,fourth_column){
    let digits= Array(first_column.length).fill(1).map((x, y) => x + y);
    digits.splice(0,0,0)
    let rows=(digits.map((element, index) => (  
      <tr key={index}>  
        <td>{first_column[element]}</td>  
        <td>{second_column[element]}</td>  
        <td>{three_column[element]}</td>
        <td>{fourth_column[element]}</td>  
      </tr>  
    )));
    document.getElementById("Tablecontent").appendChild(rows);
}

export default GenerateTable;