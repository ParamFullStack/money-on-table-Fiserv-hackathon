
import tempdata from './data/Students.json';
import dispdata from './data/Disputes.json';
import refdata from './data/TransactionsData.json';
import { Table, TableCell, TableHead, TextField, TableRow, TableBody } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';




export default function Process() {

//var temp=tempdata.map(r=>r.age).reduce((acc, amount) => (+acc + +amount));
//console.log(temp);
var disputeData = dispdata.map(p=>p.total).reduce((acc, amount) => (+acc + +amount));
console.log(disputeData);
var TransactionsData = refdata.map(o=>o.transacted).reduce((acc, amount) => (+acc + +amount));
console.log(TransactionsData);
// var res = transactions.map(r => r.transaction.financial.amounts.transacted) //.reduce((acc, amount) => (acc + amount));
console.log(refdata.transacted);

return (
    <React.Fragment>
     <div>   
<h3>From Transactionlist </h3>
     </div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>DATE</TableCell>
                    <TableCell>STATUS</TableCell>
                    <TableCell>CHANNEL</TableCell>
                    <TableCell>ARN</TableCell>
                    <TableCell>COUNTRY</TableCell>
                    <TableCell>PAYMENT MODE</TableCell>
                    <TableCell>SCHEME</TableCell>
                    <TableCell>AMOUNT</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {dispdata.map((dispdata) => (
                <TableRow>
                    <TableCell>{dispdata.transactionDate}</TableCell>
                    <TableCell>{dispdata.code}</TableCell>
                    <TableCell>{dispdata.description}</TableCell>
                    <TableCell>{dispdata.arn}</TableCell>
                    <TableCell>{dispdata.currency}</TableCell>
                    <TableCell>{dispdata.authCode}</TableCell>
                    <TableCell>{dispdata.schemecode}</TableCell>
                    <TableCell>{dispdata.total}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>



        
        {/* <label>Api Key: <TextField id = "apiKey" name ="apiKey" type = "text" 
        value = {apiKey} onChange={(e) => setapiKey(e.target.value)} /></label> */}
        
        {/* <div>{JSON.stringify(transactions)}</div> */}

        {/* <TextField id = "apiKey" name ="apiKey" type = "text" label = "API Key"
        value = {apiKey} onChange={(e) => setapiKey(e.target.value)} /> */}

<h3>From caselist disputes Api </h3>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>DATE</TableCell>
                    <TableCell>STATUS</TableCell>
                    <TableCell>CHANNEL</TableCell>
                    <TableCell>ARN</TableCell>
                    <TableCell>COUNTRY</TableCell>
                    <TableCell>PAYMENT MODE</TableCell>
                    <TableCell>SCHEME</TableCell>
                    <TableCell>AMOUNT</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {refdata.map((refdata) => (
                <TableRow>
                    <TableCell>{refdata.authorised}</TableCell>
                    <TableCell>{refdata.status}</TableCell>
                    <TableCell>{refdata.channel}</TableCell>
                    <TableCell>{refdata.merchantTransactionReference}</TableCell>
                    <TableCell>{refdata.countryCode}</TableCell>
                    <TableCell>{refdata.category}</TableCell>
                    <TableCell>{refdata.brand}</TableCell>
                    <TableCell>{refdata.transacted}</TableCell>
                </TableRow>	
                ))}
            </TableBody>
        </Table>
        {/* <label>Api Key: <TextField id = "apiKey" name ="apiKey" type = "text" 
        value = {apiKey} onChange={(e) => setapiKey(e.target.value)} /></label> */}
        
        {/* <div>{JSON.stringify(transactions)}</div> */}
   </React.Fragment>
);




}

