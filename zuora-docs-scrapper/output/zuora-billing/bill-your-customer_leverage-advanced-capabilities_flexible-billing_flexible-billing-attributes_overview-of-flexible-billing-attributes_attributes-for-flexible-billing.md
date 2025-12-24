---
title: "Attributes for Flexible Billing"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes/attributes-for-flexible-billing"
product: "zuora-billing"
scraped_at: "2025-12-24T18:38:03.760Z"
---

# Attributes for Flexible Billing

The Flexible Billing Attributes feature allows you to associate specific billing attributes, such as Bill To Contact, Sold To Contact, Ship To Contact, Currency, Payment Term, Invoice Template ID, and Sequence Set ID, with subscriptions or order line items. These attributes are used during the generation of billing documents, including invoices and credit memos.

After the Flexible Billing Attributes feature is enabled, the following billing attributes are available on multiple objects:

-   `Bill To Contact`: The bill-to contact ID is associated with a subscription or order line item. For example, you can specify Steve Lee as the bill-to contact of the invoice owner for a subscription, instead of using the default bill-to contact of the account. If not specified, the default bill-to contact of the invoice owner will be used.
-   `Sold To Contact`: The sold-to contact ID is associated with a subscription or order line item. For example, you can specify Steve Lee as the sold-to contact of the subscription owner for a subscription, instead of using the default sold-to contact of the account. If not specified, the default sold-to contact of the subscription owner will be used.
-   `Ship To Contact` : The ship-to contact ID is associated with a subscription or order line item. For example, you can specify Steve Lee as the ship-to contact of the subscription owner for a subscription, instead of using the default ship-to contact of the account. If not specified, the default ship-to contact of the subscription owner will be used. This field is available only if you have turned on the Ship To Contact feature. You can turn on the feature through the self-service interface for Feature Management .
-   `Currency`: The currency of the subscription or order line item.
-   `Payment Term`: The name of the payment term is associated with a subscription or order line item. For example, Net 30 indicates that payment is due 30 days from the invoice date. The payment term determines the due dates of invoices.
-   `Invoice Template ID`: The ID of the invoice template is associated with a subscription or order line item.
-   `Sequence Set ID`: The ID of the sequence set is associated with a subscription or order line item. For example, you can specify a sequence set ID for a subscription, instead of using the ID of the sequence set assigned to the account.
-   `Communication Profile ID`: The ID of the communication profile is associated with a subscription or order line item.

During the generation of billing documents, including invoices and credit memos, the latest billing attributes at the subscription level or order line item are always used. To learn more information about a common use case, see Renew subscription early and update bill-to contact and payment term .

The Zuora UI, API, data source, AQuA, Data Query, and Object Query are enhanced to support the preceding billing attributes. The following table lists the detailed changes introduced in the Flexible Billing Attributes feature.

| Base object | Field/Related object | Access approaches |
| --- | --- | --- |
| Order Action | billToContactIdpaymentTermclearingExistingBillToContactclearingExistingPaymentTerminvoiceTemplateIdsequenceSetIdclearingExistingInvoiceTemplateclearingExistingSequenceSetsoldToContactIdclearingExistingSoldToContactshipToContactIdclearingExistingShipToContaccommunicationProfileIdclearingExistingCommunicationProfile | Zuora UIAPIOrder Action data sourceAQuAData QueryObject Query |
| Rate Plan Charge | Bill To Contact SnapshotSold To Contact SnapshotShip To Contact SnapshotPayment Term Snapshot | Zuora UIRate Plan Charge data sourceAQuA |
| Subscription | Bill To ContactBill To Contact SnapshotSold To ContactSold To Contact SnapshotShip To ContactShip To Contact SnapshotPayment TerminvoiceTemplateIdsequenceSetIdcommunicationProfileId | Zuora UIAPISubscription data sourceAQuAData QueryObject Query |
| Order Line Item | Bill To ContactBillToSnapshotId (Available only in data source exports, AQuA, Data Query, and Object Query)Invoice Template ID (Available in Zuora UI, API, data source exports, and Data Query)Sold To ContactSoldToSnapshotId (Available only in data source exports, AQuA, Data Query, and Object Query)SoldToOrderContactId (Avaiable only in Data Query)Ship To ContactShipToSnapshotId (Available only in data source exports, AQuA, Data Query, and Object Query)Sequence Set ID (Available in Zuora UI, API and data source exports)Payment Term (Available in Zuora UI, API, data source exports, Data Query)communicationProfileId (Available in Zuora UI, API, data source exports, Data Query) | Zuora UIAPIOrder Line Item data sourceAQuAData QueryObject Query |
| Credit Memo | billToContactIdsequenceSetIdcommunicationProfileId | Zuora UIAPICredit Memo data sourceAQuAData QueryObject Query |
| Credit Memo Item | soldToContactIdsoldToContactSnapshotId | APICredit Memo Item data source |
| Debit Memo | billToContactIdpaymentTermsequenceSetIdcommunicationProfileId | Zuora UIAPIDebit Memo data sourceAQuAData QueryObject Query |
| Debit Memo Item | soldToContactIdsoldToContactSnapshotId | APIDebit Memo Item data source |
| Invoice | BillToContactIdBillToContactSnapshotId (Available only in data source exports and Data Query)SoldToContactIdSoldToContactSnapshotId (Available only in data source exports and Data Query)ShipToContactIdShipToContactSnapshotId (Available only in data source exports and Data Query)PaymentTermSequenceSetIdcommunicationProfileId | Zuora UIAPIInvoice data sourceAQuAData QueryObject Query |
| Invoice Item | soldToContactIdsoldToContactSnapshotId | APIInvoice Item data source |

## Ship-to and sold-to contacts in tax calculation

When using ship-to and sold-to contacts in tax calculation, keep the following notes in mind:

-   You can only specify the contacts of the subscription owner as the ship-to or sold-to contact at the subscription level. If the ship-to or sold-to contact is specified at the subscription level, tax calculation for billing documents always use the subscription owner’s tax exemption information, VAT ID, and Tax Company Code.
-   The ship-to contact takes precedence over the sold-to contact for tax calculation. If you specify a ship-to contact at the subscription level, that contact will be used for tax calculation. Specifying a ship-to contact at the subscription level is optional. If no ship-to contact is specified, the sold-to contact at the subscription level will be used, regardless of whether a ship-to contact is specified at the account level.
-   The ship-to and sold-to contacts at the subscription level work with the billing rule called Calculate taxes using information from Customer Account of: Subscription Owner | Invoice Owner as follows:
    -   If the ship-to or sold-to contact is specified at the subscription level, tax calculation depends on the ship-to or sold-to contact, regardless of the setting of this billing rule.
    -   If no ship-to or sold-to contact is specified at the subscription level, tax calculation depends on the setting of this billing rule.
-   During billing document generation, the latest billing attributes at the subscription level are always used. The invoice items or credit memo items generated from subscriptions always link to the latest ship-to or sold-to contacts.

## Typical scenarios

Assume that your customer account has multiple subscriptions with different bill-to contacts and payment terms; you can generate invoices for these subscriptions according to the settings of bill-to contacts and payment terms. The following table presents a typical scenario to showcase how you can use the Flexible Billing Attributes feature to manage subscriptions and generate invoices.
| Account Number: A001Account Bill To Contact: Tom LeeAccount Payment Term: Due Upon Receipt |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Subscription | Generated Invoice |  |  |  |  |
| Subscription Number | Bill To Contact | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| S001 | Ray Lockman | Net 60 | INV001 | Ray Lockman | Net 60 |
| S002 | Ray Lockman | Net 60 |  |  |  |
| S003 | Steve America | Net 30 | INV002 | Steve America | Net 30 |
| S004 | Not specified | Not specified | INV003 | Tom Lee | Due Upon Receipt |

Assume that your customer account has multiple subscriptions with different invoice templates and sequence sets; you can generate invoices for these subscriptions according to the settings of invoice templates and sequence sets. The following table presents a typical scenario to showcase how you can use the Flexible Billing Attributes feature to manage subscriptions and generate invoices.
| Account Number: A001Account Bill To Contact: Tom LeeAccount Payment Term: Due Upon ReceiptAccount Invoice Template: Invoice Template AAccount Sequence Set: SEQ_SET_1 (INV as prefix) |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Subscription | Generated Invoice |  |  |  |  |
| Subscription Number | Invoice Template | Sequence Set | Invoice Number | Invoice Template | Sequence Set |
| S001 | Invoice Template B | SEQ_SET_2 (ITA) | ITA001 | Invoice Template B | SEQ_SET_2 (ITA) |
| S002 | Invoice Template B | SEQ_SET_2 (ITA) |  |  |  |
| S003 | Invoice Template C | SEQ_SET_3 (FRN) | FRN002 | Invoice Template C | SEQ_SET_3 (FRN) |
| S004 | Not specified | Not specified | INV003 | Invoice Template A | SEQ_SET_2 (INV) |
