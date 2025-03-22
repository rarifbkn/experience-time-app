"use client";

import { FormEvent } from "react";


export default function RegisterPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    
  };

  return (
    <div>
      <h1>Formualrio de Registro</h1>
      <form onSubmit={handleSubmit} className="">
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="username or alias"
          name="username"
          required
        />

        <label htmlFor="email">Email: </label>
        <input
          id="email"
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="email"
          placeholder="email"
          name="email"
          required
        />

        <label htmlFor="password">Password: </label>
        <input
          id="password"
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="password"
          placeholder="*****"
          name="password"
          required
        />
        <button type="submit" value="Registrar">
          Registrar
        </button>
      </form>
    </div>
  );
}
