var oas = {
	"swagger": "2.0",
	"info": {
		"description": "Endpoints for change in director service.",
		"version": "1.0",
		"title": "Member Compliance",
		"termsOfService": "Terms of service",
		"contact": {
			"name": "NSE",
			"url": "https://www.nseindia.com",
			"email": "info@nseinfobase.com"
		},
		"license": {
			"name": "License of API",
			"url": "API license URL"
		}
	},
	"host": "director-service-for-ui-test-parrot-qj.apps.parivartandev1.com",
	"basePath": "/mc",
	"tags": [{
		"name": "Director Service",
		"description": "Director Service Controller"
	}],
	"paths": {
		"/v1/memberCompliance/directors": {
			"get": {
				"tags": [
					"Director Service"
				],
				"summary": "Get the Director details and compliance officer details",
				"description": "Returns HTTP 404 if the member is not found",
				"operationId": "getDirectorsDetailsUsingGET",
				"produces": [
					"*/*"
				],
				"parameters": [{
					"name": "tradingMemberId",
					"in": "header",
					"description": "Trading member ID",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/Directors"
						}
					},
					"400": {
						"description": "Invalid Request"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Member Not Found"
					},
					"500": {
						"description": "Internal Server Error"
					}
				},
				"deprecated": false
			}
		},
		"/v1/memberCompliance/directors/basicDetails": {
			"post": {
				"tags": [
					"Director Service"
				],
				"summary": "Update basis details of director with contact person details",
				"operationId": "updateDirectorDetailsUsingPOST",
				"consumes": [
					"application/json"
				],
				"produces": [
					"*/*"
				],
				"parameters": [{
						"name": "applicationId",
						"in": "query",
						"description": "Application ID",
						"required": true,
						"type": "string",
						"allowEmptyValue": false
					},
					{
						"in": "body",
						"name": "basicDetailRequest",
						"description": "Basic detail of director",
						"required": true,
						"schema": {
							"$ref": "#/definitions/BasicDetailRequest"
						}
					},
					{
						"name": "directorDeleteRequest",
						"in": "query",
						"description": "Director delete request",
						"required": false,
						"type": "array",
						"items": {
							"type": "integer",
							"format": "int64"
						},
						"collectionFormat": "multi",
						"allowEmptyValue": false
					},
					{
						"name": "tradingMemberId",
						"in": "header",
						"description": "Trading member ID",
						"required": true,
						"type": "integer",
						"format": "int64"
					}
				],
				"responses": {
					"200": {
						"description": "OK"
					},
					"201": {
						"description": "Created"
					},
					"400": {
						"description": "Bad Request"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					},
					"500": {
						"description": "Internal Server Error"
					}
				},
				"deprecated": false
			}
		},
		"/v1/memberCompliance/directors/cidTypes": {
			"post": {
				"tags": [
					"Director Service"
				],
				"summary": "Validates the change in director request",
				"description": "Returns HTTP 404 if the member is not found",
				"operationId": "validateChangeInDirectorsTypesUsingPOST",
				"consumes": [
					"application/json"
				],
				"produces": [
					"*/*"
				],
				"parameters": [{
						"in": "body",
						"name": "changeInDirectorTypeRequest",
						"description": "Request for change in director types",
						"required": true,
						"schema": {
							"$ref": "#/definitions/ChangeInDirectorTypeRequest"
						}
					},
					{
						"name": "tradingMemberId",
						"in": "header",
						"description": "Trading member ID",
						"required": true,
						"type": "integer",
						"format": "int64"
					}
				],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ApplicationResponse"
						}
					},
					"201": {
						"description": "Created"
					},
					"400": {
						"description": "Invalid Request"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Member Not Found"
					},
					"500": {
						"description": "Internal Server Error"
					}
				},
				"deprecated": false
			}
		},
		"/v1/memberCompliance/directors/count": {
			"get": {
				"tags": [
					"Director Service"
				],
				"summary": "Get the existing directors count for a trading member Id",
				"description": "Returns HTTP 404 if the member is not found",
				"operationId": "getDirectorsCountUsingGET",
				"produces": [
					"*/*"
				],
				"parameters": [{
					"name": "tradingMemberId",
					"in": "header",
					"description": "Trading member ID",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/DirectorsCount"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Member Not Found"
					},
					"500": {
						"description": "Internal Server Error"
					}
				},
				"deprecated": false
			}
		},
		"/v1/memberCompliance/directors/document": {
			"get": {
				"tags": [
					"Director Service"
				],
				"summary": "Get the sample document on sub-request type",
				"operationId": "getSampleDocumentsUsingGET",
				"produces": [
					"multipart/form-data"
				],
				"parameters": [{
						"name": "documentType",
						"in": "query",
						"description": "Document type",
						"required": true,
						"type": "string",
						"allowEmptyValue": false,
						"x-example": "experienceDocument"
					},
					{
						"name": "subRequestType",
						"in": "query",
						"description": "Types of request",
						"required": true,
						"type": "string",
						"allowEmptyValue": false
					},
					{
						"name": "tradingMemberId",
						"in": "header",
						"description": "Trading member ID",
						"required": true,
						"type": "integer",
						"format": "int64"
					}
				],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/Resource"
						}
					},
					"400": {
						"description": "Bad Request"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					},
					"500": {
						"description": "Internal Server Error"
					}
				},
				"deprecated": false
			}
		},
		"/v1/memberCompliance/directors/documents": {
			"post": {
				"tags": [
					"Director Service"
				],
				"summary": "Upload documents of director",
				"operationId": "uploadDocumentsUsingPOST",
				"consumes": [
					"multipart/form-data"
				],
				"produces": [
					"*/*"
				],
				"parameters": [{
						"in": "formData",
						"name": "applicationId",
						"description": "Application Id",
						"required": true,
						"schema": {
							"type": "string"
						}
					},
					{
						"name": "boardResolutionDoc",
						"in": "formData",
						"description": "boardResolutionDoc",
						"required": false,
						"type": "file"
					},
					{
						"in": "formData",
						"name": "directorId",
						"description": "Director Id",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int64"
						}
					},
					{
						"name": "educationDoc",
						"in": "formData",
						"description": "educationDoc",
						"required": false,
						"type": "file"
					},
					{
						"name": "experienceDocs",
						"in": "formData",
						"description": "experienceDocs",
						"required": false,
						"type": "array",
						"items": {
							"type": "file"
						},
						"collectionFormat": "multi"
					},
					{
						"in": "formData",
						"name": "subRequestType",
						"description": "Type of sub-request",
						"required": true,
						"schema": {
							"type": "string"
						}
					},
					{
						"name": "tradingMemberId",
						"in": "header",
						"description": "Id of trading member",
						"required": true,
						"type": "integer",
						"format": "int64"
					}
				],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "string"
						}
					},
					"201": {
						"description": "Created"
					},
					"400": {
						"description": "Bad Request"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					},
					"500": {
						"description": "Internal Server Error"
					}
				},
				"deprecated": false
			},
			"delete": {
				"tags": [
					"Director Service"
				],
				"summary": "Delete document for directors",
				"operationId": "deleteDirectorsDocumentsUsingDELETE",
				"produces": [
					"*/*"
				],
				"parameters": [{
						"name": "applicationId",
						"in": "query",
						"description": "Application Id",
						"required": true,
						"type": "string",
						"allowEmptyValue": false
					},
					{
						"in": "body",
						"name": "deleteDocumentRequests",
						"description": "Types of sub-request",
						"required": true,
						"schema": {
							"type": "array",
							"items": {
								"$ref": "#/definitions/DeleteDocumentRequest"
							}
						}
					},
					{
						"name": "tradingMemberId",
						"in": "header",
						"description": "Id of trading member",
						"required": true,
						"type": "integer",
						"format": "int64"
					}
				],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "string"
						}
					},
					"204": {
						"description": "No Content"
					},
					"400": {
						"description": "Bad Request"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					},
					"500": {
						"description": "Internal Server Error"
					}
				},
				"deprecated": false
			}
		},
		"/v1/memberCompliance/directors/experiences": {
			"post": {
				"tags": [
					"Director Service"
				],
				"summary": "Save experience details of director",
				"operationId": "saveDirectorExperienceUsingPOST",
				"consumes": [
					"application/json"
				],
				"produces": [
					"*/*"
				],
				"parameters": [{
						"name": "applicationId",
						"in": "query",
						"description": "Application ID",
						"required": true,
						"type": "string",
						"allowEmptyValue": false
					},
					{
						"in": "body",
						"name": "directorListRequest",
						"description": "experience detail of director",
						"required": true,
						"schema": {
							"type": "array",
							"items": {
								"$ref": "#/definitions/DirectorsRequest"
							}
						}
					},
					{
						"name": "tradingMemberId",
						"in": "header",
						"description": "Trading member ID",
						"required": true,
						"type": "integer",
						"format": "int64"
					}
				],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"201": {
						"description": "Created"
					},
					"400": {
						"description": "Bad Request"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					},
					"500": {
						"description": "Internal Server Error"
					}
				},
				"deprecated": false
			}
		}
	},
	"definitions": {
		"ApplicationResponse": {
			"type": "object",
			"properties": {
				"applicationId": {
					"type": "string"
				}
			},
			"title": "ApplicationResponse"
		},
		"BasicDetailRequest": {
			"type": "object",
			"properties": {
				"contactPersonDetails": {
					"$ref": "#/definitions/ContactPersonRequest"
				},
				"directorDetails": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/DirectorDetailsRequest"
					}
				}
			},
			"title": "BasicDetailRequest"
		},
		"ChangeInDirectorTypeRequest": {
			"type": "object",
			"properties": {
				"incomingDD": {
					"type": "integer",
					"format": "int32"
				},
				"incomingDDToNDD": {
					"type": "integer",
					"format": "int32"
				},
				"incomingNDD": {
					"type": "integer",
					"format": "int32"
				},
				"incomingNDDToDD": {
					"type": "integer",
					"format": "int32"
				},
				"resigningDD": {
					"type": "integer",
					"format": "int32"
				},
				"resigningNDD": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "ChangeInDirectorTypeRequest"
		},
		"ComplianceOfficer": {
			"type": "object",
			"properties": {
				"emailId": {
					"type": "string"
				},
				"mobileNo": {
					"type": "string"
				},
				"name": {
					"type": "string"
				}
			},
			"title": "ComplianceOfficer"
		},
		"ContactPersonRequest": {
			"type": "object",
			"properties": {
				"emailId": {
					"type": "string"
				},
				"mobileNo": {
					"type": "string"
				},
				"name": {
					"type": "string"
				}
			},
			"title": "ContactPersonRequest"
		},
		"DeleteDocumentRequest": {
			"type": "object",
			"properties": {
				"directorId": {
					"type": "integer",
					"format": "int64"
				},
				"documentType": {
					"type": "string"
				},
				"fileName": {
					"type": "string"
				},
				"subRequestType": {
					"type": "string"
				}
			},
			"title": "DeleteDocumentRequest"
		},
		"DirectorDetails": {
			"type": "object",
			"properties": {
				"age": {
					"type": "integer",
					"format": "int32"
				},
				"din": {
					"type": "integer",
					"format": "int32"
				},
				"directorId": {
					"type": "integer",
					"format": "int64"
				},
				"emailId": {
					"type": "string"
				},
				"mobileNo": {
					"type": "string"
				},
				"name": {
					"type": "string"
				},
				"panNumber": {
					"type": "string"
				}
			},
			"title": "DirectorDetails"
		},
		"DirectorDetailsRequest": {
			"type": "object",
			"properties": {
				"directorId": {
					"type": "integer",
					"format": "int64"
				},
				"emailId": {
					"type": "string"
				},
				"mobileNo": {
					"type": "string"
				},
				"subRequestType": {
					"type": "string"
				},
				"title": {
					"type": "string"
				},
				"type": {
					"type": "string"
				}
			},
			"title": "DirectorDetailsRequest"
		},
		"Directors": {
			"type": "object",
			"properties": {
				"complianceOfficer": {
					"$ref": "#/definitions/ComplianceOfficer"
				},
				"directorsDetails": {
					"type": "object",
					"additionalProperties": {
						"type": "array",
						"items": {
							"$ref": "#/definitions/DirectorDetails"
						}
					}
				}
			},
			"title": "Directors"
		},
		"DirectorsCount": {
			"type": "object",
			"properties": {
				"ddCount": {
					"type": "integer",
					"format": "int32"
				},
				"nddCount": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "DirectorsCount"
		},
		"DirectorsRequest": {
			"type": "object",
			"properties": {
				"directorId": {
					"type": "integer",
					"format": "int64"
				},
				"experiences": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/ExperienceRequest"
					}
				},
				"subRequestType": {
					"type": "string"
				},
				"totalExperience": {
					"type": "number",
					"format": "double"
				}
			},
			"title": "DirectorsRequest"
		},
		"ExperienceRequest": {
			"type": "object",
			"properties": {
				"companyName": {
					"type": "string"
				},
				"designation": {
					"type": "string"
				},
				"endMonth": {
					"type": "integer",
					"format": "int32"
				},
				"endYear": {
					"type": "integer",
					"format": "int32"
				},
				"experience": {
					"type": "number",
					"format": "double"
				},
				"experienceName": {
					"type": "string"
				},
				"profile": {
					"type": "string"
				},
				"startMonth": {
					"type": "integer",
					"format": "int32"
				},
				"startYear": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "ExperienceRequest"
		},
		"File": {
			"type": "object",
			"properties": {
				"absolute": {
					"type": "boolean"
				},
				"absoluteFile": {
					"$ref": "#/definitions/File"
				},
				"absolutePath": {
					"type": "string"
				},
				"canonicalFile": {
					"$ref": "#/definitions/File"
				},
				"canonicalPath": {
					"type": "string"
				},
				"directory": {
					"type": "boolean"
				},
				"executable": {
					"type": "boolean"
				},
				"file": {
					"type": "boolean"
				},
				"freeSpace": {
					"type": "integer",
					"format": "int64"
				},
				"hidden": {
					"type": "boolean"
				},
				"lastModified": {
					"type": "integer",
					"format": "int64"
				},
				"name": {
					"type": "string"
				},
				"parent": {
					"type": "string"
				},
				"parentFile": {
					"$ref": "#/definitions/File"
				},
				"path": {
					"type": "string"
				},
				"readable": {
					"type": "boolean"
				},
				"totalSpace": {
					"type": "integer",
					"format": "int64"
				},
				"usableSpace": {
					"type": "integer",
					"format": "int64"
				},
				"writable": {
					"type": "boolean"
				}
			},
			"title": "File"
		},
		"InputStream": {
			"type": "object",
			"title": "InputStream"
		},
		"Resource": {
			"type": "object",
			"properties": {
				"description": {
					"type": "string"
				},
				"file": {
					"$ref": "#/definitions/File"
				},
				"filename": {
					"type": "string"
				},
				"inputStream": {
					"$ref": "#/definitions/InputStream"
				},
				"open": {
					"type": "boolean"
				},
				"readable": {
					"type": "boolean"
				},
				"uri": {
					"$ref": "#/definitions/URI"
				},
				"url": {
					"$ref": "#/definitions/URL"
				}
			},
			"title": "Resource"
		},
		"URI": {
			"type": "object",
			"properties": {
				"absolute": {
					"type": "boolean"
				},
				"authority": {
					"type": "string"
				},
				"fragment": {
					"type": "string"
				},
				"host": {
					"type": "string"
				},
				"opaque": {
					"type": "boolean"
				},
				"path": {
					"type": "string"
				},
				"port": {
					"type": "integer",
					"format": "int32"
				},
				"query": {
					"type": "string"
				},
				"rawAuthority": {
					"type": "string"
				},
				"rawFragment": {
					"type": "string"
				},
				"rawPath": {
					"type": "string"
				},
				"rawQuery": {
					"type": "string"
				},
				"rawSchemeSpecificPart": {
					"type": "string"
				},
				"rawUserInfo": {
					"type": "string"
				},
				"scheme": {
					"type": "string"
				},
				"schemeSpecificPart": {
					"type": "string"
				},
				"userInfo": {
					"type": "string"
				}
			},
			"title": "URI"
		},
		"URL": {
			"type": "object",
			"properties": {
				"authority": {
					"type": "string"
				},
				"content": {
					"type": "object"
				},
				"defaultPort": {
					"type": "integer",
					"format": "int32"
				},
				"deserializedFields": {
					"$ref": "#/definitions/URLStreamHandler"
				},
				"file": {
					"type": "string"
				},
				"host": {
					"type": "string"
				},
				"path": {
					"type": "string"
				},
				"port": {
					"type": "integer",
					"format": "int32"
				},
				"protocol": {
					"type": "string"
				},
				"query": {
					"type": "string"
				},
				"ref": {
					"type": "string"
				},
				"serializedHashCode": {
					"type": "integer",
					"format": "int32"
				},
				"userInfo": {
					"type": "string"
				}
			},
			"title": "URL"
		},
		"URLStreamHandler": {
			"type": "object",
			"title": "URLStreamHandler"
		}
	}
};