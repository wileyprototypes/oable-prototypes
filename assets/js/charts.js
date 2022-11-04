const data = {
    labels: ["January", "February", "March", "April",
        "May", "June", "July", "August", "September", "October", "November", "December"
    ],
    datasets: [
        {
            name: "New requests", type: "line",
            values: [25, 40, 30, 35, 8, 52, 17, 4]
        },
        {
            name: "Requests paid", type: "line",
            values: [16, 50, 10, 15, 18, 32, 27, 14]
        }
    ]
}

const chart = new frappe.Chart("#chart", {  // or a DOM element,
                                            // new Chart() in case of ES6 module with above usage
    // title: "Request Throughput" ,
    data: data,
    type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
    height: 250,
    colors: ['#2185d0', '#743ee2']
})