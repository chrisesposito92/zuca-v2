---
title: "Hidden and read-only profiles since 37.003.00.00"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/system-management/profiles/hidden-and-read-only-profiles-since-37.003.00.00"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:23:12.326Z"
---

# Hidden and read-only profiles since 37.003.00.00

Zuora Revenue 37.003.00.00 introduces enhancements to secure system profiles by hiding or setting them to read-only, with some UI labels also hidden.

In Zuora Revenue 37.003.00.00, an enhancement is delivered to secure the important system profiles and also deprecate the ones that are no longer in use.

As part of this enhancement, when you navigate to Setups > Application > Profiles , some profiles are hidden or set to read-only on the UI. On the Setups > Application > Profiles page, some UI labels are also hidden because they are controlled by the hidden profile.

Note:

To make any changes to the hidden profiles that are still in use, contact the Zuora Support or Zuora GS team. They can make changes in the sandbox environment and push the changes to the production environment when necessary.

## Hidden profiles

This is the content of the new section. You can add more details here as needed. When you navigate to Setups > Application > Profiles , the following profiles are hidden since version 37.003.00.00.

| Category | Profile name |
| --- | --- |
| APPLICATION | ACTION_ONAPEX_APPLICATION_IDAPEX_LOG_RETENTIONAUTO_SUBMIT_SCANNING_PROGRAMBG_JOB_MODEBREAK_COLLECT_BY_RCSBREAK_RC_LIMITBUNDLE_ACTION_TYPECALL_FREE_UNUSED_MEMEORYCHILD_GROUPBY_EXISTCLIENT_ORACLE_VERCOMMIT_TRANS_COUNTCREATE_ONETIME_DEF_SCHEDULEDATA_RETENTION_PERIODDB_LINKDEFRAGMENT_TABLEDISABLE_IDX_DELDO_SWEEP_SUMMARIZATIONHOSTHUGE_VOLUME_SSP_DATALARGE_DISTRIBUTIONSLAUNCH_DELAYLDAP_DOMAINLDAP_PORTLDAP_SERVERLEEYO_WEBSITE_URLLOG_LEVELMAX_PERIODSNETT_BATCH_PROCESS_COUNTNETTING_THREADSNO_OF_ORGS_IN_COLLECT_BATCHNO_OF_RUNNABLE_JOBSNO_RESUBMIT_FAILED_THREADNUMBER_OF_THREADSPRE_SUM_THREADSPROCESS_ORG_IN_BATCHPROCESS_TIMEOUTRC_SCAN_SET_COUNTRC_SCANNING_THREADRC_VALIDATION_THREADSREAL_TIME_SUMM_BY_RCSREALLOCATE_THREADSREG_SCHD_CC_ID_VALIDATIONRETAIN_RCRPRO_GD_INTG_METHODRPRO_LARGE_VOLUMERPRO_PARALLEL_DEGREERPRO_PARALLEL_QUERYRUN_GATHER_STATSSCAN_ACROSS_ALL_RCSCHEMA_OWNERSEND_EMAIL_ASSWITCH_ALLOCATIONSUI_SUMM_WARNINGUPDATE_CLIENT_LOGOUPLOAD_MAX_ERROR_COUNTUPLOAD_NON_ENGLISH_CHARSVALIDATE_UNPOSTED_TRXNSZBILLING_INTEGRATIONZIP_COMPRESS_DOWNLOADZUORA_STANDARD_INTEGRATION |
| GUIDANCE | SWITCH_GUIDANCE_FLAGSWITCH_TO_VERSION |
| INTERNAL | FILESYNC_API_ENDPOINTFILESYNC_RPTREFERERX_REV_TENANT_ID |
| JE | CC_ID_VALIDATION |
| PERF | ENABLE_TRACETRACE_WITH_BINDSTRACE_WITH_WAITS |
| PERIOD | ENABLE_MULTI_ORGOPEN_CLOSED_PERIOD |
| REPORT | REPORT_DIRECTORYRUN_REPORT_LIMIT |
| SECURITY | AUTHENTICATION_SCHEMEEBS_REDIRECT_URLLOGOUT_URLREVPRO_FRAMEWORK_URLREVPRO_URLREVPRO_URL_DOMAINURL_CHECKSUMUSER_CHECKSUMVALIDATION_RULES_EDITABLEVERIFY_LAUNCH_DB_NAME |
| SSP_ANALYSIS | SSP_DETAIL_EDITSSP_GROUP_EDIT |
| TRANSFER | ENABLE_GL_LINKSTOP_BATCH_ON_ERRORWEB_SERVICE_ENABLED |

## Read-Only Profiles

When you navigate to Setups > Application > Profiles, the following profiles are set to Read-only and cannot be edited since version 37.003.00.00.

| Category | Profile name |
| --- | --- |
| APPLICATION | AMT_FORMATDATE_FORMATDATE_TIME_FORMATNUM_FORMATPCT_FORMATQTY_FORMATWX_TMPL_MAX_PRD |
| REPORT | FILE_EXTENSION |

## Hidden UI labels on Functionality page

When you navigate to Setups > Application > Functionality, the following UI labels are hidden since 37.003.00.00.

| Section | UI label |
| --- | --- |
| Features Enabled | Web Service Enabled |
| Oracle | CC ID ValidationDo Transfer Validation |
| Accounting and Posting | Open Closed Period |
| Allocations | Switch Allocations |
| Dual Guidance | Guidance Integration MethodSwitch To VersionSwitch Guidance |
| Common Setup | RevPro UrlRevPro Url DomainSchema OwnerDB LinkUpdate Client Logo |
