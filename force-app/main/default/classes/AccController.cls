public with sharing class AccController {
   
    @AuraEnabled
    public static list<Contact> getRelatedContactList(Id recordId)
    {
        List<Contact> Conlist = [Select id, name,firstname,lastname from Contact where AccountId=: recordId ];
        return Conlist;
    }
    @AuraEnabled
    public static void updateRelatedContactList(List<Contact> Conlist)
     {
          if(Conlist!= null && Conlist.size()>0)
          {
               update Conlist;
          }
    }
    @AuraEnabled
    public static list<Account> getAccountList(string accountName)
    {     String searchKey =  + accountName + '%';
        List<Account> acclist = [Select id, Name,Type,AccountNumber , phone,ShippingCity,ShippingCountry from account where name like : searchKey ];
        return acclist;
    } 
    @AuraEnabled
    public static list<Account> getAccountListWithKey(String searchKey)
    {
        string keyVal = '%' + searchKey + '%';
        List<Account> accList = [Select Id, Name,Type,AccountNumber , Phone,ShippingCity,ShippingCountry from Account where Name like  :keyVal ];
        return accList;
    }
}