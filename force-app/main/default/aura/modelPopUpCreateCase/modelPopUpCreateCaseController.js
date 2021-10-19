({
    openModel: function(component, event, helper) {
        // Set isModalOpen attribute to true
        component.set("v.isModalOpen", true);
     },
    
     closeModel: function(component, event, helper) {
        // Set isModalOpen attribute to false  
        component.set("v.isModalOpen", false);
     },
    
     sucessHandular: function(component, event, helper) {
        // Set isModalOpen attribute to false
        //Add your code to call apex method or do some processing
        var toastEvent = $A.get("e.force:showToast");		
       
        toastEvent.setParams({
            title : 'Success Toast Message',
            message: 'This is Success Toast...!!!',
            duration:' 4000',
            key: 'info_alt',
            type: 'success',
            mode: 'pester'
        });
        toastEvent.fire();			
			
        component.set("v.isModalOpen", false);
     }
})