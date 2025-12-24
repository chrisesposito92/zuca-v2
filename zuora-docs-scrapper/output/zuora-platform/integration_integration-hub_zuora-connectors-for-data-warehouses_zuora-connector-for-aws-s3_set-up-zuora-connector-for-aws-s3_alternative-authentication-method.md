---
title: "Alternative authentication method"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-s3/set-up-zuora-connector-for-aws-s3/alternative-authentication-method"
product: "zuora-platform"
scraped_at: "2025-12-24T18:30:22.487Z"
---

# Alternative authentication method

AWS user with HMAC Access key ID & Secret Access key

Role-based authentication is the preferred authentication mode for S3 based on AWS recommendations. However, HMAC Access Key ID and Secret Access Key is an alternative authentication method that can be used if preferred.

1.  Navigate to the IAM service page.
2.  Navigate to the Users navigation tab and click Add users.
3.  Enter a User name for the service, for example, `transfer-service` and click Next. Under Select AWS access type, select the Access key - Programatic access option.
4.  Click Next: Permissions.
5.  Click the Attach existing policies directly option, and search for the name of the policy created in the previous step. Select the policy > click Next: Tags.
6.  Click Next: Review and click Create user.
7.  In the Success screen, record the Access key ID and the Secret access key.
