# SharePoint Utilities

utility methods/functions for use with SharePoint 2016. Depends on [React](https://www.npmjs.com/package/react).

# Installation

`npm install citz-imb-sp-utilities`

## ContextInfo

```
import {GetContextWebInformation, GetFormDigestValue} from 'citz-imb-sp-utilities'

GetContextWebInformation("https://[mydomain]/sites/[mysite]").then(data => {code...})
GetFormDigestValue("https://[mydomain]/sites/[mysite]").then(data => {code...})
```

## PeoplePicker
```
import { PeoplePicker } from 'citz-imb-sp-utilities'

<PeoplePicker
        schema={{
            PrincipalAccountType: "User",
            SearchPrincipleSource: 15,
            ResolvePrincipalSource: 15,
            AllowMultipleValues: false,
            MaximumEntitySuggestions: 5,
            Width: "250px",
            SharePointGroupID: null
        }}
        elementName="testElement"
        getUserInfo={getUserInfo} />
```

## Groups
```
import { GetGroupMembers } from 'citz-imb-sp-utilities'

 GetGroupMembers({groupId: 9}).then(data =>{...code})
```