---
title: "Generate billing documents for order line items"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/billing-documents-generation-for-order-line-items-and-fulfillments/generate-billing-documents-for-order-line-items"
product: "zuora-billing"
scraped_at: "2025-12-24T05:39:38.169Z"
---

# Generate billing documents for order line items

This article explains how to generate billing documents for order line items by changing their state to SentToBilling and using the Zuora UI or REST API.

After an order line item is created, its state is Executing by default. To generate billing documents for the order line item, you must change the state to SentToBilling. For more information about the state transition flow of an order line item, see State transitions for an order line item, fulfillment, and order .

To generate a billing document for an order line item, you can use one of the following ways:

-   Use the Zuora UI. Make sure the state of the order line item is `SentToBilling` and the bill target date is set appropriately. Then, create or schedule a bill run to generate the billing document. The bill run will pick up order line items based on the Bill Target Date. See Use the Zuora UI .

-   Use the REST API:

    -   Update a single order line item First, use the `Update an order line item` operation to update the state and the bill target date of the order line item appropriately. Then, use the `CRUD: Create a bill run` operation to create a bill run. See Update one order line item and then create a bill run .

    -   Update multiple order line items in a single API Use the Update order line items operation to update both the state and `billTargetDate` fields of more than one order line item, as well as to generate an billing document for the referenced order line item using the single API. See Update multiple order line items and generate billing documents at the same time .


1.  Log in to the Zuora application and then navigate to Customers > Orders . The Orders page opens.
2.  Search for the order that contains the order line item to be updated and click the order number. The Order details page opens.
3.  In the Order Line Items area, on the target line of the order line item, click the pencil icon in the ACTIONS column. The Edit Order Line Item window is displayed. ![edit-order-line-item](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b9028994-aa10-474f-82cf-67289a4960c5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI5MDI4OTk0LWFhMTAtNDc0Zi04MmNmLTY3Mjg5YTQ5NjBjNSIsImV4cCI6MTc2NjY0MTE3NiwianRpIjoiN2U2MzczMmJmMzQ1NDc1Yzk5MzM2NTNkNGEwZTdlMjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ohKu466iLG9EXGpKYbW-ueGYZxb9dY-2KI-REW70Ulg)
4.  In the Basic Information section, change the Item State value from Executing to SentToBilling .
5.  (Optional): Update the Bill Target Date value if necessary. The subsequent bill run will pick up order line items to generate billing documents based on the bill target date.
6.  Click Save . The window is closed. The state of the order line item is changed to SentToBilling .
7.  To generate the billing document, create a bill run. For instructions, see Creating Bill Runs .
