---
title: "Revenue API Reference (2025-08-06)"
url: "https://developer.zuora.com/other-api/revenue/overview/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:17:01.359Z"
---

# Revenue API Reference (2025-08-06)

Download OpenAPI specification:[Download](https://developer.zuora.com/yaml/RevPro_api.yaml)

# Introduction

Welcome to the reference for Zuora Revenue REST API!

REST is a web-service protocol that lends itself to rapid development by using everyday HTTP and JSON technology. Zuora Revenue provides various REST APIs for data integration. Use these REST APIs to authenticate and integrate data from the source ERP systems with Zuora Revenue.

All Zuora Revenue REST APIs are secured by using HTTPS. The authentication scheme is token-based authentication, which means an authenticated user must generate a token and then use it for all subsequent APIs until the token expires.

This reference provides detailed descriptions about functions, requests, and responses of each REST API.

Zuora Revenue REST APIs can be broadly classified into the following categories:

-   Authentication

-   Inbound

-   Outbound


**Remember:**

-   The API service must be enabled for your tenant in the first place. Otherwise, the 405 error will be returned for every API request you submitted. To enable the API service, contact Zuora Revenue Support.

-   Both the inbound and outbound operations require an authentication token to perform integration. You can obtain the token by using the Authentication operation.

-   You can find the Revenue object model on [Zuora Revenue data object model](https://knowledgecenter.zuora.com/Zuora_Revenue/Revenue_insights_and_analytics/Zuora_Revenue_data_object_model).


## Endpoints

After the APIs are provisioned in Zuora Revenue Cloud, you can get the endpoint and use that endpoint to call the APIs.

## Requirements

Before you use the Zuora Revenue APIs, make sure the following requirements are met:

-   Zuora Revenue uses role based access control to restrict system access to authorized users. To use the Zuora Revenue APIs, make sure that your user role has the **Webservices Inbound** and **Webservices Outbound** previleges in Zuora Revenue security settings. For more information, see [Manage User Access](https://knowledgecenter.zuora.com/Zuora_Revenue/B_System_Related_Configuration/B_Manage_user_access).
-   To use the inbound operations to upload data into Zuora Revenue, the upload templates must be created by using the **File Upload** menu options in the Zuora Revenue UI. Currently, the APIs support transaction upload, bundle upload, and event upload.
-   To use the outbound operations, the outbound GL interface mapping must be set up in the Zuora Revenue UI (**Setups > Application > Interface Setup**).

## Requests and Responses

Zuora Revenue APIs support the JSON format of HTTP responses. Inbound operations for data upload support the CSV format only.

## Inbound Data Error

All the inbound data into Zuora Revenue are first loaded into pre-stage tables, namely CUST\_UI tables in Zuora Revenue, and then pushed to the corresponding staging tables from CUST\_UI tables.

If the data fails in the CUST\_UI tables, the entire batch of records will be marked as `Failed`. It means All or Nothing approach will be followed when data is being inserted to the CUST\_UI tables. If the data has been successfully inserted into the CUST\_UI tables, it will then be automatically pushed to the staging tables and no manual work is required.

Any uncollected data that remains in the staging tables can be manually fixed or downloaded, and can be reposted from the upstream systems.

You can use the Stage Error operations to retrieve error information about the uploaded data.
