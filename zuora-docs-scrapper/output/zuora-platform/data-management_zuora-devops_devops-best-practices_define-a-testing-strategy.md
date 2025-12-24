---
title: "Define a testing strategy"
url: "https://docs.zuora.com/en/zuora-platform/data-management/zuora-devops/devops-best-practices/define-a-testing-strategy"
product: "zuora-platform"
scraped_at: "2025-12-24T05:13:22.794Z"
---

# Define a testing strategy

Explore various testing strategies, including automated tests, UAT in production-like environments, and testing with relevant production data to ensure efficiency and accuracy.

| Testing Strategy | Description |
| --- | --- |
| Automated tests | These tests cover the vast majority of your use cases. Automated test scripts perform validations, ensuring efficiency and accuracy. |
| Run the UAT in a production-like environment | In the case of major releases and changes directly impacting your business and subscriptions, it is best to run the UAT in a production-like environment. This will help you understand the change and certify that it works as expected. Modifying your changes in production is a poor practice that would result in a loss of control over errors and failures, directly impacting the front end. |
| Test using relevant production data and users | Normally, businesses deploy the last successful set of configurations tested in the UAT environment. Regardless of the approach, testing should not be skipped. |
