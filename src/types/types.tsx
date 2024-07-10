import { IconType } from "react-icons";

type Seccion = {
    icono: IconType;
    area: string;
    descripcion: string;
};

type BotonesMenu = {
    id: number,
    icono: IconType;
    texto: string;
    funcion: string;
}

type Post = {
    id?: number,
    nombre: string,
    fecha?: Date,
    contenido: string,
    autorId: number,
    autor?: User
}

type User = {
    id: number
    nombre: string
    apellido: string;
    cumpleanios: Date;
    dni: number;
    posts: Post[];
}

export type { Seccion, Post, BotonesMenu, User };