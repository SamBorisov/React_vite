import React from 'react'
import * as microsoftTeams from "@microsoft/teams-js"
// SSO --------------------------------------------------

export default function SSO() {


    () => {
    microsoftTeams.initialize();
    let authTokenRequestOptions = {
        successCallback: (result) => { this.ssoLoginSuccess(result) },
        failureCallback: (error) => { this.ssoLoginFailure(error) }
    };

    microsoftTeams.authentication.getAuthToken(authTokenRequestOptions);
    }




    return (
        <div>

            <h2>Hello</h2>
            
        </div>
        )

}