import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const benefits = [
    {
      id: 0,
      title: "Easy integration",
      para: "Effortlessly integrate Tradeify with your existing systems and applications, streamlining your workflow and saving you time.",
    },
    {
      id: 1,
      title: "Scalable solution",
      para: "Whether you're a small startup or a large enterprise, Tradeify can scale to meet your needs, ensuring you have the tools to grow and succeed.",
    },
    {
      id: 2,
      title: "Real-time insights",
      para: "Get real-time insights into your sales, customer behavior, and performance metrics, so you can make data-driven decisions and improve your bottom line.",
    },
  ];
  const [showPassword, setShowPassword] = useState();

  /******************/
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  // const {} = useContext(GeneralDataContext);
  // /******************/
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send a request to your server to log the user in
    const response = await fetch("", {
      method: "POST",
      body: JSON.stringify({ phoneNumber, password }),
      headers: { "Content-Type": "application/json" },
    });
    // Handle the response from the server
    if (response.ok) {
      // Get the JWT from the response
      const { token } = await response.json();
      // Save the JWT in local storage
      localStorage.setItem("jwt", token);
      // Redirect the user to the dash page
      window.location.href = "/dash";
    } else {
      // Show an error message
      alert("Error logging in");
    }
  };
  /******************/
  useEffect(() => {
    document.title = "tradeify : Login";
  }, []);

  return (
    <div>
      <div className="bg-image p-0 m-0 h-[100vh] w-[100%] flex flex-col lg:flex-row justify-center lg:justify-around  2xl:justify-center 2xl:gap-36  overflow-hidden">
        {/* about */}
        <div className=" hidden lg:flex justify-center items-center ">
          <div className="flex flex-row justify-between items-center lg:max-w-md xl:max-w-lg 2xl:max-w-screen-sm ">
            <div className="text-slate-300  select-none">
              <h1 className="lg:text-4xl xl:text-5xl 2xl:text-7xl google-old select-none mb-12">
                tradeify
              </h1>
              {benefits.map((item) => {
                return (
                  <div className="my-4" key={item.id}>
                    <div className="lg:text-xl xl:text-2xl 2xl:text-3xl roboto flex flex-row gap-4 self-center">
                      <div>
                        <i className="bx bx-check text-blue-600 text-4xl "></i>
                      </div>
                      <div className=" flex self-center">{item.title}</div>
                    </div>
                    <div className="ml-[3.35rem] mt-2  sm:text-base lg:text-base xl:text-lg text-slate-400">
                      {item.para}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* tag */}
        <div className="text-slate-300 lg:hidden text-center ">
          <h1 className="text-5xl sm:text-5xl md:text-5xl  google-old select-none mb-12">
            tradeify
          </h1>
        </div>
        {/* form */}

        <div className="mx-4 sm:flex sm:self-center ">
          {/* px-24 py-52 */}
          <div className=" max-w-sm mx-auto  sm:max-w-max  rounded-3xl lg:ml-auto p-4 sm:px-16 sm:py-6 md:px-16 md:py-6 lg:px-14 lg:py-6 xl:px-20 xl:py-10 2xl:px-28 2xl:py-16  bg-slate-200 ">
            <div>
              <div className="roboto text-2xl pb-2 sm:text-3xl sm:pb-4 lg:text-3xl lg:pb-4  xl:text-4xl 2xl:text-5xl text-center xl:pb-6 2xl:pb-8 text-slate-800">
                Login
              </div>
              <div className="text-center text-slate-800 md:text-md lg:text-lg xl:text-xl roboto pb-12">
                E-commerce at its finest.
              </div>
            </div>

            <form className="roboto" onSubmit={handleSubmit}>
              {/* phone */}
              <div className="mb-12">
                <div className="relative z-0">
                  <input
                    type="number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    name="phone"
                    id="phone"
                    className="block py-2.5 px-0 w-full text-sm sm:text-base lg:text-base xl:text-lg bg-transparent border-0 border-b-2 appearance-none text-slate-800 border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="absolute text-sm sm:text-base lg:text-base xl:text-lg text-slate-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone <span className="text-red-600">*</span>
                  </label>
                </div>
              </div>
              {/*  */}
              <div className="mb-12">
                <div className="relative z-0">
                  <input
                    type={!showPassword ? "password" : "text"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    id="password"
                    className="block py-2.5 px-0 w-full text-sm  sm:text-base lg:text-base xl:text-lg bg-transparent border-0 border-b-2 appearance-none text-slate-800 border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-sm sm:text-base lg:text-base xl:text-lg text-slate-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password <span className="text-red-600">*</span>
                  </label>
                </div>
              </div>
              <div className="mb-12">
                <div className="flex items-center">
                  <input
                    onClick={() => {
                      setShowPassword((prev) => !prev);
                    }}
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label
                    htmlFor="link-checkbox"
                    className="ml-2 text-sm sm:text-base lg:text-base xl:text-lg font-medium text-slate-800 dark:text-gray-300 select-none"
                  >
                    Show Password
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="text-slate-300 text-sm sm:text-base lg:text-base xl:text-lg bg-blue-700 duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold roboto rounded-lg hover:rounded-2xl  w-full py-2.5 text-center"
              >
                Login
              </button>

              <div className="text-center mt-8 text-xs md:text-sm lg:text-sm xl:text-base text-slate-800">
                Already have an account?
                <Link to={"/register"}>
                  <span className="underline px-2 text-blue-600 cursor-pointer">
                    register
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
{
  /* <form onSubmit={handleSubmit}>
  <label>
    Phone Number:
    <input
      type="text"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
    />
  </label>
  <label>
    Password:
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </label>
  <button type="submit">Login</button>
</form>; */
}
