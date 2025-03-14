export interface Product {
    _id: string;
    title: string;
    description: string;
    price: number;
    inventory: number;
    tags: string[];
    dicountPercentage: number;
    isNew: boolean;
    productImage: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
  }
  