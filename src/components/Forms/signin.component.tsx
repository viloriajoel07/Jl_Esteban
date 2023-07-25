import React, { FC, useState } from "react";
import { Input, Button, Modal } from "~components";
import { Icon } from "@iconify/react";

interface SignInProps {
  mode?: any;
  buttonSubmitText?: string;
}

const SignIn: FC<SignInProps> = ({ mode, buttonSubmitText }) => {
  const [secretInput, setSecretInput] = useState(true);
  const [modalSignUp, setModalSignUp] = useState(false);

  const handleModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalSignUp(!modalSignUp);
  };

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
          icon={secretInput ? "fe:eye" : "mdi:eye-off"}
          event={() => setSecretInput(!secretInput)}
        />
        <div className="flex gap-4 flex-col md:flex-row ">
          {!mode === true && (
            <Button
              mode="fill"
              className="!from-white !to-white !text-black"
              onClick={handleModal}
            >
              Cambiar metodo
            </Button>
          )}
          <Button mode="fill">{buttonSubmitText}</Button>
        </div>
      </div>

      <Modal open={modalSignUp}>
        <div className="bg-black w-[32rem] rounded-xl flex flex-col justify-center items-center px-16 py-12 relative shadow-2xl">
          <button
            className="absolute right-6 top-6 hover:scale-110 transition-all"
            onClick={handleModal}
          >
            <Icon
              icon="heroicons:x-mark-20-solid"
              width={24}
              className="text-white"
            />
          </button>
          <h2 className="text-white text-5xl zeyada-font">Registrarme con :</h2>

          <div className="w-full pt-6 flex flex-col gap-y-4">
            <a
              href="#"
              className="bg-zinc-900/30 border border-gray-600 px-6 py-3 rounded-lg flex justify-center items-center text-lg gap-x-4 hover:scale-105 transition-all"
            >
              <Icon icon="flat-color-icons:google" width={28} />
              <span className="text-white">Google</span>
            </a>
            <a
              href="#"
              className="bg-zinc-900/30 border border-gray-600 px-6 py-3 rounded-lg flex justify-center items-center text-lg gap-x-4 hover:scale-105 transition-all"
            >
              <Icon
                icon="mingcute:apple-line"
                width={28}
                className="text-white"
              />
              <span className="text-white">Apple</span>
            </a>
            <a
              href="#"
              className="bg-zinc-900/30 border border-gray-600 px-6 py-3 rounded-lg flex justify-center items-center text-lg gap-x-4 hover:scale-105 transition-all"
            >
              <Icon icon="logos:facebook" width={28} />
              <span className="text-white">Facebook</span>
            </a>
          </div>
        </div>
      </Modal>
    </form>
  );
};

export default SignIn;
