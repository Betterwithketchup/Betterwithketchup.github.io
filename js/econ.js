var inputs = [];
var ctx = document.getElementById("chart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Money over time',
            data:[{x: 0, y: 20}, 
    	   		{x: 10, y: 1},
    	   		{x: 20, y: 2},
    	   		{x: 25, y: 15},
    	   		],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
        	xAxes: [{
        		scaleLabel:{
        		display:true,
        		labelString:'Time'},
        		type: 'linear'
      		}],
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
        	}]
        }
    }
});

var ctx = document.getElementById("chart2");
var myChart2 = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Money over time',
            data:[{x: 0, y: 2}, 
    	   		{x: 10, y: 10},
    	   		{x: 20, y: 20},
    	   		{x: 25, y: 5},
    	   		],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
        	xAxes: [{
        		scaleLabel:{
        		display:true,
        		labelString:'Time'},
        		type: 'linear'
      		}],
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
        	}]
        }
    }
});
var sliderFormat = document.getElementById('iAmount');
noUiSlider.create(sliderFormat, {
	start: [ 0 ],
	step: 10,
	range: {
		'min': [ 20 ],
		'max': [ 20000 ]
	},
});
var sliderFormat = document.getElementById('ageStart');
noUiSlider.create(sliderFormat, {
	start: [ 20 ],
	step: 1,
	range: {
		'min': [ 20 ],
		'max': [ 65 ]
	},
});
var sliderFormat = document.getElementById('returns');
noUiSlider.create(sliderFormat, {
	start: [ 0 ],
	step: 1,
	range: {
		'min': [ 0 ],
		'max': [ 10 ]
	},
});
var sliderFormat = document.getElementById('rate');
noUiSlider.create(sliderFormat, {
	start: [ 0 ],
	step: 1,
	range: {
		'min': [ 0 ],
		'max': [ 17 ]
	},
});
var sliderFormat = document.getElementById('ageEnd');
noUiSlider.create(sliderFormat, {
	start: [ 65 ],
	step: 1,
	range: {
		'min': [ 65 ],
		'max': [ 90 ]
	},
});
var sliderFormat = document.getElementById('tax');
noUiSlider.create(sliderFormat, {
	start: [ 0 ],
	step: 1,
	range: {
		'min': [ 0 ],
		'max': [ 40 ]
	},
});
function updater(inputFormat,sliderFormat) {
	sliderFormat.noUiSlider.on('update', function( values, handle ) {
	inputFormat.value = values[handle];
	});
	inputFormat.addEventListener('change', function(){
		sliderFormat.noUiSlider.set(this.value);
	});
}
$('#submitter').on('click',function(event){
	event.preventDefault();
	inputs = []
	var $amount2 = 0;
	var $amount = $("#iAmount").val();
	var $agestart = $("#ageStart").val();
	var $returns = $("#returns").val();
	var $interest = $("#rate").val();
	var $ageend = $("#ageEnd").val();
	var $tax = $("#tax").val();
	//var chart = myChart;
	//console.log($interest/12)
	for (var i = 1; i <= ($ageend-$agestart); i++) {
		inputs.push({x:i,y:(($amount)*(1+($interest/12))^(i*12))})

	}
	console.log(inputs)
	//chart.update();
	myChart.data.datasets[0].data=inputs;
    myChart.update();
	
})

$(document).ready(function(){
	console.log("Ping")
})
