import { Post } from "@/types/types";
import { useEffect } from "react";
import io, { Socket } from "socket.io-client";


let socket: Socket;

const enviarPost = (postData: Post) => {
  socket.emit("post-enviado", postData);
};

interface SocketClientProps {
  actualizarPosts?: (nuevoPost: Post) => void,
  mostrarNotificaciones?: boolean
}


const SocketClient = ({ actualizarPosts, mostrarNotificaciones }: SocketClientProps) => {
  useEffect(() => {
    socket = io('http://localhost:9001');

    socket.on("connect", () => {
      console.log("Connected to server");

      // Ejemplo de emisión de evento
      socket.emit("usuario-conectado", { message: "Hello from client!" });
    });

    if (mostrarNotificaciones) {
      socket.on("post_agregado", (datosPost) => {
        // Mostrar alerta con los detalles del post agregado
        const mensaje = `El usuario ${datosPost.autor.nombre} ${datosPost.autor.apellido} ha agregado el post titulado ${datosPost.nombre}`;
        alert(mensaje);
      });
    }

    if (actualizarPosts) {
      socket.on("actualizar_posts", (nuevoPost: Post) => {
        actualizarPosts(nuevoPost);
      });
    }

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.close();
    };
  }, []);

  // Función para enviar un post al servidor
  // Return null or some other JSX as necessary for your component
  return null;
};

export { SocketClient, enviarPost }; // Export both SocketClient and enviarPost
