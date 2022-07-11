import React from 'react';
import ReactDOM from 'react-dom/client';
import Transactions from './Components/Transactions';
import MoneyOnTable from './Components/MoneyOnTable';
import MOT from './Components/Debug';
import Process from './Components/Process';
// import { Button } from '@mui/material';
import styled from 'styled-components';
import background from "./MoneyOnTable.png";

const Button = styled.button
`background-color: #3949ab;
color: White;
padding: 10px 50px;
Margin: 50px 500px;
border-radius: 5px;
outline: 0;
text-transform: uppercase;
cursor: pointer;
box-shadow: 0px 2px 2px lightgray; 
&:hover {
  background-color: #388e3c;
  transition: ease-background-color 250ms; 
}
`

function NavigateToMOTT(){
  alert('You are Navigating to Visual dashboard built with Mock data!  Please use F5 / Refresh to get back to Home page');
  root.render(
    <React.StrictMode>
      <div>
        <MOT />
      </div>
    </React.StrictMode>
  )
}

function NavigateToTRANS(){
  alert('You are Navigating to the Transactional Data from the Sandbox API!  Please use F5 / Refresh to get back to Home page ');
  root.render(
    <React.StrictMode>
      <div>
        <Transactions />
      </div>
    </React.StrictMode>
  )
}

function NavigateToMOCK(){
  alert('You are Navigating to the Mocked Data Grid as this was a workaround for Disputes matching with ARN!  Please use F5 / Refresh to get back to Home page ');
  root.render(
    <React.StrictMode>
      <div>
        <Process />
      </div>
    </React.StrictMode>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<div>
    <Button onClick={NavigateToMOTT}>
      MONEY ON TABLE
    </Button>
    <Button onClick={NavigateToTRANS}>
      TRANSACTION DATA
    </Button>
    <Button onClick={NavigateToMOCK}>
      MOCKED TABLE GRID
    </Button>

    {/* style={{ backgroundImage: `url(${background})` }} */}
</div>
  </React.StrictMode>
);