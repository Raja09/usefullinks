var oas = {
	"swagger": "2.0",
	"info": {
		"description": "Api Documentation",
		"version": "1.0",
		"title": "Api Documentation",
		"termsOfService": "urn:tos",
		"contact": {},
		"license": {
			"name": "Apache 2.0",
			"url": "http://www.apache.org/licenses/LICENSE-2.0"
		}
	},
	"host": "collateralsecurities.apps.parivartandev1.com",
	"basePath": "/",
	"tags": [{
			"name": "ReleaseSecurity",
			"description": "Release Security Controller"
		},
		{
			"name": "TransferSecurity",
			"description": "Transfer Security Controller"
		},
		{
			"name": "basic-error-controller",
			"description": "Basic Error Controller"
		},
		{
			"name": "cloud-foundry-links-handler",
			"description": "Cloud Foundry Links Handler"
		},
		{
			"name": "operation-handler",
			"description": "Operation Handler"
		},
		{
			"name": "web-mvc-links-handler",
			"description": "Web Mvc Links Handler"
		}
	],
	"paths": {
		"/actuator": {
			"get": {
				"tags": [
					"web-mvc-links-handler"
				],
				"summary": "links",
				"operationId": "linksUsingGET_1",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object",
							"additionalProperties": {
								"type": "object",
								"additionalProperties": {
									"$ref": "#/definitions/Link"
								}
							}
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/actuator/health": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_1",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/actuator/health/**": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/actuator/info": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_2",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication": {
			"get": {
				"tags": [
					"cloud-foundry-links-handler"
				],
				"summary": "links",
				"operationId": "linksUsingGET",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object",
							"additionalProperties": {
								"type": "object",
								"additionalProperties": {
									"$ref": "#/definitions/Link"
								}
							}
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication/beans": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_3",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication/caches": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_5",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			},
			"delete": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingDELETE_1",
				"produces": [
					"*/*"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"204": {
						"description": "No Content"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication/caches/{cache}": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_4",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			},
			"delete": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingDELETE",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"204": {
						"description": "No Content"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication/conditions": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_6",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication/configprops": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_7",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication/env": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_9",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication/env/{toMatch}": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_8",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication/health": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_11",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication/health/**": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_10",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication/heapdump": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_12",
				"produces": [
					"application/octet-stream"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication/info": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_13",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication/loggers": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_15",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication/loggers/{name}": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_14",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			},
			"post": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingPOST",
				"consumes": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"produces": [
					"*/*"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
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
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication/mappings": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_16",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication/metrics": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_18",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication/metrics/{requiredMetricName}": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_17",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication/scheduledtasks": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_19",
				"produces": [
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/cloudfoundryapplication/threaddump": {
			"get": {
				"tags": [
					"operation-handler"
				],
				"summary": "handle",
				"operationId": "handleUsingGET_20",
				"produces": [
					"text/plain;charset=UTF-8",
					"application/vnd.spring-boot.actuator.v3+json",
					"application/json",
					"application/vnd.spring-boot.actuator.v2+json"
				],
				"parameters": [{
					"in": "body",
					"name": "body",
					"description": "body",
					"required": false,
					"schema": {
						"type": "object",
						"additionalProperties": {
							"type": "string"
						}
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "object"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/error": {
			"get": {
				"tags": [
					"basic-error-controller"
				],
				"summary": "errorHtml",
				"operationId": "errorHtmlUsingGET",
				"produces": [
					"text/html"
				],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ModelAndView"
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			},
			"head": {
				"tags": [
					"basic-error-controller"
				],
				"summary": "errorHtml",
				"operationId": "errorHtmlUsingHEAD",
				"consumes": [
					"application/json"
				],
				"produces": [
					"text/html"
				],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ModelAndView"
						}
					},
					"204": {
						"description": "No Content"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					}
				},
				"deprecated": false
			},
			"post": {
				"tags": [
					"basic-error-controller"
				],
				"summary": "errorHtml",
				"operationId": "errorHtmlUsingPOST",
				"consumes": [
					"application/json"
				],
				"produces": [
					"text/html"
				],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ModelAndView"
						}
					},
					"201": {
						"description": "Created"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			},
			"put": {
				"tags": [
					"basic-error-controller"
				],
				"summary": "errorHtml",
				"operationId": "errorHtmlUsingPUT",
				"consumes": [
					"application/json"
				],
				"produces": [
					"text/html"
				],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ModelAndView"
						}
					},
					"201": {
						"description": "Created"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			},
			"delete": {
				"tags": [
					"basic-error-controller"
				],
				"summary": "errorHtml",
				"operationId": "errorHtmlUsingDELETE",
				"produces": [
					"text/html"
				],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ModelAndView"
						}
					},
					"204": {
						"description": "No Content"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					}
				},
				"deprecated": false
			},
			"options": {
				"tags": [
					"basic-error-controller"
				],
				"summary": "errorHtml",
				"operationId": "errorHtmlUsingOPTIONS",
				"consumes": [
					"application/json"
				],
				"produces": [
					"text/html"
				],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ModelAndView"
						}
					},
					"204": {
						"description": "No Content"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					}
				},
				"deprecated": false
			},
			"patch": {
				"tags": [
					"basic-error-controller"
				],
				"summary": "errorHtml",
				"operationId": "errorHtmlUsingPATCH",
				"consumes": [
					"application/json"
				],
				"produces": [
					"text/html"
				],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ModelAndView"
						}
					},
					"204": {
						"description": "No Content"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					}
				},
				"deprecated": false
			}
		},
		"/v1/collateral/securitiesRelease": {
			"post": {
				"tags": [
					"ReleaseSecurity"
				],
				"summary": "Save Release Securities Details",
				"operationId": "saveReleaseSecuritiesUsingPOST",
				"consumes": [
					"application/json"
				],
				"produces": [
					"*/*"
				],
				"parameters": [{
					"in": "body",
					"name": "saveReleaseSecuritiesRequest",
					"description": "saveReleaseSecuritiesRequest",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CollateralReleaseSecuritiesRequest"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "array",
							"items": {
								"$ref": "#/definitions/SaveReleaseSecuritiesResponse"
							}
						}
					},
					"201": {
						"description": "Created"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/v1/collateral/securitiesReleaseSummary": {
			"get": {
				"tags": [
					"ReleaseSecurity"
				],
				"summary": "Get Release Securities Details",
				"operationId": "getReleaseSecuritiesUsingGET",
				"produces": [
					"*/*"
				],
				"parameters": [{
						"name": "collateral",
						"in": "query",
						"description": "collateral",
						"required": true,
						"type": "string"
					},
					{
						"name": "instrument",
						"in": "query",
						"description": "instrument",
						"required": true,
						"type": "string"
					},
					{
						"name": "segment",
						"in": "query",
						"description": "segment",
						"required": true,
						"type": "string"
					}
				],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "array",
							"items": {
								"$ref": "#/definitions/GetReleaseSecuritiesSummaryResponse"
							}
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/v1/collateral/securitiesReleaseValidation": {
			"post": {
				"tags": [
					"ReleaseSecurity"
				],
				"summary": "Validate Release Securities Details",
				"operationId": "validateReleaseSecuritiesRequestUsingPOST",
				"consumes": [
					"application/json"
				],
				"produces": [
					"*/*"
				],
				"parameters": [{
					"in": "body",
					"name": "collateralReleaseSecuritiesRequest",
					"description": "collateralReleaseSecuritiesRequest",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CollateralReleaseSecuritiesRequest"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "array",
							"items": {
								"$ref": "#/definitions/ValidateReleaseSecuritiesResponse"
							}
						}
					},
					"201": {
						"description": "Created"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/v1/collateral/securitiesTransfer": {
			"post": {
				"tags": [
					"TransferSecurity"
				],
				"summary": "Save Transfer Securities Details",
				"operationId": "saveTransferSecuritiesUsingPOST",
				"consumes": [
					"application/json"
				],
				"produces": [
					"*/*"
				],
				"parameters": [{
					"in": "body",
					"name": "saveTransferSecuritiesRequest",
					"description": "saveTransferSecuritiesRequest",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CollateralTransferSecuritiesRequest"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "array",
							"items": {
								"$ref": "#/definitions/SaveTransferSecuritiesResponse"
							}
						}
					},
					"201": {
						"description": "Created"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/v1/collateral/securitiesTransferSummary": {
			"get": {
				"tags": [
					"TransferSecurity"
				],
				"summary": "Get Transfer Securities Details",
				"operationId": "getTransferSecuritiesSummaryUsingGET",
				"produces": [
					"*/*"
				],
				"parameters": [{
						"name": "collateral",
						"in": "query",
						"description": "collateral",
						"required": true,
						"type": "string"
					},
					{
						"name": "instrument",
						"in": "query",
						"description": "instrument",
						"required": true,
						"type": "string"
					},
					{
						"name": "segment",
						"in": "query",
						"description": "segment",
						"required": true,
						"type": "string"
					}
				],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "array",
							"items": {
								"$ref": "#/definitions/GetTransferSecuritiesSummaryResponse"
							}
						}
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		},
		"/v1/collateral/securitiesTransferValidation": {
			"post": {
				"tags": [
					"TransferSecurity"
				],
				"summary": "Validate Transfer Securities Details",
				"operationId": "validateTransferSecuritiesRequestNew1UsingPOST",
				"consumes": [
					"application/json"
				],
				"produces": [
					"*/*"
				],
				"parameters": [{
					"in": "body",
					"name": "validateTransferSecuritiesRequest",
					"description": "validateTransferSecuritiesRequest",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CollateralTransferSecuritiesRequest"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"type": "array",
							"items": {
								"$ref": "#/definitions/ValidateTransferSecuritiesResponse"
							}
						}
					},
					"201": {
						"description": "Created"
					},
					"401": {
						"description": "Unauthorized"
					},
					"403": {
						"description": "Forbidden"
					},
					"404": {
						"description": "Not Found"
					}
				},
				"deprecated": false
			}
		}
	},
	"definitions": {
		"CollateralReleaseSecuritiesRequest": {
			"type": "object",
			"properties": {
				"commonRequest": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/CommonRequest"
					}
				},
				"filename": {
					"type": "string"
				},
				"flgRequestType": {
					"type": "string"
				},
				"flgRequestedDateType": {
					"type": "string"
				},
				"natureOfRequest": {
					"type": "string"
				},
				"valueDate": {
					"type": "string",
					"format": "date-time"
				}
			},
			"title": "CollateralReleaseSecuritiesRequest"
		},
		"CollateralTransferSecuritiesRequest": {
			"type": "object",
			"properties": {
				"filename": {
					"type": "string"
				},
				"flgRequestType": {
					"type": "string"
				},
				"flgRequestedDateType": {
					"type": "string"
				},
				"natureOfRequest": {
					"type": "string"
				},
				"validateTransferSecurities": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/ValidateTransferSecuritiesRequest"
					}
				},
				"valueDate": {
					"type": "string",
					"format": "date-time"
				}
			},
			"title": "CollateralTransferSecuritiesRequest"
		},
		"CommonRequest": {
			"type": "object",
			"properties": {
				"availableQty": {
					"type": "integer",
					"format": "int64"
				},
				"bankCode": {
					"type": "string"
				},
				"clientCode": {
					"type": "string"
				},
				"custodianCode": {
					"type": "string"
				},
				"instrumentId": {
					"type": "string"
				},
				"instrumentType": {
					"type": "string"
				},
				"isin": {
					"type": "string"
				},
				"memberCode": {
					"type": "string"
				},
				"netAvailableQty": {
					"type": "integer",
					"format": "int64"
				},
				"pendingForRelease": {
					"type": "string"
				},
				"pendingForTransfer": {
					"type": "string"
				},
				"requestedAmount": {
					"type": "string"
				},
				"requestedQtyInWords": {
					"type": "string"
				},
				"requestedQuantity": {
					"type": "integer",
					"format": "int64"
				},
				"securitySymbol": {
					"type": "string"
				},
				"segmentIndicator": {
					"type": "string"
				},
				"series": {
					"type": "string"
				},
				"tmCode": {
					"type": "string"
				},
				"typeOfCollateral": {
					"type": "string"
				},
				"userId": {
					"type": "string"
				}
			},
			"title": "CommonRequest"
		},
		"GetReleaseSecuritiesSummaryResponse": {
			"type": "object",
			"properties": {
				"availableQty": {
					"type": "integer",
					"format": "int64"
				},
				"clientCode": {
					"type": "string"
				},
				"collateral": {
					"type": "string"
				},
				"custodian": {
					"type": "string"
				},
				"instrumentId": {
					"type": "integer",
					"format": "int32"
				},
				"instrumentType": {
					"type": "string"
				},
				"isin": {
					"type": "string"
				},
				"natureOfRequest": {
					"type": "string"
				},
				"netAvailableQty": {
					"type": "integer",
					"format": "int64"
				},
				"pendingRelease": {
					"type": "string"
				},
				"pendingTransfer": {
					"type": "string"
				},
				"processDate": {
					"$ref": "#/definitions/Timestamp"
				},
				"requestDate": {
					"type": "string",
					"format": "date-time"
				},
				"requestId": {
					"type": "integer",
					"format": "int64"
				},
				"requestType": {
					"type": "string"
				},
				"requestValueDate": {
					"type": "string",
					"format": "date-time"
				},
				"requestedQty": {
					"type": "integer",
					"format": "int64"
				},
				"segment": {
					"type": "string"
				},
				"series": {
					"type": "string"
				},
				"status": {
					"type": "string"
				},
				"symbol": {
					"type": "string"
				},
				"tmCode": {
					"type": "string"
				},
				"trnRequestDate": {
					"$ref": "#/definitions/Timestamp"
				},
				"valueDate": {
					"type": "string",
					"format": "date-time"
				}
			},
			"title": "GetReleaseSecuritiesSummaryResponse"
		},
		"GetTransferSecuritiesSummaryResponse": {
			"type": "object",
			"properties": {
				"availableQty": {
					"type": "integer",
					"format": "int64"
				},
				"clientCode": {
					"type": "string"
				},
				"collateral": {
					"type": "string"
				},
				"custodian": {
					"type": "string"
				},
				"isin": {
					"type": "string"
				},
				"netAvailableQty": {
					"type": "integer",
					"format": "int64"
				},
				"pendingRelease": {
					"type": "string"
				},
				"pendingTransfer": {
					"type": "string"
				},
				"requestId": {
					"type": "integer",
					"format": "int64"
				},
				"segment": {
					"type": "string"
				},
				"series": {
					"type": "string"
				},
				"symbol": {
					"type": "string"
				},
				"tmCode": {
					"type": "string"
				}
			},
			"title": "GetTransferSecuritiesSummaryResponse"
		},
		"Link": {
			"type": "object",
			"properties": {
				"href": {
					"type": "string"
				},
				"templated": {
					"type": "boolean"
				}
			},
			"title": "Link"
		},
		"Map«string,Link»": {
			"type": "object",
			"title": "Map«string,Link»",
			"additionalProperties": {
				"$ref": "#/definitions/Link"
			}
		},
		"ModelAndView": {
			"type": "object",
			"properties": {
				"empty": {
					"type": "boolean"
				},
				"model": {
					"type": "object"
				},
				"modelMap": {
					"type": "object",
					"additionalProperties": {
						"type": "object"
					}
				},
				"reference": {
					"type": "boolean"
				},
				"status": {
					"type": "string",
					"enum": [
						"100 CONTINUE",
						"101 SWITCHING_PROTOCOLS",
						"102 PROCESSING",
						"103 CHECKPOINT",
						"200 OK",
						"201 CREATED",
						"202 ACCEPTED",
						"203 NON_AUTHORITATIVE_INFORMATION",
						"204 NO_CONTENT",
						"205 RESET_CONTENT",
						"206 PARTIAL_CONTENT",
						"207 MULTI_STATUS",
						"208 ALREADY_REPORTED",
						"226 IM_USED",
						"300 MULTIPLE_CHOICES",
						"301 MOVED_PERMANENTLY",
						"302 FOUND",
						"302 MOVED_TEMPORARILY",
						"303 SEE_OTHER",
						"304 NOT_MODIFIED",
						"305 USE_PROXY",
						"307 TEMPORARY_REDIRECT",
						"308 PERMANENT_REDIRECT",
						"400 BAD_REQUEST",
						"401 UNAUTHORIZED",
						"402 PAYMENT_REQUIRED",
						"403 FORBIDDEN",
						"404 NOT_FOUND",
						"405 METHOD_NOT_ALLOWED",
						"406 NOT_ACCEPTABLE",
						"407 PROXY_AUTHENTICATION_REQUIRED",
						"408 REQUEST_TIMEOUT",
						"409 CONFLICT",
						"410 GONE",
						"411 LENGTH_REQUIRED",
						"412 PRECONDITION_FAILED",
						"413 PAYLOAD_TOO_LARGE",
						"413 REQUEST_ENTITY_TOO_LARGE",
						"414 URI_TOO_LONG",
						"414 REQUEST_URI_TOO_LONG",
						"415 UNSUPPORTED_MEDIA_TYPE",
						"416 REQUESTED_RANGE_NOT_SATISFIABLE",
						"417 EXPECTATION_FAILED",
						"418 I_AM_A_TEAPOT",
						"419 INSUFFICIENT_SPACE_ON_RESOURCE",
						"420 METHOD_FAILURE",
						"421 DESTINATION_LOCKED",
						"422 UNPROCESSABLE_ENTITY",
						"423 LOCKED",
						"424 FAILED_DEPENDENCY",
						"425 TOO_EARLY",
						"426 UPGRADE_REQUIRED",
						"428 PRECONDITION_REQUIRED",
						"429 TOO_MANY_REQUESTS",
						"431 REQUEST_HEADER_FIELDS_TOO_LARGE",
						"451 UNAVAILABLE_FOR_LEGAL_REASONS",
						"500 INTERNAL_SERVER_ERROR",
						"501 NOT_IMPLEMENTED",
						"502 BAD_GATEWAY",
						"503 SERVICE_UNAVAILABLE",
						"504 GATEWAY_TIMEOUT",
						"505 HTTP_VERSION_NOT_SUPPORTED",
						"506 VARIANT_ALSO_NEGOTIATES",
						"507 INSUFFICIENT_STORAGE",
						"508 LOOP_DETECTED",
						"509 BANDWIDTH_LIMIT_EXCEEDED",
						"510 NOT_EXTENDED",
						"511 NETWORK_AUTHENTICATION_REQUIRED"
					]
				},
				"view": {
					"$ref": "#/definitions/View"
				},
				"viewName": {
					"type": "string"
				}
			},
			"title": "ModelAndView"
		},
		"SaveReleaseSecuritiesResponse": {
			"type": "object",
			"properties": {
				"batchTiming": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"status": {
					"type": "string"
				},
				"validationResponse": {
					"$ref": "#/definitions/ValidationResponse"
				}
			},
			"title": "SaveReleaseSecuritiesResponse"
		},
		"SaveTransferSecuritiesResponse": {
			"type": "object",
			"properties": {
				"batchTiming": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"status": {
					"type": "string"
				},
				"validationResponse": {
					"$ref": "#/definitions/ValidationResponse"
				}
			},
			"title": "SaveTransferSecuritiesResponse"
		},
		"Timestamp": {
			"type": "object",
			"properties": {
				"date": {
					"type": "integer",
					"format": "int32"
				},
				"day": {
					"type": "integer",
					"format": "int32"
				},
				"hours": {
					"type": "integer",
					"format": "int32"
				},
				"minutes": {
					"type": "integer",
					"format": "int32"
				},
				"month": {
					"type": "integer",
					"format": "int32"
				},
				"nanos": {
					"type": "integer",
					"format": "int32"
				},
				"seconds": {
					"type": "integer",
					"format": "int32"
				},
				"time": {
					"type": "integer",
					"format": "int64"
				},
				"timezoneOffset": {
					"type": "integer",
					"format": "int32"
				},
				"year": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "Timestamp"
		},
		"ValidateReleaseSecuritiesResponse": {
			"type": "object",
			"properties": {
				"availableQty": {
					"type": "integer",
					"format": "int64"
				},
				"bankCode": {
					"type": "string"
				},
				"clientCode": {
					"type": "string"
				},
				"custodianCode": {
					"type": "string"
				},
				"instrumentId": {
					"type": "string"
				},
				"instrumentType": {
					"type": "string"
				},
				"isin": {
					"type": "string"
				},
				"memberCode": {
					"type": "string"
				},
				"requestedAmount": {
					"type": "string"
				},
				"requestedQuantity": {
					"type": "integer",
					"format": "int64"
				},
				"securitySymbol": {
					"type": "string"
				},
				"segmentIndicator": {
					"type": "string"
				},
				"tmCode": {
					"type": "string"
				},
				"typeOfCollateral": {
					"type": "string"
				},
				"validationResponseList": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/ValidationResponse"
					}
				}
			},
			"title": "ValidateReleaseSecuritiesResponse"
		},
		"ValidateTransferSecuritiesRequest": {
			"type": "object",
			"properties": {
				"availableQty": {
					"type": "integer",
					"format": "int64"
				},
				"bankCode": {
					"type": "string"
				},
				"clientCode": {
					"type": "string"
				},
				"custodianCode": {
					"type": "string"
				},
				"destinationColType": {
					"type": "string"
				},
				"destinationSegment": {
					"type": "string"
				},
				"instrumentId": {
					"type": "string"
				},
				"instrumentType": {
					"type": "string"
				},
				"isin": {
					"type": "string"
				},
				"memberCode": {
					"type": "string"
				},
				"netAvailableQty": {
					"type": "integer",
					"format": "int64"
				},
				"pendingForRelease": {
					"type": "string"
				},
				"pendingForTransfer": {
					"type": "string"
				},
				"requestedAmount": {
					"type": "string"
				},
				"requestedQtyInWords": {
					"type": "string"
				},
				"requestedQuantity": {
					"type": "integer",
					"format": "int64"
				},
				"securitySymbol": {
					"type": "string"
				},
				"segmentIndicator": {
					"type": "string"
				},
				"series": {
					"type": "string"
				},
				"tmCode": {
					"type": "string"
				},
				"typeOfCollateral": {
					"type": "string"
				},
				"userId": {
					"type": "string"
				}
			},
			"title": "ValidateTransferSecuritiesRequest"
		},
		"ValidateTransferSecuritiesResponse": {
			"type": "object",
			"properties": {
				"availableQty": {
					"type": "integer",
					"format": "int64"
				},
				"bankCode": {
					"type": "string"
				},
				"clientCode": {
					"type": "string"
				},
				"custodianCode": {
					"type": "string"
				},
				"destinationColType": {
					"type": "string"
				},
				"destinationSegment": {
					"type": "string"
				},
				"instrumentId": {
					"type": "string"
				},
				"instrumentType": {
					"type": "string"
				},
				"isin": {
					"type": "string"
				},
				"memberCode": {
					"type": "string"
				},
				"requestedAmount": {
					"type": "string"
				},
				"requestedQuantity": {
					"type": "integer",
					"format": "int64"
				},
				"securitySymbol": {
					"type": "string"
				},
				"segmentIndicator": {
					"type": "string"
				},
				"tmCode": {
					"type": "string"
				},
				"typeOfCollateral": {
					"type": "string"
				},
				"validationResponseList": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/ValidationResponse"
					}
				}
			},
			"title": "ValidateTransferSecuritiesResponse"
		},
		"ValidationResponse": {
			"type": "object",
			"properties": {
				"errorId": {
					"type": "integer",
					"format": "int32"
				},
				"errorMessage": {
					"type": "array",
					"items": {
						"type": "string"
					}
				},
				"errorName": {
					"type": "string"
				}
			},
			"title": "ValidationResponse"
		},
		"View": {
			"type": "object",
			"properties": {
				"contentType": {
					"type": "string"
				}
			},
			"title": "View"
		}
	}
};