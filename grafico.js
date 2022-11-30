// Get the HTML canvas by its id 
plots = document.getElementById("plots");
// Example datasets for X and Y-axes 
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]; //Stays on the X-axis 
var traffic = [65, 59, 80, 81, 56, 55, 60] //Stays on the Y-axis 
// Create an instance of Chart object:
new Chart(plots, {
    type: 'line', //Declare the chart type 
    data: {
        labels: months, //X-axis data 
        datasets: [{
            data: traffic, //Y-axis data 
            backgroundColor: '#5e440f',
            borderColor: 'white',
            fill: false, //Fills the curve under the line with the babckground color. It's true by default 
        }]
    },
});

// 


// Get the HTML canvas by its id 
plots = document.getElementById("plots2");
// Example datasets for X and Y-axes 
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]; //Stays on the X-axis 
var traffic = [65, 59, 80, 81, 56, 55, 60] //Stays on the Y-axis 
// Create an instance of Chart object:
new Chart(plots, {
    type: 'bar', //Declare the chart type 
    data: {
        labels: months, //X-axis data 
        datasets: [{
            data: traffic, //Y-axis data 
            //Color of each bar:
            backgroundColor: [
                "rgba(196, 190, 183)",
                "rgba(21, 227, 235)",
                "rgba(7, 150, 245)",
                "rgba(240, 5, 252)",
                "rgba(252, 5, 79)",
                "rgb(0,12,255)",
                "rgb(17, 252, 5)"],
        }]
    },
    options: {
        legend: { display: false }, //Remove the legend box by setting it to false. It's true by default. 
    }
});




//    polar

plots = document.getElementById("plots3");
// Example datasets for X and Y-axes 
var months = []; //Stays on the X-axis 
var traffic = [75]; //Stays on the Y-axis 
// Create an instance of Chart object:
new Chart(plots, {
    type: 'doughnut', //Declare the chart type 
    data: {
        labels: months, //X-axis data 
        datasets: [{
            data: traffic, //Y-axis data 
            backgroundColor: 'rgb(65, 65, 206)',
            borderColor: 'white',
            fill: false, //Fills the curve under the line with the babckground color. It's true by default 
        }]
    },
});