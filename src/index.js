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
	ChangeGroupOwner,
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
	GetListPermissions,
	BreakListPermissionsInheritance,
	RemovePermissionsFromList,
	AddPermissionsToList,
} from './components/ListPermissions'
import {
	GetSitePermissions,
	ResetSitePermissionsInheritance,
	BreakSitePermissionsInheritance,
	RemovePermissionsFromSite,
	AddPermissionsToSite,
} from './components/SitePermissions'
import { GetSite, GetCollection } from './components/Sites'
import { SPList } from './sharepoint/SPList'

export {
	/* ==============
	ContextInfo
	*/
	GetContextWebInformation,
	GetFormDigestValue,
	GetCurrentUser,
	/* ==============
	Email
	*/
	SendEmail,
	/* ==============
	Groups
	*/
	GetGroup,
	CreateGroup,
	GetGroupMembers,
	AddUsersToGroup,
	RemoveUsersFromGroup,
	GetAssociatedGroups,
	ChangeGroupOwner,
	/* ==============
	Lists
	*/
	GetList,
	GetListItems,
	AddItemsToList,
	RemoveItemsFromList,
	GetListDefaultView,
	GetListViews,
	GetListFields,
	CreateList,
	DeleteList,
	/* ==============
	PeoplePicker
	*/
	PeoplePicker,
	/* ==============
	Permissions - List
	*/
	GetListPermissions,
	BreakListPermissionsInheritance,
	RemovePermissionsFromList,
	AddPermissionsToList,
	/* ==============
	Permissions - Site
	*/
	GetSitePermissions,
	BreakSitePermissionsInheritance,
	ResetSitePermissionsInheritance,
	RemovePermissionsFromSite,
	AddPermissionsToSite,
	/* ==============
	Sites
	*/
	GetCollection,
	GetSite,
	/* ==============
	Users
	*/
	GetUser,
	GetUserGroups,
	/* ==============
	SharePoint
	*/
	SPList,
}
