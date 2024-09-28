"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export const EmailSection = () => {
  const [emailSubmited, setEmailSubmited] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send"; // API route

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);

      if (!response.ok) {
        console.error(`Error: ${response.status}`);
        return;
      }

      const resData = await response.json();
      if (resData.status === 200) {
        setEmailSubmited(true);
        console.log("Message sent successfully.");
      } else {
        console.error("Failed to send message:", resData.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section
      className="grid md:grid-cols-2 lg:my-12 md:pt-16 pt-16 py-8 lg:py-32 gap-4 relative"
      id="contact"
    >
      <div className="lg:bg-gradient-to-r from-blue-900 to-transparent rounded-full h-80 w-80 -z-1 blur-lg absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          beatae illum adipisci consequuntur assumenda amet voluptas iste enim
          officiis explicabo.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/VladoLov">
            <div className="text-white border rounded-full border-white">
              <Github className="w-6 h-6" />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/feed/">
            <div className="text-white border rounded-md border-white stroke-blue bg-blue-500 fill-white w-6 h-6 scale-105">
              <Linkedin className="w-6 h-6" />
            </div>
          </Link>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="border border-[#333353F] placeholder-[#9CA2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="johndoe@exmaple.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              className="border border-[#333353F] placeholder-[#9CA2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="Type whatever you want"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="border border-[#333353F] placeholder-[#9CA2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmited && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
