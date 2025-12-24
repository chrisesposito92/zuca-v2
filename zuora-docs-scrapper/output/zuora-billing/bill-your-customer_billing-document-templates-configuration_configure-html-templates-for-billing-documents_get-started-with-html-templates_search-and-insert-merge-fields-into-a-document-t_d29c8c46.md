---
title: "Considerations and limitations"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/get-started-with-html-templates/search-and-insert-merge-fields-into-a-document-template/considerations-and-limitations"
product: "zuora-billing"
scraped_at: "2025-12-24T05:39:58.748Z"
---

# Considerations and limitations

Explore the considerations and limitations of using the search function for merge fields.

## Considerations

-   The search function activates when you type more than 2 characters. It is recommended to avoid vague searches on the entire dataset in order to prevent performance issues.

-   Upon loading the page, the search bar will be greyed out, indicating it's not yet available for searching. The initial search process involves a 1 or 2-second completion time. Once completed, it will be searchable, and you can enter your search query.

-   Search supports the ability to search merge field data paths (i.e., Invoice.Invoicedate).


## Limitations

Access to search results is available up to the 5th hierarchical level. To avoid app crashes, the display of hierarchical levels is capped at 5. If search results surpass 1000, the app will limit levels to 4 instead of 5.

The search function cannot search for fields with custom objects as the root. However, custom fields created for invoices, credit memos, and debit memos can still be searched.
