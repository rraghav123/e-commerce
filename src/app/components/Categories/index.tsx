
import { getCategories } from "@/app/apis/fetchData";

export async function Categories() {
    const data = await getCategories();

}