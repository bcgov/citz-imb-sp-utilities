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
	CreateList,
	DeleteList,
	GetListItems,
	AddItemsToList,
	RemoveItemsFromList,
	GetListDefaultView,
	GetListViews,
	GetListFields,
} from './components/Lists'
import { SendEmail } from './components/Email'
import {
	BreakListPermissionsInheritance,
	GetListPermissions,
	RemovePermissionsFromList,
} from './components/Permissions'

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
	CreateList,
	DeleteList,
	//PeoplePicker
	PeoplePicker,
	//Permissions
	GetListPermissions,
	// AddPermissionsToSite,
	// SetPermissionsOnList,
	BreakListPermissionsInheritance,
	RemovePermissionsFromList,
	//Users
	GetUser,
	GetUserGroups,
}
