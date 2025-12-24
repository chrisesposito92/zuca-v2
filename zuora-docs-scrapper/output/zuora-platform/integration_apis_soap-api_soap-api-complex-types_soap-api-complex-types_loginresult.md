---
title: "LoginResult"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/loginresult"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:18.603Z"
---

# LoginResult

The LoginResult object is returned from the login() call.

## Syntax

`LoginResult = login(username, password)`

## Field descriptions

All field names are case sensitive.

| Name | Type | Allowable values | Description |
| --- | --- | --- | --- |
| Session | string | A valid session key | The authentication token used in the ServerURL object. The Session Token is a string that we return during the login process of the API. The session token contains information that confirms that the user making an API request is authenticated. All non-login APIs must pass the session token (received during the login process) as part of the request header. The session token length is variable. The session token can be up to 512 characters in length. If you are storing the session token on the client side, make sure that the storage can accommodate the string of up to 512 characters. |
| ServerURL | string | A valid URL | The URL to redirect to for all subsequent API calls. |
