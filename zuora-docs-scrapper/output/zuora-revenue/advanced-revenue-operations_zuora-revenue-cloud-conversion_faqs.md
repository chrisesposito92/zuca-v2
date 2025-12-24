---
title: "FAQs"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/zuora-revenue-cloud-conversion/faqs"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:39:48.039Z"
---

# FAQs

This article lists many frequently asked questions about the Zuora Revenue migration from on-premises to cloud environment and questions about the Zuora Revenue cloud environment itself.

Questions are categorized into the following types:

-   [General questions](#concept-ls3szoqp__title-336)

-   [Sandbox environment questions](#concept-ls3szoqp__title-337)

-   [Migration questions](#concept-ls3szoqp__title-338)

-   [Operation questions](#concept-ls3szoqp__title-339)

-   [Data privacy and security questions](#concept-ls3szoqp__title-340)

-   [End of life questions](/zuora-revenue/advanced-revenue-operations/zuora-revenue-cloud-conversion/faqs/end-of-life-questions)


## General questions

The following questions are frequently asked about the Zuora Revenue cloud environment.

Q: How is the performance addressed in the Zuora Revenue cloud environment?

A: Zuora Revenue cloud releases are characterized for performance in Zuora testing environments and a baseline performance is established. Performance regressions are addressed prior to the releases.

Q: What is the Zuora Revenue cloud platform built on?

A: Zuora Revenue cloud platform is built by using several leading technologies such as Oracle, Angular JS, and microservice-based APIs. It is deployed on Amazon Web Services (AWS) based on various clustering and infrastructure technology.

Q: Is Zuora Revenue a single-tenant or multi-tenant architecture?

A: Zuora Revenue is a single-tenant architecture.

Q: How many testing instances or sandboxes are included as part of the cloud deployment?

A: Zuora Revenue includes two sandboxes as part of the cloud model but you can choose to have as many as you need.

## Sandbox environment questions

The following questions are frequently asked bout the Zuora Revenue sandbox environments.

Q: How do customers request the Zuora Revenue sandbox?

A: To request the Zuora Revenue sandbox, customers can either submit a support ticket or contact their Zuora account team.

-   If a customer submits a support ticket, Zuora Revenue Support will reach out to the respective Zuora account team to process the order form if more than two sandboxes are requested.

-   If a customer directly contacts the Zuora account team, a support ticket will be opened for provisioning after the order form is ready.


After the environment is provisioned, Support will provide the login details to the customer.

Q: How long does the provisioning take?

A: A sandbox with the copied data will take 2 to 5 days. An empty sandbox will be provisioned as soon as possible.

Q: How much does the sandbox cost or do Zuora Revenue cloud customers automatically get one?

A: Two sandboxes are provided by default. One is provided during Zuora Revenue implementation. The other one, which contains the copied data, is provided after Zuora Revenue implementation is complete.

Q: Does the sandbox come with copied data or does the customer have to manually load their own data?

A: The second and additional sandboxes are provided for customers who are live with data unless they specifically request for an empty sandbox. Customers don't need to manually load their data.

Q: How many sandboxes can one customer have?

A: Customers can buy additional sandboxes (minimum 12 months duration).

Q: How often can they request a refresh?

A: A refresh request can be made up to twice a month.

Q: How long does it take to refresh?

A: The minimum is 24 hours but it can vary based on the volume of customer data. Please keep in mind that the refresh that is requested on Friday evenings will be ready the week after on Monday or after the following week.

Q: Are Zuora Revenue sandboxes fully functional and automatically connected to a Zuora sandbox?

A: Yes.

Q: How do customers link the Zuora Revenue sandbox to a Zuora sandbox?

A: You will be able to export your data from Zuora to SFTP to load into Zuora Revenue as usual. Integrations (for example, Boomi) are enabled for only one sandbox by default.

Q: Are there different "flavors" of Zuora Revenue sandboxes? For example, Zuora has different sandboxes, which are API Sandbox, Performance Test, Production Copy, Universal. Are Zuora Revenue sandboxes like that?

A: There is only one "flavor" for the Zuora Revenue sandbox as it relates to functionalities. A request can be made for a Zuora Revenue sandbox either with the copied production data or completely empty. Note that the sandbox data for Zuora Revenue is dependent on whether the customer is currently live or still implementing when the request is made.

Q: Can it do everything Zuora Revenue Production can do?

A: Yes.

Q: Does it have any performance differences compared to Zuora Revenue Production? Should we expect response times to be slower?

A: Performance between Zuora Revenue production and sandboxes are different. If you are experiencing a large degradation in performance, please contact the Zuora Revenue Support team at [support-revpro@zuora.com](docs@zuora.com).

## Migration questions

The following questions are frequently asked about the Zuora Revenue migration process from on-premises to cloud.

Q: What will be Zuora's responsibilities after Zuora Revenue is migrated from on-premises to cloud?

A: Zuora's responsibilities include:

-   Providing the most up-to-date software releases and patches

-   Ensuring that customers are on the most current security updates

-   Providing 24/7 monitoring and support


Q: What migration strategy does Zuora recommend for moving to Zuora Revenue cloud?

A: Zuora's strategies for migrating to Zuora Revenue cloud include the following:

-   Upgrade the customer to the latest release of Zuora Revenue

-   Create a backup of the customer's Oracle Zuora Revenue instance including customizations and data

-   Restore the backup into Zuora Revenue cloud with customizations and data included

-   During the migration process, Zuora Revenue will be locked out for any data processing or manual actions

-   The customers have to rebuild integrations to the Zuora Revenue cloud instances


Q: Do you have examples of the "lift-and-shift" migration to Zuora Revenue cloud?

A: The strategy and steps for the "lift-and-shift" migration have been determined. Currently, there are two deployments happening.

No data migration and conversion effort are required during the migration process. The "lift-and-shift" migration uses the data from the on-premises production environment and migrates the data to the cloud environment. All existing configurations and data will be moved to the cloud environment.

Q: What protocols and/or tools are available to transfer data from Zuora Revenue to our BI management reporting tools/data warehouse?

A: You can use SFTP and REST APIs.

Q: What is the migration impact on our ERP environment?

A: All integrations must be rebuilt for your ERP environment after Zuora Revenue is migrated to the cloud.

Q: What if we are not on the latest Zuora Revenue version prior to the cloud migration?

A: To migrate to the cloud environment, it is essential that you are on the latest version.

Q: What services does Zuora plan to offer to assist with the cloud migration and what would be for free or with a cost?

A: Zuora provides the following services to facilitate cloud migration with a cost:

-   Provisioning and configuration of Zuora Revenue cloud environment

-   End-to-end validation between on-premises and cloud instances

-   Assist and provide guidance for restructuring the integration between upstream systems and Zuora Revenue

-   Move any existing customizations to the cloud environment

-   New UI training

-   User acceptance testing

-   Production deployment and one period-end support


Depending on the complexity, data volume, integration, and customizations that need to be migrated to the cloud, the estimated service effort might be 8 weeks at the minimum and 24 weeks at the maximum.

## Operation questions

The following questions are frequently asked from the technical operation perspective.

Q: What operational visibility do customers have using Zuora Revenue cloud?

A: Currently, you can view major incidents and significant infrastructure changes for the Zuora Revenue platform at [https://trust.zuora.com](https://trust.zuora.com). There are no uptime metrics available for Zuora Revenue now. However, there is a plan to provide these metrics in the future.

Q: How does Zuora Revenue manage release cycles in the cloud environment?

A: Zuora Revenue releases are deployed to the cloud environment on a quarterly basis. This is to align with the customer book closing cadence so that the release deployment does not interfere with the book closing activities. In addition, high priority issues that require immediate fixes are addressed as hotfixes and released as necessary.

Q: Are customers forced to receive a release in the cloud environment?

A: Yes, all cloud instances will run on the same version of Zuora Revenue. Each Zuora Revenue release will be applied at the same time for all the instances. The releases are aligned with the customer book closing cadence so that the releases do not interfere with the book closing activities.

Q: How is the regression testing done for the patches?

A: Regression testing is performed for all releases and patches by using the automation testing suite.

Q: What if we find an issue and cannot accept a patch that is recommended or required for another customer?

A: It is not an option to hold off a patch deployment

Q: What is the process around data fixes?

A: The case that requires a data fix should be rare. If there is any data fix required, the Support team will work with the Operations team to run the data fix.

Q: How do you make sure any future patches deployed on the cloud does not have a conflict with the customization we have?

A: As long as the customizations follow the standards, there should not be a problem. However, it is difficult to guarantee there will not be any conflict.

Q: What is the SLA for recovery from an outage?

A: Recovery is determined on a case-by-case basis. For example in a DR situation, when the whole region is down, a 15-minute recovery point objective (RPO) and 6-hour recovery time objective (RTO) are committed. Overall, 99.9% of availability is committed for the cloud platform.

Q: How is the performance monitored in the cloud?

A: Comprehensive logging and monitoring are set up for the cloud platform, which is implemented based on the ELK stack. System availability, performance, and security are continuously monitored by Zuora. The logs are analyzed and metrics are displayed on the internal dashboards for the Operations team to proactively take action. In case of any urgent condition, the monitoring system will page the on-call SRE resources to take immediate action. There is also a mature incident process for handling any failure or issue that the customer faces.

## Data privacy and data security questions

The following questions are frequently asked about data privacy and security about the Zuora Revenue cloud platform.

Q: What are the security and privacy guidelines for Zuora Revenue cloud environment?

A: There is a very comprehensive security program for Zuora Revenue cloud platform. At a high level, the cloud platform is SOC 2 & SOC 1 compliant. In addition to this, real-time intrusion detection and regular vulnerability scanning are implemented at the infrastructure layer and the application layer. A pentest is performed annually for the application layer to be inline with OWASP Top 10.

Q: What information security standards does Zuora Revenue cloud follow?

A: Zuora Revenue has a comprehensive security program for the cloud platform that includes:

-   Regular vulnerability scanning for external endpoints, internal infrastructure, and network

-   Yearly penetration testing that follows OWASP Top 10 standard

-   Security tools that are focused on intrusion detection

-   Data at rest and in transit encryption by default

-   TLS 1.2 encryption standard for all web traffic and servers that are built to CIS level standards
