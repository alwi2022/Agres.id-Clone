"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import NavbarLoginRegisPage from "../components/NavbarLoginRegisPage";
import Swal from "sweetalert2";
import { CustomErrorType } from "../types";
export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw await response.json();

      await response.json();
      window.location.href = "/";

      Swal.fire({
        title: "SUCCESS",
        text: "Succes login",
        icon: "success",
      });
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
    <>
      <NavbarLoginRegisPage />
      <div className="min-h-screen bg-gray-100  flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full relative overflow-hidden">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-4">
              Masuk ke Akunmu
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              Belum Punya Akun Agres.id?
              <Link href="/register" className="text-red-600 hover:underline">
                Klik Disini!
              </Link>
            </p>
          </div>

          <form onSubmit={handleLogin} method="POST" className="space-y-6">
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 p-4 pr-12 text-sm shadow-sm focus:ring focus:ring-red-300 focus:outline-none"
                placeholder="Masukkan email Anda"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
              name="password"
                type="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 p-4 pr-12 text-sm shadow-sm focus:ring focus:ring-red-300 focus:outline-none"
                placeholder="Masukkan kata sandi Anda"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>

            <div className="text-right">
              <p className="text-sm text-red-500 hover:underline cursor-pointer">
                Lupa Kata Sandi?
              </p>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="w-40 flex justify-center items-center rounded-md bg-red-600 px-4 py-2 text-white font-medium hover:bg-red-700 focus:ring focus:ring-red-300"
              >
                {loading ? "loading......." : "Masuk"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="bg-white  text-red-500 p-6 text-xl">
        <div className="text-center">
          <p>© 2025 Agres.id. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
