var oas = {
	"swagger": "2.0",
	"info": {
		"version": "0.0.1",
		"title": "Clearing and Settlement API"
	},
	"host": "clearing-and-settlement-noncalcified-unceremoniousness.apps.parivartandev1.com",
	"basePath": "/",
	"tags": [{
			"name": "login-controller",
			"description": "Login Controller"
		},
		{
			"name": "user-controller",
			"description": "User Controller"
		}
	],
	"paths": {
		"/v1/bundleMapping": {
			"post": {
				"tags": [
					"user-controller"
				],
				"summary": "Adding Bundles Based on User Id and User Type",
				"operationId": "userBundleMappingUsingPOST",
				"consumes": [
					"application/json"
				],
				"produces": [
					"application/json"
				],
				"parameters": [{
					"in": "body",
					"name": "bundleRequestList",
					"description": "bundleRequestList",
					"required": true,
					"schema": {
						"$ref": "#/definitions/BundleRequestList"
					}
				}],
				"responses": {
					"201": {
						"description": "Created",
						"schema": {
							"$ref": "#/definitions/ApiResponse"
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
		"/v1/common/captcha": {
			"get": {
				"tags": [
					"login-controller"
				],
				"summary": "Generating Captcha",
				"operationId": "createCaptchaUsingGET",
				"produces": [
					"*/*",
					"application/json"
				],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ApiResponse"
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
		"/v1/common/changePassword": {
			"post": {
				"tags": [
					"login-controller"
				],
				"summary": "Change Password based on the User Id",
				"operationId": "changeAndResetPasswordUsingPOST",
				"consumes": [
					"application/json"
				],
				"produces": [
					"application/json"
				],
				"parameters": [{
					"in": "body",
					"name": "changePasswordRequest",
					"description": "changePasswordRequest",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ChangePasswordRequest"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ApiResponse"
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
		"/v1/common/userLogin": {
			"post": {
				"tags": [
					"login-controller"
				],
				"summary": "Login user with UserID,Password,MemberId,DeviceId ",
				"operationId": "userLoginUsingPOST",
				"consumes": [
					"application/json"
				],
				"produces": [
					"application/json"
				],
				"parameters": [{
					"in": "body",
					"name": "loginRequest",
					"description": "loginRequest",
					"required": true,
					"schema": {
						"$ref": "#/definitions/LoginRequest"
					}
				}],
				"responses": {
					"201": {
						"description": "Created",
						"schema": {
							"$ref": "#/definitions/ApiResponse"
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
		"/v1/faturesMapping": {
			"post": {
				"tags": [
					"user-controller"
				],
				"summary": "Adding bundle and segment for perticular USer",
				"operationId": "featuresMappingUsingPOST",
				"consumes": [
					"application/json"
				],
				"produces": [
					"application/json"
				],
				"parameters": [{
					"in": "body",
					"name": "featureRequestList",
					"description": "featureRequestList",
					"required": true,
					"schema": {
						"$ref": "#/definitions/FeatureListReq"
					}
				}],
				"responses": {
					"201": {
						"description": "Created",
						"schema": {
							"$ref": "#/definitions/ApiResponse"
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
		"/v1/resetPassword": {
			"post": {
				"tags": [
					"login-controller"
				],
				"summary": "Reset Password",
				"operationId": "resetPasswordUsingPOST",
				"consumes": [
					"application/json"
				],
				"produces": [
					"application/json"
				],
				"parameters": [{
					"in": "body",
					"name": "resetPasswordRequest",
					"description": "resetPasswordRequest",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ResetPasswordRequest"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ApiResponse"
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
		"/v1/segmentBundleMapping": {
			"post": {
				"tags": [
					"user-controller"
				],
				"summary": "Adding Segments Based on User Id and User Type",
				"operationId": "segmentUserBundleMappingUsingPOST",
				"consumes": [
					"application/json"
				],
				"produces": [
					"application/json"
				],
				"parameters": [{
					"in": "body",
					"name": "segmentRequestList",
					"description": "segmentRequestList",
					"required": true,
					"schema": {
						"$ref": "#/definitions/SegmentRequestList"
					}
				}],
				"responses": {
					"201": {
						"description": "Created",
						"schema": {
							"$ref": "#/definitions/ApiResponse"
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
		"/v1/segmentDetails": {
			"get": {
				"tags": [
					"user-controller"
				],
				"summary": "Getting All Segments",
				"operationId": "segmentListUsingGET",
				"produces": [
					"application/json"
				],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ApiResponse"
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
		"/v1/user": {
			"post": {
				"tags": [
					"user-controller"
				],
				"summary": "New User Creation",
				"operationId": "insertNewUserUsingPOST",
				"consumes": [
					"application/json"
				],
				"produces": [
					"application/json"
				],
				"parameters": [{
					"in": "body",
					"name": "requset",
					"description": "requset",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CreateUserRequset"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ApiResponse"
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
		"/v1/user/{memberId}": {
			"get": {
				"tags": [
					"user-controller"
				],
				"summary": "Get User By Member ID",
				"operationId": "findUserDetailsByMemberIdUsingGET",
				"produces": [
					"application/json"
				],
				"parameters": [{
					"name": "memberId",
					"in": "path",
					"description": "memberId",
					"required": true,
					"type": "string"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ApiResponse"
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
		"/v1/userSearch": {
			"post": {
				"tags": [
					"user-controller"
				],
				"summary": "Search Details based ON userId,MemberId",
				"operationId": "bundleSegmentDetailsUsingPOST",
				"consumes": [
					"application/json"
				],
				"produces": [
					"application/json"
				],
				"parameters": [{
					"in": "body",
					"name": "request",
					"description": "request",
					"required": true,
					"schema": {
						"$ref": "#/definitions/UserBundleSegmentDetailsReq"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ApiResponse"
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
		"/v1/validateUser": {
			"post": {
				"tags": [
					"user-controller"
				],
				"summary": "Validate user Details",
				"operationId": "validateProfileFieldsUsingPOST",
				"consumes": [
					"application/json"
				],
				"produces": [
					"application/json"
				],
				"parameters": [{
					"in": "body",
					"name": "userDetailsReq",
					"description": "userDetailsReq",
					"required": true,
					"schema": {
						"$ref": "#/definitions/UserDetailsReq"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ApiResponse"
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
		"ApiResponse": {
			"type": "object",
			"title": "ApiResponse"
		},
		"BundleDetails": {
			"type": "object",
			"properties": {
				"bundleControl": {
					"type": "string"
				},
				"bundleDescription": {
					"type": "string"
				},
				"bundleId": {
					"type": "string"
				},
				"bundleName": {
					"type": "string"
				},
				"bundlePrem": {
					"type": "string"
				},
				"bundleStatus": {
					"type": "string"
				},
				"bundleType": {
					"type": "string"
				},
				"createdBy": {
					"type": "string"
				},
				"functionDetails": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/FunctionDetails"
					}
				},
				"memberType": {
					"type": "string"
				},
				"userType": {
					"type": "string"
				}
			},
			"title": "BundleDetails"
		},
		"BundleRequest": {
			"type": "object",
			"properties": {
				"bundleName": {
					"type": "string"
				},
				"isOperationFlag": {
					"type": "boolean"
				},
				"userId": {
					"type": "string"
				}
			},
			"title": "BundleRequest"
		},
		"BundleRequestList": {
			"type": "object",
			"properties": {
				"bundleList": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/BundleRequest"
					}
				}
			},
			"title": "BundleRequestList"
		},
		"BundleResponse": {
			"type": "object",
			"properties": {
				"bundleId": {
					"type": "string"
				},
				"responseMessage": {
					"type": "string"
				},
				"userId": {
					"type": "string"
				}
			},
			"title": "BundleResponse"
		},
		"BundleTypeRequest": {
			"type": "object",
			"properties": {
				"bundleDescription": {
					"type": "string"
				},
				"bundleName": {
					"type": "string"
				}
			},
			"title": "BundleTypeRequest"
		},
		"BundleUserMappingResponse": {
			"type": "object",
			"properties": {
				"bundleResponse": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/BundleResponse"
					}
				},
				"responseBuild": {
					"$ref": "#/definitions/ResponseBuild"
				}
			},
			"title": "BundleUserMappingResponse"
		},
		"ChangePasswordRequest": {
			"type": "object",
			"properties": {
				"confirmPassword": {
					"type": "string"
				},
				"existingPassword": {
					"type": "string"
				},
				"memberId": {
					"type": "string"
				},
				"newPassword": {
					"type": "string"
				},
				"userId": {
					"type": "string"
				}
			},
			"title": "ChangePasswordRequest"
		},
		"ChangePasswordResponse": {
			"type": "object",
			"properties": {
				"memberId": {
					"type": "string"
				},
				"responseMessage": {
					"type": "string"
				},
				"userId": {
					"type": "string"
				}
			},
			"title": "ChangePasswordResponse"
		},
		"CreateUserRequset": {
			"type": "object",
			"properties": {
				"emailId": {
					"type": "string"
				},
				"firstName": {
					"type": "string"
				},
				"lastName": {
					"type": "string"
				},
				"memberId": {
					"type": "string"
				},
				"mobileNo": {
					"type": "integer",
					"format": "int64"
				},
				"userBundlesList": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/UserBundles"
					}
				},
				"userId": {
					"type": "string"
				},
				"userSegmentList": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/UserSegment"
					}
				},
				"userType": {
					"type": "string"
				}
			},
			"title": "CreateUserRequset"
		},
		"CreateUserResponse": {
			"type": "object",
			"properties": {
				"memberId": {
					"type": "string"
				},
				"userId": {
					"type": "string"
				}
			},
			"title": "CreateUserResponse"
		},
		"FeatureBundleList": {
			"type": "object",
			"properties": {
				"bundleName": {
					"type": "string"
				},
				"segmentList": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/SegmentFeatureReq"
					}
				}
			},
			"title": "FeatureBundleList"
		},
		"FeatureListReq": {
			"type": "object",
			"properties": {
				"featurelist": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/FeatureMappingRequest"
					}
				}
			},
			"title": "FeatureListReq"
		},
		"FeatureMappingRequest": {
			"type": "object",
			"properties": {
				"bundleList": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/FeatureBundleList"
					}
				},
				"memberId": {
					"type": "string"
				},
				"userId": {
					"type": "string"
				}
			},
			"title": "FeatureMappingRequest"
		},
		"FeaturesResponse": {
			"type": "object",
			"properties": {
				"memberId": {
					"type": "string"
				},
				"memberType": {
					"type": "string"
				},
				"memberUserType": {
					"type": "string"
				},
				"segmentId": {
					"type": "string"
				},
				"segmentName": {
					"type": "string"
				},
				"userType": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/UserTypeRequest"
					}
				}
			},
			"title": "FeaturesResponse"
		},
		"FunctionDetails": {
			"type": "object",
			"properties": {
				"funcDesc": {
					"type": "string"
				},
				"screenDetailsList": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/ScreenDetails"
					}
				}
			},
			"title": "FunctionDetails"
		},
		"LoginRequest": {
			"type": "object",
			"properties": {
				"deviceId": {
					"type": "string"
				},
				"memberId": {
					"type": "string"
				},
				"password": {
					"type": "string"
				},
				"userId": {
					"type": "string"
				}
			},
			"title": "LoginRequest"
		},
		"LoginResponse": {
			"type": "object",
			"properties": {
				"message": {
					"type": "string"
				},
				"remainingAttempts": {
					"type": "integer",
					"format": "int32"
				},
				"role": {
					"type": "string"
				},
				"sessionStatus": {
					"type": "string"
				}
			},
			"title": "LoginResponse"
		},
		"ResetPasswordRequest": {
			"type": "object",
			"properties": {
				"memberId": {
					"type": "string"
				},
				"newPassword": {
					"type": "string"
				},
				"userId": {
					"type": "string"
				}
			},
			"title": "ResetPasswordRequest"
		},
		"ResetPasswordResponse": {
			"type": "object",
			"properties": {
				"code": {
					"type": "integer",
					"format": "int32"
				},
				"response": {
					"type": "string"
				}
			},
			"title": "ResetPasswordResponse"
		},
		"Response": {
			"type": "object",
			"properties": {
				"error": {
					"$ref": "#/definitions/LoginResponse"
				},
				"response": {
					"$ref": "#/definitions/LoginResponse"
				},
				"status": {
					"type": "string"
				}
			},
			"title": "Response"
		},
		"ResponseBuild": {
			"type": "object",
			"properties": {
				"code": {
					"type": "integer",
					"format": "int32"
				},
				"responseMessage": {
					"type": "string"
				}
			},
			"title": "ResponseBuild"
		},
		"ScreenDetails": {
			"type": "object",
			"properties": {
				"screenName": {
					"type": "string"
				}
			},
			"title": "ScreenDetails"
		},
		"SegmentDetails": {
			"type": "object",
			"properties": {
				"createdBy": {
					"type": "string"
				},
				"funcAreaId": {
					"type": "string"
				},
				"segmentId": {
					"type": "string"
				},
				"segmentName": {
					"type": "string"
				},
				"status": {
					"type": "string"
				}
			},
			"title": "SegmentDetails"
		},
		"SegmentDetailsResponse": {
			"type": "object",
			"properties": {
				"message": {
					"type": "string"
				},
				"segmentName": {
					"type": "string"
				},
				"segmentStatusCode": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "SegmentDetailsResponse"
		},
		"SegmentFeatureReq": {
			"type": "object",
			"properties": {
				"isOperationFlag": {
					"type": "boolean"
				},
				"segmentName": {
					"type": "string"
				}
			},
			"title": "SegmentFeatureReq"
		},
		"SegmentRequest": {
			"type": "object",
			"properties": {
				"isOperationFlag": {
					"type": "boolean"
				},
				"segmentName": {
					"type": "string"
				},
				"status": {
					"type": "string"
				},
				"userId": {
					"type": "string"
				}
			},
			"title": "SegmentRequest"
		},
		"SegmentRequestList": {
			"type": "object",
			"properties": {
				"segmentList": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/SegmentRequest"
					}
				}
			},
			"title": "SegmentRequestList"
		},
		"SegmentResponse": {
			"type": "object",
			"properties": {
				"bundlePresentResponseList": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/SegmentDetailsResponse"
					}
				},
				"responseMessage": {
					"type": "string"
				},
				"userId": {
					"type": "string"
				}
			},
			"title": "SegmentResponse"
		},
		"SegmentUserMappingResponse": {
			"type": "object",
			"properties": {
				"responseBuild": {
					"$ref": "#/definitions/ResponseBuild"
				},
				"segmentResponses": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/SegmentResponse"
					}
				}
			},
			"title": "SegmentUserMappingResponse"
		},
		"UserBundleSegmentDetailsReq": {
			"type": "object",
			"properties": {
				"memberId": {
					"type": "string"
				},
				"segmentName": {
					"type": "string"
				},
				"userId": {
					"type": "string"
				},
				"userType": {
					"type": "string"
				}
			},
			"title": "UserBundleSegmentDetailsReq"
		},
		"UserBundleSegmentDetailsRes": {
			"type": "object",
			"properties": {
				"listOfUserDetails": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/UserDetailsResponse"
					}
				}
			},
			"title": "UserBundleSegmentDetailsRes"
		},
		"UserBundles": {
			"type": "object",
			"properties": {
				"bundleId": {
					"type": "string"
				},
				"bundleName": {
					"type": "string"
				}
			},
			"title": "UserBundles"
		},
		"UserDetailsReq": {
			"type": "object",
			"properties": {
				"emailid": {
					"type": "string"
				},
				"memid": {
					"type": "string"
				},
				"phoneNo": {
					"type": "integer",
					"format": "int64"
				},
				"userid": {
					"type": "string"
				}
			},
			"title": "UserDetailsReq"
		},
		"UserDetailsResponse": {
			"type": "object",
			"properties": {
				"bundleDetailsList": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/BundleDetails"
					}
				},
				"memberId": {
					"type": "string"
				},
				"segmentDetailsList": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/SegmentDetails"
					}
				},
				"userId": {
					"type": "string"
				},
				"userStatus": {
					"type": "string"
				},
				"userType": {
					"type": "string"
				}
			},
			"title": "UserDetailsResponse"
		},
		"UserMaintenanceEntityResponse": {
			"type": "object",
			"properties": {
				"createUserResponse": {
					"$ref": "#/definitions/CreateUserResponse"
				},
				"responseBuild": {
					"$ref": "#/definitions/ResponseBuild"
				}
			},
			"title": "UserMaintenanceEntityResponse"
		},
		"UserResponse": {
			"type": "object",
			"properties": {
				"filedname": {
					"type": "string"
				},
				"responsemsg": {
					"type": "string"
				},
				"statuscode": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "UserResponse"
		},
		"UserSegment": {
			"type": "object",
			"properties": {
				"segmentId": {
					"type": "string"
				},
				"segmentName": {
					"type": "string"
				}
			},
			"title": "UserSegment"
		},
		"UserTypeRequest": {
			"type": "object",
			"properties": {
				"bundleTypeList": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/BundleTypeRequest"
					}
				},
				"userType": {
					"type": "string"
				}
			},
			"title": "UserTypeRequest"
		}
	}
}