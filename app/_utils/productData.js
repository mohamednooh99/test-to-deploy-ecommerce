import { notFound } from "next/navigation"


const BASEURL = "https://66fcf18cc3a184a84d187793.mockapi.io/"

export default async function  productsList(){
   let res = await fetch(BASEURL + 'products' )
   let products = await res.json()
   if (!products) notFound()

    return products 
}