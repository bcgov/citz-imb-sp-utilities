import {
	GetContextWebInformation,
	GetFormDigestValue,
	GetCurrentUser,
} from './components/ContextInfo'
import {
	GetGroup,
	CreateGroup,
	GetGroupMembers,
	AddUsersToGroup,
	RemoveUsersFromGroup,
	GetAssociatedGroups,
} from './components/Groups'
import { PeoplePicker } from './components/PeoplePicker'
import { GetUser, GetUserGroups } from './components/Users'
import {
	GetList,
	GetListItems,
	AddItemsToList,
	RemoveItemsFromList,
	GetListDefaultView,
	GetListViews,
	GetListFields,
} from './components/Lists'
import {SendEmail} from './components/Email'

export {
	//ContextInfo
	GetContextWebInformation,
	GetFormDigestValue,
	GetCurrentUser,
	//Email
	SendEmail,
	//Groups
	GetGroup,
	CreateGroup,
	GetGroupMembers,
	AddUsersToGroup,
	RemoveUsersFromGroup,
	GetAssociatedGroups,
	// ChangeGroupOwner,
	//Lists
	GetList,
	GetListItems,
	AddItemsToList,
	RemoveItemsFromList,
	GetListDefaultView,
	GetListViews,
	GetListFields,
	// CreateList,
	//PeoplePicker
	PeoplePicker,
	//Permissions
	// SetPermissionsOnSite,
	// SetPermissionsOnList,
	// BreakInheritanceOnList,
	// RemovePermissionsOnList,
	//Users
	GetUser,
	GetUserGroups,
}
