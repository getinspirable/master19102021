import { LightningElement,track } from 'lwc';

export default class LDSRecordEditForm extends LightningElement {
    @track recordId;
    successHandler(event){
        this.recordId = event.detail.id;
    }
}