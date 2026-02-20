---
title: "Configure personal access tokens in GitHub"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/github-integration-with-deployment-manager/configure-personal-access-tokens-in-github"
product: "zuora-platform"
scraped_at: "2026-02-20T17:39:21.101Z"
---

# Configure personal access tokens in GitHub

Learn how to configure token settings to manage personal access tokens, enable security options, and set repository permissions.

Personal Access Tokens (PATs) provide a secure way to authenticate and access GitHub repositories. They allow Deployment Manager to interact with repositories.

1.  Go to Personal Access Tokens > Settings .
2.  Enable the Access through fine-grained personal access tokens option.
3.  Enable the Require administrator approval option for added security.
4.  Choose whether requests for personal access tokens should be auto-approved or require manual approval. If manual approval is selected, the repository owner will need to review and approve requests under Personal Access Tokens > Pending Requests .
5.  Click Save .
    Once set up, the token can be used for API calls with the organization's name serving as the username in the requests.
    Creating access token from a user's profile

    1.  Go to Settings > Developer Settings > Personal Access Tokens > Generate new token.
    2.  Set an expiration time for the token (default is 30 days).
    3.  Select Organization as the resource owner and choose a specific repository for access.

        You can use the generated token for API calls, where the organization name will be used as the username in the requests.

        For security, the repository should be marked as private. Deployment Manager recommends this for better security, and a warning message will appear if the repository is public.


    Repository permissions

    -   Actions: Read and Write
    -   Administration: Read and Write
    -   Commit Statuses: Read and Write
    -   Contents: Read and Write
    -   Deployments: Read and Write
    -   Metadata: Read-only
    -   Workflows: Read and Write
