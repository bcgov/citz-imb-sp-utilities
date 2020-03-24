# SharePoint Utilities

utility methods/functions for use with SharePoint 2016

# Installation

`npm install --save-dev citz-imb-sp-utilities`

then...

```
import GetContextWebInformation, {GetFormDigestValue} from 'citz-imb-sp-utilities'

GetContextWebInformation("https://[mydomain]/sites/[mysite]").then(data => {code...})
GetFormDigestValue("https://[mydomain]/sites/[mysite]").then(data => {code...})
```

GetContextWebInformation return example:

```
__metadata: {type: "SP.ContextWebInformation"}
FormDigestTimeoutSeconds: 1800
FormDigestValue: "0x2BDA66B1F85C9613B94BC4D829613F45EE9070207344C0194702EE174A5523B4100BA4878CAA67A8913FD7332AF771A1000F2A92F0E6B21A076963F8898744F3,24 Mar 2020 16:45:20 -0000"
LibraryVersion: "16.0.4912.1000"
SiteFullUrl: "https://citz.sp.gov.bc.ca/sites/DEV"
SupportedSchemaVersions: {__metadata: {…}, results: Array(2)}
WebFullUrl: "https://citz.sp.gov.bc.ca/sites/DEV"
```

GetFormDigestValue return example:

```
0x92308F425F4935F1FD920E6B1D1E234B701E41313DC92C385870B2A47F8434717E0F5F85C2708BEC9783A061C85D27BFCDCFD07480888B0D94CB8625127DD7C6,24 Mar 2020 16:43:47 -0000
```