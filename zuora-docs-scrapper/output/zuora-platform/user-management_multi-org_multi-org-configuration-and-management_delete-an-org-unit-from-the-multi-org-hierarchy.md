---
title: "Delete an org unit from the Multi- Org hierarchy"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-and-management/delete-an-org-unit-from-the-multi--org-hierarchy"
product: "zuora-platform"
scraped_at: "2026-01-15T21:59:40.349Z"
---

# Delete an org unit from the Multi- Org hierarchy

This guide introduces the steps and considerations for deleting an org.

Zuora’s Multi-Org architecture is designed to support dynamic and evolving business structures. As companies grow, restructure, or enter new markets, they often need to realign their internal systems to reflect these changes, acquiring, merging or realigning orgs regionally may be required. Deleting an Org may be necessary for various reasons such as unused orgs without any transactions may be lying in testing environments or the org created was created as an error. If an org has to be deleted, please follow the steps below.

-   To request deletion of an existing Org Label, submit a Zendesk Support ticket. Zuora Support will guide you through the correct procedures to prevent disruption to transactional and reporting data.

-   Review the Required Checklist Before Modifying Org Labels in Multi-Org Setup


## Considerations when deleting a org

-   Deleting an org hierarchy is currently not an end user driven action. Double-check all data and configurations before proceeding and as a best practice take the back up of the data. [Zuora Data Query](https://knowledgecenter.zuora.com/Zuora_Platform/Data/Data_Query) may be leveraged for exporting the data.
-   Communicate with stakeholders to ensure alignment and understanding of the impact on business processes.
-   Engage with Zuora Support early in the process to address any questions or concerns.

Deleting a Multi-Org setup in a Zuora tenant requires careful planning to ensure compliance with data governance policies and to avoid unintended disruptions.

Follow these guidelines to manage the org deletion process effectively:

1.  If there are no associated transactions in the child or parent organizations, raise a support ticket to proceed with deleting the org hierarchy.

2.  If transactions are present, follow these additional steps before proceeding to delete:

    -   Review Subscriptions: Cancel subscriptions as necessary.
    -   Close or Delete Accounting Periods: Ensure that all accounting periods are closed and reconciled.
    -   Clean Up Accounting Codes: Update or remove accounting codes that are no longer required.
    -   Reconcile all financial data and ensure proper documentation.
    -   Consult your finance team to ensure compliance with organizational policies and regulatory requirements.
