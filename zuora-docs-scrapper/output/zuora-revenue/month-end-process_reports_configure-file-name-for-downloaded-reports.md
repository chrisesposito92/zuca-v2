---
title: "Configure file name for downloaded reports"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/configure-file-name-for-downloaded-reports"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:28:01.498Z"
---

# Configure file name for downloaded reports

Learn how to configure the file name of downloaded reports to include meaningful strings like report name and submitter's name, enhancing identification and efficiency.

As an enhancement in 37.003.00.00, the file name of the downloaded reports can be configured to be more meaningful to your business needs. You can select the strings to be included in the downloaded report file, such as report name, submitter’s name, or the report layout name. The meaningful report file name can help you identify the target report quickly and make the report conciliation process more efficient.

## Procedure

To configure a meaningful file name for a report, complete the following steps:

Note:

If Report Name is a selected field, the actual report name in the report file name cannot exceed 70 characters. Otherwise, the report name will be truncated in the actual file name.

The total characters of the actual file name cannot exceed 240. Otherwise, the file name will be truncated.

1.  Navigate to Setups > Application > Report Setup.

2.  Locate the line named Report Download File Name Configuration.

3.  Hover the mouse over the line and click the Edit icon. ![Report Download File Name Configuration screen](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/efe295ae-360a-4923-b9de-6c699160101d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVmZTI5NWFlLTM2MGEtNDkyMy1iOWRlLTZjNjk5MTYwMTAxZCIsImV4cCI6MTc2NjYzNjg3OSwianRpIjoiNjk4ZTFmOGFhOTk5NDRlNGE3MjQ4ZmEyZGNiZDNjNmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.dZHSddSYlP8J4N1R-EtTUDrscgM42DTe4IF3ZkrAk1Q). The Report Download File Name Configuration window is open

4.  Select the fields to be included in the report file name. The actual report file name will contain the actual values of the selected fields.
    -   To add a field to the file name, click the field from the Available Fields list and use the right arrow to move it to the Selected Fields list.

    -   To adjust the sequence of the selected fields that will show up in the file name, use the up and down arrows.

        Note:

        If Report Name is a selected field, the actual report name in the report file name cannot exceed 70 characters. Otherwise, the report name will be truncated in the actual file name.

        The total characters of the actual file name cannot exceed 240. Otherwise, the file name will be truncated.

5.  Use the File Name field to preview the file name based on your selections.
6.  Make sure this configuration is enabled.
7.  When everything is OK, click the save icon.

After the configuration is saved, the selected fields will be applied to generate the actual file name of each downloaded report.
