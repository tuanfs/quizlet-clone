import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as Yup from "yup"
import {AiOutlineCheck, AiOutlineQuestionCircle} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {GrFacebookOption} from "react-icons/gr"
import {registerUser} from "../../features/authSlice"
import {useDispatch, useSelector} from "react-redux"
import {BsFillEyeSlashFill} from "react-icons/bs"
import {GoogleLogin} from "react-google-login"
import {getLoadingAuth} from "../../features/authSlice"
import LoadingBtn from "../../components/commonsComponents/LoadingBtn"

export default function RegisterModal({onTabAuth}) {
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [messageEmail, setMessageEmail] = useState("")
  const [statusRegister, setStatusRegister] = useState("pending")
  const [showPassword, setShowPassword] = useState(false)
  const loading = useSelector(getLoadingAuth)

  const dispatch = useDispatch()

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Bạn thiếu mật khẩu")
      .min(8, "Mật khẩu phải chưa tối thiểu 8 ký tự"),
    username: Yup.string()
      .required("Bạn thiếu tên tài khoản")
      .min(3, "Mật khẩu phải chưa tối thiểu 3 ký tự"),
    day: Yup.number().min(0),
    month: Yup.number().min(0),
    year: Yup.number().min(1950),
    email: Yup.string()
      .required("Bạn thiếu email")
      .email("Vui lòng nhập đúng email của bạn"),
    checkboxPolicy: Yup.boolean().oneOf(
      [true],
      "Vui lòng đồng ý với điều khoản của chúng tôi",
    ),
  })

  const formOptions = {resolver: yupResolver(validationSchema)}
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm(formOptions)

  const onSubmit = async (data) => {
    const birthday = new Date().getTime(data.year, data.month, data.day)
    await dispatch(
      registerUser({
        checkboxPolicy: data.checkboxPolicy,
        email: data.email,
        password: data.password,
        fullName: data.username,
        birthday,
      }),
    ).then((res) => {
      if (res.payload) {
        if (res.payload.status) {
          setStatusRegister("success")
          onTabAuth("login")
        }
      } else {
        setStatusRegister("failed")
      }
    })
  }
  const handleOnBlurEmail = (e) => {
    e.preventDefault()
    const email = e.target.value
    if (email === "") {
      setMessageEmail("")
      return
    }
    const emailRegex =
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
    const valid = emailRegex.test(email)
    if (valid) {
      setMessageEmail("")
    } else {
      setMessageEmail("Vui lòng nhập đúng email của bạn")
    }
  }

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const responseGoogle = (response) => {
    setName(response.profileObj.name)
    setEmail(response.profileObj.email)
    //  setUrl(response.profileObj.imageUrl)
    //  setLoginStatus(true)
  }

  useEffect(() => {
    let timer = null
    if (statusRegister === "failed" || statusRegister === "success") {
      timer = setTimeout(() => setStatusRegister("pending"), 3000)
    }
    return () => clearTimeout(timer)
  }, [statusRegister])

  return (
    <>
      <div className="grid grid-cols-12 gap-5 mt-[60px]">
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
        <div className="flex relative cursor-pointer py-3 items-center border-[#e4e7eb] border-[2px] rounded-[4px] lg:col-span-6 col-span-12 justify-center">
          <span className="inline-block bg-[#3c5897] absolute left-[20px] lg:relative lg:left-0 pt-1 pl-1 rounded-[2px]">
            <GrFacebookOption className="text-white" />
          </span>
          <span className="lg:text-sm text-base font-semibold lg:font-medium text-[#303545] ml-4">
            Tiếp tục với Facebook
          </span>
        </div>
        <div className="relative col-span-12 flex justify-center ">
          <span className="border-b-[2px] mt-2 border-[#e4e7eb] block w-full h-full"></span>
          <span className="absolute top-[-2px] inline-block py-2 px-4 bg-white text-[#929cb4] text-sm uppercase font-medium">
            Hoặc email
          </span>
        </div>
      </div>
      <div className="mt-10 pb-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="font-semibold text-sm mb-4 block text-[#9aa3ba]">
              Vui lòng nhập ngày sinh
            </label>
            <div>
              <div className="flex items-center">
                <div
                  className={`text-[#3ccfcf] group mr-6 relative w-[80px] pr-5 py-2 pl-2 border-[2px] rounded-[4px] max-w-full overflow-hidden ${
                    errors.day ? "border-[#ff725b]" : "border-[#303545] "
                  }`}
                >
                  <select
                    className="border-none cursor-pointer hover:text-[#fede1b] font-semibold w-[200px] block text-sm outline-none"
                    {...register("day", {required: true})}
                  >
                    <option value="-1">Ngày</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                  <span className="absolute group-hover:text-[#fede1b] right-[8px] top-[8px]">
                    <AiOutlineCheck />
                  </span>
                </div>
                <div
                  className={`text-[#3ccfcf] group mr-6 relative max-w-[120px] pr-5 py-2 pl-2 border-[2px] rounded-[4px] overflow-hidden ${
                    errors.month ? "border-[#ff725b]" : "border-[#303545] "
                  }`}
                >
                  <select
                    {...register("month", {required: true})}
                    className="border-none cursor-pointer hover:text-[#fede1b] font-semibold w-[200px] block text-sm outline-none"
                  >
                    <option value="-1">Tháng</option>
                    <option value="1">Tháng 1</option>
                    <option value="2">Tháng 2</option>
                    <option value="3">Tháng 3</option>
                    <option value="4">Tháng 4</option>
                    <option value="5">Tháng 5</option>
                    <option value="6">Tháng 6</option>
                    <option value="7">Tháng 7</option>
                    <option value="1">Tháng 8</option>
                    <option value="2">Tháng 9</option>
                    <option value="3">Tháng 10</option>
                    <option value="4">Tháng 11</option>
                    <option value="5">Tháng 12</option>
                  </select>
                  <span className="absolute group-hover:text-[#fede1b] right-[8px] top-[8px]">
                    <AiOutlineCheck />
                  </span>
                </div>
                <div
                  className={`text-[#3ccfcf] group mr-6 relative w-[80px] pr-5 py-2 pl-2 border-[2px] rounded-[4px] max-w-full overflow-hidden ${
                    errors.year ? "border-[#ff725b]" : "border-[#303545] "
                  }`}
                >
                  <select
                    {...register("year", {required: true})}
                    className="border-none cursor-pointer hover:text-[#fede1b] font-semibold w-[200px] block text-sm outline-none"
                  >
                    <option value="-1">Năm</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                  </select>
                  <span className="absolute group-hover:text-[#fede1b] right-[8px] top-[8px]">
                    <AiOutlineCheck />
                  </span>
                </div>

                <div className="relative group block md:hidden lg:block">
                  <div className="h-[30px] mr-4 cursor-pointer w-[30px] flex items-center justify-center rounded-full bg-white hover:bg-[#eceff4]">
                    <AiOutlineQuestionCircle />
                  </div>
                  <div className="absolute group-hover:block hidden left-[100%] top-[-200%] min-w-[200px] p-2 bg-[#303545] rounded-[6px] text-white">
                    <p>
                      Quizlet dành cho mọi lứa tuổi nhưng người dùng buộc phải
                      cung cấp ngày sinh thật để tuân thủ luật lệ quốc gia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-6">
            <label
              className={`block mb-2 text-base font-medium ${
                messageEmail ? "text-[#ff725b]" : "text-[#929cb4]"
              }`}
            >
              {errors.email?.message || messageEmail || "Email"}
            </label>
            <input
              className={`${
                messageEmail
                  ? "border-[#ff725b]"
                  : "border-[#303545] focus:border-[#ffcd1f]"
              } p-3 placeholder:text-[#d9dde8] text-textColor w-full  
                outline-none bg-transparent text-base border-[1px] rounded-[4px]`}
              type="text"
              name="email"
              {...register("email", {required: true})}
              placeholder="user@quizlet.com"
              onBlur={handleOnBlurEmail}
            />
          </div>
          <div className="my-6">
            <label
              className={`block mb-2 text-base font-medium ${
                errors.username ? "text-[#ff725b]" : "text-[#929cb4]"
              }`}
            >
              {errors.username ? errors.username?.message : "Tên người dùng"}
            </label>
            <input
              className={`${
                errors.username
                  ? "border-[#ff725b]"
                  : "border-[#303545] focus:border-[#ffcd1f]"
              } p-3 placeholder:text-[#d9dde8] text-textColor w-full  
                outline-none bg-transparent text-base border-[1px] rounded-[4px]`}
              type="text"
              name="username"
              {...register("username", {required: true})}
              placeholder="andrew123"
            />
          </div>
          <div className="my-6">
            <label
              className={`block mb-2 text-base font-medium ${
                errors.password ? "text-[#ff725b]" : "text-[#929cb4]"
              }`}
            >
              {errors.password ? errors.password?.message : "Password"}
            </label>
            <div className="relative">
              <input
                className={`${
                  errors.password
                    ? "border-[#ff725b]"
                    : "border-[#303545] focus:border-[#ffcd1f]"
                } p-3 placeholder:text-[#d9dde8] text-textColor w-full 
               outline-none bg-transparent text-base border-[1px] rounded-[4px]`}
                type={showPassword ? "text" : "password"}
                name="password"
                {...register("password", {required: true})}
                placeholder="●●●●●●●●"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-[8px] text-xl"
              >
                <BsFillEyeSlashFill />
              </span>
            </div>
          </div>
          <div>
            <label
              htmlFor="checkboxPolicy"
              className="text-base text-[#5f636f] font-normal"
            >
              <input
                type="checkbox"
                id="checkboxPolicy"
                name="checkboxPolicy"
                {...register("checkboxPolicy", {required: true})}
                className="hidden"
                onClick={() => setCheckboxValue(!checkboxValue)}
              />
              <span
                className={`border-[#939bb4] border-[2px] inline-block w-[18px] cursor-pointer h-[18px] mr-4 relative after:content-[""] after:border-[2px] after:top-[10%] after:left-[20%] 
                after:absolute after:border-l-[0px] after:border-b-[0px] after:border-[#939bb4]
                 after:rotate-[135deg] after:h-[60%] after:w-[50%] ${
                   checkboxValue
                     ? "border-[#ffcd1f] after:border-[#ffcd1f] after:block"
                     : "after:hidden"
                 }`}
              ></span>
              <span>
                Tôi chấp thuận{" "}
                <Link className="text-[#3ccfcf] hover:text-[#ffcd1f]" to="/">
                  Điều khoản dịch vụ
                </Link>{" "}
                và{" "}
                <Link className="text-[#3ccfcf] hover:text-[#ffcd1f]" to="/">
                  Chính sách quyền riêng tu
                </Link>{" "}
                của Quizlet
              </span>
            </label>
          </div>
          <div>
            <p
              className={`mt-2 text-[red] ${
                statusRegister === "failed" ? "" : "hidden"
              }`}
            >
              Tài khoản đã tồn tại vui lòng thử lại
            </p>
            <button
              disabled={loading}
              className="bg-[#48d1d1] rounded-[4px] w-full my-6 text-white text-center py-4"
            >
              {loading ? (
                <div className="flex justify-center">
                  <LoadingBtn width="25px" height="25px"></LoadingBtn>
                </div>
              ) : (
                "Đăng ký"
              )}
            </button>
          </div>
        </form>
        <div className="border-[2px] text-[#64708f] border-[#d9dde8] rounded-[4px] text-center py-2">
          <span>
            Bạn đã có tài khoản rồi à?{" "}
            <button
              onClick={onSubmit}
              className="text-[#48d1d1] ml-1 hover:text-[#ffcd1f]"
            >
              Đăng nhập
            </button>
          </span>
        </div>
      </div>
    </>
  )
}
