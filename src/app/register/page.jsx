'use client'
import { Input, Label, Button } from "@heroui/react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    
    <div className="flex flex-col items-center justify-center mt-6">
      
      <div className="flex w-full max-w-sm flex-col gap-4 p-6 border rounded-xl shadow-sm bg-white">
        <h2 className="text-2xl font-bold text-center text-green-600">Register</h2>
        
        <div className="flex flex-col gap-1">
          <Label htmlFor="input-type-email">Email</Label>
          <Input id="input-type-email" placeholder="jane@example.com" type="email" />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="input-type-password">Password</Label>
          <Input id="input-type-password" placeholder="password" type="password" />
        </div>

        
        <Button 
          as={Link} 
          href="/login" 
          color="success" 
          className="text-white font-semibold w-full"
        >
          Register Now
        </Button>

        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-green-600 font-bold hover:underline">
            Login
          </Link>
        </p>
      </div>
      
    </div>
  );
}