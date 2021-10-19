({
    onchangeFireEvent : function(component, event, helper) {
        var appEvent = $A.get("e.c:accountSearchComEvent"); 
        //Set event attribute value
        var acctName= component.find("searchKey").get("v.value");
        console.log('searchkey:'+ acctName);
        console.log('starteventfire'+appEvent);
        appEvent.setParams({"accountName" : acctName }); 
        appEvent.fire(); 

        /*var cmpEvent = component.getEvent("cmpEvent");
        var acctName= component.find("searchKey").get("v.value");
        console.log('acctName:'+ acctName);
        cmpEvent.setParams({
            "accountName" :  acctName });
        cmpEvent.fire();*/
    }
})