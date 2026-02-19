---
title: "Use API to submit a predefined program"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/best-practice-for-using-revenue-apis/use-api-to-submit-a-predefined-program"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:40:48.588Z"
---

# Use API to submit a predefined program

Learn how to use the API to submit a predefined program by retrieving necessary IDs and executing the program with specified parameters.

## Use API to submit a predefined program

To submit a predefined program by using [Revenue Jobs](https://developer.zuora.com/other-api/revenue/tag/Revenue-Jobs/) operations, the program ID and the organization ID are required for the API path parameters. The complete workflow includes first retrieving the appropriate IDs to use and then submitting the request to start the program with specified program parameters.

The following example shows how to start the Revpro 3.0 Accounting Transfer Master program by using Revenue APIs.

1.  Use the [Get list of available organizations program](https://developer.zuora.com/other-api/revenue/operation/GET_RevenueOrgDetails/) operation to retrieve a list of organizations that are set up in Zuora Revenue.

    | Endpoint | /api/integration/v1/revenue-orgs |
    | --- | --- |
    | Response example | { "data": [ { "org_id": 1, "org_name": "EMEA" } ] } |

    There is only one organization configured in Zuora Revenue and the organization ID is 1.

2.  Use the [Get list of available programs and program parameters](https://developer.zuora.com/other-api/revenue/operation/GET_ProgramDetails/) operation to retrieve a list of supported programs as well as the available parameters for each program.

    | Endpoint | /api/integration/v1/programs |
    | --- | --- |
    | Response example | { "data": [ { "program_id": 149, "program_name": "Revpro3.0 Accounting Transfer Master" "parameters": [ { "id": 228, "mandatory": "N", "name": "CRITERIA NAME", "sequence": 1, "type": "VARCHAR2" }, { "id": 229, "mandatory": "N", "name": "CRITERIA VALUE", "sequence": 2, "type": "VARCHAR2" }, { "id": 230, "mandatory": "N", "name": "EXCLUDE FLAG", "sequence": 3, "type": "VARCHAR2" } ] } ] } |

    The ID of the Revpro 3.0 Accounting Transfer Master program is 149. Three parameters are available for this program.

3.  Use the [Submit a program with specified parameters](https://developer.zuora.com/other-api/revenue/operation/POST_SubmitRevenueJob/) operation to start the Revpro 3.0 Accounting Transfer Master program. The organization ID in the path is 1 and the program ID is 149. In the request body, the first two parameters (CRITERIA NAME and CRITERIA VALUE) are left empty. The third parameter EXCLUDE FLAG is set to N.

    | Endpoint | /api/integration/v1/{org_id}/programs/{program_id}/submitExample: /api/integration/v1/1/programs/149/submit |
    | --- | --- |
    | Request example | { "parameters": [ { "parameter_id": 228, "sequence": 1, "parameter_value" : "" }, { "parameter_id": 229, "sequence": 2, "parameter_value" : "" }, { "parameter_id": 230, "sequence": 3, "parameter_value" : "N" } ] } |
    | Response example | { "job_id": "26570", "message": "Request ID: 26570 submitted successfully", "success": true } |

    After the operation is submitted successfully, the job ID 26570 is returned, which can be used to check the started job status in the next step.

4.  To check the job status, use the [Get the job status](https://developer.zuora.com/other-api/revenue/operation/GET_RevenueJobStatus/) operation.

    | Endpoint | /api/integration/v1/{org_id}/jobs/{job_id}Example: /api/integration/v1/1/jobs/26570 |
    | --- | --- |
    | Response example | { "data": { "actual_start_date": null, "crtd_by": "SYSADMIN", "crtd_dt": "2021-12-08T18:46:46+00:00", "error_message": "No Period Status Found for ORG_ID:N,this job cannot be submitted", "id": 26570, "sec_atr_val": "2000", "status": "Error", "updt_dt": "2021-12-08T18:46:46+00:00" }, "success": true } |
