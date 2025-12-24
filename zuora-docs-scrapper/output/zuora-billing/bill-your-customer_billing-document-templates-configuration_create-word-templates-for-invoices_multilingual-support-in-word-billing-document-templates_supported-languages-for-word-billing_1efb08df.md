---
title: "Supported languages for Word billing document templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/multilingual-support-in-word-billing-document-templates/supported-languages-for-word-billing-document-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:49:16.786Z"
---

# Supported languages for Word billing document templates

Explore the supported languages and country codes for Word billing document templates, including considerations for localization.

The language country codes are comprised of two arguments separated by a dash, for example, fr-CA is French Canadian:

-   The first argument is a valid ISO Language Code. These codes are the lower-case two-letter codes as defined by ISO-639.
-   The second argument to both constructors is a valid ISO Country Code. These codes are the upper-case two-letter codes as defined by ISO-3166.

Billing document template merge fields can be translated into the following languages:

## English languages

| Language | Code |
| --- | --- |
| English (United Kingdom) | en-GB |
| English (United States) | en-US |

## German languages

| Language | Code |
| --- | --- |
| German (Austria) | de-AT |
| German (Germany) | de-DE |
| German (Luxembourg) | de-LU |
| German (Switzerland) | de-CH |

## Chinese languages

| Language | Code |
| --- | --- |
| Chinese (PRC) | zh-CN |
| Chinese (Singapore) | zh-SG |
| Chinese (Taiwan) | zh-TW |

## French languages

| Language | Code |
| --- | --- |
| French (Belgium) | fr-BE |
| French (Canada) | fr-CA |
| French (France) | fr-FR |
| French (Luxembourg) | fr-LU |
| French (Switzerland) | fr-CH |

## Spanish languages

| Language | Code |
| --- | --- |
| Spanish (Argentina) | es-AR |
| Spanish (Bolivia) | es-BO |
| Spanish (Chile) | es-CL |
| Spanish (Columbia) | es-CO |
| Spanish (Costa Rica) | es-CR |
| Spanish (Dominican Republic) | es-DO |
| Spanish (Ecuador) | es-EC |
| Spanish (El Salvador) | es-SV |
| Spanish (Guatemala) | es-GT |
| Spanish (Honduras) | es-HN |
| Spanish (Mexico) | es-MX |
| Spanish (Nicaragua) | es-NI |
| Spanish (Panama) | es-PA |
| Spanish (Paraguay) | es-PY |
| Spanish (Peru) | es-PE |
| Spanish (Puerto Rico) | es-PR |
| Spanish (Spain) | es-ES |
| Spanish (United States) | es-US |
| Spanish (Uruguay) | es-UY |
| Spanish (Venezuela) | es-VE |

## Arabic languages

| Language | Code |
| --- | --- |
| Arabic (Algeria) | ar-DZ |
| Arabic (Bahrain) | ar-BH |
| Arabic (Egypt) | ar-EG |
| Arabic (Iraq) | ar-IQ |
| Arabic (Jordan) | ar-JO |
| Arabic (Kuwait) | ar-KW |
| Arabic (Lebanon) | ar-LB |
| Arabic (Libya) | ar-LY |
| Arabic (Morocco) | ar-MA |
| Arabic (Oman) | ar-OM |
| Arabic (Qatar) | ar-QA |
| Arabic (Saudi Arabia) | ar-SA |
| Arabic (Sudan) | ar-SD |
| Arabic (Syria) | ar-SY |
| Arabic (Tunisia) | ar-TN |
| Arabic (U.A.E.) | ar-AE |
| Arabic (Yemen) | ar-YE |

## Other languages

| Language | Code |
| --- | --- |
| Bulgarian (Bulgaria) | bg-BG |
| Czech (Czech Republic) | cs-CZ |
| Danish (Denmark) | da-DK |
| Dutch (Belgium) | nl-BE |
| Dutch (Netherlands) | nl-NL |
| Estonian (Estonia) | et-EE |
| Finnish (Finland) | fi-FI |
| Greek (Cyprus) | el-CY |
| Greek (Greece) | el-GR |
| Hungarian (Hungary) | hu-HU |
| Italian (Italy) | it-IT |
| Italian (Switzerland) | it-CH |
| Japanese (Japan) | ja-JP |
| Latvian (Latvia) | lv-LV |
| Norwegian (Norway) | no-NO |
| Polish (Poland) | pl-PL |
| Portuguese (Brazil) | pt-BR |
| Portuguese (Portugal) | pt-PT |
| Romanian (Romania) | ro-RO |
| Russian (Russia) | ru-RU |
| Slovak (Slovakia) | sk-SK |
| Slovenian (Slovenia) | sl-SI |
| Swedish (Sweden) | sv-SE |
| Thai (Thailand) | th-TH |
| Turkish (Turkey) | tr-TR |

## Considerations

The localization of billing documents in PDF has the following limitations:

-   A Zuora tenant can contain 5,000 translations for billing document PDF files. If you upload multiple translation profiles, the sum of all the translated merge field values should be less than 5,000 rows.
-   Translations cannot be removed.
-   Translation messages cannot be updated directly through the Zuora UI. To update a translation, you have to upload a new translation file with the updated message.
-   Do not use Excel on Mac systems to create a translation profile file for multi-byte languages. The characters may not be saved correctly.
-   We recommend Google Spreadsheet or a plain text editor, such as Sublime, to create a translation profile on Mac.
