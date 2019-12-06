
function plot(div_id, datos, indice) {
    
$(div_id).CanvasJSChart({   
        theme: "light1",
	title: { 
		text: indice 
	}, 
	axisY: { 
		includeZero: false, 
		prefix: "$", 
		title: "Valor" 
	}, 
	axisX: { 
		intervalType: "day", 
		interval: 1, 
		valueFormatString: "DD/MM" 
	},
	toolTip: {
		content: "{x} <br/> <strong> Valor en CLP :</strong> <br/> Prom: {y[0]}, Valor: {y[3]} <br/> Menor: {y[2]}, Mayor: {y[1]}"
	},
	data: [ 
	{ 
		type: "ohlc", 
		dataPoints: datos
                
	} 
	] 
}); 
} 


