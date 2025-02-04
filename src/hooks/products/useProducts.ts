import { getProducts } from "../../actions";
import { useQuery } from "@tanstack/react-query";

export const useProducts = ( ) => {
    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => getProducts(),
        staleTime: 1000 * 60 * 5, // 1 hora
    });

    return { products: data, isLoading };
};
