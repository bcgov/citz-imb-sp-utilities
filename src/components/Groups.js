export const GetGroupMembers = ({ url ='', groupId, groupName }) => {
    console.log("GetGroupMembers", url, groupId, groupName)
    let endPoint

    if(!groupId){
        if(!groupName){
            return new Promise((resolve,reject)=>{reject("GetGroupMembers requires GroupId or GroupName")})
        } else{
            endPoint = `/_api/web/SiteGroups/getByName('${groupName}')/Users`
        }
    }else{
        endPoint = `/_api/web/SiteGroups(${groupId})/Users`
    }

    return new Promise((resolve, reject) => {
        fetch(`${url}${endPoint}`)
            .then(results => {
                if(results.ok) {
                    return results.json()
                } else {
                    const msg = `error: ${results.status} ${results.statusText}`
                    console.groupCollapsed('GetGroupMembers results', msg)
                    console.log(results)
                    console.groupEnd()
                    reject(new error(msg))
                }
            })
            .then(data => {
                resolve(data.d.results)
            })
            .catch(error => {
                resolve(error)
            })
    })
}

export const AddUserToGroup = ({ url, groupId, logonName }) => {
    SP.SOD.executeFunc("SP.js", "SP.ClientContext", function () {
        var ctx = new SP.ClientContext();
        var groups = ctx.get_web().get_siteGroups();
        var group = groups.getById(groupId);
        var user = ctx.get_web().ensureUser(logonName);
        var groupUsers = group.get_users();
        groupUsers.addUser(user);

        ctx.load(user);
        ctx.load(group);
        ctx.executeQueryAsync(function (sender, args) {
            return true;
        }, function (sender, args) {
            window.console && console.log("Error: " + args.get_message());
            return false;
        })
    });
}