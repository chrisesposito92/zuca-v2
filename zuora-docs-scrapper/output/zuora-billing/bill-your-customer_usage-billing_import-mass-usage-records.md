---
title: "Import mass usage records"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/import-mass-usage-records"
product: "zuora-billing"
scraped_at: "2025-12-24T08:28:29.423Z"
---

# Import mass usage records

Learn how to import mass usage records into Zuora using the SOAP API, including prerequisites, setup, and handling potential errors.

-   You should have experience with web services client side programming and Java and XML handling to perform this task.

-   Download Zuora\`s Java sample code and make sure the mail-1.4.jar file is included in the lib directory. You can download this file from the Oracle website. It is also included in the Axis package and in Zuora\`s sample code package. We have tested mail-1.4.jar, but the latest version 1.4.5 should also work.

-   Download the latest Zuora WSDL. You must be using WSDL version 37.0 or higher.

-   Use the `ant clean` and `ant setup` commands to generate the Zuora Web Service Axis Stub. Use the instructions in the `readme.txt` file included with the sample code to run the `ant` command. To connect the server, generate the web service stub in the client side as the proxy to connect to the remote web service.

-   Verify that you can find the `ZuoraServiceStub.Import` file in `ZuoraServiceStub.java`.

-   If your programming language is not Java or if you are not using the Axis as the web service client, see the documentation for the language or tool that you are using for information about handling the SOAP message attachment with MTOM.


You can combine your mass usage records into a single file, and use the SOAP API call to create an Import object to import the file. The file is added as the attachment in the SOAP and transferred to the Zuora application server using Message Transmission Optimization Mechanism (MTOM).

4 MB (4,94304 bytes or 4096 KB) is the size limit for the import file.

To upload usage files through the Zuora API:

1.  Use the create() call to create an Import object. You must set the `ImportType` to `Usage`.

    Use the following code:

    private ID createImport() throws Exception { Create create = new Create(); ZuoraServiceStub.Import ip = new ZuoraServiceStub.Import(); ip.setImportType("Usage"); DataSource dataSource = new ByteArrayDataSource( new FileInputStream("<REPLACE WITH YOUR CSV FILE PATH CONTAINED THE USAGE RECORDS>") ,"text/plain;name=<YOUR CSV FILE NAME>"); DataHandler dataHandler = new DataHandler(dataSource); ip.setFileContent(dataHandler); create.setZObjects(new ZObject\[\] { ip }); stub.\_getServiceClient().getOptions() .setProperty(Constants.Configuration.ENABLE\_MTOM, Constants.VALUE\_TRUE); CreateResponse cResponse = stub.create(create, null, this.header); ZuoraServiceStub.SaveResult result = cResponse.getResult()\[0\]; ID id = result.getId(); return id; }

2.  Use the `javax.activation.Datahandler` to set the File Content of Import. See the sample code for an example.
3.  Enable the MTOM in the Axis Client by setting the stub\`s connection option.

The create() call will return the import ID if the import is successful, or an error message if the usage import fails.

If the import fails, every result includes a message describing the reason the create() call failed.

-   Validation exception: Cannot detect the file name from your Content-Type. Use the `name` parameter to provide the file name.

-   Validation exception: File MD5 verification error.

-   Validation exception: The import file exceeds the maximum file size of 4,194,304 bytes.

-   Validation exception: The zip file cannot contain a directory.
