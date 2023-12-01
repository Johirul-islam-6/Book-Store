"use client";

import Link from "next/link";
import React, { useState } from "react";
import Card from "./Card";
// import Header from "./Header";
import Drawer from "./Drawer";
import Button from "./Button";
import "./Navbar.css";
import "./Responsive.css";
import Image from "next/image";
import logo from "../../../app/Assets/Navbar/logo.svg";
import store from "../../../app/Assets/Navbar/store.svg";
import profile from "../../../app/Assets/Navbar/profile.svg";

import bangladesh from "../../../app/Assets/Navbar/bangladesh.png";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-[#FFF1E6] py-[12px] top-nav">
        <nav className="flex flex-row justify-between items-center  max-w-screen-xl mx-auto">
          <div className="w-3/12 top-hidden-div"></div>

          <h1 className="top-discount-text ">
            Take Action this Banned Books Week and Get 15% off . Shop here!
          </h1>
          <h1 className="sm-top-discount-text  ">
            Mr.Friends book Store Get 15% off. Shop here!
          </h1>

          <div className="w-3/12 flex justify-end bangladesh-flag">
            <Image
              width={35}
              height={20}
              quality={100}
              className="  "
              src={bangladesh}
              alt=""
            />
          </div>
        </nav>
      </div>
      <div className="navbar py-[5px]">
        <navbar className=" flex items-center justify-between  max-w-screen-xl mx-auto  ">
          {/* <!-- logo --> */}
          <div className="md:w-3/12">
            <Link href="/" className="flex items-center">
              <div className="logo-bg  md:py-[5px] md:px-6">
                <Image
                  src={logo}
                  width={200}
                  height={80}
                  className=""
                  alt="Mr.Friends"
                />
              </div>
              {/* <Image src={logo} className="h-11  mr-1.5" alt="Flowbite Logo" /> */}
            </Link>
          </div>

          {/* <!-- Search bar  --> */}

          <div className="search-bar">
            <SearchBar />
          </div>

          {/* -----------------  profile ---------------> */}
          <div className=" profile-container w-3/12 flex justify-end">
            {/* --- sing In ---- */}
            <ul className="flex items-center">
              <li className="py-4 pe-3  duration-200 cursor-pointer active">
                <Link className="hover-menu color-a-tag profile-image" href="">
                  <Image
                    width={20}
                    height={9}
                    quality={100}
                    className=""
                    src={profile}
                    alt=""
                  />
                </Link>

                <Link className="hover-menu color-a-tag singIN" href="">
                  Sing In
                </Link>
              </li>
              <li className="py-4   duration-200 cursor-pointer active">
                <Link className="hover-menu color-a-tag" href="">
                  <Image
                    width={20}
                    height={9}
                    className=" "
                    src={store}
                    quality={100}
                    alt=""
                  />
                </Link>
              </li>
            </ul>
          </div>
        </navbar>

        {/* ---- Last navbar all link ----- */}
        <nav className="  flex  flex-wrap justify-center items-center  max-w-screen-xl mx-auto">
          <div className="sm-last-navbar">
            <SearchBar />

            <div className="Menubar">
              {/* ------- open & close button ---- */}
              <Button setIsOpen={setIsOpen} isOpen={isOpen} />

              {/* ----- drower container body ------- */}
              <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <Card />
                <Card />
                <Card />
              </Drawer>
            </div>
          </div>
          {/* ------------ 900px down hidden --------- */}
          <ul className="flex items-center Last-navbar-containt">
            <li className="p-4  duration-200 cursor-pointer active">
              <Link className="hover-menu color-a-tag" href="">
                Home
              </Link>
            </li>
            <li className="p-4  duration-200 cursor-pointer">
              <Link className="hover-menu color-a-tag" href="">
                New Story
              </Link>
            </li>
            {/* -----------------diploma engineer-------------- */}
            <div class=" group relative p-4 duration-200 cursor-pointer  ">
              <button class="hover-menu color-a-tag flex items-center">
                <span class="mr-1">Diploma Engineering</span>
                <svg
                  class="fill-current h-4 w-4 -rotate-90 hover:rotate-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>

              <ul class="absolute left-0 z-50 hidden py-5  group-hover:flex dropdown-box border-2">
                <div className="flex gap-x-10 w-[250px] ">
                  <ul className=" px-5">
                    <h1 className="font-[700] ps-3 text-center">
                      Diploma in Engineering
                    </h1>
                    <li class="">
                      <Link
                        class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-center "
                        href=""
                      >
                        1st Semester Book
                      </Link>
                    </li>
                    <hr className="" />
                    <li class="">
                      <Link
                        class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-center"
                        href=""
                      >
                        2nd Semester Book
                      </Link>
                    </li>
                    <hr className="" />
                    <li class="">
                      <Link
                        class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-center"
                        href=""
                      >
                        3rd Semester Book
                      </Link>
                    </li>
                    <hr className="" />
                    <li class="">
                      <Link
                        class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-center"
                        href=""
                      >
                        4th Semester Book
                      </Link>
                    </li>
                    <hr className="" />
                    <li class="">
                      <Link
                        class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-center"
                        href=""
                      >
                        5th Semester Book
                      </Link>
                    </li>
                    <hr className="" />
                    <li class="">
                      <Link
                        class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-center"
                        href=""
                      >
                        6th Semester Book
                      </Link>
                    </li>
                    <hr className="" />
                    <li class="">
                      <Link
                        class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-center"
                        href=""
                      >
                        7th Semester Book
                      </Link>
                    </li>
                    <hr className="" />
                  </ul>
                </div>
              </ul>
            </div>
            {/* -----------------Medical M.B.B.S doctor-------------- */}
            <div class=" group relative p-4 duration-200 cursor-pointer  ">
              <button class="hover-menu color-a-tag flex items-center">
                <span class="mr-1">Medical Books</span>
                <svg
                  class="fill-current h-4 w-4 -rotate-90 hover:rotate-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>

              <ul class="absolute left-0 z-50 hidden py-5  group-hover:flex dropdown-box border-2">
                <div className="flex gap-x-10 w-[200px] ">
                  <ul className=" px-5">
                    <h1 className="font-[700] ps-3 ">MBBS Books</h1>
                    <li class="">
                      <Link
                        class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-center "
                        href=""
                      >
                        1st Year Book
                      </Link>
                    </li>
                    <hr className="" />
                    <li class="">
                      <Link
                        class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-center"
                        href=""
                      >
                        2nd Years Book
                      </Link>
                    </li>
                    <hr className="" />
                    <li class="">
                      <Link
                        class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-center"
                        href=""
                      >
                        3rd Years Book
                      </Link>
                    </li>
                    <hr className="" />
                    <li class="">
                      <Link
                        class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-center"
                        href=""
                      >
                        4th Years Book
                      </Link>
                    </li>
                    <hr className="" />
                    <li class="">
                      <Link
                        class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-center"
                        href=""
                      >
                        5th Years Book
                      </Link>
                    </li>
                    <hr className="" />

                    <hr className="" />
                  </ul>
                </div>
              </ul>
            </div>

            <li className="p-4  duration-200 cursor-pointer">
              <Link className="hover-menu color-a-tag" href="">
                Genaral books
              </Link>
            </li>
            <li className="p-4  duration-200 cursor-pointer">
              <Link className="hover-menu color-a-tag" href="">
                Admission books
              </Link>
            </li>

            <li className="p-4  duration-200 cursor-pointer last-nav-link-hidden block">
              <Link className="hover-menu color-a-tag" href="">
                Islamic book
              </Link>
            </li>
            <li className="p-4  duration-200 cursor-pointer last-nav-link-hidden block">
              <Link className="hover-menu color-a-tag" href="">
                Madrasa books
              </Link>
            </li>

            {/* ---------------- dropdown box books -------- */}
            <div class="last-nav-otheres-link-show group hidden relative p-4 duration-200 cursor-pointer  ">
              <button class="hover-menu color-a-tag flex items-center">
                <span class="mr-1">Otheres books</span>
                <svg
                  class="fill-current h-4 w-4 -rotate-90 hover:rotate-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>

              <ul class="absolute right-0  z-50 hidden  pt-1  group-hover:flex  dropdown-box">
                <div>
                  <li class="">
                    <Link
                      class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-center"
                      href=""
                    >
                      Madrasa books
                    </Link>
                  </li>
                  <hr className="" />
                  <li class="">
                    <Link
                      class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-center"
                      href=""
                    >
                      Islamic books
                    </Link>
                  </li>
                  <hr className="" />
                  <li class="">
                    <Link
                      class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-center"
                      href=""
                    >
                      Admission books
                    </Link>
                  </li>
                  <hr className="" />
                </div>
              </ul>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};
