/**
 * Sample for Semi pie chart
 */
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { SampleBase } from '../common/sample-base';
import { PropertyPane } from '../common/property-pane';
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  AccumulationDataLabel, AccumulationTooltip, PieSeries, Inject, IAccLoadedEventArgs, AccumulationTheme,
} from '@syncfusion/ej2-react-charts';
export let data1: any[] = [
  { x: 'Australia', y: 53, text: 'AUS: 14%' },
  { x: 'China', y: 56, text: 'CHN: 15%' },
  { x: 'India', y: 61, text: 'IND: 16%' },
  { x: 'Japan', y: 13, text: 'JPN: 3%' },
  { x: 'South Africa', y: 79, text: 'ZAF: 21%' },
  { x: 'United Kingdom', y: 71, text: 'UK: 19%' },
  { x: 'United States', y: 45, text: 'USA: 12%' }
];
export class SemiPie extends SampleBase<{}, {}> {
  public pie: AccumulationChartComponent;
  private slider: HTMLInputElement;
  render() {
    return (
      <div className='control-pane'>
        <div className='control-section row'>
          <div className='col-lg-9'>
            <AccumulationChartComponent id='pie-chart' ref={pie => this.pie = pie}
              title='Agricultural Land Percentage'
              tooltip={{ enable: true, format: '${point.text}' }}
              legendSettings={{ visible: false }}
              load={this.load.bind(this)}
              loaded={this.onChartLoad.bind(this)}
            >
              <Inject services={[AccumulationDataLabel, AccumulationTooltip, PieSeries]} />
              <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={data1} xName='x' yName='y' startAngle={270} endAngle={90}
                  radius='90%' innerRadius='40%'
                  dataLabel={{
                    visible: true, position: 'Outside',
                    connectorStyle: { length: '10%' }, name: 'text',
                    font: { size: '14px' }
                  }}
                >
                </AccumulationSeriesDirective>
              </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
          </div>
          <div className='col-lg-3 property-section'>
            <PropertyPane title='Properties'>
              <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
                <tr style={{ height: '50px' }}>
                  <td style={{ width: '60%' }}>
                    <div>Start Angle:
                          <p id="startangle" style={{ fontWeight: 'normal' }}>270</p>
                    </div>
                  </td>
                  <td style={{ width: '40%' }}>
                    <div data-role="rangeslider">
                      <input type="range" name="range-min" ref={slider => this.slider = slider} id="range-min" defaultValue="270" min="0" max="360" onChange={this.startangle.bind(this)} style={{ marginLeft: '-5px' }} />
                    </div>
                  </td>
                </tr>
                <tr style={{ height: '50px' }}>
                  <td style={{ width: '60%' }}>
                    <div>End Angle:
                          <p id="endangle" style={{ fontWeight: 'normal' }}>90</p>
                    </div>
                  </td>
                  <td style={{ width: '40%' }}>
                    <div data-role="rangeslider">
                      <input type="range" name="range-min" ref={slider => this.slider = slider} id="range-max" defaultValue="90" min="0" max="360" onChange={this.endangle.bind(this)} style={{ marginLeft: '-5px' }} />
                    </div>
                  </td>
                </tr>
                <tr style={{ height: '50px' }}>
                  <td style={{ width: '60%' }}>
                    <div>Inner Radius:
                          <p id="innerradius" style={{ fontWeight: 'normal' }}>0.40</p>
                    </div>
                  </td>
                  <td style={{ width: '40%' }}>
                    <div data-role="rangeslider">
                      <input type="range" name="innerRadius" ref={slider => this.slider = slider} id="inner-radius" defaultValue="40" min="0" max="50" onChange={this.onChange.bind(this)} style={{ marginLeft: '-5px' }} />
                    </div>
                  </td>
                </tr>
              </table>
            </PropertyPane>
          </div>
        </div>
        <div id="action-description">
        <p>
        This sample illustrates the agriculture land percentages of various countries by using a pie series. It has options to change the angle and radius of the series.
    </p>
        </div>
        <div id="description">
          <p> In this example, you can see how to render semi pie and doughnut chart. Using <code>startAngle</code>, <code>endAngle</code> properties, we can achieve this semi pie chart. Property panel to change the angle is provided with this sample.</p>
          <p> <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.</p>
        </div>
      </div>
    )
  }
  public startangle(e: Event): void {
    let rangeMin: string = (document.getElementById('range-min') as HTMLSelectElement).value;
    this.pie.series[0].startAngle = parseFloat(rangeMin);
    document.getElementById('startangle').innerHTML = rangeMin;
    this.pie.series[0].animation.enable = false;
    this.pie.removeSvg();
    this.pie.refreshSeries();
    this.pie.refreshChart();
  };
  public endangle(e: Event): void {
    let rangeMax: string = (document.getElementById('range-max') as HTMLSelectElement).value;
    this.pie.series[0].endAngle = parseFloat(rangeMax);
    document.getElementById('endangle').innerHTML = rangeMax;
    this.pie.series[0].animation.enable = false;
    this.pie.removeSvg();
    this.pie.refreshSeries();
    this.pie.refreshChart();
  };
  public onChange(e: Event): void {
    let innerRadius: string = (document.getElementById('inner-radius') as HTMLSelectElement).value;
    this.pie.series[0].innerRadius = innerRadius + '%';
    document.getElementById('innerradius').innerHTML = (parseInt(innerRadius, 10) / 100).toFixed(2);
    this.pie.series[0].animation.enable = false;
    this.pie.removeSvg();
    this.pie.refreshSeries();
    this.pie.refreshChart();
  };
  public onChartLoad(args: IAccLoadedEventArgs): void {
    document.getElementById('pie-chart').setAttribute('title', '');
  };
  public load(args: IAccLoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)) as AccumulationTheme;
  };
}