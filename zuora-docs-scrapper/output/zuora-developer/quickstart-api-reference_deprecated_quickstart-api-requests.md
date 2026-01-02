---
title: "Making requests"
url: "https://developer.zuora.com/quickstart-api-reference_deprecated/quickstart-api-requests/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:20.815Z"
---

#

Making requests

You can paste the command below into your terminal to run your first API request. Make sure to replace `$ZUORA_BEARER_TOKEN` with your authentication token.

```bash
curl --request POST \
     --url 'https://rest.apisandbox.zuora.com/v2/products' \
     --header 'Authorization: Bearer $ZUORA_BEARER_TOKEN' \
     --header 'Content-Type: application/json' \
     --data '{
        "name": "Beverage Delivery Service",
        "sku": "SKU-1234",
        "description": "Beverage Delivery Service",
        "start_date": "2024-01-01",
        "end_date": "2025-01-01"
      }'
```

This request creates a product. You should get a response back that resembles the following:

```json
{
  "id": "8ad08f068d3090c9018d3161480357a9",
  "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",
  "updated_time": "2024-01-22T05:34:35-08:00",
  "created_by_id": "2c92c0946a6dffc0016a7faab604299b",
  "created_time": "2024-01-22T05:34:35-08:00",
  "start_date": "2024-01-01",
  "end_date": "2025-01-01",
  "name": "Beverage Delivery Service",
  "sku": "SKU-1234",
  "description": "Beverage Delivery Service",
  "active": true
}
```
