---
title: "Configure SAP tenant"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_revenue/configure-sap-tenant"
product: "zuora-platform"
scraped_at: "2025-12-24T08:38:24.566Z"
---

# Configure SAP tenant

Learn how to configure a Communication System and Communication User in SAP S/4HANA Public Cloud to prepare your SAP tenant for connecting the SAP-BTP Agent.

Before connecting the SAP-BTP Agent to SAP, you must first prepare your SAP tenant by configuring a Communication System and Communication User in SAP S/4HANA Public Cloud, and then creating a Communication Arrangement.

The steps describes the process to configure the communication system and user:

1.  Log in to the SAP Fiori Launchpad .
2.  Navigate to the Communication Management menu and select the Communication Systems tile.
3.  On the Communication Systems screen, click New to create a new communication system.
4.  Enter the appropriate System ID and System Name , then click Create .
5.  Under the Technical Data section, fill in the following details:

    -   Host Name: my415436.s4hana.cloud.sap

    -   UI Host Name: my415436.s4hana.cloud.sap

    -   Logical System: Use the same name as the System Name .


6.  Click Save .
7.  For Inbound Communication , click Add (+) to configure a user for inbound communication.
8.  On the New Inbound Communication User screen, click New User .
9.  On the Create Communication User screen, enter the following details and click Create :

    -   User Name: {Enter a unique user name}

    -   Password: {Set a secure password}

    -   Description: {Provide a description, for example, “Zuora Test”}


10.  Click OK and then Save the Communication System.
11.  Choose the same Communication System for Users for Outbound Communication .
12.  Return to the SAP Fiori Launchpad .
