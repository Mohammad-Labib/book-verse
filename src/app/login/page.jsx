"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function LoginPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

     const { data, error } = await authClient.login.email({
        email,
        password,
      });
    }
  return (
    <div className="flex justify-center mt-6 items-center bg-base-100">
      <Form
        className="flex w-96 flex-col gap-4 p-6 border rounded-xl shadow-md"
        onSubmit={onSubmit}
      >
        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          minLength={4}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 4) {
              return "Password must be at least 4 digits";
            }

            if (!/^[0-9]+$/.test(value)) {
              return "Password must contain only numbers (0-9)";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter numeric password" />
          <Description>
            Only numbers allowed (minimum 4 digits)
          </Description>
          <FieldError />
        </TextField>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}