public with sharing class SimpleApexCallController {
   
    @AuraEnabled(cacheable=true)
    public static map<String,Integer> apexMapDemo(){
        try {
               
            Map<String,Integer> mapReturn= new Map<String,Integer>();
               mapReturn.put('amit shan',1);
               mapReturn.put('Arun',2);
               mapReturn.put('shan khan',3);
               mapReturn.put('sireesha',2);
               return mapReturn;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable=true)
    public static String  apexWireDemo(){
        try {
            String textReturn;
            textReturn = 'Hello sireesha here';
            return textReturn;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}