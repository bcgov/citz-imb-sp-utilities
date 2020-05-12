export const ChangeGroupOwner = ({
	baseurl = '',
	groupId,
	groupName,
	ownerGroupId,
	ownerGroupName,
}) => {
	console.log(`ChangeGroupOwner`, groupId, ownerGroupId, typeof SP)
	if (typeof SP === 'undefined') {
		return Promise.reject('ChangeGroupOwner:: SP is undefined')
	}

	let clientContext

	if(baseurl === ''){
		clientContext = new SP.ClientContext()
	} else {
		clientContext = new SP.ClientContext(baseurl)
	}

	let group
	let ownerGroup

	if (!groupId) {
		if (!groupName) {
			return Promise.reject(
				'ChangeGroupOwner requires groupId or groupName'
			)
		} else {
			group = clientContext
				.get_web()
				.get_siteGroups()
				.getByName(groupName)
		}
	} else {
		group = clientContext.get_web().get_siteGroups().getById(groupId)
	}

	if (!ownerGroupId) {
		if (!ownerGroupName) {
			return Promise.reject(
				'ChangeGroupOwner requires ownerGroupId or ownerGroupName'
			)
		} else {
			ownerGroup = clientContext
				.get_web()
				.get_siteGroups()
				.getByName(ownerGroupName)
		}
	} else {
		ownerGroup = clientContext
			.get_web()
			.get_siteGroups()
			.getById(ownerGroupId)
	}

	return new Promise((resolve, reject) => {
		//clientContext.load(group)
		group.set_owner(ownerGroup)
		group.update()
		clientContext.executeQueryAsync(
			() => {
				resolve()
			},
			() => {
				reject(`ChangeGroupOwner::${response}`)
			}
		)
	})
}
