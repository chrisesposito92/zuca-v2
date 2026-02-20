---
title: "Upload transaction lines"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/upload-transactions/upload-transaction-lines"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:18:14.196Z"
---

# Upload transaction lines

Upload transaction lines

Before the transaction data is uploaded, you must configure an RC grouping template to define how to form the revenue contract and assign the SSP hierarchy. For more information, see [Create RC grouping template](/zuora-revenue/getting-started/policy-management/rc-grouping-template/create-rc-grouping-template).

1.  Navigate to File Upload > Transactions/Cost.
2.  On the Transaction/Cost page, to add a template, click the New Template icon . The New Transaction Upload Template is displayed.
3.  In the Template Definition tab, provide the detailed template information:
    1.  In the RC Grouping Rule field, select the appropriate RC grouping rule for the transactions that are to be uploaded.
    2.  In the Name field, provide a unique name for the template.
    3.  Select the Enabled checkbox to enable the template.
    4.  In the File Type field, select the appropriate format for the file to be uploaded. If the uploaded file is not in the specified format, an error message is displayed.
    5.  If you select Text in the previous step, enter the separator between items in the Field Separator field.
    6.  (Optional): In the Start Row field, enter the row number from which the actual data is inserted in the uploaded file. For example, if the first row is the heading row, enter 2 to indicate that the actual data starts from the second row.
    7.  (Optional): In the Date Format field, select the date format for the upload file. If the date value format in the uploaded file is different from the template, an error message is displayed.
    8.  (Optional): Specify whether review in the required by using the Is Review Required toggle switch.
4.  Click the save icon. The upload template is created.
5.  To customize the field mapping between the fields in the uploaded file and the fields in Zuora Revenue staging tables, click the Field Mapping tab to add a new custom field or edit an existing mapping. Refer to the following table for descriptions of each column in this tab.

    | Column Name | Description |
    | --- | --- |
    | Seq | The sequence number of the custom field in data mapping. The Seq value specifies the field mapping order.Note:You cannot edit the sequence numbers for the custom fields that are already used by the source data. It is recommended to check the sequence numbers for the standard fields in Standard Field Mapping. |
    | Staging Field Name | The field name that is defined in Zuora Revenue staging tables. Zuora Revenue names the unused custom fields by concatenating the Rc Line Atr or Rc Line Num prefix and a number. For example, Rc Line Atr17.Note:Do not use the following attributes when you define field mapping in the template because they are reserved for Billing - Revenue Integration:Rc Line Atr41 - Rc Line Atr60Rc Line Num14 - Rc Line Num15 |
    | Input Value Label | The label name of the custom field that you defined in Zuora Billing. You must enter the source object and the custom field label defined in Zuora Billing. You must keep the blank space in Zuora Billing object names and the custom fields.For example, to add the Subscription Owner custom field, which is defined on the Order Action object in Zuora Billing, specify OrderAction.Subscription Owner for the Input Value Label column.For information about how to obtain the exact custom field names in Zuora Billing, see Manage Custom Fields . For information about the Zuora Billing objects whose custom fields can be supported by Zuora Revenue, see Supported Zuora Custom Fields in Zuora Revenue. |
    | Input Value Type | The data type of the custom field. Supported data types are as follows:CharacterNumberDateNote:The Picklist data type of Zuora Billing cannot be supported by Zuora Revenue. |
    | Count | Select the Count checkbox to count the number of lines that are uploaded. |
    | Sum | Select the Sum checkbox to calculate the total value for a particular field. |

6.  After the template is defined, save the changes and close the New Transaction Upload Template window. The template that you created is displayed in the Templates list on the Transactions/Cost page.
7.  To freeze the template for further changes, click the template line and then click Freeze icon.
8.  To download the template file, click the Download Template icon.
9.  Fill in your data in the downloaded template file and save the changes.

    Note:

    If there is a negative value in the uploaded file, ensure that there is no blank space before and after the negative sign (-).

10.  To update the transaction file, click the Upload icon.
11.  In the File Upload window, select the local file and click Upload. A message is displayed indicating the upload is successful.

     Note:

     Starting from version 37.004.02.00, to remediate CSV injection software attack, ensure that no cells in the uploaded file begin with any of the following characters:

     -   Equal sign (=)
     -   Plus (+)
     -   At (@)

     During file upload, use the ENABLE\_CSV\_DATA\_SANITIZATION profile to specify how to handle the file that has these special characters as a starting character in any cell. Valid values for this profile include the following:

     -   BLOCK: The file will be blocked if any cell begins with the above special characters.
     -   SANITIZE: The above special characters will be removed if any cell begins with them. Then, the file can be processed by the system.
     -   RAW: The file can flow into the system as it is even if there is a potential security risk.
