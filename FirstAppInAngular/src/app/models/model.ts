export interface Model{
  id:number;
  userId:number;
  title:string;
  completed:boolean;
}

export interface Users{
  id:number;
  name:string;
}


export  interface Address{
  userId:number;
  country:string;
  state:string;
  city:string;
  street:string;
  zipCode:number;
  user?:string;
}
