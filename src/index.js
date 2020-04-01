import { GetContextWebInformation, GetFormDigestValue } from "./components/ContextInfo"
import { GetGroup, GetGroupMembers, AddUserToGroup, RemoveUserFromGroup } from './components/Groups'
import { PeoplePicker } from './components/PeoplePicker'
import { GetUser, GetUserGroups } from './components/Users'


export {
    //ContextInfo
    GetContextWebInformation,
    GetFormDigestValue,
    //Groups
    GetGroup,
    GetGroupMembers,
    AddUserToGroup,
    RemoveUserFromGroup,
    //PeoplePicker
    PeoplePicker,
    //Users
    GetUser,
    GetUserGroups
}