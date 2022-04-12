import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './header.js';
// import GenerateTable from './generateTable';
function App() {
  const [first_column, first] = useState(0);
  const [second_column,second] = useState(1)
  const [three_column,three] = useState(2)
  const [fourth_column,four] = useState(3)
  const [words,storeWords]=useState([])
  const[tabledata,storeTable]=useState("")
  
  const splitWords = (event) => {
    let data = event.split(" ");
    data=data.sort();
    storeWords(data)
    console.log(data);
  };

  // const Build_table = () => {

  //     return (
  //       <div className="Data source">
  //       <table>
  //           {digits.map((key) => {
  //             return (
  //               <tr key={key}>
  //                 <td>{first[key]?first[key]:""}</td>
  //                 <td>{second[key]?second[key]:""}</td>
  //                 <td>{three[key]?three[key]:""}</td>
  //                 <td>{four[key]?four[key]:""}</td>
  //               </tr>
  //             )
  //           }
  //         )};
  //         </table>
  //       </div>
  //       )};

  const generateTable=()=>{
    let data=words
    let total_length=data.length;
    let dividing_factor=total_length/4.0;
    let four_divide=Math.ceil(dividing_factor);
    let delta=Math.round(dividing_factor)



    let first_column=data.slice(0,four_divide);
    first(first_column);
    console.log(first_column);

    let second_length=Math.ceil(dividing_factor)+delta
    let second_column=data.slice(four_divide,second_length);
    total_length-=delta
    delta=Math.round(total_length/3.0)
    second(second_column);
    console.log(second_column);

    let third_length=second_length+delta;
    let third_column=data.slice(second_length,third_length);
    total_length-=delta
    delta=Math.round(total_length/2.0)
    three(third_column);
    console.log(third_column);

    let fourth_length=third_length+delta;
    let fourth_column=data.slice(third_length,third_length+total_length);
    console.log(fourth_column);
    four(fourth_column);

    console.log(first_column,second_column,third_column,fourth_column);

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
    console.log(rows);
    storeTable(rows);
  }

  let digits= Array(first_column.length).fill(1).map((x, y) => x + y);
  digits.splice(0,0,0)

  if(words.length>0){
    return (
      <div className="App center" style={{"alignContent":"center", "alignItems":"center", "textAlign":"center"}}>
        < Header />
        <br />
        <br />
        <br />
        <input type="text" name="words" onChange={(e)=>{splitWords(e.target.value)}}  style={{"width":"85%"}} />
        <br />
        <br />
        <button onClick={() => generateTable()}>Arrange</button>
        <button onClick={()=>{storeWords("");window.location.reload(false);}}>Reset</button>
        <br />
        <br />
         <table className='table-bordered center' style={{ "margin": "auto","border":"2em","width":"75%","borderColor":"black",alignContent:"center", alignItems:"center", textAlign:"center", }}>
         <thead></thead>
         <tbody id="Tablecontent" style={{"border":"0.15em","borderColor":"black",alignContent:"center", alignItems:"center", textAlign:"center", "borderStyle":"solid"}}>
         {digits.map((element, index) => ( 
                <tr key={index}>  
                  <td>{first_column[element]}</td>  
                  <td>{second_column[element]}</td>  
                  <td>{three_column[element]}</td>
                  <td>{fourth_column[element]}</td>  
                </tr>  
              ))} 
  
          
          </tbody>
        <tfoot></tfoot>
        </table>
        </div>
    );
  }else{
    return (
      <div className="App center" style={{"alignContent":"center", "alignItems":"center", "textAlign":"center"}}>
      < Header />
      <br />
      <br />
      <br />
      <input type="text" name="words" onChange={(e)=>{splitWords(e.target.value)}}  style={{"width":"85%"}} />
      <br />
      <br />
      <button onClick={() => generateTable()}>Arrange</button>
      <button onClick={()=>{storeWords("");window.location.reload(false);}}>Reset</button>
      <br />
      <br />
      </div>
  );  
  }
 
}

export default App;
