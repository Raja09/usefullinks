print(context.getVariable("request.content"));
var variableCount = context.getVariable("request.formparams.count");
var variableNames = context.getVariable("request.formparams.names");
var variableArr = ["client_id", "client_secret", "username", "password", "grant_type"];
// To get the form parameter value --- -request.formparam.param_name

if (variableCount == 5) {
    for(i=0; i < variableNames.length; i++) {
        if(!verifyVariable(variableNames[i])) {
            context.getVariable("error", true);
        }
    }
} else {
    context.setVariable("error", true);
}

function verifyVariable(variableName) {
    for (j=0; j < variableArr.length; j++) {
        if (variableArr[j] == variableName) {
            return true;
        }
    }
    
    return false;
}