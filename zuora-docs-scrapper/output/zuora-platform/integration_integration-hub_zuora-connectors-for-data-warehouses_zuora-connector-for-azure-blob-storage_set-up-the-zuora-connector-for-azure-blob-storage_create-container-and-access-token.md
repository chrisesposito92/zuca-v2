---
title: "Create container and access token"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-azure-blob-storage/set-up-the-zuora-connector-for-azure-blob-storage/create-container-and-access-token"
product: "zuora-platform"
scraped_at: "2025-12-24T08:40:47.255Z"
---

# Create container and access token

Create container and access token

1.  In the Azure portal, navigate to the Storage accounts service and click on the account that was created in the previous step.
2.  In the navigation pane, under Data storage, click Containers. Click \+ Container, choose a name for the container, and click Create.
3.  In the navigation pane, under Security + networking, click Shared access signature.
4.  Update the required accessible services and permissions:
    1.  Under Allowed services: select Blob and File.
    2.  Under Allowed resource types: select Container and Object.
    3.  Under Allowed permissions: select Read, Write, Delete, List, Add, Create, and Permanently Delete.
5.  Select a Start and expiry date/time based on your security posture (e.g., set the expiration date 6 months into the future), and click Generate SAS and connection string.
6.  Make a note of the SAS token that is generated.

    ![3-azure-setup-details.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f303b9dd-6115-41d1-91a3-e98aa01f083f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImYzMDNiOWRkLTYxMTUtNDFkMS05MWEzLWU5OGFhMDFmMDgzZiIsImV4cCI6MTc2NjY1MjA0NSwianRpIjoiNWQ3MDRkZjIyZTJmNDU4ZWE4ZmMwOGZkNTNiMDMxNGIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.DtisjUNBS84VHDAUNzP8QIuTrUbFXtZtSjuZ3TBGAus)
