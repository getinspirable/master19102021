({
    handleClick1 : function(component, event, helper) {
        var cmpTarget = component.find('input1');
        $A.util.addClass(cmpTarget, 'red');
        var tt =component.find("input1").get("v.value");
        console.log("input text:"+ tt);
        var tt1 =component.find("input1").get("v.class");
        console.log("input text:"+ tt1);

    },
    handleClick2 : function(component, event, helper) {
        var cmpTarget = component.find('input1');
        $A.util.addClass(cmpTarget, 'green');

    },
    handleClick3 : function(component, event, helper) {
        var cmpTarget = component.find('input1');
        $A.util.addClass(cmpTarget, 'yellow');

    }
})