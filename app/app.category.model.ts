export class Category {
    constructor(
        public CatId:number,
        public CatName:string
    ) {}
}

export const Categories:Array<Category>=new Array<Category>();
Categories.push(new Category(101,"Electronics"));
Categories.push(new Category(102,"Electrical"));
Categories.push(new Category(103,"Mechanical"));