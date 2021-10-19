import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    handleChangeEvent(event){
        this.template.querySelector('c-e-api-method-child').changeMessage(event.target.value);
    }
}