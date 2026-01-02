---
title: "C# client library reference"
url: "https://developer.zuora.com/sdk-references/csharp-sdk-reference/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:59.032Z"
---

#

C# client library reference

The latest C# client library version is **1.5.0**.

##

Requirements

-   **C#** : 12 or later
-   **.NET** : 8.0 or later

##

Installation

See [Zuora Client Libraries](https://developer.zuora.com/docs/guides/libraries/).

##

Classes and methods

The following table summarizes all available classes and methods for the Zuora C# client library.

| Class | Method | HTTP request | Description |
| --- | --- | --- | --- |
| APIHealthApi | GetSystemHealthApiVolumeSummary | GET /system-health/api-requests/volume-summary | List API volume summary records |
| AccountingCodesApi | ActivateAccountingCode | PUT /v1/accounting-codes/{ac-id}/activate | Activate an accounting code |
| AccountingCodesApi | CreateAccountingCode | POST /v1/accounting-codes | Create an accounting code |
| AccountingCodesApi | DeactivateAccountingCode | PUT /v1/accounting-codes/{ac-id}/deactivate | Deactivate an accounting code |
| AccountingCodesApi | DeleteAccountingCode | DELETE /v1/accounting-codes/{ac-id} | Delete an accounting code |
| AccountingCodesApi | GetAccountingCode | GET /v1/accounting-codes/{ac-id} | Retrieve an accounting code |
| AccountingCodesApi | GetAllAccountingCodes | GET /v1/accounting-codes | List all accounting codes |
| AccountingCodesApi | UpdateAccountingCode | PUT /v1/accounting-codes/{ac-id} | Update an accounting code |
| AccountingPeriodsApi | CloseAccountingPeriod | PUT /v1/accounting-periods/{ap-id}/close | Close an accounting period |
| AccountingPeriodsApi | CreateAccountingPeriod | POST /v1/accounting-periods | Create an accounting period |
| AccountingPeriodsApi | DeleteAccountingPeriod | DELETE /v1/accounting-periods/{ap-id} | Delete an accounting period |
| AccountingPeriodsApi | GetAccountingPeriod | GET /v1/accounting-periods/{ap-id} | Retrieve an accounting period |
| AccountingPeriodsApi | GetAllAccountingPeriods | GET /v1/accounting-periods | List all accounting periods |
| AccountingPeriodsApi | PendingCloseAccountingPeriod | PUT /v1/accounting-periods/{ap-id}/pending-close | Set an accounting period to pending close |
| AccountingPeriodsApi | ReopenAccountingPeriod | PUT /v1/accounting-periods/{ap-id}/reopen | Reopen an accounting period |
| AccountingPeriodsApi | RunTrialBalance | PUT /v1/accounting-periods/{ap-id}/run-trial-balance | Run trial balance |
| AccountingPeriodsApi | UpdateAccountingPeriod | PUT /v1/accounting-periods/{ap-id} | Update an accounting period |
| AccountsApi | CreateAccount | POST /v1/accounts | Create an account |
| AccountsApi | DeleteAccount | DELETE /v1/accounts/{account-key} | Delete an account |
| AccountsApi | GetAccount | GET /v1/accounts/{account-key} | Retrieve an account |
| AccountsApi | GetAccountDefaultPaymentMethod | GET /v1/accounts/{account-key}/payment-methods/default | Retrieve the default payment method of an account |
| AccountsApi | GetAccountPaymentMethods | GET /v1/accounts/{account-key}/payment-methods | List payment methods of an account |
| AccountsApi | GetAccountSummary | GET /v1/accounts/{account-key}/summary | Retrieve an account summary |
| AccountsApi | UpdateAccount | PUT /v1/accounts/{account-key} | Update an account |
| ActionsApi | ActionPostCreate | POST /v1/action/create | Create |
| ActionsApi | ActionPostDelete | POST /v1/action/delete | Delete |
| ActionsApi | ActionPostQuery | POST /v1/action/query | Query |
| ActionsApi | ActionPostqueryMore | POST /v1/action/queryMore | QueryMore |
| ActionsApi | ActionPostupdate | POST /v1/action/update | Update |
| AdjustmentsApi | CancelBillingAdjustment | PUT /v1/adjustments/{adjustmentId}/cancel | Cancel an adjustment |
| AdjustmentsApi | CreateBillingAdjustment | POST /v1/adjustments | Create an adjustment |
| AdjustmentsApi | GetBillingAdjustment | GET /v1/adjustments/{adjustment-key} | Retrieve an adjustment |
| AdjustmentsApi | GetSubscriptionAdjustments | GET /v1/adjustments | List all adjustments of the latest version subscription |
| AdjustmentsApi | PreviewBillingAdjustment | POST /v1/adjustments/preview | Preview an adjustment |
| AggregateQueriesApi | CreateBatchQuery | POST /v1/batch-query/ | Submit an aggregate query job |
| AggregateQueriesApi | DeleteBatchQueryJob | DELETE /v1/batch-query/jobs/{jobid} | Cancel a running aggregate query job |
| AggregateQueriesApi | GetBatchQueryJob | GET /v1/batch-query/jobs/{jobid} | Retrieve an aggregate query job |
| AttachmentsApi | DeleteAttachments | DELETE /v1/attachments/{attachment-id} | Delete an attachment |
| AttachmentsApi | GetAttachments | GET /v1/attachments/{attachment-id} | Retrieve an attachment |
| AttachmentsApi | GetAttachmentsList | GET /v1/attachments/{object-type}/{object-key} | List attachments by object type and key |
| AttachmentsApi | PostAttachments | POST /v1/attachments | Create an attachment |
| AttachmentsApi | PutAttachments | PUT /v1/attachments/{attachment-id} | Update an attachment |
| BillRunApi | CancelBillRun | PUT /v1/bill-runs/{billRunId}/cancel | Cancel a bill run |
| BillRunApi | CreateBillRun | POST /v1/bill-runs | Create a bill run |
| BillRunApi | DeleteBillRun | DELETE /v1/bill-runs/{billRunId} | Delete a bill run |
| BillRunApi | EmailBillRun | POST /v1/bill-runs/{billRunKey}/emails | Email billing documents generated from a bill run |
| BillRunApi | GetBillRun | GET /v1/bill-runs/{billRunId} | Retrieve a bill run |
| BillRunApi | PostBillRun | PUT /v1/bill-runs/{billRunId}/post | Post a bill run |
| BillRunHealthApi | GetSystemHealthBillingDocVolumeSummary | GET /system-health/billing-documents/volume-summary | List billing document volume summary records |
| BillingDocumentsApi | CreateBillingDocumentFilesDeletionJob | POST /v1/accounts/billing-documents/files/deletion-jobs | Create a job to hard delete billing document files |
| BillingDocumentsApi | GenerateBillingDocuments | POST /v1/accounts/{key}/billing-documents/generate | Generate billing documents by account ID |
| BillingDocumentsApi | GetBillingDocumentFilesDeletionJob | GET /v1/accounts/billing-documents/files/deletion-jobs/{jobId} | Retrieve a job of hard deleting billing document files |
| BillingDocumentsApi | GetBillingDocuments | GET /v1/billing-documents | List billing documents for an account |
| BillingPreviewRunApi | CreateBillingPreviewRun | POST /v1/billing-preview-runs | Create a billing preview run |
| BillingPreviewRunApi | GetBillingPreviewRun | GET /v1/billing-preview-runs/{billingPreviewRunId} | Retrieve a billing preview run |
| BookingDateBackfillJobApi | GETBookingDateBackfillJobById | GET /v1/uno/data-backfill/bookingdate/jobs/{jobId} | Find BookingDate Backfill job by ID |
| BookingDateBackfillJobApi | GETListBookingDateBackfillJobs | GET /v1/uno/data-backfill/bookingdate/jobs | Query all Booking Date Backfill Jobs |
| BookingDateBackfillJobApi | POSTCreateBookingDateBackfillJob | POST /v1/uno/data-backfill/bookingdate/jobs | Create a new BookingDate Backfil job |
| BookingDateBackfillJobApi | PUTStopBookingDateBackfillJobById | PUT /v1/uno/data-backfill/bookingdate/jobs/{jobId} | Stop BookingDate Backfill job by ID |
| CatalogGroupsApi | CreateCatalogGroup | POST /v1/catalog-groups | Create a catalog group |
| CatalogGroupsApi | DeleteCatalogGroup | DELETE /v1/catalog-groups/{catalog-group-key} | Delete a catalog group |
| CatalogGroupsApi | GetCatalogGroup | GET /v1/catalog-groups/{catalog-group-key} | Retrieve a catalog group |
| CatalogGroupsApi | GetCatalogGroups | GET /v1/catalog-groups | List all catalog groups |
| CatalogGroupsApi | UpdateCatalogGroup | PUT /v1/catalog-groups/{catalog-group-key} | Update a catalog group |
| ContactSnapshotsApi | GetContactSnapshot | GET /v1/contact-snapshots/{contact-snapshot-id} | Retrieve a contact snapshot |
| ContactsApi | CreateContact | POST /v1/contacts | Create a contact |
| ContactsApi | DeleteContact | DELETE /v1/contacts/{contactId} | Delete a contact |
| ContactsApi | GetContact | GET /v1/contacts/{contactId} | Retrieve a contact |
| ContactsApi | ScrubContact | PUT /v1/contacts/{contactId}/scrub | Scrub a contact |
| ContactsApi | TransferContact | PUT /v1/contacts/{contactId}/transfer | Transfer a contact |
| ContactsApi | UpdateContact | PUT /v1/contacts/{contactId} | Update a contact |
| CreditMemosApi | ApplyCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/apply | Apply a credit memo |
| CreditMemosApi | ApplyCreditMemoAsync | PUT /v1/credit-memos/{creditMemoKey}/apply-async | Async Apply a credit memo |
| CreditMemosApi | BulkCreateCreditMemos | POST /v1/credit-memos/bulk | Create credit memos |
| CreditMemosApi | BulkUpdateCreditMemos | PUT /v1/credit-memos/bulk | Update credit memos |
| CreditMemosApi | CancelAsyncCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/cancel-async | Cancel a Credit Memo in async |
| CreditMemosApi | CancelCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/cancel | Cancel a credit memo |
| CreditMemosApi | CreateCreditMemoFromCharge | POST /v1/credit-memos | Create a credit memo from a charge |
| CreditMemosApi | CreateCreditMemoFromInvoice | POST /v1/credit-memos/invoice/{invoiceKey} | Create a credit memo from an invoice |
| CreditMemosApi | CreateCreditMemoTaxationItems | POST /v1/credit-memos/{creditMemoKey}/taxation-items | Create taxation items for a credit memo |
| CreditMemosApi | DeleteCreditMemo | DELETE /v1/credit-memos/{creditMemoKey} | Delete a credit memo |
| CreditMemosApi | EmailCreditMemo | POST /v1/credit-memos/{creditMemoKey}/emails | Email a credit memo |
| CreditMemosApi | GenerateCreditMemoPdf | POST /v1/credit-memos/{creditMemoKey}/pdfs | Generate a credit memo PDF file |
| CreditMemosApi | GetApplyCreditMemoAsyncJob | GET /v1/credit-memos/apply-async-jobs/{applyAsyncJobId} | Get Async Apply Credit Memo Job by Id |
| CreditMemosApi | GetCreditMemo | GET /v1/credit-memos/{creditMemoKey} | Retrieve a credit memo |
| CreditMemosApi | GetCreditMemoItem | GET /v1/credit-memos/{creditMemoKey}/items/{creditMemoItemId} | Retrieve a credit memo item |
| CreditMemosApi | GetCreditMemoItemPart | GET /v1/credit-memos/{creditMemoKey}/parts/{partId}/item-parts/{itemPartId} | Retrieve a credit memo part item |
| CreditMemosApi | GetCreditMemoItemParts | GET /v1/credit-memos/{creditMemoKey}/parts/{partId}/item-parts | List all credit memo part items |
| CreditMemosApi | GetCreditMemoItems | GET /v1/credit-memos/{creditMemoKey}/items | List credit memo items |
| CreditMemosApi | GetCreditMemoPart | GET /v1/credit-memos/{creditMemoKey}/parts/{partId} | Retrieve a credit memo part |
| CreditMemosApi | GetCreditMemoParts | GET /v1/credit-memos/{creditMemoKey}/parts | List all parts of a credit memo |
| CreditMemosApi | GetCreditMemoPdfStatus | GET /v1/credit-memos/pdf-status | Retrieve PDF status of credit memos in a batch. |
| CreditMemosApi | GetCreditMemos | GET /v1/credit-memos | List credit memos |
| CreditMemosApi | GetTaxationItemsOfCreditMemoItem | GET /v1/credit-memos/{creditMemoKey}/items/{creditMemoItemId}/taxation-items | List all taxation items of a credit memo item |
| CreditMemosApi | GetUnapplyCreditMemoAsyncJob | GET /v1/credit-memos/unapply-async-jobs/{unapplyAsyncJobId} | Get Async Unapply Credit Memo Job by Id |
| CreditMemosApi | PostAsyncCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/post-async | Post a Credit Memo in async |
| CreditMemosApi | PostCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/post | Post a credit memo |
| CreditMemosApi | RefundCreditMemo | POST /v1/credit-memos/{creditMemoKey}/refund | Refund a credit memo |
| CreditMemosApi | ReverseCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/reverse | Reverse a credit memo |
| CreditMemosApi | UnapplyCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/unapply | Unapply a credit memo |
| CreditMemosApi | UnapplyCreditMemoAsync | PUT /v1/credit-memos/{creditMemoKey}/unapply-async | Async Unapply a credit memo |
| CreditMemosApi | UnpostCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/unpost | Unpost a credit memo |
| CreditMemosApi | UpdateCreditMemo | PUT /v1/credit-memos/{creditMemoKey} | Update a credit memo |
| CreditMemosApi | UploadFileForCreditMemo | POST /v1/credit-memos/{creditMemoKey}/files | Upload a file for a credit memo |
| CreditMemosApi | WriteOffCreditMemo | PUT /v1/credit-memos/{creditMemoKey}/write-off | Write off a credit memo |
| CustomEventTriggersApi | DeleteEventTrigger | DELETE /events/event-triggers/{id} | Delete an event trigger |
| CustomEventTriggersApi | GetEventTrigger | GET /events/event-triggers/{id} | Retrieve an event trigger |
| CustomEventTriggersApi | GetEventTriggers | GET /events/event-triggers | List event triggers |
| CustomEventTriggersApi | PostEventTrigger | POST /events/event-triggers | Create an event trigger |
| CustomEventTriggersApi | PutEventTrigger | PUT /events/event-triggers/{id} | Update an event trigger |
| CustomExchangeRatesApi | GetCustomExchangeRates | GET /v1/custom-exchange-rates/{currency} | List custom exchange rates by currency |
| CustomObjectDefinitionsApi | DeleteCustomObjectDefinitionByType | DELETE /objects/definitions/default/{object} | Delete a custom object definition |
| CustomObjectDefinitionsApi | GetAllCustomObjectDefinitionsInNamespace | GET /objects/definitions/default | List custom object definitions |
| CustomObjectDefinitionsApi | GetCustomObjectDefinitionByType | GET /objects/definitions/default/{object} | Retrieve a custom object definition |
| CustomObjectDefinitionsApi | PostCustomObjectDefinitions | POST /objects/definitions/default | Create custom object definitions |
| CustomObjectDefinitionsApi | PostUpdateCustomObjectDefinition | POST /objects/migrations | Update a custom object definition |
| CustomObjectJobsApi | GetAllCustomObjectBulkJobs | GET /objects/jobs | List all custom object bulk jobs |
| CustomObjectJobsApi | GetCustomObjectBulkJob | GET /objects/jobs/{id} | Retrieve a custom object bulk job |
| CustomObjectJobsApi | GetCustomObjectBulkJobErrors | GET /objects/jobs/{id}/errors | List all errors for a custom object bulk job |
| CustomObjectJobsApi | PATCHCustomObjectBulkJob | PATCH /objects/jobs/{id}/cancel | Cancel a custom object bulk job |
| CustomObjectJobsApi | PostCustomObjectBulkJob | POST /objects/jobs | Submit a custom object bulk job |
| CustomObjectJobsApi | PostUploadFileForCustomObjectBulkJob | POST /objects/jobs/{id}/files | Upload a file for a custom object bulk job |
| CustomObjectRecordsApi | DeleteCustomObjectRecordByID | DELETE /objects/records/default/{object}/{id} | Delete a custom object record |
| CustomObjectRecordsApi | GetAllRecordsForCustomObjectType | GET /objects/records/default/{object} | List records for a custom object |
| CustomObjectRecordsApi | GetCustomObjectRecordByID | GET /objects/records/default/{object}/{id} | Retrieve a custom object record |
| CustomObjectRecordsApi | PatchPartialUpdateCustomObjectRecord | PATCH /objects/records/default/{object}/{id} | Partially update a custom object record |
| CustomObjectRecordsApi | PostCustomObjectRecords | POST /objects/records/default/{object} | Create custom object records |
| CustomObjectRecordsApi | PostCustomObjectRecordsBatchUpdateOrDelete | POST /objects/batch/default/{object} | Update or delete custom object records |
| CustomObjectRecordsApi | PutCustomObjectRecord | PUT /objects/records/default/{object}/{id} | Update a custom object record |
| CustomPaymentMethodTypesApi | CreateOpenPaymentMethodType | POST /open-payment-method-types | Create a draft custom payment method type |
| CustomPaymentMethodTypesApi | GetOpenPaymentMethodTypeRevision | GET /open-payment-method-types/{paymentMethodTypeName}/draft/{revisionNumber} | Retrieve a specific draft revision of a custom payment method type |
| CustomPaymentMethodTypesApi | GetPublishedOpenPaymentMethodType | GET /open-payment-method-types/{paymentMethodTypeName}/published | Retrieve a published custom payment method type |
| CustomPaymentMethodTypesApi | PublishOpenPaymentMethodType | PUT /open-payment-method-types/publish/{paymentMethodTypeName} | Publish a custom payment method type |
| CustomPaymentMethodTypesApi | UpdateOpenPaymentMethodType | PUT /open-payment-method-types/{paymentMethodTypeName} | Update a custom payment method type |
| CustomScheduledEventsApi | DeleteScheduledEventByID | DELETE /events/scheduled-events/{id} | Delete a scheduled event by ID |
| CustomScheduledEventsApi | GetScheduledEventByID | GET /events/scheduled-events/{id} | Retrieve a scheduled event by ID |
| CustomScheduledEventsApi | GetScheduledEvents | GET /events/scheduled-events | List all scheduled events |
| CustomScheduledEventsApi | PostScheduledEvent | POST /events/scheduled-events | Create a scheduled event |
| CustomScheduledEventsApi | UpdateScheduledEventByID | PUT /events/scheduled-events/{id} | Update a scheduled event by ID |
| DataBackfillJobApi | GETDataBackfillJobById | GET /v1/uno/data-backfill/jobs/{jobId} | Find Data Backfill job by ID |
| DataBackfillJobApi | GETDataBackfillTemplate | GET /v1/uno/data-backfill/jobs/{type}/template | Download a Data Backfill template file |
| DataBackfillJobApi | GETListDataBackfillJobs | GET /v1/uno/date-backfill/listjobs | Query all data backfill jobs |
| DataBackfillJobApi | POSTCreateDataBackfillJob | POST /v1/uno/data-backfill/jobs | Create a new Data Backfil job |
| DataBackfillJobApi | PUTStopDataBackfillJobById | PUT /v1/uno/data-backfill/jobs/{jobId} | Stop Data Backfill job by ID |
| DataLabelingApi | GetDataLabelingJob | GET /v1/multi-organizations/data-labeling-job/{job-id} | Retrieve a data labeling job |
| DataLabelingApi | SubmitDataLabelingJob | POST /v1/multi-organizations/data-labeling-job | Submit a data labeling job |
| DataQueriesApi | DeleteDataQueryJob | DELETE /query/jobs/{job-id} | Cancel a data query job |
| DataQueriesApi | GetDataQueryJob | GET /query/jobs/{job-id} | Retrieve a data query job |
| DataQueriesApi | GetDataQueryJobs | GET /query/jobs | List data query jobs |
| DataQueriesApi | PostDataQueryJob | POST /query/jobs | Submit a data query |
| DebitMemosApi | BulkCreateDebitMemos | POST /v1/debit-memos/bulk | Create debit memos |
| DebitMemosApi | BulkUpdateDebitMemos | PUT /v1/debit-memos/bulk | Update debit memos |
| DebitMemosApi | CancelAsyncDebitMemo | PUT /v1/debit-memos/{debitMemoKey}/cancel-async | Cancel a Debit Memo in async |
| DebitMemosApi | CancelDebitMemo | PUT /v1/debit-memos/{debitMemoKey}/cancel | Cancel a debit memo |
| DebitMemosApi | CollectDebitMemo | POST /v1/debit-memos/{debitMemoKey}/collect | Collect a posted debit memo |
| DebitMemosApi | CreateDebitMemoFromCharge | POST /v1/debit-memos | Create a debit memo from a charge |
| DebitMemosApi | CreateDebitMemoFromInvoice | POST /v1/debit-memos/invoice/{invoiceKey} | Create a debit memo from an invoice |
| DebitMemosApi | CreateTaxationItemsForDebitMemo | POST /v1/debit-memos/{debitMemoKey}/taxation-items | Create taxation items for a debit memo |
| DebitMemosApi | DeleteDebitMemo | DELETE /v1/debit-memos/{debitMemoKey} | Delete a debit memo |
| DebitMemosApi | EmailDebitMemo | POST /v1/debit-memos/{debitMemoKey}/emails | Email a debit memo |
| DebitMemosApi | GenerateDebitMemoPdf | POST /v1/debit-memos/{debitMemoKey}/pdfs | Generate a debit memo PDF file |
| DebitMemosApi | GetDebitMemo | GET /v1/debit-memos/{debitMemoKey} | Retrieve a debit memo |
| DebitMemosApi | GetDebitMemoApplicationParts | GET /v1/debit-memos/{debitMemoKey}/application-parts | List all application parts of a debit memo |
| DebitMemosApi | GetDebitMemoItem | GET /v1/debit-memos/{debitMemoKey}/items/{debitMemoItemId} | Retrieve a debit memo item |
| DebitMemosApi | GetDebitMemoItems | GET /v1/debit-memos/{debitMemoKey}/items | List debit memo items |
| DebitMemosApi | GetDebitMemoPdfStatus | GET /v1/debit-memos/pdf-status | Retrieve PDF status of debit memos in a batch. |
| DebitMemosApi | GetDebitMemos | GET /v1/debit-memos | List debit memos |
| DebitMemosApi | GetTaxationItemsOfDebitMemoItem | GET /v1/debit-memos/{debitMemoKey}/items/{debitMemoItemId}/taxation-items | List all taxation items of a debit memo item |
| DebitMemosApi | PostAsyncDebitMemo | PUT /v1/debit-memos/{debitMemoKey}/post-async | Post a Debit Memo in async |
| DebitMemosApi | PostDebitMemo | PUT /v1/debit-memos/{debitMemoKey}/post | Post a debit memo |
| DebitMemosApi | UnpostDebitMemo | PUT /v1/debit-memos/{debitMemoKey}/unpost | Unpost a debit memo |
| DebitMemosApi | UpdateDebitMemo | PUT /v1/debit-memos/{debitMemoKey} | Update a debit memo |
| DebitMemosApi | UpdateDebitMemosDueDates | PUT /v1/debit-memos | Update due dates for debit memos |
| DebitMemosApi | UploadFileForDebitMemo | POST /v1/debit-memos/{debitMemoKey}/files | Upload a file for a debit memo |
| DebitMemosApi | WriteOffDebitMemo | PUT /v1/debitmemos/{debitMemoKey}/write-off | Write off an debit memo |
| DeploymentApi | CompareAndDeployProductCatalogTemplate | POST /deployment-manager/deployments/template/product_catalog | Compare and Deploy a template for product catalog to a target tenant |
| DeploymentApi | CompareAndDeployProductCatalogTenant | POST /deployment-manager/deployments/tenant/product_catalog | Compare and Deploy product catalog between a source tenant and a target tenant |
| DeploymentApi | CompareAndDeployTemplate | POST /deployment-manager/deployments/templates | Compare and Deploy settings from a template to a target tenant |
| DeploymentApi | CompareAndDeployTenant | POST /deployment-manager/deployments/tenants | Compare and Deploy settings between a source tenant and a target tenant |
| DeploymentApi | RetrieveDeployment | GET /deployment-manager/deployments/{migrationId} | Retrieves a deployment log. |
| DeploymentApi | RevertDeployment | POST /deployment-manager/deployments/{migrationId}/revert | Reverts the deployment. |
| DeploymentConfigurationTemplatesApi | CompareTemplate | POST /deployment-manager/deployment_artifacts/compare | Compare settings between a source tenant and a target tenant |
| DeploymentConfigurationTemplatesApi | CreateDeploymentTemplate | POST /deployment-manager/deployment_templates | Create a deployment template |
| DeploymentConfigurationTemplatesApi | DeleteDeploymentTemplate | DELETE /deployment-manager/deployment_templates/{id} | Delete a template |
| DeploymentConfigurationTemplatesApi | DownloadDeploymentTemplate | GET /deployment-manager/deployment_artifacts | Download a template |
| DeploymentConfigurationTemplatesApi | GetDeploymentTemplateDetail | GET /deployment-manager/deployment_templates/{id} | List all details of a template |
| DeploymentConfigurationTemplatesApi | GetDeploymentTemplates | GET /deployment-manager/deployment_templates | List all templates |
| DeploymentConfigurationTemplatesApi | GetSourceComponentDetails | GET /deployment-manager/deployment_artifacts/retrieve-settings | List all details of source components |
| DeploymentConfigurationTemplatesApi | MigrateTenantSettings | POST /deployment-manager/deployment_artifacts/deploy | Migrate settings from source tenant to target tenant |
| DescribeApi | GetDescribe | GET /v1/describe/{object} | Describe an object |
| EInvoicingApi | DeleteBusinessRegion | DELETE /v1/e-invoice/business-regions/{key} | Delete a Business Region |
| EInvoicingApi | DeleteServiceProvider | DELETE /v1/e-invoice/service-providers/{key} | Delete a Service Provider |
| EInvoicingApi | GetBusinessRegion | GET /v1/e-invoice/business-regions/{key} | Retrieve a Business Region |
| EInvoicingApi | GetBusinessRegions | GET /v1/e-invoice/business-regions | List business region |
| EInvoicingApi | GetServiceProvider | GET /v1/e-invoice/service-providers/{key} | Retrieve a Service Provider |
| EInvoicingApi | GetServiceProviders | GET /v1/e-invoice/service-providers | List Service Provider |
| EInvoicingApi | PostBusinessRegion | POST /v1/e-invoice/business-regions | Post a Business Region |
| EInvoicingApi | PostServiceProvider | POST /v1/e-invoice/service-providers | Post a Service Provider |
| EInvoicingApi | UpdateBusinessRegion | PUT /v1/e-invoice/business-regions/{key} | Update a Business Region |
| EInvoicingApi | UpdateServiceProvider | PUT /v1/e-invoice/service-providers/{key} | Update a Service Provider |
| ElectronicPaymentsHealthApi | GetSystemHealthPaymentVolumeSummary | GET /system-health/payments/volume-summary | List payment volume summary records |
| FilesApi | GetFiles | GET /v1/files/{file-id} | Retrieve a file |
| FulfillmentsApi | CreateFulfillment | POST /v1/fulfillments | Create fulfillments |
| FulfillmentsApi | CreateFulfillmentItem | POST /v1/fulfillment-items | Create fulfillment items |
| FulfillmentsApi | DeleteFulfillment | DELETE /v1/fulfillments/{key} | Delete a fulfillment |
| FulfillmentsApi | DeleteFulfillmentItem | DELETE /v1/fulfillment-items/{id} | Delete a fulfillment item |
| FulfillmentsApi | GetFulfillment | GET /v1/fulfillments/{key} | Retrieve a fulfillment |
| FulfillmentsApi | GetFulfillmentItem | GET /v1/fulfillment-items/{id} | Retrieve a fulfillment item |
| FulfillmentsApi | UpdateFulfillment | PUT /v1/fulfillments/{key} | Update a fulfillment |
| FulfillmentsApi | UpdateFulfillmentItem | PUT /v1/fulfillment-items/{id} | Update a fulfillment item |
| HostedPagesApi | GetHostedPages | GET /v1/hostedpages | List hosted pages |
| ImportsApi | ObjectGetImport | GET /v1/object/import/{id} | CRUD: Retrieve an import |
| ImportsApi | ObjectPostImport | POST /v1/object/import | CRUD: Create an import |
| InvoiceSchedulesApi | AttachInvoiceSchedule | PUT /v1/invoice-schedules/{scheduleKey}/attach | Attach an invoice schedule |
| InvoiceSchedulesApi | CreateInvoiceSchedule | POST /v1/invoice-schedules | Create an invoice schedule |
| InvoiceSchedulesApi | DeleteInvoiceSchedule | DELETE /v1/invoice-schedules/{scheduleKey} | Delete an invoice schedule |
| InvoiceSchedulesApi | DetachInvoiceSchedule | PUT /v1/invoice-schedules/{scheduleKey}/detach | Detach an invoice schedule |
| InvoiceSchedulesApi | ExecuteInvoiceSchedule | POST /v1/invoice-schedules/{scheduleKey}/execute | Execute an invoice schedule |
| InvoiceSchedulesApi | GetInvoiceSchedule | GET /v1/invoice-schedules/{scheduleKey} | Retrieve an invoice schedule |
| InvoiceSchedulesApi | PauseInvoiceSchedule | PUT /v1/invoice-schedules/{scheduleKey}/pause | Pause an invoice schedule |
| InvoiceSchedulesApi | ResumeInvoiceSchedule | PUT /v1/invoice-schedules/{scheduleKey}/resume | Resume an invoice schedule |
| InvoiceSchedulesApi | UpdateInvoiceSchedule | PUT /v1/invoice-schedules/{scheduleKey} | Update an invoice schedule |
| InvoicesApi | BulkCreateStandaloneInvoices | POST /v1/invoices/batch | Create standalone invoices |
| InvoicesApi | BulkPostInvoices | POST /v1/invoices/bulk-post | Post invoices |
| InvoicesApi | BulkUpdateInvoices | PUT /v1/invoices | Update invoices |
| InvoicesApi | CancelInvoice | PUT /v1/invoices/{invoiceKey}/cancel | Cancel an invoice |
| InvoicesApi | CreateInvoiceTaxationItems | POST /v1/invoices/{invoiceKey}/taxation-items | Create taxation items for an invoice |
| InvoicesApi | CreateStandaloneInvoice | POST /v1/invoices | Create a standalone invoice |
| InvoicesApi | DeleteInvoice | DELETE /v1/invoices/{invoiceKey} | Delete an invoice |
| InvoicesApi | EmailInvoice | POST /v1/invoices/{invoiceKey}/emails | Email an invoice |
| InvoicesApi | GetInvoice | GET /v1/invoices/{invoiceKey} | Retrieve an invoice |
| InvoicesApi | GetInvoiceApplicationParts | GET /v1/invoices/{invoiceKey}/application-parts | List all application parts of an invoice |
| InvoicesApi | GetInvoiceFiles | GET /v1/invoices/{invoiceKey}/files | List all files of an invoice |
| InvoicesApi | GetInvoiceItems | GET /v1/invoices/{invoiceKey}/items | List all items of an invoice |
| InvoicesApi | GetInvoicePdfStatus | GET /v1/invoices/pdf-status | Retrieve PDF status of invoices in a batch. |
| InvoicesApi | GetTaxationItemsOfInvoiceItem | GET /v1/invoices/{invoiceKey}/items/{itemId}/taxation-items | List all taxation items of an invoice item |
| InvoicesApi | PostInvoice | PUT /v1/invoices/{invoiceKey}/post | Cancel an invoice |
| InvoicesApi | ReverseInvoice | PUT /v1/invoices/{invoiceKey}/reverse | Reverse an invoice |
| InvoicesApi | UpdateInvoice | PUT /v1/invoices/{invoiceKey} | Update an invoice |
| InvoicesApi | UploadFileForInvoice | POST /v1/invoices/{invoiceKey}/files | Upload a file for an invoice |
| InvoicesApi | WriteOffInvoice | PUT /v1/invoices/{invoiceKey}/write-off | Write off an invoice |
| JournalRunsApi | CancelJournalRun | PUT /v1/journal-runs/{jr-number}/cancel | Cancel a journal run |
| JournalRunsApi | CreateJournalRun | POST /v1/journal-runs | Create a journal run |
| JournalRunsApi | DeleteJournalRun | DELETE /v1/journal-runs/{jr-number} | Delete a journal run |
| JournalRunsApi | GetJournalRun | GET /v1/journal-runs/{jr-number} | Retrieve a journal run |
| MassUpdaterApi | CreateMassUpdater | POST /v1/bulk | Perform a mass action |
| MassUpdaterApi | GetMassUpdater | GET /v1/bulk/{bulk-key} | List all results of a mass action |
| MassUpdaterApi | StopMassUpdater | PUT /v1/bulk/{bulk-key}/stop | Stop a mass action |
| NotificationsApi | CreateNotificationDefinition | POST /notifications/notification-definitions | Create a notification definition |
| NotificationsApi | CreateOrUpdateEmailTemplates | POST /notifications/email-templates/import | Create or update email templates |
| NotificationsApi | DeleteEmailTemplate | DELETE /notifications/email-templates/{id} | Delete an email template |
| NotificationsApi | DeleteNotificationDefinition | DELETE /notifications/notification-definitions/{id} | Delete a notification definition |
| NotificationsApi | DeleteNotificationHistoryForAccount | DELETE /notifications/history | Delete notification histories for an account |
| NotificationsApi | GetCalloutHistory | GET /v1/notification-history/callout | List callout notification histories |
| NotificationsApi | GetEmailHistory | GET /v1/notification-history/email | List email notification histories |
| NotificationsApi | GetEmailTemplate | GET /notifications/email-templates/{id} | Retrieve an email template |
| NotificationsApi | GetNotificationDefinition | GET /notifications/notification-definitions/{id} | Retrieve a notification definition |
| NotificationsApi | GetNotificationHistoryDeletionTask | GET /notifications/history/tasks/{id} | Retrieve a notification history deletion task |
| NotificationsApi | PostCreateEmailTemplate | POST /notifications/email-templates | Create an email template |
| NotificationsApi | QueryEmailTemplates | GET /notifications/email-templates | List email templates |
| NotificationsApi | QueryNotificationDefinitions | GET /notifications/notification-definitions | List notification definitions |
| NotificationsApi | ResendCalloutNotifications | POST /notifications/callout-histories/resend | Resend callout notifications |
| NotificationsApi | ResendEmailNotifications | POST /notifications/email-histories/resend | Resend email notifications |
| NotificationsApi | UpdateEmailTemplate | PUT /notifications/email-templates/{id} | Update an email template |
| NotificationsApi | UpdateNotificationDefinition | PUT /notifications/notification-definitions/{id} | Update a notification definition |
| OAuthApi | CreateToken | POST /oauth/token | Create an OAuth token |
| ObjectQueriesApi | QueryAccountByKey | GET /object-query/accounts/{key} | Retrieve an account |
| ObjectQueriesApi | QueryAccounts | GET /object-query/accounts | List accounts |
| ObjectQueriesApi | QueryAmendmentByKey | GET /object-query/amendments/{key} | Retrieve an amendment |
| ObjectQueriesApi | QueryAmendments | GET /object-query/amendments | List amendments |
| ObjectQueriesApi | QueryBillingRunByKey | GET /object-query/billing-runs/{key} | Retrieve a billing run |
| ObjectQueriesApi | QueryBillingRuns | GET /object-query/billing-runs | List bill runs |
| ObjectQueriesApi | QueryContactByKey | GET /object-query/contacts/{key} | Retrieve a contact |
| ObjectQueriesApi | QueryContacts | GET /object-query/contacts | List contacts |
| ObjectQueriesApi | QueryCreditMemoApplicationByKey | GET /object-query/credit-memo-applications/{key} | Retrieve a credit memo application |
| ObjectQueriesApi | QueryCreditMemoApplications | GET /object-query/credit-memo-applications | List credit memo applications |
| ObjectQueriesApi | QueryCreditMemoByKey | GET /object-query/credit-memos/{key} | Retrieve a credit memo |
| ObjectQueriesApi | QueryCreditMemoItemByKey | GET /object-query/credit-memo-items/{key} | Retrieve a credit memo item |
| ObjectQueriesApi | QueryCreditMemoItems | GET /object-query/credit-memo-items | List credit memo items |
| ObjectQueriesApi | QueryCreditMemos | GET /object-query/credit-memos | List credit memos |
| ObjectQueriesApi | QueryCustomObjectBykey | GET /object-query/{custom-object-name}/{key} | Retrieve a custom object |
| ObjectQueriesApi | QueryCustomObjects | GET /object-query/{custom-object-name} | List custom objects |
| ObjectQueriesApi | QueryDailyConsumptionSummaryByKey | GET /object-query/daily-consumption-summaries/{key} | Retrieve a daily consumption summary |
| ObjectQueriesApi | QueryDailyConsumptionSummarys | GET /object-query/daily-consumption-summaries | List daily consumption summaries |
| ObjectQueriesApi | QueryDebitMemoByKey | GET /object-query/debit-memos/{key} | Retrieve a debit memo |
| ObjectQueriesApi | QueryDebitMemoItemByKey | GET /object-query/debit-memo-items/{key} | Retrieve a debit memo item |
| ObjectQueriesApi | QueryDebitMemoItems | GET /object-query/debit-memo-items | List debit memo items |
| ObjectQueriesApi | QueryDebitMemos | GET /object-query/debit-memos | List debit memos |
| ObjectQueriesApi | QueryInvoiceByKey | GET /object-query/invoices/{key} | Retrieve an invoice |
| ObjectQueriesApi | QueryInvoiceItemByKey | GET /object-query/invoice-items/{key} | Retrieve an invoice item |
| ObjectQueriesApi | QueryInvoiceItems | GET /object-query/invoice-items | List invoice items |
| ObjectQueriesApi | QueryInvoices | GET /object-query/invoices | List invoices |
| ObjectQueriesApi | QueryInvoiceScheduleByKey | GET /object-query/invoice-schedules/{key} | Retrieve an invoice schedule |
| ObjectQueriesApi | QueryInvoiceSchedules | GET /object-query/invoice-schedules | List invoice schedules |
| ObjectQueriesApi | QueryOrderActionByKey | GET /object-query/order-actions/{key} | Retrieve an order action |
| ObjectQueriesApi | QueryOrderActions | GET /object-query/order-actions | List order actions |
| ObjectQueriesApi | QueryOrderLineItemByKey | GET /object-query/order-line-items/{key} | Retrieve an order line item |
| ObjectQueriesApi | QueryOrderLineItems | GET /object-query/order-line-items | List order line items |
| ObjectQueriesApi | QueryOrdersByKey | GET /object-query/orders/{key} | Retrieve an order |
| ObjectQueriesApi | QueryOrderss | GET /object-query/orders | List orders |
| ObjectQueriesApi | QueryPaymentApplicationByKey | GET /object-query/payment-applications/{key} | Retrieve a payment application |
| ObjectQueriesApi | QueryPaymentApplications | GET /object-query/payment-applications | List payment applications |
| ObjectQueriesApi | QueryPaymentByKey | GET /object-query/payments/{key} | Retrieve a payment |
| ObjectQueriesApi | QueryPaymentMethodByKey | GET /object-query/payment-methods/{key} | Retrieve a payment method |
| ObjectQueriesApi | QueryPaymentMethodSnapshotByKey | GET /object-query/payment-method-snapshots/{key} | Retrieve a payment method snapshot |
| ObjectQueriesApi | QueryPaymentMethodSnapshots | GET /object-query/payment-method-snapshots | List payment method snapshots |
| ObjectQueriesApi | QueryPaymentMethods | GET /object-query/payment-methods | List payment methods |
| ObjectQueriesApi | QueryPaymentRunByKey | GET /object-query/payment-runs/{key} | Retrieve a payment run |
| ObjectQueriesApi | QueryPaymentRuns | GET /object-query/payment-runs | List payment runs |
| ObjectQueriesApi | QueryPaymentScheduleByKey | GET /object-query/payment-schedules/{key} | Retrieve a payment schedule |
| ObjectQueriesApi | QueryPaymentScheduleItemByKey | GET /object-query/payment-schedule-items/{key} | Retrieve a payment schedule item |
| ObjectQueriesApi | QueryPaymentScheduleItems | GET /object-query/payment-schedule-items | List payment schedule items |
| ObjectQueriesApi | QueryPaymentSchedules | GET /object-query/payment-schedules | List payment schedules |
| ObjectQueriesApi | QueryPayments | GET /object-query/payments | List payments |
| ObjectQueriesApi | QueryPrepaidBalanceByKey | GET /object-query/prepaid-balances/{key} | Retrieve a prepaid balance |
| ObjectQueriesApi | QueryPrepaidBalanceFundByKey | GET /object-query/prepaid-balance-funds/{key} | Retrieve a prepaid balance fund |
| ObjectQueriesApi | QueryPrepaidBalanceFunds | GET /object-query/prepaid-balance-funds | List prepaid balance funds |
| ObjectQueriesApi | QueryPrepaidBalanceTransactionByKey | GET /object-query/prepaid-balance-transactions/{key} | Retrieve a prepaid balance transaction |
| ObjectQueriesApi | QueryPrepaidBalanceTransactions | GET /object-query/prepaid-balance-transactions | List prepaid balance transactions |
| ObjectQueriesApi | QueryPrepaidBalances | GET /object-query/prepaid-balances | List prepaid balances |
| ObjectQueriesApi | QueryProcessedUsageByKey | GET /object-query/processed-usages/{key} | Retrieve a processed usage record |
| ObjectQueriesApi | QueryProcessedUsages | GET /object-query/processed-usages | List processed usage records |
| ObjectQueriesApi | QueryProductByKey | GET /object-query/products/{key} | Retrieve a product |
| ObjectQueriesApi | QueryProductRatePlanByKey | GET /object-query/product-rate-plans/{key} | Retrieve a product rate plan |
| ObjectQueriesApi | QueryProductRatePlanChargeByKey | GET /object-query/product-rate-plan-charges/{key} | Retrieve a product rate plan charge |
| ObjectQueriesApi | QueryProductRatePlanChargeTierByKey | GET /object-query/product-rate-plan-charge-tiers/{key} | Retrieve a product rate plan charge tier |
| ObjectQueriesApi | QueryProductRatePlanChargeTiers | GET /object-query/product-rate-plan-charge-tiers | List product rate plan charge tiers |
| ObjectQueriesApi | QueryProductRatePlanCharges | GET /object-query/product-rate-plan-charges | List product rate plan charges |
| ObjectQueriesApi | QueryProductRatePlans | GET /object-query/product-rate-plans | List product rate plans |
| ObjectQueriesApi | QueryProducts | GET /object-query/products | List products |
| ObjectQueriesApi | QueryRatePlanByKey | GET /object-query/rate-plans/{key} | Retrieve a rate plan |
| ObjectQueriesApi | QueryRatePlanChargeByKey | GET /object-query/rate-plan-charges/{key} | Retrieve a rate plan charge |
| ObjectQueriesApi | QueryRatePlanChargeTierByKey | GET /object-query/rate-plan-charge-tiers/{key} | Retrieve a rate plan charge tier |
| ObjectQueriesApi | QueryRatePlanChargeTiers | GET /object-query/rate-plan-charge-tiers | List rate plan charge tiers |
| ObjectQueriesApi | QueryRatePlanCharges | GET /object-query/rate-plan-charges | List rate plan charges |
| ObjectQueriesApi | QueryRatePlans | GET /object-query/rate-plans | List rate plans |
| ObjectQueriesApi | QueryRatingDetailByKey | GET /object-query/rating-details/{key} | Retrieve a rating detail |
| ObjectQueriesApi | QueryRatingDetails | GET /object-query/rating-details | List rating details |
| ObjectQueriesApi | QueryRatingResultByKey | GET /object-query/rating-results/{key} | Retrieve a rating result |
| ObjectQueriesApi | QueryRatingResults | GET /object-query/rating-results | List rating results |
| ObjectQueriesApi | QueryRefundApplicationByKey | GET /object-query/refund-applications/{key} | Retrieve a refund application |
| ObjectQueriesApi | QueryRefundApplicationItemByKey | GET /object-query/refund-application-items/{key} | Retrieve a refund application item |
| ObjectQueriesApi | QueryRefundApplicationItems | GET /object-query/refund-application-items | List refund application items |
| ObjectQueriesApi | QueryRefundApplications | GET /object-query/refund-applications | List refund applications |
| ObjectQueriesApi | QueryRefundByKey | GET /object-query/refunds/{key} | Retrieve a refund |
| ObjectQueriesApi | QueryRefunds | GET /object-query/refunds | List refunds |
| ObjectQueriesApi | QuerySubscriptionByKey | GET /object-query/subscriptions/{key} | Retrieve a subscription |
| ObjectQueriesApi | QuerySubscriptions | GET /object-query/subscriptions | List subscriptions |
| ObjectQueriesApi | QuerySummaryStatementByKey | GET /object-query/summarystatements/{key} | Retrieve a summary statement |
| ObjectQueriesApi | QuerySummaryStatementRunByKey | GET /object-query/summarystatementruns/{key} | Retrieve a summary statement run |
| ObjectQueriesApi | QuerySummaryStatementRuns | GET /object-query/summarystatementruns | List summary statement runs |
| ObjectQueriesApi | QuerySummaryStatements | GET /object-query/summarystatements | List summary statements |
| ObjectQueriesApi | QueryTaxationItemByKey | GET /object-query/taxation-items/{key} | Retrieve a taxation item |
| ObjectQueriesApi | QueryTaxationItems | GET /object-query/taxation-items | List taxation items |
| ObjectQueriesApi | QueryUsageByKey | GET /object-query/usages/{key} | Retrieve a usage record |
| ObjectQueriesApi | QueryUsages | GET /object-query/usages | List usage records |
| ObjectQueriesApi | QueryValidityPeriodSummaryByKey | GET /object-query/validity-period-summaries/{key} | Retrieve a validity period summary |
| ObjectQueriesApi | QueryValidityPeriodSummarys | GET /object-query/validity-period-summaries | List validity period summaries |
| OmniChannelSubscriptionsApi | CreateOmniChannelSubscription | POST /v1/omni-channel-subscriptions | Create an omnichannel subscription |
| OmniChannelSubscriptionsApi | DeleteOmniChannelSubscription | DELETE /v1/omni-channel-subscriptions/{subscriptionKey} | Delete an omnichannel subscription |
| OmniChannelSubscriptionsApi | GetOmniChannelSubscription | GET /v1/omni-channel-subscriptions/{subscriptionKey} | Retrieve an omnichannel subscription |
| OperationsApi | CreateBillingPreview | POST /v1/operations/billing-preview | Generate a billing preview |
| OperationsApi | CreateBulkPDFToZIPGeneration | POST /v1/operations/bulk-pdf | Export bulk PDF files |
| OperationsApi | CreateInvoiceCollect | POST /v1/operations/invoice-collect | Invoice and collect |
| OperationsApi | GetBulkPDFToZIPGeneration | GET /v1/operations/bulk-pdf/{jobId} | Retrieve information of a bulk PDF file generation job |
| OperationsApi | GetOperationJob | GET /v1/operations/jobs/{jobId} | Retrieve an operation job |
| OrderActionsApi | UpdateOrderAction | PUT /v1/orderActions/{id} | Update an order action |
| OrderLineItemsApi | GetOrderLineItem | GET /v1/order-line-items/{itemId} | Retrieve an order line item |
| OrderLineItemsApi | UpdateOrderLineItem | PUT /v1/order-line-items/{itemId} | Update an order line item |
| OrderLineItemsApi | UpdateOrderLineItems | POST /v1/order-line-items/bulk | Update order line items |
| OrdersApi | ActivateOrder | PUT /v1/orders/{orderNumber}/activate | Activate an order |
| OrdersApi | CancelOrder | PUT /v1/orders/{orderNumber}/cancel | Cancel an order |
| OrdersApi | CreateOrder | POST /v1/orders | Create an order |
| OrdersApi | CreateOrderAsynchronously | POST /v1/async/orders | Create an order asynchronously |
| OrdersApi | DeleteOrder | DELETE /v1/orders/{orderNumber} | Delete an order |
| OrdersApi | DeleteOrderAsynchronously | DELETE /v1/async/orders/{orderNumber} | Async Delete an order |
| OrdersApi | GetJobStatusAndResponse | GET /v1/async-jobs/{jobId} | Retrieve the status and response of a job |
| OrdersApi | GetOrder | GET /v1/orders/{orderNumber} | Retrieve an order |
| OrdersApi | GetOrders | GET /v1/orders | List orders |
| OrdersApi | GetOrdersByInvoiceOwner | GET /v1/orders/invoiceOwner/{accountNumber} | List orders of an invoice owner |
| OrdersApi | GetOrdersBySubscriptionNumber | GET /v1/orders/subscription/{subscriptionNumber} | List orders by subscription number |
| OrdersApi | GetOrdersBySubscriptionOwner | GET /v1/orders/subscriptionOwner/{accountNumber} | List orders of a subscription owner |
| OrdersApi | GetPendingOrdersBySubscriptionNumber | GET /v1/orders/subscription/{subscription-key}/pending | List pending orders by subscription number |
| OrdersApi | PreviewOrder | POST /v1/orders/preview | Preview an order |
| OrdersApi | PreviewOrderAsynchronously | POST /v1/async/orders/preview | Preview an order asynchronously |
| OrdersApi | RevertOrder | POST /v1/orders/{orderNumber}/revert | Revert an order |
| OrdersApi | UpdateOrder | PUT /v1/orders/{orderNumber} | Update an order |
| OrdersApi | UpdateOrderCustomFields | PUT /v1/orders/{orderNumber}/customFields | Update order custom fields |
| OrdersApi | UpdateOrderTriggerDates | PUT /v1/orders/{orderNumber}/triggerDates | Update order action trigger dates |
| OrdersApi | UpdateSubscriptionCustomFields | PUT /v1/subscriptions/{subscriptionNumber}/customFields | Update subscription custom fields |
| PaymentAuthorizationApi | CancelAuthorization | POST /v1/payment-methods/{payment-method-id}/voidAuthorize | Cancel authorization |
| PaymentAuthorizationApi | CreateAuthorization | POST /v1/payment-methods/{payment-method-id}/authorize | Create authorization |
| PaymentGatewayReconciliationApi | ReconcileRefund | POST /v1/refunds/{refund-key}/reconcile | Reconcile a refund |
| PaymentGatewayReconciliationApi | RejectPayment | POST /v1/gateway-settlement/payments/{payment-key}/reject | Reject a payment |
| PaymentGatewayReconciliationApi | ReversePayment | POST /v1/gateway-settlement/payments/{payment-key}/chargeback | Reverse a payment |
| PaymentGatewayReconciliationApi | SettlePayment | POST /v1/gateway-settlement/payments/{payment-key}/settle | Settle a payment |
| PaymentGatewaysApi | CreatePredebitNotification | POST /v1/payment-gateways/pre-debit-notification | Trigger a pre-debit notification |
| PaymentGatewaysApi | GetPaymentGateways | GET /v1/payment-gateways | List all payment gateways |
| PaymentMethodSnapshotsApi | GetPaymentMethodSnapshot | GET /v1/object/payment-method-snapshot/{id} | CRUD: Retrieve a payment method snapshot |
| PaymentMethodTransactionLogsApi | GetPaymentMethodTransactionLog | GET /v1/object/payment-method-transaction-log/{id} | CRUD: Retrieve a payment method transaction log |
| PaymentMethodUpdaterApi | CreatePaymentMethodUpdaterBatch | POST /v1/payment-method-updaters/batches | Create a Payment Method Updater batch asynchronously |
| PaymentMethodUpdaterApi | GetPaymentMethodUpdaterInstances | GET /v1/payment-method-updaters | List Payment Method Updater instances |
| PaymentMethodsApi | CancelStoredCredentialProfile | POST /v1/payment-methods/{payment-method-id}/profiles/{profile-number}/cancel | Cancel a stored credential profile |
| PaymentMethodsApi | CreatePaymentMethod | POST /v1/payment-methods | Create a payment method |
| PaymentMethodsApi | CreatePaymentSession | POST /web-payments/sessions | Create a payment session |
| PaymentMethodsApi | CreateStoredCredentialProfile | POST /v1/payment-methods/{payment-method-id}/profiles | Create a stored credential profile |
| PaymentMethodsApi | DecryptPaymentMethod | POST /v1/payment-methods/decryption | Create an Apple Pay payment method |
| PaymentMethodsApi | DeletePaymentMethod | DELETE /v1/payment-methods/{payment-method-id} | Delete a payment method |
| PaymentMethodsApi | ExpireStoredCredentialProfile | POST /v1/payment-methods/{payment-method-id}/profiles/{profile-number}/expire | Expire a stored credential profile |
| PaymentMethodsApi | GetPaymentMethod | GET /v1/payment-methods/{payment-method-id} | Retrieve a payment method |
| PaymentMethodsApi | GetStoredCredentialProfiles | GET /v1/payment-methods/{payment-method-id}/profiles | List stored credential profiles of a payment method |
| PaymentMethodsApi | ScrubPaymentMethod | PUT /v1/payment-methods/{payment-method-id}/scrub | Scrub a payment method |
| PaymentMethodsApi | UpdatePaymentMethod | PUT /v1/payment-methods/{payment-method-id} | Update a payment method |
| PaymentMethodsApi | VerifyPaymentMethod | PUT /v1/payment-methods/{payment-method-id}/verify | Verify a payment method |
| PaymentRunsApi | CreatePaymentRun | POST /v1/payment-runs | Create a payment run |
| PaymentRunsApi | DeletePaymentRun | DELETE /v1/payment-runs/{paymentRunKey} | Delete a payment run |
| PaymentRunsApi | GetPaymentRun | GET /v1/payment-runs/{paymentRunKey} | Retrieve a payment run |
| PaymentRunsApi | GetPaymentRunData | GET /v1/payment-runs/{paymentRunKey}/data | Retrieve payment run data |
| PaymentRunsApi | GetPaymentRunSummary | GET /v1/payment-runs/{paymentRunKey}/summary | Retrieve a payment run summary |
| PaymentRunsApi | GetPaymentRuns | GET /v1/payment-runs | List payment runs |
| PaymentRunsApi | UpdatePaymentRun | PUT /v1/payment-runs/{paymentRunKey} | Update a payment run |
| PaymentSchedulesApi | AddItemsToCustomPaymentSchedule | POST /v1/payment-schedules/{paymentScheduleKey}/items | Add payment schedule items to a custom payment schedule |
| PaymentSchedulesApi | CancelPaymentSchedule | PUT /v1/payment-schedules/{paymentScheduleKey}/cancel | Cancel a payment schedule |
| PaymentSchedulesApi | CancelPaymentScheduleItem | PUT /v1/payment-schedule-items/{item-id}/cancel | Cancel a payment schedule item |
| PaymentSchedulesApi | CreatePaymentSchedule | POST /v1/payment-schedules | Create a payment schedule |
| PaymentSchedulesApi | CreatePaymentSchedules | POST /v1/payment-schedules/batch | Create multiple payment schedules at once |
| PaymentSchedulesApi | GetPaymentSchedule | GET /v1/payment-schedules/{paymentScheduleKey} | Retrieve a payment schedule |
| PaymentSchedulesApi | GetPaymentScheduleItem | GET /v1/payment-schedule-items/{item-id} | Retrieve a payment schedule item |
| PaymentSchedulesApi | GetPaymentScheduleStatistic | GET /v1/payment-schedules/statistics/{yyyy-mm-dd} | Retrieve payment schedule statistic of a date |
| PaymentSchedulesApi | GetPaymentSchedules | GET /v1/payment-schedules | List payment schedules by customer account |
| PaymentSchedulesApi | RetryPaymentScheduleItem | POST /v1/payment-schedule-items/retry-payment | Retry failed payment schedule items |
| PaymentSchedulesApi | SkipPaymentScheduleItem | PUT /v1/payment-schedule-items/{item-id}/skip | Skip a payment schedule item |
| PaymentSchedulesApi | UpdatePaymentSchedule | PUT /v1/payment-schedules/{paymentScheduleKey} | Update a payment schedule |
| PaymentSchedulesApi | UpdatePaymentScheduleItem | PUT /v1/payment-schedule-items/{item-id} | Update a payment schedule item |
| PaymentSchedulesApi | UpdatePaymentSchedulePreview | PUT /v1/payment-schedules/{paymentScheduleKey}/preview | Preview the result of payment schedule updates |
| PaymentTransactionLogsApi | GetPaymentTransactionLog | GET /v1/object/payment-transaction-log/{id} | CRUD: Retrieve a payment transaction log |
| PaymentsApi | ApplyPayment | PUT /v1/payments/{paymentKey}/apply | Apply a payment |
| PaymentsApi | CancelPayment | PUT /v1/payments/{paymentKey}/cancel | Cancel a payment |
| PaymentsApi | CreatePayment | POST /v1/payments | Create a payment |
| PaymentsApi | CreateRefundPayment | POST /v1/payments/{paymentKey}/refunds | Refund a payment |
| PaymentsApi | DeletePayment | DELETE /v1/payments/{paymentKey} | Delete a payment |
| PaymentsApi | GetPayment | GET /v1/payments/{paymentKey} | Retrieve a payment |
| PaymentsApi | GetPaymentItemPart | GET /v1/payments/{paymentKey}/parts/{partId}/item-parts/{itemPartId} | Retrieve a payment part item |
| PaymentsApi | GetPaymentItemParts | GET /v1/payments/{paymentKey}/parts/{partId}/item-parts | List all payment part items |
| PaymentsApi | GetPaymentPart | GET /v1/payments/{paymentKey}/parts/{partId} | Retrieve a payment part |
| PaymentsApi | GetPaymentParts | GET /v1/payments/{paymentKey}/parts | List all parts of a payment |
| PaymentsApi | GetRetrieveAllPayments | GET /v1/payments | List payments |
| PaymentsApi | RefundPaymentwithAutoUnapply | POST /v1/payments/{paymentKey}/refunds/unapply | Refund a payment with auto-unapplying |
| PaymentsApi | TransferPayment | PUT /v1/payments/{paymentKey}/transfer | Transfer a payment |
| PaymentsApi | UnapplyPayment | PUT /v1/payments/{paymentKey}/unapply | Unapply a payment |
| PaymentsApi | UpdatePayment | PUT /v1/payments/{paymentId} | Update a payment |
| ProductRatePlanChargeTiersApi | GetProductRatePlanChargeTier | GET /v1/object/product-rate-plan-charge-tier/{id} | CRUD: Retrieve a product rate plan charge tier |
| ProductRatePlanChargeTiersApi | UpdateProductRatePlanChargeTier | PUT /v1/object/product-rate-plan-charge-tier/{id} | CRUD: Update a product rate plan charge tier |
| ProductRatePlanChargesApi | CreateProductRatePlanCharge | POST /v1/object/product-rate-plan-charge | CRUD: Create a product rate plan charge |
| ProductRatePlanChargesApi | DeleteProductRatePlanCharge | DELETE /v1/object/product-rate-plan-charge/{id} | CRUD: Delete a product rate plan charge |
| ProductRatePlanChargesApi | GetProductRatePlanCharge | GET /v1/object/product-rate-plan-charge/{id} | CRUD: Retrieve a product rate plan charge |
| ProductRatePlanChargesApi | UpdateProductRatePlanCharge | PUT /v1/object/product-rate-plan-charge/{id} | CRUD: Update a product rate plan charge |
| ProductRatePlanChargesApi | UpdateProductRatePlanChargeFinanceInformation | PUT /v1/product-rate-plan-charges/{product-rate-plan-charge-key}/finance-information | Update a Zuora Revenue accounting code |
| ProductRatePlansApi | CreateProductRatePlan | POST /v1/object/product-rate-plan | CRUD: Create a product rate plan |
| ProductRatePlansApi | DeleteProductRatePlan | DELETE /v1/object/product-rate-plan/{id} | CRUD: Delete a product rate plan |
| ProductRatePlansApi | GetProductRatePlan | GET /v1/product-rate-plans/{id} | Retrieve a product rate plan by ID |
| ProductRatePlansApi | GetProductRatePlansByExternalID | GET /v1/product-rate-plans/external-id/{externalId} | List product rate plans by external ID |
| ProductRatePlansApi | GetRatePlansByProduct | GET /v1/rateplan/{product-key}/productRatePlan | List all product rate plans of a product |
| ProductRatePlansApi | UpdateProductRatePlan | PUT /v1/object/product-rate-plan/{id} | CRUD: Update a product rate plan |
| ProductsApi | CreateProduct | POST /v1/object/product | Create a product |
| ProductsApi | DeleteProduct | DELETE /v1/object/product/{id} | CRUD: Delete a product |
| ProductsApi | GetProduct | GET /v1/catalog/product/{product-key} | Retrieve a product |
| ProductsApi | GetProducts | GET /v1/catalog/products | Get all products |
| ProductsApi | UpdateProduct | PUT /v1/object/product/{id} | CRUD: Update a product |
| RSASignaturesApi | CreateRSASignature | POST /v1/rsa-signatures | Generate an RSA signature |
| RSASignaturesApi | DecryptRSASignature | POST /v1/rsa-signatures/decrypt | Decrypt an RSA signature |
| RampsApi | GetRampByNumber | GET /v1/ramps/{rampNumber} | Retrieve a ramp |
| RampsApi | GetRampMetricsByNumber | GET /v1/ramps/{rampNumber}/ramp-metrics | List all ramp metrics of a ramp |
| RampsApi | GetRampMetricsByOrderNumber | GET /v1/orders/{orderNumber}/ramp-metrics | List ramp metrics by order number |
| RampsApi | GetRampMetricsBySubscriptionKey | GET /v1/subscriptions/{subscriptionKey}/ramp-metrics | List ramp metrics by subscription key |
| RampsApi | GetRampsBySubscriptionKey | GET /v1/subscriptions/{subscriptionKey}/ramps | Retrieve a ramp by subscription key |
| RatePlansApi | GetRatePlan | GET /v1/rateplans/{ratePlanId} | Retrieve a rate plan |
| RefundsApi | CancelRefund | PUT /v1/refunds/{refundKey}/cancel | Cancel a refund |
| RefundsApi | DeleteRefund | DELETE /v1/refunds/{refundKey} | Delete a refund |
| RefundsApi | GetRefund | GET /v1/refunds/{refundKey} | Retrieve a refund |
| RefundsApi | GetRefundItemPart | GET /v1/refunds/{refundKey}/parts/{refundPartId}/item-parts/{itemPartId} | Retrieve a refund part item |
| RefundsApi | GetRefundItemParts | GET /v1/refunds/{refundKey}/parts/{refundPartId}/item-parts | List all refund part items |
| RefundsApi | GetRefundPart | GET /v1/refunds/{refundKey}/parts/{refundPartId} | Retrieve a refund part |
| RefundsApi | GetRefundParts | GET /v1/refunds/{refundKey}/parts | List all parts of a refund |
| RefundsApi | GetRefunds | GET /v1/refunds | List refunds |
| RefundsApi | UpdateRefund | PUT /v1/refunds/{refundId} | Update a refund |
| RegenerateApi | POSTCreateRevRecEvents | POST /v1/uno-regenerate/rev-rec-events | Regenerate Rev Rec Event |
| RegenerateApi | POSTGenerateRevRecEventsForDailyConsumption | POST /v1/uno-regenerate/rev-rec-events/daily-consumption | Regenerate Rev Rec Event |
| RegenerateApi | POSTRegenerateBillingTransaction | POST /v1/uno-regenerate/billing-transaction | Regenerate Billing Transaction |
| RegenerateApi | POSTRegenerateBookingTransaction | POST /v1/uno-regenerate/booking-transaction | Regenerate Booking Transaction |
| RevenueAccountingCodesApi | PutRevProAccountingCodes | PUT /v1/revpro-accounting-codes | Update a Zuora Revenue accounting code |
| RevenueIntegrationApi | DescribeViewColumns | GET /integration/v2/biviews/{view_name}/describe-columns |  |
| RevenueIntegrationApi | DownloadReport | GET /integration/v1/reports/download/{filename} |  |
| RevenueIntegrationApi | GenerateJWTToken | POST /integration/v1/authenticate |  |
| RevenueIntegrationApi | GetBIViewCount | GET /integration/v2/biviews/count/{view_name} |  |
| RevenueIntegrationApi | GetBIViewStatus | GET /integration/v2/biviews-status |  |
| RevenueIntegrationApi | GetBIViewTaskDetails | GET /integration/v2/biviews-status/{task_id} |  |
| RevenueIntegrationApi | GetBIViews | GET /integration/v1/biviews/{view_name} |  |
| RevenueIntegrationApi | GetBIViewsV2 | GET /integration/v2/biviews/{view_name} |  |
| RevenueIntegrationApi | GetCsvUploadStatus | GET /integration/v1/csv/upload/status |  |
| RevenueIntegrationApi | GetFileUploadStatusByRequestId | GET /integration/v1/fileupload/status/{file_request_id} |  |
| RevenueIntegrationApi | GetReportsById | GET /integration/v1/reports/{report_id} |  |
| RevenueIntegrationApi | GetStageError | GET /integration/v1/stage/error/{errortype} |  |
| RevenueIntegrationApi | IntegrationV2ReportsSignedurlReportIdGet | GET /integration/v2/reports/signedurl/{report_id} |  |
| RevenueIntegrationApi | ListReports | GET /integration/v1/reports/list |  |
| RevenueIntegrationApi | SelectBIView | POST /integration/v1/biviews/{view_name} |  |
| RevenueIntegrationApi | UploadCsv | POST /integration/v1/csv/upload |  |
| RevenueIntegrationApi | UploadFile | POST /integration/v1/upload/file |  |
| RevenueIntegrationApi | UploadMapping | POST /integration/v1/upload/mapping |  |
| SequenceSetsApi | CreateSequenceSets | POST /v1/sequence-sets | Create sequence sets |
| SequenceSetsApi | DeleteSequenceSet | DELETE /v1/sequence-sets/{id} | Delete a sequence set |
| SequenceSetsApi | GetSequenceSet | GET /v1/sequence-sets/{id} | Retrieve a sequence set |
| SequenceSetsApi | GetSequenceSets | GET /v1/sequence-sets | List sequence sets |
| SequenceSetsApi | UpdateSequenceSet | PUT /v1/sequence-sets/{id} | Update a sequence set |
| SettingsApi | GetListAllSettings | GET /settings/listing | List all settings |
| SettingsApi | PostProcessSettingsBatchRequest | POST /settings/batch-requests | Submit settings requests |
| SignUpApi | PostSignUp | POST /v1/sign-up | Sign up |
| SubscriptionChangeLogsApi | GetSubscriptionChangeLogsByOrderNumber | GET /subscription-change-logs/orders/{orderNumber} | Retrieve change logs for a subscription |
| SubscriptionChangeLogsApi | GetSubscriptionChangeLogsBySubscriptionNumber | GET /subscription-change-logs/{subscriptionNumber} | Retrieve change logs for a subscription |
| SubscriptionChangeLogsApi | GetSubscriptionChangeLogsBySubscriptionNumberAndVersion | GET /subscription-change-logs/{subscriptionNumber}/versions/{version} | Retrieve change logs for a subscription |
| SubscriptionsApi | CancelSubscription | PUT /v1/subscriptions/{subscription-key}/cancel | Cancel a subscription |
| SubscriptionsApi | CreateSubscription | POST /v1/subscriptions | Create a subscription |
| SubscriptionsApi | DeleteSubscription | PUT /v1/subscriptions/{subscription-key}/delete | Delete a subscription by number |
| SubscriptionsApi | GetMetricsBySubscriptionNumbers | GET /v1/subscriptions/subscription-metrics | List subscriptions metrics by subscription numbers |
| SubscriptionsApi | GetSubscriptionByKey | GET /v1/subscriptions/{subscription-key} | Retrieve a subscription by key |
| SubscriptionsApi | GetSubscriptionByKeyAndVersion | GET /v1/subscriptions/{subscription-key}/versions/{version} | Retrieve a subscription by key and version |
| SubscriptionsApi | GetSubscriptionsByAccount | GET /v1/subscriptions/accounts/{account-key} | List subscriptions by account key |
| SubscriptionsApi | PreviewExistingSubscription | POST /v1/subscriptions/{subscription-key}/preview | Preview a subscription by key |
| SubscriptionsApi | PreviewSubscription | POST /v1/subscriptions/preview | Preview a subscription |
| SubscriptionsApi | RenewSubscription | PUT /v1/subscriptions/{subscription-key}/renew | Renew a subscription |
| SubscriptionsApi | ResumeSubscription | PUT /v1/subscriptions/{subscription-key}/resume | Resume a subscription |
| SubscriptionsApi | SuspendSubscription | PUT /v1/subscriptions/{subscription-key}/suspend | Suspend a subscription |
| SubscriptionsApi | UpdateSubscription | PUT /v1/subscriptions/{subscription-key} | Update a subscription |
| SubscriptionsApi | UpdateSubscriptionCustomFieldsOfASpecifiedVersion | PUT /v1/subscriptions/{subscriptionNumber}/versions/{version}/customFields | Update subscription custom fields of a subscription version |
| SummaryJournalEntriesApi | CancelSummaryJournalEntry | PUT /v1/journal-entries/{je-number}/cancel | Cancel a summary journal entry |
| SummaryJournalEntriesApi | CreateSummaryJournalEntry | POST /v1/journal-entries | Create a summary journal entry |
| SummaryJournalEntriesApi | DeleteSummaryJournalEntry | DELETE /v1/journal-entries/{je-number} | Delete a summary journal entry |
| SummaryJournalEntriesApi | GetAllSummaryJournalEntries | GET /v1/journal-entries/journal-runs/{jr-number} | List all summary journal entries in a journal run |
| SummaryJournalEntriesApi | GetSummaryJournalEntry | GET /v1/journal-entries/{je-number} | Retrieve a summary journal entry |
| SummaryJournalEntriesApi | UpdateBasicSummaryJournalEntry | PUT /v1/journal-entries/{je-number}/basic-information | Update a summary journal entry |
| TaxationItemsApi | CreateTaxationItem | POST /v1/object/taxation-item | CRUD: Create a taxation item |
| TaxationItemsApi | DeleteTaxationItem | DELETE /v1/taxation-items/{id} | Delete a taxation item |
| TaxationItemsApi | GetTaxationItem | GET /v1/taxation-items/{id} | Retrieve a taxation item |
| TaxationItemsApi | PutTaxationItem | PUT /v1/taxation-items/{id} | Update a taxation item |
| UsageApi | CreateUsage | POST /v1/object/usage | CRUD: Create a usage record |
| UsageApi | DeleteUsage | DELETE /v1/object/usage/{id} | CRUD: Delete a usage record |
| UsageApi | GetUsage | GET /v1/object/usage/{id} | CRUD: Retrieve a usage record |
| UsageApi | GetUsageRateDetailByInvoiceItem | GET /v1/invoices/invoice-item/{invoice-item-id}/usage-rate-detail | Retrieve usage rate detail for an invoice item |
| UsageApi | GetUsagesByAccount | GET /v1/usage/accounts/{account-key} | Retrieve usage records by account |
| UsageApi | UpdateUsage | PUT /v1/object/usage/{id} | CRUD: Update a usage record |
| UsageApi | UploadUsageFile | POST /v1/usage | Upload a usage file |
| WorkflowsApi | DeleteWorkflow | DELETE /workflows/{workflow_id} | Delete a workflow |
| WorkflowsApi | DeleteWorkflowVersion | DELETE /workflows/versions/{version_id} | Delete a workflow version |
| WorkflowsApi | GetWorkflow | GET /workflows/{workflow_id} | Retrieve a workflow |
| WorkflowsApi | GetWorkflowExport | GET /workflows/{workflow_id}/export | Export a workflow version |
| WorkflowsApi | GetWorkflowRun | GET /workflows/workflow_runs/{workflow_run_id} | Retrieve a workflow run |
| WorkflowsApi | GetWorkflowVersions | GET /workflows/{workflow_id}/versions | List all versions of a workflow definition |
| WorkflowsApi | GetWorkflows | GET /workflows | List workflows |
| WorkflowsApi | GetWorkflowsTask | GET /workflows/tasks/{task_id} | Retrieve a workflow task |
| WorkflowsApi | GetWorkflowsTasks | GET /workflows/tasks | List workflow tasks |
| WorkflowsApi | GetWorkflowsUsages | GET /workflows/metrics.json | Retrieve workflow task usage |
| WorkflowsApi | PATCHUpdateWorkflow | PATCH /workflows/{workflow_id} | Update a workflow |
| WorkflowsApi | PostRunWorkflow | POST /workflows/{workflow_id}/run | Run a workflow |
| WorkflowsApi | PostWorkflowImport | POST /workflows/import | Import a workflow |
| WorkflowsApi | PostWorkflowVersionsImport | POST /workflows/{workflow_id}/versions/import | Import a workflow version |
| WorkflowsApi | PostWorkflowsTaskRerun | POST /workflows/tasks/{task_id}/rerun | Rerun a workflow task |
| WorkflowsApi | PutWorkflowsTasksUpdate | PUT /workflows/tasks/batch_update | Update workflow tasks |
