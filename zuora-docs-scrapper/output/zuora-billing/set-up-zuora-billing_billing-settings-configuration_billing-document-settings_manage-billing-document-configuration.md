---
title: "Manage billing document configuration"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/billing-document-settings/manage-billing-document-configuration"
product: "zuora-billing"
scraped_at: "2026-02-20T17:28:50.636Z"
---

# Manage billing document configuration

Zuora allows you to configure the automatic generation of billing document files, including invoices, credit memos, and debit memos, through the Zuora UI.

Zuora offers the ability to configure whether to automatically generate files for billing documents through the Zuora UI. Billing documents include invoices, credit memos, and debit memos. Credit and debit memos are available only if you have the [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) feature enabled.

1.  Navigate to .

    The Manage Billing Document Configuration page opens.
    Note: Zuora's PDF generation process retrieves the latest data from invoice-related objects when generating PDFs. This is an asynchronous process, meaning the data is pulled at the time the PDF is actually processed. If objects used in PDF generation are updated while the process is running, the PDF will still be generated successfully. However, the updated data may not appear in that PDF. To reflect the most recent changes, you will need to re-generate the PDF. As a best practice, we recommend re-generating PDFs whenever you update data that needs to be displayed.

2.  To generate files for billing documents:
    1.  On the Manage Billing Document Configuration page, click the Settings tab.
    2.  Click the Enable the billing document generation check box on the displayed page.

        By default, this check box is selected, indicating Zuora generates files for billing documents.

        Note: If the function of automatically generate files for billing documents is enabled, you can easily create and manage your billing document templates. The billing document templates are used to generate PDF invoices for your bills. You can also customize the format of the numbers for billing documents.

        If you want to configure specifically when PDFs are generated, then there are 3 cases that you can select:

        -   Allow PDF generation for draft billing documents.

            Note: When Allow PDF generation for draft billing documents is disabled, PDFs cannot be generated manually or automatically while the document is in Draft status.

            When Allow PDF generation for draft billing documents is enabled, an additional option, Auto-generate PDF for draft billing documents, is available which is disabled by default.

        -   Auto-generate PDF for draft billing documents — When disabled, PDFs will not be automatically generated for all billing documents that are created or in Draft status. However, you can manually trigger regeneration from the UI or API to generate PDFs for billing documents in Draft status. When enabled, this field automatically generates PDFs for all billing documents that are created or in Draft status. However, it is visible only when the Allow PDF generation for draft billing documents option is enabled.

        -   Auto Generate PDF for billing documents being posted — When the setting is enabled, PDF generation occurs automatically. However, if the setting is disabled, PDFs will not be generated automatically when billing documents move to the Posted status. Nevertheless, you can manually generate PDFs through the UI, API, or Email, regardless of the status of the settings, even when the billing document is in the Posted status.

        -   Allow PDF generation for posted billing documents — This setting serves multiple purposes; one involves the background generation of PDFs, and the other involves triggering the UI via the View PDF via UI button. You can configure the setting to one of the following:

            -   When this setting is enabled, accessing the PDF through the user interface will trigger its generation if it's not already available.

            -   When this setting is disabled, attempting to view the PDF via the UI will not generate it, regardless of its availability.


        To understand the behavior, hover on the tooltip.

        Note: This configuration only applies to accounts that use HTML Templates and does not affect accounts that use Word Templates.

        The following table lists the expected behaviours upon trigger events after automatically generating files for billing documents is enabled. Each column operates on the assumption that enabling one sub-configuration automatically disables the others.

        | Triggers | When:Enable Billing Document Generation = True and Allow PDF generation for draft billing documents = true Is the PDF file generated? (Yes/No) | When:Enable Billing Document Generation = True and Auto-generate PDF for billing documents being posted = true Is the PDF file generated? (Yes/No) | When:Enable BillingDocument Generation= True and Allow PDFgeneration forbilling documentswhen Payments,Refunds, etc. areapplied = true Isthe PDF filegenerated? (Yes/No) |
        | --- | --- | --- | --- |
        | Invoice Generated in Draft status | NoNote:If the auto-generate PDF for draft billing documents option is enabled, PDFs are automatically generated. | No | No |
        | Invoice Posted | No | Yes | No |
        | Invoice is applied by payments, credit memos. | No | No | Yes |
        | Re-generate PDF via UI or API | YesIf the setting is disabled, a message, The request cannot be done because billing document generation for Draft documents is disabled, is displayed. | Yes | Yes |
        | View Invoice PDF via UI | A PDF file will be generated if it does not already exist. | A PDF file will be generated if it does not already exist. | A PDF file will be generated if it does not already exist. |

3.  To disable the function of automatically generating files for billing documents:
    1.  Clear the Enable the billing document generation check box.

        Only the Document Filename Patterns tab is displayed on the page.

        The following table lists the expected behaviors upon trigger events after the function of automatically generating files for billing documents is disabled.

        | Trigger | Expected behavior |
        | --- | --- |
        | Invoice events: changes on invoices or invoice itemsDraft invoice generatedInvoice postedPayment or credit appliedPayment refundedInvoice splittingAdjustmentsInvoice adjustmentsInvoice item adjustmentsCredit balance adjustments | No files are generated for invoices. |
        | UI: view invoice PDF files | If any PDF files exist for an invoice, you can click to download the last existing invoice PDF file.If no PDF file exists for the invoice, is unavailable on the invoice details page. |
        | UI: view invoice Word files | On the invoice details page, is unavailable, indicating that no Word files can be downloaded for the invoice. |
        | UI: regenerate PDF file for an invoice | On the invoice details page, is unavailable, indicating that no PDF files can be generated for the invoice. |
        | API: Synchronously or asynchronously create orders with Billing = True | No files are generated for invoices. |
        | UI/API: email invoice files | If any files exist for an invoice and a notification is defined to include an invoice file, the last existing file is attached in the notification email.Otherwise, email invoice and are unavailable on the invoice details page. The emailing action fails with the API option for emailing invoice files. |
        | API: regenerate files for invoices | If you call the corresponding API operation, a message "The request cannot be done because billing document generation is disabled". is returned. |
        | API: query invoice body | The last existing file for the invoice is downloaded if any. Otherwise, null is returned. |
        | API: get invoice file from Zuora 360 package in SFDC | The last existing PDF file for the invoice is downloaded if any. Otherwise, a message "No invoice was found" is returned. |
        | Export invoices | The last existing file for the invoice is downloaded if any. Otherwise, null is returned. |
        | Email notifications with invoice or payment attachments | If any files exist for an invoice and a notification is defined to include an invoice file, the last existing file is attached in the notification email. Otherwise, the "The notification cannot be sent" message is returned. |
        | Credit memos: same triggers as invoiceUI: view credit memo PDF fileUI: view credit memo Word fileUI: regenerate credit memo PDF fileAPI: regenerate credit memo PDF fileUI/API: email credit memo fileEmail notification of credit memos | Same as invoices. |
        | Debit memos: same triggers as invoiceUI: view debit memo PDF fileUI: view debit memo Word fileUI: regenerate debit memo PDF fileAPI: regenerate debit memo PDF fileUI/API: email debit memo fileEmail notification of debit memos | Same as invoices. |

4.  To manage billing document templates:
    1.  Click the Manage Invoice Rules and Templates tab to view your list of existing invoice templates and create new templates.

        Note: If you have the [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) feature enabled, the Manage Invoice, Credit/Debit Memo Templates tab is displayed. You can also manage credit and debit memo templates in this setting.

        You can use template Actions to set a template as your default, edit, preview, or remove a template. You can also show the ID of a template. Template IDs are used with the Zuora API. Billing document templates are set at the customer level, not at the product level.

5.  To set the default invoice template for Customer Accounts:

    -   Configure invoice templates for customers via Zuora UI.

    -   Configure invoice templates for customers via API.


    For more information, see [Select default template for billing documents](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/select-default-template-for-billing-documents), [Create HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/manage-html-templates/create-html-templates), and [Generate memo PDFs with custom memo template](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/generate-memo-pdfs-with-custom-memo-template).

    Note:

    The format of default billing document template is HTML. You can see that a template called System Default Template as the system default one the Manage Invoice, Credit/Debit Memo Templates tab. After understanding [the relationship between the system default template and default custom invoice template](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/select-default-template-for-billing-documents), you might either change the default custom invoice template, or edit the system default template or the copied one.

6.  To enable JavaScript for HTML templates:
    1.  Click the Settings tab.
    2.  Selecting the Enable JavaScript for HTML templates check box.

        Note: When this setting is enabled, existing HTML templates that were previously error-free may be disrupted and require remediation of new errors if existing templates are to be used to generate documents.


See [Prefix and Numbering Configuration for Billing Documents](/zuora-billing/set-up-zuora-billing/billing-settings-configuration/billing-document-settings/configuration-of-prefix-and-numbering-for-billing-documents) for more information.
