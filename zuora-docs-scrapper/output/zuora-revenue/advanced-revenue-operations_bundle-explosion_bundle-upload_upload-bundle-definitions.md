---
title: "Upload bundle definitions"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/bundle-explosion/bundle-upload/upload-bundle-definitions"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:19:44.159Z"
---

# Upload bundle definitions

Learn how to upload bundle definitions to Zuora Revenue.

1.  Navigate to File Upload > Bundle.
2.  If the bundle template does not exist yet, create one by completing the following steps:
    1.  In the Templates section on the Bundle page, click the '+'. The New Bundle Template window is displayed.
    2.  On the Template Definition tab, provide a unique template name and optionally a short description.
    3.  Toggle the Enabled switch to Yes to enable this template.
    4.  Select the type of file to be uploaded for the File Type field.
    5.  If you select Text in the previous step, enter the separator between items in the Field Separator field.
    6.  If a review is required for the template, toggle the Is Review Required switch to Yes.
    7.  (Optional): Select the date format to validate the date value in the uploaded file for the Data Format field.
    8.  (Optional): Select the start row to identify the row number from which the actual data is inserted into the staging table from the uploaded file for the Start Row field.
    9.  In the Bundle Upload Options section, select one of the methods that the system uses to identify the parent line and children lines. Two methods are available:

        -   The presentation of Parent Line followed by related Children Line(s) identifies the Parent/Children Line(s) relationship: The sequence of the line determines the relationship between the parent line and its children lines. The line with the Split Type value specified is the parent line. The lines that follow the parent line are considered as its children lines.

        -   The combination of bundle criteria AND reference to the Parent Item Num identifies the Parent/Children Line(s) relationship: The bundle criteria and the Parent Item Num value determine the relationship between the parent line and its children lines. The line with the Split Type value specified is the parent line. The lines that have the corresponding Parent Item Num value specified are considered as its children lines. Note that the combination of all Bundle criteria fields and the parent item numbers should be the same between parent and child to derive the relationship.


    10.  Click the save icon. The template is created.
    11.  Click the Field Mapping tab and enable the fields as bundle criteria by toggling the Bundle Criteria column to Yes for the field. If the field does not exist, click the green colored save icon to add it.
    12.  Save the field mapping configuration by clicking the green colored save icon and close the window.
3.  To upload the bundle definition based on a template, complete the following steps:
    1.  In the Templates section on the Bundle page, hover your mouse over the template line and click the Freeze icon so that no changes can be made in the template.
    2.  Click the Download Template icon to download the template file.
    3.  Open the template file, fill in the bundle information, and save the file.

        | Header | Description |
        | --- | --- |
        | Bndl Cfg Valid From | Required for the parent line.The effective start date of the line item.Note:If the start date is not provided for the children line, it follows the start date of the parent line. If a valid start date is present for the children line, it takes precedence over the parent line’s start date. |
        | Bndl Cfg Valid Until | The effective end date of the line item.Note:The Bndl Cfg Valid From and Bndl Cfg Valid Until dates determine the effective period of the bundle configuration. When a sales order (SO) line comes in, the system will check whether the SO Date falls into the bundle configuration effective period. If yes, the bundle split occurs for the sales order line; otherwise, the sales order line will not be split.After the bundle split has happened to the SO line, any subsequent transaction lines (such as invoice, SO update, RORD, etc.) that are associated with this SO line will always follow the bundle configuration of the SO line. |
        | Parent Item Num | Applicable to children lines only.The parent product or item number for all the children lines. |
        | Sell Price Split Type | Required for the parent line.The calculation method for splitting the selling price. Valid values are:PCT_OF_SP: Calculate based on a percentage.FIXED_PRICE: A fixed sell price.SAME: The same price as the parent line. |
        | Sell Price Split Val | Applicable to children lines only.The selling price of the children line as a percentage of the parent line’s selling price. |
        | List Price Split Type | The calculation method for splitting the list price. Valid values are:PCT_OF_LP: Calculate based on a percentage.FIXED_PRICE: A fixed price.SAME: The same price as the parent line. |
        | List Price Split Val | The list price of the children line as a percentage of the parent line’s list price. |
        | Cost Price Split Type | The calculation method for splitting the cost price. Valid values are:PCT_OF_CP: Calculated based on a percentage.FIXED_PRICE: A fixed price.SAME: The same price as the parent line. |
        | Cost Price Split Val | The cost price of the children line as a percentage of the parent line’s list price. |
        | Bndl Cfg Quantity | The quantity of the line item in the bundle configuration.For example, if the parent item quantity is 2 and the children line item quantity is 3, the actual quantity of the split line items is 6. |
        | Bndl Cfg Duration | The term in months of the line item. |
        | Bndl Cfg Item Num | The SO item number of the parent line or children line. |

        Note: The Split Type columns are only for the parent line. The line with the Split Type value specified will be considered as the parent line. Depending on the bundle upload option selected for the template, the system uses either of the following methods to identify the children lines:

        -   The presentation of Parent Line followed by related Children Line(s) identifies the Parent/Children Line(s) relationship

        -   The combination of bundle criteria AND reference to the Parent Item Num identifies the Parent/Children Line(s) relationship


        If multiple parent and children lines are uploaded in the same file, the correlation between the different parent and children lines must be maintained based on the same logic so that bundle split can happen correctly.

    4.  Hover your mouse over the template line and click the Upload icon .
    5.  In the File Upload window, choose the local file with the bundle information that you added and click Upload.
