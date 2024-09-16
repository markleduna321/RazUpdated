import React from 'react'
import InputLabelComponent from "@/app/components/input-label-component";
import InputTextComponent from "@/app/components/input-text-component";

export default function LoginFormSection() {
  return (
    
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
            
        <div>
            <InputLabelComponent htmlFor="email" labelText="Email address" />
            <InputTextComponent
                id="emial"
                name="email"
                type="email"
                required
                autoComplete="email"
                />
        </div>

        <div>
            <InputLabelComponent htmlFor="password" labelText="Password" />
            <InputTextComponent
                id="password"
                name="password"
                type="password"
                required
                autoComplete="password"
                />
        </div>

        <div>
            <a href="/dashboard" >
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Sign in
            </button>
            </a>
        </div>

    </div>

  )
}
