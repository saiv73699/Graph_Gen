document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const critical = parseInt(document.getElementById('critical').value);
    const high = parseInt(document.getElementById('high').value);
    const medium = parseInt(document.getElementById('medium').value);
    const low = parseInt(document.getElementById('low').value);
    const informational = parseInt(document.getElementById('informational').value);

    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar', 
        data: {
            labels: ['Critical', 'High', 'Medium', 'Low', 'Informational'],
            datasets: [{
                label: 'Number of Vulnerabilities',
                data: [critical, high, medium, low, informational],
                backgroundColor: [
                    'brown',
                    'red',
                    'yellow',
                    'green',
                    'skyblue'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Vulnerabilities'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Severity'
                    }
                }
            },
            elements: {
                bar: {
                    borderRadius: 20, // Makes the bars more spherical
                    borderSkipped: false
                }
            }
        }
    });
});





