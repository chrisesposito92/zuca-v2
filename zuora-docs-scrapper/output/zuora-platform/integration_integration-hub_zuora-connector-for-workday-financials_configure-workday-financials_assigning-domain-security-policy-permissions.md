---
title: "Assigning domain security policy permissions"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-workday-financials/configure-workday-financials/assigning-domain-security-policy-permissions"
product: "zuora-platform"
scraped_at: "2025-12-24T08:27:44.618Z"
---

# Assigning domain security policy permissions

Guides you through assigning domain security policy permissions in Workday, including setting integration permissions for specific security groups.

1.  Log in and access the Workday console using your administrator credentials.
2.  Type "View Security Group" in the search bar and press Enter .
3.  Click on the View Security Group report.
4.  Type "ISSG\_Zuora" as the security group name in the Security Group field and press Enter .
5.  Click OK .
6.  Click the ellipse and click on the Security Group > Maintain Domain Permissions for Security Group action.
7.  Enter the following values under Integration Permissions for the Domain Security Policies permitting Put access :

    -   Type "Process: Journals (NEW)" and press Enter .

    -   Type "Process: Journals - Core" and press Enter .


8.  Enter the following values under Integration Permissions for the Domain Security Policies permitting Get access :

    -   Type "Integration Build" and press Enter .

    -   Type "Create: Cost Center" and press Enter .

    -   Type "Set Up: Maintain Custom Worktags" and press Enter .


9.  Click Done
