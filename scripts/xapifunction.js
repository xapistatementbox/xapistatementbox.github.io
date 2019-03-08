function CreateXAPIStatement() {
   
    
    //define the xapi statement being sent from scratch
    var statement = new ADL.XAPIStatement(
    new ADL.XAPIStatement.Agent(ADL.XAPIWrapper.hash('mailto:guest@xlearnlab.com'), 'Guest'),
    new ADL.XAPIStatement.Verb('A', 'B'),
    new ADL.XAPIStatement.Activity(document.getElementById("activityurl").value, document.getElementById("activitydescription").value)
    );


    if (typeof options.verburi != "undefined") {    
        //  statement.verb(options.verbid, options.verb);
        console.log('verb');
        //statement.verb.id = ('C');
        //statement.verb.display('en-US')= 'DDD';

        statement.verb = new ADL.XAPIStatement.Verb(
            options.verbid,
            {
                'en-US': options.verb
            }
        );

    }           
      
    if (typeof options.objecturi != "undefined") {            
        statement.activity = new ADL.XAPIStatement.Activity(options.objecturi, options.objectdescription)     
    }           

    //new ADL.XAPIStatement.Activity(document.getElementById("activityurl").value, document.getElementById("activitydescription").value)
      
    if (typeof options.score != "undefined") {    
        statement.score = options.score;
    }
        
    return statement;    
 }