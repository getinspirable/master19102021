import { LightningElement,track,wire} from 'lwc';
import apexMapDemo from '@salesforce/apex/SimpleApexCallController.apexMapDemo';
import apexWireDemo from '@salesforce/apex/SimpleApexCallController.apexWireDemo';

export default class SimpleApexCall extends LightningElement {
    @track records;
    @track mapDemo;
    @track errorInfo;
    @track options = [];
    @track WiredString;


    @wire(apexWireDemo)
    wiredContacts({ error, data }) {
        if (data) {
            this.WiredString = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
           
        }
    }
    

    onclickHandular(){
        apexMapDemo()
        .then(result => {
              for(let key in result){
                if(key){
                     this.options.push({
                        key : key,
                        value : result[key]
                     })
                }
               }
               // eslint-disable no-console*/
               console.log('records:'+ result);
               
            })
        .catch(error => {
                // TODO Error handling
                this.error= error;
            });
    
    }
    }