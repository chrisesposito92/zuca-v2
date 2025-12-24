---
title: "Configure  S/4HANA public cloud"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_billing/configure-s4hana-public-cloud"
product: "zuora-platform"
scraped_at: "2025-12-24T08:36:50.194Z"
---

# Configure S/4HANA public cloud

Learn how to configure a Communication System and User in SAP S/4HANA Public Cloud to connect the SAP-BTP Agent.

Before connecting the SAP-BTP Agent to SAP, you must first prepare your SAP tenant by configuring a Communication System and Communication User in SAP S/4HANA Public Cloud, and then creating a Communication Arrangement.

The steps describes the process to configure the communication system and user:

1.  Log in to the SAP Fiori Launchpad .
2.  Navigate to the Communication Management menu and select the Communication Systems tile.
3.  On the Communication Systems screen, click New to create a new communication system.
4.  Enter the appropriate System ID and System Name , then click Create .
5.  Under the Technical Data section, fill in the following details:

    -   Host Name: {Host Name}

    -   UI Host Name: {UI Host Name}

    -   Logical System: Use the same name as the System Name .


6.  Click Save .
7.  To configure a user for Inbound Communicaion:
    1.  On the New Inbound Communication User screen, click New User
    2.  On the Create Communication User screen, enter the following details and click Create :

        -   User Name: {Enter a unique user name}

        -   Password: {Set a secure password}

        -   Description: {Provide a description, for example, “Zuora Test”}


    3.  Click OK and then Save the Communication System.
    4.  Choose the same Communication System for Users for Outbound Communication .
    5.  Return to the SAP Fiori Launchpad .
