"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
// Importar íconos de react-icons
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const RegisterPage = () => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // lógica de registro
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    console.log({ companyName, email, password });
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center bg-white">
      {/* Sección de imagen */}
      <div className="hidden sm:block w-full sm:w-1/2 white p-8">
        <img
          src="/assets/logo.jpg"
          alt="Register Illustration"
          className="w-full h-auto"
        />
      </div>

      {/* Sección del formulario */}
      <div className="w-full sm:w-1/2 bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <p className="text-gray-600 mb-6">
          "Create an account and enjoy our services."
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <Label htmlFor="company-name">Company Name</Label>
            <Input
              id="company-name"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>

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

          <div>
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full text-white">
            SIGN UP
          </Button>
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
          Already have an account?{" "}
          <a href="#" className="text-lime-600">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
