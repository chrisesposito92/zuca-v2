---
title: "Node.js client library reference"
url: "https://developer.zuora.com/sdk-references/node-sdk-reference/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:58.961Z"
---

#

Node.js client library reference

The latest Node client library version is **3.13.0**.

##

Requirements

-   **NPM** : 10.8.2
-   **Node** : 20.16.0

##

Installation

See [Zuora Client Libraries](https://developer.zuora.com/docs/guides/libraries/).

##

Classes and methods

The following table summarizes all available classes and methods for the Zuora Node.js client library.

| Class | Method | HTTP request | Description |
| --- | --- | --- | --- |
| ZuoraSdkJs.APIHealthApi | getSystemHealthApiVolumeSummary | GET /system-health/api-requests/volume-summary | List API volume summary records |
| ZuoraSdkJs.AccountingCodesApi | activateAccountingCode | PUT /v1/accounting-codes/{ac-id}/activate | Activate an accounting code |
| ZuoraSdkJs.AccountingCodesApi | createAccountingCode | POST /v1/accounting-codes | Create an accounting code |
| ZuoraSdkJs.AccountingCodesApi | deactivateAccountingCode | PUT /v1/accounting-codes/{ac-id}/deactivate | Deactivate an accounting code |
| ZuoraSdkJs.AccountingCodesApi | deleteAccountingCode | DELETE /v1/accounting-codes/{ac-id} | Delete an accounting code |
| ZuoraSdkJs.AccountingCodesApi | getAccountingCode | GET /v1/accounting-codes/{ac-id} | Retrieve an accounting code |
| ZuoraSdkJs.AccountingCodesApi | getAllAccountingCodes | GET /v1/accounting-codes | List all accounting codes |
| ZuoraSdkJs.AccountingCodesApi | updateAccountingCode | PUT /v1/accounting-codes/{ac-id} | Update an accounting code |
| ZuoraSdkJs.AccountingPeriodsApi | closeAccountingPeriod | PUT /v1/accounting-periods/{ap-id}/close | Close an accounting period |
| ZuoraSdkJs.AccountingPeriodsApi | createAccountingPeriod | POST /v1/accounting-periods | Create an accounting period |
| ZuoraSdkJs.AccountingPeriodsApi | deleteAccountingPeriod | DELETE /v1/accounting-periods/{ap-id} | Delete an accounting period |
| ZuoraSdkJs.AccountingPeriodsApi | getAccountingPeriod | GET /v1/accounting-periods/{ap-id} | Retrieve an accounting period |
| ZuoraSdkJs.AccountingPeriodsApi | getAllAccountingPeriods | GET /v1/accounting-periods | List all accounting periods |
| ZuoraSdkJs.AccountingPeriodsApi | pendingCloseAccountingPeriod | PUT /v1/accounting-periods/{ap-id}/pending-close | Set an accounting period to pending close |
| ZuoraSdkJs.AccountingPeriodsApi | reopenAccountingPeriod | PUT /v1/accounting-periods/{ap-id}/reopen | Reopen an accounting period |
| ZuoraSdkJs.AccountingPeriodsApi | runTrialBalance | PUT /v1/accounting-periods/{ap-id}/run-trial-balance | Run trial balance |
| ZuoraSdkJs.AccountingPeriodsApi | updateAccountingPeriod | PUT /v1/accounting-periods/{ap-id} | Update an accounting period |
| ZuoraSdkJs.AccountsApi | createAccount | POST /v1/accounts | Create an account |
| ZuoraSdkJs.AccountsApi | deleteAccount | DELETE /v1/accounts/{account-key} | Delete an account |
| ZuoraSdkJs.AccountsApi | getAccount | GET /v1/accounts/{account-key} | Retrieve an account |
| ZuoraSdkJs.AccountsApi | getAccountDefaultPaymentMethod | GET /v1/accounts/{account-key}/payment-methods/default | Retrieve the default payment method of an account |
| ZuoraSdkJs.AccountsApi | getAccountPaymentMethods | GET /v1/accounts/{account-key}/payment-methods | List payment methods of an account |
| ZuoraSdkJs.AccountsApi | getAccountSummary | GET /v1/accounts/{account-key}/summary | Retrieve an account summary |
| ZuoraSdkJs.AccountsApi | updateAccount | PUT /v1/accounts/{account-key} | Update an account |
| ZuoraSdkJs.ActionsApi | actionPostCreate | POST /v1/action/create | Create |
| ZuoraSdkJs.ActionsApi | actionPostDelete | POST /v1/action/delete | Delete |
| ZuoraSdkJs.ActionsApi | actionPostQuery | POST /v1/action/query | Query |
| ZuoraSdkJs.ActionsApi | actionPostqueryMore | POST /v1/action/queryMore | QueryMore |
| ZuoraSdkJs.ActionsApi | actionPostupdate | POST /v1/action/update | Update |
| ZuoraSdkJs.AdjustmentsApi | cancelBillingAdjustment | PUT /v1/adjustments/{adjustmentId}/cancel | Cancel an adjustment |
| ZuoraSdkJs.AdjustmentsApi | createBillingAdjustment | POST /v1/adjustments | Create an adjustment |
| ZuoraSdkJs.AdjustmentsApi | getBillingAdjustment | GET /v1/adjustments/{adjustment-key} | Retrieve an adjustment |
| ZuoraSdkJs.AdjustmentsApi | getSubscriptionAdjustments | GET /v1/adjustments | List all adjustments of the latest version subscription |
| ZuoraSdkJs.AdjustmentsApi | previewBillingAdjustment | POST /v1/adjustments/preview | Preview an adjustment |
| ZuoraSdkJs.AggregateQueriesApi | createBatchQuery | POST /v1/batch-query/ | Submit an aggregate query job |
| ZuoraSdkJs.AggregateQueriesApi | deleteBatchQueryJob | DELETE /v1/batch-query/jobs/{jobid} | Cancel a running aggregate query job |
| ZuoraSdkJs.AggregateQueriesApi | getBatchQueryJob | GET /v1/batch-query/jobs/{jobid} | Retrieve an aggregate query job |
| ZuoraSdkJs.AttachmentsApi | deleteAttachments | DELETE /v1/attachments/{attachment-id} | Delete an attachment |
| ZuoraSdkJs.AttachmentsApi | getAttachments | GET /v1/attachments/{attachment-id} | Retrieve an attachment |
| ZuoraSdkJs.AttachmentsApi | getAttachmentsList | GET /v1/attachments/{object-type}/{object-key} | List attachments by object type and key |
| ZuoraSdkJs.AttachmentsApi | postAttachments | POST /v1/attachments | Create an attachment |
| ZuoraSdkJs.AttachmentsApi | putAttachments | PUT /v1/attachments/{attachment-id} | Update an attachment |
| ZuoraSdkJs.BillRunApi | cancelBillRun | PUT /v1/bill-runs/{billRunId}/cancel | Cancel a bill run |
| ZuoraSdkJs.BillRunApi | createBillRun | POST /v1/bill-runs | Create a bill run |
| ZuoraSdkJs.BillRunApi | deleteBillRun | DELETE /v1/bill-runs/{billRunId} | Delete a bill run |
| ZuoraSdkJs.BillRunApi | emailBillRun | POST /v1/bill-runs/{billRunKey}/emails | Email billing documents generated from a bill run |
| ZuoraSdkJs.BillRunApi | getBillRun | GET /v1/bill-runs/{billRunId} | Retrieve a bill run |
| ZuoraSdkJs.BillRunApi | postBillRun | PUT /v1/bill-runs/{billRunId}/post | Post a bill run |
| ZuoraSdkJs.BillRunHealthApi | getSystemHealthBillingDocVolumeSummary | GET /system-health/billing-documents/volume-summary | List billing document volume summary records |
| ZuoraSdkJs.BillingDocumentsApi | createBillingDocumentFilesDeletionJob | POST /v1/accounts/billing-documents/files/deletion-jobs | Create a job to hard delete billing document files |
| ZuoraSdkJs.BillingDocumentsApi | generateBillingDocuments | POST /v1/accounts/{key}/billing-documents/generate | Generate billing documents by account ID |
| ZuoraSdkJs.BillingDocumentsApi | getBillingDocumentFilesDeletionJob | GET /v1/accounts/billing-documents/files/deletion-jobs/{jobId} | Retrieve a job of hard deleting billing document files |
| ZuoraSdkJs.BillingDocumentsApi | getBillingDocuments | GET /v1/billing-documents | List billing documents for an account |
| ZuoraSdkJs.BillingPreviewRunApi | createBillingPreviewRun | POST /v1/billing-preview-runs | Create a billing preview run |
| ZuoraSdkJs.BillingPreviewRunApi | getBillingPreviewRun | GET /v1/billing-preview-runs/{billingPreviewRunId} | Retrieve a billing preview run |
| ZuoraSdkJs.BookingDateBackfillJobApi | gETBookingDateBackfillJobById | GET /v1/uno/data-backfill/bookingdate/jobs/{jobId} | Find BookingDate Backfill job by ID |
| ZuoraSdkJs.BookingDateBackfillJobApi | gETListBookingDateBackfillJobs | GET /v1/uno/data-backfill/bookingdate/jobs | Query all Booking Date Backfill Jobs |
| ZuoraSdkJs.BookingDateBackfillJobApi | pOSTCreateBookingDateBackfillJob | POST /v1/uno/data-backfill/bookingdate/jobs | Create a new BookingDate Backfil job |
| ZuoraSdkJs.BookingDateBackfillJobApi | pUTStopBookingDateBackfillJobById | PUT /v1/uno/data-backfill/bookingdate/jobs/{jobId} | Stop BookingDate Backfill job by ID |
| ZuoraSdkJs.CatalogGroupsApi | createCatalogGroup | POST /v1/catalog-groups | Create a catalog group |
| ZuoraSdkJs.CatalogGroupsApi | deleteCatalogGroup | DELETE /v1/catalog-groups/{catalog-group-key} | Delete a catalog group |
| ZuoraSdkJs.CatalogGroupsApi | getCatalogGroup | GET /v1/catalog-groups/{catalog-group-key} | Retrieve a catalog group |
| ZuoraSdkJs.CatalogGroupsApi | getCatalogGroups | GET /v1/catalog-groups | List all catalog groups |
| ZuoraSdkJs.CatalogGroupsApi | updateCatalogGroup | PUT /v1/catalog-groups/{catalog-group-key} | Update a catalog group |
| ZuoraSdkJs.ContactSnapshotsApi | getContactSnapshot | GET /v1/contact-snapshots/{contact-snapshot-id} | Retrieve a contact snapshot |
| ZuoraSdkJs.ContactsApi | createContact | POST /v1/contacts | Create a contact |
| ZuoraSdkJs.ContactsApi | deleteContact | DELETE /v1/contacts/{contactId} | Delete a contact |
| ZuoraSdkJs.ContactsApi | getContact | GET /v1/contacts/{contactId} | Retrieve a contact |
| ZuoraSdkJs.ContactsApi | scrubContact | PUT /v1/contacts/{contactId}/scrub | Scrub a contact |
| ZuoraSdkJs.ContactsApi | transferContact | PUT /v1/contacts/{contactId}/transfer | Transfer a contact |
| ZuoraSdkJs.ContactsApi | updateContact | PUT /v1/contacts/{contactId} | Update a contact |
| ZuoraSdkJs.CreditMemosApi | applyCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/apply | Apply a credit memo |
| ZuoraSdkJs.CreditMemosApi | applyCreditMemoAsync | PUT /v1/credit-memos/{creditMemoKey}/apply-async | Async Apply a credit memo |
| ZuoraSdkJs.CreditMemosApi | bulkCreateCreditMemos | POST /v1/credit-memos/bulk | Create credit memos |
| ZuoraSdkJs.CreditMemosApi | bulkUpdateCreditMemos | PUT /v1/credit-memos/bulk | Update credit memos |
| ZuoraSdkJs.CreditMemosApi | cancelAsyncCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/cancel-async | Cancel a Credit Memo in async |
| ZuoraSdkJs.CreditMemosApi | cancelCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/cancel | Cancel a credit memo |
| ZuoraSdkJs.CreditMemosApi | createCreditMemoFromCharge | POST /v1/credit-memos | Create a credit memo from a charge |
| ZuoraSdkJs.CreditMemosApi | createCreditMemoFromInvoice | POST /v1/credit-memos/invoice/{invoiceKey} | Create a credit memo from an invoice |
| ZuoraSdkJs.CreditMemosApi | createCreditMemoTaxationItems | POST /v1/credit-memos/{creditMemoKey}/taxation-items | Create taxation items for a credit memo |
| ZuoraSdkJs.CreditMemosApi | deleteCreditMemo | DELETE /v1/credit-memos/{creditMemoKey} | Delete a credit memo |
| ZuoraSdkJs.CreditMemosApi | emailCreditMemo | POST /v1/credit-memos/{creditMemoKey}/emails | Email a credit memo |
| ZuoraSdkJs.CreditMemosApi | generateCreditMemoPdf | POST /v1/credit-memos/{creditMemoKey}/pdfs | Generate a credit memo PDF file |
| ZuoraSdkJs.CreditMemosApi | getApplyCreditMemoAsyncJob | GET /v1/credit-memos/apply-async-jobs/{applyAsyncJobId} | Get Async Apply Credit Memo Job by Id |
| ZuoraSdkJs.CreditMemosApi | getCreditMemo | GET /v1/credit-memos/{creditMemoKey} | Retrieve a credit memo |
| ZuoraSdkJs.CreditMemosApi | getCreditMemoItem | GET /v1/credit-memos/{creditMemoKey}/items/{creditMemoItemId} | Retrieve a credit memo item |
| ZuoraSdkJs.CreditMemosApi | getCreditMemoItemPart | GET /v1/credit-memos/{creditMemoKey}/parts/{partId}/item-parts/{itemPartId} | Retrieve a credit memo part item |
| ZuoraSdkJs.CreditMemosApi | getCreditMemoItemParts | GET /v1/credit-memos/{creditMemoKey}/parts/{partId}/item-parts | List all credit memo part items |
| ZuoraSdkJs.CreditMemosApi | getCreditMemoItems | GET /v1/credit-memos/{creditMemoKey}/items | List credit memo items |
| ZuoraSdkJs.CreditMemosApi | getCreditMemoPart | GET /v1/credit-memos/{creditMemoKey}/parts/{partId} | Retrieve a credit memo part |
| ZuoraSdkJs.CreditMemosApi | getCreditMemoParts | GET /v1/credit-memos/{creditMemoKey}/parts | List all parts of a credit memo |
| ZuoraSdkJs.CreditMemosApi | getCreditMemoPdfStatus | GET /v1/credit-memos/pdf-status | Retrieve PDF status of credit memos in a batch. |
| ZuoraSdkJs.CreditMemosApi | getCreditMemos | GET /v1/credit-memos | List credit memos |
| ZuoraSdkJs.CreditMemosApi | getTaxationItemsOfCreditMemoItem | GET /v1/credit-memos/{creditMemoKey}/items/{creditMemoItemId}/taxation-items | List all taxation items of a credit memo item |
| ZuoraSdkJs.CreditMemosApi | getUnapplyCreditMemoAsyncJob | GET /v1/credit-memos/unapply-async-jobs/{unapplyAsyncJobId} | Get Async Unapply Credit Memo Job by Id |
| ZuoraSdkJs.CreditMemosApi | postAsyncCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/post-async | Post a Credit Memo in async |
| ZuoraSdkJs.CreditMemosApi | postCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/post | Post a credit memo |
| ZuoraSdkJs.CreditMemosApi | refundCreditMemo | POST /v1/credit-memos/{creditMemoKey}/refund | Refund a credit memo |
| ZuoraSdkJs.CreditMemosApi | reverseCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/reverse | Reverse a credit memo |
| ZuoraSdkJs.CreditMemosApi | unapplyCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/unapply | Unapply a credit memo |
| ZuoraSdkJs.CreditMemosApi | unapplyCreditMemoAsync | PUT /v1/credit-memos/{creditMemoKey}/unapply-async | Async Unapply a credit memo |
| ZuoraSdkJs.CreditMemosApi | unpostCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/unpost | Unpost a credit memo |
| ZuoraSdkJs.CreditMemosApi | updateCreditMemo | PUT /v1/credit-memos/{creditMemoKey} | Update a credit memo |
| ZuoraSdkJs.CreditMemosApi | uploadFileForCreditMemo | POST /v1/credit-memos/{creditMemoKey}/files | Upload a file for a credit memo |
| ZuoraSdkJs.CreditMemosApi | writeOffCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/write-off | Write off a credit memo |
| ZuoraSdkJs.CustomEventTriggersApi | deleteEventTrigger | DELETE /events/event-triggers/{id} | Delete an event trigger |
| ZuoraSdkJs.CustomEventTriggersApi | getEventTrigger | GET /events/event-triggers/{id} | Retrieve an event trigger |
| ZuoraSdkJs.CustomEventTriggersApi | getEventTriggers | GET /events/event-triggers | List event triggers |
| ZuoraSdkJs.CustomEventTriggersApi | postEventTrigger | POST /events/event-triggers | Create an event trigger |
| ZuoraSdkJs.CustomEventTriggersApi | putEventTrigger | PUT /events/event-triggers/{id} | Update an event trigger |
| ZuoraSdkJs.CustomExchangeRatesApi | getCustomExchangeRates | GET /v1/custom-exchange-rates/{currency} | List custom exchange rates by currency |
| ZuoraSdkJs.CustomObjectDefinitionsApi | deleteCustomObjectDefinitionByType | DELETE /objects/definitions/default/{object} | Delete a custom object definition |
| ZuoraSdkJs.CustomObjectDefinitionsApi | getAllCustomObjectDefinitionsInNamespace | GET /objects/definitions/default | List custom object definitions |
| ZuoraSdkJs.CustomObjectDefinitionsApi | getCustomObjectDefinitionByType | GET /objects/definitions/default/{object} | Retrieve a custom object definition |
| ZuoraSdkJs.CustomObjectDefinitionsApi | postCustomObjectDefinitions | POST /objects/definitions/default | Create custom object definitions |
| ZuoraSdkJs.CustomObjectDefinitionsApi | postUpdateCustomObjectDefinition | POST /objects/migrations | Update a custom object definition |
| ZuoraSdkJs.CustomObjectJobsApi | getAllCustomObjectBulkJobs | GET /objects/jobs | List all custom object bulk jobs |
| ZuoraSdkJs.CustomObjectJobsApi | getCustomObjectBulkJob | GET /objects/jobs/{id} | Retrieve a custom object bulk job |
| ZuoraSdkJs.CustomObjectJobsApi | getCustomObjectBulkJobErrors | GET /objects/jobs/{id}/errors | List all errors for a custom object bulk job |
| ZuoraSdkJs.CustomObjectJobsApi | pATCHCustomObjectBulkJob | PATCH /objects/jobs/{id}/cancel | Cancel a custom object bulk job |
| ZuoraSdkJs.CustomObjectJobsApi | postCustomObjectBulkJob | POST /objects/jobs | Submit a custom object bulk job |
| ZuoraSdkJs.CustomObjectJobsApi | postUploadFileForCustomObjectBulkJob | POST /objects/jobs/{id}/files | Upload a file for a custom object bulk job |
| ZuoraSdkJs.CustomObjectRecordsApi | deleteCustomObjectRecordByID | DELETE /objects/records/default/{object}/{id} | Delete a custom object record |
| ZuoraSdkJs.CustomObjectRecordsApi | getAllRecordsForCustomObjectType | GET /objects/records/default/{object} | List records for a custom object |
| ZuoraSdkJs.CustomObjectRecordsApi | getCustomObjectRecordByID | GET /objects/records/default/{object}/{id} | Retrieve a custom object record |
| ZuoraSdkJs.CustomObjectRecordsApi | patchPartialUpdateCustomObjectRecord | PATCH /objects/records/default/{object}/{id} | Partially update a custom object record |
| ZuoraSdkJs.CustomObjectRecordsApi | postCustomObjectRecords | POST /objects/records/default/{object} | Create custom object records |
| ZuoraSdkJs.CustomObjectRecordsApi | postCustomObjectRecordsBatchUpdateOrDelete | POST /objects/batch/default/{object} | Update or delete custom object records |
| ZuoraSdkJs.CustomObjectRecordsApi | putCustomObjectRecord | PUT /objects/records/default/{object}/{id} | Update a custom object record |
| ZuoraSdkJs.CustomPaymentMethodTypesApi | createOpenPaymentMethodType | POST /open-payment-method-types | Create a draft custom payment method type |
| ZuoraSdkJs.CustomPaymentMethodTypesApi | getOpenPaymentMethodTypeRevision | GET /open-payment-method-types/{paymentMethodTypeName}/draft/{revisionNumber} | Retrieve a specific draft revision of a custom payment method type |
| ZuoraSdkJs.CustomPaymentMethodTypesApi | getPublishedOpenPaymentMethodType | GET /open-payment-method-types/{paymentMethodTypeName}/published | Retrieve a published custom payment method type |
| ZuoraSdkJs.CustomPaymentMethodTypesApi | publishOpenPaymentMethodType | PUT /open-payment-method-types/publish/{paymentMethodTypeName} | Publish a custom payment method type |
| ZuoraSdkJs.CustomPaymentMethodTypesApi | updateOpenPaymentMethodType | PUT /open-payment-method-types/{paymentMethodTypeName} | Update a custom payment method type |
| ZuoraSdkJs.CustomScheduledEventsApi | deleteScheduledEventByID | DELETE /events/scheduled-events/{id} | Delete a scheduled event by ID |
| ZuoraSdkJs.CustomScheduledEventsApi | getScheduledEventByID | GET /events/scheduled-events/{id} | Retrieve a scheduled event by ID |
| ZuoraSdkJs.CustomScheduledEventsApi | getScheduledEvents | GET /events/scheduled-events | List all scheduled events |
| ZuoraSdkJs.CustomScheduledEventsApi | postScheduledEvent | POST /events/scheduled-events | Create a scheduled event |
| ZuoraSdkJs.CustomScheduledEventsApi | updateScheduledEventByID | PUT /events/scheduled-events/{id} | Update a scheduled event by ID |
| ZuoraSdkJs.DataBackfillJobApi | gETDataBackfillJobById | GET /v1/uno/data-backfill/jobs/{jobId} | Find Data Backfill job by ID |
| ZuoraSdkJs.DataBackfillJobApi | gETDataBackfillTemplate | GET /v1/uno/data-backfill/jobs/{type}/template | Download a Data Backfill template file |
| ZuoraSdkJs.DataBackfillJobApi | gETListDataBackfillJobs | GET /v1/uno/date-backfill/listjobs | Query all data backfill jobs |
| ZuoraSdkJs.DataBackfillJobApi | pOSTCreateDataBackfillJob | POST /v1/uno/data-backfill/jobs | Create a new Data Backfil job |
| ZuoraSdkJs.DataBackfillJobApi | pUTStopDataBackfillJobById | PUT /v1/uno/data-backfill/jobs/{jobId} | Stop Data Backfill job by ID |
| ZuoraSdkJs.DataLabelingApi | getDataLabelingJob | GET /v1/multi-organizations/data-labeling-job/{job-id} | Retrieve a data labeling job |
| ZuoraSdkJs.DataLabelingApi | submitDataLabelingJob | POST /v1/multi-organizations/data-labeling-job | Submit a data labeling job |
| ZuoraSdkJs.DataQueriesApi | deleteDataQueryJob | DELETE /query/jobs/{job-id} | Cancel a data query job |
| ZuoraSdkJs.DataQueriesApi | getDataQueryJob | GET /query/jobs/{job-id} | Retrieve a data query job |
| ZuoraSdkJs.DataQueriesApi | getDataQueryJobs | GET /query/jobs | List data query jobs |
| ZuoraSdkJs.DataQueriesApi | postDataQueryJob | POST /query/jobs | Submit a data query |
| ZuoraSdkJs.DebitMemosApi | bulkCreateDebitMemos | POST /v1/debit-memos/bulk | Create debit memos |
| ZuoraSdkJs.DebitMemosApi | bulkUpdateDebitMemos | PUT /v1/debit-memos/bulk | Update debit memos |
| ZuoraSdkJs.DebitMemosApi | cancelAsyncDebitMemo | PUT /v1/debit-memos/{debitMemoKey}/cancel-async | Cancel a Debit Memo in async |
| ZuoraSdkJs.DebitMemosApi | cancelDebitMemo | PUT /v1/debit-memos/{debitMemoKey}/cancel | Cancel a debit memo |
| ZuoraSdkJs.DebitMemosApi | collectDebitMemo | POST /v1/debit-memos/{debitMemoKey}/collect | Collect a posted debit memo |
| ZuoraSdkJs.DebitMemosApi | createDebitMemoFromCharge | POST /v1/debit-memos | Create a debit memo from a charge |
| ZuoraSdkJs.DebitMemosApi | createDebitMemoFromInvoice | POST /v1/debit-memos/invoice/{invoiceKey} | Create a debit memo from an invoice |
| ZuoraSdkJs.DebitMemosApi | createTaxationItemsForDebitMemo | POST /v1/debit-memos/{debitMemoKey}/taxation-items | Create taxation items for a debit memo |
| ZuoraSdkJs.DebitMemosApi | deleteDebitMemo | DELETE /v1/debit-memos/{debitMemoKey} | Delete a debit memo |
| ZuoraSdkJs.DebitMemosApi | emailDebitMemo | POST /v1/debit-memos/{debitMemoKey}/emails | Email a debit memo |
| ZuoraSdkJs.DebitMemosApi | generateDebitMemoPdf | POST /v1/debit-memos/{debitMemoKey}/pdfs | Generate a debit memo PDF file |
| ZuoraSdkJs.DebitMemosApi | getDebitMemo | GET /v1/debit-memos/{debitMemoKey} | Retrieve a debit memo |
| ZuoraSdkJs.DebitMemosApi | getDebitMemoApplicationParts | GET /v1/debit-memos/{debitMemoKey}/application-parts | List all application parts of a debit memo |
| ZuoraSdkJs.DebitMemosApi | getDebitMemoItem | GET /v1/debit-memos/{debitMemoKey}/items/{debitMemoItemId} | Retrieve a debit memo item |
| ZuoraSdkJs.DebitMemosApi | getDebitMemoItems | GET /v1/debit-memos/{debitMemoKey}/items | List debit memo items |
| ZuoraSdkJs.DebitMemosApi | getDebitMemoPdfStatus | GET /v1/debit-memos/pdf-status | Retrieve PDF status of debit memos in a batch. |
| ZuoraSdkJs.DebitMemosApi | getDebitMemos | GET /v1/debit-memos | List debit memos |
| ZuoraSdkJs.DebitMemosApi | getTaxationItemsOfDebitMemoItem | GET /v1/debit-memos/{debitMemoKey}/items/{debitMemoItemId}/taxation-items | List all taxation items of a debit memo item |
| ZuoraSdkJs.DebitMemosApi | postAsyncDebitMemo | PUT /v1/debit-memos/{debitMemoKey}/post-async | Post a Debit Memo in async |
| ZuoraSdkJs.DebitMemosApi | postDebitMemo | PUT /v1/debit-memos/{debitMemoKey}/post | Post a debit memo |
| ZuoraSdkJs.DebitMemosApi | unpostDebitMemo | PUT /v1/debit-memos/{debitMemoKey}/unpost | Unpost a debit memo |
| ZuoraSdkJs.DebitMemosApi | updateDebitMemo | PUT /v1/debit-memos/{debitMemoKey} | Update a debit memo |
| ZuoraSdkJs.DebitMemosApi | updateDebitMemosDueDates | PUT /v1/debit-memos | Update due dates for debit memos |
| ZuoraSdkJs.DebitMemosApi | uploadFileForDebitMemo | POST /v1/debit-memos/{debitMemoKey}/files | Upload a file for a debit memo |
| ZuoraSdkJs.DebitMemosApi | writeOffDebitMemo | PUT /v1/debitmemos/{debitMemoKey}/write-off | Write off an debit memo |
| ZuoraSdkJs.DeploymentApi | compareAndDeployProductCatalogTemplate | POST /deployment-manager/deployments/template/product_catalog | Compare and Deploy a template for product catalog to a target tenant |
| ZuoraSdkJs.DeploymentApi | compareAndDeployProductCatalogTenant | POST /deployment-manager/deployments/tenant/product_catalog | Compare and Deploy product catalog between a source tenant and a target tenant |
| ZuoraSdkJs.DeploymentApi | compareAndDeployTemplate | POST /deployment-manager/deployments/templates | Compare and Deploy settings from a template to a target tenant |
| ZuoraSdkJs.DeploymentApi | compareAndDeployTenant | POST /deployment-manager/deployments/tenants | Compare and Deploy settings between a source tenant and a target tenant |
| ZuoraSdkJs.DeploymentApi | retrieveDeployment | GET /deployment-manager/deployments/{migrationId} | Retrieves a deployment log. |
| ZuoraSdkJs.DeploymentApi | revertDeployment | POST /deployment-manager/deployments/{migrationId}/revert | Reverts the deployment. |
| ZuoraSdkJs.DeploymentConfigurationTemplatesApi | compareTemplate | POST /deployment-manager/deployment_artifacts/compare | Compare settings between a source tenant and a target tenant |
| ZuoraSdkJs.DeploymentConfigurationTemplatesApi | createDeploymentTemplate | POST /deployment-manager/deployment_templates | Create a deployment template |
| ZuoraSdkJs.DeploymentConfigurationTemplatesApi | deleteDeploymentTemplate | DELETE /deployment-manager/deployment_templates/{id} | Delete a template |
| ZuoraSdkJs.DeploymentConfigurationTemplatesApi | downloadDeploymentTemplate | GET /deployment-manager/deployment_artifacts | Download a template |
| ZuoraSdkJs.DeploymentConfigurationTemplatesApi | getDeploymentTemplateDetail | GET /deployment-manager/deployment_templates/{id} | List all details of a template |
| ZuoraSdkJs.DeploymentConfigurationTemplatesApi | getDeploymentTemplates | GET /deployment-manager/deployment_templates | List all templates |
| ZuoraSdkJs.DeploymentConfigurationTemplatesApi | getSourceComponentDetails | GET /deployment-manager/deployment_artifacts/retrieve-settings | List all details of source components |
| ZuoraSdkJs.DeploymentConfigurationTemplatesApi | migrateTenantSettings | POST /deployment-manager/deployment_artifacts/deploy | Migrate settings from source tenant to target tenant |
| ZuoraSdkJs.DescribeApi | getDescribe | GET /v1/describe/{object} | Describe an object |
| ZuoraSdkJs.EInvoicingApi | deleteBusinessRegion | DELETE /v1/e-invoice/business-regions/{key} | Delete a Business Region |
| ZuoraSdkJs.EInvoicingApi | deleteServiceProvider | DELETE /v1/e-invoice/service-providers/{key} | Delete a Service Provider |
| ZuoraSdkJs.EInvoicingApi | getBusinessRegion | GET /v1/e-invoice/business-regions/{key} | Retrieve a Business Region |
| ZuoraSdkJs.EInvoicingApi | getBusinessRegions | GET /v1/e-invoice/business-regions | List business region |
| ZuoraSdkJs.EInvoicingApi | getServiceProvider | GET /v1/e-invoice/service-providers/{key} | Retrieve a Service Provider |
| ZuoraSdkJs.EInvoicingApi | getServiceProviders | GET /v1/e-invoice/service-providers | List Service Provider |
| ZuoraSdkJs.EInvoicingApi | postBusinessRegion | POST /v1/e-invoice/business-regions | Post a Business Region |
| ZuoraSdkJs.EInvoicingApi | postServiceProvider | POST /v1/e-invoice/service-providers | Post a Service Provider |
| ZuoraSdkJs.EInvoicingApi | updateBusinessRegion | PUT /v1/e-invoice/business-regions/{key} | Update a Business Region |
| ZuoraSdkJs.EInvoicingApi | updateServiceProvider | PUT /v1/e-invoice/service-providers/{key} | Update a Service Provider |
| ZuoraSdkJs.ElectronicPaymentsHealthApi | getSystemHealthPaymentVolumeSummary | GET /system-health/payments/volume-summary | List payment volume summary records |
| ZuoraSdkJs.FilesApi | getFiles | GET /v1/files/{file-id} | Retrieve a file |
| ZuoraSdkJs.FulfillmentsApi | createFulfillment | POST /v1/fulfillments | Create fulfillments |
| ZuoraSdkJs.FulfillmentsApi | createFulfillmentItem | POST /v1/fulfillment-items | Create fulfillment items |
| ZuoraSdkJs.FulfillmentsApi | deleteFulfillment | DELETE /v1/fulfillments/{key} | Delete a fulfillment |
| ZuoraSdkJs.FulfillmentsApi | deleteFulfillmentItem | DELETE /v1/fulfillment-items/{id} | Delete a fulfillment item |
| ZuoraSdkJs.FulfillmentsApi | getFulfillment | GET /v1/fulfillments/{key} | Retrieve a fulfillment |
| ZuoraSdkJs.FulfillmentsApi | getFulfillmentItem | GET /v1/fulfillment-items/{id} | Retrieve a fulfillment item |
| ZuoraSdkJs.FulfillmentsApi | updateFulfillment | PUT /v1/fulfillments/{key} | Update a fulfillment |
| ZuoraSdkJs.FulfillmentsApi | updateFulfillmentItem | PUT /v1/fulfillment-items/{id} | Update a fulfillment item |
| ZuoraSdkJs.HostedPagesApi | getHostedPages | GET /v1/hostedpages | List hosted pages |
| ZuoraSdkJs.ImportsApi | objectGetImport | GET /v1/object/import/{id} | CRUD: Retrieve an import |
| ZuoraSdkJs.ImportsApi | objectPostImport | POST /v1/object/import | CRUD: Create an import |
| ZuoraSdkJs.InvoiceSchedulesApi | attachInvoiceSchedule | PUT /v1/invoice-schedules/{scheduleKey}/attach | Attach an invoice schedule |
| ZuoraSdkJs.InvoiceSchedulesApi | createInvoiceSchedule | POST /v1/invoice-schedules | Create an invoice schedule |
| ZuoraSdkJs.InvoiceSchedulesApi | deleteInvoiceSchedule | DELETE /v1/invoice-schedules/{scheduleKey} | Delete an invoice schedule |
| ZuoraSdkJs.InvoiceSchedulesApi | detachInvoiceSchedule | PUT /v1/invoice-schedules/{scheduleKey}/detach | Detach an invoice schedule |
| ZuoraSdkJs.InvoiceSchedulesApi | executeInvoiceSchedule | POST /v1/invoice-schedules/{scheduleKey}/execute | Execute an invoice schedule |
| ZuoraSdkJs.InvoiceSchedulesApi | getInvoiceSchedule | GET /v1/invoice-schedules/{scheduleKey} | Retrieve an invoice schedule |
| ZuoraSdkJs.InvoiceSchedulesApi | pauseInvoiceSchedule | PUT /v1/invoice-schedules/{scheduleKey}/pause | Pause an invoice schedule |
| ZuoraSdkJs.InvoiceSchedulesApi | resumeInvoiceSchedule | PUT /v1/invoice-schedules/{scheduleKey}/resume | Resume an invoice schedule |
| ZuoraSdkJs.InvoiceSchedulesApi | updateInvoiceSchedule | PUT /v1/invoice-schedules/{scheduleKey} | Update an invoice schedule |
| ZuoraSdkJs.InvoicesApi | bulkCreateStandaloneInvoices | POST /v1/invoices/batch | Create standalone invoices |
| ZuoraSdkJs.InvoicesApi | bulkPostInvoices | POST /v1/invoices/bulk-post | Post invoices |
| ZuoraSdkJs.InvoicesApi | bulkUpdateInvoices | PUT /v1/invoices | Update invoices |
| ZuoraSdkJs.InvoicesApi | cancelInvoice | PUT /v1/invoices/{invoiceKey}/cancel | Cancel an invoice |
| ZuoraSdkJs.InvoicesApi | createInvoiceTaxationItems | POST /v1/invoices/{invoiceKey}/taxation-items | Create taxation items for an invoice |
| ZuoraSdkJs.InvoicesApi | createStandaloneInvoice | POST /v1/invoices | Create a standalone invoice |
| ZuoraSdkJs.InvoicesApi | deleteInvoice | DELETE /v1/invoices/{invoiceKey} | Delete an invoice |
| ZuoraSdkJs.InvoicesApi | emailInvoice | POST /v1/invoices/{invoiceKey}/emails | Email an invoice |
| ZuoraSdkJs.InvoicesApi | getInvoice | GET /v1/invoices/{invoiceKey} | Retrieve an invoice |
| ZuoraSdkJs.InvoicesApi | getInvoiceApplicationParts | GET /v1/invoices/{invoiceKey}/application-parts | List all application parts of an invoice |
| ZuoraSdkJs.InvoicesApi | getInvoiceFiles | GET /v1/invoices/{invoiceKey}/files | List all files of an invoice |
| ZuoraSdkJs.InvoicesApi | getInvoiceItems | GET /v1/invoices/{invoiceKey}/items | List all items of an invoice |
| ZuoraSdkJs.InvoicesApi | getInvoicePdfStatus | GET /v1/invoices/pdf-status | Retrieve PDF status of invoices in a batch. |
| ZuoraSdkJs.InvoicesApi | getTaxationItemsOfInvoiceItem | GET /v1/invoices/{invoiceKey}/items/{itemId}/taxation-items | List all taxation items of an invoice item |
| ZuoraSdkJs.InvoicesApi | postInvoice | PUT /v1/invoices/{invoiceKey}/post | Cancel an invoice |
| ZuoraSdkJs.InvoicesApi | reverseInvoice | PUT /v1/invoices/{invoiceKey}/reverse | Reverse an invoice |
| ZuoraSdkJs.InvoicesApi | updateInvoice | PUT /v1/invoices/{invoiceKey} | Update an invoice |
| ZuoraSdkJs.InvoicesApi | uploadFileForInvoice | POST /v1/invoices/{invoiceKey}/files | Upload a file for an invoice |
| ZuoraSdkJs.InvoicesApi | writeOffInvoice | PUT /v1/invoices/{invoiceKey}/write-off | Write off an invoice |
| ZuoraSdkJs.JournalRunsApi | cancelJournalRun | PUT /v1/journal-runs/{jr-number}/cancel | Cancel a journal run |
| ZuoraSdkJs.JournalRunsApi | createJournalRun | POST /v1/journal-runs | Create a journal run |
| ZuoraSdkJs.JournalRunsApi | deleteJournalRun | DELETE /v1/journal-runs/{jr-number} | Delete a journal run |
| ZuoraSdkJs.JournalRunsApi | getJournalRun | GET /v1/journal-runs/{jr-number} | Retrieve a journal run |
| ZuoraSdkJs.MassUpdaterApi | createMassUpdater | POST /v1/bulk | Perform a mass action |
| ZuoraSdkJs.MassUpdaterApi | getMassUpdater | GET /v1/bulk/{bulk-key} | List all results of a mass action |
| ZuoraSdkJs.MassUpdaterApi | stopMassUpdater | PUT /v1/bulk/{bulk-key}/stop | Stop a mass action |
| ZuoraSdkJs.NotificationsApi | createNotificationDefinition | POST /notifications/notification-definitions | Create a notification definition |
| ZuoraSdkJs.NotificationsApi | createOrUpdateEmailTemplates | POST /notifications/email-templates/import | Create or update email templates |
| ZuoraSdkJs.NotificationsApi | deleteEmailTemplate | DELETE /notifications/email-templates/{id} | Delete an email template |
| ZuoraSdkJs.NotificationsApi | deleteNotificationDefinition | DELETE /notifications/notification-definitions/{id} | Delete a notification definition |
| ZuoraSdkJs.NotificationsApi | deleteNotificationHistoryForAccount | DELETE /notifications/history | Delete notification histories for an account |
| ZuoraSdkJs.NotificationsApi | getCalloutHistory | GET /v1/notification-history/callout | List callout notification histories |
| ZuoraSdkJs.NotificationsApi | getEmailHistory | GET /v1/notification-history/email | List email notification histories |
| ZuoraSdkJs.NotificationsApi | getEmailTemplate | GET /notifications/email-templates/{id} | Retrieve an email template |
| ZuoraSdkJs.NotificationsApi | getNotificationDefinition | GET /notifications/notification-definitions/{id} | Retrieve a notification definition |
| ZuoraSdkJs.NotificationsApi | getNotificationHistoryDeletionTask | GET /notifications/history/tasks/{id} | Retrieve a notification history deletion task |
| ZuoraSdkJs.NotificationsApi | postCreateEmailTemplate | POST /notifications/email-templates | Create an email template |
| ZuoraSdkJs.NotificationsApi | queryEmailTemplates | GET /notifications/email-templates | List email templates |
| ZuoraSdkJs.NotificationsApi | queryNotificationDefinitions | GET /notifications/notification-definitions | List notification definitions |
| ZuoraSdkJs.NotificationsApi | resendCalloutNotifications | POST /notifications/callout-histories/resend | Resend callout notifications |
| ZuoraSdkJs.NotificationsApi | resendEmailNotifications | POST /notifications/email-histories/resend | Resend email notifications |
| ZuoraSdkJs.NotificationsApi | updateEmailTemplate | PUT /notifications/email-templates/{id} | Update an email template |
| ZuoraSdkJs.NotificationsApi | updateNotificationDefinition | PUT /notifications/notification-definitions/{id} | Update a notification definition |
| ZuoraSdkJs.OAuthApi | createToken | POST /oauth/token | Create an OAuth token |
| ZuoraSdkJs.ObjectQueriesApi | queryAccountByKey | GET /object-query/accounts/{key} | Retrieve an account |
| ZuoraSdkJs.ObjectQueriesApi | queryAccounts | GET /object-query/accounts | List accounts |
| ZuoraSdkJs.ObjectQueriesApi | queryAmendmentByKey | GET /object-query/amendments/{key} | Retrieve an amendment |
| ZuoraSdkJs.ObjectQueriesApi | queryAmendments | GET /object-query/amendments | List amendments |
| ZuoraSdkJs.ObjectQueriesApi | queryBillingRunByKey | GET /object-query/billing-runs/{key} | Retrieve a bill run |
| ZuoraSdkJs.ObjectQueriesApi | queryBillingRuns | GET /object-query/billing-runs | List bill runs |
| ZuoraSdkJs.ObjectQueriesApi | queryContactByKey | GET /object-query/contacts/{key} | Retrieve a contact |
| ZuoraSdkJs.ObjectQueriesApi | queryContacts | GET /object-query/contacts | List contacts |
| ZuoraSdkJs.ObjectQueriesApi | queryCreditMemoApplicationByKey | GET /object-query/credit-memo-applications/{key} | Retrieve a credit memo application |
| ZuoraSdkJs.ObjectQueriesApi | queryCreditMemoApplications | GET /object-query/credit-memo-applications | List credit memo applications |
| ZuoraSdkJs.ObjectQueriesApi | queryCreditMemoByKey | GET /object-query/credit-memos/{key} | Retrieve a credit memo |
| ZuoraSdkJs.ObjectQueriesApi | queryCreditMemoItemByKey | GET /object-query/credit-memo-items/{key} | Retrieve a credit memo item |
| ZuoraSdkJs.ObjectQueriesApi | queryCreditMemoItems | GET /object-query/credit-memo-items | List credit memo items |
| ZuoraSdkJs.ObjectQueriesApi | queryCreditMemos | GET /object-query/credit-memos | List credit memos |
| ZuoraSdkJs.ObjectQueriesApi | queryCustomObjectBykey | GET /object-query/{custom-object-name}/{key} | Retrieve a custom object |
| ZuoraSdkJs.ObjectQueriesApi | queryCustomObjects | GET /object-query/{custom-object-name} | List custom objects |
| ZuoraSdkJs.ObjectQueriesApi | queryDailyConsumptionSummaryByKey | GET /object-query/daily-consumption-summaries/{key} | Retrieve a daily consumption summary |
| ZuoraSdkJs.ObjectQueriesApi | queryDailyConsumptionSummarys | GET /object-query/daily-consumption-summaries | List daily consumption summaries |
| ZuoraSdkJs.ObjectQueriesApi | queryDebitMemoByKey | GET /object-query/debit-memos/{key} | Retrieve a debit memo |
| ZuoraSdkJs.ObjectQueriesApi | queryDebitMemoItemByKey | GET /object-query/debit-memo-items/{key} | Retrieve a debit memo item |
| ZuoraSdkJs.ObjectQueriesApi | queryDebitMemoItems | GET /object-query/debit-memo-items | List debit memo items |
| ZuoraSdkJs.ObjectQueriesApi | queryDebitMemos | GET /object-query/debit-memos | List debit memos |
| ZuoraSdkJs.ObjectQueriesApi | queryInvoiceByKey | GET /object-query/invoices/{key} | Retrieve an invoice |
| ZuoraSdkJs.ObjectQueriesApi | queryInvoiceItemByKey | GET /object-query/invoice-items/{key} | Retrieve an invoice item |
| ZuoraSdkJs.ObjectQueriesApi | queryInvoiceItems | GET /object-query/invoice-items | List invoice items |
| ZuoraSdkJs.ObjectQueriesApi | queryInvoices | GET /object-query/invoices | List invoices |
| ZuoraSdkJs.ObjectQueriesApi | queryInvoiceScheduleByKey | GET /object-query/invoice-schedules/{key} | Retrieve an invoice schedule |
| ZuoraSdkJs.ObjectQueriesApi | queryInvoiceSchedules | GET /object-query/invoice-schedules | List invoice schedules |
| ZuoraSdkJs.ObjectQueriesApi | queryOrderActionByKey | GET /object-query/order-actions/{key} | Retrieve an order action |
| ZuoraSdkJs.ObjectQueriesApi | queryOrderActions | GET /object-query/order-actions | List order actions |
| ZuoraSdkJs.ObjectQueriesApi | queryOrderLineItemByKey | GET /object-query/order-line-items/{key} | Retrieve an order line item |
| ZuoraSdkJs.ObjectQueriesApi | queryOrderLineItems | GET /object-query/order-line-items | List order line items |
| ZuoraSdkJs.ObjectQueriesApi | queryOrdersByKey | GET /object-query/orders/{key} | Retrieve an order |
| ZuoraSdkJs.ObjectQueriesApi | queryOrderss | GET /object-query/orders | List orders |
| ZuoraSdkJs.ObjectQueriesApi | queryPaymentApplicationByKey | GET /object-query/payment-applications/{key} | Retrieve a payment application |
| ZuoraSdkJs.ObjectQueriesApi | queryPaymentApplications | GET /object-query/payment-applications | List payment applications |
| ZuoraSdkJs.ObjectQueriesApi | queryPaymentByKey | GET /object-query/payments/{key} | Retrieve a payment |
| ZuoraSdkJs.ObjectQueriesApi | queryPaymentMethodByKey | GET /object-query/payment-methods/{key} | Retrieve a payment method |
| ZuoraSdkJs.ObjectQueriesApi | queryPaymentMethodSnapshotByKey | GET /object-query/payment-method-snapshots/{key} | Retrieve a payment method snapshot |
| ZuoraSdkJs.ObjectQueriesApi | queryPaymentMethodSnapshots | GET /object-query/payment-method-snapshots | List payment method snapshots |
| ZuoraSdkJs.ObjectQueriesApi | queryPaymentMethods | GET /object-query/payment-methods | List payment methods |
| ZuoraSdkJs.ObjectQueriesApi | queryPaymentRunByKey | GET /object-query/payment-runs/{key} | Retrieve a payment run |
| ZuoraSdkJs.ObjectQueriesApi | queryPaymentRuns | GET /object-query/payment-runs | List payment runs |
| ZuoraSdkJs.ObjectQueriesApi | queryPaymentScheduleByKey | GET /object-query/payment-schedules/{key} | Retrieve a payment schedule |
| ZuoraSdkJs.ObjectQueriesApi | queryPaymentScheduleItemByKey | GET /object-query/payment-schedule-items/{key} | Retrieve a payment schedule item |
| ZuoraSdkJs.ObjectQueriesApi | queryPaymentScheduleItems | GET /object-query/payment-schedule-items | List payment schedule items |
| ZuoraSdkJs.ObjectQueriesApi | queryPaymentSchedules | GET /object-query/payment-schedules | List payment schedules |
| ZuoraSdkJs.ObjectQueriesApi | queryPayments | GET /object-query/payments | List payments |
| ZuoraSdkJs.ObjectQueriesApi | queryPrepaidBalanceByKey | GET /object-query/prepaid-balances/{key} | Retrieve a prepaid balance |
| ZuoraSdkJs.ObjectQueriesApi | queryPrepaidBalanceFundByKey | GET /object-query/prepaid-balance-funds/{key} | Retrieve a prepaid balance fund |
| ZuoraSdkJs.ObjectQueriesApi | queryPrepaidBalanceFunds | GET /object-query/prepaid-balance-funds | List prepaid balance funds |
| ZuoraSdkJs.ObjectQueriesApi | queryPrepaidBalanceTransactionByKey | GET /object-query/prepaid-balance-transactions/{key} | Retrieve a prepaid balance transaction |
| ZuoraSdkJs.ObjectQueriesApi | queryPrepaidBalanceTransactions | GET /object-query/prepaid-balance-transactions | List prepaid balance transactions |
| ZuoraSdkJs.ObjectQueriesApi | queryPrepaidBalances | GET /object-query/prepaid-balances | List prepaid balances |
| ZuoraSdkJs.ObjectQueriesApi | queryProcessedUsageByKey | GET /object-query/processed-usages/{key} | Retrieve a processed usage record |
| ZuoraSdkJs.ObjectQueriesApi | queryProcessedUsages | GET /object-query/processed-usages | List processed usage records |
| ZuoraSdkJs.ObjectQueriesApi | queryProductByKey | GET /object-query/products/{key} | Retrieve a product |
| ZuoraSdkJs.ObjectQueriesApi | queryProductRatePlanByKey | GET /object-query/product-rate-plans/{key} | Retrieve a product rate plan |
| ZuoraSdkJs.ObjectQueriesApi | queryProductRatePlanChargeByKey | GET /object-query/product-rate-plan-charges/{key} | Retrieve a product rate plan charge |
| ZuoraSdkJs.ObjectQueriesApi | queryProductRatePlanChargeTierByKey | GET /object-query/product-rate-plan-charge-tiers/{key} | Retrieve a product rate plan charge tier |
| ZuoraSdkJs.ObjectQueriesApi | queryProductRatePlanChargeTiers | GET /object-query/product-rate-plan-charge-tiers | List product rate plan charge tiers |
| ZuoraSdkJs.ObjectQueriesApi | queryProductRatePlanCharges | GET /object-query/product-rate-plan-charges | List product rate plan charges |
| ZuoraSdkJs.ObjectQueriesApi | queryProductRatePlans | GET /object-query/product-rate-plans | List product rate plans |
| ZuoraSdkJs.ObjectQueriesApi | queryProducts | GET /object-query/products | List products |
| ZuoraSdkJs.ObjectQueriesApi | queryRatePlanByKey | GET /object-query/rate-plans/{key} | Retrieve a rate plan |
| ZuoraSdkJs.ObjectQueriesApi | queryRatePlanChargeByKey | GET /object-query/rate-plan-charges/{key} | Retrieve a rate plan charge |
| ZuoraSdkJs.ObjectQueriesApi | queryRatePlanChargeTierByKey | GET /object-query/rate-plan-charge-tiers/{key} | Retrieve a rate plan charge tier |
| ZuoraSdkJs.ObjectQueriesApi | queryRatePlanChargeTiers | GET /object-query/rate-plan-charge-tiers | List rate plan charge tiers |
| ZuoraSdkJs.ObjectQueriesApi | queryRatePlanCharges | GET /object-query/rate-plan-charges | List rate plan charges |
| ZuoraSdkJs.ObjectQueriesApi | queryRatePlans | GET /object-query/rate-plans | List rate plans |
| ZuoraSdkJs.ObjectQueriesApi | queryRatingDetailByKey | GET /object-query/rating-details/{key} | Retrieve a rating detail |
| ZuoraSdkJs.ObjectQueriesApi | queryRatingDetails | GET /object-query/rating-details | List rating details |
| ZuoraSdkJs.ObjectQueriesApi | queryRatingResultByKey | GET /object-query/rating-results/{key} | Retrieve a rating result |
| ZuoraSdkJs.ObjectQueriesApi | queryRatingResults | GET /object-query/rating-results | List rating results |
| ZuoraSdkJs.ObjectQueriesApi | queryRefundApplicationByKey | GET /object-query/refund-applications/{key} | Retrieve a refund application |
| ZuoraSdkJs.ObjectQueriesApi | queryRefundApplicationItemByKey | GET /object-query/refund-application-items/{key} | Retrieve a refund application item |
| ZuoraSdkJs.ObjectQueriesApi | queryRefundApplicationItems | GET /object-query/refund-application-items | List refund application items |
| ZuoraSdkJs.ObjectQueriesApi | queryRefundApplications | GET /object-query/refund-applications | List refund applications |
| ZuoraSdkJs.ObjectQueriesApi | queryRefundByKey | GET /object-query/refunds/{key} | Retrieve a refund |
| ZuoraSdkJs.ObjectQueriesApi | queryRefunds | GET /object-query/refunds | List refunds |
| ZuoraSdkJs.ObjectQueriesApi | querySubscriptionByKey | GET /object-query/subscriptions/{key} | Retrieve a subscription |
| ZuoraSdkJs.ObjectQueriesApi | querySubscriptions | GET /object-query/subscriptions | List subscriptions |
| ZuoraSdkJs.ObjectQueriesApi | querySummaryStatementByKey | GET /object-query/summarystatements/{key} | Retrieve a summary statement |
| ZuoraSdkJs.ObjectQueriesApi | querySummaryStatementRunByKey | GET /object-query/summarystatementruns/{key} | Retrieve a summary statement run |
| ZuoraSdkJs.ObjectQueriesApi | querySummaryStatementRuns | GET /object-query/summarystatementruns | List summary statement runs |
| ZuoraSdkJs.ObjectQueriesApi | querySummaryStatements | GET /object-query/summarystatements | List summary statements |
| ZuoraSdkJs.ObjectQueriesApi | queryTaxationItemByKey | GET /object-query/taxation-items/{key} | Retrieve a taxation item |
| ZuoraSdkJs.ObjectQueriesApi | queryTaxationItems | GET /object-query/taxation-items | List taxation items |
| ZuoraSdkJs.ObjectQueriesApi | queryUsageByKey | GET /object-query/usages/{key} | Retrieve a usage record |
| ZuoraSdkJs.ObjectQueriesApi | queryUsages | GET /object-query/usages | List usage records |
| ZuoraSdkJs.ObjectQueriesApi | queryValidityPeriodSummaryByKey | GET /object-query/validity-period-summaries/{key} | Retrieve a validity period summary |
| ZuoraSdkJs.ObjectQueriesApi | queryValidityPeriodSummarys | GET /object-query/validity-period-summaries | List validity period summaries |
| ZuoraSdkJs.OmniChannelSubscriptionsApi | createOmniChannelSubscription | POST /v1/omni-channel-subscriptions | Create an omnichannel subscription |
| ZuoraSdkJs.OmniChannelSubscriptionsApi | deleteOmniChannelSubscription | DELETE /v1/omni-channel-subscriptions/{subscriptionKey} | Delete an omnichannel subscription |
| ZuoraSdkJs.OmniChannelSubscriptionsApi | getOmniChannelSubscription | GET /v1/omni-channel-subscriptions/{subscriptionKey} | Retrieve an omnichannel subscription |
| ZuoraSdkJs.OperationsApi | createBillingPreview | POST /v1/operations/billing-preview | Generate a billing preview |
| ZuoraSdkJs.OperationsApi | createBulkPDFToZIPGeneration | POST /v1/operations/bulk-pdf | Export bulk PDF files |
| ZuoraSdkJs.OperationsApi | createInvoiceCollect | POST /v1/operations/invoice-collect | Invoice and collect |
| ZuoraSdkJs.OperationsApi | getBulkPDFToZIPGeneration | GET /v1/operations/bulk-pdf/{jobId} | Retrieve information of a bulk PDF file generation job |
| ZuoraSdkJs.OperationsApi | getOperationJob | GET /v1/operations/jobs/{jobId} | Retrieve an operation job |
| ZuoraSdkJs.OrderActionsApi | updateOrderAction | PUT /v1/orderActions/{id} | Update an order action |
| ZuoraSdkJs.OrderLineItemsApi | getOrderLineItem | GET /v1/order-line-items/{itemId} | Retrieve an order line item |
| ZuoraSdkJs.OrderLineItemsApi | updateOrderLineItem | PUT /v1/order-line-items/{itemId} | Update an order line item |
| ZuoraSdkJs.OrderLineItemsApi | updateOrderLineItems | POST /v1/order-line-items/bulk | Update order line items |
| ZuoraSdkJs.OrdersApi | activateOrder | PUT /v1/orders/{orderNumber}/activate | Activate an order |
| ZuoraSdkJs.OrdersApi | cancelOrder | PUT /v1/orders/{orderNumber}/cancel | Cancel an order |
| ZuoraSdkJs.OrdersApi | createOrder | POST /v1/orders | Create an order |
| ZuoraSdkJs.OrdersApi | createOrderAsynchronously | POST /v1/async/orders | Create an order asynchronously |
| ZuoraSdkJs.OrdersApi | deleteOrder | DELETE /v1/orders/{orderNumber} | Delete an order |
| ZuoraSdkJs.OrdersApi | deleteOrderAsynchronously | DELETE /v1/async/orders/{orderNumber} | Async Delete an order |
| ZuoraSdkJs.OrdersApi | getJobStatusAndResponse | GET /v1/async-jobs/{jobId} | Retrieve the status and response of a job |
| ZuoraSdkJs.OrdersApi | getOrder | GET /v1/orders/{orderNumber} | Retrieve an order |
| ZuoraSdkJs.OrdersApi | getOrders | GET /v1/orders | List orders |
| ZuoraSdkJs.OrdersApi | getOrdersByInvoiceOwner | GET /v1/orders/invoiceOwner/{accountNumber} | List orders of an invoice owner |
| ZuoraSdkJs.OrdersApi | getOrdersBySubscriptionNumber | GET /v1/orders/subscription/{subscriptionNumber} | List orders by subscription number |
| ZuoraSdkJs.OrdersApi | getOrdersBySubscriptionOwner | GET /v1/orders/subscriptionOwner/{accountNumber} | List orders of a subscription owner |
| ZuoraSdkJs.OrdersApi | getPendingOrdersBySubscriptionNumber | GET /v1/orders/subscription/{subscription-key}/pending | List pending orders by subscription number |
| ZuoraSdkJs.OrdersApi | previewOrder | POST /v1/orders/preview | Preview an order |
| ZuoraSdkJs.OrdersApi | previewOrderAsynchronously | POST /v1/async/orders/preview | Preview an order asynchronously |
| ZuoraSdkJs.OrdersApi | revertOrder | POST /v1/orders/{orderNumber}/revert | Revert an order |
| ZuoraSdkJs.OrdersApi | updateOrder | PUT /v1/orders/{orderNumber} | Update an order |
| ZuoraSdkJs.OrdersApi | updateOrderCustomFields | PUT /v1/orders/{orderNumber}/customFields | Update order custom fields |
| ZuoraSdkJs.OrdersApi | updateOrderTriggerDates | PUT /v1/orders/{orderNumber}/triggerDates | Update order action trigger dates |
| ZuoraSdkJs.OrdersApi | updateSubscriptionCustomFields | PUT /v1/subscriptions/{subscriptionNumber}/customFields | Update subscription custom fields |
| ZuoraSdkJs.PaymentAuthorizationApi | cancelAuthorization | POST /v1/payment-methods/{payment-method-id}/voidAuthorize | Cancel authorization |
| ZuoraSdkJs.PaymentAuthorizationApi | createAuthorization | POST /v1/payment-methods/{payment-method-id}/authorize | Create authorization |
| ZuoraSdkJs.PaymentGatewayReconciliationApi | reconcileRefund | POST /v1/refunds/{refund-key}/reconcile | Reconcile a refund |
| ZuoraSdkJs.PaymentGatewayReconciliationApi | rejectPayment | POST /v1/gateway-settlement/payments/{payment-key}/reject | Reject a payment |
| ZuoraSdkJs.PaymentGatewayReconciliationApi | reversePayment | POST /v1/gateway-settlement/payments/{payment-key}/chargeback | Reverse a payment |
| ZuoraSdkJs.PaymentGatewayReconciliationApi | settlePayment | POST /v1/gateway-settlement/payments/{payment-key}/settle | Settle a payment |
| ZuoraSdkJs.PaymentGatewaysApi | createPredebitNotification | POST /v1/payment-gateways/pre-debit-notification | Trigger a pre-debit notification |
| ZuoraSdkJs.PaymentGatewaysApi | getPaymentGateways | GET /v1/payment-gateways | List all payment gateways |
| ZuoraSdkJs.PaymentMethodSnapshotsApi | getPaymentMethodSnapshot | GET /v1/object/payment-method-snapshot/{id} | CRUD: Retrieve a payment method snapshot |
| ZuoraSdkJs.PaymentMethodTransactionLogsApi | getPaymentMethodTransactionLog | GET /v1/object/payment-method-transaction-log/{id} | CRUD: Retrieve a payment method transaction log |
| ZuoraSdkJs.PaymentMethodUpdaterApi | createPaymentMethodUpdaterBatch | POST /v1/payment-method-updaters/batches | Create a Payment Method Updater batch asynchronously |
| ZuoraSdkJs.PaymentMethodUpdaterApi | getPaymentMethodUpdaterInstances | GET /v1/payment-method-updaters | List Payment Method Updater instances |
| ZuoraSdkJs.PaymentMethodsApi | cancelStoredCredentialProfile | POST /v1/payment-methods/{payment-method-id}/profiles/{profile-number}/cancel | Cancel a stored credential profile |
| ZuoraSdkJs.PaymentMethodsApi | createPaymentMethod | POST /v1/payment-methods | Create a payment method |
| ZuoraSdkJs.PaymentMethodsApi | createPaymentSession | POST /web-payments/sessions | Create a payment session |
| ZuoraSdkJs.PaymentMethodsApi | createStoredCredentialProfile | POST /v1/payment-methods/{payment-method-id}/profiles | Create a stored credential profile |
| ZuoraSdkJs.PaymentMethodsApi | decryptPaymentMethod | POST /v1/payment-methods/decryption | Create an Apple Pay payment method |
| ZuoraSdkJs.PaymentMethodsApi | deletePaymentMethod | DELETE /v1/payment-methods/{payment-method-id} | Delete a payment method |
| ZuoraSdkJs.PaymentMethodsApi | expireStoredCredentialProfile | POST /v1/payment-methods/{payment-method-id}/profiles/{profile-number}/expire | Expire a stored credential profile |
| ZuoraSdkJs.PaymentMethodsApi | getPaymentMethod | GET /v1/payment-methods/{payment-method-id} | Retrieve a payment method |
| ZuoraSdkJs.PaymentMethodsApi | getStoredCredentialProfiles | GET /v1/payment-methods/{payment-method-id}/profiles | List stored credential profiles of a payment method |
| ZuoraSdkJs.PaymentMethodsApi | scrubPaymentMethod | PUT /v1/payment-methods/{payment-method-id}/scrub | Scrub a payment method |
| ZuoraSdkJs.PaymentMethodsApi | updatePaymentMethod | PUT /v1/payment-methods/{payment-method-id} | Update a payment method |
| ZuoraSdkJs.PaymentMethodsApi | verifyPaymentMethod | PUT /v1/payment-methods/{payment-method-id}/verify | Verify a payment method |
| ZuoraSdkJs.PaymentRunsApi | createPaymentRun | POST /v1/payment-runs | Create a payment run |
| ZuoraSdkJs.PaymentRunsApi | deletePaymentRun | DELETE /v1/payment-runs/{paymentRunKey} | Delete a payment run |
| ZuoraSdkJs.PaymentRunsApi | getPaymentRun | GET /v1/payment-runs/{paymentRunKey} | Retrieve a payment run |
| ZuoraSdkJs.PaymentRunsApi | getPaymentRunData | GET /v1/payment-runs/{paymentRunKey}/data | Retrieve payment run data |
| ZuoraSdkJs.PaymentRunsApi | getPaymentRunSummary | GET /v1/payment-runs/{paymentRunKey}/summary | Retrieve a payment run summary |
| ZuoraSdkJs.PaymentRunsApi | getPaymentRuns | GET /v1/payment-runs | List payment runs |
| ZuoraSdkJs.PaymentRunsApi | updatePaymentRun | PUT /v1/payment-runs/{paymentRunKey} | Update a payment run |
| ZuoraSdkJs.PaymentSchedulesApi | addItemsToCustomPaymentSchedule | POST /v1/payment-schedules/{paymentScheduleKey}/items | Add payment schedule items to a custom payment schedule |
| ZuoraSdkJs.PaymentSchedulesApi | cancelPaymentSchedule | PUT /v1/payment-schedules/{paymentScheduleKey}/cancel | Cancel a payment schedule |
| ZuoraSdkJs.PaymentSchedulesApi | cancelPaymentScheduleItem | PUT /v1/payment-schedule-items/{item-id}/cancel | Cancel a payment schedule item |
| ZuoraSdkJs.PaymentSchedulesApi | createPaymentSchedule | POST /v1/payment-schedules | Create a payment schedule |
| ZuoraSdkJs.PaymentSchedulesApi | createPaymentSchedules | POST /v1/payment-schedules/batch | Create multiple payment schedules at once |
| ZuoraSdkJs.PaymentSchedulesApi | getPaymentSchedule | GET /v1/payment-schedules/{paymentScheduleKey} | Retrieve a payment schedule |
| ZuoraSdkJs.PaymentSchedulesApi | getPaymentScheduleItem | GET /v1/payment-schedule-items/{item-id} | Retrieve a payment schedule item |
| ZuoraSdkJs.PaymentSchedulesApi | getPaymentScheduleStatistic | GET /v1/payment-schedules/statistics/{yyyy-mm-dd} | Retrieve payment schedule statistic of a date |
| ZuoraSdkJs.PaymentSchedulesApi | getPaymentSchedules | GET /v1/payment-schedules | List payment schedules by customer account |
| ZuoraSdkJs.PaymentSchedulesApi | retryPaymentScheduleItem | POST /v1/payment-schedule-items/retry-payment | Retry failed payment schedule items |
| ZuoraSdkJs.PaymentSchedulesApi | skipPaymentScheduleItem | PUT /v1/payment-schedule-items/{item-id}/skip | Skip a payment schedule item |
| ZuoraSdkJs.PaymentSchedulesApi | updatePaymentSchedule | PUT /v1/payment-schedules/{paymentScheduleKey} | Update a payment schedule |
| ZuoraSdkJs.PaymentSchedulesApi | updatePaymentScheduleItem | PUT /v1/payment-schedule-items/{item-id} | Update a payment schedule item |
| ZuoraSdkJs.PaymentSchedulesApi | updatePaymentSchedulePreview | PUT /v1/payment-schedules/{paymentScheduleKey}/preview | Preview the result of payment schedule updates |
| ZuoraSdkJs.PaymentTransactionLogsApi | getPaymentTransactionLog | GET /v1/object/payment-transaction-log/{id} | CRUD: Retrieve a payment transaction log |
| ZuoraSdkJs.PaymentsApi | applyPayment | PUT /v1/payments/{paymentKey}/apply | Apply a payment |
| ZuoraSdkJs.PaymentsApi | cancelPayment | PUT /v1/payments/{paymentKey}/cancel | Cancel a payment |
| ZuoraSdkJs.PaymentsApi | createPayment | POST /v1/payments | Create a payment |
| ZuoraSdkJs.PaymentsApi | createRefundPayment | POST /v1/payments/{paymentKey}/refunds | Refund a payment |
| ZuoraSdkJs.PaymentsApi | deletePayment | DELETE /v1/payments/{paymentKey} | Delete a payment |
| ZuoraSdkJs.PaymentsApi | getPayment | GET /v1/payments/{paymentKey} | Retrieve a payment |
| ZuoraSdkJs.PaymentsApi | getPaymentItemPart | GET /v1/payments/{paymentKey}/parts/{partId}/item-parts/{itemPartId} | Retrieve a payment part item |
| ZuoraSdkJs.PaymentsApi | getPaymentItemParts | GET /v1/payments/{paymentKey}/parts/{partId}/item-parts | List all payment part items |
| ZuoraSdkJs.PaymentsApi | getPaymentPart | GET /v1/payments/{paymentKey}/parts/{partId} | Retrieve a payment part |
| ZuoraSdkJs.PaymentsApi | getPaymentParts | GET /v1/payments/{paymentKey}/parts | List all parts of a payment |
| ZuoraSdkJs.PaymentsApi | getRetrieveAllPayments | GET /v1/payments | List payments |
| ZuoraSdkJs.PaymentsApi | refundPaymentwithAutoUnapply | POST /v1/payments/{paymentKey}/refunds/unapply | Refund a payment with auto-unapplying |
| ZuoraSdkJs.PaymentsApi | transferPayment | PUT /v1/payments/{paymentKey}/transfer | Transfer a payment |
| ZuoraSdkJs.PaymentsApi | unapplyPayment | PUT /v1/payments/{paymentKey}/unapply | Unapply a payment |
| ZuoraSdkJs.PaymentsApi | updatePayment | PUT /v1/payments/{paymentId} | Update a payment |
| ZuoraSdkJs.ProductRatePlanChargeTiersApi | getProductRatePlanChargeTier | GET /v1/object/product-rate-plan-charge-tier/{id} | CRUD: Retrieve a product rate plan charge tier |
| ZuoraSdkJs.ProductRatePlanChargeTiersApi | updateProductRatePlanChargeTier | PUT /v1/object/product-rate-plan-charge-tier/{id} | CRUD: Update a product rate plan charge tier |
| ZuoraSdkJs.ProductRatePlanChargesApi | createProductRatePlanCharge | POST /v1/object/product-rate-plan-charge | CRUD: Create a product rate plan charge |
| ZuoraSdkJs.ProductRatePlanChargesApi | deleteProductRatePlanCharge | DELETE /v1/object/product-rate-plan-charge/{id} | CRUD: Delete a product rate plan charge |
| ZuoraSdkJs.ProductRatePlanChargesApi | getProductRatePlanCharge | GET /v1/object/product-rate-plan-charge/{id} | CRUD: Retrieve a product rate plan charge |
| ZuoraSdkJs.ProductRatePlanChargesApi | updateProductRatePlanCharge | PUT /v1/object/product-rate-plan-charge/{id} | CRUD: Update a product rate plan charge |
| ZuoraSdkJs.ProductRatePlanChargesApi | updateProductRatePlanChargeFinanceInformation | PUT /v1/product-rate-plan-charges/{product-rate-plan-charge-key}/finance-information | Update a Zuora Revenue accounting code |
| ZuoraSdkJs.ProductRatePlansApi | createProductRatePlan | POST /v1/object/product-rate-plan | CRUD: Create a product rate plan |
| ZuoraSdkJs.ProductRatePlansApi | deleteProductRatePlan | DELETE /v1/object/product-rate-plan/{id} | CRUD: Delete a product rate plan |
| ZuoraSdkJs.ProductRatePlansApi | getProductRatePlan | GET /v1/product-rate-plans/{id} | Retrieve a product rate plan by ID |
| ZuoraSdkJs.ProductRatePlansApi | getProductRatePlansByExternalID | GET /v1/product-rate-plans/external-id/{externalId} | List product rate plans by external ID |
| ZuoraSdkJs.ProductRatePlansApi | getRatePlansByProduct | GET /v1/rateplan/{product-key}/productRatePlan | List all product rate plans of a product |
| ZuoraSdkJs.ProductRatePlansApi | updateProductRatePlan | PUT /v1/object/product-rate-plan/{id} | CRUD: Update a product rate plan |
| ZuoraSdkJs.ProductsApi | createProduct | POST /v1/object/product | Create a product |
| ZuoraSdkJs.ProductsApi | deleteProduct | DELETE /v1/object/product/{id} | CRUD: Delete a product |
| ZuoraSdkJs.ProductsApi | getProduct | GET /v1/catalog/product/{product-key} | Retrieve a product |
| ZuoraSdkJs.ProductsApi | getProducts | GET /v1/catalog/products | Get all products |
| ZuoraSdkJs.ProductsApi | updateProduct | PUT /v1/object/product/{id} | CRUD: Update a product |
| ZuoraSdkJs.RSASignaturesApi | createRSASignature | POST /v1/rsa-signatures | Generate an RSA signature |
| ZuoraSdkJs.RSASignaturesApi | decryptRSASignature | POST /v1/rsa-signatures/decrypt | Decrypt an RSA signature |
| ZuoraSdkJs.RampsApi | getRampByNumber | GET /v1/ramps/{rampNumber} | Retrieve a ramp |
| ZuoraSdkJs.RampsApi | getRampMetricsByNumber | GET /v1/ramps/{rampNumber}/ramp-metrics | List all ramp metrics of a ramp |
| ZuoraSdkJs.RampsApi | getRampMetricsByOrderNumber | GET /v1/orders/{orderNumber}/ramp-metrics | List ramp metrics by order number |
| ZuoraSdkJs.RampsApi | getRampMetricsBySubscriptionKey | GET /v1/subscriptions/{subscriptionKey}/ramp-metrics | List ramp metrics by subscription key |
| ZuoraSdkJs.RampsApi | getRampsBySubscriptionKey | GET /v1/subscriptions/{subscriptionKey}/ramps | Retrieve a ramp by subscription key |
| ZuoraSdkJs.RatePlansApi | getRatePlan | GET /v1/rateplans/{ratePlanId} | Retrieve a rate plan |
| ZuoraSdkJs.RefundsApi | cancelRefund | PUT /v1/refunds/{refundKey}/cancel | Cancel a refund |
| ZuoraSdkJs.RefundsApi | deleteRefund | DELETE /v1/refunds/{refundKey} | Delete a refund |
| ZuoraSdkJs.RefundsApi | getRefund | GET /v1/refunds/{refundKey} | Retrieve a refund |
| ZuoraSdkJs.RefundsApi | getRefundItemPart | GET /v1/refunds/{refundKey}/parts/{refundPartId}/item-parts/{itemPartId} | Retrieve a refund part item |
| ZuoraSdkJs.RefundsApi | getRefundItemParts | GET /v1/refunds/{refundKey}/parts/{refundPartId}/item-parts | List all refund part items |
| ZuoraSdkJs.RefundsApi | getRefundPart | GET /v1/refunds/{refundKey}/parts/{refundPartId} | Retrieve a refund part |
| ZuoraSdkJs.RefundsApi | getRefundParts | GET /v1/refunds/{refundKey}/parts | List all parts of a refund |
| ZuoraSdkJs.RefundsApi | getRefunds | GET /v1/refunds | List refunds |
| ZuoraSdkJs.RefundsApi | updateRefund | PUT /v1/refunds/{refundId} | Update a refund |
| ZuoraSdkJs.RegenerateApi | pOSTCreateRevRecEvents | POST /v1/uno-regenerate/rev-rec-events | Regenerate Rev Rec Event |
| ZuoraSdkJs.RegenerateApi | pOSTGenerateRevRecEventsForDailyConsumption | POST /v1/uno-regenerate/rev-rec-events/daily-consumption | Regenerate Rev Rec Event |
| ZuoraSdkJs.RegenerateApi | pOSTRegenerateBillingTransaction | POST /v1/uno-regenerate/billing-transaction | Regenerate Billing Transaction |
| ZuoraSdkJs.RegenerateApi | pOSTRegenerateBookingTransaction | POST /v1/uno-regenerate/booking-transaction | Regenerate Booking Transaction |
| ZuoraSdkJs.RevenueAccountingCodesApi | putRevProAccountingCodes | PUT /v1/revpro-accounting-codes | Update a Zuora Revenue accounting code |
| ZuoraSdkJs.RevenueIntegrationApi | describeViewColumns | GET /integration/v2/biviews/{view_name}/describe-columns |  |
| ZuoraSdkJs.RevenueIntegrationApi | downloadReport | GET /integration/v1/reports/download/{filename} |  |
| ZuoraSdkJs.RevenueIntegrationApi | generateJWTToken | POST /integration/v1/authenticate |  |
| ZuoraSdkJs.RevenueIntegrationApi | getBIViewCount | GET /integration/v2/biviews/count/{view_name} |  |
| ZuoraSdkJs.RevenueIntegrationApi | getBIViewStatus | GET /integration/v2/biviews-status |  |
| ZuoraSdkJs.RevenueIntegrationApi | getBIViewTaskDetails | GET /integration/v2/biviews-status/{task_id} |  |
| ZuoraSdkJs.RevenueIntegrationApi | getBIViews | GET /integration/v1/biviews/{view_name} |  |
| ZuoraSdkJs.RevenueIntegrationApi | getBIViewsV2 | GET /integration/v2/biviews/{view_name} |  |
| ZuoraSdkJs.RevenueIntegrationApi | getCsvUploadStatus | GET /integration/v1/csv/upload/status |  |
| ZuoraSdkJs.RevenueIntegrationApi | getFileUploadStatusByRequestId | GET /integration/v1/fileupload/status/{file_request_id} |  |
| ZuoraSdkJs.RevenueIntegrationApi | getReportsById | GET /integration/v1/reports/{report_id} |  |
| ZuoraSdkJs.RevenueIntegrationApi | getStageError | GET /integration/v1/stage/error/{errortype} |  |
| ZuoraSdkJs.RevenueIntegrationApi | integrationV2ReportsSignedurlReportIdGet | GET /integration/v2/reports/signedurl/{report_id} |  |
| ZuoraSdkJs.RevenueIntegrationApi | listReports | GET /integration/v1/reports/list |  |
| ZuoraSdkJs.RevenueIntegrationApi | selectBIView | POST /integration/v1/biviews/{view_name} |  |
| ZuoraSdkJs.RevenueIntegrationApi | uploadCsv | POST /integration/v1/csv/upload |  |
| ZuoraSdkJs.RevenueIntegrationApi | uploadFile | POST /integration/v1/upload/file |  |
| ZuoraSdkJs.RevenueIntegrationApi | uploadMapping | POST /integration/v1/upload/mapping |  |
| ZuoraSdkJs.SequenceSetsApi | createSequenceSets | POST /v1/sequence-sets | Create sequence sets |
| ZuoraSdkJs.SequenceSetsApi | deleteSequenceSet | DELETE /v1/sequence-sets/{id} | Delete a sequence set |
| ZuoraSdkJs.SequenceSetsApi | getSequenceSet | GET /v1/sequence-sets/{id} | Retrieve a sequence set |
| ZuoraSdkJs.SequenceSetsApi | getSequenceSets | GET /v1/sequence-sets | List sequence sets |
| ZuoraSdkJs.SequenceSetsApi | updateSequenceSet | PUT /v1/sequence-sets/{id} | Update a sequence set |
| ZuoraSdkJs.SettingsApi | getListAllSettings | GET /settings/listing | List all settings |
| ZuoraSdkJs.SettingsApi | postProcessSettingsBatchRequest | POST /settings/batch-requests | Submit settings requests |
| ZuoraSdkJs.SignUpApi | postSignUp | POST /v1/sign-up | Sign up |
| ZuoraSdkJs.SubscriptionChangeLogsApi | getSubscriptionChangeLogsByOrderNumber | GET /subscription-change-logs/orders/{orderNumber} | Retrieve change logs for a subscription |
| ZuoraSdkJs.SubscriptionChangeLogsApi | getSubscriptionChangeLogsBySubscriptionNumber | GET /subscription-change-logs/{subscriptionNumber} | Retrieve change logs for a subscription |
| ZuoraSdkJs.SubscriptionChangeLogsApi | getSubscriptionChangeLogsBySubscriptionNumberAndVersion | GET /subscription-change-logs/{subscriptionNumber}/versions/{version} | Retrieve change logs for a subscription |
| ZuoraSdkJs.SubscriptionsApi | cancelSubscription | PUT /v1/subscriptions/{subscription-key}/cancel | Cancel a subscription |
| ZuoraSdkJs.SubscriptionsApi | createSubscription | POST /v1/subscriptions | Create a subscription |
| ZuoraSdkJs.SubscriptionsApi | deleteSubscription | PUT /v1/subscriptions/{subscription-key}/delete | Delete a subscription by number |
| ZuoraSdkJs.SubscriptionsApi | getMetricsBySubscriptionNumbers | GET /v1/subscriptions/subscription-metrics | List subscriptions metrics by subscription numbers |
| ZuoraSdkJs.SubscriptionsApi | getSubscriptionByKey | GET /v1/subscriptions/{subscription-key} | Retrieve a subscription by key |
| ZuoraSdkJs.SubscriptionsApi | getSubscriptionByKeyAndVersion | GET /v1/subscriptions/{subscription-key}/versions/{version} | Retrieve a subscription by key and version |
| ZuoraSdkJs.SubscriptionsApi | getSubscriptionsByAccount | GET /v1/subscriptions/accounts/{account-key} | List subscriptions by account key |
| ZuoraSdkJs.SubscriptionsApi | previewExistingSubscription | POST /v1/subscriptions/{subscription-key}/preview | Preview a subscription by key |
| ZuoraSdkJs.SubscriptionsApi | previewSubscription | POST /v1/subscriptions/preview | Preview a subscription |
| ZuoraSdkJs.SubscriptionsApi | renewSubscription | PUT /v1/subscriptions/{subscription-key}/renew | Renew a subscription |
| ZuoraSdkJs.SubscriptionsApi | resumeSubscription | PUT /v1/subscriptions/{subscription-key}/resume | Resume a subscription |
| ZuoraSdkJs.SubscriptionsApi | suspendSubscription | PUT /v1/subscriptions/{subscription-key}/suspend | Suspend a subscription |
| ZuoraSdkJs.SubscriptionsApi | updateSubscription | PUT /v1/subscriptions/{subscription-key} | Update a subscription |
| ZuoraSdkJs.SubscriptionsApi | updateSubscriptionCustomFieldsOfASpecifiedVersion | PUT /v1/subscriptions/{subscriptionNumber}/versions/{version}/customFields | Update subscription custom fields of a subscription version |
| ZuoraSdkJs.SummaryJournalEntriesApi | cancelSummaryJournalEntry | PUT /v1/journal-entries/{je-number}/cancel | Cancel a summary journal entry |
| ZuoraSdkJs.SummaryJournalEntriesApi | createSummaryJournalEntry | POST /v1/journal-entries | Create a summary journal entry |
| ZuoraSdkJs.SummaryJournalEntriesApi | deleteSummaryJournalEntry | DELETE /v1/journal-entries/{je-number} | Delete a summary journal entry |
| ZuoraSdkJs.SummaryJournalEntriesApi | getAllSummaryJournalEntries | GET /v1/journal-entries/journal-runs/{jr-number} | List all summary journal entries in a journal run |
| ZuoraSdkJs.SummaryJournalEntriesApi | getSummaryJournalEntry | GET /v1/journal-entries/{je-number} | Retrieve a summary journal entry |
| ZuoraSdkJs.SummaryJournalEntriesApi | updateBasicSummaryJournalEntry | PUT /v1/journal-entries/{je-number}/basic-information | Update a summary journal entry |
| ZuoraSdkJs.TaxationItemsApi | createTaxationItem | POST /v1/object/taxation-item | CRUD: Create a taxation item |
| ZuoraSdkJs.TaxationItemsApi | deleteTaxationItem | DELETE /v1/taxation-items/{id} | Delete a taxation item |
| ZuoraSdkJs.TaxationItemsApi | getTaxationItem | GET /v1/taxation-items/{id} | Retrieve a taxation item |
| ZuoraSdkJs.TaxationItemsApi | putTaxationItem | PUT /v1/taxation-items/{id} | Update a taxation item |
| ZuoraSdkJs.UsageApi | createUsage | POST /v1/object/usage | CRUD: Create a usage record |
| ZuoraSdkJs.UsageApi | deleteUsage | DELETE /v1/object/usage/{id} | CRUD: Delete a usage record |
| ZuoraSdkJs.UsageApi | getUsage | GET /v1/object/usage/{id} | CRUD: Retrieve a usage record |
| ZuoraSdkJs.UsageApi | getUsageRateDetailByInvoiceItem | GET /v1/invoices/invoice-item/{invoice-item-id}/usage-rate-detail | Retrieve usage rate detail for an invoice item |
| ZuoraSdkJs.UsageApi | getUsagesByAccount | GET /v1/usage/accounts/{account-key} | Retrieve usage records by account |
| ZuoraSdkJs.UsageApi | updateUsage | PUT /v1/object/usage/{id} | CRUD: Update a usage record |
| ZuoraSdkJs.UsageApi | uploadUsageFile | POST /v1/usage | Upload a usage file |
| ZuoraSdkJs.WorkflowsApi | deleteWorkflow | DELETE /workflows/{workflow_id} | Delete a workflow |
| ZuoraSdkJs.WorkflowsApi | deleteWorkflowVersion | DELETE /workflows/versions/{version_id} | Delete a workflow version |
| ZuoraSdkJs.WorkflowsApi | getWorkflow | GET /workflows/{workflow_id} | Retrieve a workflow |
| ZuoraSdkJs.WorkflowsApi | getWorkflowExport | GET /workflows/{workflow_id}/export | Export a workflow version |
| ZuoraSdkJs.WorkflowsApi | getWorkflowRun | GET /workflows/workflow_runs/{workflow_run_id} | Retrieve a workflow run |
| ZuoraSdkJs.WorkflowsApi | getWorkflowVersions | GET /workflows/{workflow_id}/versions | List all versions of a workflow definition |
| ZuoraSdkJs.WorkflowsApi | getWorkflows | GET /workflows | List workflows |
| ZuoraSdkJs.WorkflowsApi | getWorkflowsTask | GET /workflows/tasks/{task_id} | Retrieve a workflow task |
| ZuoraSdkJs.WorkflowsApi | getWorkflowsTasks | GET /workflows/tasks | List workflow tasks |
| ZuoraSdkJs.WorkflowsApi | getWorkflowsUsages | GET /workflows/metrics.json | Retrieve workflow task usage |
| ZuoraSdkJs.WorkflowsApi | pATCHUpdateWorkflow | PATCH /workflows/{workflow_id} | Update a workflow |
| ZuoraSdkJs.WorkflowsApi | postRunWorkflow | POST /workflows/{workflow_id}/run | Run a workflow |
| ZuoraSdkJs.WorkflowsApi | postWorkflowImport | POST /workflows/import | Import a workflow |
| ZuoraSdkJs.WorkflowsApi | postWorkflowVersionsImport | POST /workflows/{workflow_id}/versions/import | Import a workflow version |
| ZuoraSdkJs.WorkflowsApi | postWorkflowsTaskRerun | POST /workflows/tasks/{task_id}/rerun | Rerun a workflow task |
| ZuoraSdkJs.WorkflowsApi | putWorkflowsTasksUpdate | PUT /workflows/tasks/batch_update | Update workflow tasks |
