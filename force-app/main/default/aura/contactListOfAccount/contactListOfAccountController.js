({
    myAction : function(component, event, helper) 
    { 
        component.set('v.columns', [
            {label: 'First Name', fieldName: 'FirstName', type: 'text'  ,  editable: true},
            {label: 'Last Name', fieldName: 'LastName', type: 'text'  ,  editable: true}
          
           
        ]);

        var ConList = component.get("c.getRelatedContactList");
        ConList.setParams
        ({
            recordId: component.get("v.recordId")
        });
        
        ConList.setCallback(this, function(data) 
                           {
                               component.set("v.ContactList", data.getReturnValue());
                           });
        $A.enqueueAction(ConList);
 },
 SaveUpdatedContacts : function(component,event,helper) 
    {
        var UpdatedList = event.getParam('draftValues');        
        var UpdateContacts = component.get("c.updateRelatedContactList");
        
        UpdateContacts.setParams
        ({
            Conlist : UpdatedList
        });
        UpdateContacts.setCallback(this, function(response) 
                           {
                                var state = response.getState();
                                if (state === 'SUCCESS')
                                {
                                     $A.enqueueAction(component.get('c.myAction'));
                                     $A.get('e.force:refreshView').fire();
                                }
                                else{
                                     //error handling
                                }
                           });
        $A.enqueueAction(UpdateContacts);
    }
})