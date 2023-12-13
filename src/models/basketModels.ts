export interface basketModels {
  top: {
    title: string;
  };
  details: {
    name: string;
    farmLogo: string;
    farmName: string;
    description: string;
    price: string;
    buttonName: string;
  };
  items: {
    itemTitle: string;
    list: {
      name: string;
      image: any;
    }[];
  };
}
