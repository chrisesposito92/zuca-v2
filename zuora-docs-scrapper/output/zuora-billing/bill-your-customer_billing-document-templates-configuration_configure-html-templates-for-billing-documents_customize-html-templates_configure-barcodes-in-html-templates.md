---
title: "Configure barcodes in HTML templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-barcodes-in-html-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:41:07.947Z"
---

# Configure barcodes in HTML templates

The `Wp_Barcode` merge field allows configuration of barcodes in HTML templates, supporting various types and options for customization.

The `Wp_Barcode` merge field accepts at least two lines of contents. The first line specifies barcode options, and the other lines are barcode contents.

The `Wp_Barcode` merge field is in the following format:

{{#Wp\_Barcode}} <code\_type>\[,optionName=optionValue\]\* codeContent {{/Wp\_Barcode}}

## Supported barcode types and options

The option line used in the `Wp_Barcode` merge field is in the following format:<code\_type>\[,optionName=optionValue\]\*

The `Wp_Barcode` merge field supports the following barcode types:

-   QR\_CODE

-   CODE\_128

-   CODE\_39

-   CODE\_39\_EXT

-   AUSTRALIA\_POST\_CUSTOMER

-   AUSTRALIA\_POST\_REPLY

-   AUSTRALIA\_POST\_ROUTING

-   AUSTRALIA\_POST\_REDIRECT

-   ITF\_14

-   USPS\_ONE\_CODE

-   ROYAL\_MAIL\_4\_STATE


The `Wp_Barcode` merge field supports the following options:

| Option name | Default value | Description |
| --- | --- | --- |
| imageWidth | 300 | Integer, the width of the generated barcode image. |
| imageHeight | 300 | Integer, the height of generated barcode image. |
| codeTextPosition | BOTTOM | The position of the text along with the barcode image.The supported option values are TOP, BOTTOM, andNONE. |

## Configure barcodes with merge fields

When configuring barcodes in HTML templates, you can use merge fields or expressions as the content of a barcode.

You can use merge fields as the content of a barcode. For example, you can use the following merge fields to include invoice numbers as the content of a barcode:

{{#Invoice}} {{#Wp\_Barcode}} CODE\_128 \*3517{{InvoiceNumber}}80\* {{/Wp\_Barcode}} {{/Invoice}}

You can also use expressions in the content of a barcode. For example, you can use the following merge field example including expressions as the content of a barcode:

{{#Invoice}} {{#Wp\_Barcode}} CODE\_128,codeTextPosition=NONE \*1234{{#Wp\_Eval}} {{Amount}} \* 10|Round(0) {{/Wp\_Eval}}5678 {{/Wp\_Barcode}} {{/Invoice}}

## Usage

To use the different barcode types, see the following descriptions and examples of each supported barcode type.

## QR\_CODE

This barcode type implements QR Code barcode symbology according to ISO/IEC 18004:2015.

The storage capacity of QR code symbol depends on the data type, version (1, ..., 40, indicating the overall dimensions of the symbol), and error correction level. The maximum character storage capacity for a QR code symbol that is version 40 and error correction level low is as follows:

-   7089 numeric digits

-   4296 alphanumeric characters

-   2953 bytes of data (ISO/IEC 8859-1 encoding scheme)

-   1817 Kanji characters (Shift JIS X 0208 encoding scheme)


Note that character here means individual values of the data type, also known as input mode or input character set.

For more information about the QR\_CODE barcode type, see [QrCode](https://github.com/woo-j/OkapiBarcode/blob/master/src/main/java/uk/org/okapibarcode/backend/QrCode.java).

## Example

You can use the following merge field example to generate a QR code:

{{#Invoice}}  <h1>QR</h1>  {{#Wp\_Barcode}}  QR\_CODE,imageWidth=100 {{InvoiceNumber}}  {{/Wp\_Barcode}}  {{/Invoice}}

This merge field example generates an HTML `img` tag as follows:

<imgwidth="100" src="data:png;base64,...." />

## CODE\_128

This barcode type implements Code 128 barcode symbology according to ISO/IEC 15417:2007.

This barcode type supports full ASCII, which allows encoding of 8-bit Latin-1 characters that are defined in ISO 8859-1. Setting GS1 mode allows encoding characters that are defined in GS1-128, formerly known as UCC/EAN-128.

The maximum length is 170 characters.

Code 128 has a modulo-103 check digit to detect error.

For more information about the CODE\_128 barcode type, see [Code128](https://github.com/woo-j/OkapiBarcode/blob/master/src/main/java/uk/org/okapibarcode/backend/Code128.java).

## Example

You can use the following merge field example to generate a Code 128 barcode:

{{#Invoice}}  <h1>CODE\_128</h1>  {{#Wp\_Barcode}}  CODE\_128,imageWidth=400,imageHeight=400  {{InvoiceNumber}}  {{/Wp\_Barcode}}  {{/Invoice}}

## CODE\_39

This barcode type implements Code 39 barcode symbology according to ISO/IEC 16388:2007.

This barcode type supports the following characters:

-   All numeric digits (0-9)

-   All uppercase letters (A-Z)

-   Symbols: hyphens (-), periods (.), asterisks (\*), dollar signs ($), slashes (/), plus signs (+), percent signs (%), and space character


The maximum capacity of this barcode type is unlimited, and it usually contains 20 to 23 alphanumeric characters.

The standard does not require a check digit but a modulo-43 check digit can be added if required.

For more information about the CODE\_39 barcode type, see [Code3Of9](https://github.com/woo-j/OkapiBarcode/blob/master/src/main/java/uk/org/okapibarcode/backend/Code3Of9.java).

## Example

You can use the following merge field example to generate a Code 39 barcode:

{{#Invoice}}  <h1>CODE\_39</h1>  {{#Wp\_Barcode}}  CODE\_39,imageWidth=100,imageHeight=100  {{InvoiceNumber}}  {{/Wp\_Barcode}}  {{/Invoice}}

## CODE\_39\_EXT

This barcode type implements Code 3 of 9 Extended, also known as Code 39e and Code39+.

This barcode type supports encoding of all characters in the 7-bit ASCII table.

A modulo-43 check digit can be added if required.

For more information about the CODE\_39\_EXT barcode type, see [Code3Of9Extended](https://github.com/woo-j/OkapiBarcode/blob/master/src/main/java/uk/org/okapibarcode/backend/Code3Of9Extended.java).

## Example

You can use the following merge field example to generate a Code 3 of 9 Extended barcode:

{{#Invoice}}  <h1>Code\_39\_ext</h1>  {{#Wp\_Barcode}}  Code\_39\_ext,imageWidth=100,imageHeight=100  {{InvoiceNumber}}  {{/Wp\_Barcode}}  {{/Invoice}}

## ITF\_14

This barcode type implements Deutsche Post Leitcode, a variant of the Interleaved 2 of 5 symbology. Interleaved 2 of 5 is a member of the Code 2 of 5 symbology family.

This barcode type supports only number digits 0-9, and it requires a 13-digit numerical input. The check digit is automatically calculated. If the input is less than 13 digits, zeros are appended in front of the given input.

For more information about the ITF\_14 barcode type, see [Code2Of5](https://github.com/woo-j/OkapiBarcode/blob/master/src/main/java/uk/org/okapibarcode/backend/Code2Of5.java).

## Example

You can use the following merge field example to generate a corresponding barcode:

<h1>ITF\_14</h1>  {{#Wp\_Barcode}}   ITF\_14,imageWidth=100,imageHeight=100    1234567890123    {{/Wp\_Barcode}}

## USPS\_ONE\_CODE

This barcode type implements USPS OneCode, also known as Intelligent Mail Barcode, according to USPS-B-3200F. OneCode is a fixed length (65-bar) symbol, which combines routing and customer information in a single symbol.

This barcode type supports only numeric digits and contains a 20-digit tracking code followed by a routing code that includes the delivery ZIP code, in case it is 0, 5, 9, or 11 digits long.

The maximum length is 32 characters.

For more information about the USPS\_ONE\_CODE barcode type, see [UspsOneCode](https://github.com/woo-j/OkapiBarcode/blob/master/src/main/java/uk/org/okapibarcode/backend/UspsOneCode.java).

## Example

You can use the following merge field example to generate a USPS OneCode barcode:

<h1>USPS\_ONE\_CODE</h1>  {{#Wp\_Barcode}}  USPS\_ONE\_CODE,imageWidth=100,imageHeight=100  12345678901234567890-12345678901 {{/Wp\_Barcode}}

## ROYAL\_MAIL\_4\_STATE

This barcode type implements Singapore Post 4-State Postal Code, which is identical to the Royal Mail 4-State Customer Code (CBC).

This barcode type supports the following characters:

-   All numeric digits (0-9)

-   All uppercase letters (A-Z)


The maximum length is 68.58 mm (when encoding a seven-digit code that includes start and stop bars, an international prefix, a delivery point suffix, and a check digit at 20 bars per inch). The density of the code is 20 to 24 bars per 25.4 mm. A modulo-6 check digit is calculated and added.

For more information about the ROYAL\_MAIL\_4\_STATE barcode type, see [RoyalMail4State](https://github.com/woo-j/OkapiBarcode/blob/master/src/main/java/uk/org/okapibarcode/backend/RoyalMail4State.java).

## Example

You can use the following merge field example to generate a CBC barcode:

<h1>ROYAL\_MAIL\_4\_STATE</h1>  {{#Wp\_Barcode}}  ROYAL\_MAIL\_4\_STATE,imageWidth=100,imageHeight=100   221BBakerstreet   {{/Wp\_Barcode}}

## Restrictions and limitations

When configuring barcodes in HTML templates, keep the following restrictions and limitations in mind:

-   You cannot use the `Wp_Barcode` function in the Text box. Instead, you can use an HTML box. The `Wp_Barcode` function accepts multiple lines of text as its input, internally, `\n` is used to separate lines. If you use the function in a Text box, the new line is interpreted as an HTML tag, `<br/>` , so that the `Wp_Barcode` function will receive a text argument with HTML tags, which is not what you expect.

-   Image size and resolution Currently, you cannot specify the image resolution, DPI (dots per inch). If you need a higher resolution, one workaround is to generate a bigger image and show it with smaller `width` and `height` attributes, for example: <style> .barcode>img { width: 200px!important; # use !important to override the inline style of the generated img tag. } </style> <div class="barcode"> {{#Wp\_Barcode}} CODE\_128,imageWidth=400 1234567890 {{/Wp\_Barcode}} </div>
