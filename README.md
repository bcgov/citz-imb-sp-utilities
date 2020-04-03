# SharePoint Utilities

utility methods/functions for use with SharePoint 2016. Depends on [React](https://www.npmjs.com/package/react).

# Installation

`npm install citz-imb-sp-utilities`

## ContextInfo

baseurl will be in the form of "https://\<mydomain\>/sites/\<mysite\>"

```
import {GetContextWebInformation, GetFormDigestValue, GetCurrentUser} from 'citz-imb-sp-utilities'

GetContextWebInformation("baseurl").then(response => {code...})
GetFormDigestValue("baseurl").then(response => {code...})
GetCurrentUser().then(response => {code...})
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

baseurl will be in the form of "https://\<mydomain\>/sites/\<mysite\>"
you must supply groupId (as a number) or groupName (as text), and loginName (as text in the format 'i:0#.w|accountguid') or userId (as a number)
loginName and userId can also be an array of their type.

```
import {GetGroup, GetGroupMembers, AddUsersToGroup, RemoveUsersFromGroup } from 'citz-imb-sp-utilities'

GetGroup({url:"baseurl", groupId: number, groupName: "name"}).then(response =>{code...})
GetGroupMembers({url:"baseurl", groupId: number, groupName: "name"}).then(response =>{code...})
AddUsersToGroup({url:"baseurl", groupId: number, groupName: "name", loginName: ""}).then(response =>{code...})
RemoveUsersFromGroup({url:"baseurl", groupId: number, groupName: "name", loginName: "i:0#.w|accountguid"}).then(data =>{response...})
```

## Lists

baseurl will be in the form of "https://\<mydomain\>/sites/\<mysite\>"
you must supply listGUID (as text) or listName (as text)
items and itemIds can also be an array of their type.

```
import {GetList, GetListItems, AddItemsToList, RemoveItemsFromList, GetListDefaultView, GetListViews, GetListFields } from 'citz-imb-sp-utilities'

GetList({ url:"baseurl", listName: "name", listGUID: "guid" }).then(response =>{code...})
GetListItems({ url:"baseurl", listName: "name", listGUID: "guid" }).then(response =>{code...})
AddItemsToList({ url:"baseurl", listName: "name", listGUID: "guid", items: {object} }).then(response =>{code...})
RemoveItemsFromList({ url:"baseurl", listName: "name", listGUID: "guid", itemIds: number }).then(data =>{response...})
GetListDefaultView({ url:"baseurl", listName: "name", listGUID: "guid" }).then(response =>{code...})
GetListViews({ url:"baseurl", listName: "name", listGUID: "guid" }).then(response =>{code...})
GetListFields({ url:"baseurl", listName: "name", listGUID: "guid" }).then(response =>{code...})
```

## Users

baseurl will be in the form of "https://\<mydomain\>/sites/\<mysite\>"
you must supply userId

```
import { GetUser, GetUserGroups } from 'citz-imb-sp-utilities'

GetUser({url:"baseurl", userId: number }).then(response => {code...})
GetUserGroups({url:"baseurl", userId: number }).then(response => {code...})
```
