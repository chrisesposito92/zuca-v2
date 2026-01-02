---
title: "Integrate your ERP system with Zuora Billing item level pattern"
url: "https://developer.zuora.com/quickstart-guides/integrate-erp-with-zuora-billing-item-level/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:20.669Z"
---

#

Integrate your ERP system with Zuora Billing item level pattern

##

Purpose

This guide helps developers build a custom integration between Zuora Billing and your ERP system to synchronize the following financial documents:

-   **Invoices** and their **invoice items**
-   **Payments**
-   **Refunds**
-   **Credit memos** and their **credit memo items**
-   **Debit memos** and their **debit memo items**

This integration enables your ERP to act as the Accounts Receivable master for your organization.

Zuora provides a productized integration with NetSuite that includes this functionality. An enhanced SAP connector with this functionality is under development, contact your Zuora Account Team for an update on availability or check our [pre-built connectors](https://knowledgecenter.zuora.com/Zuora_Platform/Integration/Integration_Hub/Pre-Built_Connectors).

##

Prerequisites

Before starting, ensure you have the following:

-   **API Access Credentials** : For both your ERP and Zuora Billing in both production and test or dev environments. Zuora’s Developer [Get started tutorial](https://developer.zuora.com/docs/get-started/introduction/) explains how.
-   **Access to a Zuora Billing Sandbox** : Use a Zuora sandbox environment. Do not run these examples against your production tenant without first testing in sandbox. Regardless of environment the oauth client you use must have the update transaction role assigned.
-   **ERP Knowledge** : Understand your ERP's API endpoints for creating or updating the relevant financial documents. Review and document the Zuora Billing and ERP data schemas and how you will map from one to the other.
-   **Assess the pre-built [integrations provided by Zuora.](https://knowledgecenter.zuora.com/Zuora_Platform/Integration/Integration_Hub)** Connectors exist to NetSuite, SAP and Workday and may support the same **Item** integration pattern described here. A pre-built connector will be cheaper and more reliable than the solutions detailed here.
-   This guide makes extensive use of the recent v1 synchronous Object Query feature. You will find [this detailed Object Query reference](https://developer.zuora.com/docs/guides/expand-filter-fields-sort/) valuable.

##

The item level pattern

This integration makes your ERP the system of record for Accounts Receivable. If Zuora Billing is also processing payments and refunds in addition to invoices, you must add those transactions to this integration.

###

Interation patterns

Three integration patterns are available for integrating with your ERP. You can choose to integrate multiple ERP and CRM patterns depending upon your needs.

The three ERP integration patterns are:

-   [GL Summary integration](https://developer.zuora.com/quickstart-guides/integrate-erp-with-zuora-billing-summarygl/) : Most common pattern. Zuora's Billing and Revenue products both support a close process that automatically generate GL entries for transfer and insertion. [We have several pre-built connectors that support this integration.](https://knowledgecenter.zuora.com/Zuora_Platform/Integration/Integration_Hub) . But we've also created [a companion guide to this one that details a custom integration for this pattern](https://developer.zuora.com/quickstart-guides/integrate-erp-with-zuora-billing-summarygl/) .
-   [ERP item level integration](#integrate-erp-with-zuora-billing-item-level-pattern) : You choose to centralize all your AR in your ERP even though Zuora's AR and collections abilities are superior to your ERP's capabilities.
-   [ERP Fulfillment integration](https://developer.zuora.com/quickstart-guides/integrate-erp-with-zuora-billing-erpfulfillment/) - Zuora Billing manages AR with this pattern. Your ERP manages the inventory, warehousing, and shipment of physical goods. Zuora bills for both digital (including subscription) items and physical goods.

This ERP item level pattern and the ERP fulfillment pattern are complementary. You will implement one or the other, but not both.

Regardless of choice, it is common to also implement the GL Summary integration. Follow our [GL Summary pattern integration guide](https://developer.zuora.com/quickstart-guides/integrate-erp-with-zuora-billing-summarygl/) or use one of our [productized connectors](https://knowledgecenter.zuora.com/Zuora_Platform/Integration/Integration_Hub) for your integration. You can combine an out-of-the-box connector with this custom pattern.

###

ERP item level integration approaches

In this document, we focus only on documenting the ERP item level integration. You can choose between two implementation approaches:

-   A periodic 'Pull' or polling approach where you query Zuora Billing for new transactions and send those to your ERP using either a 3rd party, 'integration Platform as a Service'(iPaaS), solution or your own custom code. This approach is robust, and simpler to implement than the 'Push' approach described next. This approach is also resilient to any failures and is easy to recover from. It will have a greater latency than the 'Push' approach.
-   A 'Push' approach where you leverage Zuora's event notifications or webhooks to send this information to your ERP or 3rd party iPaaS. Only utilize this approach if you are sure the receiver of the Zuora events can process or store the generated events reliably. Zuora can generate over 100,000 transactions each hour. Consult with your Finance team on existing and expected transaction volumes and throughput. Events process promptly but there can be sporadic delays, especially at peak times such as month end. Model and test this solution carefully before deploying to production.

###

Required actions

Regardless of the approach you choose, you must take the following actions:

-   Define the scope of the integration by defining which transaction types, invoices, payments, refunds, credit memos and debit memos are to be sent to your ERP. You may have access to our 'Invoice Item Settlement' feature which supports the application of payments or payment parts to individual invoice items. This guide assumes you are NOT using this feature. If you are, you can choose to add the relevant 'application part' objects to this integration.
-   Document the source and target of every relevant field or attribute for every transaction type.
-   Augment the Zuora Billing Account object with a custom field that captures an ERP account identifier that records the ERP account matching the Billing Account. For instructions on how to create a custom field, see [Manage custom fields with Object Manager](https://knowledgecenter.zuora.com/Zuora_Platform/Extensibility/Custom_Fields/Manage_custom_fields_with_the_Object_Manager) .

    In this guide, we assume the `ERPAccountId__c` custom field exists. `ERPAccountId__c` should be a text field long enough to capture the ERP account identifier. Configure this field as **Filterable** (Indexed) and **Auditable**, and do not make the field required. You can use [Data Loader](https://knowledgecenter.zuora.com/Zuora_Platform/Data_Management/Data_Loader/AB_Get_started_with_Data_Loader) to update the Billing Accounts with the correct value for the `ERPAccountId__c` field. Include the `ERPAccountId__c` custom field in the downloaded Accounts and Contacts template. Your input file only needs to have the Zuora Billing Account Id value in the first column and the `ERPAccountId__c` value. The other fields in the template can be empty.

-   Determine if product catalog information is necessary. Many product specific details are in the Invoice Item object, but you should confirm that this information is sufficient for your ERP to manage the incoming transactions correctly. If not, augmentation prior to syncing is required.
-   Configure Zuora Billing correctly with the correct GL account codes for every transaction. Determine if you have to map these or other values between Zuora Billing and your ERP.

##

'Pull' integration logic

This integration will loop through these steps periodically:

1.  **Query Zuora:** Use Zuora's synchronous Object Query to find transactions to sync using an integration maintained high water mark timestamp.
2.  **Transform data:** Map Zuora object fields to your ERP fields. Document all required value mappings.
3.  **Send to ERP:** Use your ERP's API to load the transformed data.
4.  **Mark as sent:** Update the transactions in Zuora Billing as transferred. Update the high-water mark using the `updateddate` attribute from the last processed object.

###

Query new or updated invoices and invoice items

Use Zuora's Object Query API to list invoices since the last sync. Update:

-   The URL endpoint. Adjust the base URL in the query, `apisandbox` , to match your specific Zuora environment. Check [Zuora Data Centers](https://knowledgecenter.zuora.com/Zuora_Environments/Zuora_Data_Centers) for the correct endpoint.
-   The `updateddate` timestamp.
-   The `$ztoken` token with a working bearer token.

This query returns objects sorted by `updateddate`. Use the `updateddate` value from the last returned object as the high-water mark for the next polling iteration.

```bash
curl -X GET \
  'https://rest.apisandbox.zuora.com/object-query/invoices?filter[]=updateddate.GT:2025-05-01T00:00:00Z&filter[]=status.EQ:Posted&sort[]=updateddate.ASC' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

**Note**: Use pagination (`cursor`) to handle large result sets. See [Object Query guides](https://developer.zuora.com/docs/guides/expand-filter-fields-sort/) for more information.

You can use the `fields[]` query parameter to specify exactly what fields you'd like returned. The following sample is the same basic query with specific fields listed:

```bash
curl -X GET \
  'https://rest.apisandbox.zuora.com/object-query/invoices?fields[]=id,updateddate,accountid,ERPAccountId__c,invoicenumber,invoicedate,amount,balance&filter[]=updateddate.GT:2025-05-01T00:00:00Z&filter[]=status.EQ:Posted&expand[]=invoiceitems&invoiceitems.fields[]=id,chargename,sku,amount,balance,quantity,uom,unitprice&sort[]=updateddate.ASC' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

Note the nested layout of the response payload. Each parent invoice wraps all of the child invoice items. Your integration may need to reorganize the structure of this response payload.

###

Transform, map, and send transactions to your ERP

Construct a payload matching the ERP’s expected schema. For example:

```json
{
  "invoice": {
    "number": "INV00012345",
    "amount": 140.00,
    "date": "2025-05-20",
    "items": [
      {
        "description": "Pro Service - Monthly",
        "amount": 100.00
      },
      {
        "description": "Tax",
        "amount": 40.00
      }
    ]
  }
}
```

Send it to your ERP API. For example:

```bash
curl -X POST https://erp.example.com/api/invoices \
  -H "Authorization: Bearer $erp_token" \
  -H "Content-Type: application/json" \
  -d @invoice_payload.json
```

###

Mark synced records

-   Record each invoice object synced by setting Zuora Billing's **Transferred to Accounting** attribute to **Yes** .
-   Record details of every record sync to a log file. [Update invoices](https://developer.zuora.com/v1-api-reference/api/operation/PUT_BatchUpdateInvoices/) (PUT /v1/invoices) does not support updating this flag. Use the [Update](https://developer.zuora.com/v1-api-reference/api/operation/Action_POSTupdate/) call (PUT `v1/action/update` ) instead.
-   `objects` is an array, utilizing batches of up to 50 transaction IDs per call.

```bash
curl -i -X POST \
  'https://rest.apisandbox.zuora.com/v1/action/update?rejectUnknownFields=false' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json" \
  -d '{
    "objects": [
      {
        "Id": "8ad08eb296d239070196e9a2285b16f5",
        "TransferredToAccounting": "Yes"
      },
      {
        "Id": "4ad08eb296d239066996e9a2285b1123",
        "TransferredToAccounting": "Yes"
      }
    ],
    "type": "Invoice"
  }'
```

Do not run [Update](https://developer.zuora.com/v1-api-reference/api/operation/Action_POSTupdate/) for invoice items. Run for invoices or the parent transactions.

###

Sync Payments, Refunds, Credit Memos, or Debit Memos

Repeat the same query-and-forward pattern for each type:

| Txn Type | Object Query Endpoint | Suggested Filters |
| --- | --- | --- |
| Payments | /object-query/payments | status.EQ:Processedupdateddate.GT:<last_sync> |
| Refunds | /object-query/refunds | status.EQ:Processedupdateddate.GT:<last_sync> |
| Credit Memos | /object-query/credit-memos | updateddate.GT:<last_sync> |
| Credit Memos Items | /object-query/credit-memo-items | updateddate.GT:<last_sync> |
| Debit Memos | /object-query/debit-memos | status.EQ:Postedupdateddate.GT:<last_sync> |
| Debit Memo Items | /object-query/debit-memo-items | status.EQ:Postedupdateddate.GT:<last_sync> |

**Tip**: `filters[]` must be specified multiple times to combine conditions as an AND operator. `filter[]=status.EQ:Processed&filter[]=updateddate.GT:<last_sync>` defines the logic "status = Processed AND updateddate > ".

##

'Push' integration logic

If you choose to implement a 'push' solution using Zuora's event notifications, consult the related [CRM integration quickstart guide](https://developer.zuora.com/quickstart-guides/crm-integration-quickstart-guide/#event-driven-details). This guide explains how to configure events and capture events. While the example in that document details syncing Account events, follow the same steps to define events for all the necessary transactions. This table will help guide your event definitions:

| Txn Type | Event |
| --- | --- |
| Invoice | 1110 - Invoice Posted |
| Payments | 2120 - Payment Processed |
| Refunds | 2430 - Credit Memo Refund Processed2410 - Payment Refund Processed |
| Credit Memos | 2710 - Credit Memo Posted |
| Debit Memos | 2820 - Debit Memo Posted |

##

Best practices

-   Implement **retry logic** for token expiry and transient errors.
-   Log all requests and responses to a log file.
-   Handle **pagination** via `nextPage` and `cursor` .
-   Use `fields[]` to limit data payloads to only the required fields.
-   Use `expand[]` to include related child records in one query.

See our [Object Query API guide](https://developer.zuora.com/docs/guides/expand-filter-fields-sort/) for more details and examples on these last four suggestions.

##

Conclusion

Congratulations! You’ve completed a basic ERP line item integration with Zuora Billing. More on all our APIs, including tutorials, FAQs, a Developer Blog, and reference documentation is in our [Zuora Developer Center](http://developer.zuora.com/).
