/* Here's how JSON validation via OAS works:
    Create a JSON object for the oas by copy/pasting the entire OAS into oas.js and assigning to a variable 'oas'
    Get the request schema from the OAS, using the flowname === operationId.
    e.g. {"$ref": "/schema#/definitions/NodeCreateRequest" };
    Add the OAS to tv4
    Validate with request schema and evaluate the results
    Throw errors which can be caught in the ProxyFaultRules
*/
try {
    var verb = context.getVariable('request.verb');
    var pathsuffix = context.getVariable('proxy.pathsuffix');
    var flowname = context.getVariable('current.flow.name');
    var schema = getMessageSchema( flowname );
    // DEBUG print( "schema: " + JSON.stringify(schema) );

    if( schema === undefined || schema === null ) {
        throw "Missing schema definition for: " + verb + " " + pathsuffix;
    }
    else {
        var bodyContent = context.getVariable('request.content');
        var body = JSON.parse(bodyContent);
        
        // Add the OAS as a schema
        tv4.addSchema('/schema', oas);
        
        // Validate the request
        var result = tv4.validateMultiple(body, schema);
        // DEBUG print("Validation result: " + JSON.stringify(result));
    
        // A missing schema validates to true, but we want that to be an error
        // Override missing entry with full schema value
        if( result.missing[0] ) {
            result.errors[0] = {"schema":schema};
            context.setVariable("javascript.error", JSON.stringify(result.errors));
            throw "Schema definition not found" + JSON.stringify(result.errors);
        }
        else if( result.valid === false ) {
            context.setVariable("javascript.error.message", result.errors[0].message);
            context.setVariable("javascript.error.params", result.errors[0].dataPath);
            throw "Validation failed for: " + verb + " " + pathsuffix + ": " + JSON.stringify(result.errors);
        }
    }
}
catch( err ) {
    // This raises fault named "ScriptExecutionFailed", 
    // with script name and line details, so set errorMessage instead
    context.setVariable('javascript.errorMessage', err);
    throw err;
}

function getMessageSchema( flowname ) {
    // Find the operationId that matches the flowname
    // Return the schema from the parameter that is "in" "body".
    var paths = oas.paths;
    for ( var path in paths ) {
        var verbs = paths[path];
        for( var verb in verbs ) {
            if( verbs[verb].operationId === flowname ) {
                var params = verbs[verb].parameters;
                for ( var param in params ) {
                    if( params[param].hasOwnProperty( 'in' ) && params[param].in === 'body' ) {
                        return params[param].schema;
                    }
                }
            }
        }
    }
    return undefined;
}