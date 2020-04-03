import { GetContextWebInformation, GetFormDigestValue, GetCurrentUser } from "./components/ContextInfo"
import { GetGroup, GetGroupMembers, AddUsersToGroup, RemoveUsersFromGroup } from './components/Groups'
import { PeoplePicker } from './components/PeoplePicker'
import { GetUser, GetUserGroups } from './components/Users'
import { GetList, GetListItems, AddItemsToList, RemoveItemsFromList, GetListViews } from './components/Lists'


export {
    //ContextInfo
    GetContextWebInformation,
    GetFormDigestValue,
    GetCurrentUser,
    //Groups
    GetGroup,
    GetGroupMembers,
    AddUsersToGroup,
    RemoveUsersFromGroup,
    //Lists
    GetList,
    GetListItems,
    AddItemsToList,
    RemoveItemsFromList,
    GetListViews,
    //PeoplePicker
    PeoplePicker,
    //Users
    GetUser,
    GetUserGroups
}