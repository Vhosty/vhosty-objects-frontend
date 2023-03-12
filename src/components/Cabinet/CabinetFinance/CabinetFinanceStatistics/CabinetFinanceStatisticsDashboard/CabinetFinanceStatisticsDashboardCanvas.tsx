import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import {Line} from "react-chartjs-2";
import {faker} from "@faker-js/faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options: any = {
    responsive: true,
    plugins: {
        tooltip: {
            displayColors: false,
            backgroundColor: "#FFFFFF",
            bodyColor: "#253021",
            borderWidth: 1,
            borderColor: "#C6C9C6",
            titleColor: "#676F64",
            padding: {
                left: 20,
                right: 20,
                top: 12,
                bottom: 12,
            },
            titleFont: {
                weight: "regular",
                family: "Ubuntu, sans-serif",
            },
            bodyFont: {
                size: 15,
                family: "Ubuntu, sans-serif",
                weight: 500,
            },
            titleAlign: "center",
            bodyAlign: "center",
            yAlign: "bottom",
            cornerRadius: 8,
            caretPadding: 10,

            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.5)",

            callbacks: {
                title: () => "9 авг, 2022",
                label: () => ["49,492,10 ₽", "4,492,10 ₽"],
            },
        },
        legend: {
            display: false,
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                font: {
                    family: "Ubuntu, sans-serif",
                    size: 14,
                },
                color: "#000000",
                padding: 10,
            },
        },
        y: {
            min: 0,
            max: 500000,
            ticks: {
                font: {
                    family: "Ubuntu, sans-serif",
                    size: 14,
                },
                color: "#000000",
                padding: 10,
            },
        },
    },
};

const labels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
];

export const data = {
    labels,
    datasets: [
        {
            borderWidth: 2,
            label: "Валовый доход",
            data: labels.map(() =>
                faker.datatype.number({min: 150000, max: 450000})
            ),
            borderColor: "#00A0A0",
            backgroundColor: "#00A0A0",
            pointBorderColor: "#FFFFFF",
            pointBorderWidth: 1,
            pointRadius: 3,
            lineTension: 0.8,
        },
        {
            borderWidth: 2,
            label: "Комиссия",
            data: labels.map(() =>
                faker.datatype.number({min: 150000, max: 400000})
            ),
            borderColor: "#76DD87",
            backgroundColor: "#76DD87",
            pointBorderColor: "#FFFFFF",
            pointBorderWidth: 1,
            pointRadius: 3,
            lineTension: 0.8,
        },
    ],
};

const CabinetFinanceStatisticsDashboardCanvas: React.FC = () => {
    return (
        <div className="cabinet-block-finance-statistics-dashboard-canvas">
            <Line options={options} data={data} />
        </div>
    );
};

export default CabinetFinanceStatisticsDashboardCanvas;
