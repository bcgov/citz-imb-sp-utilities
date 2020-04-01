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
            PrincipalAccountType: "[User | DL | SecGroup | SPGroup]",
            SearchPrincipleSource: 15,
            ResolvePrincipalSource: 15,
            AllowMultipleValues: [true | false],
            MaximumEntitySuggestions: [5],
            Width: ["250px"],
            SharePointGroupID: [null | groupNumber]
        }}
        elementName="[elementName]"
        getUserInfo={[getUserInfo]} />
```

## Groups
you must supply groupId or groupName
```
import {GetGroup, GetGroupMembers, AddUserToGroup, RemoveUserFromGroup } from 'citz-imb-sp-utilities'

GetGroup({url: "[baseurl]", groupId: [number], groupName: "[name]"}).then(data =>{code...})
GetGroupMembers({url: "[baseurl]", groupId: [number], groupName: "[name]"}).then(data =>{code...})
AddUserToGroup({url: "[baseurl]", groupId: [number], groupName: "[name]", loginName: "i:0#.w|accountguid"}).then(data =>{code...})
RemoveUserFromGroup({url: "[baseurl]", groupId: [number], groupName: "[name]", loginName: "i:0#.w|accountguid"}).then(data =>{code...})
```

## Users
you must supply userId
```
import { GetUser, GetUserGroups } from 'citz-imb-sp-utilities'

GetUser({url:"[baseurl]", userId: [number] }).then(data => {code...})
GetUserGroups({url:"[baseurl]", userId: [number] }).then(data => {code...})
```