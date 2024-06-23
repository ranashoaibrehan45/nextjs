import { Metadata } from "next";
import Link from "next/link";
import { resolve } from "path";

export const generateMetadata = async ({ 
    params,
} : Props) : Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`)
        }, 100)
    });
    
    return {
        title: `Product ${title}`
    }
}

type Props = {
    params: {
        productId: string
    }
}

export default function ProductDetails({ params } : Props) {
    return (
        <>
            <Link href="/products">Products List</Link>
            <h1>Details about product {params.productId}</h1>
        </>
    );
}
