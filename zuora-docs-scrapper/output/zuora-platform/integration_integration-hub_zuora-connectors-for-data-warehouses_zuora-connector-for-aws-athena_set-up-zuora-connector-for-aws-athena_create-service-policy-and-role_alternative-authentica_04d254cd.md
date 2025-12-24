---
title: "Alternative authentication method"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-athena/set-up-zuora-connector-for-aws-athena/create-service-policy-and-role/alternative-authentication-method"
product: "zuora-platform"
scraped_at: "2025-12-24T08:39:55.051Z"
---

# Alternative authentication method

AWS user with HMAC Access Key ID & Secret Access Key

Role-based authentication is the preferred authentication mode for Athena based on AWS recommendations, however, HMAC Access Key ID and Secret Access Key is an alternative authentication method that can be used if preferred.

1.  Navigate to the IAM service page.
2.  Navigate to the Users navigation tab, and click Add users.
3.  Enter a User name for the service, for example, `transfer-``service`and click Next.

    Under Select AWS access type, select the Access key - Programatic access option. Click Next: Permissions.

4.  Click the Attach existing policies directly option, and search for the name of the policy created in the previous step. Select the policy, and click Next: Tags.
5.  Click Next: Review and click Create user.
6.  In the Success screen, record the Access key ID and the Secret access key.
