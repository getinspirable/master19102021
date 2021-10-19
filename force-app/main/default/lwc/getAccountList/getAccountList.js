import { LightningElement,track,api } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';

import getAccountListWithKey from '@salesforce/apex/AccController.getAccountListWithKey';
export default class GetAccountList extends LightningElement {
    @track searchKey;
    @track acctList;
    @track error;
    
    handleOnChange(event){
      event.preventDefault();
        
        /* eslint-disable */
        console.log('searchkeyvalue:'+event.target.value);
        this.searchKey= event.target.value;
      /* getAccountListWithKey({searchKey : searchKey})
        .then( result  => {
           this.acctList = result;
        })
        .error(error =>{
            this.error= error;
        })*/
    }
    handleOnClick(event){
        event.preventDefault();
       // searchKey= event.target.value;
        /* eslint-disable */
        console.log('searchkeyvalue: onclick'+this.searchKey);
        getAccountListWithKey({searchKey : this.searchKey})
        .then( result  => {
           this.acctList = result;
           /* eslint-disable */
        console.log('result:'+result);
        })
        .error(error =>{
            this.error= error;
        });
    }
    closeAction(){
        this.dispatchEvent(new CloseActionScreenEvent());
    }
}