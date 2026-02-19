---
title: "Table auditloginevent"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/data-model-of-audit-trail/table-auditloginevent"
product: "zuora-platform"
scraped_at: "2026-02-19T03:23:31.692Z"
---

# Table auditloginevent

The auditloginevent table records and monitors user login activities in the Zuora system, detailing login history and attributes.

The Zuora system records every login for each user in the `auditloginevent` table and allows you to monitor the login history for each and every user. See the table structure below.

| Attribute | Type | Description |
| --- | --- | --- |
| browsertype | varchar | The login user's browser type. Possible values are:IEFireFoxSafariNetscapeChromeOperaApiUnknownRestLoginRestBiz |
| browserversion | varchar | The login user's browser version |
| createdbyid | varchar | The login user's id |
| createddate | timestamp with time zone | The record's creation date |
| day | integer | The day when the record is created. |
| eventid | varchar | Id of the login event |
| hostname | varchar | The device connected to the network (currently not work, the value is the same as ipaddress) |
| id | varchar | Id of the record |
| ipaddress | varchar | The login IP address |
| logintype | varchar | The login type. Possible values are:CLIENT_CREDENTIALSSSOPASSWORDSWITCH_ENTITY_UI |
| month | integer | The month when the record is created. |
| sequencenumber | bigint | The sequence number of the login record |
| status | varchar | The login status. Possible values are:SuccessAuthFailPasswordExpired |
| timestamp | timestamp with time zone | The timestamp of the login |
| tokenid | varchar | The id of the login token |
| userid** | varchar | Id of the login user |
| username | varchar | The user name of the login user |
| year | integer | The year when the record is created. |
