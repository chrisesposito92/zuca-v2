---
title: "login()"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/login"
product: "zuora-platform"
scraped_at: "2025-12-24T05:39:20.138Z"
---

# login()

Use the login() call to log you in to the Zuora server.

The login() call takes a user name and a password and logs you in to the Zuora server.

## Usage

Use this call to log in to the Zuora server. The call returns a session ID, which you then use for subsequent calls for authenticating with the system.

Although you can log in, you cannot explicitly log out. The session timeout for any given login session is defined by the Session timeout value configured in the [Security Policies](/zuora-platform/system-management/administrator-settings/security-policies) administration setting. The default setting is 15 minutes.

## Syntax and arguments

`login(username, password, entityId, entityName)`

The arguments must be specified in the following order: username, password, entityId, entityName. If you reverse the order, then you receive the following error: `Unexpected subelement username/password/entityId/entityName`

| Argument | Description |
| --- | --- |
| username | The login name of the entity user who is logging in. |
| password | The password for that entity user. |
| entityId | (Optional) The Id of the entity that you want to access. Note that you must have permission to access the entity. You can get the entity Id through the REST GET Entities call.Note:This argument is only used for Zuora Multi-entity.You can specify either the entityId or entityName argument in the login call to access and view an entity.If both entityId and entityName are specified in the login call, an error occurs.If neither entityId nor entityName is specified in the login call, you will log in to the entity in which your user account is created. |
| entityName | (Optional) The name of the entity that you want to access. Note that you must have permission to access the entity. You can get the entity name through the REST GET Entities call.Note:This argument is only used for Multi-entity.You can specify either the entityId or entityName argument in the login call to access and view an entity.If both entityId and entityName are specified in the login call, an error occurs.If neither entityId nor entityName is specified in the login call, you will log in to the entity in which your user account is created. |

## Response

LoginResult

## Faults

-   LoginFault

-   UnexpectedErrorFault
