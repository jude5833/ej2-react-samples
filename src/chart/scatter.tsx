/**
 * Sample for scatter series
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
    Legend, Category, ScatterSeries, Tooltip, ILoadedEventArgs, ChartTheme,
} from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { SampleBase } from '../common/sample-base';

export function GetScatterData(): any {
    let series1: Object[] = [];
    let series2: Object[] = [];
    let point1: Object;
    let value: number = 80;
    let value1: number = 70;
    let i: number;
    for (i = 1; i < 120; i++) {
        if (Math.random() > 0.5) {
            value += Math.random();
        } else {
            value -= Math.random();
        }
        value = value < 60 ? 60 : value > 90 ? 90 : value;
        point1 = { x: 145 + (i / 2), y: value.toFixed(1) };
        series1.push(point1);
    }
    for (i = 1; i < 120; i++) {
        if (Math.random() > 0.5) {
            value1 += Math.random();
        } else {
            value1 -= Math.random();
        }
        value1 = value1 < 60 ? 60 : value1 > 90 ? 90 : value1;
        point1 = { x: 145 + (i / 2), y: value1.toFixed(1) };
        series2.push(point1);
    }

    return { 'series1': series1, 'series2': series2 };
}
export let data1: any[] = GetScatterData().series1;
export let data2: any[] = GetScatterData().series2;

const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;

export class Scatter extends SampleBase<{}, {}> {

    render() {
        return (
            <div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div className='control-section'>
                    <ChartComponent id='charts' style={{ textAlign: "center" }}
                        primaryXAxis={{ title: 'Height (cm)', minimum: 145, maximum: 185, interval: 10, majorGridLines: { width: 0 }, edgeLabelPlacement: 'Shift', labelFormat: '{value}cm' }}
                        primaryYAxis={{ title: 'Weight (kg)', minimum: 60, maximum: 90, labelFormat: '{value}kg', rangePadding: 'None' }}
                        load={this.load.bind(this)}
                        title='Height vs Weight'
                        loaded={this.onChartLoad.bind(this)}
                        tooltip={{ enable: true }}
                        width={Browser.isDevice ? '100%' : '60%'}
                        chartArea={{ border: { width: 0 } }}
                    >
                        <Inject services={[ScatterSeries, Legend, Tooltip, Category]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data1} width={2} xName='x' yName='y' name='Male' type='Scatter'
                                marker={{ width: 8, height: 8 }}>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data2} xName='x' yName='y' name='Female' type='Scatter'
                                marker={{ width: 8, height: 8 }}>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
                <div id="action-description">
                <p>
                This sample compares the height and weight of the genders by using default scatter series in the chart. Tooltip shows the information about the data.
            </p>
                </div>
                <div id="description">
                    <p>
                        In this example, you can see how to render and configure the scatter type charts. Scatter charts are used to plot financial or scientific data.
                        You can use <code>shape</code> property in the marker to change the scatter shape. <code>dataLabel</code> is used to represent individual data value.
                    </p>
                    <p>
                        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
                    </p>
                    <br></br>
                    <p><b>Injecting Module</b></p>
                    <p>
                        Chart component features are segregated into individual feature-wise modules. To use scatter series, we need to inject
                        <code>ScatterSeries</code> module into <code>services</code>.
                    </p>
                    <p>
                        More information on the scatter series can be found in this &nbsp;
                        <a target="_blank" href="http://ej2.syncfusion.com/react/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
                    </p>
                </div>
            </div>
        )
    }
    public onChartLoad(args: ILoadedEventArgs): void {
        let chart: Element = document.getElementById('charts');
        chart.setAttribute('title', '');
    };
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)) as ChartTheme;
    };
}