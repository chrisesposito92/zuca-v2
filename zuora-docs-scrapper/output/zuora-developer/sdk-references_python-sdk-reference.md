---
title: "Python client library reference"
url: "https://developer.zuora.com/sdk-references/python-sdk-reference/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:59.722Z"
---

#

Python client library reference

The latest Python client library version is **3.13.0**.

##

Requirements

-   **Python** : 3.9+
-   **Pydantic** : 2.6+

##

Installation

See [Zuora Client Libraries](https://developer.zuora.com/docs/guides/libraries/).

##

Classes and methods

The following table summarizes all available classes and methods for the Zuora Python client library.

| Class | Method | HTTP request | Description |
| --- | --- | --- | --- |
| APIHealthApi | get_system_health_api_volume_summary | GET /system-health/api-requests/volume-summary | List API volume summary records |
| AccountingCodesApi | activate_accounting_code | PUT /v1/accounting-codes/{ac-id}/activate | Activate an accounting code |
| AccountingCodesApi | create_accounting_code | POST /v1/accounting-codes | Create an accounting code |
| AccountingCodesApi | deactivate_accounting_code | PUT /v1/accounting-codes/{ac-id}/deactivate | Deactivate an accounting code |
| AccountingCodesApi | delete_accounting_code | DELETE /v1/accounting-codes/{ac-id} | Delete an accounting code |
| AccountingCodesApi | get_accounting_code | GET /v1/accounting-codes/{ac-id} | Retrieve an accounting code |
| AccountingCodesApi | get_all_accounting_codes | GET /v1/accounting-codes | List all accounting codes |
| AccountingCodesApi | update_accounting_code | PUT /v1/accounting-codes/{ac-id} | Update an accounting code |
| AccountingPeriodsApi | close_accounting_period | PUT /v1/accounting-periods/{ap-id}/close | Close an accounting period |
| AccountingPeriodsApi | create_accounting_period | POST /v1/accounting-periods | Create an accounting period |
| AccountingPeriodsApi | delete_accounting_period | DELETE /v1/accounting-periods/{ap-id} | Delete an accounting period |
| AccountingPeriodsApi | get_accounting_period | GET /v1/accounting-periods/{ap-id} | Retrieve an accounting period |
| AccountingPeriodsApi | get_all_accounting_periods | GET /v1/accounting-periods | List all accounting periods |
| AccountingPeriodsApi | pending_close_accounting_period | PUT /v1/accounting-periods/{ap-id}/pending-close | Set an accounting period to pending close |
| AccountingPeriodsApi | reopen_accounting_period | PUT /v1/accounting-periods/{ap-id}/reopen | Reopen an accounting period |
| AccountingPeriodsApi | run_trial_balance | PUT /v1/accounting-periods/{ap-id}/run-trial-balance | Run trial balance |
| AccountingPeriodsApi | update_accounting_period | PUT /v1/accounting-periods/{ap-id} | Update an accounting period |
| AccountsApi | create_account | POST /v1/accounts | Create an account |
| AccountsApi | delete_account | DELETE /v1/accounts/{account-key} | Delete an account |
| AccountsApi | get_account | GET /v1/accounts/{account-key} | Retrieve an account |
| AccountsApi | get_account_default_payment_method | GET /v1/accounts/{account-key}/payment-methods/default | Retrieve the default payment method of an account |
| AccountsApi | get_account_payment_methods | GET /v1/accounts/{account-key}/payment-methods | List payment methods of an account |
| AccountsApi | get_account_summary | GET /v1/accounts/{account-key}/summary | Retrieve an account summary |
| AccountsApi | update_account | PUT /v1/accounts/{account-key} | Update an account |
| ActionsApi | action_post_create | POST /v1/action/create | Create |
| ActionsApi | action_post_delete | POST /v1/action/delete | Delete |
| ActionsApi | action_post_query | POST /v1/action/query | Query |
| ActionsApi | action_postquery_more | POST /v1/action/queryMore | QueryMore |
| ActionsApi | action_postupdate | POST /v1/action/update | Update |
| AdjustmentsApi | cancel_billing_adjustment | PUT /v1/adjustments/{adjustmentId}/cancel | Cancel an adjustment |
| AdjustmentsApi | create_billing_adjustment | POST /v1/adjustments | Create an adjustment |
| AdjustmentsApi | get_billing_adjustment | GET /v1/adjustments/{adjustment-key} | Retrieve an adjustment |
| AdjustmentsApi | get_subscription_adjustments | GET /v1/adjustments | List all adjustments of the latest version subscription |
| AdjustmentsApi | preview_billing_adjustment | POST /v1/adjustments/preview | Preview an adjustment |
| AggregateQueriesApi | create_batch_query | POST /v1/batch-query/ | Submit an aggregate query job |
| AggregateQueriesApi | delete_batch_query_job | DELETE /v1/batch-query/jobs/{jobid} | Cancel a running aggregate query job |
| AggregateQueriesApi | get_batch_query_job | GET /v1/batch-query/jobs/{jobid} | Retrieve an aggregate query job |
| AttachmentsApi | delete_attachments | DELETE /v1/attachments/{attachment-id} | Delete an attachment |
| AttachmentsApi | get_attachments | GET /v1/attachments/{attachment-id} | Retrieve an attachment |
| AttachmentsApi | get_attachments_list | GET /v1/attachments/{object-type}/{object-key} | List attachments by object type and key |
| AttachmentsApi | post_attachments | POST /v1/attachments | Create an attachment |
| AttachmentsApi | put_attachments | PUT /v1/attachments/{attachment-id} | Update an attachment |
| BillRunApi | cancel_bill_run | PUT /v1/bill-runs/{billRunId}/cancel | Cancel a bill run |
| BillRunApi | create_bill_run | POST /v1/bill-runs | Create a bill run |
| BillRunApi | delete_bill_run | DELETE /v1/bill-runs/{billRunId} | Delete a bill run |
| BillRunApi | email_bill_run | POST /v1/bill-runs/{billRunKey}/emails | Email billing documents generated from a bill run |
| BillRunApi | get_bill_run | GET /v1/bill-runs/{billRunId} | Retrieve a bill run |
| BillRunApi | post_bill_run | PUT /v1/bill-runs/{billRunId}/post | Post a bill run |
| BillRunHealthApi | get_system_health_billing_doc_volume_summary | GET /system-health/billing-documents/volume-summary | List billing document volume summary records |
| BillingDocumentsApi | create_billing_document_files_deletion_job | POST /v1/accounts/billing-documents/files/deletion-jobs | Create a job to hard delete billing document files |
| BillingDocumentsApi | generate_billing_documents | POST /v1/accounts/{key}/billing-documents/generate | Generate billing documents by account ID |
| BillingDocumentsApi | get_billing_document_files_deletion_job | GET /v1/accounts/billing-documents/files/deletion-jobs/{jobId} | Retrieve a job of hard deleting billing document files |
| BillingDocumentsApi | get_billing_documents | GET /v1/billing-documents | List billing documents for an account |
| BillingPreviewRunApi | create_billing_preview_run | POST /v1/billing-preview-runs | Create a billing preview run |
| BillingPreviewRunApi | get_billing_preview_run | GET /v1/billing-preview-runs/{billingPreviewRunId} | Retrieve a billing preview run |
| BookingDateBackfillJobApi | g_et_booking_date_backfill_job_by_id | GET /v1/uno/data-backfill/bookingdate/jobs/{jobId} | Find BookingDate Backfill job by ID |
| BookingDateBackfillJobApi | g_et_list_booking_date_backfill_jobs | GET /v1/uno/data-backfill/bookingdate/jobs | Query all Booking Date Backfill Jobs |
| BookingDateBackfillJobApi | p_ost_create_booking_date_backfill_job | POST /v1/uno/data-backfill/bookingdate/jobs | Create a new BookingDate Backfil job |
| BookingDateBackfillJobApi | p_ut_stop_booking_date_backfill_job_by_id | PUT /v1/uno/data-backfill/bookingdate/jobs/{jobId} | Stop BookingDate Backfill job by ID |
| CatalogGroupsApi | create_catalog_group | POST /v1/catalog-groups | Create a catalog group |
| CatalogGroupsApi | delete_catalog_group | DELETE /v1/catalog-groups/{catalog-group-key} | Delete a catalog group |
| CatalogGroupsApi | get_catalog_group | GET /v1/catalog-groups/{catalog-group-key} | Retrieve a catalog group |
| CatalogGroupsApi | get_catalog_groups | GET /v1/catalog-groups | List all catalog groups |
| CatalogGroupsApi | update_catalog_group | PUT /v1/catalog-groups/{catalog-group-key} | Update a catalog group |
| ContactSnapshotsApi | get_contact_snapshot | GET /v1/contact-snapshots/{contact-snapshot-id} | Retrieve a contact snapshot |
| ContactsApi | create_contact | POST /v1/contacts | Create a contact |
| ContactsApi | delete_contact | DELETE /v1/contacts/{contactId} | Delete a contact |
| ContactsApi | get_contact | GET /v1/contacts/{contactId} | Retrieve a contact |
| ContactsApi | scrub_contact | PUT /v1/contacts/{contactId}/scrub | Scrub a contact |
| ContactsApi | transfer_contact | PUT /v1/contacts/{contactId}/transfer | Transfer a contact |
| ContactsApi | update_contact | PUT /v1/contacts/{contactId} | Update a contact |
| CreditMemosApi | apply_credit_memo | PUT /v1/credit-memos/{creditMemoKey}/apply | Apply a credit memo |
| CreditMemosApi | apply_credit_memo_async | PUT /v1/credit-memos/{creditMemoKey}/apply-async | Async Apply a credit memo |
| CreditMemosApi | bulk_create_credit_memos | POST /v1/credit-memos/bulk | Create credit memos |
| CreditMemosApi | bulk_update_credit_memos | PUT /v1/credit-memos/bulk | Update credit memos |
| CreditMemosApi | cancel_async_credit_memo | PUT /v1/credit-memos/{creditMemoKey}/cancel-async | Cancel a Credit Memo in async |
| CreditMemosApi | cancel_credit_memo | PUT /v1/credit-memos/{creditMemoKey}/cancel | Cancel a credit memo |
| CreditMemosApi | create_credit_memo_from_charge | POST /v1/credit-memos | Create a credit memo from a charge |
| CreditMemosApi | create_credit_memo_from_invoice | POST /v1/credit-memos/invoice/{invoiceKey} | Create a credit memo from an invoice |
| CreditMemosApi | create_credit_memo_taxation_items | POST /v1/credit-memos/{creditMemoKey}/taxation-items | Create taxation items for a credit memo |
| CreditMemosApi | delete_credit_memo | DELETE /v1/credit-memos/{creditMemoKey} | Delete a credit memo |
| CreditMemosApi | email_credit_memo | POST /v1/credit-memos/{creditMemoKey}/emails | Email a credit memo |
| CreditMemosApi | generate_credit_memo_pdf | POST /v1/credit-memos/{creditMemoKey}/pdfs | Generate a credit memo PDF file |
| CreditMemosApi | get_apply_credit_memo_async_job | GET /v1/credit-memos/apply-async-jobs/{applyAsyncJobId} | Get async apply credit memo job by ID |
| CreditMemosApi | get_credit_memo | GET /v1/credit-memos/{creditMemoKey} | Retrieve a credit memo |
| CreditMemosApi | get_credit_memo_item | GET /v1/credit-memos/{creditMemoKey}/items/{creditMemoItemId} | Retrieve a credit memo item |
| CreditMemosApi | get_credit_memo_item_part | GET /v1/credit-memos/{creditMemoKey}/parts/{partId}/item-parts/{itemPartId} | Retrieve a credit memo part item |
| CreditMemosApi | get_credit_memo_item_parts | GET /v1/credit-memos/{creditMemoKey}/parts/{partId}/item-parts | List all credit memo part items |
| CreditMemosApi | get_credit_memo_items | GET /v1/credit-memos/{creditMemoKey}/items | List credit memo items |
| CreditMemosApi | get_credit_memo_part | GET /v1/credit-memos/{creditMemoKey}/parts/{partId} | Retrieve a credit memo part |
| CreditMemosApi | get_credit_memo_parts | GET /v1/credit-memos/{creditMemoKey}/parts | List all parts of a credit memo |
| CreditMemosApi | get_credit_memo_pdf_status | GET /v1/credit-memos/pdf-status | Retrieve PDF status of credit memos in a batch. |
| CreditMemosApi | get_credit_memos | GET /v1/credit-memos | List credit memos |
| CreditMemosApi | get_taxation_items_of_credit_memo_item | GET /v1/credit-memos/{creditMemoKey}/items/{creditMemoItemId}/taxation-items | List all taxation items of a credit memo item |
| CreditMemosApi | get_unapply_credit_memo_async_job | GET /v1/credit-memos/unapply-async-jobs/{unapplyAsyncJobId} | Get async unapply credit memo job by ID |
| CreditMemosApi | post_async_credit_memo | PUT /v1/credit-memos/{creditMemoKey}/post-async | Post a credit memo in async |
| CreditMemosApi | post_credit_memo | PUT /v1/credit-memos/{creditMemoKey}/post | Post a credit memo |
| CreditMemosApi | refund_credit_memo | POST /v1/credit-memos/{creditMemoKey}/refund | Refund a credit memo |
| CreditMemosApi | reverse_credit_memo | PUT /v1/credit-memos/{creditMemoKey}/reverse | Reverse a credit memo |
| CreditMemosApi | unapply_credit_memo | PUT /v1/credit-memos/{creditMemoKey}/unapply | Unapply a credit memo |
| CreditMemosApi | unapply_credit_memo_async | PUT /v1/credit-memos/{creditMemoKey}/unapply-async | Async Unapply a credit memo |
| CreditMemosApi | unpost_credit_memo | PUT /v1/credit-memos/{creditMemoKey}/unpost | Unpost a credit memo |
| CreditMemosApi | update_credit_memo | PUT /v1/credit-memos/{creditMemoKey} | Update a credit memo |
| CreditMemosApi | upload_file_for_credit_memo | POST /v1/credit-memos/{creditMemoKey}/files | Upload a file for a credit memo |
| CreditMemosApi | write_off_credit_memo | PUT /v1/credit-memos/{creditMemoKey}/write-off | Write off a credit memo |
| CustomEventTriggersApi | delete_event_trigger | DELETE /events/event-triggers/{id} | Delete an event trigger |
| CustomEventTriggersApi | get_event_trigger | GET /events/event-triggers/{id} | Retrieve an event trigger |
| CustomEventTriggersApi | get_event_triggers | GET /events/event-triggers | List event triggers |
| CustomEventTriggersApi | post_event_trigger | POST /events/event-triggers | Create an event trigger |
| CustomEventTriggersApi | put_event_trigger | PUT /events/event-triggers/{id} | Update an event trigger |
| CustomExchangeRatesApi | get_custom_exchange_rates | GET /v1/custom-exchange-rates/{currency} | List custom exchange rates by currency |
| CustomObjectDefinitionsApi | delete_custom_object_definition_by_type | DELETE /objects/definitions/default/{object} | Delete a custom object definition |
| CustomObjectDefinitionsApi | get_all_custom_object_definitions_in_namespace | GET /objects/definitions/default | List custom object definitions |
| CustomObjectDefinitionsApi | get_custom_object_definition_by_type | GET /objects/definitions/default/{object} | Retrieve a custom object definition |
| CustomObjectDefinitionsApi | post_custom_object_definitions | POST /objects/definitions/default | Create custom object definitions |
| CustomObjectDefinitionsApi | post_update_custom_object_definition | POST /objects/migrations | Update a custom object definition |
| CustomObjectJobsApi | get_all_custom_object_bulk_jobs | GET /objects/jobs | List all custom object bulk jobs |
| CustomObjectJobsApi | get_custom_object_bulk_job | GET /objects/jobs/{id} | Retrieve a custom object bulk job |
| CustomObjectJobsApi | get_custom_object_bulk_job_errors | GET /objects/jobs/{id}/errors | List all errors for a custom object bulk job |
| CustomObjectJobsApi | p_atch_custom_object_bulk_job | PATCH /objects/jobs/{id}/cancel | Cancel a custom object bulk job |
| CustomObjectJobsApi | post_custom_object_bulk_job | POST /objects/jobs | Submit a custom object bulk job |
| CustomObjectJobsApi | post_upload_file_for_custom_object_bulk_job | POST /objects/jobs/{id}/files | Upload a file for a custom object bulk job |
| CustomObjectRecordsApi | delete_custom_object_record_by_id | DELETE /objects/records/default/{object}/{id} | Delete a custom object record |
| CustomObjectRecordsApi | get_all_records_for_custom_object_type | GET /objects/records/default/{object} | List records for a custom object |
| CustomObjectRecordsApi | get_custom_object_record_by_id | GET /objects/records/default/{object}/{id} | Retrieve a custom object record |
| CustomObjectRecordsApi | patch_partial_update_custom_object_record | PATCH /objects/records/default/{object}/{id} | Partially update a custom object record |
| CustomObjectRecordsApi | post_custom_object_records | POST /objects/records/default/{object} | Create custom object records |
| CustomObjectRecordsApi | post_custom_object_records_batch_update_or_delete | POST /objects/batch/default/{object} | Update or delete custom object records |
| CustomObjectRecordsApi | put_custom_object_record | PUT /objects/records/default/{object}/{id} | Update a custom object record |
| CustomPaymentMethodTypesApi | create_open_payment_method_type | POST /open-payment-method-types | Create a draft custom payment method type |
| CustomPaymentMethodTypesApi | get_open_payment_method_type_revision | GET /open-payment-method-types/{paymentMethodTypeName}/draft/{revisionNumber} | Retrieve a specific draft revision of a custom payment method type |
| CustomPaymentMethodTypesApi | get_published_open_payment_method_type | GET /open-payment-method-types/{paymentMethodTypeName}/published | Retrieve a published custom payment method type |
| CustomPaymentMethodTypesApi | publish_open_payment_method_type | PUT /open-payment-method-types/publish/{paymentMethodTypeName} | Publish a custom payment method type |
| CustomPaymentMethodTypesApi | update_open_payment_method_type | PUT /open-payment-method-types/{paymentMethodTypeName} | Update a custom payment method type |
| CustomScheduledEventsApi | delete_scheduled_event_by_id | DELETE /events/scheduled-events/{id} | Delete a scheduled event by ID |
| CustomScheduledEventsApi | get_scheduled_event_by_id | GET /events/scheduled-events/{id} | Retrieve a scheduled event by ID |
| CustomScheduledEventsApi | get_scheduled_events | GET /events/scheduled-events | List all scheduled events |
| CustomScheduledEventsApi | post_scheduled_event | POST /events/scheduled-events | Create a scheduled event |
| CustomScheduledEventsApi | update_scheduled_event_by_id | PUT /events/scheduled-events/{id} | Update a scheduled event by ID |
| DataBackfillJobApi | g_et_data_backfill_job_by_id | GET /v1/uno/data-backfill/jobs/{jobId} | Find Data Backfill job by ID |
| DataBackfillJobApi | g_et_data_backfill_template | GET /v1/uno/data-backfill/jobs/{type}/template | Download a Data Backfill template file |
| DataBackfillJobApi | g_et_list_data_backfill_jobs | GET /v1/uno/date-backfill/listjobs | Query all data backfill jobs |
| DataBackfillJobApi | p_ost_create_data_backfill_job | POST /v1/uno/data-backfill/jobs | Create a new Data Backfil job |
| DataBackfillJobApi | p_ut_stop_data_backfill_job_by_id | PUT /v1/uno/data-backfill/jobs/{jobId} | Stop Data Backfill job by ID |
| DataLabelingApi | get_data_labeling_job | GET /v1/multi-organizations/data-labeling-job/{job-id} | Retrieve a data labeling job |
| DataLabelingApi | submit_data_labeling_job | POST /v1/multi-organizations/data-labeling-job | Submit a data labeling job |
| DataQueriesApi | delete_data_query_job | DELETE /query/jobs/{job-id} | Cancel a data query job |
| DataQueriesApi | get_data_query_job | GET /query/jobs/{job-id} | Retrieve a data query job |
| DataQueriesApi | get_data_query_jobs | GET /query/jobs | List data query jobs |
| DataQueriesApi | post_data_query_job | POST /query/jobs | Submit a data query |
| DebitMemosApi | bulk_create_debit_memos | POST /v1/debit-memos/bulk | Create debit memos |
| DebitMemosApi | bulk_update_debit_memos | PUT /v1/debit-memos/bulk | Update debit memos |
| DebitMemosApi | cancel_async_debit_memo | PUT /v1/debit-memos/{debitMemoKey}/cancel-async | Cancel a Debit Memo in async |
| DebitMemosApi | cancel_debit_memo | PUT /v1/debit-memos/{debitMemoKey}/cancel | Cancel a debit memo |
| DebitMemosApi | collect_debit_memo | POST /v1/debit-memos/{debitMemoKey}/collect | Collect a posted debit memo |
| DebitMemosApi | create_debit_memo_from_charge | POST /v1/debit-memos | Create a debit memo from a charge |
| DebitMemosApi | create_debit_memo_from_invoice | POST /v1/debit-memos/invoice/{invoiceKey} | Create a debit memo from an invoice |
| DebitMemosApi | create_taxation_items_for_debit_memo | POST /v1/debit-memos/{debitMemoKey}/taxation-items | Create taxation items for a debit memo |
| DebitMemosApi | delete_debit_memo | DELETE /v1/debit-memos/{debitMemoKey} | Delete a debit memo |
| DebitMemosApi | email_debit_memo | POST /v1/debit-memos/{debitMemoKey}/emails | Email a debit memo |
| DebitMemosApi | generate_debit_memo_pdf | POST /v1/debit-memos/{debitMemoKey}/pdfs | Generate a debit memo PDF file |
| DebitMemosApi | get_debit_memo | GET /v1/debit-memos/{debitMemoKey} | Retrieve a debit memo |
| DebitMemosApi | get_debit_memo_application_parts | GET /v1/debit-memos/{debitMemoKey}/application-parts | List all application parts of a debit memo |
| DebitMemosApi | get_debit_memo_item | GET /v1/debit-memos/{debitMemoKey}/items/{debitMemoItemId} | Retrieve a debit memo item |
| DebitMemosApi | get_debit_memo_items | GET /v1/debit-memos/{debitMemoKey}/items | List debit memo items |
| DebitMemosApi | get_debit_memo_pdf_status | GET /v1/debit-memos/pdf-status | Retrieve PDF status of debit memos in a batch. |
| DebitMemosApi | get_debit_memos | GET /v1/debit-memos | List debit memos |
| DebitMemosApi | get_taxation_items_of_debit_memo_item | GET /v1/debit-memos/{debitMemoKey}/items/{debitMemoItemId}/taxation-items | List all taxation items of a debit memo item |
| DebitMemosApi | post_async_debit_memo | PUT /v1/debit-memos/{debitMemoKey}/post-async | Post a Debit Memo in async |
| DebitMemosApi | post_debit_memo | PUT /v1/debit-memos/{debitMemoKey}/post | Post a debit memo |
| DebitMemosApi | unpost_debit_memo | PUT /v1/debit-memos/{debitMemoKey}/unpost | Unpost a debit memo |
| DebitMemosApi | update_debit_memo | PUT /v1/debit-memos/{debitMemoKey} | Update a debit memo |
| DebitMemosApi | update_debit_memos_due_dates | PUT /v1/debit-memos | Update due dates for debit memos |
| DebitMemosApi | upload_file_for_debit_memo | POST /v1/debit-memos/{debitMemoKey}/files | Upload a file for a debit memo |
| DebitMemosApi | write_off_debit_memo | PUT /v1/debitmemos/{debitMemoKey}/write-off | Write off an debit memo |
| DeploymentApi | compare_and_deploy_product_catalog_template | POST /deployment-manager/deployments/template/product_catalog | Compare and Deploy a template for product catalog to a target tenant |
| DeploymentApi | compare_and_deploy_product_catalog_tenant | POST /deployment-manager/deployments/tenant/product_catalog | Compare and Deploy product catalog between a source tenant and a target tenant |
| DeploymentApi | compare_and_deploy_template | POST /deployment-manager/deployments/templates | Compare and Deploy settings from a template to a target tenant |
| DeploymentApi | compare_and_deploy_tenant | POST /deployment-manager/deployments/tenants | Compare and Deploy settings between a source tenant and a target tenant |
| DeploymentApi | retrieve_deployment | GET /deployment-manager/deployments/{migrationId} | Retrieves a deployment log. |
| DeploymentApi | revert_deployment | POST /deployment-manager/deployments/{migrationId}/revert | Reverts the deployment. |
| DeploymentConfigurationTemplatesApi | compare_template | POST /deployment-manager/deployment_artifacts/compare | Compare settings between a source tenant and a target tenant |
| DeploymentConfigurationTemplatesApi | create_deployment_template | POST /deployment-manager/deployment_templates | Create a deployment template |
| DeploymentConfigurationTemplatesApi | delete_deployment_template | DELETE /deployment-manager/deployment_templates/{id} | Delete a template |
| DeploymentConfigurationTemplatesApi | download_deployment_template | GET /deployment-manager/deployment_artifacts | Download a template |
| DeploymentConfigurationTemplatesApi | get_deployment_template_detail | GET /deployment-manager/deployment_templates/{id} | List all details of a template |
| DeploymentConfigurationTemplatesApi | get_deployment_templates | GET /deployment-manager/deployment_templates | List all templates |
| DeploymentConfigurationTemplatesApi | get_source_component_details | GET /deployment-manager/deployment_artifacts/retrieve-settings | List all details of source components |
| DeploymentConfigurationTemplatesApi | migrate_tenant_settings | POST /deployment-manager/deployment_artifacts/deploy | Migrate settings from source tenant to target tenant |
| DescribeApi | get_describe | GET /v1/describe/{object} | Describe an object |
| EInvoicingApi | delete_business_region | DELETE /v1/e-invoice/business-regions/{key} | Delete a Business Region |
| EInvoicingApi | delete_service_provider | DELETE /v1/e-invoice/service-providers/{key} | Delete a Service Provider |
| EInvoicingApi | get_business_region | GET /v1/e-invoice/business-regions/{key} | Retrieve a Business Region |
| EInvoicingApi | get_business_regions | GET /v1/e-invoice/business-regions | List business region |
| EInvoicingApi | get_service_provider | GET /v1/e-invoice/service-providers/{key} | Retrieve a Service Provider |
| EInvoicingApi | get_service_providers | GET /v1/e-invoice/service-providers | List Service Provider |
| EInvoicingApi | post_business_region | POST /v1/e-invoice/business-regions | Post a Business Region |
| EInvoicingApi | post_service_provider | POST /v1/e-invoice/service-providers | Post a Service Provider |
| EInvoicingApi | update_business_region | PUT /v1/e-invoice/business-regions/{key} | Update a Business Region |
| EInvoicingApi | update_service_provider | PUT /v1/e-invoice/service-providers/{key} | Update a Service Provider |
| ElectronicPaymentsHealthApi | get_system_health_payment_volume_summary | GET /system-health/payments/volume-summary | List payment volume summary records |
| FilesApi | get_files | GET /v1/files/{file-id} | Retrieve a file |
| FulfillmentsApi | create_fulfillment | POST /v1/fulfillments | Create fulfillments |
| FulfillmentsApi | create_fulfillment_item | POST /v1/fulfillment-items | Create fulfillment items |
| FulfillmentsApi | delete_fulfillment | DELETE /v1/fulfillments/{key} | Delete a fulfillment |
| FulfillmentsApi | delete_fulfillment_item | DELETE /v1/fulfillment-items/{id} | Delete a fulfillment item |
| FulfillmentsApi | get_fulfillment | GET /v1/fulfillments/{key} | Retrieve a fulfillment |
| FulfillmentsApi | get_fulfillment_item | GET /v1/fulfillment-items/{id} | Retrieve a fulfillment item |
| FulfillmentsApi | update_fulfillment | PUT /v1/fulfillments/{key} | Update a fulfillment |
| FulfillmentsApi | update_fulfillment_item | PUT /v1/fulfillment-items/{id} | Update a fulfillment item |
| HostedPagesApi | get_hosted_pages | GET /v1/hostedpages | List hosted pages |
| ImportsApi | object_get_import | GET /v1/object/import/{id} | CRUD: Retrieve an import |
| ImportsApi | object_post_import | POST /v1/object/import | CRUD: Create an import |
| InvoiceSchedulesApi | attach_invoice_schedule | PUT /v1/invoice-schedules/{scheduleKey}/attach | Attach an invoice schedule |
| InvoiceSchedulesApi | create_invoice_schedule | POST /v1/invoice-schedules | Create an invoice schedule |
| InvoiceSchedulesApi | delete_invoice_schedule | DELETE /v1/invoice-schedules/{scheduleKey} | Delete an invoice schedule |
| InvoiceSchedulesApi | detach_invoice_schedule | PUT /v1/invoice-schedules/{scheduleKey}/detach | Detach an invoice schedule |
| InvoiceSchedulesApi | execute_invoice_schedule | POST /v1/invoice-schedules/{scheduleKey}/execute | Execute an invoice schedule |
| InvoiceSchedulesApi | get_invoice_schedule | GET /v1/invoice-schedules/{scheduleKey} | Retrieve an invoice schedule |
| InvoiceSchedulesApi | pause_invoice_schedule | PUT /v1/invoice-schedules/{scheduleKey}/pause | Pause an invoice schedule |
| InvoiceSchedulesApi | resume_invoice_schedule | PUT /v1/invoice-schedules/{scheduleKey}/resume | Resume an invoice schedule |
| InvoiceSchedulesApi | update_invoice_schedule | PUT /v1/invoice-schedules/{scheduleKey} | Update an invoice schedule |
| InvoicesApi | bulk_create_standalone_invoices | POST /v1/invoices/batch | Create standalone invoices |
| InvoicesApi | bulk_post_invoices | POST /v1/invoices/bulk-post | Post invoices |
| InvoicesApi | bulk_update_invoices | PUT /v1/invoices | Update invoices |
| InvoicesApi | cancel_invoice | PUT /v1/invoices/{invoiceKey}/cancel | Cancel an invoice |
| InvoicesApi | create_invoice_taxation_items | POST /v1/invoices/{invoiceKey}/taxation-items | Create taxation items for an invoice |
| InvoicesApi | create_standalone_invoice | POST /v1/invoices | Create a standalone invoice |
| InvoicesApi | delete_invoice | DELETE /v1/invoices/{invoiceKey} | Delete an invoice |
| InvoicesApi | email_invoice | POST /v1/invoices/{invoiceKey}/emails | Email an invoice |
| InvoicesApi | get_invoice | GET /v1/invoices/{invoiceKey} | Retrieve an invoice |
| InvoicesApi | get_invoice_application_parts | GET /v1/invoices/{invoiceKey}/application-parts | List all application parts of an invoice |
| InvoicesApi | get_invoice_files | GET /v1/invoices/{invoiceKey}/files | List all files of an invoice |
| InvoicesApi | get_invoice_items | GET /v1/invoices/{invoiceKey}/items | List all items of an invoice |
| InvoicesApi | get_invoice_pdf_status | GET /v1/invoices/pdf-status | Retrieve PDF status of invoices in a batch. |
| InvoicesApi | get_taxation_items_of_invoice_item | GET /v1/invoices/{invoiceKey}/items/{itemId}/taxation-items | List all taxation items of an invoice item |
| InvoicesApi | post_invoice | PUT /v1/invoices/{invoiceKey}/post | Cancel an invoice |
| InvoicesApi | reverse_invoice | PUT /v1/invoices/{invoiceKey}/reverse | Reverse an invoice |
| InvoicesApi | update_invoice | PUT /v1/invoices/{invoiceKey} | Update an invoice |
| InvoicesApi | upload_file_for_invoice | POST /v1/invoices/{invoiceKey}/files | Upload a file for an invoice |
| InvoicesApi | write_off_invoice | PUT /v1/invoices/{invoiceKey}/write-off | Write off an invoice |
| JournalRunsApi | cancel_journal_run | PUT /v1/journal-runs/{jr-number}/cancel | Cancel a journal run |
| JournalRunsApi | create_journal_run | POST /v1/journal-runs | Create a journal run |
| JournalRunsApi | delete_journal_run | DELETE /v1/journal-runs/{jr-number} | Delete a journal run |
| JournalRunsApi | get_journal_run | GET /v1/journal-runs/{jr-number} | Retrieve a journal run |
| MassUpdaterApi | create_mass_updater | POST /v1/bulk | Perform a mass action |
| MassUpdaterApi | get_mass_updater | GET /v1/bulk/{bulk-key} | List all results of a mass action |
| MassUpdaterApi | stop_mass_updater | PUT /v1/bulk/{bulk-key}/stop | Stop a mass action |
| NotificationsApi | create_notification_definition | POST /notifications/notification-definitions | Create a notification definition |
| NotificationsApi | create_or_update_email_templates | POST /notifications/email-templates/import | Create or update email templates |
| NotificationsApi | delete_email_template | DELETE /notifications/email-templates/{id} | Delete an email template |
| NotificationsApi | delete_notification_definition | DELETE /notifications/notification-definitions/{id} | Delete a notification definition |
| NotificationsApi | delete_notification_history_for_account | DELETE /notifications/history | Delete notification histories for an account |
| NotificationsApi | get_callout_history | GET /v1/notification-history/callout | List callout notification histories |
| NotificationsApi | get_email_history | GET /v1/notification-history/email | List email notification histories |
| NotificationsApi | get_email_template | GET /notifications/email-templates/{id} | Retrieve an email template |
| NotificationsApi | get_notification_definition | GET /notifications/notification-definitions/{id} | Retrieve a notification definition |
| NotificationsApi | get_notification_history_deletion_task | GET /notifications/history/tasks/{id} | Retrieve a notification history deletion task |
| NotificationsApi | post_create_email_template | POST /notifications/email-templates | Create an email template |
| NotificationsApi | query_email_templates | GET /notifications/email-templates | List email templates |
| NotificationsApi | query_notification_definitions | GET /notifications/notification-definitions | List notification definitions |
| NotificationsApi | resend_callout_notifications | POST /notifications/callout-histories/resend | Resend callout notifications |
| NotificationsApi | resend_email_notifications | POST /notifications/email-histories/resend | Resend email notifications |
| NotificationsApi | update_email_template | PUT /notifications/email-templates/{id} | Update an email template |
| NotificationsApi | update_notification_definition | PUT /notifications/notification-definitions/{id} | Update a notification definition |
| OAuthApi | create_token | POST /oauth/token | Create an OAuth token |
| ObjectQueriesApi | query_account_by_key | GET /object-query/accounts/{key} | Retrieve an account |
| ObjectQueriesApi | query_accounts | GET /object-query/accounts | List accounts |
| ObjectQueriesApi | query_amendment_by_key | GET /object-query/amendments/{key} | Retrieve an amendment |
| ObjectQueriesApi | query_amendments | GET /object-query/amendments | List amendments |
| ObjectQueriesApi | query_billing_run_by_key | GET /object-query/billing-runs/{key} | Retrieve a bill run |
| ObjectQueriesApi | query_billing_runs | GET /object-query/billing-runs | List bill runs |
| ObjectQueriesApi | query_contact_by_key | GET /object-query/contacts/{key} | Retrieve a contact |
| ObjectQueriesApi | query_contacts | GET /object-query/contacts | List contacts |
| ObjectQueriesApi | query_credit_memo_application_by_key | GET /object-query/credit-memo-applications/{key} | Retrieve a credit memo application |
| ObjectQueriesApi | query_credit_memo_applications | GET /object-query/credit-memo-applications | List credit memo applications |
| ObjectQueriesApi | query_credit_memo_by_key | GET /object-query/credit-memos/{key} | Retrieve a credit memo |
| ObjectQueriesApi | query_credit_memo_item_by_key | GET /object-query/credit-memo-items/{key} | Retrieve a credit memo item |
| ObjectQueriesApi | query_credit_memo_items | GET /object-query/credit-memo-items | List credit memo items |
| ObjectQueriesApi | query_credit_memos | GET /object-query/credit-memos | List credit memos |
| ObjectQueriesApi | query_custom_object_bykey | GET /object-query/{custom-object-name}/{key} | Retrieve a custom object |
| ObjectQueriesApi | query_custom_objects | GET /object-query/{custom-object-name} | List custom objects |
| ObjectQueriesApi | query_daily_consumption_summary_by_key | GET /object-query/daily-consumption-summaries/{key} | Retrieve a daily consumption summary |
| ObjectQueriesApi | query_daily_consumption_summarys | GET /object-query/daily-consumption-summaries | List daily consumption summaries |
| ObjectQueriesApi | query_debit_memo_by_key | GET /object-query/debit-memos/{key} | Retrieve a debit memo |
| ObjectQueriesApi | query_debit_memo_item_by_key | GET /object-query/debit-memo-items/{key} | Retrieve a debit memo item |
| ObjectQueriesApi | query_debit_memo_items | GET /object-query/debit-memo-items | List debit memo items |
| ObjectQueriesApi | query_debit_memos | GET /object-query/debit-memos | List debit memos |
| ObjectQueriesApi | query_invoice_by_key | GET /object-query/invoices/{key} | Retrieve an invoice |
| ObjectQueriesApi | query_invoice_item_by_key | GET /object-query/invoice-items/{key} | Retrieve an invoice item |
| ObjectQueriesApi | query_invoice_items | GET /object-query/invoice-items | List invoice items |
| ObjectQueriesApi | query_invoices | GET /object-query/invoices | List invoices |
| ObjectQueriesApi | query_invoice_schedule_by_key | GET /object-query/invoice-schedules/{key} | Retrieve an invoice schedule |
| ObjectQueriesApi | query_invoice_schedules | GET /object-query/invoice-schedules | List invoice schedules |
| ObjectQueriesApi | query_order_action_by_key | GET /object-query/order-actions/{key} | Retrieve an order action |
| ObjectQueriesApi | query_order_actions | GET /object-query/order-actions | List order actions |
| ObjectQueriesApi | query_order_line_item_by_key | GET /object-query/order-line-items/{key} | Retrieve an order line item |
| ObjectQueriesApi | query_order_line_items | GET /object-query/order-line-items | List order line items |
| ObjectQueriesApi | query_orders_by_key | GET /object-query/orders/{key} | Retrieve an order |
| ObjectQueriesApi | query_orderss | GET /object-query/orders | List orders |
| ObjectQueriesApi | query_payment_application_by_key | GET /object-query/payment-applications/{key} | Retrieve a payment application |
| ObjectQueriesApi | query_payment_applications | GET /object-query/payment-applications | List payment applications |
| ObjectQueriesApi | query_payment_by_key | GET /object-query/payments/{key} | Retrieve a payment |
| ObjectQueriesApi | query_payment_method_by_key | GET /object-query/payment-methods/{key} | Retrieve a payment method |
| ObjectQueriesApi | query_payment_method_snapshot_by_key | GET /object-query/payment-method-snapshots/{key} | Retrieve a payment method snapshot |
| ObjectQueriesApi | query_payment_method_snapshots | GET /object-query/payment-method-snapshots | List payment method snapshots |
| ObjectQueriesApi | query_payment_methods | GET /object-query/payment-methods | List payment methods |
| ObjectQueriesApi | query_payment_run_by_key | GET /object-query/payment-runs/{key} | Retrieve a payment run |
| ObjectQueriesApi | query_payment_runs | GET /object-query/payment-runs | List payment runs |
| ObjectQueriesApi | query_payment_schedule_by_key | GET /object-query/payment-schedules/{key} | Retrieve a payment schedule |
| ObjectQueriesApi | query_payment_schedule_item_by_key | GET /object-query/payment-schedule-items/{key} | Retrieve a payment schedule item |
| ObjectQueriesApi | query_payment_schedule_items | GET /object-query/payment-schedule-items | List payment schedule items |
| ObjectQueriesApi | query_payment_schedules | GET /object-query/payment-schedules | List payment schedules |
| ObjectQueriesApi | query_payments | GET /object-query/payments | List payments |
| ObjectQueriesApi | query_prepaid_balance_by_key | GET /object-query/prepaid-balances/{key} | Retrieve a prepaid balance |
| ObjectQueriesApi | query_prepaid_balance_fund_by_key | GET /object-query/prepaid-balance-funds/{key} | Retrieve a prepaid balance fund |
| ObjectQueriesApi | query_prepaid_balance_funds | GET /object-query/prepaid-balance-funds | List prepaid balance funds |
| ObjectQueriesApi | query_prepaid_balance_transaction_by_key | GET /object-query/prepaid-balance-transactions/{key} | Retrieve a prepaid balance transaction |
| ObjectQueriesApi | query_prepaid_balance_transactions | GET /object-query/prepaid-balance-transactions | List prepaid balance transactions |
| ObjectQueriesApi | query_prepaid_balances | GET /object-query/prepaid-balances | List prepaid balances |
| ObjectQueriesApi | query_processed_usage_by_key | GET /object-query/processed-usages/{key} | Retrieve a processed usage record |
| ObjectQueriesApi | query_processed_usages | GET /object-query/processed-usages | List processed usage records |
| ObjectQueriesApi | query_product_by_key | GET /object-query/products/{key} | Retrieve a product |
| ObjectQueriesApi | query_product_rate_plan_by_key | GET /object-query/product-rate-plans/{key} | Retrieve a product rate plan |
| ObjectQueriesApi | query_product_rate_plan_charge_by_key | GET /object-query/product-rate-plan-charges/{key} | Retrieve a product rate plan charge |
| ObjectQueriesApi | query_product_rate_plan_charge_tier_by_key | GET /object-query/product-rate-plan-charge-tiers/{key} | Retrieve a product rate plan charge tier |
| ObjectQueriesApi | query_product_rate_plan_charge_tiers | GET /object-query/product-rate-plan-charge-tiers | List product rate plan charge tiers |
| ObjectQueriesApi | query_product_rate_plan_charges | GET /object-query/product-rate-plan-charges | List product rate plan charges |
| ObjectQueriesApi | query_product_rate_plans | GET /object-query/product-rate-plans | List product rate plans |
| ObjectQueriesApi | query_products | GET /object-query/products | List products |
| ObjectQueriesApi | query_rate_plan_by_key | GET /object-query/rate-plans/{key} | Retrieve a rate plan |
| ObjectQueriesApi | query_rate_plan_charge_by_key | GET /object-query/rate-plan-charges/{key} | Retrieve a rate plan charge |
| ObjectQueriesApi | query_rate_plan_charge_tier_by_key | GET /object-query/rate-plan-charge-tiers/{key} | Retrieve a rate plan charge tier |
| ObjectQueriesApi | query_rate_plan_charge_tiers | GET /object-query/rate-plan-charge-tiers | List rate plan charge tiers |
| ObjectQueriesApi | query_rate_plan_charges | GET /object-query/rate-plan-charges | List rate plan charges |
| ObjectQueriesApi | query_rate_plans | GET /object-query/rate-plans | List rate plans |
| ObjectQueriesApi | query_rating_detail_by_key | GET /object-query/rating-details/{key} | Retrieve a rating detail |
| ObjectQueriesApi | query_rating_details | GET /object-query/rating-details | List rating details |
| ObjectQueriesApi | query_rating_result_by_key | GET /object-query/rating-results/{key} | Retrieve a rating result |
| ObjectQueriesApi | query_rating_results | GET /object-query/rating-results | List rating results |
| ObjectQueriesApi | query_refund_application_by_key | GET /object-query/refund-applications/{key} | Retrieve a refund application |
| ObjectQueriesApi | query_refund_application_item_by_key | GET /object-query/refund-application-items/{key} | Retrieve a refund application item |
| ObjectQueriesApi | query_refund_application_items | GET /object-query/refund-application-items | List refund application items |
| ObjectQueriesApi | query_refund_applications | GET /object-query/refund-applications | List refund applications |
| ObjectQueriesApi | query_refund_by_key | GET /object-query/refunds/{key} | Retrieve a refund |
| ObjectQueriesApi | query_refunds | GET /object-query/refunds | List refunds |
| ObjectQueriesApi | query_subscription_by_key | GET /object-query/subscriptions/{key} | Retrieve a subscription |
| ObjectQueriesApi | query_subscriptions | GET /object-query/subscriptions | List subscriptions |
| ObjectQueriesApi | query_summary_statement_by_key | GET /object-query/summarystatements/{key} | Retrieve a summary statement |
| ObjectQueriesApi | query_summary_statement_run_by_key | GET /object-query/summarystatementruns/{key} | Retrieve a summary statement run |
| ObjectQueriesApi | query_summary_statement_runs | GET /object-query/summarystatementruns | List summary statement runs |
| ObjectQueriesApi | query_summary_statements | GET /object-query/summarystatements | List summary statements |
| ObjectQueriesApi | query_taxation_item_by_key | GET /object-query/taxation-items/{key} | Retrieve a taxation item |
| ObjectQueriesApi | query_taxation_items | GET /object-query/taxation-items | List taxation items |
| ObjectQueriesApi | query_usage_by_key | GET /object-query/usages/{key} | Retrieve a usage record |
| ObjectQueriesApi | query_usages | GET /object-query/usages | List usage records |
| ObjectQueriesApi | query_validity_period_summary_by_key | GET /object-query/validity-period-summaries/{key} | Retrieve a validity period summary |
| ObjectQueriesApi | query_validity_period_summarys | GET /object-query/validity-period-summaries | List validity period summaries |
| OmniChannelSubscriptionsApi | create_omni_channel_subscription | POST /v1/omni-channel-subscriptions | Create an omnichannel subscription |
| OmniChannelSubscriptionsApi | delete_omni_channel_subscription | DELETE /v1/omni-channel-subscriptions/{subscriptionKey} | Delete an omnichannel subscription |
| OmniChannelSubscriptionsApi | get_omni_channel_subscription | GET /v1/omni-channel-subscriptions/{subscriptionKey} | Retrieve an omnichannel subscription |
| OperationsApi | create_billing_preview | POST /v1/operations/billing-preview | Generate a billing preview |
| OperationsApi | create_bulk_pdfto_zip_generation | POST /v1/operations/bulk-pdf | Export bulk PDF files |
| OperationsApi | create_invoice_collect | POST /v1/operations/invoice-collect | Invoice and collect |
| OperationsApi | get_bulk_pdfto_zip_generation | GET /v1/operations/bulk-pdf/{jobId} | Retrieve information of a bulk PDF file generation job |
| OperationsApi | get_operation_job | GET /v1/operations/jobs/{jobId} | Retrieve an operation job |
| OrderActionsApi | update_order_action | PUT /v1/orderActions/{id} | Update an order action |
| OrderLineItemsApi | get_order_line_item | GET /v1/order-line-items/{itemId} | Retrieve an order line item |
| OrderLineItemsApi | update_order_line_item | PUT /v1/order-line-items/{itemId} | Update an order line item |
| OrderLineItemsApi | update_order_line_items | POST /v1/order-line-items/bulk | Update order line items |
| OrdersApi | activate_order | PUT /v1/orders/{orderNumber}/activate | Activate an order |
| OrdersApi | cancel_order | PUT /v1/orders/{orderNumber}/cancel | Cancel an order |
| OrdersApi | create_order | POST /v1/orders | Create an order |
| OrdersApi | create_order_asynchronously | POST /v1/async/orders | Create an order asynchronously |
| OrdersApi | delete_order | DELETE /v1/orders/{orderNumber} | Delete an order |
| OrdersApi | delete_order_asynchronously | DELETE /v1/async/orders/{orderNumber} | Async delete an order |
| OrdersApi | get_job_status_and_response | GET /v1/async-jobs/{jobId} | Retrieve the status and response of a job |
| OrdersApi | get_order | GET /v1/orders/{orderNumber} | Retrieve an order |
| OrdersApi | get_orders | GET /v1/orders | List orders |
| OrdersApi | get_orders_by_invoice_owner | GET /v1/orders/invoiceOwner/{accountNumber} | List orders of an invoice owner |
| OrdersApi | get_orders_by_subscription_number | GET /v1/orders/subscription/{subscriptionNumber} | List orders by subscription number |
| OrdersApi | get_orders_by_subscription_owner | GET /v1/orders/subscriptionOwner/{accountNumber} | List orders of a subscription owner |
| OrdersApi | get_pending_orders_by_subscription_number | GET /v1/orders/subscription/{subscription-key}/pending | List pending orders by subscription number |
| OrdersApi | preview_order | POST /v1/orders/preview | Preview an order |
| OrdersApi | preview_order_asynchronously | POST /v1/async/orders/preview | Preview an order asynchronously |
| OrdersApi | revert_order | POST /v1/orders/{orderNumber}/revert | Revert an order |
| OrdersApi | update_order | PUT /v1/orders/{orderNumber} | Update an order |
| OrdersApi | update_order_custom_fields | PUT /v1/orders/{orderNumber}/customFields | Update order custom fields |
| OrdersApi | update_order_trigger_dates | PUT /v1/orders/{orderNumber}/triggerDates | Update order action trigger dates |
| OrdersApi | update_subscription_custom_fields | PUT /v1/subscriptions/{subscriptionNumber}/customFields | Update subscription custom fields |
| PaymentAuthorizationApi | cancel_authorization | POST /v1/payment-methods/{payment-method-id}/voidAuthorize | Cancel authorization |
| PaymentAuthorizationApi | create_authorization | POST /v1/payment-methods/{payment-method-id}/authorize | Create authorization |
| PaymentGatewayReconciliationApi | reconcile_refund | POST /v1/refunds/{refund-key}/reconcile | Reconcile a refund |
| PaymentGatewayReconciliationApi | reject_payment | POST /v1/gateway-settlement/payments/{payment-key}/reject | Reject a payment |
| PaymentGatewayReconciliationApi | reverse_payment | POST /v1/gateway-settlement/payments/{payment-key}/chargeback | Reverse a payment |
| PaymentGatewayReconciliationApi | settle_payment | POST /v1/gateway-settlement/payments/{payment-key}/settle | Settle a payment |
| PaymentGatewaysApi | create_predebit_notification | POST /v1/payment-gateways/pre-debit-notification | Trigger a pre-debit notification |
| PaymentGatewaysApi | get_payment_gateways | GET /v1/payment-gateways | List all payment gateways |
| PaymentMethodSnapshotsApi | get_payment_method_snapshot | GET /v1/object/payment-method-snapshot/{id} | CRUD: Retrieve a payment method snapshot |
| PaymentMethodTransactionLogsApi | get_payment_method_transaction_log | GET /v1/object/payment-method-transaction-log/{id} | CRUD: Retrieve a payment method transaction log |
| PaymentMethodUpdaterApi | create_payment_method_updater_batch | POST /v1/payment-method-updaters/batches | Create a payment method updater batch asynchronously |
| PaymentMethodUpdaterApi | get_payment_method_updater_instances | GET /v1/payment-method-updaters | List payment method updater instances |
| PaymentMethodsApi | cancel_stored_credential_profile | POST /v1/payment-methods/{payment-method-id}/profiles/{profile-number}/cancel | Cancel a stored credential profile |
| PaymentMethodsApi | create_payment_method | POST /v1/payment-methods | Create a payment method |
| PaymentMethodsApi | create_payment_session | POST /web-payments/sessions | Create a payment session |
| PaymentMethodsApi | create_stored_credential_profile | POST /v1/payment-methods/{payment-method-id}/profiles | Create a stored credential profile |
| PaymentMethodsApi | decrypt_payment_method | POST /v1/payment-methods/decryption | Create an Apple Pay payment method |
| PaymentMethodsApi | delete_payment_method | DELETE /v1/payment-methods/{payment-method-id} | Delete a payment method |
| PaymentMethodsApi | expire_stored_credential_profile | POST /v1/payment-methods/{payment-method-id}/profiles/{profile-number}/expire | Expire a stored credential profile |
| PaymentMethodsApi | get_payment_method | GET /v1/payment-methods/{payment-method-id} | Retrieve a payment method |
| PaymentMethodsApi | get_stored_credential_profiles | GET /v1/payment-methods/{payment-method-id}/profiles | List stored credential profiles of a payment method |
| PaymentMethodsApi | scrub_payment_method | PUT /v1/payment-methods/{payment-method-id}/scrub | Scrub a payment method |
| PaymentMethodsApi | update_payment_method | PUT /v1/payment-methods/{payment-method-id} | Update a payment method |
| PaymentMethodsApi | verify_payment_method | PUT /v1/payment-methods/{payment-method-id}/verify | Verify a payment method |
| PaymentRunsApi | create_payment_run | POST /v1/payment-runs | Create a payment run |
| PaymentRunsApi | delete_payment_run | DELETE /v1/payment-runs/{paymentRunKey} | Delete a payment run |
| PaymentRunsApi | get_payment_run | GET /v1/payment-runs/{paymentRunKey} | Retrieve a payment run |
| PaymentRunsApi | get_payment_run_data | GET /v1/payment-runs/{paymentRunKey}/data | Retrieve payment run data |
| PaymentRunsApi | get_payment_run_summary | GET /v1/payment-runs/{paymentRunKey}/summary | Retrieve a payment run summary |
| PaymentRunsApi | get_payment_runs | GET /v1/payment-runs | List payment runs |
| PaymentRunsApi | update_payment_run | PUT /v1/payment-runs/{paymentRunKey} | Update a payment run |
| PaymentSchedulesApi | add_items_to_custom_payment_schedule | POST /v1/payment-schedules/{paymentScheduleKey}/items | Add payment schedule items to a custom payment schedule |
| PaymentSchedulesApi | cancel_payment_schedule | PUT /v1/payment-schedules/{paymentScheduleKey}/cancel | Cancel a payment schedule |
| PaymentSchedulesApi | cancel_payment_schedule_item | PUT /v1/payment-schedule-items/{item-id}/cancel | Cancel a payment schedule item |
| PaymentSchedulesApi | create_payment_schedule | POST /v1/payment-schedules | Create a payment schedule |
| PaymentSchedulesApi | create_payment_schedules | POST /v1/payment-schedules/batch | Create multiple payment schedules at once |
| PaymentSchedulesApi | get_payment_schedule | GET /v1/payment-schedules/{paymentScheduleKey} | Retrieve a payment schedule |
| PaymentSchedulesApi | get_payment_schedule_item | GET /v1/payment-schedule-items/{item-id} | Retrieve a payment schedule item |
| PaymentSchedulesApi | get_payment_schedule_statistic | GET /v1/payment-schedules/statistics/{yyyy-mm-dd} | Retrieve payment schedule statistic of a date |
| PaymentSchedulesApi | get_payment_schedules | GET /v1/payment-schedules | List payment schedules by customer account |
| PaymentSchedulesApi | retry_payment_schedule_item | POST /v1/payment-schedule-items/retry-payment | Retry failed payment schedule items |
| PaymentSchedulesApi | skip_payment_schedule_item | PUT /v1/payment-schedule-items/{item-id}/skip | Skip a payment schedule item |
| PaymentSchedulesApi | update_payment_schedule | PUT /v1/payment-schedules/{paymentScheduleKey} | Update a payment schedule |
| PaymentSchedulesApi | update_payment_schedule_item | PUT /v1/payment-schedule-items/{item-id} | Update a payment schedule item |
| PaymentSchedulesApi | update_payment_schedule_preview | PUT /v1/payment-schedules/{paymentScheduleKey}/preview | Preview the result of payment schedule updates |
| PaymentTransactionLogsApi | get_payment_transaction_log | GET /v1/object/payment-transaction-log/{id} | CRUD: Retrieve a payment transaction log |
| PaymentsApi | apply_payment | PUT /v1/payments/{paymentKey}/apply | Apply a payment |
| PaymentsApi | cancel_payment | PUT /v1/payments/{paymentKey}/cancel | Cancel a payment |
| PaymentsApi | create_payment | POST /v1/payments | Create a payment |
| PaymentsApi | create_refund_payment | POST /v1/payments/{paymentKey}/refunds | Refund a payment |
| PaymentsApi | delete_payment | DELETE /v1/payments/{paymentKey} | Delete a payment |
| PaymentsApi | get_payment | GET /v1/payments/{paymentKey} | Retrieve a payment |
| PaymentsApi | get_payment_item_part | GET /v1/payments/{paymentKey}/parts/{partId}/item-parts/{itemPartId} | Retrieve a payment part item |
| PaymentsApi | get_payment_item_parts | GET /v1/payments/{paymentKey}/parts/{partId}/item-parts | List all payment part items |
| PaymentsApi | get_payment_part | GET /v1/payments/{paymentKey}/parts/{partId} | Retrieve a payment part |
| PaymentsApi | get_payment_parts | GET /v1/payments/{paymentKey}/parts | List all parts of a payment |
| PaymentsApi | get_retrieve_all_payments | GET /v1/payments | List payments |
| PaymentsApi | refund_paymentwith_auto_unapply | POST /v1/payments/{paymentKey}/refunds/unapply | Refund a payment with auto-unapplying |
| PaymentsApi | transfer_payment | PUT /v1/payments/{paymentKey}/transfer | Transfer a payment |
| PaymentsApi | unapply_payment | PUT /v1/payments/{paymentKey}/unapply | Unapply a payment |
| PaymentsApi | update_payment | PUT /v1/payments/{paymentId} | Update a payment |
| ProductRatePlanChargeTiersApi | get_product_rate_plan_charge_tier | GET /v1/object/product-rate-plan-charge-tier/{id} | CRUD: Retrieve a product rate plan charge tier |
| ProductRatePlanChargeTiersApi | update_product_rate_plan_charge_tier | PUT /v1/object/product-rate-plan-charge-tier/{id} | CRUD: Update a product rate plan charge tier |
| ProductRatePlanChargesApi | create_product_rate_plan_charge | POST /v1/object/product-rate-plan-charge | CRUD: Create a product rate plan charge |
| ProductRatePlanChargesApi | delete_product_rate_plan_charge | DELETE /v1/object/product-rate-plan-charge/{id} | CRUD: Delete a product rate plan charge |
| ProductRatePlanChargesApi | get_product_rate_plan_charge | GET /v1/object/product-rate-plan-charge/{id} | CRUD: Retrieve a product rate plan charge |
| ProductRatePlanChargesApi | update_product_rate_plan_charge | PUT /v1/object/product-rate-plan-charge/{id} | CRUD: Update a product rate plan charge |
| ProductRatePlanChargesApi | update_product_rate_plan_charge_finance_information | PUT /v1/product-rate-plan-charges/{product-rate-plan-charge-key}/finance-information | Update a Zuora Revenue accounting code |
| ProductRatePlansApi | create_product_rate_plan | POST /v1/object/product-rate-plan | CRUD: Create a product rate plan |
| ProductRatePlansApi | delete_product_rate_plan | DELETE /v1/object/product-rate-plan/{id} | CRUD: Delete a product rate plan |
| ProductRatePlansApi | get_product_rate_plan | GET /v1/product-rate-plans/{id} | Retrieve a product rate plan by ID |
| ProductRatePlansApi | get_product_rate_plans_by_external_id | GET /v1/product-rate-plans/external-id/{externalId} | List product rate plans by external ID |
| ProductRatePlansApi | get_rate_plans_by_product | GET /v1/rateplan/{product-key}/productRatePlan | List all product rate plans of a product |
| ProductRatePlansApi | update_product_rate_plan | PUT /v1/object/product-rate-plan/{id} | CRUD: Update a product rate plan |
| ProductsApi | create_product | POST /v1/object/product | Create a product |
| ProductsApi | delete_product | DELETE /v1/object/product/{id} | CRUD: Delete a product |
| ProductsApi | get_product | GET /v1/catalog/product/{product-key} | Retrieve a product |
| ProductsApi | get_products | GET /v1/catalog/products | Get all products |
| ProductsApi | update_product | PUT /v1/object/product/{id} | CRUD: Update a product |
| RSASignaturesApi | create_rsa_signature | POST /v1/rsa-signatures | Generate an RSA signature |
| RSASignaturesApi | decrypt_rsa_signature | POST /v1/rsa-signatures/decrypt | Decrypt an RSA signature |
| RampsApi | get_ramp_by_number | GET /v1/ramps/{rampNumber} | Retrieve a ramp |
| RampsApi | get_ramp_metrics_by_number | GET /v1/ramps/{rampNumber}/ramp-metrics | List all ramp metrics of a ramp |
| RampsApi | get_ramp_metrics_by_order_number | GET /v1/orders/{orderNumber}/ramp-metrics | List ramp metrics by order number |
| RampsApi | get_ramp_metrics_by_subscription_key | GET /v1/subscriptions/{subscriptionKey}/ramp-metrics | List ramp metrics by subscription key |
| RampsApi | get_ramps_by_subscription_key | GET /v1/subscriptions/{subscriptionKey}/ramps | Retrieve a ramp by subscription key |
| RatePlansApi | get_rate_plan | GET /v1/rateplans/{ratePlanId} | Retrieve a rate plan |
| RefundsApi | cancel_refund | PUT /v1/refunds/{refundKey}/cancel | Cancel a refund |
| RefundsApi | delete_refund | DELETE /v1/refunds/{refundKey} | Delete a refund |
| RefundsApi | get_refund | GET /v1/refunds/{refundKey} | Retrieve a refund |
| RefundsApi | get_refund_item_part | GET /v1/refunds/{refundKey}/parts/{refundPartId}/item-parts/{itemPartId} | Retrieve a refund part item |
| RefundsApi | get_refund_item_parts | GET /v1/refunds/{refundKey}/parts/{refundPartId}/item-parts | List all refund part items |
| RefundsApi | get_refund_part | GET /v1/refunds/{refundKey}/parts/{refundPartId} | Retrieve a refund part |
| RefundsApi | get_refund_parts | GET /v1/refunds/{refundKey}/parts | List all parts of a refund |
| RefundsApi | get_refunds | GET /v1/refunds | List refunds |
| RefundsApi | update_refund | PUT /v1/refunds/{refundId} | Update a refund |
| RegenerateApi | p_ost_create_rev_rec_events | POST /v1/uno-regenerate/rev-rec-events | Regenerate Rev Rec Event |
| RegenerateApi | p_ost_generate_rev_rec_events_for_daily_consumption | POST /v1/uno-regenerate/rev-rec-events/daily-consumption | Regenerate Rev Rec Event |
| RegenerateApi | p_ost_regenerate_billing_transaction | POST /v1/uno-regenerate/billing-transaction | Regenerate Billing Transaction |
| RegenerateApi | p_ost_regenerate_booking_transaction | POST /v1/uno-regenerate/booking-transaction | Regenerate Booking Transaction |
| RevenueIntegrationApi | describe_view_columns | GET /integration/v2/biviews/{view_name}/describe-columns |  |
| RevenueIntegrationApi | download_report | GET /integration/v1/reports/download/{filename} |  |
| RevenueIntegrationApi | generate_jwt_token | POST /integration/v1/authenticate |  |
| RevenueIntegrationApi | get_bi_view_count | GET /integration/v2/biviews/count/{view_name} |  |
| RevenueIntegrationApi | get_bi_view_status | GET /integration/v2/biviews-status |  |
| RevenueIntegrationApi | get_bi_view_task_details | GET /integration/v2/biviews-status/{task_id} |  |
| RevenueIntegrationApi | get_bi_views | GET /integration/v1/biviews/{view_name} |  |
| RevenueIntegrationApi | get_bi_views_v2 | GET /integration/v2/biviews/{view_name} |  |
| RevenueIntegrationApi | get_csv_upload_status | GET /integration/v1/csv/upload/status |  |
| RevenueIntegrationApi | get_file_upload_status_by_request_id | GET /integration/v1/fileupload/status/{file_request_id} |  |
| RevenueIntegrationApi | get_reports_by_id | GET /integration/v1/reports/{report_id} |  |
| RevenueIntegrationApi | get_stage_error | GET /integration/v1/stage/error/{errortype} |  |
| RevenueIntegrationApi | integration_v2_reports_signedurl_report_id_get | GET /integration/v2/reports/signedurl/{report_id} |  |
| RevenueIntegrationApi | list_reports | GET /integration/v1/reports/list |  |
| RevenueIntegrationApi | select_bi_view | POST /integration/v1/biviews/{view_name} |  |
| RevenueIntegrationApi | upload_csv | POST /integration/v1/csv/upload |  |
| RevenueIntegrationApi | upload_file | POST /integration/v1/upload/file |  |
| RevenueIntegrationApi | upload_mapping | POST /integration/v1/upload/mapping |  |
| RevenueAccountingCodesApi | put_rev_pro_accounting_codes | PUT /v1/revpro-accounting-codes | Update a Zuora Revenue accounting code |
| SequenceSetsApi | create_sequence_sets | POST /v1/sequence-sets | Create sequence sets |
| SequenceSetsApi | delete_sequence_set | DELETE /v1/sequence-sets/{id} | Delete a sequence set |
| SequenceSetsApi | get_sequence_set | GET /v1/sequence-sets/{id} | Retrieve a sequence set |
| SequenceSetsApi | get_sequence_sets | GET /v1/sequence-sets | List sequence sets |
| SequenceSetsApi | update_sequence_set | PUT /v1/sequence-sets/{id} | Update a sequence set |
| SettingsApi | get_list_all_settings | GET /settings/listing | List all settings |
| SettingsApi | post_process_settings_batch_request | POST /settings/batch-requests | Submit settings requests |
| SignUpApi | post_sign_up | POST /v1/sign-up | Sign up |
| SubscriptionChangeLogsApi | get_subscription_change_logs_by_order_number | GET /subscription-change-logs/orders/{orderNumber} | Retrieve change logs for a subscription |
| SubscriptionChangeLogsApi | get_subscription_change_logs_by_subscription_number | GET /subscription-change-logs/{subscriptionNumber} | Retrieve change logs for a subscription |
| SubscriptionChangeLogsApi | get_subscription_change_logs_by_subscription_number_and_version | GET /subscription-change-logs/{subscriptionNumber}/versions/{version} | Retrieve change logs for a subscription |
| SubscriptionsApi | cancel_subscription | PUT /v1/subscriptions/{subscription-key}/cancel | Cancel a subscription |
| SubscriptionsApi | create_subscription | POST /v1/subscriptions | Create a subscription |
| SubscriptionsApi | delete_subscription | PUT /v1/subscriptions/{subscription-key}/delete | Delete a subscription by number |
| SubscriptionsApi | get_metrics_by_subscription_numbers | GET /v1/subscriptions/subscription-metrics | List subscriptions metrics by subscription numbers |
| SubscriptionsApi | get_subscription_by_key | GET /v1/subscriptions/{subscription-key} | Retrieve a subscription by key |
| SubscriptionsApi | get_subscription_by_key_and_version | GET /v1/subscriptions/{subscription-key}/versions/{version} | Retrieve a subscription by key and version |
| SubscriptionsApi | get_subscriptions_by_account | GET /v1/subscriptions/accounts/{account-key} | List subscriptions by account key |
| SubscriptionsApi | preview_existing_subscription | POST /v1/subscriptions/{subscription-key}/preview | Preview a subscription by key |
| SubscriptionsApi | preview_subscription | POST /v1/subscriptions/preview | Preview a subscription |
| SubscriptionsApi | renew_subscription | PUT /v1/subscriptions/{subscription-key}/renew | Renew a subscription |
| SubscriptionsApi | resume_subscription | PUT /v1/subscriptions/{subscription-key}/resume | Resume a subscription |
| SubscriptionsApi | suspend_subscription | PUT /v1/subscriptions/{subscription-key}/suspend | Suspend a subscription |
| SubscriptionsApi | update_subscription | PUT /v1/subscriptions/{subscription-key} | Update a subscription |
| SubscriptionsApi | update_subscription_custom_fields_of_a_specified_version | PUT /v1/subscriptions/{subscriptionNumber}/versions/{version}/customFields | Update subscription custom fields of a subscription version |
| SummaryJournalEntriesApi | cancel_summary_journal_entry | PUT /v1/journal-entries/{je-number}/cancel | Cancel a summary journal entry |
| SummaryJournalEntriesApi | create_summary_journal_entry | POST /v1/journal-entries | Create a summary journal entry |
| SummaryJournalEntriesApi | delete_summary_journal_entry | DELETE /v1/journal-entries/{je-number} | Delete a summary journal entry |
| SummaryJournalEntriesApi | get_all_summary_journal_entries | GET /v1/journal-entries/journal-runs/{jr-number} | List all summary journal entries in a journal run |
| SummaryJournalEntriesApi | get_summary_journal_entry | GET /v1/journal-entries/{je-number} | Retrieve a summary journal entry |
| SummaryJournalEntriesApi | update_basic_summary_journal_entry | PUT /v1/journal-entries/{je-number}/basic-information | Update a summary journal entry |
| TaxationItemsApi | create_taxation_item | POST /v1/object/taxation-item | CRUD: Create a taxation item |
| TaxationItemsApi | delete_taxation_item | DELETE /v1/taxation-items/{id} | Delete a taxation item |
| TaxationItemsApi | get_taxation_item | GET /v1/taxation-items/{id} | Retrieve a taxation item |
| TaxationItemsApi | put_taxation_item | PUT /v1/taxation-items/{id} | Update a taxation item |
| UsageApi | create_usage | POST /v1/object/usage | CRUD: Create a usage record |
| UsageApi | delete_usage | DELETE /v1/object/usage/{id} | CRUD: Delete a usage record |
| UsageApi | get_usage | GET /v1/object/usage/{id} | CRUD: Retrieve a usage record |
| UsageApi | get_usage_rate_detail_by_invoice_item | GET /v1/invoices/invoice-item/{invoice-item-id}/usage-rate-detail | Retrieve usage rate detail for an invoice item |
| UsageApi | get_usages_by_account | GET /v1/usage/accounts/{account-key} | Retrieve usage records by account |
| UsageApi | update_usage | PUT /v1/object/usage/{id} | CRUD: Update a usage record |
| UsageApi | upload_usage_file | POST /v1/usage | Upload a usage file |
| WorkflowsApi | delete_workflow | DELETE /workflows/{workflow_id} | Delete a workflow |
| WorkflowsApi | delete_workflow_version | DELETE /workflows/versions/{version_id} | Delete a workflow version |
| WorkflowsApi | get_workflow | GET /workflows/{workflow_id} | Retrieve a workflow |
| WorkflowsApi | get_workflow_export | GET /workflows/{workflow_id}/export | Export a workflow version |
| WorkflowsApi | get_workflow_run | GET /workflows/workflow_runs/{workflow_run_id} | Retrieve a workflow run |
| WorkflowsApi | get_workflow_versions | GET /workflows/{workflow_id}/versions | List all versions of a workflow definition |
| WorkflowsApi | get_workflows | GET /workflows | List workflows |
| WorkflowsApi | get_workflows_task | GET /workflows/tasks/{task_id} | Retrieve a workflow task |
| WorkflowsApi | get_workflows_tasks | GET /workflows/tasks | List workflow tasks |
| WorkflowsApi | get_workflows_usages | GET /workflows/metrics.json | Retrieve workflow task usage |
| WorkflowsApi | p_atch_update_workflow | PATCH /workflows/{workflow_id} | Update a workflow |
| WorkflowsApi | post_run_workflow | POST /workflows/{workflow_id}/run | Run a workflow |
| WorkflowsApi | post_workflow_import | POST /workflows/import | Import a workflow |
| WorkflowsApi | post_workflow_versions_import | POST /workflows/{workflow_id}/versions/import | Import a workflow version |
| WorkflowsApi | post_workflows_task_rerun | POST /workflows/tasks/{task_id}/rerun | Rerun a workflow task |
| WorkflowsApi | put_workflows_tasks_update | PUT /workflows/tasks/batch_update | Update workflow tasks |
