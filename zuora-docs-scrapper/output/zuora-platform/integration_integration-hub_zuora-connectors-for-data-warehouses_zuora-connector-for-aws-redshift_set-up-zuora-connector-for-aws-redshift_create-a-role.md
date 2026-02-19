---
title: "Create a role"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/create-a-role"
product: "zuora-platform"
scraped_at: "2026-02-19T03:32:31.952Z"
---

# Create a role

Learn how to create a role in Zuora Connector for AWS Redshift

Ensure you have [created a policy](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/create-a-policy) before creating a role.

1.  Navigate to the IAM service page.
2.  Navigate to the Roles navigation tab, and click Create role.
3.  Select Custom trust policy and paste the provided trust policy (from the [prerequisite](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/create-a-limited-user-in-aws-redshift#task-ehi0vikf__prereq-3032)) to allow AssumeRole access to this role.
4.  Click Next.
5.  Enter a Role name, for example, `transfer-role`, and click Create role.
6.  Once successfully created, search for the created role in the Roles list, click the role name, and make a note of the ARN value.

    Role based authentication is the preferred authentication mode for Redshift based on AWS recommendations. However, [HMAC Access Key ID & Secret Access Key](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/integration_hub/connectors_for_data_warehouses/topics/authenticate_with_aws_access_key_id_aws_redshift.dita) is an alternative authentication method that can be used if preferred.


Next, [add your destination](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/add-destination-for-zuora-connector-for-aws-redshift).
