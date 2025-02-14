"use client";

import { useState } from "react";
import Link from "next/link";
import NavbarLoginRegisPage from "../components/NavbarLoginRegisPage";
import Swal from "sweetalert2";
import { CustomErrorType } from "../types";

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const body = {
      name,
      username,
      email,
      password,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/register`,
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) throw await response.json();
      await response.json();
      window.location.href = "/login";
    } catch (error) {
      console.log(error);

      Swal.fire({
        title: "Error",
        text: (error as CustomErrorType).message,
        icon: "error",
      });
    }
  };

  return (
    <div>
      <NavbarLoginRegisPage />
      <div className="min-h-screen bg-gray-50">
        <section className="relative flex flex-wrap lg:h-screen lg:items-center justify-center">
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">
                Daftar Sekarang!
              </h1>

              <Link href={"/login"} className="mt-4 text-gray-500">
                Sudah Punya Akun Agres.ID?
                <span className="text-red-600">Klik Disini!</span>
              </Link>
            </div>

            <form
              onSubmit={handleRegister}
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Sudah punya akun?
                  <Link href="/login" className="underline">
                    Masuk
                  </Link>
                </p>

                <button
                  type="submit"
                  className="inline-block rounded-lg px-5 py-3 text-sm font-medium text-white"
                  style={{ backgroundColor: "#EC1C24" }}
                >
                  Daftar
                </button>
              </div>
            </form>
          </div>

          <div className="relative h-72 w-96">
            <img
              alt="Register Illustration"
              src="https://www.agres.id/assets/images/image-register.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </section>
      </div>

      <footer className="bg-white text-red-500 p-6 text-xl">
        <div className="text-center">
          <p>© 2025 Agres.id. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
