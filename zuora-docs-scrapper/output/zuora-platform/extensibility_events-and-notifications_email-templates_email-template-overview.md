---
title: "Email template overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/email-templates/email-template-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:25:41.229Z"
---

# Email template overview

Email templates specify details of email notifications, such as the sender, recipients, email subject and email body.

Zuora provides default email templates for most standard events. You can also create email templates to tailor notification content for both standard and custom events based on your business needs.

## Merge fields in email templates

Merge fields serve as placeholders in email templates to automatically incorporate values from objects when email notifications are triggered.

You can add merge fields to the following places in an email template:

-   Email subject

-   Email body

-   Custom email header


## Custom email header

Custom email headers enable you to include additional information in your email notifications, tailored to your specific needs. You can use these headers to add tracking identifiers, unsubscribe links, and more.

The following is an example of a custom header definition with two email headers that enables a one-click unsubscribe link:
| Header name | Header value |
| --- | --- |
| List-Unsubscribe-Post | List-Unsubscribe=One-Click |
| List-Unsubscribe | <mailto:unsubscribeexampexample@example.com>, <https://www.unsubscribe.example.com> |

## Reusable blocks

Reusable blocks allow you to define corporate branding elements, such as headers and footers, and embed them into email templates. This eliminates the need to manually recreate branding elements and enhances consistency and efficiency in email template management.

Currently, the Deployment Manager does not support the migration of reusable blocks. To ensure that email templates render correctly after migration, you must manually recreate the reusable blocks in the target environment using the same block numbers as in the source environment.

For example, if a reusable block with the Block Number `RB-01` is embedded in several email templates in your source tenant, those templates will be copied to the target tenant during migration, and the block references will remain intact. To maintain correct rendering of email notifications, you must manually create a reusable block in the target tenant with the same content and set the Block Number to `RB-01`.

## Email template preview

Zuora allows you to preview email templates on the email template list, detail, create, or edit page.

You can simulate data, such as data source or advanced merge fields, when previewing email templates by assigning an object ID. For example, when you enter a subscription object ID while previewing an email template linked to the Subscription Created event, you can preview both the email format and the merge fields populated with data from the provided subscription object.

This functionality is designed to verify the syntax of merge fields in email templates. Preview emails may differ from the actual emails sent to recipients. For example, the date format in email notifications depends on the locale setting, which is determined by the notification context.

## Email template customization with the email template editor

The email template editor supports all the functionalities available in the HTML template editor, including configuring rows and columns, adding tables, or using custom objects. Additionally, the email template editor allows you to define reusable blocks, such as headers and footers, and embed them into multiple email templates.

Functionality available only in the email template editor:

-   [Configure reusable blocks in email templates](/zuora-platform/extensibility/events-and-notifications/email-templates/reusable-blocks/reusable-block-configuration-in-email-templates)

-   [Insert multimedia components into email templates](/zuora-platform/extensibility/events-and-notifications/email-templates/insert-multimedia-components-into-email-templates)


Functionalities available in both the email template and HTML template editor:

-   [Configure rows and columns in HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-rows-and-columns-in-html-templates)

-   [Configure text and merge fields in HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-text-and-merge-fields-in-html-templates)

-   [Configure barcodes in HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-barcodes-in-html-templates)

-   [Configure fonts in HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-fonts-in-html-templates)

-   [Configure page setup for HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-page-setup-for-html-templates)

-   [Configure RatingDetails in HTML template](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-ratingdetails-in-html-template)

-   [Configure summary tables in HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-summary-tables-in-html-templates)

-   [Configure data tables in HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-data-tables-in-html-templates)

-   [Display previous transactions data in HTML](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/display-previous-transactions-data-in-html)

-   [Configure images in HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-images-in-html-templates)

-   [Configure HTML codes in HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-html-codes-in-html-templates)

-   [Define date and numeric formats in HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/define-date-and-numeric-formats-in-html-templates)

-   [Use custom objects in HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/use-custom-objects-in-html-templates)

-   [Configure overall style for HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-overall-style-for-html-templates)

-   [Using advanced merge fields to apply conditional logic and loop control](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/logic-control-and-looping)


## Notes and limitations

You can use HTML codes in email templates. However, JavaScript and the following HTML tags are not allowed for security reasons:

Restricted HTML tags: script, html, head, body, form, input, button, and svg.
