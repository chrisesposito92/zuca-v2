---
title: "Digital Signature"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/digital-signature"
product: "zuora-billing"
scraped_at: "2025-12-24T18:33:15.836Z"
---

# Digital Signature

The Digital Signature feature enables signing PDF billing documents, ensuring authenticity, data integrity, and legal compliance, while offering customizable signature formats and positions.

This Digital Signature feature allows you to sign PDF files for billing documents with numerous benefits, such as verifying document authenticity, ensuring data integrity, legal compliance, preventing denial of transactions, improving efficiency, and enhancing security. Billing documents include invoices, credit memos, and debit memos, and memos are available only if you have the Invoice Settlement feature enabled.

Note: Sovos is the exclusive e-invoicing service provider supporting the Digital Signature feature.

When signing PDF files for billing documents, you can choose between two signature formats:

-   PDF Signature, adhering to the CAdES-A standard CAdES stands for CMS Advanced Electronic Signatures.

-   PAdES standard PAdES stands for PDF Advanced Electronic Signatures.


By default, the system is configured to use the PDF Signature format. CAdES-A offers unique advantages because it contains all the necessary information to validate the signature's authenticity when signing.

The standard setup includes a signature box that appears on the lower right of the first page of the PDF file generated for a billing document. However, you can customize the signature box's position according to your preferences. If you want to adjust the box position, submit a request at [Zuora Global Support](http://support.zuora.com/) with information about the desired X and Y coordinates. For example, using coordinates (0,0) places the signature box in the lower left, while (595, 842) places the signature box in the upper right of an A4 page.

For additional information, see [Sovos Signature](https://developer-guide.sovos.com/connect-once-api/e-invoicing-compliance/post-audit/signatures/).

## Availability

The Digital Signature feature is in the Early Availability phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](http://support.zuora.com/).

## Considerations

When using the Digital Signature feature, keep the following restrictions and limitations in mind:

-   The Digital Signature feature is incompatible with the files generated from HTML Templates and Word templates for billing documents. Instead, this feature exclusively works for PDF files that are externally uploaded to Zuora for billing documents.

-   When the Digital Signature feature is enabled for a business region, you can only upload PDF files for billing documents under the following conditions:

    -   The billing document must be in Posted status.

    -   The e-invoice file status for the billing document must be in Success status.
