"use client";
import React, { useState } from "react";
import "./registration.css";
import Link from "next/link";

const Registration = () => {
  const [passValue, setPassValue] = useState({
    password: "",
    showPassword: false,
  });
  const handlePasswordChange = (prop) => (event) => {
    setPassValue({ ...passValue, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPassValue({ ...passValue, showPassword: !passValue.showPassword });
  };

  return (
    <>
      <div className="bg-[#F6F5F7] border-2">
        <section class="max-w-4xl px-5 pt-6 mx-auto rounded-md shadow-md bg-[#FFFFFF] mt-3">
          <div class="text-center pb-3">
            <h2 class="text-4xl font-bold text-[#2c293b]  GT">Registration</h2>
          </div>
          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:px-5">
              <div>
                <label
                  class="text-[#000b] md:text-[14px] font-bold  md:ps-2 IN"
                  for="username"
                >
                  Full Name
                </label>
                <input
                  id="username"
                  type="text"
                  class="input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none mt-2"
                />
              </div>

              <div>
                <label
                  class="text-[#000b] md:text-[14px] font-bold  md:ps-2 IN"
                  for="phone"
                >
                  Student Roll
                </label>
                <input
                  id="roll"
                  placeholder="Ex: 574206"
                  type="number"
                  class="input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none mt-2"
                />
              </div>

              <div>
                <label
                  class="text-[#000b] md:text-[14px] font-bold  md:ps-2 IN"
                  for="phone"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  placeholder="Ex: 017xxxxxxxx"
                  type="phone"
                  class="input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none mt-2"
                />
              </div>

              <div>
                <label
                  class="text-[#000b] md:text-[14px] font-bold  md:ps-2 IN"
                  for="passwordConfirmation"
                >
                  Gander
                </label>
                <select class="input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none mt-2">
                  <option className="bg-[#E8F0FE]">Gender</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Others</option>
                </select>
              </div>

              <div>
                <label
                  class="text-[#000b] md:text-[14px] font-bold  md:ps-2 IN"
                  for="emailAddress"
                >
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  class="input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none mt-2"
                />
              </div>

              <div className="password_2 block  relative">
                <label class="text-[#000b] md:text-[14px] font-bold  md:ps-2 IN">
                  Password
                </label>
                <div className="eye_div">
                  <input
                    className="input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none mt-2"
                    type={passValue.showPassword ? "text" : "password"}
                    onChange={handlePasswordChange("password")}
                    value={passValue.password}
                  />

                  <div
                    className="icon_button absolute right-4 top-12 cursor-pointer"
                    onClick={handleClickShowPassword}
                  >
                    {passValue.showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="18"
                        viewBox="0 0 576 512"
                      >
                        <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="20"
                        viewBox="0 0 640 512"
                      >
                        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              {/* ----- user image uplode--- */}
              {/* <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  user Image
                </label>

                <div class="flex items-center justify-center w-full">
                  <label class="relative flex flex-col rounded-lg border-4 border-dashed w-full h-[20vh] p-10 group text-center">
                    <div class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <div class="flex flex-auto justify-center max-h-48 w-2/5 mx-auto -mt-10">
                        <img
                          class=" h-[60px] object-center flex justify-center"
                          src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                          alt="freepik image"
                        />
                      </div>
                      <p class="pointer-none text-gray-500 ">
                        <span class="text-sm">Drag and drop</span> files here{" "}
                        <br /> or{" "}
                        <a href="" id="" class="text-blue-600 hover:underline">
                          select of images file
                        </a>{" "}
                        png,jpg,types from your computer
                      </p>
                    </div>
                    <input type="file" class="hidden" />
                  </label>
                </div>
              </div> */}
            </div>

            <div className="flex justify-between md:px-5">
              <div className="remember_me flex items-center mt-3">
                <input
                  type="checkbox"
                  id="rememberMe"
                  //   checked={loginData.rememberMe}
                  //   onChange={handleRememberMeChange}
                  className="mr-2"
                />
                <label htmlFor="rememberMe" className="text-gray-500">
                  Remember Me
                </label>
              </div>
              <p className="pt-3 text-end text-[14px] hover:text-[#982121] cursor-pointer underline">
                Forgot your password?
              </p>
            </div>

            <div class="md:ps-5">
              <h2 class="mt-4 text-[14px]  text-[#000] ">
                By creating an account, you agree to Mrfriends.org’s{" "}
                <span className="text-[#BF1F49] px-1 underline">
                  Privacy Notice
                </span>
                and{" "}
                <span className="text-[#BF1F49] px-1 underline">
                  {" "}
                  Terms of Use.
                </span>
                or
                <br />
                <Link href={"/login"}>
                  <span className="text-[#481D65]  cursor-pointer underline">
                    Login as Existing Student{" "}
                  </span>
                </Link>
              </h2>
            </div>
            <div class="flex justify-center mt-2">
              <button
                type="submit"
                class="my-5 px-12 justify-center bg-[#BF1F49] text-gray-100 py-3  rounded-md tracking-wide
                 font-semibold  focus:outline-none focus:shadow-outline hover:bg-[#bf1f4ad3] shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Create
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Registration;
