import React, { useEffect, useState } from 'react';
import './StatisticPage.css';
import Chart from "react-apexcharts";


const dataMock = {
    options: {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        }
    },
    series: [
        {
            name: "2022",
            data: [4,3,3.5,4,5,4.5,4,4,3.5,3.5,4.5, 5]
        },
        {
            name: "2021",
            data: [3.5,4,5,4.5,4,4,3.5,3.5,4.5, 5,4,3]
        }
    ]
};

const StatisticPage = () => {
    const [state, setState] = useState({
        options: {
            chart: {
            },
            xaxis: {
                categories: []
            }
        },
        series: []
    });

    useEffect(() => {
        setState(dataMock)
    }, []);

    return (
        <div className='statistic'>
            { state !== {} ? <Chart
              options={state.options}
              series={state.series}
              type="line"
              width='100%'
              height='100%'
            /> : <>Loading</>}
        </div>
    );
}

export default StatisticPage;
