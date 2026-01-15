---
title: "GL Interface troubleshooting guide"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/configurable-summary-level-gl-interface/gl-interface-troubleshooting-guide"
product: "zuora-platform"
scraped_at: "2026-01-15T22:01:02.421Z"
---

# GL Interface troubleshooting guide

Use the information in the table to troubleshoot before contacting Support

## Where to find error messages?

We put together a list of common errors, possible causes, and solutions in a table. You can use the information in the table to troubleshoot before contacting Support.

When a summary run fails, its status will be changed to Error. In the default view, error messages are not displayed. You need to enable the Errors column to display error messages.

In the Summary Runs tab, click the view icon and then select Errors in the list of column names.

![gl_connector_enable_errors.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a920b491-a127-47bf-905d-b78f0ae8e7b0?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE5MjBiNDkxLWExMjctNDdiZi05MDVkLWI3OGYwYWU4ZTdiMCIsImV4cCI6MTc2ODYwMDg1NSwianRpIjoiZTEzN2NjMWQ0N2Y1NDIwZjkyNDIwMGEyMWYwYjk5ZmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.ZWaFNoXS0XavU3ixmgIkTyOKKH6cH4O0fvmUMKux89s)

The Errors column is now displayed. You can check the error message for each failed summary run.

![gl_connector_list_errors.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1df5f9f6-3cb8-4eb4-95e4-c77447492da9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFkZjVmOWY2LTNjYjgtNGViNC05NWU0LWM3NzQ0NzQ5MmRhOSIsImV4cCI6MTc2ODYwMDg1NSwianRpIjoiZTU4M2VjNTk1NDIwNDQxYmE2ZGQxNjZjNjhlMWZkMWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.GO0F3Dco0UiGl_qj1KgeMaZN2Qk3mBE5qwTzcDOeEhQ)

## Common errors, possible causes, and solutions

Rerun this particular journal run and download the exported file immediately after the rerun completes.

| Error message or symptom | Possible causes | Solutions |
| --- | --- | --- |
| Error authenticating to Zuora Connect or Zuora -> Error in file upload -> Error Transferring CSV to the SFTP endpoint -> The server did not respond during connection attempts. | SFTP issue | Check whether the SFTP server is available. |
| Error authenticating to Zuora Connect or Zuora -> Error in file upload -> Access Denied | SFTP issue | Ensure your credentials to the SFTP server are still valid. |
| Error authenticating to Zuora Connect or Zuora -> Error creating the inputs to the Journal Run creation API -> undefined method `[]' for nil:NilClass | Configuration issue |  |
| Error authenticating to Zuora Connect or Zuora -> Error creating Journal Run -> Revenue Event Item can only be selected when Target Date(s) is an Accounting Period. | Behavior as designed | Revenue Event Item can only be selected when Target Date(s) is an Accounting Period. |
| Error authenticating to Zuora Connect or Zuora -> undefined method `each' for nil:NilClass | Configuration issue |  |
| Error authenticating to Zuora Connect or Zuora -> Error in file upload -> Error Transferring CSV to the SFTP endpoint -> Net::SFTP::StatusException open .FILENAME.zip (2, "no such file") | SFTP issue | Ensure the SFTP file directory is valid. |
| Error authenticating to Zuora Connect or Zuora -> Error creating Journal Run Data Source Export -> Export Creation Unsuccessful : Syntax error in ZOQL at position 1:478. Text was: | ZOQL issue |  |
| Error authenticating to Zuora Connect or Zuora -> Error Marking Journal Entry as TransferredToAccounting -> Transferred to Accounting can no longer be changed after a Journal Entry has been cancelled. | Behavior as designed |  |
| Error authenticating to Zuora Connect or Zuora -> Error in file upload -> Error Transferring CSV to the SFTP endpoint -> Net::SSH::ConnectionTimeout | SFTP issue. The connection to the SFTP server times out. | Ensure that you can connect to the SFTP server. |
| Error authenticating to Zuora Connect or Zuora -> Error querying out preexisting Journal Run -> Cannot find entity by key: 'JR-00000041'. | Configuration issue | Ensure the journal run ID is valid. |
| Error authenticating to Zuora Connect or Zuora -> Error Mapping journal entry items to the endpoint's format -> Liquid syntax error: Unexpected character \ in "JournalEntryItem.Type == \'Debit\'" | Liquid error | Ensure the Liquid expressions used in the file mappings are valid. |
| The file link will be expired after 24 hours.When clicking the Download link to get the files, the user got the error message: "AccessDeniedRequest has expired". | Behavior as designed | Rerun the journal run by ID and download the exported file immediately after the rerun completes. |
| Error authenticating to Zuora Connect or Zuora -> Error while creating the api request -> Sending to endpoint was unsuccessful → INVALID_KEY_OR_REFInvalid subsidiary reference key. | Configuration issue | Ensure the Subsidiary field in the File Setting uses the NetSuite Subsidiary Internal Id. |
