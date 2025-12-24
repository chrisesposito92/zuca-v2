---
title: "Example of configuring bootstrap columns"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/subscriber-portal/configure-user-interface/example-of-configuring-bootstrap-columns"
product: "zuora-platform"
scraped_at: "2025-12-24T05:48:32.688Z"
---

# Example of configuring bootstrap columns

Provides instructions on configuring Bootstrap columns to display subscription, balance, and invoice information on a dashboard, ensuring optimal layout and visibility.

In the scenario where you want to display the last subscription, balance, and last invoice information in the top row of the dashboard, you need to enable the `last_subscription` , `balance` , and `last_invoice` cards, and arrange the cards in the desired order to be displayed on the dashboard. Because each row contains 12 columns and 3 cards should be displayed in the row, each card should use 4 columns.

![Example card configurations](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b88791d9-0c5b-46d0-8b6f-0a111b14b64a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI4ODc5MWQ5LTBjNWItNDZkMC04YjZmLTBhMTExYjE0YjY0YSIsImV4cCI6MTc2NjY0MTcxMCwianRpIjoiM2QyZjE1MzEwNmM5NGY1MGEwMzJlMTY3MzMwNjU5ZTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.P5qauvORQrxhCWbEW_rDWXdMA2Y0Jxfeoli3no71l1M)

The dashboard in the portal will be displayed as:

![How UI looks with example configurations](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0fd3be09-48fd-47f3-81cb-92baea0d0168?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjBmZDNiZTA5LTQ4ZmQtNDdmMy04MWNiLTkyYmFlYTBkMDE2OCIsImV4cCI6MTc2NjY0MTcxMCwianRpIjoiY2U0ZDY5ZDNlY2Y1NDZlNDgwOTIxYmQyMTc5OTJkOGYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.IgmmZ5tp6nvsJd7kneJ0AKdRmu9kZQvaLmQH0fxyp_s)

## Example of Configuring Email Templates

Email templates can be configured using plain text or HTML. For example, if you want to provide a list in your message to the customer, you could add the following code snippets to the `<body>` section of your email template:

<p>&nbsp;</p> <p>You've made it!</p> <p>Welcome to the Zuora Subscriber Portal! We're excited to have&nbsp;<span class="il"\>you</span>&nbsp;join the community of people using the Subscriber Portal to manage their subscription based accounts.</p> <p>You can use this portal to:</p> <ol> <li>Pay your latest invoice</li> <li>View and update your credit card</li> <li>Manage users on your account</li> </ol>

The sample email based on the above configuration would be:

![Email Templates](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2d22e2ce-e131-40cc-bb67-8cd4def3ff66?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJkMjJlMmNlLWUxMzEtNDBjYy1iYjY3LThjZDRkZWYzZmY2NiIsImV4cCI6MTc2NjY0MTcxMCwianRpIjoiYjg5ODFlY2EwNjIwNGI4NWE2NzVhYzY2NzA5NjEwMDQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.lclfqLrujxOas1hnCuSSCbC-JzLZlVn10A2muPAB8BM)

The limitations of the email template include:

-   Hello NewUser@NewUser.com : This portion of the email template is currently not modifiable and will be displayed below the heading of each sent email.

-   Confirm my account : This link is used to direct customers back to the portal. This portion of the email is currently not modifiable and will be displayed above the footer of each sent email.
