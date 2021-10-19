({
    myAction : function(component, event, helper) 
    { 
        component.set('v.columns', [
            {label: 'Name', fieldName: 'Name', type: 'text'  },
            {label: 'AccountNumber', fieldName: 'AccountNumber', type: 'text' },
            {label: 'Type', fieldName: 'Type', type: 'text'  },
            {label: 'phone', fieldName: 'phone', type: 'phone' },
            {label: 'ShippingCity', fieldName: 'ShippingCity', type: 'text'  },
            {label: 'ShippingCountry', fieldName: 'ShippingCountry', type: 'text' }
          ]);
    },  
    handleComponentEvent : function(component, event, helper) {
        var acctName = event.getParam("accountName");
        var action = component.get("c.getAccountList");
        action.setParams({ accountName : acctName });
        console.log('in child handular:'+acctName);
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == 'SUCCESS') {
                component.set('v.AccountList', response.getReturnValue());
                console.log('return result:'+ JSON.stringify(response.getReturnValue()));
            }
        });
        $A.enqueueAction(action);
    }
    
})