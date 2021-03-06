import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { SampleBase } from '../common/sample-base';

export class RTL extends SampleBase<{}, {}> {
    private dialogInstance: DialogComponent;
    //Bind the button click event
    buttonClick() {
        this.dialogInstance.show();
    }

private buttons: Object[] = [{
    // Click the footer buttons to hide the Dialog
    'click': () => {
        this.dialogInstance.hide();
    },
    // Accessing button component properties by buttonModel property
    buttonModel: {
        //Enables the primary button
        isPrimary: true,
        cssClass: 'e-flat',
        content: 'Yes'
    }
},
{
    'click': () => {
        this.dialogInstance.hide();
    },
    buttonModel: {
        content: 'No',
        cssClass: 'e-flat'
    }
}];

dialogClose() {
        (document.querySelectorAll('.dlgbtn')[0] as HTMLElement).style.display='inline-block';
    }
dialogOpen() {
        (document.querySelectorAll('.dlgbtn')[0] as HTMLElement).style.display='none';
}

private animationSettings:Object= { effect: 'Zoom' };
private rtlContent: string = '<div>Are you sure you want to delete sea.jpg?</div>';

  render() {
    return (
      <div className = 'control-pane'>
        <div id='target' className='control-section'>
            <button className="e-control e-btn dlgbtn" onClick={this.buttonClick.bind(this)} id="dialogBtn">Open</button>        
            {/* Render Dialog in RTL format by setting 'enableRtl' as true */}
            <DialogComponent id="dialog" enableRtl={true} showCloseIcon={true} animationSettings={this.animationSettings} width='300px' content={this.rtlContent} ref={dialog => this.dialogInstance = dialog}
            target='#target' header='Delete File' buttons={this.buttons} open={this.dialogOpen.bind(this)} close={this.dialogClose.bind(this)}></DialogComponent>
        </div>
        <div id="action-description">
        <p>
        This sample demonstrates that the RTL mode of Dialog component,
        that displays content from right-to-left direction.
        Click on “Open” button to show the Dialog again if it is closed.
        </p>
        </div>
        <div id="description">
        <p>
        This sample is rendered with English language, and written from right-to-left. 
        To enable this RTL support in Dialog, set enableRTL property as true.
        </p>
        </div>
      </div>
    )
  }
}