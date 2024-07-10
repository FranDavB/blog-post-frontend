import { Post } from "@/types/types";

const ordenarPorFecha = (array: Post[] | any[]) => {
	array.sort((a: any, b: any) => {
		const dateA = a.fecha ? new Date(a.fecha).getTime() : 0;
		const dateB = b.fecha ? new Date(b.fecha).getTime() : 0;
		return dateB - dateA;
	});

	return array
}

export { ordenarPorFecha }