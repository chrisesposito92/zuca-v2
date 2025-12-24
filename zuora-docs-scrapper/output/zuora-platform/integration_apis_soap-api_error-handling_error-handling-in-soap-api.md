---
title: "Error handling in SOAP API"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/error-handling/error-handling-in-soap-api"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:10.910Z"
---

# Error handling in SOAP API

Explains the error handling mechanism in Zuora SOAP API.

## Overview

Zuora handles exceptions using [Fault elements](/zuora-platform/integration/apis/soap-api/error-handling/faults) and the [Error object](/zuora-platform/integration/apis/soap-api/error-handling/errors).

If any parameters are invalid, then Zuora returns the appropriate fault codes with the names of the fields that caused the exception. If a required field was omitted in the call, then that field name with the required field code is returned. If a field value doesn't match a defined value, such as the payment term string value, then an error is returned.

If a call that processes credit cards fails, then a separate fault is returned that indicates a credit card processing failure and provides details about the failure.

## Errors and faults

The term, error, refers to anything that goes wrong, but Zuora makes a distinction between errors and faults.

An error is a problem that occurs when part of the call fails. The parts of the call that succeed are processed. The parts of the call that fail return error codes that indicate what failed.

A fault is a call-level error that results in the call failing completely. No part of the call succeeds, and no part of the call is processed. The call is invalid, and it returns a fault.
