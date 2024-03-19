export interface IProduct {
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
}

export interface ICartProduct {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface IPopupProps {
  isOpen: boolean;
  onClose: () => void;
}
