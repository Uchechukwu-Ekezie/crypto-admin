const chart = document.querySelector("#chart").getContext('2d');

new Chart(chart, {
    type:'line',
    data: {
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],

        datasets: [
            {
                label: 'BTC',
                data: [22343, 23456, 23654, 12345, 99585, 56566,
                45434, 65432, 45654, 45321],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 26000, 46000, 32000, 32444,
                4545, 6544, 25654, 65321],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})