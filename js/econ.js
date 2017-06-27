var inputs = [];
$(document).ready(function(){
	console.log("Ping")
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
	var myChart = new Chart(ctx, {
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
	$('#submitter').on('click',function(event){
	event.preventDefault();
	var $amount2 = 0;
	var $amount = $("#iAmount").val();
	var $agestart = $("#ageStart").val();
	var $returns = $("#returns").val();
	var $interest = $("#rate").val();
	var $ageend = $("#ageEnd").val();
	var $tax = $("#tax").val();
	for (var i = $ageend-$agestart; i >= 0; i--) {
		$amount2 = (($amount)*(1+($interest/1200))^(12))
		inputs.push($amount2)
		$amount = $amount2

	}
	console.log(inputs)
	})

})
