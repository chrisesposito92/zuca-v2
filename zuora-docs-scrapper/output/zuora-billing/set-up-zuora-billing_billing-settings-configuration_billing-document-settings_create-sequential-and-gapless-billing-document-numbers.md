---
title: "Create sequential and gapless billing document numbers"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/billing-document-settings/create-sequential-and-gapless-billing-document-numbers"
product: "zuora-billing"
scraped_at: "2025-12-24T05:05:09.260Z"
---

# Create sequential and gapless billing document numbers

Ensuring sequential and gapless billing document numbers is crucial for compliance and auditing. This task outlines the mechanisms and steps to achieve this, including setting billing rules and permissions.

The regulation regarding invoice sequence gaps in European countries generally mandates that invoices must be sequentially numbered without any gaps or duplications. This requirement ensures the integrity and traceability of financial records, which is crucial for tax compliance and auditing purposes. For example, in Italy, Invoices must be numbered sequentially per year. Businesses must ensure that there are no gaps in the sequence, and any voided invoices must be retained for audit purposes.

Gaps in billing document numbers may occur in the following situations:

-   Payment failures cause orders to fail, orders are rolled back, and invoice numbers associated with the orders are also rolled back.

-   Draft invoices are canceled due to bill run cancelation, which causes the invoice numbers to roll back. By default, formal document numbers are generated upon draft invoice generation.


Zuora provides the following mechanisms for you to ensure sequential and gapless document numbers:

-   You can set billing rules to sequentially generate the billing document numbers when the documents are posted rather than generated.

    -   Because temporary document numbers are used before the documents are posted, when users cancel bill runs or billing documents, there is no actual impact on the formal document numbers as the numbers have not been generated yet.

    -   After the document numbers are posted, the billing document numbers will be reserved even when the posted invoices are unposted and reversed.

-   You can set permissions to prevent users from deleting the billing documents; thus, the billing document numbers will not be deleted.


The following diagram shows how the preceding mechanisms impact document numbering.

![Invoice state transition diagram](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2c41ff20-4a51-4523-bf6c-beb475e63428?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJjNDFmZjIwLTRhNTEtNDUyMy1iZjZjLWJlYjQ3NWU2MzQyOCIsImV4cCI6MTc2NjYzOTEwNywianRpIjoiNzNiNzYyYmJhZGM4NDM5MzhkZTEwM2UyZGJjN2M3MDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.nE_Scpr5ugRBQ9aoliG3_XyFGagWoxQtTXqZjjnVeZU)

To create sequential and gapless document numbers, perform the following steps:

1.  Define the following two billing rules:

    1.  Set the Enable Sequential Billing Document Number billing rule to Yes .
    2.  Set the Setting determine when the document will be assigned a number from the official document sequence to Upon document posting .

    With the settings, the billing document numbers are generated sequentially when the billing documents are posted.

2.  Configure prefix and numbering for billing documents .
3.  Define billing permissions : clear the following checkboxes:

    1.  Delete Invoice
    2.  Delete Credit Memo
    3.  Delete Debit Memo

    After you clear the deletion permissions for invoices, credit memos, and debit memos, users can not delete these billing documents.

4.  Assign a billing document set to a customer account. With the setting, the billing documents generated adopt the configured prefix and starting document number. For more information, see Configure prefix and numbering for billing documents .
