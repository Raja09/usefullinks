var oas = {
    "swagger": "2.0",
    "info": {
        "version": "0.0.1",
        "title": "Collections of Nodes Design Pattern"
    },
    "host": "YOURORGNAME-test.apigee.net",
    "basePath": "/api/v1",
    "schemes": [
        "https",
        "http"
    ],
    "consumes": [
        "application/json"
    ],
    "produces": [
        "application/json"
    ],
    "paths": {
        "/nodes": {
            "get": {
                "tags": ["Node"],
                "description": "Return list of nodes.",
                "summary": "Returns list of existing nodes.",
                "operationId": "getNodes",
                "parameters": [
                    {"$ref": "#/parameters/pagesize" },
                    {"$ref": "#/parameters/pagenumber" },
                    {"$ref": "#/parameters/customerId" },
                    {"$ref": "#/parameters/nodeName" },
                    {
                        "name": "status",
                        "in": "query",
                        "required": false,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Success",
                        "schema": {
                            "$ref": "#/definitions/NodesResponse"
                        }
                    },
                    "400": {
                        "description": "Error",
                        "schema": {
                            "$ref": "#/definitions/ErrorResponse"
                        }
                    }
                }
            },
            "post": {
                "tags": ["Node"],
                "description": "Create Node",
                "summary": "Create a new node.",
                "operationId": "createNode",
                "parameters": [{
                    "name": "node",
                    "in": "body",
                    "required": true,
                    "schema": {
                        "$ref": "#/definitions/NodeCreateRequest"
                    }
                }],
                "responses": {
                    "200": {
                        "description": "Success",
                        "schema": {
                            "$ref": "#/definitions/NodeResponse"
                        }
                    },
                    "400": {
                        "description": "Error",
                        "schema": {
                            "$ref": "#/definitions/ErrorResponse"
                        }
                    }
                }
            }
        },
        "/nodes/{id}": {
            "get": {
                "tags": ["Node"],
                "description": "Return node details.",
                "summary": "Return details for an existing node.",
                "operationId": "getNode",
                "parameters": [{
                    "$ref": "#/parameters/nodeIdPath"
                }],
                "responses": {
                    "200": {
                        "description": "Success",
                        "schema": {
                            "$ref": "#/definitions/NodeResponse"
                        }
                    },
                    "400": {
                        "description": "Error",
                        "schema": {
                            "$ref": "#/definitions/ErrorResponse"
                        }
                    }
                }
            },
            "put": {
                "tags": ["Node"],
                "description": "Update Node completely",
                "summary": "Update an existing node.",
                "operationId": "updateNode",
                "parameters": [{
                    "$ref": "#/parameters/nodeIdPath"
                }, {
                    "name": "node",
                    "in": "body",
                    "required": true,
                    "schema": {
                        "$ref": "#/definitions/NodeUpdateRequest"
                    }
                }],
                "responses": {
                    "200": {
                        "description": "Success",
                        "schema": {
                            "$ref": "#/definitions/NodeResponse"
                        }
                    },
                    "400": {
                        "description": "Error",
                        "schema": {
                            "$ref": "#/definitions/ErrorResponse"
                        }
                    }
                }
            },
            "patch": {
                "tags": ["Node"],
                "description": "Update Node partially",
                "summary": "Update an existing node.",
                "operationId": "patchNode",
                "parameters": [{
                    "$ref": "#/parameters/nodeIdPath"
                }, {
                    "name": "node",
                    "in": "body",
                    "required": true,
                    "schema": {
                        "$ref": "#/definitions/NodePatchRequest"
                    }
                }],
                "responses": {
                    "200": {
                        "description": "Success",
                        "schema": {
                            "$ref": "#/definitions/NodeResponse"
                        }
                    },
                    "400": {
                        "description": "Error",
                        "schema": {
                            "$ref": "#/definitions/ErrorResponse"
                        }
                    }
                }
            },
            "delete": {
                "tags": ["Node"],
                "description": "Delete node.",
                "summary": "Delete an existing node.",
                "operationId": "deleteNode",
                "parameters": [{
                    "$ref": "#/parameters/nodeIdPath"
                }],
                "responses": {
                    "200": {
                        "description": "Success",
                        "schema": {
                            "$ref": "#/definitions/NodeResponse"
                        }
                    },
                    "400": {
                        "description": "Error",
                        "schema": {
                            "$ref": "#/definitions/ErrorResponse"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "metadata": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "string"
                },
                "self": {
                    "type": "string"
                },
                "generated": {
                    "type": "string",
                    "format": "date-time"
                },
                "lastModified": {
                    "type": "string",
                    "format": "date-time"
                },
                "etag": {
                    "type": "string"
                }
            }
        },
        "pagination": {
            "type": "object",
            "properties": {
                "pageNumber": {
                    "description": "Page number",
                    "type": "integer",
                    "format": "int32"
                },
                "totalRecordCount": {
                    "description": "Total number of records",
                    "type": "integer",
                    "format": "int32"
                },
                "totalPage": {
                    "description": "Total number of pages",
                    "type": "integer",
                    "format": "int32"
                },
                "currentPageItem": {
                    "description": "Number of items in this page",
                    "type": "integer",
                    "format": "int32"
                },
                "pageSize": {
                    "description": "Page size",
                    "type": "integer",
                    "format": "int32"
                },
                "current": {
                    "description": "Link to current page",
                    "type": "string"
                },
                "next": {
                    "description": "Link to next page",
                    "type": "string"
                },
                "previous": {
                    "description": "Link to previous page",
                    "type": "string"
                }
            }
        },
        "uuid": {
            "description": "The Universally unique identifier.",
            "type": "string"
        },
        "Node": {
            "type": "object",
            "properties": {
                "nodeName": {
                    "type": "string"
                },
                "parentNodeId": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "status": {
                    "type": "string"
                }
            }
        },
        "NodeCreateRequest": {
            "type": "object",
            "required":["nodeName", "description"],
            "properties": {
                "nodeName": {
                    "type": "string"
                },
                "parentNodeId": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "status": {
                    "type": "string"
                }
            }
        },
        "NodePatchRequest": {
            "type": "object",
            "required":["status"],
            "properties": {
                "nodeName": {
                    "type": "string"
                },
                "parentNodeId": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "status": {
                    "type": "string"
                }
            }
        },
        "NodeUpdateRequest": {
            "type": "object",
            "required":["nodeName","description","status"],
            "properties": {
                "nodeName": {
                    "type": "string"
                },
                "parentNodeId": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "status": {
                    "type": "string"
                }
            }
        },
        "NodeResponseFrag": {
            "properties": {
                "metadata": {"$ref": "#/definitions/metadata"},
                "uuid": {
                    "$ref": "#/definitions/uuid"
                }
            }
        },
        "NodeResponse": {
            "allOf": [
                {
                    "$ref": "#/definitions/NodeResponseFrag"
                }, {
                    "$ref": "#/definitions/NodeCreateRequest"
                }
            ]
        },
        "NodesResponse": {
            "type": "object",
            "properties": {
                "metadata": {"$ref": "#/definitions/metadata"},
                "pagination": {"$ref": "#/definitions/pagination"},
                "nodes": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/NodeResponse"
                    }
                }
            }
        },
        "Error": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "string"
                },
                "userMessage": {
                    "type": "string"
                },
                "systemMessage": {
                    "type": "string"
                }
            }
        },
        "ErrorResponse": {
            "type": "object",
            "properties": {
                "error": {
                    "description": "Used to pass error information in a response.",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/Error"
                    }
                }
            }
        }
    },
    "parameters": {
        "pagesize": {
            "in": "query",
            "name": "pagesize",
            "description": "Number of items to be returned. Default 10.",
            "required": false,
            "type": "number",
            "default": 10
        },
        "pagenumber": {
            "in": "query",
            "name": "pagenumber",
            "description": "Starting point for next set of items. Default 0.",
            "required": false,
            "type": "number",
            "default": 10
        },
        "customerId": {
            "in": "query",
            "name": "customerId",
            "description": "The customer identifier.",
            "required": false,
            "type": "string"
        },
        "nodeName": {
            "in": "query",
            "name": "nodeName",
            "description": "The name assigned to the node.",
            "required": false,
            "type": "string"
        },
        "nodeIdPath": {
            "in": "path",
            "name": "id",
            "description": "The node identifier.",
            "required": true,
            "type": "string"
        }

    }
};