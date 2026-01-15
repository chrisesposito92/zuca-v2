---
title: "Alternative authentication method"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/set-up-aws-s3-delta-lake/create-policy-and-iam-role/alternative-authentication-method"
product: "zuora-platform"
scraped_at: "2026-01-15T22:01:36.443Z"
---

# Alternative authentication method

AWS user with HMAC Access Key ID & Secret Access Key

AWS User with HMAC Access Key ID & Secret Access Key Role based authentication is the preferred authentication mode for S3 based on AWS recommendations. However, HMAC Access Key ID & Secret Access Key is an alternative authentication method that can be used if preferred.

1.  Navigate to the IAM service page.
2.  Navigate to the Users navigation tab, and click Add users.
3.  Enter a User name for the service, for example, `transfer-service`, click Next.
4.  Under Select AWS access type, select the Access key - Programatic access option.
5.  Click Next: Permissions.
6.  Click the Attach existing policies directly option, and search for the name of the policy created in the previous step. Select the policy, and click Next: Tags.
7.  Click Next: Review and click Create user.
8.  In the Success screen, record the Access key ID and the Secret access key.
