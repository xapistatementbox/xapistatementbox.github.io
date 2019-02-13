function CreateXAPIStatement() {
   
    
    //define the xapi statement being sent from scratch
    var statement = new ADL.XAPIStatement(
    new ADL.XAPIStatement.Agent(ADL.XAPIWrapper.hash('mailto:guest@xlearnlab.com'), 'Guest'),
    new ADL.XAPIStatement.Verb('http://adlnet.gov/expapi/verbs/launched', 'launched'),
    new ADL.XAPIStatement.Activity(document.getElementById("activityurl").value, document.getElementById("activitydescription").value)
    );

    if (typeof score != "undefined") {    
        statement.score = score;
    }
       
    return statement;    
 }