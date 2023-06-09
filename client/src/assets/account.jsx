import React, { createContext} from 'react'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import Pool from "../UserPool"

const AccountContext = createContext()

const Account = () => {
  const authenticate = async (Username, Password) =>{
    const user = new CognitoUser({ Username, Pool })

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    })

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess: ", data)
      },
      onFailure: (err) => {
        console.error("onFailure: ", err)
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data)
      },
    })
  }
  return(
    <AccountContext.Provider>

    </AccountContext.Provider>
  )
}

export default Account 