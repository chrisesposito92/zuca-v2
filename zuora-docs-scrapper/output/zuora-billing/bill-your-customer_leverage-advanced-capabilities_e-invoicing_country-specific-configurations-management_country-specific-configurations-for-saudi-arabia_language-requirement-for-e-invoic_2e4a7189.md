---
title: "Language requirement for e-invoice file templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-for-saudi-arabia/language-requirement-for-e-invoice-file-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T18:31:54.622Z"
---

# Language requirement for e-invoice file templates

Understand the language requirements for e-invoice file templates, specifying when to use Arabic or English, and how to add multi-language information.

ZATCA accepts e-invoice XML files in either English or Arabic. However, the invoice PDF files you share with your customers must be in Arabic.

The language requirement for e-invoice file templates depends on whether you use Sovos’ PDF template:

-   If you use Sovos’ PDF template, the text in e-invoice file templates must be in Arabic. In this case, Sovos can auto-generate the corresponding Arabic PDF files. Additionally, you can include other languages besides Arabic in e-invoice file templates. For more information, see Add multi-language information to e-invoice file templates .

-   If you opt not to use Sovos’ PDF template, the text information in e-invoice file templates can be in English or Arabic.


## Add multi-language information to e-invoice file templates

To add multi-language information to e-invoice file templates, you must add a pipe symbol ( `|` ) between the information in different languages. See the following snippet as an example:

<cbc:StreetName> استخدام جسر مجمع الملك عبده عبد العزيز للاتصالات | KING ABDU AZIZ TELECOM COMPLEX BRIDGE USE</cbc:StreetName> <cbc:CitySubdivisionName>النخيل | An Nakhil</cbc:CitySubdivisionName> <cbc:CityName>الرياض | RIYADH</cbc:CityName>

It is recommended to store the information of different languages in separate fields and use merge fields in e-invoice file templates. Suppose that the `City` field stores the English city name and the `CityNameInArabic__c` custom field stores the Arabic city name. The `cbc:CityName` tag in the template should be as follows:

<cbc:CityName>{{CityNameInArabic\_\_c}} | {{City}}</cbc:CityName>
