import { Component, AfterViewInit } from '@angular/core';
declare let google: any;

@Component({
	selector: 'google-charts',
	templateUrl: './google-charts.component.html',
	styleUrls: ['./google-charts.component.scss']
})
export class GoogleChartsComponent implements AfterViewInit {
	ngAfterViewInit() {
		google.charts.load('current', {'packages':['bar']});
		google.charts.setOnLoadCallback(drawChart);
		function drawChart() {
			let data = google.visualization.arrayToDataTable([
				['Year', 'Sales', 'Expenses', 'Profit'],
				['2014', 1000, 400, 200],
				['2015', 1170, 460, 250],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 260, 920, 330],
				['2016', 660, 1120, 300],
				['2015', 1170, 460, 250],
				['2016', 660, 1120, 300],
				['2016', 260, 920, 330],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 100],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 320],
				['2016', 660, 1120, 450],
				['2016', 660, 1120, 500],
				['2016', 660, 1120, 300],
				['2016', 660, 1120, 500],
				['2016', 660, 1120, 100],
				['2017', 1030, 540, 350]
			]);

			let options = {
				chart: {
					title: 'Company Performance',
					subtitle: 'Sales, Expenses, and Profit: 2014-2017'
				},
				bars: 'horizontal' // Required for Material Bar Charts.,
			};

			let chart = new google.charts.Bar(document.getElementById('chart_div'));

			chart.draw(data, google.charts.Bar.convertOptions(options));
		}
	}
}
