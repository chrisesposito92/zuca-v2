---
title: "Example of configuring email templates"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/subscriber-portal/configure-user-interface/example-of-configuring-email-templates"
product: "zuora-platform"
scraped_at: "2025-12-24T05:48:37.765Z"
---

# Example of configuring email templates

An example of an email template.

Email templates can be configured using plain text or HTML. For example, if you want to provide a list in your message to the customer, you could add the following code snippets to the `<body>` section of your email template.

<p>&nbsp;</p> <p>You've made it!</p> <p>Welcome to the Zuora Subscriber Portal! We're excited to have&nbsp;<span class="il"\>you</span>&nbsp;join the community of people using the Subscriber Portal to manage their subscription based accounts.</p> <p>You can use this portal to:</p> <ol> <li>Pay your latest invoice</li> <li>View and update your credit card</li> <li>Manage users on your account</li> </ol>

The following email sample illustrates the configuration above.![example_email_templates](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/51d98363-297a-4054-914a-a301220a420b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjUxZDk4MzYzLTI5N2EtNDA1NC05MTRhLWEzMDEyMjBhNDIwYiIsImV4cCI6MTc2NjY0MTcxNiwianRpIjoiNWQzYjY0OTY1MTcwNDM2YzhhZjU1NTVkNmU5NjQ1ZjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Z9CZiVc2glS3KIIeHnLsxvu9w97r_ocRArIoJAU2Q8A)

Limitations of the email template include:

-   Hello `NewUser@NewUser.com`: This portion of the email template is currently not modifiable and will be displayed below the heading of each sent email.

-   Confirm my account: This link is used to direct customers back to the portal. This portion of the email is currently not modifiable and will be displayed above the footer of each sent email.
