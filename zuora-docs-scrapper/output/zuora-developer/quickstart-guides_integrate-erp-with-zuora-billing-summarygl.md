---
title: "Integrate your ERP system with Zuora Billing Summary GL pattern"
url: "https://developer.zuora.com/quickstart-guides/integrate-erp-with-zuora-billing-summarygl/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:20.357Z"
---

#

Integrate your ERP system with Zuora Billing Summary GL pattern

##

Overview

This guide will help you quickly integrate your ERP system with Zuora Billing, allowing you to manage both digital and physical goods. By the end of this guide:

-   You will have written code that invokes the correct Zuora Billing API calls at each step.
-   You will have performed an initial integration test.

##

Prerequisites

Before getting started, ensure you have the following:

-   **API access credentials** : For both your ERP and Zuora Billing in both production and test/dev environments. Zuora’s Developer [Get Started tutorial](https://developer.zuora.com/docs/get-started/introduction/) explains how.
-   **Basic understanding of REST APIs** : Familiarity with JSON and API calls.
-   **Access to a Zuora Billing sandbox** : Every Zuora customer is provisioned at least one sandbox. If you need one for this project you can request one from Zuora.
-   **Product Catalog configuration** : This document assumes pricing is captured in Zuora Billing's Product Catalog. This is optional but is assumed here for clarity. Order capture in Zuora Billing is also excluded for clarity.
-   **ERP knowledge** : Familiarity with your ERP workflows and monthly close processes (journal entries, invoicing, payments).

Assess the [pre-built integrations provided by Zuora](https://knowledgecenter.zuora.com/Zuora_Platform/Integration/Integration_Hub) before getting started. Connectors exist to NetSuite, SAP, and Workday, and these support the same **Summary GL** integration described here with no custom coding required.

##

Integration guide

###

Step 1: Understand the integration patterns

A complete ERP integration with Zuora includes two out of the three integration points:

-   **Summary GL integration** :
    Your ERP receives summary journal entries from Zuora Billing for financial reporting. This guide explains how to do this.
-   **ERP item level integration** : You choose to centralize all your AR in your ERP system even though Zuora's AR and collections abilities are superior to your ERP's capabilities. This pattern is detailed in a companion guide, [Integrate your ERP with Zuora Billing item level pattern](/quickstart-guides/integrate-erp-with-zuora-billing-item-level/) .
-   **ERP Fulfillment integration** :
    Zuora Billing handles all orders and financial transactions including Receivables. Your ERP system manages the fulfillment of physical goods and acts as the General Ledger (GL). This pattern is detailed in a companion guide, [Integrate your ERP with Zuora Billing ERP Fulfillment pattern](/quickstart-guides/integrate-erp-with-zuora-billing-erpfulfillment/) .

The ERP item level pattern and the ERP fulfillment pattern are complementary. You will implement one or the other, but not both.

**You can start by implementing just the Summary GL Integration at this time.** This document describes how to do this. This enables a faster integration, so you can start billing and collecting for digital goods and services immediately. Once you’re familiar with our APIs, you can scale and automate billing, collection, and revenue recognition for both physical and digital goods by implementing the ERP Fulfillment integration.

###

Step 2: Set up your integration environment

-   **Zuora Sandbox** : Make sure your Zuora Billing sandbox is connected to your ERP test environment.
-   **Test Data** : Work with your Finance team to define exhaustive sample transactions in your sandbox.

###

Step 3: Finalize scope with your Finance team

This solution expects that you will run your integration at least once for every accounting period close. When initiated, a mandatory input is the accounting period name. The steps in this solution are:

1.  Query the accounting period details.
2.  If needed, initiate a trial balance run in Zuora Billing for the specified accounting period and poll for the trial balance to complete. It is an asynchronous process.
3.  Review the trial balance result for errors:
    -   If no error is identified, close the accounting period.
    -   If errors are reported, ask your Finance team to review, make necessary corrections, and run another trial balance.
4.  If the accounting period is closed, initiate a Journal Run and poll for the Journal Run to complete.
5.  Obtain journal entries from Zuora, and transform them as needed for ingestion.
6.  Record journal entry transfer to your General Ledger.

**Review those solution steps with your Finance team. Do not skip this review. Ensure all the following questions are answered**:

-   Do you all agree on these steps? Are they all necessary?
-   Is it clear who will initiate this process and how will they specify the accounting period name? Are there flags or data that should be verified before this process begins?
-   What errors do they see today with their manual trial balance runs and journal runs?
-   Who should be notified if there are issues in steps 3 or 4 where you run a trial balance and close the accounting period? What action will they take?
-   Confirm with Finance on the journal entry types to be exported in Step 5 . How should journal entries be grouped or batched?
-   Confirm the transformation required to load the journal entries into your General Ledger. What file format is required? Are all the mappings known? Are there any plans for future changes to the GL account names?
-   Who should be notified upon completion of this integration process?
-   Who will verify test or QA results? In production what reconciliation reports are needed post-transfer to confirm accuracy.

###

Step 4: Submit API calls for integration

####

A: Query the accounting period details

Use the `POST /v1/action/query` call to obtain the accounting period ID using the accounting period name, assuming the name is `December 2024`. Supply a valid OAuth bearer token for your Zuora tenant and ensure that you are calling the correct [base URL](https://knowledgecenter.zuora.com/Zuora_Environments/Zuora_Data_Centers) for your tenant. It will differ between production and sandbox.

```bash
curl -i -X POST \
  'https://rest.apisandbox.zuora.com/v1/action/query' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json" \
  -H "X-Zuora-WSDL-Version: 2024-05-20" \
  -d '{
    "queryString": "select Id, Name, Status from AccountingPeriod where Name = '\''December 2024'\''"
  }'
```

-   This call will return the accounting period details. Cache the results for future lookups.
    -   If Status is closed, either report to Finance or skip to Step D.

####

B: Start a trial balance run

[Run a trial balance](https://developer.zuora.com/v1-api-reference/api/operation/PUT_RunTrialBalance/) is the appropriate call and it requires the accounting period ID obtained from the previous step (step 4A):

```bash
curl -i -X PUT \
'https://rest.apisandbox.zuora.com/v1/accounting-periods/8ad09fc27fd495c6017fd6ee4c2865d8/run-trial-balance' \
 -H "Authorization: Bearer $ztoken"
```

This should return a success message, indicating that you have initiated an asynchronous process. You need to pause and check to see if the run has completed. The length of time it takes a trial balance to complete varies, you should review with your Finance team how long a trial balance run normally takes.

Use [Retrieve an accounting period](https://developer.zuora.com/v1-api-reference/api/operation/GET_AccountingPeriod/) to determine the status of the trial balance run. The following example is a sample call invoking this endpoint. Bear in mind to replace the accounting period ID and the bearer token when you're making this call:

```bash
curl -i -X GET \
'https://rest.apisandbox.zuora.com/v1/accounting-periods/8ad09fc27fd495c6017fd6ee4c2865d8' \
 -H "Authorization: Bearer $ztoken"
```

Here’s a sample output of an accounting period for which a trial balance run has been completed successfully:

```json
{
  "id" : "8ad09fc27fd495c6017fd6ee4c2865d8",
  "name" : "December 2024",
  "startDate" : "2024-12-01",
  "endDate" : "2024-12-31",
  "status" : "Open",
  "runTrialBalanceStatus" : "Completed",
  "runTrialBalanceStart" : "2025-01-28 14:12:03",
  "runTrialBalanceEnd" : "2025-01-28 14:12:23",
  "runTrialBalanceErrorMessage" : null,
  "fiscalYear" : 2024,
  ...
  "success" : true
  }
```

If `runTrialBalanceEnd` is null, check the `runTrialBalanceStatus` attribute.

-   If it is in the `Pending` or `Processing` status, go back into your polling loop.
-   If it is `Error` , you need to stop and involve your Finance team for a resolution. Do not re-enter your polling loop.
-   If it is `Complete` and `runTrialBalanceEnd` has a value, the trial balance completed successfully and you can proceed to the next step.

####

C: Review the trial balance - Close accounting period

Verify the accounting period `status` is `Open`. This is different from the `runTrialBalanceStatus`. If open, then it’s time to close the period. The following code sample shows you how to close an accounting period with [Close an accounting period](https://developer.zuora.com/v1-api-reference/api/operation/PUT_CloseAccountingPeriod/):

```bash
curl -i -X PUT \
'https://rest.apisandbox.zuora.com/v1/accounting-periods/8ad09fc27fd495c6017fd6ee4c2865d8/close' \
 -H "Authorization: Bearer $ztoken"
```

During development, when you need to rerun your tests, you can use [Reopen an accounting period](https://developer.zuora.com/v1-api-reference/api/operation/PUT_ReopenAccountingPeriod/).

####

D: Start the journal run

After closing the accounting period, you can [create a journal run](https://developer.zuora.com/v1-api-reference/api/operation/POST_JournalRun/). The transaction types needed for this step vary. You should edit the list of types based on the instructions of your Finance team:

```bash
curl -i -X POST \
https://rest.apisandbox.zuora.com/v1/journal-runs \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $ztoken" \
-d '{
  "accountingPeriodName": "March 2025",
  "journalEntryDate": "2025-04-01",
  "transactionTypes": [
    {"type": "Invoice Item"},
    {"type": "Taxation Item"},
    {"type": "Debit Memo Item (Charge)"},
    {"type": "Debit Memo Item (Tax)"},
    {"type": "Credit Memo Item (Charge)"},
    {"type": "Credit Memo Item (Tax)"},
    {"type": "Credit Memo Application Item"},
    {"type": "Electronic Payment Application Item"},
    {"type": "External Payment Application Item"},
    {"type": "Electronic Refund Application Item"},
    {"type": "External Refund Application Item"}
  ]
}'
```

Journal runs are asynchronous, and again you need to query for the status and loop until the status returned is completed. To query the status of a journal run, use [Retrieve a journal run](https://developer.zuora.com/v1-api-reference/api/operation/GET_JournalRun/):

```bash
curl -i -X GET \
'https://rest.apisandbox.zuora.com/v1/journal-runs/JR-00000035' \
-H "Authorization: Bearer $ztoken"
```

Only proceed when the status is `Completed`. End this process if the status is `Error`, `CancelInprogress`, `Cancelled`, or `DeleteInprogress`.

####

E: Obtain journal entries from Zuora

With the journal run completed, [extract the summary journal entries](https://developer.zuora.com/v1-api-reference/api/operation/GET_AllSummaryJournalEntries/):

```bash
curl -i -X GET \ 'https://rest.apisandbox.zuora.com/v1/journal-entries/journal-runs/JR-00000038' \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $ztoken"
```

A JSON structure is returned with all the entries. You need to convert these entries into a format suitable for ingestion by your General Ledger.

####

F: Record journal entry transfer to your General Ledger

After loading the journals into your General Ledger, you must update the Zuora Journal Entries as **transferred to accounting**. It ensures these journal entries are only sent to your General Ledger once. Do not skip this step. Uploading the journal entries more than once will upset everyone.

Use [update a summary journal entry](https://developer.zuora.com/v1-api-reference/api/operation/PUT_BasicSummaryJournalEntry/). There isn’t an option to tag the entire journal run as "transferred to accounting", you have to loop through each journal entry. This sample only updates a single journal entry only:

```bash
curl -i -X PUT \
'https://rest.apisandbox.zuora.com/v1/journal-entries/JE-00001477/basic-information' \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer $ztoken" \
  -d '{
    "journalEntryItems": [
      {
        "accountingCodeName": "Accounts Receivable",
        "type": "Debit"
      },
      {
        "accountingCodeName": "Tax",
        "type": "Credit"
      }
    ],
    "notes": "Transferred to GL 2025-01-02",
    "transferredToAccounting": "Yes"
  }'
```

When complete, verify again that all the journal entries have been tagged correctly. Flag any issues to the Finance team in a manner that they cannot overlook.

###

Step 5: Test and Validate Your Integration

1.  **Verify data flow** :
    Ensure journal entries are correctly posted to your ERP system and that amounts match between Zuora and your ERP.
2.  **Test for errors** :
    Test for scenarios like invalid accounting period names or trial balance failures. Make sure errors are flagged for review.

##

Conclusion

Congratulations! You’ve completed the initial integration setup. More on all our APIs, including tutorials, FAQs, and reference documentation can be found in our [Zuora Developer Center](https://developer.zuora.com).
