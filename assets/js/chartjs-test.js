const totalSpentFull = document.getElementById('totalSpentFull'),
    totalSpentNormal = document.getElementById('totalSpentNormal'),
    totalSpentKEMOFWF = document.getElementById('totalSpentKEMOFWF');


// Total Spent Full chart
new Chart(totalSpentFull, {

    plugins: [ChartDataLabels],
    type: 'bar',
    data: {
        labels: ['USD', 'GBP', 'EUR', 'Articles'],
        datasets: [
            {
                label: 'Hybrid Open Access',
                data: [223567, 63567, 687088, null],
                yAxisID: 'y',
                backgroundColor: '#3e39ff',
            },
            {
                label: 'Gold Open Access',
                data: [123567, 223567, 23567, null],
                yAxisID: 'y',
                backgroundColor: '#00b3e3',
            },
            {
                label: 'Hybrid Open Access',
                data: [null, null, null, 678],
                yAxisID: 'y1',
                backgroundColor: '#a02d8b',
            },
            {
                label: 'Gold Open Access',
                data: [null, null, null, 345],
                yAxisID: 'y1',
                backgroundColor: '#e815c0',
            }
        ]
    },
    options: {
        
             spanGaps: true,
        responsive: true,
        layout: {
            padding: 20
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                backgroundColor: 'rgb(255 255 255 / 50%)',
                color: '#000',
                font: {
                    size: 16,
                    weight: 'bold'
                }
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                title: {
                    display: true,
                    text: 'Currency'
                },
                stacked: true,
                grid: {
                    color: 'rgb(0 179 227 / 25%)',
                }
            },
            y1: {
                title: {
                    display: true,
                    text: 'Article units'
                },
                stacked: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                    color: 'rgb(232 21 192 / 25%)',
                }

            }
        }
    }
});


// Total Spent Normal chart
new Chart(totalSpentNormal, {

    plugins: [ChartDataLabels],
    type: 'bar',
    data: {
        labels: ['Articles'],
        datasets: [
            {
                label: 'Hybrid Open Access',
                data: [678],
                backgroundColor: '#a02d8b',
            }
        ]
    },
    options: {
        responsive: true,
        layout: {
            padding: 20
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                backgroundColor: 'rgb(255 255 255 / 50%)',
                color: '#000',
                font: {
                    size: 16,
                    weight: 'bold'
                }
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                title: {
                    display: true,
                    text: 'No. Articles'
                },
                stacked: true,
                grid: {
                    color: 'rgb(0 179 227 / 25%)',
                }
            }
        }
    }
});

// Total Spent Normal chart
new Chart(totalSpentKEMOFWF, {

    plugins: [ChartDataLabels],
    type: 'bar',
    data: {
        labels: ['USD'],
        datasets: [
            {
                label: 'Hybrid Open Access',
                data: [678876],
                backgroundColor: '#3e39ff',
            }
        ]
    },
    options: {
        responsive: true,
        layout: {
            padding: 20
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                backgroundColor: 'rgb(255 255 255 / 50%)',
                color: '#000',
                font: {
                    size: 16,
                    weight: 'bold'
                }
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                title: {
                    display: true,
                    text: 'No. Articles'
                },
                stacked: true,
                grid: {
                    color: 'rgb(0 179 227 / 25%)',
                }
            }
        }
    }
});