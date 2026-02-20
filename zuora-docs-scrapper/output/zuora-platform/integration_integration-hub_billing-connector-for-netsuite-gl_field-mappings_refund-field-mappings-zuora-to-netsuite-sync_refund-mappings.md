---
title: "Refund Mappings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/refund-field-mappings-zuora-to-netsuite-sync/refund-mappings"
product: "zuora-platform"
scraped_at: "2026-02-20T21:11:59.293Z"
---

# Refund Mappings

The document provides a detailed mapping of refund-related fields between the system and NetSuite, highlighting default field names and potential modifications.

The Destination column lists the default names for the fields in NetSuite. Your fields may have been modified from the default values.

| Source Field | Destination Field (Customer Payment) | Notes |
| --- | --- | --- |
| RefundInvoicePayment.CreatedById | n/a |  |
| RefundInvoicePayment.CreatedDate | n/a |  |
| RefundInvoicePayment.Id | n/a |  |
| RefundInvoicePayment.RefundAmount | CustomerRefund.applyList.amount |  |
| RefundInvoicePayment.UpdatedById | n/a |  |
| RefundInvoicePayment.UpdatedDate | n/a |  |
| Account.AccountNumber | n/a |  |
| Account.AdditionalEmailAddresses | n/a |  |
| Account.AllowInvoiceEdit | n/a |  |
| Account.AutoPay | n/a |  |
| Account.Balance | n/a |  |
| Account.Batch | n/a |  |
| Account.BillCycleDay | n/a |  |
| Account.CreatedById | n/a |  |
| Account.CreatedDate | n/a |  |
| Account.CreditBalance | n/a |  |
| Account.CrmId | n/a |  |
| Account.Currency | n/a |  |
| Account.CustomerServiceRepName | n/a |  |
| Account.Id | n/a |  |
| Account.InvoiceDeliveryPrefsEmail | n/a |  |
| Account.InvoiceDeliveryPrefsPrint | n/a |  |
| Account.InvoiceTemplateId | n/a |  |
| Account.LastInvoiceDate | n/a |  |
| Account.Mrr | n/a |  |
| Account.Name | n/a |  |
| Account.Notes | n/a |  |
| Account.BillAddrIntegrationId__NS | n/a |  |
| Account.IntegrationId__NS | CustomerRefund.customer.internalId |  |
| Account.IntegrationStatus__NS | n/a |  |
| Account.ShipAddrIntegrationId__NS | n/a |  |
| Account.SyncDate__NS | n/a |  |
| Account.ParentId | n/a |  |
| Account.PaymentTerm | n/a |  |
| Account.PurchaseOrderNumber | n/a |  |
| Account.SalesRepName | n/a |  |
| Account.Status | n/a |  |
| Account.TaxExemptCertificateId | n/a |  |
| Account.TaxExemptCertificateType | n/a |  |
| Account.TaxExemptDescription | n/a |  |
| Account.TaxExemptEffectiveDate | n/a |  |
| Account.TaxExemptExpirationDate | n/a |  |
| Account.TaxExemptIssuingJurisdiction | n/a |  |
| Account.TaxExemptStatus | n/a |  |
| Account.TotalInvoiceBalance | n/a |  |
| Account.UpdatedById | n/a |  |
| Account.UpdatedDate | n/a |  |
| BillToContact.AccountId | n/a |  |
| BillToContact.Address1 | n/a |  |
| BillToContact.Address2 | n/a |  |
| BillToContact.City | n/a |  |
| BillToContact.Country | n/a |  |
| BillToContact.County | n/a |  |
| BillToContact.CreatedById | n/a |  |
| BillToContact.CreatedDate | n/a |  |
| BillToContact.Description | n/a |  |
| BillToContact.Fax | n/a |  |
| BillToContact.FirstName | n/a |  |
| BillToContact.HomePhone | n/a |  |
| BillToContact.Id | n/a |  |
| BillToContact.LastName | n/a |  |
| BillToContact.MobilePhone | n/a |  |
| BillToContact.NickName | n/a |  |
| BillToContact.OtherPhone | n/a |  |
| BillToContact.OtherPhoneType | n/a |  |
| BillToContact.PersonalEmail | n/a |  |
| BillToContact.PostalCode | n/a |  |
| BillToContact.State | n/a |  |
| BillToContact.TaxRegion | n/a |  |
| BillToContact.UpdatedById | n/a |  |
| BillToContact.UpdatedDate | n/a |  |
| BillToContact.WorkEmail | n/a |  |
| BillToContact.WorkPhone | n/a |  |
| Invoice.AdjustmentAmount | n/a |  |
| Invoice.Amount | n/a |  |
| Invoice.AmountWithoutTax | n/a |  |
| Invoice.Balance | n/a |  |
| Invoice.Comments | n/a |  |
| Invoice.CreatedById | n/a |  |
| Invoice.CreatedDate | n/a |  |
| Invoice.DueDate | n/a |  |
| Invoice.Id | n/a |  |
| Invoice.IncludesOneTime | n/a |  |
| Invoice.IncludesRecurring | n/a |  |
| Invoice.IncludesUsage | n/a |  |
| Invoice.InvoiceDate | n/a |  |
| Invoice.InvoiceNumber | n/a |  |
| Invoice.LastEmailSentDate | n/a |  |
| Invoice.IntegrationId__NS | Payment.applyList.doc | Used to identify the Payment applied Invoice to update. |
| Invoice.IntegrationStatus__NS | n/a |  |
| Invoice.SyncDate__NS | n/a |  |
| Invoice.PaymentAmount | n/a |  |
| Invoice.PostedBy | n/a |  |
| Invoice.PostedDate | n/a |  |
| Invoice.RefundAmount | n/a |  |
| Invoice.Source | n/a |  |
| Invoice.SourceId | n/a |  |
| Invoice.Status | n/a |  |
| Invoice.TargetDate | n/a |  |
| Invoice.TaxAmount | n/a |  |
| Invoice.TaxExemptAmount | n/a |  |
| Invoice.TransferredToAccounting | n/a |  |
| Invoice.UpdatedById | n/a |  |
| Invoice.UpdatedDate | n/a |  |
| InvoicePayment.Amount InvoicePayment.RefundAmount | Payment.applyList.amount | InvoicePayment.Amount - InvoicePayment.RefundAmountThis calculation is required because multiple refunds can exist for a single invoicepayment record. This value must reflect the current amount that is still applied to the invoice. It is possible for this amount to equal 0 in the event of a full refund. |
| InvoicePayment.CreatedById | n/a |  |
| InvoicePayment.CreatedDate | n/a |  |
| InvoicePayment.Id | n/a |  |
| InvoicePayment.RefundAmount | n/a |  |
| InvoicePayment.UpdatedById | n/a |  |
| InvoicePayment.UpdatedDate | n/a |  |
| Payment.AccountingCode | n/a |  |
| Payment.Amount | n/a |  |
| Payment.AppliedCreditBalanceAmount | n/a |  |
| Payment.AuthTransactionId | n/a |  |
| Payment.BankIdentificationNumber | n/a |  |
| Payment.Comment | n/a |  |
| Payment.CreatedDate | n/a |  |
| Payment.EffectiveDate | n/a |  |
| Payment.GatewayOrderId | n/a |  |
| Payment.GatewayResponse | n/a |  |
| Payment.GatewayResponseCode | n/a |  |
| Payment.Id | n/a |  |
| Payment.IntegrationId__NS | Payment.internalId | Used to update existing Payment. |
| Payment.IntegrationId__NS | CustomerRefund.applyList.doc |  |
| Payment.IntegrationStatus__NS | n/a |  |
| Payment.SyncDate__NS | n/a |  |
| Payment.PaymentNumber | n/a |  |
| Payment.ReferenceId | n/a |  |
| Payment.RefundAmount | n/a |  |
| Payment.SecondPaymentReferenceId | n/a |  |
| Payment.SoftDescriptor | n/a |  |
| Payment.SoftDescriptorPhone | n/a |  |
| Payment.Status | n/a |  |
| Payment.Type | n/a |  |
| Payment.UpdatedById | n/a |  |
| Payment.UpdatedDate | n/a |  |
| PaymentMethod.AccountId | n/a |  |
| PaymentMethod.AchAbaCode | n/a |  |
| PaymentMethod.AchAccountName | n/a |  |
| PaymentMethod.AchAccountNumberMask | n/a |  |
| PaymentMethod.AchAccountType | n/a |  |
| PaymentMethod.AchBankName | n/a |  |
| PaymentMethod.Active | n/a |  |
| PaymentMethod.BankIdentificationNumber | n/a |  |
| PaymentMethod.CreatedById | n/a |  |
| PaymentMethod.CreatedDate | n/a |  |
| PaymentMethod.CreditCardAddress1 | n/a |  |
| PaymentMethod.CreditCardAddress2 | n/a |  |
| PaymentMethod.CreditCardCity | n/a |  |
| PaymentMethod.CreditCardCountry | n/a |  |
| PaymentMethod.CreditCardExpirationMonth | n/a |  |
| PaymentMethod.CreditCardExpirationYear | n/a |  |
| PaymentMethod.CreditCardHolderName | n/a |  |
| PaymentMethod.CreditCardMaskNumber | n/a |  |
| PaymentMethod.CreditCardPostalCode | n/a |  |
| PaymentMethod.CreditCardState | n/a |  |
| PaymentMethod.CreditCardType | n/a |  |
| PaymentMethod.Id | n/a |  |
| PaymentMethod.LastFailedSaleTransactionDate | n/a |  |
| PaymentMethod.LastTransactionDateTime | n/a |  |
| PaymentMethod.LastTransactionStatus | n/a |  |
| PaymentMethod.Name | n/a |  |
| PaymentMethod.NumConsecutiveFailures | n/a |  |
| PaymentMethod.PaypalBaid | n/a |  |
| PaymentMethod.PaypalEmail | n/a |  |
| PaymentMethod.Type | n/a |  |
| PaymentMethod.UpdatedById | n/a |  |
| PaymentMethod.UpdatedDate | n/a |  |
| Refund.Amount | n/a | NetSuite will derive this from applied amounts. |
| Refund.Comment | CustomerRefund.memo |  |
| Refund.CreatedDate | CustomerRefund.ZuoraCreatedDate |  |
| Refund.Gateway | n/a |  |
| Refund.GatewayResponse | n/a |  |
| Refund.GatewayResponseCode | n/a |  |
| Refund.Id | CustomerRefund.ZuoraId |  |
| Refund.MethodType | CustomerRefund.paymentMethod | picklist |
| Refund.ReferenceID | CustomerRefund. ZuoraRefundReferenceId |  |
| Refund.RefundDate | CustomerRefund.tranDate |  |
| Refund.RefundNumber | CustomerRefund.tranId | Map this if the Integration Widget setting Use Transaction auto-numbering is disabled. |
| Refund.RefundNumber | CustomerRefund. ZuoraReferenceNumber |  |
| Refund.RefundTransactionTime | n/a |  |
| Refund.SourceType | n/a | filter export where = "Payment"Payment, Credit Balance |
| Refund.Status | n/a | filter export where = "Processed" |
| Refund.TransferredToAccounting | n/a | Update to Processing/Processing 2/Complete/Error upon completion |
| Refund.Type | CustomerRefund.ZuoraRefundType | External, Electronic |
| Refund.UpdatedDate | CustomerRefund.ZuoraUpdatedDate |  |
| Refund.NS_IntegrationId__NS | CustomerRefund.internalId | Update Zuora after initial create only |
| Refund.NS_IntegrationStatus__NS | n/a | Used to route in-process. Update Zuora with "Processing," "Processing 2," "Complete," or "Error." |
| Refund.NS_SyncDate__NS | n/a | Update Zuora after initial create only. Use the current timestamp. |
| Refund.Origin__NS | n/a | Update to "ZUORA" |
| SoldToContact.AccountId | n/a |  |
| SoldToContact.Address1 | n/a |  |
| SoldToContact.Address2 | n/a |  |
| SoldToContact.City | n/a |  |
| SoldToContact.Country | n/a |  |
| SoldToContact.County | n/a |  |
| SoldToContact.CreatedById | n/a |  |
| SoldToContact.CreatedDate | n/a |  |
| SoldToContact.Description | n/a |  |
| SoldToContact.Fax | n/a |  |
| SoldToContact.FirstName | n/a |  |
| SoldToContact.HomePhone | n/a |  |
| SoldToContact.Id | n/a |  |
| SoldToContact.LastName | n/a |  |
| SoldToContact.MobilePhone | n/a |  |
| SoldToContact.NickName | n/a |  |
| SoldToContact.OtherPhone | n/a |  |
| SoldToContact.OtherPhoneType | n/a |  |
| SoldToContact.PersonalEmail | n/a |  |
| SoldToContact.PostalCode | n/a |  |
| SoldToContact.State | n/a |  |
| SoldToContact.TaxRegion | n/a |  |
| SoldToContact.UpdatedById | n/a |  |
| SoldToContact.UpdatedDate | n/a |  |
| SoldToContact.WorkEmail | n/a |  |
| SoldToContact.WorkPhone | n/a |  |
| n/a | CustomerRefund.ZuoraType | "PAYMENT_REFUND" |
| n/a | CustomerRefund.ZuoraOrigin | "ZUORA" |
| n/a | CustomerRefund.ZuoraSyncDate | Current timestamp |
| n/a | Payment.applyList.replaceAll | "false" |
| Account.Class__NS | class | Map from the Zuora Account object (if the value is set). Otherwise, use the value specified in the integration manager. |
| Account.Department__NS | department | Map from the Zuora Account object (if the value is set). Otherwise, use the value specified in the integration manager. |
| Account.Location__NS | location | Map from the Zuora Account object (if the value is set). Otherwise, use the value specified in the integration manager. |
