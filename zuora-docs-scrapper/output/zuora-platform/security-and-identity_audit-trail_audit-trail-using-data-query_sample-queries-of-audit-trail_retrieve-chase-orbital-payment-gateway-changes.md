---
title: "Retrieve Chase Orbital Payment Gateway changes"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/sample-queries-of-audit-trail/retrieve-chase-orbital-payment-gateway-changes"
product: "zuora-platform"
scraped_at: "2026-02-20T17:44:58.238Z"
---

# Retrieve Chase Orbital Payment Gateway changes

Learn how to retrieve auditing records of changes to the Chase Orbital payment gateway configuration using a data query.

The following use case retrieves the auditing records of changes to the Chase Orbital payment gateway configuration.

1.  Submit a [data query](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_query/data_query.dita) job through UI or API with the following SQL query:

    SELECT username AS Username, action AS Action, Objectid AS ObjectID, objecttype AS ObjectType, objectname AS ObjectName, attributeid AS Attribute, oldvalue AS OldValue, newvalue AS NewValue, timestamp AS Timestamp FROM auditobjectchangeevent WHERE objecttype = 'PaymentGateway' AND year = 2022 AND month = 11 ORDER BY timestamp DESC LIMIT 100000

2.  Check the status of the query job through UI or [Get data query](https://www.zuora.com/developer/api-references/api/operation/GET_DataQueryJob) job API operation.
3.  Download the query result when the job is completed. See the following example of the query result.

    Username,Action,ObjectID,ObjectType,ObjectName,Attribute,OldValue,NewValue,Timestamp audit-trail@zuora.com,CREATED,8xx08c0f7f76c096017f863b914635xx,PaymentGateway,Chase Latest Version,AcceptCarteBancaire,,false,2022-11-12T02:22:05.16Z audit-trail@zuora.com,CREATED,8xx08c0f7f76c096017f863b914635xx,PaymentGateway,Chase Latest Version,AcceptCabal,,false,2022-11-12T02:22:05.16Z audit-trail@zuora.com,CREATED,8xx08c0f7f76c096017f863b914635xx,PaymentGateway,Chase Latest Version,AcceptDiners,,false,2022-11-12T02:22:05.16Z audit-trail@zuora.com,CREATED,8xx08c0f7f76c096017f863b914635xx,PaymentGateway,Chase Latest Version,EnableSafetechFraudService,,false,2022-11-12T02:22:05.16Z audit-trail@zuora.com,CREATED,8xx08c0f7f76c096017f863b914635xx,PaymentGateway,Chase Latest Version,IsDefaultGateway,,false,2022-11-12T02:22:05.16Z audit-trail@zuora.com,CREATED,8xx08c0f7f76c096017f863b914635xx,PaymentGateway,Chase Latest Version,AcceptVisa,,true,2022-11-12T02:22:05.16Z audit-trail@zuora.com,CREATED,8xx08c0f7f76c096017f863b914635xx,PaymentGateway,Chase Latest Version,AcceptMir,,false,2022-11-12T02:22:05.16Z audit-trail@zuora.com,CREATED,8xx08c0f7f76c096017f863b914635xx,PaymentGateway,Chase Latest Version,AcceptHipercard,,false,2022-11-12T02:22:05.16Z audit-trail@zuora.com,CREATED,8xx08c0f7f76c096017f863b914635xx,PaymentGateway,Chase Latest Version,DisableCardTypeIndicators,,false,2022-11-12T02:22:05.16Z audit-trail@zuora.com,CREATED,8xx08c0f7f76c096017f863b914635xx,PaymentGateway,Chase Latest Version,GatewayName,,Test Chase Latest Version Audit Trail,2022-11-12T02:22:05.16Z audit-trail@zuora.com,CREATED,8xx08c0f7f76c096017f863b914635xx,PaymentGateway,Chase Latest Version,VerifyNewPaymentMethod,,true,2022-11-12T02:22:05.16Z audit-trail@zuora.com,CREATED,8xx08c0f7f76c096017f863b914635xx,PaymentGateway,Chase Latest Version,AcceptElectron,,false,2022-11-12T02:22:05.16Z audit-trail@zuora.com,UPDATED,2xx2c0f87881b8340178a4511eff09xx,PaymentGateway,Chase 7.0.1,VerifyUpdatedPaymentMethod,false,true,2022-11-11T01:20:58.943Z audit-trail@zuora.com,UPDATED,8xx0824e7f6e7f15017f71ba0b4236xx,PaymentGateway,Chase Latest Version Deprecated,IsActive,true,false,2022-11-10T01:19:22.597Z
