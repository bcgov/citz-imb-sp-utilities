import { GetContextWebInformation, GetFormDigestValue, GetCurrentUser } from "./components/ContextInfo"
import { GetGroup, CreateGroup, GetGroupMembers, AddUsersToGroup, RemoveUsersFromGroup } from './components/Groups'
import { PeoplePicker } from './components/PeoplePicker'
import { GetUser, GetUserGroups } from './components/Users'
import { GetList, GetListItems, AddItemsToList, RemoveItemsFromList, GetListDefaultView, GetListViews, GetListFields } from './components/Lists'


export {
    //ContextInfo
    GetContextWebInformation,
    GetFormDigestValue,
    GetCurrentUser,
    //Groups
    GetGroup,
    CreateGroup,
    GetGroupMembers,
    AddUsersToGroup,
    RemoveUsersFromGroup,
    //Lists
    GetList,
    GetListItems,
    AddItemsToList,
    RemoveItemsFromList,
    GetListDefaultView,
    GetListViews,
    GetListFields,
    //PeoplePicker
    PeoplePicker,
    //Users
    GetUser,
    GetUserGroups
}