import Table from 'react-bootstrap/Table';
import React, { useContext } from "react";
import { Context } from "../context";

function SmallExample(props) {
  /*const { value, setValue } = React.useContext(Context);
  const [mainLift, setMainLift] = value.value;
  const [accessoryLift, setAccessory_lift] = value.value2;
  console.log({value});
  //console.log({accessoryLift});*/
  
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Lift</th>
          <th>Name and Variation</th>
          <th>Sets and Repetitions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Main Lift</td>
          <td>{props.mainLift}</td>
          <td>1 Rep Max</td>
        </tr>
        <tr>
          <td>Accesory Lift</td>
          <td>{props.accessoryOne}</td>
          <td></td>
        </tr>
        <tr>
          <td>Accesory Lift</td>
          <td>{props.accessoryTwo}</td>
          <td></td>
        </tr>
        <tr>
        <td>Accesory Lift</td>
          <td>{props.accessoryThree}</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default SmallExample;