import { TextFieldsTwoTone } from "@mui/icons-material";
import { Table, TableCell, TableHead, TextField, TableRow, TableBody } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Transactions() {

    // **********To be paratemrized but Hardcoded to begin with*******
//const apiKey = "1NaE8soiAa3kfx5ohyyvgeJALGAARGDy";
const postUrl = "https://prod.emea.api.fiservapps.com/sandbox/exp/v1/trasnactions";
const fromDate = "2022-07-07"
const toDate = "2022-07-10"
//const url = postUrl + '?postedAfter=' + fromDate + '&postedBefore=' + toDate + '&limit=20&offset=0'
//console.log(url + 'abcd');
const url = "https://prod.emea.api.fiservapps.com/sandbox/exp/v1/transactions?postedAfter=2022-07-10&postedBefore=2022-07-10&limit=10&offset=0";

//***********The Dev portal js code */******************************** */
const [apiKey, setapiKey] = useState('1NaE8soiAa3kfx5ohyyvgeJALGAARGDy');


const [transactions, setTransactions] = useState([]);

//console.log('AAAAYYYY'+process.env.REACT_APP_ABC_DEF);

// var res = transactions.map(r => r.transaction.financial.amounts.transacted) //.reduce((acc, amount) => (acc + amount));
// var temp = JSON.parse(transactions[0]);
// var Temp = JSON.stringify(transactions);
// //console.log(Temp);
// var processedTemp = Temp.map(r => r.transaction.financial.amounts.transacted)
// console.log(processedTemp);
// var res = transactions.reduce(({transacted: a}, {tramsacted: b})=> a+b)
// console.log(temp.amounts);
//********Reactive API hits based on changes in parameters apiKey or url */
useEffect(() => {
    const options = {
    method: 'GET',
    headers: {Accept: 'application/json', 'Api-Key': apiKey}
  };
  

    fetch(url, options)
    
        .then(response => {
            if (response.ok) {
                //data = console.log(data);
                //var res = transactions.map(r => r.).reduce((acc, amount) => acc + amount);
                //console.log(transactions);
                return response.json();

            }else{
                return Promise.reject(response.json());
            }
            
        })
        .then(response => setTransactions(response))
        .catch(err => console.error(err));
}, [apiKey, url]);

//**************************************** */

    // const apiSession = {apiKey}
    // const handleapiKey = event => {
    // setapiKey(event.target.value);

    // console.log(event.target.value)


    return (
        <React.Fragment>
            <TextField id = "apiKey" name ="apiKey" type = "text" label = "API Key"
            value = {apiKey} onChange={(e) => setapiKey(e.target.value)} />



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
                    {transactions.map((transaction) => (
                    <TableRow>
                        <TableCell>{transaction.authorised}</TableCell>
                        <TableCell>{transaction.status}</TableCell>
                        <TableCell>{transaction.channel}</TableCell>
                        <TableCell>{transaction.meta.merchantTransactionReference}</TableCell>
                        <TableCell>{transaction.merchant.countryCode}</TableCell>
                        <TableCell>{transaction.paymentInstrument.category}</TableCell>
                        <TableCell>{transaction.paymentInstrument.brand}</TableCell>
                        <TableCell>{transaction.financial.amounts.transacted}</TableCell>
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