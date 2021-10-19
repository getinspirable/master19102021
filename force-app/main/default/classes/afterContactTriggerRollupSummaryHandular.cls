public class afterContactTriggerRollupSummaryHandular {
    public static void rollUpSummary(List<Contact> contactList, Map<Id,Contact> ContactOldMap){
        set<Id> accountIds= new set<Id>();
        Map<Id,Account> accountMapToUpdate = new Map<Id,Account>();
        for(Contact con: contactList){
            if (con.AccountId!=null){
                accountIds.add(con.AccountId);
           		 System.debug('listofIDs:'+accountIds);
           		 }
            if (ContactOldMap != null &&  (!ContactOldMap.Isempty())){
                Contact oldContact = (Contact)ContactOldMap.get(con.Id); // Map<Id, sObject>
                if ( oldContact.AccountId != con.AccountId ) {
                    accountIds.add(oldContact.AccountId);
                }
            }
             
            }
       
        List<Contact> contactList1 = [Select Id,AccountId from Contact where AccountId IN :accountIds];
        
         
        for(contact con: contactList1){
            
            if(!accountMapToUpdate.containsKey (con.AccountId)){
                accountMapToUpdate.put(con.AccountId, new Account(Id=con.AccountId,No_Of_Contacts__c=1));
                system.debug('added account with contact:'+ accountMapToUpdate);
            }else{
                Account tempAccount = accountMapToUpdate.get(con.AccountId);
                tempAccount.No_Of_Contacts__c += 1;
                accountMapToUpdate.put(con.AccountId,tempAccount);
            }
        }
        update accountMapToUpdate.values();
        
    }
}