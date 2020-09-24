//print(context.getVariable("request.content"));
var payload = JSON.parse(context.getVariable("request.content"));
// var variableNames = context.getVariable("request.content");

// To get the form parameter value --- -request.formparam.param_name
var verb = context.getVariable('request.verb');
var pathsuffix = context.getVariable('proxy.pathsuffix');
var flowname = context.getVariable('current.flow.name');

var keys = Object.keys(payload);

//context.setVariable("error", "false");
try {
    if (pathsuffix == "/token") {
        var paramsArr = ["clientId", "clientSecret", "userId", "memberId", "password", "grantType"];
    } else {
        var paramsArr = ["clientId", "clientSecret", "refreshToken"];
    }
    
    //print(verb+' -- '+pathsuffix+' -- '+flowname);
    
    if (keys.length !== 0 && keys.length == paramsArr.length) {
        keys.forEach(function(key) {
            //print(key+" -- "+payload[key]);
            if (!verifyVariable(key) || payload[key] === "") {
                //print(key);
                //context.setVariable("error", "true");
                throw "Invalid parameters";
            }
        });
    } else {
        throw "Invalid parameters";
    }
} catch (err) {
    //print(err);
    context.setVariable('js.errorMessage', err);
}


function verifyVariable(key) {
    for (j=0; j < paramsArr.length; j++) {
        //print(paramsArr[j]+" -- "+key);
        if (paramsArr[j] == key) {
            return true;
        }
    }
    
    return false;
}