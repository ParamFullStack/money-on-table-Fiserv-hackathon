import React from 'react'
import {Line, Pie,Radar} from 'react-chartjs-2'
import {Bar} from "react-chartjs-2";

// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'

export default function MOT() {
// const BarChart = () => {
  return (
    <div>
      
      <Radar
        data={{
          labels: ['Customer Experience', 'Techonology', 'Merchandise / Product', 'others'],
          datasets: [
            {
              label: 'Amount in GBP',
              data: [2000, 2200, 2400, 2500],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',

              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',

              ],
              borderWidth: 3,


            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        title='Money Left On Table'
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />


    </div>
  )
}

// export default BarChart