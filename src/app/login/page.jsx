"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";

export default function LoginPage() {
    // const onSubmit = async (e) =>{
    //     e.preventDefault();

    //     const email = e.target.email.value;
    //     const password = e.target.password.value;

    //     const {data, error} = await authClient.signUp.email({
    //         email,
    //         password,

    //     })
    //     console.log({data, error});
    //     };

    

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    
    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });
console.log({data, error});
    if (error) {
      alert(error.message || "Login failed");
      setLoading(false);
    } else {
     
      router.push("/home");
    }
  };

  return (
    <div className="flex justify-center mt-6 items-center bg-base-100">
      <Form
        className="flex w-96 flex-col gap-4 p-6 border rounded-xl shadow-md"
        onSubmit={onSubmit}
      >
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={4}
          name="password"
          type="password"
       
          validate={(value) => {
            if (value.length < 4) {
              return "Password must be at least 4 characters";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Minimum 4 characters required
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            Login
          </Button>
         
        </div>

        <div>
          <h1>Not regitered create account
            <span className="text-blue-400">
             <Link href="/register" className="text-blue-500 font-semibold hover:underline">
          Register here
        </Link>
            </span>
          </h1>
        </div>
      </Form>
    </div>
  );
}