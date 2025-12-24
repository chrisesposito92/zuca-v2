---
title: "Configure Connector in Salesforce"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/configure-connector-in-salesforce"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:51.840Z"
---

# Configure Connector in Salesforce

Learn how to configure the connector in Salesforce to enable on-demand synchronization and data transfer from SFDC CPQ to Zuora.

At this stage, the connector exclusively facilitates on-demand synchronization. To transfer data from SFDC CPQ to Zuora, please set up the buttons below in Salesforce.

1.  Perform the following steps to sync all your supported accounts.
    1.  For Salesforce Setup, go to Platform Tools > Objects and Fields > Object Manager > Account > Buttons, Links, and Actions > New Button or Link.
    2.  Configure the following details on the actions page.

        -   Label: Send to Zuora
        -   Name: send\_to\_zuora\_account
        -   Display Type: Detail Page Button
        -   Behavior: Display in a new window
        -   Content Source: URL
        -   URL: `https://r7eq6a62d4.execute-api.us-west-2.amazonaws.com/default/sfdccpq?sfdc=`<Salesforce CPQ domain name>&accountId={!Account.Id}. The Salesforce CPQ domain name is the unique endpoint for SFDC without the https.
        -   SFDC URL Example: zuora-18f-dev-ed.develop.lightning.force.com

        Figure 1. Account send to Zuora

        ![Account send to Zuora](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/316a5853-ffec-464f-8e37-bf4c86d8190e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjMxNmE1ODUzLWZmZWMtNDY0Zi04ZTM3LWJmNGM4NmQ4MTkwZSIsImV4cCI6MTc2NjY1MTIwOSwianRpIjoiOTc3Zjg3OGNjNjVmNDU3M2E0ODZlMGVhMDdkYzZiM2MiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Q3OpO6_doXNYfP4xJ7qVtPWhDxuLDBLAv3pPG0eJPb4)

2.  Perform the following steps to sync order between multiple sessions.
    1.  For Salesforce Setup, go to Platform Tools > Objects and Fields > Object Manager > Order > Buttons, Links, and Actions > New Button or Link.
    2.  Configure the following details on the actions page.

        -   Label: Send to Zuora
        -   Name: send\_to\_zuora\_order
        -   Display Type: Detail Page Button
        -   Behavior: Display in a new window
        -   Content Source: URL
        -   URL: `https://r7eq6a62d4.execute-api.us-west-2.amazonaws.com/default/sfdccpq?sfdc=`<Salesforce CPQ domain name>&orderId={!Order.Id}. The Salesforce CPQ domain name is the unique endpoint for SFDC without the https.
        -   SFDC URL Example: zuora-18f-dev-ed.develop.lightning.force.com

        Figure 2. Order send to Zuora

        ![Order send to Zuora](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/47008739-8b38-4138-bc80-b53b8cfe0bd4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ3MDA4NzM5LThiMzgtNDEzOC1iYzgwLWI1M2I4Y2ZlMGJkNCIsImV4cCI6MTc2NjY1MTIwOSwianRpIjoiNTEwOGJjNGQwYjQ1NDRhNjllMmJiOTkwYjMzODhjNTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ALQHXrnBqdPLARY0Z8pDlM-9kRARtrOL3l2kdmxaJ6I)

        Note: Once the buttons are configured in Salesforce CPQ, submit a

        [support ticket](https://support.zuora.com/hc/en-us)

        in Zuora with the URL endpoints for button routing
