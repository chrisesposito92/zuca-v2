---
title: "Sample code for login() call"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/login/sample-code-for-login-call"
product: "zuora-platform"
scraped_at: "2025-12-24T05:39:22.523Z"
---

# Sample code for login() call

This reference provides sample codes for the login() call.

## Sample code

Login login = new Login(); login.setUsername("username@company.com"); login.setPassword("password"); LoginResponse resp = stub.login(login); LoginResult result = resp.getResult(); // set new endpoint ServiceClient client = stub.\_getServiceClient(); client.getOptions().getTo().setAddress(result.getServerUrl()); // create session for all subsequent calls SessionHeader header = new SessionHeader(); header.setSession(result.getSession());

## Sample request

<!-- sample login call --> <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns1="http://api.zuora.com/"\> <SOAP-ENV:Body> <ns1:login> <ns1:username>username@zuora.com</ns1:username> <ns1:password>password</ns1:password> </ns1:login> </SOAP-ENV:Body> </SOAP-ENV:Envelope>

## Sample response

<!-- sample login response --> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Body> <ns1:loginResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:result> <ns1:Session>LiUBQF...ugxg2jJuCA==</ns1:Session> <ns1:ServerUrl>https://apisandbox.zuora.com/apps/services/a/26.0</ns1:ServerUrl> </ns1:result> </ns1:loginResponse> </soapenv:Body> </soapenv:Envelope>

## Sample subsequent API calls

<!-- sample API query --> <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns1="http://api.zuora.com/"\> <SOAP-ENV:Header> <ns1:SessionHeader> <ns1:session>LiUBQF...ugxg2jJuCA==</ns1:session> </ns1:SessionHeader> </SOAP-ENV:Header> <SOAP-ENV:Body> <ns1:query> <ns1:queryString>select id from account</ns1:queryString> </ns1:query> </SOAP-ENV:Body> </SOAP-ENV:Envelope>
