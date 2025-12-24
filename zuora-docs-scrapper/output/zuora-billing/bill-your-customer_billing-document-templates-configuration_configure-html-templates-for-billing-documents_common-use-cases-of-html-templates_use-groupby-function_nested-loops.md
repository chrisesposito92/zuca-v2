---
title: "Nested loops"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/use-groupby-function/nested-loops"
product: "zuora-billing"
scraped_at: "2025-12-24T05:43:46.723Z"
---

# Nested loops

Explains how to use nested loops in Mustache templates, providing a comparison with pseudo-code to enhance understanding.

With the aforementioned information in mind, you can use the following merge field template for nested loops:

{{#Items|GroupBy(A,B,C)}} {{Cmd\_Assign(ItemsWithSameA,\_Group)}} {{#ItemsWithSameA}} {{Cmd\_Assign(ItemsWithSameB,\_Group)}} {{#ItemsWithSameB}} {{Cmd\_Assign(ItemsWithSameC,\_Group)}} {{#ItemsWithSameC}} {{A}} - {{B}} {{/ItemsWithSameC}} {{/ItemsWithSameB}} {{/ItemsWithSameA}} {{/Items|GroupBy(A,B,C)}}

If you are not familiar with the [Mustache](https://mustache.github.io/mustache.5.html) template yet, see the following pseudo-code that explains what it does.

GroupedItems=Items.GroupBy(A,B,C)for{A,\_Group}inGroupedItems{// {A,\_Group} is a deconstructed objectItemsWithSameA = \_Group for {B,\_Group} in ItemsWithSameA {// B and \_Group are key names.ItemsWithSameB = \_Group for {C,\_Group} in ItemsWithSameB { ItemsWithSameC = \_Group for item in ItemsWithSameC {// item is in shape of the original.print(item.A) print(" - ") print(item.B) } } } }

The following table lists the line-by-line comparison between the Mustache merge field example and its corresponding pseudo-code to help you understand how the nested loops work.

| Mustache template | Pseudo-code |
| --- | --- |
| {{#Items\|GroupBy(A,B,C)}} | GroupedItems = Items . GroupBy ( A , B , C )for { A ,_Group} in GroupedItems { |
| {{Cmd_Assign(ItemsWithSameA,_Group)}} | ItemsWithSameA = _Group |
| {{#ItemsWithSameA}} | for { B ,_Group} in ItemsWithSameA { |
| {{Cmd_Assign(ItemsWithSameB,_Group)}} | ItemsWithSameB = _Group |
| {{#ItemsWithSameB}} | for { C ,_Group} in ItemsWithSameB { |
| {Cmd_Assign(ItemsWithSameC,_Group)}} | ItemsWithSameC = _Group |
| {{#ItemsWithSameC}} | for item in ItemsWithSameC { |
| {{A}} - {{B}} | print(item. A )print(" - ") print(item. B ) |
| {{/ItemsWithSameC}} | } |
| {{/ItemsWithSameB}} | } |
| {{/ItemsWithSameA}} | } |
| {{/Items\|GroupBy(A,B,C)}} | } |
