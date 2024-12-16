<<<<<<< HEAD
import React, { useContext } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { ThemeContext } from '../../../context/themeContext';
=======
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { ThemeContext } from "../../../context/themeContext";
>>>>>>> 32d77f7c823ec37ea4b7b234360e60b68bdccf83

const chartSetting = {
    yAxis: [
        {
            disableTicks: true,
            disableLine: true,
            tickFontSize: 10,
        },
    ],
    grid: {
        horizontal: true,
    },
    sx: {
        ["& .MuiChartsAxis-left .MuiChartsAxis-tickLabel"]: {
            fill: "#9F9F9F",
        },
        ["& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel"]: {
            fill: "#9F9F9F",
        },
    },
};

export default function BarsDataset(props) {
    const { desc } = props;

<<<<<<< HEAD
    const { theme } = useContext(ThemeContext);
=======
    const {theme} = useContext(ThemeContext);
>>>>>>> 32d77f7c823ec37ea4b7b234360e60b68bdccf83

    desc.series[1].color = theme.color;

    return (
        <BarChart
            dataset={desc.data}
            xAxis={[{ scaleType: 'band', dataKey: desc.dataKey, categoryGapRatio: 0.5 }]}
            series={desc.series}
            slotProps={{
                legend: {
                    direction: "row",
                    position: { vertical: "top", horizontal: "right" }
                }
            }}
            {...chartSetting}
        />
    );
}