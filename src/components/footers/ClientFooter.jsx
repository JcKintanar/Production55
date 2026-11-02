import { useState } from "react";
import SocialMediaIcon from "../buttons/SocialMediaIconButtons";

export default function MainFooter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <footer className="border-t border-gray-800 relative w-full h-full pt-10 mt-10">
      <div className="flex flex-row h-full">
        {/* socmed icons/link */}
        <div className="basis-1/2">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="text-prod-pink text-6xl">Find us on</div>
            <div className="flex flex-row gap-6">
              <SocialMediaIcon iconType={"facebook"} />
              <SocialMediaIcon iconType={"instagram"} />
            </div>
          </div>
        </div>

        {/* contact us type beat */}
        <div className="basis-1/2">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="text-prod-pink text-6xl">Contact Us</div>
            <form className="flex flex-col gap-3 w-full px-[5vw]">
              <div className="flex flex-row gap-3">
                <input
                  type="name"
                  autoComplete="name"
                  value={name}
                  placeholder="john doe"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="text-white text-sm placeholder:text-gray-500 p-3 rounded-sm w-full border border-gray-600 focus:outline-1"
                />
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  placeholder="Email *"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="text-white text-sm placeholder:text-gray-500 p-3 rounded-sm w-full border border-gray-600 focus:outline-1"
                />
              </div>
              <div>
                <textarea
                  type="text"
                  required
                  value={message}
                  placeholder="Message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className="text-white text-sm placeholder:text-gray-500 p-3 rounded-sm w-full border border-gray-600 focus:outline-1 resize-y"
                />
              </div>
              <button
                type="button"
                className="bg-prod-pink rounded-sm p-2 w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* copyright thingy */}
      <div className="bottom-0 w-full h-[3vh] mt-10">
        <div className="text-center text-sm text-neutral-500 uppercase">
          Copyright (c) 2026 ibutang pani nako diri? gi suon ra nako ang og nga
          website. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
