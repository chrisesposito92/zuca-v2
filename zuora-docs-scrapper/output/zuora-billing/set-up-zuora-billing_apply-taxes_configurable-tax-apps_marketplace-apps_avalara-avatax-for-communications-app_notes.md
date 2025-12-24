---
title: "Notes"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/avalara-avatax-for-communications-app/notes"
product: "zuora-billing"
scraped_at: "2025-12-24T05:07:08.972Z"
---

# Notes

This note explains how Zuora and Avalara handle exempt amounts differently

Zuora and Avalara have different definitions for the exempt amount. In Zuora, it means excluded tax amount; in Avalara, it means excluded transaction amount. To avoid miscalculation on your billing documents, Zuora does not map its`exemptAmount` field with Avalara's`exm` field.
