---
title: "Key Concepts"
url: "https://docs.zuora.com/en/zuora-platform/data/consumption-insights/key-concepts"
product: "zuora-platform"
scraped_at: "2025-12-24T18:50:06.609Z"
---

# Key Concepts

Zuora's Consumption Insights offer advanced forecasting and anomaly detection capabilities, enabling businesses to predict trends, identify risks, and optimize revenue. By analyzing historical data, users can gain actionable insights into customer behavior, enhance engagement strategies, and mitigate churn risk.

## Forecasting

Zuora's forecasting feature helps you predict future trends and values based on your historical data. This capability can be crucial for strategic planning, resource allocation, and identifying potential future opportunities or risks in your business.

At its core, Zuora's forecasting leverages advanced statistical algorithms that analyze historical time-series data to identify patterns and project them into the future. While the precise mathematical models are complex, the process can be understood by considering the key inputs and how they shape the forecast.

## How the Forecasting Algorithm Works

The forecasting process takes your past performance data and intelligently extends it forward. Here are the key elements it considers:

-   Historical Data (Timestamps and Values):

    -   The algorithm requires a series of historical data points, each associated with a specific date or time.

    -   The quality and completeness of this historical data are vital, as the algorithm learns directly from it.

-   Forecast Horizon (Number of Periods):

    -   You define how far into the future you want the forecast to extend. This is specified as a number of "periods" (e.g., 3 months, 6 quarters, 12 weeks). The algorithm will generate predicted values for each of these future periods.

-   Seasonality:

    -   Many business metrics exhibit seasonal patterns – predictable fluctuations that occur at regular intervals (e.g., spikes in sales at year-end, dips in usage during holidays).

    -   The forecasting algorithm can account for these patterns if identified. You can specify the expected seasonality (e.g., "monthly," "quarterly," "yearly," or "none") to ensure the forecast accurately reflects these recurring trends. If seasonality is present in your data, incorporating it leads to a more accurate prediction.


## Anomaly Detection

Anomaly Detection helps users identify unusual or unexpected data points within their historical data. Think of it as an intelligent guard for your data, signaling when something significantly deviates from the norm – whether it's a sudden spike, an unusual dip, or a sustained departure from expected patterns.

## How Anomaly Detection Works

Zuora's anomaly detection uses sophisticated statistical algorithms to analyze your time-series data (e.g., daily usage, monthly revenue, transaction counts). The core process involves:

-   Analyzing Historical Trends: The algorithm first learns what "normal" looks like for your specific data. It examines past values and their timestamps to understand typical patterns, seasonality, and expected fluctuations.

-   Identifying Deviations: Once the normal pattern is understood, the algorithm monitors new or existing data points. If a data point falls outside a predefined range of what's considered normal, it's flagged as an anomaly.

-   Applying Different Detection Methods: Zuora uses various detection methods to help users identify anomalies. The various methods help users spot both sudden, sharp changes as well as subtle, prolonged unusual behavior.


## What makes a data point an anomaly?

An anomaly in Zuora is a data point that deviates significantly from its typical or expected pattern based on historical trends. Our statistical algorithms first analyze your past data to understand its normal behavior, including usual values, fluctuations, and any recurring patterns. They then establish a "normal" range, and any data point that falls outside these learned boundaries—whether it's a sudden spike, an unexpected drop, or a prolonged unusual value—is flagged as an anomaly, indicating it's statistically unusual and warrants your attention.

## Billed Usage

Billed Usage represents the total monetary value calculated from a customer's actual consumption of services, as recorded on their posted invoices. It is the revenue generated specifically from usage-based charges, distinct from recurring subscription fees. The total is then converted to a single, consistent reporting currency using the applicable foreign exchange rate on the invoice date.

## Risk Score

The Risk Score is a numerical value on a 0-100 point scale that quantifies the likelihood of a customer reducing their usage of our services or potentially churning (canceling their subscription) in the future. A higher Risk Score (closer to 100) indicates a greater probability of negative behavior, while a lower Risk Score (closer to 0) indicates a lower risk.

This score is determined by analyzing your historical usage patterns over time using Zuora's statistical algorithms. These algorithms look for a steady downward trend in your consumption data. If your usage has been consistently decreasing, especially over a sustained period, your Risk Score will increase.

## Why is risk score important?

By understanding your Risk Score, you can proactively identify accounts that might need attention. This allows you to engage with these customers, understand their challenges, and offer solutions to help them continue to succeed with our products.

## Risk score classification:

-   High Risk (e.g., 67-100): Indicates a significant and consistent downward trend in usage, suggesting a strong likelihood of churn or reduction.

-   Medium Risk (e.g., 34-66): Suggests a moderate downward trend that warrants monitoring.

-   Low Risk (e.g., 0-33): Shows stable or increasing usage, indicating a low probability of negative changes.


## Health Score

The Health Score is a numerical value on a 0-100 point scale that indicates the overall well-being and engagement of a customer with our services. A higher Health Score (closer to 100) signifies a customer who is actively using and deriving great value from our products, suggesting strong retention and potential for growth. A lower Health Score (closer to 0) indicates weaker engagement.

This score is derived from analyzing your historical usage patterns using Zuora's statistical algorithms. These algorithms identify consistent upward trends in your consumption data. If your usage has been steadily increasing, indicating growing adoption and value, your Health Score will be higher.

## Why is health score important?

The Health Score helps you identify your most successful and engaged customers. These are often the customers who are great candidates for upsell opportunities, testimonials, or serving as references. By understanding who your "healthy" customers are, you can nurture these relationships and replicate their success across other accounts.

## Health score classification:

-   High Health (e.g., 67-100): Indicates a significant and consistent upward trend in usage, suggesting high engagement and satisfaction.

-   Medium Health (e.g., 34-66): Suggests a moderate upward trend, indicating good engagement.

-   Low Health (e.g., 0-33): Shows stagnant or declining usage, indicating a need for engagement to improve customer satisfaction and adoption.


## Root Cause Analysis

Zuora Consumption Insights' Root Cause Analysis feature empowers you to quickly understand why your consumption meter trends are changing. Whether you observe a significant spike or a concerning dip in your meter data, this tool helps you pinpoint the exact factors driving that shift.

## How Root Cause Analysis works

This feature dives deep into your meter data to analyze all the unique values across every dimension associated with a given meter. For example, if your meter data includes dimensions like Sales Channel, Customer Name, Segment, and Country, the Root Cause Analysis will examine the contribution of each individual value within those dimensions.

The results are presented in an intuitive heatmap visualization (as shown in the accompanying image). This heatmap provides two critical pieces of information for each dimensional value:

1.  Relative Contribution: It shows how much each specific dimensional value contributed to the overall period-over-period change in your meter. For instance, you can see if a certain Sales Channel was responsible for a large portion of an increase, or if a particular Country drove a significant decrease.

2.  Percentage Change: Alongside the contribution, you'll see the percentage change for that specific dimensional value, highlighting the magnitude of its own change.


## Identifying Drivers of Change

By using the Root Cause Analysis, you can quickly identify which specific factors are driving the changes in your meter trends. This enables you to:

-   Pinpoint Growth Drivers: Understand which products, customer segments, or sales channels are contributing most to consumption growth.

-   Diagnose Declines: Quickly identify problematic areas, such as a specific product, region, or customer group, that are causing a drop in consumption.

-   Validate Initiatives: See the direct impact of business initiatives on consumption trends by analyzing changes across relevant dimensions.


This powerful visualization and analysis capability provides immediate, actionable insights into the forces shaping your consumption-based revenue.

## Drilldown Analysis

Zuora Consumption Insights' Drilldown Analysis feature provides a granular view into where your usage is coming from over a specific period. Unlike Root Cause Analysis, which focuses on changes in trends, Drilldown Analysis helps you understand the composition of your total consumption by breaking it down across various dimensions.

## How Drilldown Analysis works

This feature analyzes your meter data for a selected timeframe and calculates the contribution of every unique value within each of your consumption dimensions (e.g., Sales Channel, Customer Name, Country, Method).

The results are presented in a clear, interactive visualization (as shown in the accompanying image). For each dimensional value, you will see its percentage contribution to the overall total usage within the period you've selected. This allows you to:

-   Understand Usage Distribution: See at a glance which segments, products, regions, or other factors represent the largest portions of your total consumption.

-   Identify Top Performers: Quickly pinpoint your biggest usage contributors, whether they are specific customers, sales channels, or product offerings.

-   Analyze Segment Performance: Break down overall usage by any relevant category to understand the relative strength of different segments.


## Gaining Deeper Insights into Your Usage

By utilizing Drilldown Analysis, you gain immediate insights into the structure of your consumption. This enables you to:

-   Prioritize Efforts: Focus your resources on the most impactful customer segments or sales channels.

-   Optimize Product Strategy: Understand which product configurations or features are driving the most usage.

-   Monitor Performance by Segment: Continuously track the contribution of various operational and customer segments to your overall consumption.


This feature provides a comprehensive breakdown, allowing you to drill down into your data and understand the fundamental composition of your usage trends.

## Benefits of Consumption Insights to users

-   Accurate Forecasting: Plan effectively with precise predictions of future usage trends.

-   Revenue Optimization: Unlock new revenue opportunities by understanding customer behaviors.

-   Churn Prevention: Detect at-risk customers and take proactive measures to retain them.

-   Strategic Decision-Making: Gain a competitive edge by leveraging actionable insights.


## Consumption Insights Use Cases

## Forecasting Revenue

-   Predict future billing amounts based on customer usage trends.


-   Period over period comparison to identify seasonal variations and align business planning accordingly.


## Upsell and Cross-Sell Optimization

-   Use opportunity scores to target high-growth accounts.


-   Enhance customer engagement strategies based on detailed usage patterns for particular units of measure.


## Churn Risk Mitigation

-   Leverage risk scoring to identify accounts with declining consumption.

-   Take proactive steps to re-engage at-risk customers.
