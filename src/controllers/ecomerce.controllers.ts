import { Request, Response } from "express";
import { Product, products } from "../models/ecomerce.models";

export const getInventory = (req: Request, res: Response) => {
  res.send(products);
};

export const getProduct = (req: Request, res: Response) => {
    const petition: string = req.body.name;
    const searched: Product[] = [];

    console.log(petition);
    
        
    products.filter( (product) => {
        if ( petition == product.name ) {
            searched.push(product)
        }
    })

    const allSearch = [searched[0], getSuggestions(searched[0].category, searched[0].name)]

    res.send(allSearch)
}

const getSuggestions = (category: string, name: string) => {
  const petitionCategory: string = category;
  const petitionName: string = name;
  const suggestions: Product[] = [];

  products.filter( product => {
    if (petitionCategory == product.category && petitionName !== product.name) {
        suggestions.push(product);
    }
  })

  return suggestions.slice(0, 2);
};
