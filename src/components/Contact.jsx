import { React, useEffect, useState } from "react";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setInput({
      name: "",
      email: "",
      message: ""
    })
  },[])

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/67110616-b0e6-4557-82e6-ccbb79073c9b"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            
            Envíe el formulario a continuación o envíeme un correo electrónico:
            <br /> - tomasgelvez8@gmail.com
            <br/> Verifique de completar todos los campos.
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          value={input.name}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          value={input.email}
          required
          onChange={(e) => handleChange(e)}
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          value={input.message}
          required
          onChange={(e) => handleChange(e)}
        >
          {" "}
        </textarea>

        <button
          disabled={input.name === "" || input.email === "" || input.message === ""}
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
