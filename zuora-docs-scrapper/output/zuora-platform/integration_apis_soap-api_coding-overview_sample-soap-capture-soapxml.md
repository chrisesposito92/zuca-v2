---
title: "Sample SOAP: Capture SOAP/XML"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/coding-overview/sample-soap-capture-soapxml"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:08.281Z"
---

# Sample SOAP: Capture SOAP/XML

This reference provides examples of common ways to capture SOAP in various programming environments.

The Zuora API documentation includes many code samples based in SOAP. Many developers new to SOAP often do not realize that their programming is only generating and receiving XML from a webservice. Even if they do, they are often unsure how to view the XML, even when debugging their code.

## Perl

#!/usr/bin/perl use strict; use warnings; use SOAP::Lite +trace =&gt; 'all'; my ($SOAP\_BASE, $USERNAME, $PASSWORD) = @ARGV; my $contact\_client = SOAP::Lite-&gt;new ( proxy =&gt; $SOAP\_BASE . 'contact.php', ns = &gt; 'urn:ContactService', ); my $token = $contact\_client\-&gt;login($USERNAME, $PASSWORD)-&gt;result;

## PHP5

list(, $SOAP\_BASE, $USERNAME, $PASSWORD) = $argv; $contact\_client = new SoapClient($SOAP\_BASE . 'contact.php?wsdl', array('trace' => true)); $token = $contact\_client\->login($USERNAME, $PASSWORD); $soap\_request = $contact\_client\->\_\_getLastRequest(); $soap\_response = $contact\_client\->\_\_getLastResponse(); echo "SOAP request:\\n$soap\_request\\n"; echo "SOAP response:\\n$soap\_response\\n";

## PHP4

require\_once('lib\_soap/nusoap.php'); list(, $SOAP\_BASE, $ADV\_USERNAME, $ADV\_PASSWORD) = $\_SERVER\['argv'\]; $contact\_client = new SoapClient($SOAP\_BASE . 'contact.php?wsdl', true); $token = $contact\_client\->call('login', array('user' => $ADV\_USERNAME, 'pass' => $ADV\_PASSWORD)); echo "SOAP request:\\n" . $contact\_client\->request . "\\n"; echo "SOAP response:\\n" . $contact\_client\->response . "\\n";

## C++

Compile the stdsoap2.cpp source code with C/C++ compiler option '-DDEBUG' ('/DDEBUG' in MSVC++). Executing your service or client application logs the activities in the following files:

-   SENT.log: This file contains the messages sent.

-   RECV.log: This file contains the messages received.

-   TEST.log: This file contains the trace information.


## C#

Save the following code with the name SqlSoapTracer.cs in the same folder that contains the SOAP client project files.

Perform the following steps in the Solution Explorer window:

\[System.Web.Services.Protocols.SoapRpcMethodAttribute("urn:ContactService#login", RequestNamespace="urn:ContactService", ResponseNamespace="urn:ContactService")\] \[return: System.Xml.Serialization.SoapElementAttribute("token")\] \[snoopattribute()\] public string login(string user, string pass, login\_options login\_options) { object\[\] results = this.Invoke("login", new object\[\] { user, pass, login\_options}); return ((string)(results\[

## Java

Save this file as client-config.wsdd in the working directory of your Axis client. Axis will load it automatically. This configuration tells Axis to save all incoming and outgoing XML into a file named axis.log.

<deployment xmlns="http://xml.apache.org/axis/wsdd/" xmlns:java="http://xml.apache.org/axis/wsdd/providers/java"\> <handler name="log" type\="java:org.apache.axis.handlers.LogHandler"/> <globalConfiguration> <requestFlow> <handler type\="log"/> <requestFlow> <responseFlow> <handler type\="log"/&gt; &lt;responseFlow> <globalConfiguration> <transport name="http" pivot="java:org.apache.axis.transport.http.HTTPSender"/> </deployment>

## Ruby

#!/usr/bin/ruby require "soap/wsdlDriver" (soap\_base, username, password) = ARGV contact\_client = SOAP::WSDLDriverFactory.new(soap\_base + 'contact.php?wsdl').create\_rpc\_driver contact\_client.wiredump\_dev = STDOUT; token = contact\_client.login(username, password, nil)

## Python

When using SOAPpy, make sure to add the import tag below for the object.api.zuora.com schema:

`<import namespace="http://api.zuora.<wbr/>com/" />`

And also the import tag below for the api.zuora.com schema:

`<import namespace="http://object.api.<wbr/>zuora.com/" />`

#!/usr/bin/python import sys import SOAPpy SOAPpy.Config.debug = 1 (SOAP\_BASE, USERNAME, PASSWORD) = sys.argv\[1:4\] contact\_client = SOAPpy.SOAPProxy(SOAP\_BASE + 'contact.php') token = contact\_client.login(USERNAME, PASSWORD)

## Tips

If you are using the GlassFish application server, add the following configuration information to the domain.xml file:

<jvm-options>-Dorg.apache.commons.logging.Log=org.apache.commons.logging.impl.SimpleLog</jvm-options> <jvm-options>-Dorg.apache.commons.logging.simplelog.showdatetime=true</jvm-options> <jvm-options>-Dorg.apache.commons.logging.simplelog.log.httpclient.wire=debug</jvm-options> <jvm-options>-Dorg.apache.commons.logging.simplelog.log.org.apache.commons.httpclient=debug</jvm- options>
