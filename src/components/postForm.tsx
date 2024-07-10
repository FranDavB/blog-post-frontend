"use client"
import fetchServices from "@/services/fetchServices"
import { Post, User } from "@/types/types"
import { useEffect, useState } from "react"
import { SocketClient, enviarPost } from "./socketClient"

export default function postForm() {

  const [autores, setAutores] = useState<User[]>([])
  const [post, setPost] = useState<Post>({
    nombre: "",
    contenido: "",
    autorId: 0
  })

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersFetched = await fetchServices.fetchObjects("users");
        setAutores(usersFetched);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();

  })

  const handlePostChange = (campo: any, value: any) => {
    const postActualizado = { ...post, [campo]: value }
    console.log(postActualizado)
    setPost((prevState) => postActualizado)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    enviarPost(post); // Llama a enviarPost con el objeto post actual
    // Aquí puedes añadir lógica adicional, como limpiar el formulario, etc.
  }


  return (
    <form className="flex flex-col space-y-4 w-[30dvw] h-[50dvh]" onSubmit={handleSubmit}>
      <label htmlFor="nombre">Título</label>
      <input
        type="text"
        placeholder="Ingrese título"
        id="nombre"
        name="nombre"
        className="p-2"
        onChange={(e) => handlePostChange(e.target.name, e.target.value)} />
      <label htmlFor="contenido">Contenido</label>
      <textarea
        id="contenido"
        name="contenido"
        className="p-2"
        onChange={(e) => handlePostChange(e.target.name, e.target.value)} />
      <label htmlFor="autorId">Autor</label>
      <select
        defaultValue={""}
        id="autorId"
        name="autorId"
        className="p-2"
        onChange={(e) => handlePostChange(e.target.name, parseInt(e.target.value))}>
        <option value={""}>Elija un autor</option>
        {
          autores.map((autor: User, index: number) => (
            <option key={index} value={autor.id}>{autor.apellido}, {autor.nombre}</option>
          ))
        }
      </select>

      <button type="submit">Enviar</button>
      <SocketClient />
    </form>
  )
}