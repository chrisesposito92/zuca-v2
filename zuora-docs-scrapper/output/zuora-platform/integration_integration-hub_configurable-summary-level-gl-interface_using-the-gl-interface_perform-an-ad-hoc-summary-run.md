---
title: "Perform an ad-hoc summary run"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/configurable-summary-level-gl-interface/using-the-gl-interface/perform-an-ad-hoc-summary-run"
product: "zuora-platform"
scraped_at: "2025-12-24T05:46:26.828Z"
---

# Perform an ad-hoc summary run

Learn how to perform an ad-hoc summary run

In the case of missed runs or errors, you can perform an ad-hoc summary run.

You must have configured the file mapping settings. See [Configure Settings for the GL Interface](/zuora-platform/integration/integration-hub/configurable-summary-level-gl-interface/configure-the-gl-interface) for details.

1.  Launch the app instance.
2.  In the Summary Runs tab, click Run Now .
3.  Optionally, modify the settings that are populated from global settings.
4.  Optionally, add or delete a filtering SQL statement. If you do not use any filtering statements, click the delete icon to remove the prompt message in the text field. Otherwise, this message will be used as a filtering statement and your summary run may fail. ![gl_connector_remove_filter.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/169f14d4-f507-475e-ba52-0c95366a3258?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE2OWYxNGQ0LWY1MDctNDc1ZS1iYTUyLTBjOTUzNjZhMzI1OCIsImV4cCI6MTc2NjY0MTU4NCwianRpIjoiZTFhOTQwMWFkNzA0NDQ5OGFlMTczNDgyMDYxM2M2NDEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.K69CYZ4Hm8xJLasMWdpgB2t1ti1pkTveMejW13M9qAY)
5.  If you only want to rerun a journal run, select Rerun by Journal Run Number? and enter the journal run number (in the format of JR-xxxxx) in the text field.
6.  Click Create to start the run.

    The summary run is displayed in the Summary Runs tab. You can click the refresh button to get the latest status.
