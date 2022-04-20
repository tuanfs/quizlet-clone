import React, {useState} from "react"
import {GoogleLogin, GoogleLogout} from "react-google-login"
import {FcGoogle} from "react-icons/fc"

export default function TestLoginGoogle() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [url, setUrl] = useState("")
  const [loginStatus, setLoginStatus] = useState(false)

  const responseGoogle = (response) => {
    setName(response.profileObj.name)
    setEmail(response.profileObj.email)
    setUrl(response.profileObj.imageUrl)
    setLoginStatus(true)
  }
  const logout = () => {
    setLoginStatus(false)
  }
  return (
    <div className="mt-[200px]">
      <h1>Login with Google</h1>
      {!loginStatus && (
        <GoogleLogin
          clientId="1018708884492-cn93pakvsi2v5pbq6fcdlosb8lu17rjb.apps.googleusercontent.com"
          buttonText="Login"
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              className="flex relative py-3 cursor-pointer items-center border-[#e4e7eb] border-[2px] rounded-[4px] lg:col-span-6 col-span-12 justify-center"
            >
              <FcGoogle className="text-3xl absolute left-[20px] lg:relative lg:left-0" />
              <span className="lg:text-sm text-base font-semibold lg:font-medium text-[#303545] ml-4">
                Tiếp tục với Google
              </span>
            </button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
      {loginStatus && (
        <div>
          <h2>Email: {email}</h2>
          <img src={url} alt={"name"} />
          <br />
          <GoogleLogout
            clientId="1018708884492-cn93pakvsi2v5pbq6fcdlosb8lu17rjb.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          />
        </div>
      )}
    </div>
  )
}
