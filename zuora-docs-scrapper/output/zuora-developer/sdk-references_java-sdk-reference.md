---
title: "Java client library reference"
url: "https://developer.zuora.com/sdk-references/java-sdk-reference/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:59.771Z"
---

#

Java client library reference

The latest Java client library version is **3.13.0**.

##

Requirements

Java 11 or a later version.

##

Installation

See [Zuora Client Libraries](https://developer.zuora.com/docs/guides/libraries/).

Note that in your code, you should use the `com.zuora.ZuoraClient` package instead of `com.zuora.sdk.ZuoraClient`. `com.zuora.sdk.ZuoraClient` is a legacy package and is added only for backward compatibility.

##

Classes and methods

The following table summarizes all available classes and methods for the Zuora Java client library.

| Class | Method | HTTP request | Description |
| --- | --- | --- | --- |
| AccountingCodesApi | activateAccountingCode | PUT /v1/accounting-codes/{ac-id}/activate | Activate an accounting code |
| AccountingCodesApi | createAccountingCode | POST /v1/accounting-codes | Create an accounting code |
| AccountingCodesApi | deactivateAccountingCode | PUT /v1/accounting-codes/{ac-id}/deactivate | Deactivate an accounting code |
| AccountingCodesApi | deleteAccountingCode | DELETE /v1/accounting-codes/{ac-id} | Delete an accounting code |
| AccountingCodesApi | getAccountingCode | GET /v1/accounting-codes/{ac-id} | Retrieve an accounting code |
| AccountingCodesApi | getAllAccountingCodes | GET /v1/accounting-codes | List all accounting codes |
| AccountingCodesApi | updateAccountingCode | PUT /v1/accounting-codes/{ac-id} | Update an accounting code |
| AccountingPeriodsApi | closeAccountingPeriod | PUT /v1/accounting-periods/{ap-id}/close | Close an accounting period |
| AccountingPeriodsApi | createAccountingPeriod | POST /v1/accounting-periods | Create an accounting period |
| AccountingPeriodsApi | deleteAccountingPeriod | DELETE /v1/accounting-periods/{ap-id} | Delete an accounting period |
| AccountingPeriodsApi | getAccountingPeriod | GET /v1/accounting-periods/{ap-id} | Retrieve an accounting period |
| AccountingPeriodsApi | getAllAccountingPeriods | GET /v1/accounting-periods | List all accounting periods |
| AccountingPeriodsApi | pendingCloseAccountingPeriod | PUT /v1/accounting-periods/{ap-id}/pending-close | Set an accounting period to pending close |
| AccountingPeriodsApi | reopenAccountingPeriod | PUT /v1/accounting-periods/{ap-id}/reopen | Reopen an accounting period |
| AccountingPeriodsApi | runTrialBalance | PUT /v1/accounting-periods/{ap-id}/run-trial-balance | Run trial balance |
| AccountingPeriodsApi | updateAccountingPeriod | PUT /v1/accounting-periods/{ap-id} | Update an accounting period |
| AccountsApi | createAccount | POST /v1/accounts | Create an account |
| AccountsApi | deleteAccount | DELETE /v1/accounts/{account-key} | Delete an account |
| AccountsApi | getAccount | GET /v1/accounts/{account-key} | Retrieve an account |
| AccountsApi | getAccountDefaultPaymentMethod | GET /v1/accounts/{account-key}/payment-methods/default | Retrieve the default payment method of an account |
| AccountsApi | getAccountPaymentMethods | GET /v1/accounts/{account-key}/payment-methods | List payment methods of an account |
| AccountsApi | getAccountSummary | GET /v1/accounts/{account-key}/summary | Retrieve an account summary |
| AccountsApi | updateAccount | PUT /v1/accounts/{account-key} | Update an account |
| ActionsApi | actionPostCreate | POST /v1/action/create | Create |
| ActionsApi | actionPostDelete | POST /v1/action/delete | Delete |
| ActionsApi | actionPostQuery | POST /v1/action/query | Query |
| ActionsApi | actionPostqueryMore | POST /v1/action/queryMore | QueryMore |
| ActionsApi | actionPostupdate | POST /v1/action/update | Update |
| AdjustmentsApi | cancelBillingAdjustment | PUT /v1/adjustments/{adjustmentId}/cancel | Cancel an adjustment |
| AdjustmentsApi | createBillingAdjustment | POST /v1/adjustments | Create an adjustment |
| AdjustmentsApi | getBillingAdjustment | GET /v1/adjustments/{adjustment-key} | Retrieve an adjustment |
| AdjustmentsApi | getSubscriptionAdjustments | GET /v1/adjustments | List all adjustments of the latest version subscription |
| AdjustmentsApi | previewBillingAdjustment | POST /v1/adjustments/preview | Preview an adjustment |
| AggregateQueriesApi | createBatchQuery | POST /v1/batch-query/ | Submit an aggregate query job |
| AggregateQueriesApi | deleteBatchQueryJob | DELETE /v1/batch-query/jobs/{jobid} | Cancel a running aggregate query job |
| AggregateQueriesApi | getBatchQueryJob | GET /v1/batch-query/jobs/{jobid} | Retrieve an aggregate query job |
| ApiHealthApi | getSystemHealthApiVolumeSummary | GET /system-health/api-requests/volume-summary | List API volume summary records |
| AttachmentsApi | deleteAttachments | DELETE /v1/attachments/{attachment-id} | Delete an attachment |
| AttachmentsApi | getAttachments | GET /v1/attachments/{attachment-id} | Retrieve an attachment |
| AttachmentsApi | getAttachmentsList | GET /v1/attachments/{object-type}/{object-key} | List attachments by object type and key |
| AttachmentsApi | postAttachments | POST /v1/attachments | Create an attachment |
| AttachmentsApi | putAttachments | PUT /v1/attachments/{attachment-id} | Update an attachment |
| BillRunApi | cancelBillRun | PUT /v1/bill-runs/{billRunId}/cancel | Cancel a bill run |
| BillRunApi | createBillRun | POST /v1/bill-runs | Create a bill run |
| BillRunApi | deleteBillRun | DELETE /v1/bill-runs/{billRunId} | Delete a bill run |
| BillRunApi | emailBillRun | POST /v1/bill-runs/{billRunKey}/emails | Email billing documents generated from a bill run |
| BillRunApi | getBillRun | GET /v1/bill-runs/{billRunId} | Retrieve a bill run |
| BillRunApi | postBillRun | PUT /v1/bill-runs/{billRunId}/post | Post a bill run |
| BillRunHealthApi | getSystemHealthBillingDocVolumeSummary | GET /system-health/billing-documents/volume-summary | List billing document volume summary records |
| BillingDocumentsApi | createBillingDocumentFilesDeletionJob | POST /v1/accounts/billing-documents/files/deletion-jobs | Create a job to hard delete billing document files |
| BillingDocumentsApi | generateBillingDocuments | POST /v1/accounts/{key}/billing-documents/generate | Generate billing documents by account ID |
| BillingDocumentsApi | getBillingDocumentFilesDeletionJob | GET /v1/accounts/billing-documents/files/deletion-jobs/{jobId} | Retrieve a job of hard deleting billing document files |
| BillingDocumentsApi | getBillingDocuments | GET /v1/billing-documents | List billing documents for an account |
| BillingPreviewRunApi | createBillingPreviewRun | POST /v1/billing-preview-runs | Create a billing preview run |
| BillingPreviewRunApi | getBillingPreviewRun | GET /v1/billing-preview-runs/{billingPreviewRunId} | Retrieve a billing preview run |
| BookingDateBackfillJobApi | gETBookingDateBackfillJobById | GET /v1/uno/data-backfill/bookingdate/jobs/{jobId} | Find BookingDate Backfill job by ID |
| BookingDateBackfillJobApi | gETListBookingDateBackfillJobs | GET /v1/uno/data-backfill/bookingdate/jobs | Query all Booking Date Backfill Jobs |
| BookingDateBackfillJobApi | pOSTCreateBookingDateBackfillJob | POST /v1/uno/data-backfill/bookingdate/jobs | Create a new BookingDate Backfil job |
| BookingDateBackfillJobApi | pUTStopBookingDateBackfillJobById | PUT /v1/uno/data-backfill/bookingdate/jobs/{jobId} | Stop BookingDate Backfill job by ID |
| CatalogGroupsApi | createCatalogGroup | POST /v1/catalog-groups | Create a catalog group |
| CatalogGroupsApi | deleteCatalogGroup | DELETE /v1/catalog-groups/{catalog-group-key} | Delete a catalog group |
| CatalogGroupsApi | getCatalogGroup | GET /v1/catalog-groups/{catalog-group-key} | Retrieve a catalog group |
| CatalogGroupsApi | getCatalogGroups | GET /v1/catalog-groups | List all catalog groups |
| CatalogGroupsApi | updateCatalogGroup | PUT /v1/catalog-groups/{catalog-group-key} | Update a catalog group |
| ContactSnapshotsApi | getContactSnapshot | GET /v1/contact-snapshots/{contact-snapshot-id} | Retrieve a contact snapshot |
| ContactsApi | createContact | POST /v1/contacts | Create a contact |
| ContactsApi | deleteContact | DELETE /v1/contacts/{contactId} | Delete a contact |
| ContactsApi | getContact | GET /v1/contacts/{contactId} | Retrieve a contact |
| ContactsApi | scrubContact | PUT /v1/contacts/{contactId}/scrub | Scrub a contact |
| ContactsApi | transferContact | PUT /v1/contacts/{contactId}/transfer | Transfer a contact |
| ContactsApi | updateContact | PUT /v1/contacts/{contactId} | Update a contact |
| CreditMemosApi | applyCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/apply | Apply a credit memo |
| CreditMemosApi | applyCreditMemoAsync | PUT /v1/credit-memos/{creditMemoKey}/apply-async | Async Apply a credit memo |
| CreditMemosApi | bulkCreateCreditMemos | POST /v1/credit-memos/bulk | Create credit memos |
| CreditMemosApi | bulkUpdateCreditMemos | PUT /v1/credit-memos/bulk | Update credit memos |
| CreditMemosApi | cancelAsyncCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/cancel-async | Cancel a Credit Memo in async |
| CreditMemosApi | cancelCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/cancel | Cancel a credit memo |
| CreditMemosApi | createCreditMemoFromCharge | POST /v1/credit-memos | Create a credit memo from a charge |
| CreditMemosApi | createCreditMemoFromInvoice | POST /v1/credit-memos/invoice/{invoiceKey} | Create a credit memo from an invoice |
| CreditMemosApi | createCreditMemoTaxationItems | POST /v1/credit-memos/{creditMemoKey}/taxation-items | Create taxation items for a credit memo |
| CreditMemosApi | deleteCreditMemo | DELETE /v1/credit-memos/{creditMemoKey} | Delete a credit memo |
| CreditMemosApi | emailCreditMemo | POST /v1/credit-memos/{creditMemoKey}/emails | Email a credit memo |
| CreditMemosApi | generateCreditMemoPdf | POST /v1/credit-memos/{creditMemoKey}/pdfs | Generate a credit memo PDF file |
| CreditMemosApi | getApplyCreditMemoAsyncJob | GET /v1/credit-memos/apply-async-jobs/{applyAsyncJobId} | Get Async Apply Credit Memo Job by Id |
| CreditMemosApi | getCreditMemo | GET /v1/credit-memos/{creditMemoKey} | Retrieve a credit memo |
| CreditMemosApi | getCreditMemoItem | GET /v1/credit-memos/{creditMemoKey}/items/{creditMemoItemId} | Retrieve a credit memo item |
| CreditMemosApi | getCreditMemoItemPart | GET /v1/credit-memos/{creditMemoKey}/parts/{partId}/item-parts/{itemPartId} | Retrieve a credit memo part item |
| CreditMemosApi | getCreditMemoItemParts | GET /v1/credit-memos/{creditMemoKey}/parts/{partId}/item-parts | List all credit memo part items |
| CreditMemosApi | getCreditMemoItems | GET /v1/credit-memos/{creditMemoKey}/items | List credit memo items |
| CreditMemosApi | getCreditMemoPart | GET /v1/credit-memos/{creditMemoKey}/parts/{partId} | Retrieve a credit memo part |
| CreditMemosApi | getCreditMemoParts | GET /v1/credit-memos/{creditMemoKey}/parts | List all parts of a credit memo |
| CreditMemosApi | getCreditMemoPdfStatus | GET /v1/credit-memos/pdf-status | Retrieve PDF status of credit memos in a batch. |
| CreditMemosApi | getCreditMemos | GET /v1/credit-memos | List credit memos |
| CreditMemosApi | getTaxationItemsOfCreditMemoItem | GET /v1/credit-memos/{creditMemoKey}/items/{creditMemoItemId}/taxation-items | List all taxation items of a credit memo item |
| CreditMemosApi | getUnapplyCreditMemoAsyncJob | GET /v1/credit-memos/unapply-async-jobs/{unapplyAsyncJobId} | Get Async Unapply Credit Memo Job by Id |
| CreditMemosApi | postAsyncCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/post-async | Post a Credit Memo in async |
| CreditMemosApi | postCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/post | Post a credit memo |
| CreditMemosApi | refundCreditMemo | POST /v1/credit-memos/{creditMemoKey}/refund | Refund a credit memo |
| CreditMemosApi | reverseCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/reverse | Reverse a credit memo |
| CreditMemosApi | unapplyCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/unapply | Unapply a credit memo |
| CreditMemosApi | unapplyCreditMemoAsync | PUT /v1/credit-memos/{creditMemoKey}/unapply-async | Async Unapply a credit memo |
| CreditMemosApi | unpostCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/unpost | Unpost a credit memo |
| CreditMemosApi | updateCreditMemo | PUT /v1/credit-memos/{creditMemoKey} | Update a credit memo |
| CreditMemosApi | uploadFileForCreditMemo | POST /v1/credit-memos/{creditMemoKey}/files | Upload a file for a credit memo |
| CreditMemosApi | writeOffCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/write-off | Write off a credit memo |
| CustomEventTriggersApi | deleteEventTrigger | DELETE /events/event-triggers/{id} | Delete an event trigger |
| CustomEventTriggersApi | getEventTrigger | GET /events/event-triggers/{id} | Retrieve an event trigger |
| CustomEventTriggersApi | getEventTriggers | GET /events/event-triggers | List event triggers |
| CustomEventTriggersApi | postEventTrigger | POST /events/event-triggers | Create an event trigger |
| CustomEventTriggersApi | putEventTrigger | PUT /events/event-triggers/{id} | Update an event trigger |
| CustomExchangeRatesApi | getCustomExchangeRates | GET /v1/custom-exchange-rates/{currency} | List custom exchange rates by currency |
| CustomObjectDefinitionsApi | deleteCustomObjectDefinitionByType | DELETE /objects/definitions/default/{object} | Delete a custom object definition |
| CustomObjectDefinitionsApi | getAllCustomObjectDefinitionsInNamespace | GET /objects/definitions/default | List custom object definitions |
| CustomObjectDefinitionsApi | getCustomObjectDefinitionByType | GET /objects/definitions/default/{object} | Retrieve a custom object definition |
| CustomObjectDefinitionsApi | postCustomObjectDefinitions | POST /objects/definitions/default | Create custom object definitions |
| CustomObjectDefinitionsApi | postUpdateCustomObjectDefinition | POST /objects/migrations | Update a custom object definition |
| CustomObjectJobsApi | getAllCustomObjectBulkJobs | GET /objects/jobs | List all custom object bulk jobs |
| CustomObjectJobsApi | getCustomObjectBulkJob | GET /objects/jobs/{id} | Retrieve a custom object bulk job |
| CustomObjectJobsApi | getCustomObjectBulkJobErrors | GET /objects/jobs/{id}/errors | List all errors for a custom object bulk job |
| CustomObjectJobsApi | pATCHCustomObjectBulkJob | PATCH /objects/jobs/{id}/cancel | Cancel a custom object bulk job |
| CustomObjectJobsApi | postCustomObjectBulkJob | POST /objects/jobs | Submit a custom object bulk job |
| CustomObjectJobsApi | postUploadFileForCustomObjectBulkJob | POST /objects/jobs/{id}/files | Upload a file for a custom object bulk job |
| CustomObjectRecordsApi | deleteCustomObjectRecordByID | DELETE /objects/records/default/{object}/{id} | Delete a custom object record |
| CustomObjectRecordsApi | getAllRecordsForCustomObjectType | GET /objects/records/default/{object} | List records for a custom object |
| CustomObjectRecordsApi | getCustomObjectRecordByID | GET /objects/records/default/{object}/{id} | Retrieve a custom object record |
| CustomObjectRecordsApi | patchPartialUpdateCustomObjectRecord | PATCH /objects/records/default/{object}/{id} | Partially update a custom object record |
| CustomObjectRecordsApi | postCustomObjectRecords | POST /objects/records/default/{object} | Create custom object records |
| CustomObjectRecordsApi | postCustomObjectRecordsBatchUpdateOrDelete | POST /objects/batch/default/{object} | Update or delete custom object records |
| CustomObjectRecordsApi | putCustomObjectRecord | PUT /objects/records/default/{object}/{id} | Update a custom object record |
| CustomPaymentMethodTypesApi | createOpenPaymentMethodType | POST /open-payment-method-types | Create a draft custom payment method type |
| CustomPaymentMethodTypesApi | getOpenPaymentMethodTypeRevision | GET /open-payment-method-types/{paymentMethodTypeName}/draft/{revisionNumber} | Retrieve a specific draft revision of a custom payment method type |
| CustomPaymentMethodTypesApi | getPublishedOpenPaymentMethodType | GET /open-payment-method-types/{paymentMethodTypeName}/published | Retrieve a published custom payment method type |
| CustomPaymentMethodTypesApi | publishOpenPaymentMethodType | PUT /open-payment-method-types/publish/{paymentMethodTypeName} | Publish a custom payment method type |
| CustomPaymentMethodTypesApi | updateOpenPaymentMethodType | PUT /open-payment-method-types/{paymentMethodTypeName} | Update a custom payment method type |
| CustomScheduledEventsApi | deleteScheduledEventByID | DELETE /events/scheduled-events/{id} | Delete a scheduled event by ID |
| CustomScheduledEventsApi | getScheduledEventByID | GET /events/scheduled-events/{id} | Retrieve a scheduled event by ID |
| CustomScheduledEventsApi | getScheduledEvents | GET /events/scheduled-events | List all scheduled events |
| CustomScheduledEventsApi | postScheduledEvent | POST /events/scheduled-events | Create a scheduled event |
| CustomScheduledEventsApi | updateScheduledEventByID | PUT /events/scheduled-events/{id} | Update a scheduled event by ID |
| DataBackfillJobApi | gETDataBackfillJobById | GET /v1/uno/data-backfill/jobs/{jobId} | Find Data Backfill job by ID |
| DataBackfillJobApi | gETDataBackfillTemplate | GET /v1/uno/data-backfill/jobs/{type}/template | Download a Data Backfill template file |
| DataBackfillJobApi | gETListDataBackfillJobs | GET /v1/uno/date-backfill/listjobs | Query all data backfill jobs |
| DataBackfillJobApi | pOSTCreateDataBackfillJob | POST /v1/uno/data-backfill/jobs | Create a new Data Backfil job |
| DataBackfillJobApi | pUTStopDataBackfillJobById | PUT /v1/uno/data-backfill/jobs/{jobId} | Stop Data Backfill job by ID |
| DataLabelingApi | getDataLabelingJob | GET /v1/multi-organizations/data-labeling-job/{job-id} | Retrieve a data labeling job |
| DataLabelingApi | submitDataLabelingJob | POST /v1/multi-organizations/data-labeling-job | Submit a data labeling job |
| DataQueriesApi | deleteDataQueryJob | DELETE /query/jobs/{job-id} | Cancel a data query job |
| DataQueriesApi | getDataQueryJob | GET /query/jobs/{job-id} | Retrieve a data query job |
| DataQueriesApi | getDataQueryJobs | GET /query/jobs | List data query jobs |
| DataQueriesApi | postDataQueryJob | POST /query/jobs | Submit a data query |
| DebitMemosApi | bulkCreateDebitMemos | POST /v1/debit-memos/bulk | Create debit memos |
| DebitMemosApi | bulkUpdateDebitMemos | PUT /v1/debit-memos/bulk | Update debit memos |
| DebitMemosApi | cancelAsyncDebitMemo | PUT /v1/debit-memos/{debitMemoKey}/cancel-async | Cancel a debit memo in async |
| DebitMemosApi | cancelDebitMemo | PUT /v1/debit-memos/{debitMemoKey}/cancel | Cancel a debit memo |
| DebitMemosApi | collectDebitMemo | POST /v1/debit-memos/{debitMemoKey}/collect | Collect a posted debit memo |
| DebitMemosApi | createDebitMemoFromCharge | POST /v1/debit-memos | Create a debit memo from a charge |
| DebitMemosApi | createDebitMemoFromInvoice | POST /v1/debit-memos/invoice/{invoiceKey} | Create a debit memo from an invoice |
| DebitMemosApi | createTaxationItemsForDebitMemo | POST /v1/debit-memos/{debitMemoKey}/taxation-items | Create taxation items for a debit memo |
| DebitMemosApi | deleteDebitMemo | DELETE /v1/debit-memos/{debitMemoKey} | Delete a debit memo |
| DebitMemosApi | emailDebitMemo | POST /v1/debit-memos/{debitMemoKey}/emails | Email a debit memo |
| DebitMemosApi | generateDebitMemoPdf | POST /v1/debit-memos/{debitMemoKey}/pdfs | Generate a debit memo PDF file |
| DebitMemosApi | getDebitMemo | GET /v1/debit-memos/{debitMemoKey} | Retrieve a debit memo |
| DebitMemosApi | getDebitMemoApplicationParts | GET /v1/debit-memos/{debitMemoKey}/application-parts | List all application parts of a debit memo |
| DebitMemosApi | getDebitMemoItem | GET /v1/debit-memos/{debitMemoKey}/items/{debitMemoItemId} | Retrieve a debit memo item |
| DebitMemosApi | getDebitMemoItems | GET /v1/debit-memos/{debitMemoKey}/items | List debit memo items |
| DebitMemosApi | getDebitMemoPdfStatus | GET /v1/debit-memos/pdf-status | Retrieve PDF status of debit memos in a batch. |
| DebitMemosApi | getDebitMemos | GET /v1/debit-memos | List debit memos |
| DebitMemosApi | getTaxationItemsOfDebitMemoItem | GET /v1/debit-memos/{debitMemoKey}/items/{debitMemoItemId}/taxation-items | List all taxation items of a debit memo item |
| DebitMemosApi | postAsyncDebitMemo | PUT /v1/debit-memos/{debitMemoKey}/post-async | Post a debit memo in async |
| DebitMemosApi | postDebitMemo | PUT /v1/debit-memos/{debitMemoKey}/post | Post a debit memo |
| DebitMemosApi | unpostDebitMemo | PUT /v1/debit-memos/{debitMemoKey}/unpost | Unpost a debit memo |
| DebitMemosApi | updateDebitMemo | PUT /v1/debit-memos/{debitMemoKey} | Update a debit memo |
| DebitMemosApi | updateDebitMemosDueDates | PUT /v1/debit-memos | Update due dates for debit memos |
| DebitMemosApi | uploadFileForDebitMemo | POST /v1/debit-memos/{debitMemoKey}/files | Upload a file for a debit memo |
| DebitMemosApi | writeOffDebitMemo | PUT /v1/debitmemos/{debitMemoKey}/write-off | Write off an debit memo |
| DeploymentApi | compareAndDeployProductCatalogTemplate | POST /deployment-manager/deployments/template/product_catalog | Compare and deploy a template for product catalog to a target tenant |
| DeploymentApi | compareAndDeployProductCatalogTenant | POST /deployment-manager/deployments/tenant/product_catalog | Compare and deploy product catalog between a source tenant and a target tenant |
| DeploymentApi | compareAndDeployTemplate | POST /deployment-manager/deployments/templates | Compare and deploy settings from a template to a target tenant |
| DeploymentApi | compareAndDeployTenant | POST /deployment-manager/deployments/tenants | Compare and deploy settings between a source tenant and a target tenant |
| DeploymentApi | retrieveDeployment | GET /deployment-manager/deployments/{migrationId} | Retrieve a deployment log |
| DeploymentApi | revertDeployment | POST /deployment-manager/deployments/{migrationId}/revert | Revert the deployment |
| DeploymentConfigurationTemplatesApi | compareTemplate | POST /deployment-manager/deployment_artifacts/compare | Compare settings between a source tenant and a target tenant |
| DeploymentConfigurationTemplatesApi | createDeploymentTemplate | POST /deployment-manager/deployment_templates | Create a deployment template |
| DeploymentConfigurationTemplatesApi | deleteDeploymentTemplate | DELETE /deployment-manager/deployment_templates/{id} | Delete a template |
| DeploymentConfigurationTemplatesApi | downloadDeploymentTemplate | GET /deployment-manager/deployment_artifacts | Download a template |
| DeploymentConfigurationTemplatesApi | getDeploymentTemplateDetail | GET /deployment-manager/deployment_templates/{id} | List all details of a template |
| DeploymentConfigurationTemplatesApi | getDeploymentTemplates | GET /deployment-manager/deployment_templates | List all templates |
| DeploymentConfigurationTemplatesApi | getSourceComponentDetails | GET /deployment-manager/deployment_artifacts/retrieve-settings | List all details of source components |
| DeploymentConfigurationTemplatesApi | migrateTenantSettings | POST /deployment-manager/deployment_artifacts/deploy | Migrate settings from source tenant to target tenant |
| DescribeApi | getDescribe | GET /v1/describe/{object} | Describe an object |
| EInvoicingApi | deleteBusinessRegion | DELETE /v1/e-invoice/business-regions/{key} | Delete a Business Region |
| EInvoicingApi | deleteServiceProvider | DELETE /v1/e-invoice/service-providers/{key} | Delete a Service Provider |
| EInvoicingApi | getBusinessRegion | GET /v1/e-invoice/business-regions/{key} | Retrieve a Business Region |
| EInvoicingApi | getBusinessRegions | GET /v1/e-invoice/business-regions | List business region |
| EInvoicingApi | getServiceProvider | GET /v1/e-invoice/service-providers/{key} | Retrieve a service provider |
| EInvoicingApi | getServiceProviders | GET /v1/e-invoice/service-providers | List service providers |
| EInvoicingApi | postBusinessRegion | POST /v1/e-invoice/business-regions | Post a business region |
| EInvoicingApi | postServiceProvider | POST /v1/e-invoice/service-providers | Post a service provider |
| EInvoicingApi | updateBusinessRegion | PUT /v1/e-invoice/business-regions/{key} | Update a business region |
| EInvoicingApi | updateServiceProvider | PUT /v1/e-invoice/service-providers/{key} | Update a service provider |
| ElectronicPaymentsHealthApi | getSystemHealthPaymentVolumeSummary | GET /system-health/payments/volume-summary | List payment volume summary records |
| FilesApi | getFiles | GET /v1/files/{file-id} | Retrieve a file |
| FulfillmentsApi | createFulfillment | POST /v1/fulfillments | Create fulfillments |
| FulfillmentsApi | createFulfillmentItem | POST /v1/fulfillment-items | Create fulfillment items |
| FulfillmentsApi | deleteFulfillment | DELETE /v1/fulfillments/{key} | Delete a fulfillment |
| FulfillmentsApi | deleteFulfillmentItem | DELETE /v1/fulfillment-items/{id} | Delete a fulfillment item |
| FulfillmentsApi | getFulfillment | GET /v1/fulfillments/{key} | Retrieve a fulfillment |
| FulfillmentsApi | getFulfillmentItem | GET /v1/fulfillment-items/{id} | Retrieve a fulfillment item |
| FulfillmentsApi | updateFulfillment | PUT /v1/fulfillments/{key} | Update a fulfillment |
| FulfillmentsApi | updateFulfillmentItem | PUT /v1/fulfillment-items/{id} | Update a fulfillment item |
| HostedPagesApi | getHostedPages | GET /v1/hostedpages | List hosted pages |
| ImportsApi | objectGetImport | GET /v1/object/import/{id} | CRUD: Retrieve an import |
| ImportsApi | objectPostImport | POST /v1/object/import | CRUD: Create an import |
| InvoiceSchedulesApi | attachInvoiceSchedule | PUT /v1/invoice-schedules/{scheduleKey}/attach | Attach an invoice schedule |
| InvoiceSchedulesApi | createInvoiceSchedule | POST /v1/invoice-schedules | Create an invoice schedule |
| InvoiceSchedulesApi | deleteInvoiceSchedule | DELETE /v1/invoice-schedules/{scheduleKey} | Delete an invoice schedule |
| InvoiceSchedulesApi | detachInvoiceSchedule | PUT /v1/invoice-schedules/{scheduleKey}/detach | Detach an invoice schedule |
| InvoiceSchedulesApi | executeInvoiceSchedule | POST /v1/invoice-schedules/{scheduleKey}/execute | Execute an invoice schedule |
| InvoiceSchedulesApi | getInvoiceSchedule | GET /v1/invoice-schedules/{scheduleKey} | Retrieve an invoice schedule |
| InvoiceSchedulesApi | pauseInvoiceSchedule | PUT /v1/invoice-schedules/{scheduleKey}/pause | Pause an invoice schedule |
| InvoiceSchedulesApi | resumeInvoiceSchedule | PUT /v1/invoice-schedules/{scheduleKey}/resume | Resume an invoice schedule |
| InvoiceSchedulesApi | updateInvoiceSchedule | PUT /v1/invoice-schedules/{scheduleKey} | Update an invoice schedule |
| InvoicesApi | bulkCreateStandaloneInvoices | POST /v1/invoices/batch | Create standalone invoices |
| InvoicesApi | bulkPostInvoices | POST /v1/invoices/bulk-post | Post invoices |
| InvoicesApi | bulkUpdateInvoices | PUT /v1/invoices | Update invoices |
| InvoicesApi | cancelInvoice | PUT /v1/invoices/{invoiceKey}/cancel | Cancel an invoice |
| InvoicesApi | createInvoiceTaxationItems | POST /v1/invoices/{invoiceKey}/taxation-items | Create taxation items for an invoice |
| InvoicesApi | createStandaloneInvoice | POST /v1/invoices | Create a standalone invoice |
| InvoicesApi | deleteInvoice | DELETE /v1/invoices/{invoiceKey} | Delete an invoice |
| InvoicesApi | emailInvoice | POST /v1/invoices/{invoiceKey}/emails | Email an invoice |
| InvoicesApi | getInvoice | GET /v1/invoices/{invoiceKey} | Retrieve an invoice |
| InvoicesApi | getInvoiceApplicationParts | GET /v1/invoices/{invoiceKey}/application-parts | List all application parts of an invoice |
| InvoicesApi | getInvoiceFiles | GET /v1/invoices/{invoiceKey}/files | List all files of an invoice |
| InvoicesApi | getInvoiceItems | GET /v1/invoices/{invoiceKey}/items | List all items of an invoice |
| InvoicesApi | getInvoicePdfStatus | GET /v1/invoices/pdf-status | Retrieve PDF status of invoices in a batch. |
| InvoicesApi | getTaxationItemsOfInvoiceItem | GET /v1/invoices/{invoiceKey}/items/{itemId}/taxation-items | List all taxation items of an invoice item |
| InvoicesApi | postInvoice | PUT /v1/invoices/{invoiceKey}/post | Cancel an invoice |
| InvoicesApi | reverseInvoice | PUT /v1/invoices/{invoiceKey}/reverse | Reverse an invoice |
| InvoicesApi | updateInvoice | PUT /v1/invoices/{invoiceKey} | Update an invoice |
| InvoicesApi | uploadFileForInvoice | POST /v1/invoices/{invoiceKey}/files | Upload a file for an invoice |
| InvoicesApi | writeOffInvoice | PUT /v1/invoices/{invoiceKey}/write-off | Write off an invoice |
| JournalRunsApi | cancelJournalRun | PUT /v1/journal-runs/{jr-number}/cancel | Cancel a journal run |
| JournalRunsApi | createJournalRun | POST /v1/journal-runs | Create a journal run |
| JournalRunsApi | deleteJournalRun | DELETE /v1/journal-runs/{jr-number} | Delete a journal run |
| JournalRunsApi | getJournalRun | GET /v1/journal-runs/{jr-number} | Retrieve a journal run |
| MassUpdaterApi | createMassUpdater | POST /v1/bulk | Perform a mass action |
| MassUpdaterApi | getMassUpdater | GET /v1/bulk/{bulk-key} | List all results of a mass action |
| MassUpdaterApi | stopMassUpdater | PUT /v1/bulk/{bulk-key}/stop | Stop a mass action |
| NotificationsApi | createNotificationDefinition | POST /notifications/notification-definitions | Create a notification definition |
| NotificationsApi | createOrUpdateEmailTemplates | POST /notifications/email-templates/import | Create or update email templates |
| NotificationsApi | deleteEmailTemplate | DELETE /notifications/email-templates/{id} | Delete an email template |
| NotificationsApi | deleteNotificationDefinition | DELETE /notifications/notification-definitions/{id} | Delete a notification definition |
| NotificationsApi | deleteNotificationHistoryForAccount | DELETE /notifications/history | Delete notification histories for an account |
| NotificationsApi | getCalloutHistory | GET /v1/notification-history/callout | List callout notification histories |
| NotificationsApi | getEmailHistory | GET /v1/notification-history/email | List email notification histories |
| NotificationsApi | getEmailTemplate | GET /notifications/email-templates/{id} | Retrieve an email template |
| NotificationsApi | getNotificationDefinition | GET /notifications/notification-definitions/{id} | Retrieve a notification definition |
| NotificationsApi | getNotificationHistoryDeletionTask | GET /notifications/history/tasks/{id} | Retrieve a notification history deletion task |
| NotificationsApi | postCreateEmailTemplate | POST /notifications/email-templates | Create an email template |
| NotificationsApi | queryEmailTemplates | GET /notifications/email-templates | List email templates |
| NotificationsApi | queryNotificationDefinitions | GET /notifications/notification-definitions | List notification definitions |
| NotificationsApi | resendCalloutNotifications | POST /notifications/callout-histories/resend | Resend callout notifications |
| NotificationsApi | resendEmailNotifications | POST /notifications/email-histories/resend | Resend email notifications |
| NotificationsApi | updateEmailTemplate | PUT /notifications/email-templates/{id} | Update an email template |
| NotificationsApi | updateNotificationDefinition | PUT /notifications/notification-definitions/{id} | Update a notification definition |
| OAuthApi | createToken | POST /oauth/token | Create an OAuth token |
| ObjectQueriesApi | queryAccountByKey | GET /object-query/accounts/{key} | Retrieve an account |
| ObjectQueriesApi | queryAccounts | GET /object-query/accounts | List accounts |
| ObjectQueriesApi | queryAmendmentByKey | GET /object-query/amendments/{key} | Retrieve an amendment |
| ObjectQueriesApi | queryAmendments | GET /object-query/amendments | List amendments |
| ObjectQueriesApi | queryBillingRunByKey | GET /object-query/billing-runs/{key} | Retrieve a bill run |
| ObjectQueriesApi | queryBillingRuns | GET /object-query/billing-runs | List bill runs |
| ObjectQueriesApi | queryContactByKey | GET /object-query/contacts/{key} | Retrieve a contact |
| ObjectQueriesApi | queryContacts | GET /object-query/contacts | List contacts |
| ObjectQueriesApi | queryCreditMemoApplicationByKey | GET /object-query/credit-memo-applications/{key} | Retrieve a credit memo application |
| ObjectQueriesApi | queryCreditMemoApplications | GET /object-query/credit-memo-applications | List credit memo applications |
| ObjectQueriesApi | queryCreditMemoByKey | GET /object-query/credit-memos/{key} | Retrieve a credit memo |
| ObjectQueriesApi | queryCreditMemoItemByKey | GET /object-query/credit-memo-items/{key} | Retrieve a credit memo item |
| ObjectQueriesApi | queryCreditMemoItems | GET /object-query/credit-memo-items | List credit memo items |
| ObjectQueriesApi | queryCreditMemos | GET /object-query/credit-memos | List credit memos |
| ObjectQueriesApi | queryCustomObjectBykey | GET /object-query/{custom-object-name}/{key} | Retrieve a custom object |
| ObjectQueriesApi | queryCustomObjects | GET /object-query/{custom-object-name} | List custom objects |
| ObjectQueriesApi | queryDailyConsumptionSummaryByKey | GET /object-query/daily-consumption-summaries/{key} | Retrieve a daily consumption summary |
| ObjectQueriesApi | queryDailyConsumptionSummarys | GET /object-query/daily-consumption-summaries | List daily consumption summaries |
| ObjectQueriesApi | queryDebitMemoByKey | GET /object-query/debit-memos/{key} | Retrieve a debit memo |
| ObjectQueriesApi | queryDebitMemoItemByKey | GET /object-query/debit-memo-items/{key} | Retrieve a debit memo item |
| ObjectQueriesApi | queryDebitMemoItems | GET /object-query/debit-memo-items | List debit memo items |
| ObjectQueriesApi | queryDebitMemos | GET /object-query/debit-memos | List debit memos |
| ObjectQueriesApi | queryInvoiceByKey | GET /object-query/invoices/{key} | Retrieve an invoice |
| ObjectQueriesApi | queryInvoiceItemByKey | GET /object-query/invoice-items/{key} | Retrieve an invoice item |
| ObjectQueriesApi | queryInvoiceItems | GET /object-query/invoice-items | List invoice items |
| ObjectQueriesApi | queryInvoices | GET /object-query/invoices | List invoices |
| ObjectQueriesApi | queryInvoiceScheduleByKey | GET /object-query/invoice-schedules/{key} | Retrieve an invoice schedule |
| ObjectQueriesApi | queryInvoiceSchedules | GET /object-query/invoice-schedules | List invoice schedules |
| ObjectQueriesApi | queryOrderActionByKey | GET /object-query/order-actions/{key} | Retrieve an order action |
| ObjectQueriesApi | queryOrderActions | GET /object-query/order-actions | List order actions |
| ObjectQueriesApi | queryOrderLineItemByKey | GET /object-query/order-line-items/{key} | Retrieve an order line item |
| ObjectQueriesApi | queryOrderLineItems | GET /object-query/order-line-items | List order line items |
| ObjectQueriesApi | queryOrdersByKey | GET /object-query/orders/{key} | Retrieve an order |
| ObjectQueriesApi | queryOrderss | GET /object-query/orders | List orders |
| ObjectQueriesApi | queryPaymentApplicationByKey | GET /object-query/payment-applications/{key} | Retrieve a payment application |
| ObjectQueriesApi | queryPaymentApplications | GET /object-query/payment-applications | List payment applications |
| ObjectQueriesApi | queryPaymentByKey | GET /object-query/payments/{key} | Retrieve a payment |
| ObjectQueriesApi | queryPaymentMethodByKey | GET /object-query/payment-methods/{key} | Retrieve a payment method |
| ObjectQueriesApi | queryPaymentMethodSnapshotByKey | GET /object-query/payment-method-snapshots/{key} | Retrieve a payment method snapshot |
| ObjectQueriesApi | queryPaymentMethodSnapshots | GET /object-query/payment-method-snapshots | List payment method snapshots |
| ObjectQueriesApi | queryPaymentMethods | GET /object-query/payment-methods | List payment methods |
| ObjectQueriesApi | queryPaymentRunByKey | GET /object-query/payment-runs/{key} | Retrieve a payment run |
| ObjectQueriesApi | queryPaymentRuns | GET /object-query/payment-runs | List payment runs |
| ObjectQueriesApi | queryPaymentScheduleByKey | GET /object-query/payment-schedules/{key} | Retrieve a payment schedule |
| ObjectQueriesApi | queryPaymentScheduleItemByKey | GET /object-query/payment-schedule-items/{key} | Retrieve a payment schedule item |
| ObjectQueriesApi | queryPaymentScheduleItems | GET /object-query/payment-schedule-items | List payment schedule items |
| ObjectQueriesApi | queryPaymentSchedules | GET /object-query/payment-schedules | List payment schedules |
| ObjectQueriesApi | queryPayments | GET /object-query/payments | List payments |
| ObjectQueriesApi | queryPrepaidBalanceByKey | GET /object-query/prepaid-balances/{key} | Retrieve a prepaid balance |
| ObjectQueriesApi | queryPrepaidBalanceFundByKey | GET /object-query/prepaid-balance-funds/{key} | Retrieve a prepaid balance fund |
| ObjectQueriesApi | queryPrepaidBalanceFunds | GET /object-query/prepaid-balance-funds | List prepaid balance funds |
| ObjectQueriesApi | queryPrepaidBalanceTransactionByKey | GET /object-query/prepaid-balance-transactions/{key} | Retrieve a prepaid balance transaction |
| ObjectQueriesApi | queryPrepaidBalanceTransactions | GET /object-query/prepaid-balance-transactions | List prepaid balance transactions |
| ObjectQueriesApi | queryPrepaidBalances | GET /object-query/prepaid-balances | List prepaid balances |
| ObjectQueriesApi | queryProcessedUsageByKey | GET /object-query/processed-usages/{key} | Retrieve a processed usage record |
| ObjectQueriesApi | queryProcessedUsages | GET /object-query/processed-usages | List processed usage records |
| ObjectQueriesApi | queryProductByKey | GET /object-query/products/{key} | Retrieve a product |
| ObjectQueriesApi | queryProductRatePlanByKey | GET /object-query/product-rate-plans/{key} | Retrieve a product rate plan |
| ObjectQueriesApi | queryProductRatePlanChargeByKey | GET /object-query/product-rate-plan-charges/{key} | Retrieve a product rate plan charge |
| ObjectQueriesApi | queryProductRatePlanChargeTierByKey | GET /object-query/product-rate-plan-charge-tiers/{key} | Retrieve a product rate plan charge tier |
| ObjectQueriesApi | queryProductRatePlanChargeTiers | GET /object-query/product-rate-plan-charge-tiers | List product rate plan charge tiers |
| ObjectQueriesApi | queryProductRatePlanCharges | GET /object-query/product-rate-plan-charges | List product rate plan charges |
| ObjectQueriesApi | queryProductRatePlans | GET /object-query/product-rate-plans | List product rate plans |
| ObjectQueriesApi | queryProducts | GET /object-query/products | List products |
| ObjectQueriesApi | queryRatePlanByKey | GET /object-query/rate-plans/{key} | Retrieve a rate plan |
| ObjectQueriesApi | queryRatePlanChargeByKey | GET /object-query/rate-plan-charges/{key} | Retrieve a rate plan charge |
| ObjectQueriesApi | queryRatePlanChargeTierByKey | GET /object-query/rate-plan-charge-tiers/{key} | Retrieve a rate plan charge tier |
| ObjectQueriesApi | queryRatePlanChargeTiers | GET /object-query/rate-plan-charge-tiers | List rate plan charge tiers |
| ObjectQueriesApi | queryRatePlanCharges | GET /object-query/rate-plan-charges | List rate plan charges |
| ObjectQueriesApi | queryRatePlans | GET /object-query/rate-plans | List rate plans |
| ObjectQueriesApi | queryRatingDetailByKey | GET /object-query/rating-details/{key} | Retrieve a rating detail |
| ObjectQueriesApi | queryRatingDetails | GET /object-query/rating-details | List rating details |
| ObjectQueriesApi | queryRatingResultByKey | GET /object-query/rating-results/{key} | Retrieve a rating result |
| ObjectQueriesApi | queryRatingResults | GET /object-query/rating-results | List rating results |
| ObjectQueriesApi | queryRefundApplicationByKey | GET /object-query/refund-applications/{key} | Retrieve a refund application |
| ObjectQueriesApi | queryRefundApplicationItemByKey | GET /object-query/refund-application-items/{key} | Retrieve a refund application item |
| ObjectQueriesApi | queryRefundApplicationItems | GET /object-query/refund-application-items | List refund application items |
| ObjectQueriesApi | queryRefundApplications | GET /object-query/refund-applications | List refund applications |
| ObjectQueriesApi | queryRefundByKey | GET /object-query/refunds/{key} | Retrieve a refund |
| ObjectQueriesApi | queryRefunds | GET /object-query/refunds | List refunds |
| ObjectQueriesApi | querySubscriptionByKey | GET /object-query/subscriptions/{key} | Retrieve a subscription |
| ObjectQueriesApi | querySubscriptions | GET /object-query/subscriptions | List subscriptions |
| ObjectQueriesApi | querySummaryStatementByKey | GET /object-query/summarystatements/{key} | Retrieve a summary statement |
| ObjectQueriesApi | querySummaryStatementRunByKey | GET /object-query/summarystatementruns/{key} | Retrieve a summary statement run |
| ObjectQueriesApi | querySummaryStatementRuns | GET /object-query/summarystatementruns | List summary statement runs |
| ObjectQueriesApi | querySummaryStatements | GET /object-query/summarystatements | List summary statements |
| ObjectQueriesApi | queryTaxationItemByKey | GET /object-query/taxation-items/{key} | Retrieve a taxation item |
| ObjectQueriesApi | queryTaxationItems | GET /object-query/taxation-items | List taxation items |
| ObjectQueriesApi | queryUsageByKey | GET /object-query/usages/{key} | Retrieve a usage record |
| ObjectQueriesApi | queryUsages | GET /object-query/usages | List usage records |
| ObjectQueriesApi | queryValidityPeriodSummaryByKey | GET /object-query/validity-period-summaries/{key} | Retrieve a validity period summary |
| ObjectQueriesApi | queryValidityPeriodSummarys | GET /object-query/validity-period-summaries | List validity period summaries |
| OmniChannelSubscriptionsApi | createOmniChannelSubscription | POST /v1/omni-channel-subscriptions | Create a subscription |
| OmniChannelSubscriptionsApi | deleteOmniChannelSubscription | DELETE /v1/omni-channel-subscriptions/{subscriptionKey} | Delete an Omni Channel Subscription |
| OmniChannelSubscriptionsApi | getOmniChannelSubscription | GET /v1/omni-channel-subscriptions/{subscriptionKey} | Retrieve an Omni Channel Subscription |
| OperationsApi | createBillingPreview | POST /v1/operations/billing-preview | Generate a billing preview |
| OperationsApi | createBulkPDFToZIPGeneration | POST /v1/operations/bulk-pdf | Export bulk PDF files |
| OperationsApi | createInvoiceCollect | POST /v1/operations/invoice-collect | Invoice and collect |
| OperationsApi | getBulkPDFToZIPGeneration | GET /v1/operations/bulk-pdf/{jobId} | Retrieve information of a bulk PDF file generation job |
| OperationsApi | getOperationJob | GET /v1/operations/jobs/{jobId} | Retrieve an operation job |
| OrderActionsApi | updateOrderAction | PUT /v1/orderActions/{id} | Update an order action |
| OrderLineItemsApi | getOrderLineItem | GET /v1/order-line-items/{itemId} | Retrieve an order line item |
| OrderLineItemsApi | updateOrderLineItem | PUT /v1/order-line-items/{itemId} | Update an order line item |
| OrderLineItemsApi | updateOrderLineItems | POST /v1/order-line-items/bulk | Update order line items |
| OrdersApi | activateOrder | PUT /v1/orders/{orderNumber}/activate | Activate an order |
| OrdersApi | cancelOrder | PUT /v1/orders/{orderNumber}/cancel | Cancel an order |
| OrdersApi | createOrder | POST /v1/orders | Create an order |
| OrdersApi | createOrderAsynchronously | POST /v1/async/orders | Create an order asynchronously |
| OrdersApi | deleteOrder | DELETE /v1/orders/{orderNumber} | Delete an order |
| OrdersApi | deleteOrderAsynchronously | DELETE /v1/async/orders/{orderNumber} | Async delete an order |
| OrdersApi | getJobStatusAndResponse | GET /v1/async-jobs/{jobId} | Retrieve the status and response of a job |
| OrdersApi | getOrder | GET /v1/orders/{orderNumber} | Retrieve an order |
| OrdersApi | getOrders | GET /v1/orders | List orders |
| OrdersApi | getOrdersByInvoiceOwner | GET /v1/orders/invoiceOwner/{accountNumber} | List orders of an invoice owner |
| OrdersApi | getOrdersBySubscriptionNumber | GET /v1/orders/subscription/{subscriptionNumber} | List orders by subscription number |
| OrdersApi | getOrdersBySubscriptionOwner | GET /v1/orders/subscriptionOwner/{accountNumber} | List orders of a subscription owner |
| OrdersApi | getPendingOrdersBySubscriptionNumber | GET /v1/orders/subscription/{subscription-key}/pending | List pending orders by subscription number |
| OrdersApi | previewOrder | POST /v1/orders/preview | Preview an order |
| OrdersApi | previewOrderAsynchronously | POST /v1/async/orders/preview | Preview an order asynchronously |
| OrdersApi | revertOrder | POST /v1/orders/{orderNumber}/revert | Revert an order |
| OrdersApi | updateOrder | PUT /v1/orders/{orderNumber} | Update an order |
| OrdersApi | updateOrderCustomFields | PUT /v1/orders/{orderNumber}/customFields | Update order custom fields |
| OrdersApi | updateOrderTriggerDates | PUT /v1/orders/{orderNumber}/triggerDates | Update order action trigger dates |
| OrdersApi | updateSubscriptionCustomFields | PUT /v1/subscriptions/{subscriptionNumber}/customFields | Update subscription custom fields |
| PaymentAuthorizationApi | cancelAuthorization | POST /v1/payment-methods/{payment-method-id}/voidAuthorize | Cancel authorization |
| PaymentAuthorizationApi | createAuthorization | POST /v1/payment-methods/{payment-method-id}/authorize | Create authorization |
| PaymentGatewayReconciliationApi | reconcileRefund | POST /v1/refunds/{refund-key}/reconcile | Reconcile a refund |
| PaymentGatewayReconciliationApi | rejectPayment | POST /v1/gateway-settlement/payments/{payment-key}/reject | Reject a payment |
| PaymentGatewayReconciliationApi | reversePayment | POST /v1/gateway-settlement/payments/{payment-key}/chargeback | Reverse a payment |
| PaymentGatewayReconciliationApi | settlePayment | POST /v1/gateway-settlement/payments/{payment-key}/settle | Settle a payment |
| PaymentGatewaysApi | createPredebitNotification | POST /v1/payment-gateways/pre-debit-notification | Trigger a pre-debit notification |
| PaymentGatewaysApi | getPaymentGateways | GET /v1/payment-gateways | List all payment gateways |
| PaymentMethodSnapshotsApi | getPaymentMethodSnapshot | GET /v1/object/payment-method-snapshot/{id} | CRUD: Retrieve a payment method snapshot |
| PaymentMethodTransactionLogsApi | getPaymentMethodTransactionLog | GET /v1/object/payment-method-transaction-log/{id} | CRUD: Retrieve a payment method transaction log |
| PaymentMethodUpdaterApi | createPaymentMethodUpdaterBatch | POST /v1/payment-method-updaters/batches | Create a Payment Method Updater batch asynchronously |
| PaymentMethodUpdaterApi | getPaymentMethodUpdaterInstances | GET /v1/payment-method-updaters | List payment method updater instances |
| PaymentMethodsApi | cancelStoredCredentialProfile | POST /v1/payment-methods/{payment-method-id}/profiles/{profile-number}/cancel | Cancel a stored credential profile |
| PaymentMethodsApi | createPaymentMethod | POST /v1/payment-methods | Create a payment method |
| PaymentMethodsApi | createPaymentSession | POST /web-payments/sessions | Create a payment session |
| PaymentMethodsApi | createStoredCredentialProfile | POST /v1/payment-methods/{payment-method-id}/profiles | Create a stored credential profile |
| PaymentMethodsApi | decryptPaymentMethod | POST /v1/payment-methods/decryption | Create an Apple Pay payment method |
| PaymentMethodsApi | deletePaymentMethod | DELETE /v1/payment-methods/{payment-method-id} | Delete a payment method |
| PaymentMethodsApi | expireStoredCredentialProfile | POST /v1/payment-methods/{payment-method-id}/profiles/{profile-number}/expire | Expire a stored credential profile |
| PaymentMethodsApi | getPaymentMethod | GET /v1/payment-methods/{payment-method-id} | Retrieve a payment method |
| PaymentMethodsApi | getStoredCredentialProfiles | GET /v1/payment-methods/{payment-method-id}/profiles | List stored credential profiles of a payment method |
| PaymentMethodsApi | scrubPaymentMethod | PUT /v1/payment-methods/{payment-method-id}/scrub | Scrub a payment method |
| PaymentMethodsApi | updatePaymentMethod | PUT /v1/payment-methods/{payment-method-id} | Update a payment method |
| PaymentMethodsApi | verifyPaymentMethod | PUT /v1/payment-methods/{payment-method-id}/verify | Verify a payment method |
| PaymentRunsApi | createPaymentRun | POST /v1/payment-runs | Create a payment run |
| PaymentRunsApi | deletePaymentRun | DELETE /v1/payment-runs/{paymentRunKey} | Delete a payment run |
| PaymentRunsApi | getPaymentRun | GET /v1/payment-runs/{paymentRunKey} | Retrieve a payment run |
| PaymentRunsApi | getPaymentRunData | GET /v1/payment-runs/{paymentRunKey}/data | Retrieve payment run data |
| PaymentRunsApi | getPaymentRunSummary | GET /v1/payment-runs/{paymentRunKey}/summary | Retrieve a payment run summary |
| PaymentRunsApi | getPaymentRuns | GET /v1/payment-runs | List payment runs |
| PaymentRunsApi | updatePaymentRun | PUT /v1/payment-runs/{paymentRunKey} | Update a payment run |
| PaymentSchedulesApi | addItemsToCustomPaymentSchedule | POST /v1/payment-schedules/{paymentScheduleKey}/items | Add payment schedule items to a custom payment schedule |
| PaymentSchedulesApi | cancelPaymentSchedule | PUT /v1/payment-schedules/{paymentScheduleKey}/cancel | Cancel a payment schedule |
| PaymentSchedulesApi | cancelPaymentScheduleItem | PUT /v1/payment-schedule-items/{item-id}/cancel | Cancel a payment schedule item |
| PaymentSchedulesApi | createPaymentSchedule | POST /v1/payment-schedules | Create a payment schedule |
| PaymentSchedulesApi | createPaymentSchedules | POST /v1/payment-schedules/batch | Create multiple payment schedules at once |
| PaymentSchedulesApi | getPaymentSchedule | GET /v1/payment-schedules/{paymentScheduleKey} | Retrieve a payment schedule |
| PaymentSchedulesApi | getPaymentScheduleItem | GET /v1/payment-schedule-items/{item-id} | Retrieve a payment schedule item |
| PaymentSchedulesApi | getPaymentScheduleStatistic | GET /v1/payment-schedules/statistics/{yyyy-mm-dd} | Retrieve payment schedule statistic of a date |
| PaymentSchedulesApi | getPaymentSchedules | GET /v1/payment-schedules | List payment schedules by customer account |
| PaymentSchedulesApi | retryPaymentScheduleItem | POST /v1/payment-schedule-items/retry-payment | Retry failed payment schedule items |
| PaymentSchedulesApi | skipPaymentScheduleItem | PUT /v1/payment-schedule-items/{item-id}/skip | Skip a payment schedule item |
| PaymentSchedulesApi | updatePaymentSchedule | PUT /v1/payment-schedules/{paymentScheduleKey} | Update a payment schedule |
| PaymentSchedulesApi | updatePaymentScheduleItem | PUT /v1/payment-schedule-items/{item-id} | Update a payment schedule item |
| PaymentSchedulesApi | updatePaymentSchedulePreview | PUT /v1/payment-schedules/{paymentScheduleKey}/preview | Preview the result of payment schedule updates |
| PaymentTransactionLogsApi | getPaymentTransactionLog | GET /v1/object/payment-transaction-log/{id} | CRUD: Retrieve a payment transaction log |
| PaymentsApi | applyPayment | PUT /v1/payments/{paymentKey}/apply | Apply a payment |
| PaymentsApi | cancelPayment | PUT /v1/payments/{paymentKey}/cancel | Cancel a payment |
| PaymentsApi | createPayment | POST /v1/payments | Create a payment |
| PaymentsApi | createRefundPayment | POST /v1/payments/{paymentKey}/refunds | Refund a payment |
| PaymentsApi | deletePayment | DELETE /v1/payments/{paymentKey} | Delete a payment |
| PaymentsApi | getPayment | GET /v1/payments/{paymentKey} | Retrieve a payment |
| PaymentsApi | getPaymentItemPart | GET /v1/payments/{paymentKey}/parts/{partId}/item-parts/{itemPartId} | Retrieve a payment part item |
| PaymentsApi | getPaymentItemParts | GET /v1/payments/{paymentKey}/parts/{partId}/item-parts | List all payment part items |
| PaymentsApi | getPaymentPart | GET /v1/payments/{paymentKey}/parts/{partId} | Retrieve a payment part |
| PaymentsApi | getPaymentParts | GET /v1/payments/{paymentKey}/parts | List all parts of a payment |
| PaymentsApi | getRetrieveAllPayments | GET /v1/payments | List payments |
| PaymentsApi | refundPaymentwithAutoUnapply | POST /v1/payments/{paymentKey}/refunds/unapply | Refund a payment with auto-unapplying |
| PaymentsApi | transferPayment | PUT /v1/payments/{paymentKey}/transfer | Transfer a payment |
| PaymentsApi | unapplyPayment | PUT /v1/payments/{paymentKey}/unapply | Unapply a payment |
| PaymentsApi | updatePayment | PUT /v1/payments/{paymentId} | Update a payment |
| ProductRatePlanChargeTiersApi | getProductRatePlanChargeTier | GET /v1/object/product-rate-plan-charge-tier/{id} | CRUD: Retrieve a product rate plan charge tier |
| ProductRatePlanChargeTiersApi | updateProductRatePlanChargeTier | PUT /v1/object/product-rate-plan-charge-tier/{id} | CRUD: Update a product rate plan charge tier |
| ProductRatePlanChargesApi | createProductRatePlanCharge | POST /v1/object/product-rate-plan-charge | CRUD: Create a product rate plan charge |
| ProductRatePlanChargesApi | deleteProductRatePlanCharge | DELETE /v1/object/product-rate-plan-charge/{id} | CRUD: Delete a product rate plan charge |
| ProductRatePlanChargesApi | getProductRatePlanCharge | GET /v1/object/product-rate-plan-charge/{id} | CRUD: Retrieve a product rate plan charge |
| ProductRatePlanChargesApi | updateProductRatePlanCharge | PUT /v1/object/product-rate-plan-charge/{id} | CRUD: Update a product rate plan charge |
| ProductRatePlanChargesApi | updateProductRatePlanChargeFinanceInformation | PUT /v1/product-rate-plan-charges/{product-rate-plan-charge-key}/finance-information | Update a Zuora Revenue accounting code |
| ProductRatePlansApi | createProductRatePlan | POST /v1/object/product-rate-plan | CRUD: Create a product rate plan |
| ProductRatePlansApi | deleteProductRatePlan | DELETE /v1/object/product-rate-plan/{id} | CRUD: Delete a product rate plan |
| ProductRatePlansApi | getProductRatePlan | GET /v1/product-rate-plans/{id} | Retrieve a product rate plan by ID |
| ProductRatePlansApi | getProductRatePlansByExternalID | GET /v1/product-rate-plans/external-id/{externalId} | List product rate plans by external ID |
| ProductRatePlansApi | getRatePlansByProduct | GET /v1/rateplan/{product-key}/productRatePlan | List all product rate plans of a product |
| ProductRatePlansApi | updateProductRatePlan | PUT /v1/object/product-rate-plan/{id} | CRUD: Update a product rate plan |
| ProductsApi | createProduct | POST /v1/object/product | Create a product |
| ProductsApi | deleteProduct | DELETE /v1/object/product/{id} | CRUD: Delete a product |
| ProductsApi | getProduct | GET /v1/catalog/product/{product-key} | Retrieve a product |
| ProductsApi | getProducts | GET /v1/catalog/products | Get all products |
| ProductsApi | updateProduct | PUT /v1/object/product/{id} | CRUD: Update a product |
| RampsApi | getRampByNumber | GET /v1/ramps/{rampNumber} | Retrieve a ramp |
| RampsApi | getRampMetricsByNumber | GET /v1/ramps/{rampNumber}/ramp-metrics | List all ramp metrics of a ramp |
| RampsApi | getRampMetricsByOrderNumber | GET /v1/orders/{orderNumber}/ramp-metrics | List ramp metrics by order number |
| RampsApi | getRampMetricsBySubscriptionKey | GET /v1/subscriptions/{subscriptionKey}/ramp-metrics | List ramp metrics by subscription key |
| RampsApi | getRampsBySubscriptionKey | GET /v1/subscriptions/{subscriptionKey}/ramps | Retrieve a ramp by subscription key |
| RatePlansApi | getRatePlan | GET /v1/rateplans/{ratePlanId} | Retrieve a rate plan |
| RefundsApi | cancelRefund | PUT /v1/refunds/{refundKey}/cancel | Cancel a refund |
| RefundsApi | deleteRefund | DELETE /v1/refunds/{refundKey} | Delete a refund |
| RefundsApi | getRefund | GET /v1/refunds/{refundKey} | Retrieve a refund |
| RefundsApi | getRefundItemPart | GET /v1/refunds/{refundKey}/parts/{refundPartId}/item-parts/{itemPartId} | Retrieve a refund part item |
| RefundsApi | getRefundItemParts | GET /v1/refunds/{refundKey}/parts/{refundPartId}/item-parts | List all refund part items |
| RefundsApi | getRefundPart | GET /v1/refunds/{refundKey}/parts/{refundPartId} | Retrieve a refund part |
| RefundsApi | getRefundParts | GET /v1/refunds/{refundKey}/parts | List all parts of a refund |
| RefundsApi | getRefunds | GET /v1/refunds | List refunds |
| RefundsApi | updateRefund | PUT /v1/refunds/{refundId} | Update a refund |
| RegenerateApi | pOSTCreateRevRecEvents | POST /v1/uno-regenerate/rev-rec-events | Regenerate Rev Rec Event |
| RegenerateApi | pOSTGenerateRevRecEventsForDailyConsumption | POST /v1/uno-regenerate/rev-rec-events/daily-consumption | Regenerate Rev Rec Event |
| RegenerateApi | pOSTRegenerateBillingTransaction | POST /v1/uno-regenerate/billing-transaction | Regenerate Billing Transaction |
| RegenerateApi | pOSTRegenerateBookingTransaction | POST /v1/uno-regenerate/booking-transaction | Regenerate Booking Transaction |
| RevenueAccountingCodesApi | putRevProAccountingCodes | PUT /v1/revpro-accounting-codes | Update a Zuora Revenue accounting code |
| RevenueIntegrationApi | describeViewColumns | GET /integration/v2/biviews/{view_name}/describe-columns |  |
| RevenueIntegrationApi | downloadReport | GET /integration/v1/reports/download/{filename} |  |
| RevenueIntegrationApi | generateJWTToken | POST /integration/v1/authenticate |  |
| RevenueIntegrationApi | getBIViewCount | GET /integration/v2/biviews/count/{view_name} |  |
| RevenueIntegrationApi | getBIViewStatus | GET /integration/v2/biviews-status |  |
| RevenueIntegrationApi | getBIViewTaskDetails | GET /integration/v2/biviews-status/{task_id} |  |
| RevenueIntegrationApi | getBIViews | GET /integration/v1/biviews/{view_name} |  |
| RevenueIntegrationApi | getBIViewsV2 | GET /integration/v2/biviews/{view_name} |  |
| RevenueIntegrationApi | getCsvUploadStatus | GET /integration/v1/csv/upload/status |  |
| RevenueIntegrationApi | getFileUploadStatusByRequestId | GET /integration/v1/fileupload/status/{file_request_id} |  |
| RevenueIntegrationApi | getReportsById | GET /integration/v1/reports/{report_id} |  |
| RevenueIntegrationApi | getStageError | GET /integration/v1/stage/error/{errortype} |  |
| RevenueIntegrationApi | integrationV2ReportsSignedurlReportIdGet | GET /integration/v2/reports/signedurl/{report_id} |  |
| RevenueIntegrationApi | listReports | GET /integration/v1/reports/list |  |
| RevenueIntegrationApi | selectBIView | POST /integration/v1/biviews/{view_name} |  |
| RevenueIntegrationApi | uploadCsv | POST /integration/v1/csv/upload |  |
| RevenueIntegrationApi | uploadFile | POST /integration/v1/upload/file |  |
| RevenueIntegrationApi | uploadMapping | POST /integration/v1/upload/mapping |  |
| RsaSignaturesApi | createRSASignature | POST /v1/rsa-signatures | Generate an RSA signature |
| RsaSignaturesApi | decryptRSASignature | POST /v1/rsa-signatures/decrypt | Decrypt an RSA signature |
| SequenceSetsApi | createSequenceSets | POST /v1/sequence-sets | Create sequence sets |
| SequenceSetsApi | deleteSequenceSet | DELETE /v1/sequence-sets/{id} | Delete a sequence set |
| SequenceSetsApi | getSequenceSet | GET /v1/sequence-sets/{id} | Retrieve a sequence set |
| SequenceSetsApi | getSequenceSets | GET /v1/sequence-sets | List sequence sets |
| SequenceSetsApi | updateSequenceSet | PUT /v1/sequence-sets/{id} | Update a sequence set |
| SettingsApi | getListAllSettings | GET /settings/listing | List all settings |
| SettingsApi | postProcessSettingsBatchRequest | POST /settings/batch-requests | Submit settings requests |
| SignUpApi | postSignUp | POST /v1/sign-up | Sign up |
| SubscriptionChangeLogsApi | getSubscriptionChangeLogsByOrderNumber | GET /subscription-change-logs/orders/{orderNumber} | Retrieve change logs for a subscription |
| SubscriptionChangeLogsApi | getSubscriptionChangeLogsBySubscriptionNumber | GET /subscription-change-logs/{subscriptionNumber} | Retrieve change logs for a subscription |
| SubscriptionChangeLogsApi | getSubscriptionChangeLogsBySubscriptionNumberAndVersion | GET /subscription-change-logs/{subscriptionNumber}/versions/{version} | Retrieve change logs for a subscription |
| SubscriptionsApi | cancelSubscription | PUT /v1/subscriptions/{subscription-key}/cancel | Cancel a subscription |
| SubscriptionsApi | createSubscription | POST /v1/subscriptions | Create a subscription |
| SubscriptionsApi | deleteSubscription | PUT /v1/subscriptions/{subscription-key}/delete | Delete a subscription by number |
| SubscriptionsApi | getMetricsBySubscriptionNumbers | GET /v1/subscriptions/subscription-metrics | List subscriptions metrics by subscription numbers |
| SubscriptionsApi | getSubscriptionByKey | GET /v1/subscriptions/{subscription-key} | Retrieve a subscription by key |
| SubscriptionsApi | getSubscriptionByKeyAndVersion | GET /v1/subscriptions/{subscription-key}/versions/{version} | Retrieve a subscription by key and version |
| SubscriptionsApi | getSubscriptionsByAccount | GET /v1/subscriptions/accounts/{account-key} | List subscriptions by account key |
| SubscriptionsApi | previewExistingSubscription | POST /v1/subscriptions/{subscription-key}/preview | Preview a subscription by key |
| SubscriptionsApi | previewSubscription | POST /v1/subscriptions/preview | Preview a subscription |
| SubscriptionsApi | renewSubscription | PUT /v1/subscriptions/{subscription-key}/renew | Renew a subscription |
| SubscriptionsApi | resumeSubscription | PUT /v1/subscriptions/{subscription-key}/resume | Resume a subscription |
| SubscriptionsApi | suspendSubscription | PUT /v1/subscriptions/{subscription-key}/suspend | Suspend a subscription |
| SubscriptionsApi | updateSubscription | PUT /v1/subscriptions/{subscription-key} | Update a subscription |
| SubscriptionsApi | updateSubscriptionCustomFieldsOfASpecifiedVersion | PUT /v1/subscriptions/{subscriptionNumber}/versions/{version}/customFields | Update subscription custom fields of a subscription version |
| SummaryJournalEntriesApi | cancelSummaryJournalEntry | PUT /v1/journal-entries/{je-number}/cancel | Cancel a summary journal entry |
| SummaryJournalEntriesApi | createSummaryJournalEntry | POST /v1/journal-entries | Create a summary journal entry |
| SummaryJournalEntriesApi | deleteSummaryJournalEntry | DELETE /v1/journal-entries/{je-number} | Delete a summary journal entry |
| SummaryJournalEntriesApi | getAllSummaryJournalEntries | GET /v1/journal-entries/journal-runs/{jr-number} | List all summary journal entries in a journal run |
| SummaryJournalEntriesApi | getSummaryJournalEntry | GET /v1/journal-entries/{je-number} | Retrieve a summary journal entry |
| SummaryJournalEntriesApi | updateBasicSummaryJournalEntry | PUT /v1/journal-entries/{je-number}/basic-information | Update a summary journal entry |
| TaxationItemsApi | createTaxationItem | POST /v1/object/taxation-item | CRUD: Create a taxation item |
| TaxationItemsApi | deleteTaxationItem | DELETE /v1/taxation-items/{id} | Delete a taxation item |
| TaxationItemsApi | getTaxationItem | GET /v1/taxation-items/{id} | Retrieve a taxation item |
| TaxationItemsApi | putTaxationItem | PUT /v1/taxation-items/{id} | Update a taxation item |
| UsageApi | createUsage | POST /v1/object/usage | CRUD: Create a usage record |
| UsageApi | deleteUsage | DELETE /v1/object/usage/{id} | CRUD: Delete a usage record |
| UsageApi | getUsage | GET /v1/object/usage/{id} | CRUD: Retrieve a usage record |
| UsageApi | getUsageRateDetailByInvoiceItem | GET /v1/invoices/invoice-item/{invoice-item-id}/usage-rate-detail | Retrieve usage rate detail for an invoice item |
| UsageApi | getUsagesByAccount | GET /v1/usage/accounts/{account-key} | Retrieve usage records by account |
| UsageApi | updateUsage | PUT /v1/object/usage/{id} | CRUD: Update a usage record |
| UsageApi | uploadUsageFile | POST /v1/usage | Upload a usage file |
| WorkflowsApi | deleteWorkflow | DELETE /workflows/{workflow_id} | Delete a workflow |
| WorkflowsApi | deleteWorkflowVersion | DELETE /workflows/versions/{version_id} | Delete a workflow version |
| WorkflowsApi | getWorkflow | GET /workflows/{workflow_id} | Retrieve a workflow |
| WorkflowsApi | getWorkflowExport | GET /workflows/{workflow_id}/export | Export a workflow version |
| WorkflowsApi | getWorkflowRun | GET /workflows/workflow_runs/{workflow_run_id} | Retrieve a workflow run |
| WorkflowsApi | getWorkflowVersions | GET /workflows/{workflow_id}/versions | List all versions of a workflow definition |
| WorkflowsApi | getWorkflows | GET /workflows | List workflows |
| WorkflowsApi | getWorkflowsTask | GET /workflows/tasks/{task_id} | Retrieve a workflow task |
| WorkflowsApi | getWorkflowsTasks | GET /workflows/tasks | List workflow tasks |
| WorkflowsApi | getWorkflowsUsages | GET /workflows/metrics.json | Retrieve workflow task usage |
| WorkflowsApi | pATCHUpdateWorkflow | PATCH /workflows/{workflow_id} | Update a workflow |
| WorkflowsApi | postRunWorkflow | POST /workflows/{workflow_id}/run | Run a workflow |
| WorkflowsApi | postWorkflowImport | POST /workflows/import | Import a workflow |
| WorkflowsApi | postWorkflowVersionsImport | POST /workflows/{workflow_id}/versions/import | Import a workflow version |
| WorkflowsApi | postWorkflowsTaskRerun | POST /workflows/tasks/{task_id}/rerun | Rerun a workflow task |
| WorkflowsApi | putWorkflowsTasksUpdate | PUT /workflows/tasks/batch_update | Update workflow tasks |
