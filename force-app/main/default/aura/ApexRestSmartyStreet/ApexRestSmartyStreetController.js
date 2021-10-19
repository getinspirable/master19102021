({
    onClickHandular : function(component, event, helper) {
       try{

        var action = component.get("c.checkAdd");
        action.setParams
        ({
            street : component.find("add1").get("v.value"),
            street2 : component.find("add2").get("v.value"),
            city : component.find("city").get("v.value"),
            state : component.find("state").get("v.value"),
            zipcode : component.find("zipcode").get("v.value")
            
        });
       // console.log('addrss:'+street +','+street2);
        action.setCallback(this, function(data) 
                           {
                               //component.set("v.ContactList", data.getReturnValue());
                               console.log('adrees approved'+ data.getReturnValue());
                           });
        $A.enqueueAction(action);
       }catch(e){
           console.error(e);
       }

    }
})