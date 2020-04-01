import { GetContextWebInformation, GetFormDigestValue, GetCurrentUser } from "./components/ContextInfo"
import { GetGroup, GetGroupMembers, AddUsersToGroup, RemoveUsersFromGroup } from './components/Groups'
import { PeoplePicker } from './components/PeoplePicker'
import { GetUser, GetUserGroups } from './components/Users'


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
    //PeoplePicker
    PeoplePicker,
    //Users
    GetUser,
    GetUserGroups
}