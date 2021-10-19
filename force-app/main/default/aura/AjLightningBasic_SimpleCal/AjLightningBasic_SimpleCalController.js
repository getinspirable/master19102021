({
    onAdd : function(component, event, helper) {
       var op1=component.find("input1").get("v.value");
       var op2=component.find("input2").get("v.value");
       component.set("v.result", integer.ValueOf(op1)+ integer.ValueOf(op2));

    },
    onSub : function(component, event, helper) {
        var op1=component.find("input1").get("v.value");
        var op2=component.find("input2").get("v.value");
        component.set("v.result", op1-op2);
        
     },
     onMultiply: function(component, event, helper) {
        var op1=component.find("input1").get("v.value");
        var op2=component.find("input2").get("v.value");
        component.set("v.result", op1*op2);
        
     },
     onDivide: function(component, event, helper) {
        var op1=component.find("input1").get("v.value");
        var op2=component.find("input2").get("v.value");
        component.set("v.result", op1/op2);
        
     }
})