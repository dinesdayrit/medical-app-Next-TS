"use client"
import { type RegisterInputProps } from "@/types/type";
import Link from "next/link";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";

export default function SignupForm() {
  const [isLoading, setIsLoading] =useState(false);
  const { register, handleSubmit, watch, formState:{ errors } } = useForm<RegisterInputProps>()

  const password = watch("password");

  async function onSubmit(data: RegisterInputProps) {
    setIsLoading(true);
    setTimeout(async () => {
      console.log(data);
      setIsLoading(false);
    }, 3000);
  }

  return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create new Account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#" method="POST">
              <div>
                  <TextInput label="Name" register={register} name="name" required="Name is required" errors={errors} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    {...register("email", { 
                      required: "Email is required", 
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address"
                      }
                    })}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    {...register("password", { 
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters"
                      }
                    })}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.password && (
                    <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    {...register("confirmPassword", { 
                      required: "Please confirm your password",
                      validate: value => value === password || "Passwords do not match"
                    })}
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-600 mt-1">{errors.confirmPassword.message}</p>
                  )}
                </div>
              </div>
  
              <div>
                  <SubmitButton title="Sign up" isLoading={isLoading} loadingTitle="Signing up"/>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link href="login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </>
    )
}
