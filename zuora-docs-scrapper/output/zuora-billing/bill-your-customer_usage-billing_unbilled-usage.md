---
title: "Unbilled Usage"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/unbilled-usage"
product: "zuora-billing"
scraped_at: "2025-12-24T08:28:49.752Z"
---

# Unbilled Usage

Unbilled Usage allows you to monitor consumption-based subscription usage and due amounts before billing, with real-time updates and threshold notifications.

Unbilled Usage enables you to access the usage and due amounts of consumption-based subscriptions before charges are billed. After usage records are uploaded for a charge, you can view the accumulated usage and updated amount in near real-time. The rating results are calculated at the usage-charge level.

The unbilled usages and amounts will be updated automatically when new usage records are added to charges. Usage and amounts will also be re-rated if changes are made to subscriptions, for example, the value of the billing cycle day of a charge is changed.

In addition, you can upload usage records after service periods are billed, or even after the accounting periods that contain the billed service periods are closed.

You can set threshold notifications against Unbilled Usage to notify your customers when usage has reached certain thresholds. Use the Rating Result base object to set event triggers.

This feature also enables you to retrieve the consumption information, such as the unbilled charges, usage quantities, and amounts due, through the Rating Result data source.

## Availability

You need to turn on the Unbilled Usage feature from the self-service interface.

Additionally, if you want Unbilled Usage to support your Production environments' Pre-rated and High Water Mark charge models, submit a request at [Zuora Global Support](https://www.zuora.com/support-center/) for both Sandbox and Production environments.

## Supported charge models

When the Unbilled Usage feature is enabled, the following usage charge models are supported:

-   Per Unit Pricing

-   Tiered Pricing

-   Volume Pricing

-   Tiered with Overage Pricing

-   High Water Mark Pricing

-   Pre-Rated Pricing


Note:

Unbilled Usage’s support of the High Water Mark Pricing and Pre-Rated Pricing charge models is in the Early Availability phase. Drawdown charges are not supported for the High Water Mark Pricing and Pre-Rated Pricing charge models.

We are actively soliciting feedback from a small set of early users before releasing it as generally available. If you want to join this early availability program, submit a request at [Zuora Global Support](https://www.zuora.com/support-center/).

## View unbilled usages on Zuora UI

With this feature enabled, you can view unbilled usages on the subscription details page through Zuora UI.

In the Unbilled Usage section, each row represents the unbilled usage of a charge for an unbilled billing period. The following information is available:

-   Charge: Name of the charge

-   Service Period: The billing period of the unbilled charge

-   UOM: Unit of measurement of the charge

-   Quantity: Accumulated usage

-   Amount: Rated due amount


If you have enabled the reinvented UI, you can view the unbilled usage of each charge by clicking the View Unbilled Usage link under the charge.

Once a charge is billed for a billing period, the corresponding unbilled usage item will disappear from the table.

For drawdown usage charges, only after the entire prepaid balance is consumed, the remaining usage will be generated and displayed for the billing period in which the usage is added to.

For non-drawdown usage charges, unbilled usage will be updated right after the usage is uploaded.

## Upload usage record with unique key

A unique key is a specific identifier for a usage record. You can use it to upsert a usage record, that is, to update an existing record identified by the unique key field or insert a new record if the unique key doesn’t exist.

You can use the unique key in the following ways:

-   As a new column called UNIQUE\_KEY when importing a usage file.

-   As a new field called UniqueKey in the request body when using the SOAP API call.


The upsert operation can only be done via usage import. You cannot use any of the Usage REST APIs to perform this operation.

Unique key is not required for a usage record, but if you include it, the system will check whether a usage record with the same unique key already exists in the database.

-   If No, the system will create a new usage record.

-   If Yes and the existing usage record was deleted, the system will recover the usage record and update it with the new one.

-   If Yes and the existing usage record was not deleted,

    -   If the two records are identical, the system will ignore the new usage record and keep the existing one.

    -   If the two records differ in Account ID, Subscription ID, or Charge ID, the system will block this operation because those fields cannot be updated.

    -   If the two records differ in UOM, Start Date, Quantity, End Date, or Description, the system will update the existing usage record with the new one.


## Unbilled usage for tiered charge model

If you enable Unbilled Usage while using a tiered or volume-based pricing model with a flat fee for the first tier, the behavior depends on how the first tier's quantity range is configured:

-   If the first tier starts at quantity 0 :

    -   If any usage is uploaded, the system charges the flat fee for the first tier.

    -   If no usage is uploaded and the total quantity is 0, the system still charges the flat fee for the first tier.

-   If the first tier starts at quantity 1 :

    -   If any usage is uploaded, the system charges the flat fee for the first tier.

    -   If no usage is uploaded and the total quantity is 0, the system charges $0.


This behavior differs from legacy rating, where the flat fee for the first tier is always charged regardless of whether usage is uploaded or not.

## Notes and limitations

The Unbilled Usage feature currently has the following limitations:

-   Rating usage records individually is not compatible with the Unbilled Usage feature and and subsequent drawdown from currency-based prepaid balance.

-   Rating Group can only be one of By Billing Period, By Usage Start Date, or By Usage Upload.

-   You must refresh the data if the settings or billing periods are changed after the unbilled usage rating results are generated.

-   The Change the owner of a subscription order action is allowed if all the guided usage under this subscription is billed. Note that invoice ownership transfer is supported.

-   Note the supported charge models by Unbilled Usage. The unsupported charges will not have unbilled results generated.

-   For subscriptions containing usage records that are not uploaded at the rate plan charge level (guiding usage), upon order actions that update the existing rate plan charge, the unbilled amount of those usage will not be re-calculated per the updated charge automatically. To view the re-calculated unbilled amount:

    -   If the usage record has a unique key, re-import this record after the rate plan charge updates. This is because upsert is only supported via file import.

    -   If the usage record doesn't have a unique key, you must first delete the usage record and then re-upload the record.

-   For existing subscriptions, you need an enablement process to fully utilize the unbilled usage feature. You must complete the enablement and migration process to avoid bill run errors, after which the unbilled usage information will be present for existing usage charges for the supported usage charge models. Only new usage records that belong to the next billing periods after enablement can enjoy unbilled usage. The existing billing periods that have yet to be billed will continue to use the old rater, not the new unbilled usage rater.

    -   Zuora provides support for the migration process.

    -   To manage and access this feature from the self-service interface, see Enable billing features by yourself.

-   Once turned on, the t9 setting cannot be turned off.

-   When Unbilled Usage is enabled, the `Do not process usage charges without usage records` tenant setting is not applied. As a result, bill runs can still generate a $0 invoice item for a usage charge in a billing period with no uploaded usage. This is expected behavior and is not configurable through a feature setting.
-   When the Usage charge's effective start date is changed due to a Trigger date change or Trigger condition change, The usage is guided to the charge only when the usage is within the charge's effective date. When uploading a usage of a start date well advanced before the charge effective start date, it will not generate the guided usage to map it to the charge. Later, when the trigger date of the subscription is changed (update of SA/CE/CA date) or trigger condition is changed in the charge and the charge's effective start date is updated to the date before or on the earlier uploaded usage start date, the usage will not be guided to this charge and not included in the unbilled rating amount. To rate the earlier uploaded usage, delete the existing usage and upload the usage again.


Example:

1.  Create a Subscription with Contract effective = Service activation = Customer acceptance = 2025-01-01.

2.  The rate plan contains a usage charge where the trigger condition is Upon a Specific Date = 2025-06-01.

3.  Upload the usage that links to the new usage charge, with a start date of 2025-01-01. No guided usage is created because the start date is outside the usage effective period. Update the trigger condition of the Usage Rate Plan Charge using the UI or API to Upon Contract Effective. This will update the usage effective start date to 2025-01-01.

4.  Update the trigger condition of the Usage Rate Plan Charge using the UI or API to Upon Contract Effective. This will update the usage effective start date to 2025-01-01.


It is observed that the earlier uploaded Usage will not be included in the unbilled rating because there is a limitation regarding the existing usages to guide past usages.

To avoid this, Zuora recommends to avoid uploading usage with a start date outside the Usage effective period, and update the trigger condition first, and then upload the usage later.
