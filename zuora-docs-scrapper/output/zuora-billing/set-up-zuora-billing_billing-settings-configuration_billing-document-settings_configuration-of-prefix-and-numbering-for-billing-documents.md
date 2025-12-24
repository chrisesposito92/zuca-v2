---
title: "Configuration of prefix and numbering for billing documents"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/billing-document-settings/configuration-of-prefix-and-numbering-for-billing-documents"
product: "zuora-billing"
scraped_at: "2025-12-24T05:04:51.577Z"
---

# Configuration of prefix and numbering for billing documents

Covers information on configuration of prefixes and numbering for billing documents, including invoices, credit memos, and debit memos, using sequence sets in Zuora.

You can create and manage billing document sequence sets, allowing multiple distinct numbering sequences for billing documents, payments, and refunds. Billing documents include invoices, credit memos, and debit memos.

A billing document sequence set comprises a set of custom prefixes and starting document numbers that are used for billing documents to generate, and payments and refunds to create.

Note:

The Credit and Debit Memos feature is only available if you enable the Invoice Settlement feature.

Zuora billing document numbers, payment numbers, and refund numbers comprise a custom prefix followed by a sequential number. For example, a company named Grand Hotels might use invoice numbers such as `GHINV00000142` . We recommend that you use meaningful prefix names so that they are easy to understand and manage.

In the Define Prefixes, Numbers and Sequence Sets area on the Define Numbering and SKU Formats page, you can configure a sequence set consisting of a prefix and starting document number for the next billing documents, payments, and refunds to generate by Zuora. When you change the prefix or starting document number, Zuora does not modify the document numbers of previously generated billing documents, payments, and refunds.

By default, Zuora uses the sequence set called “DEFAULT” when generating or creating billing documents, payments, and refunds for all customer accounts. The default sequence set cannot be deleted.

The following table lists the default billing document sequence set.

| Sequence Set | Document | Default Prefix | Default Starting Document Number |
| --- | --- | --- | --- |
| DEFAULT | Invoice | INV | 1 |
| Credit Memo | CM | 1 |  |
| Debit Memo | DM | 1 |  |
| Payment | P- | 1 |  |
| Refund | R- | 1 |  |

When creating a sequence set, the prefix and starting number are required for billing documents, but optional for payments and refunds. If a sequence set has no prefix defined for payments or refunds, the corresponding prefix in the DEFAULT sequence set is used. If no prefix is defined for payments or refunds in the default sequence set, the default payment prefix P- and the default refund prefix R- are used.

You can manage billing document sequence sets with the following operations from the Zuora UI and REST API:

-   Create Billing Document Sequence Sets

-   Edit Billing Document Sequence Sets

-   View Information of Billing Document Sequence Sets

-   Delete Billing Document Sequence Sets


You can also assign billing document sequence sets to customer accounts. After the assignment is completed between a sequence set and an account, the billing documents generated, payments, and refunds created for this account adopt the configured prefix and starting document number. To achieve this, you can select an option from the Sequence Set list when creating or editing customer accounts.

If a customer account has no assigned billing document sequence set, billing documents, payments, and refunds generated for this account adopt the prefix and starting document number from the default sequence set. If no prefix is defined for payments or refunds in the default sequence set, the payments and refunds created for this account adopt the default payment prefix P- and the default refund prefix R- . Note that you cannot set P- or R- as a custom prefix as they are system sequence prefixes.

## Prefix examples

It is best practice to use the combination of different characters as billing document prefixes. The following table lists some common billing document prefix examples:

| Billing document type | Prefix | Sequence | Billing document number examples | Remarks |
| --- | --- | --- | --- | --- |
| Invoice | INV202301 | 10000300 | INV20230110000300 | The prefix uses the combination of alphabetic letters and and YYYYMM format. |
| Invoice | 202301 | 10000300 | 20230110000300 | The prefix uses the YYYYMM format. |
| Credit memo | 202302 | 300 | 20230200000300 |  |
| Debit memo | 202303 | 300 | 20230300000300 |  |

Although, Zuora does not allow generating duplicate billing document numbers, when you configure the sequence sets, you need to consider and avoid all cases where combinations of prefixes and sequences may result in duplicate billing document numbers.

It is best practice not to use only small numbers or numbers with slight differences as prefixes. For example, if you use a small number as a billing document prefix and have to generate plenty of billing documents, billing document numbers might conflict with each other. The following table indicates this example.

| Sequence set | Billing document type | Prefix | Sequence | Billing document number examples |
| --- | --- | --- | --- | --- |
| Sequence set 1 | Invoice | 23 | 10000300 | 2310000300 |
| Sequence set 2 | Invoice | 2 | 310000300 | 2310000300 |

## Test your configuration

Adding or updating a sequence set for a payment or refund might break the payment gateway integration or gateway reconciliation. We strongly recommend you test the billing document sequence set before it goes live in production. If you find any issues during testing, adjust the configuration of the sequence set and test it again. If the issue still persists, submit a ticket to Zuora Global Support .

## Considerations

-   You cannot use the following prefixes that are reserved:
    | Prefix | Description |
    | --- | --- |
    | PREVIEW-TMP-INV-TMP-CM-TMP-DM- | Reserved for internal uses. |
    | PM- | Reserved for payment method sequence. |
    | PG- | Reserved for payment gateway sequence. |
    | P- | Reserved for payments. |
    | R- | Reserved for refunds. |

-   The name of a billing document sequence set can contain a maximum of 15 characters.
-   The name of a billing document sequence set must start with an alphabetic letter or a digit.
-   The name of a billing document sequence set can only contain alphabetic letters, digits, and dashes.
-   The prefix must contain at least one character and at most 16 characters.
-   The prefix can only contain the following characters:a-z,A-Z,0-9,-,\_
-   Purely numerical prefixes or prefixes ending with a number apply only to prefixes for billing documents, including invoices, credit memos, and debit memos. For example, you can use the *YYYY*\-*MM*\-*number* format as a prefix, such as 2023-09-100.
-   The first character of the prefix cannot be an underscore or a dash.
-   If a prefix has been used with one type of the billing document, payments, or refunds, you are not allowed to use it for other types of billing documents, payments, or refunds. For example, you use MO as the prefix for credit memos. Then you rename the prefix to CM for credit memos. You cannot use MO as the prefix for debit memos, invoices, payments, or refunds. You can only use MO as the prefix for credit memos.
-   The starting document number, payment starting number, or refund starting number must be greater than or equal to the displayed Min start number for the prefix. This limitation ensures that document numbers of previously generated documents, payments, and refunds are not reused in the future.
-   The maximum length of a sequential number is 20 digits, while the minimum length is eight digits.
    -   By default, a sequential number contains at least eight digits and starts with 00000001. For any sequential number less than 10000000, leading zeros automatically come before the first nonzero digit to ensure that the complete document number contains eight digits. For example, INV00000018, INV00009785, and INV00236018.
    -   If a sequential number exceeds eight digits, the complete document number contains no leading zeros. For example, INV100000006, INV100000028, and INV9876543210036.
