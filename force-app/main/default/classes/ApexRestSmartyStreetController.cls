public  with sharing class ApexRestSmartyStreetController {

    @AuraEnabled
    public static void checkAdd(string street,string street2,string city,string state,string zipcode) {
    //public static void checkAdd(){
      
        string endpointUrl='https://us-street.api.smartystreets.com/street-address?auth-id=5de71496-cc9e-b224-93f5-0aef053181ee&auth-token=9TXskDIY7SPyDLFv72bR&street='+ street +'&city='+ city +'&state='+ state +'&candidates=1';
      
		Http http = new Http();
        HttpRequest request = new HttpRequest();
       
        request.setEndpoint(endpointUrl);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        if(response.getStatusCode() == 200) {
            
          list<SmartyStreetWrapperClass> results= SmartyStreetWrapperClass.parse(response.getBody()) ;
            for (SmartyStreetWrapperClass ss:results){
                system.debug('sswrapper:'+ss.components.zipcode);
            }
            // Deserialize the JSON string into collections of primitive data types.
          // system.debug('resutl:'+response.getBody());
           // Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
           // List<Object> results = (list<Object>) JSON.deserializeUntyped(response.getBody());
            // Cast the values in the 'animals' key as a list
           //List<Object> components = (List<Object>) results.get('components');
           /* for(object ob: results){
                //Map<String, Object> reComponents = (Map<String, Object>)ob.components;
                string r1=ob.components;
                System.debug('components:'+r1);
            }*/
          // System.debug('Received the following components:'+results.components);
           // System.debug('Received the following components:'+components);
           
			}   
    }
}