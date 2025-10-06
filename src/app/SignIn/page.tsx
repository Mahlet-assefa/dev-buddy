"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Github, Mail } from "lucide-react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  // Validate input
  // Send data to backend (e.g., fetch('/api/login', ...))
  // Handle success or error
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <form className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space y-2">
            <h1 className="text-3xl font-bold tracking-lighter">
              welcome back
            </h1>
            <p className="text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  aria-label="Toggle Password Visibility"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
                <p>
                  <a
                    href="#"
                    className="text-sm text-blue-500 hover:underline float-right mt-1"
                  >
                    Forgot Password?
                  </a>
                </p>
              </div>
              <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white" type="submit">
                Sign In
              </Button>
              <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 bg-white px-2 text-muted-foreground text-xs uppercase">
                or continue with
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex justify-center">
              <Button className=" mt-4 bg-white-500 text-black hover:bg-gray-100 border border-gray-300" type="button">
                <Mail className="mr-2 h-2 w-4" />
                Sign in with Google
              </Button>
              <Button className="ml-4 mt-4" variant="outline" type="button">
                <Github className="mr-2 h-2 w-4" />
                Sign in with Github
              </Button>
            </div>
             <p>
              <a
                href="#"
                className="text-sm text-blue-500 hover:underline text-center flex justify-center mt-1"
              >
                Don't have an account? Sign Up
              </a>
            </p>
          </div>
        </div>
        </form>
      </motion.div>
    </div>
  );
}
