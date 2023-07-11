import React, { FC, useState } from "react";
import { Input, Button } from "~components";

interface SignInProps {
  mode?: any;
  buttonSubmitText?: string;
}

const SignIn: FC<SignInProps> = ({ mode, buttonSubmitText }) => {
  const [secretInput, setSecretInput] = useState(true);
  return (
    <form className="w-full pb-8">
      <div className="flex flex-col gap-4">
        {!mode && (
          <div className="flex flex-col md:flex-row w-full gap-4">
            <Input
              label="Firs name"
              placeholder="Jhon"
              icon="heroicons:identification-20-solid"
            />
            <Input
              label="Last name"
              placeholder="Doe"
              icon="heroicons:identification-20-solid"
            />
          </div>
        )}
        <Input label="Email" placeholder="Jhon@Doe.com" icon="ic:round-email" />
        <Input
          label="Password"
          type={secretInput ? "password" : "text"}
          placeholder="••••••••"
          icon="fe:eye"
          event={() => setSecretInput(!secretInput)}
        />
        <div className="flex gap-x-4">
          {!mode === true && <Button mode="outline">Change Method</Button>}
          <Button mode="fill">{buttonSubmitText}</Button>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
