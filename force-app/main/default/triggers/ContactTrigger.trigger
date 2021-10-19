trigger ContactTrigger on Contact (after insert,after delete,after undelete,after update,before update,before delete) {
    if (trigger.ISafter){
        if(trigger.Isinsert || trigger.ISupdate || trigger.ISundelete)
       afterContactTriggerRollupSummaryHandular.rollUpSummary(trigger.new,trigger.oldMap);
    }
    if (trigger.ISbefore){
        if(trigger.IsDelete)
       afterContactTriggerRollupSummaryHandular.rollUpSummary(trigger.old,trigger.oldMap);
    }


}