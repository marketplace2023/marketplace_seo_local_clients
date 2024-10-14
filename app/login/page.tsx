"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
// Importar íconos de react-icons
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // lógica de inicio de sesión
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center bg-white">
      {/* Sección de imagen */}
      <div className="hidden sm:block w-full sm:w-1/2 white p-8">
        <img
          src="/assets/logo.jpg"
          alt="Login Illustration"
          className="w-full h-auto"
        />
      </div>

      {/* Sección del formulario */}
      <div className="w-full sm:w-1/2 bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold mb-4">Login In</h1>
        <p className="text-gray-600 mb-6">
          "Please sign in to your account and enjoy our services."
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" id="remember-me" className="mr-2" />
              <Label htmlFor="remember-me">Remember Me</Label>
            </div>
            <a href="#" className="text-sm text-lime-600">
              Forgot Password?
            </a>
          </div>
          <Link href="/">
            <Button type="submit" className="w-full text-white">
              SIGN IN
            </Button>
          </Link>
        </form>

        <div className="flex justify-center space-x-3 mt-6">
          <span>or</span>
        </div>

        {/* Íconos de Google, GitHub y LinkedIn */}
        <div className="flex justify-center space-x-3 mt-6">
          <button className="text-2xl">
            <FcGoogle />
          </button>
          <button className="text-2xl text-blue-600">
            <FaGithub />
          </button>
          <button className="text-2xl text-blue-600">
            <FaLinkedin />
          </button>
        </div>

        <p className="mt-4 text-center">
          New on our platform?{" "}
          <Link href="/register">
            <p className="text-lime-600">Create an account</p>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
