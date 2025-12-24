---
title: "Set up and manage GitHub repositories for deployment"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/source-code-integration-with-deployment-manager/set-up-and-manage-github-repositories-for-deployment"
product: "zuora-platform"
scraped_at: "2025-12-24T05:12:59.841Z"
---

# Set up and manage GitHub repositories for deployment

Learn how to set up and manage GitHub repositories for deployment, including configuring access permissions and collaborating with team members.

GitHub repository often referred to as a repo, serves as the central location for storing project files such as code, documentation, images, and other resources. Each deployment project needs its own repository to track and manage changes to ensure that all changes are properly managed and versioned throughout the development process.

Zuora recommends using private repositories. If a repository is publicly accessible, be aware that the content in it is at your own risk.

Note: If your organization already has a GitHub Cloud or GitHub Enterprise repository configured, you can skip this step and move directly to adding the source code repository in Deployment Manager.

Admin settings

In the Admin Settings, configure team members' access to the repository by assigning appropriate permissions, ensuring secure collaboration and management of the project. This step allows for controlling who can read, write, or manage repository settings, ensuring proper access control.

Creating a GitHub account

If you or your team members don't already have a GitHub account, go to GitHub’s sign-up page to create one.

Adding team members as collaborators

Once your account is set up, request the repository owner to add you as a collaborator. The repository owner can follow these steps:

1.  Navigate to the owner’s profile on GitHub.
2.  Select Organizations from the profile menu.
3.  Click on Settings . This option is visible only to the owner.
4.  Add members and assign them roles.

    ![Add team members in GitHub](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0376c663-9aec-49fa-834d-ad6b6fa5ff50?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAzNzZjNjYzLTlhZWMtNDlmYS04MzRkLWFkNmI2ZmE1ZmY1MCIsImV4cCI6MTc2NjYzOTU3NywianRpIjoiYWM2NDhmZTk1NDVhNGNmY2FlNmZhYWNhMTQ4ZTlkYmIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.dY6m80Xvd7IUQlSGKxZQuUxq_LBcP3mpRsXQX-QGMEQ)

    Once added, you can begin collaborating on the project and proceed with integration.

    Enabling privileges

    The repository owner should provide specific privileges to team members. The collaborator can perform the following permission levels and the associated tasks:

    1.  Admin Permission: Grants the ability to add collaborators, manage read/write access, and more.
    2.  Write Permission: Enables the user to push, pull, and read files, allowing them to upload files to the repository.
    3.  Read Permission: Allows users to pull and read files, but they cannot upload files.
