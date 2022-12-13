import React from 'react'


// SSO --------------------------------------------------

export default function SSO() {


    microsoftTeams.initialize();
    var authTokenRequest = {
     successCallback: function(result) { console.log("Success: " + result); },
     failureCallback: function(error) { console.log("Error getting token: " + error); }
    };
        microsoftTeams.authentication.getAuthToken(authTokenRequest);

    return (
        <div>

            <h2>Hello{authTokenRequest}</h2>
            
        </div>)
}
