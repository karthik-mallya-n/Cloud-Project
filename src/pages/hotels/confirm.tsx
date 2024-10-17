"use client";
import React, { useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "~/utils/cn";
import Link from "next/link";


export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
   

  return (
    <div className="max-w-md w-full mx-auto my-[80px] rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-[#003580]">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
       Confirm your Booking
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
       Fill in the following details
        
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" required/>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" required/>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" required/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="room">Number of rooms</Label>
          <Input id="room" placeholder="Room" type="number" required/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="room">Number of guests</Label>
          <Input id="guest" placeholder="Guests" type="number" required/>
        </LabelInputContainer>
       <div className="flex">
       <LabelInputContainer className="mb-4 w-1/2">
          <Label htmlFor="in">Check-in Date</Label>
          <Input id="checkin" placeholder="Check-in" type="date" required/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4 w-1/2">
          <Label htmlFor="out">Check-out Date</Label>
          <Input id="checkout" placeholder="Check-out" type="date" required/>
        </LabelInputContainer>
       </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Phone" type="tel" required/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="add">Address</Label>
          <Input id="address"  className="h-[100px]" type="text" required/>
        </LabelInputContainer>
        <div className="flex">
        <LabelInputContainer className="mb-4 w-1/2">
          <Label htmlFor="add">City</Label>
          <Input id="city" type="text" required/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4 w-1/2">
          <Label htmlFor="add">State</Label>
          <Input id="state" type="text" required/>
        </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="add">Country</Label>
          <Input id="country" type="text" required/>
        </LabelInputContainer>
       
        
        
        <Link href={`/hotels/success`}>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
         Confirm &rarr;
          <BottomGradient />
        </button>
        </Link>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

       
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
