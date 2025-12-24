---
title: "Download the file exported from a summary run"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/configurable-summary-level-gl-interface/using-the-gl-interface/download-the-file-exported-from-a-summary-run"
product: "zuora-platform"
scraped_at: "2025-12-24T05:46:29.355Z"
---

# Download the file exported from a summary run

Learn how to perform a rerun and download the exported

After a summary run completes successfully, you can download the exported file.

In the Summary Runs tab, find the summary run that you want to download the file from and click the Download link. The downloading process starts automatically. The exported file (in .csv format) uses the summary run ID (GLR-xxxxxxxx) as its name.

The file link is valid for 24 hours. If it expires, you'll get an error message after you click the Download link. In this case, you need to perform a rerun.

To perform a rerun and download the exported file, complete these steps.

1.  In the Summary Runs tab, copy the number of the journal run (in the format of JR-0000xxxx) that you want to rerun.
2.  Click Run Now.
3.  In the settings window, select Rerun by Journal Run Number.

    Note: Irrespective of the Days Offset value, the rerun data is collected based on the actual date of the Journal Run. The Days Offset value reflected in the

    Summary Runs

    tab is the value selected in the settings window.

    ![gl_connector_select_rerun.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/63f9a4a3-bf0a-473c-984b-b77937a41ab7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYzZjlhNGEzLWJmMGEtNDczYy05ODRiLWI3NzkzN2E0MWFiNyIsImV4cCI6MTc2NjY0MTU4NywianRpIjoiNTk5MWQxYzgzMWFlNDAxYjg4NGFjMjliMThmMjQ5ZDEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.q08Jxug2JUjRJZTMe1NGkM8u0ZZwNfZRbnXM8q6oiPw)

4.  Enter the journal run number that you have copied in step 1, and click Create .
5.  After the summary run completes successfully, click the Download link for the rerun. The file is then downloaded to your local drive.
