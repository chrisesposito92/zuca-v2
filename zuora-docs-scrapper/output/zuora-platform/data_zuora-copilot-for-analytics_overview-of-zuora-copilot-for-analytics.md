---
title: "Overview of Zuora Copilot for Analytics"
url: "https://docs.zuora.com/en/zuora-platform/data/zuora-copilot-for-analytics/overview-of-zuora-copilot-for-analytics"
product: "zuora-platform"
scraped_at: "2025-12-24T18:50:27.289Z"
---

# Overview of Zuora Copilot for Analytics

Zuora Copilot for Analytics is an AI assistant that simplifies data access in Zuora through a conversational interface, offering text-based responses, visualizations, and tabular data for comprehensive insights.

## Overview

Zuora Copilot for Analytics is an AI assistant that leverages generative AI capabilities to simplify and optimize the way you access your business data in Zuora. Copilot’s conversational interface lets you ask data-related questions in natural language and receive answers through a simple, intuitive interface. Zuora Copilot offers text-based responses, visualizations, and tabular data for comprehensive insights into the metric you are searching for.

Zuora Copilot for Analytics offers the following key features:

Copilot chat interface

The chat interface lets you ask data-related questions in natural language. Effortless interaction with data enables a wider range of stakeholders to derive value from analytics and make data-informed decisions.

Actionable insights

Real-time text-based answers, visualizations, and tabular data help you identify trends, anomalies, and patterns that impact your subscription and billing operations.

Complete visibility

The AI-driven analytics experience provides a comprehensive view of subscription and billing metrics, helping you gain a holistic understanding of your business performance.

Continuous improvement

To understand how you interact with Zuora Copilot, the system collects feedback and usage patterns to continuously improve the accuracy and relevance of the generated responses. Over time, the insights will be more consistent and accurate, which can enhance the overall user experience.

## Scope for Zuora Copilot for Analytics

The following information will help you understand the technical limitations and key performance concepts as they apply to Zuora Copilot for Analytics.

-   Time period: Zuora Copilot for analytics supports up to 2 years of data per query. However, queries on data beyond two years might still work, but the results may not be accurate. Asynchronous time periods (gaps) are not supported. For example, "Show me the net MRR for June 2022 to July 2023, August 2022 to June 2023”. Time periods must be synchronous and continuous between two intervals. For example, show me the net MRR between June 2022 to July 2023.

-   Future dates are not supported: Copilot processes present events only. Questions containing future time will return an error.

-   Spelling and grammar: Natural language can vary greatly between individuals and might cause ambiguity. The queries entered might include the use of colloquial language, slang, or non-standardized grammar, which poses more challenges to the NLP algorithms to interpret your context and intent as a user. For the most accurate results, construct queries without any misspellings or grammatical errors.

-   Filtering: Supports filtering for selected attributes.
