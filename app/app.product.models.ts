export class Product {
    constructor(
        public ProdId:number,
        public ProdName:string,
        public CatId:number
    ) {}
}

export const Products:Array<Product> = new Array<Product>();

Products.push(new Product(10001,"Laptop",101));
Products.push(new Product(10002,"Router",101));
Products.push(new Product(10003,"Iron",102));
Products.push(new Product(10004,"Mixer",102));
Products.push(new Product(10005,"Cranc",103));
Products.push(new Product(10006,"Leath Machine",103));