---
title: "View e-invoice file status and error information through the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoice-files-generation-for-billing-documents/view-e-invoice-file-status-and-error-information-through-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T18:33:00.478Z"
---

# View e-invoice file status and error information through the Zuora UI

Learn how to view e-invoice file status and error information for billing documents through the Zuora UI.

After the generation of e-invoice files for invoices is triggered, you can view e-invoice file status and error information about a billing document through the Zuora UI.

To view e-invoicing data about an invoice through the Zuora UI, perform the following steps:

1.  In the left navigation section, navigate to Billing > Invoices.
2.  On the Invoices page, click the number of the invoice that you want to view e-invoicing data about.
3.  On the invoice details page, view the information displayed below the E-Invoice Status field in the Basic Information section.

    -   If an e-invoice file is successfully generated for the invoice, Success is displayed as the status value of this field.

    -   If the e-invoice file generation conditionally succeeds and an e-invoice file is generated, Conditional Success is displayed as the status value of this field. The Conditional Success status is activated when the Tax Authority sends back a SCI response code of Conditionally Accepted (CA).

    -   If a failure occurs during e-invoice file generation, the corresponding error code and an error message are also displayed as the value of this field. You can access detailed error codes and error messages through the Zuora UI.

    -   If an e-invoice file is approved by the tax authority, but may still require further validation by the end customer, the Approved by Authority status is displayed as the status value of this field. The next status will be either Success or Rejected.

    -   If the end customer explicitly rejects an e-invoice file, the Rejected status is displayed as the status value of this field. You cannot resend a rejected e-invoice; you must create a new invoice instead.


4.  If you want to learn more log information, click the Download Logs link below the E-Invoice Status field to download the e-invoicing log file.

    The procedure for viewing e-invoice file status and error message information about credit memos or debit memos is similar to the preceding procedure.

    The following table lists the common error codes, error messages, and the corresponding resolutions.

    | E-Invoice Status | Error code | Error message | Resolution |
    | --- | --- | --- | --- |
    | Fail | ConfigurationError | The E-Invoice service provider is not configured in E-Invoice settings, please check your settings.The E-Invoice business region is not configured for the country {0} in E-Invoice settings, please check your settings.The billing document cannot be processed as the country is not specified in the billing information.Service provider is not supported.Can not find E-Invoice template for the service provider Sovos in the country IN for CreditMemo.The billing document can't be submitted because it matches more than one business region. Please review your business region configuration and ensure that only one region applies to the billing document. | Modify the corresponding e-invoicing configurations. |
    | IntegrationError | Failed: IntegrationError - request URL /api/v1/workflows/396483/run failedFailed to render Sovos Business Document | Download the transaction log through the Zuora UI and contact Zuora Global Support with the transaction log. |  |
    | ServiceProviderError | Internal error | Contact Zuora Global Support or the corresponding service provider. |  |
    | Vendor-specific error codesExamples:document.documentDataInvalidinvalidParameter | IRN cannot be generated for the document date which is prior to 1st October 2020There was an error validating the transformation 'SCI_to_GST' with error 'The 'http://www.trustweaver.com/gst/json:AssVal' element is invalid | Verify your data or the e-invoice file templates. |  |
    | Conditional Success | Vendor-specific error codesExample:XSD_ZATCA_VALID | 200: Conditionally authorized by the tax authority. XSD_ZATCA_VALID: Complied with UBL 2.1 standards in line with ZATCA specifications. BR-S-08: [BR-S-08]-In a VAT breakdown (BG-23) where the VAT category code (BT-118) is ' Standard rated' the VAT category taxable amount (BT-116) shall equal the sum of Invoice line net amounts (BT-131) minus the sum of Document level allowance amounts (BT-92) plus the sum of Document level charge amounts (BT-99) where the VAT category codes (BT-151, BT-95, BT-102) are 'Standard Rate' | Check the rules defined for UBL document in https://docs.peppol.eu/poacc/billing/3.0/2024-Q2/rules/ubl-tc434/BR-S-08/ and adjust the E-Invoice template accordingly so that it meets the standard. |
