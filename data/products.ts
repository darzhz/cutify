export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  options: {
    sizes: string[];
    colors: string[];
  };
}

export function getProducts(): Product[] {
  return [
    {
      id: "1",
      name: "Dreamy Cloud Wall Art",
      price: 19.99,
      description: "Adorable cloud-shaped wall decoration that adds whimsy to any room",
      longDescription: "Transform your space with this charming cloud wall art. Made from high-quality materials, this piece adds a touch of whimsy and charm to any room. Perfect for nurseries, children's rooms, or anyone who loves cute decor.",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["New", "Bestseller"],
      category: "Wall Art",
      options: {
        sizes: ["Small", "Medium", "Large"],
        colors: ["White", "Pink", "Blue"]
      }
    },
    {
      id: "2",
      name: "Kawaii Cat Planter",
      price: 24.99,
      description: "Cute cat-shaped ceramic planter for your favorite small plants",
      longDescription: "Add some personality to your plant collection with this adorable cat-shaped planter. Perfect for small succulents or herbs, this ceramic planter features cute details and a water drainage hole.",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["Limited Edition"],
      category: "Planters",
      options: {
        sizes: ["Small", "Medium"],
        colors: ["Pink", "Mint", "Lavender"]
      }
    },
    {
      id: "3",
      name: "Rainbow Crystal Suncatcher",
      price: 15.99,
      description: "Beautiful crystal suncatcher that creates rainbow patterns",
      longDescription: "Bring magic into your space with this stunning crystal suncatcher. When placed in direct sunlight, it creates beautiful rainbow patterns throughout your room. Each piece is carefully crafted for maximum sparkle.",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["New"],
      category: "Accessories",
      options: {
        sizes: ["Standard"],
        colors: ["Crystal"]
      }
    },
    {
      id: "4",
      name: "Pastel Unicorn Bookends",
      price: 29.99,
      description: "Magical unicorn bookends to add charm to your bookshelf",
      longDescription: "These enchanting unicorn bookends will add a touch of magic to any bookshelf. Made from durable resin with a soft pastel finish, they're perfect for a child's room or anyone who loves whimsical decor.",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["Bestseller"],
      category: "Accessories",
      options: {
        sizes: ["Standard"],
        colors: ["Pastel Rainbow"]
      }
    },
    {
      id: "5",
      name: "Kawaii Food Throw Pillows",
      price: 22.99,
      description: "Set of adorable food-themed throw pillows",
      longDescription: "Add a dash of cuteness to your sofa or bed with these kawaii food-themed throw pillows. Each set includes three pillows featuring different adorable food characters. Made from soft, high-quality fabric with vibrant prints.",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["New", "Set"],
      category: "Bedding",
      options: {
        sizes: ["Standard"],
        colors: ["Multicolor"]
      }
    },
    {
      id: "6",
      name: "Starry Night Light Projector",
      price: 34.99,
      description: "Create a magical atmosphere with this star projector night light",
      longDescription: "Transform your room into a starry wonderland with this enchanting night light projector. Features multiple light modes and rotating projections. Perfect for creating a soothing atmosphere for sleep or adding magic to any space.",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["Bestseller"],
      category: "Lighting",
      options: {
        sizes: ["Standard"],
        colors: ["White", "Black"]
      }
    },
    {
      id: "7",
      name: "Cute Animal Desk Organizer",
      price: 18.99,
      description: "Adorable animal-shaped desk organizer for a tidy and cute workspace",
      longDescription: "Keep your desk tidy and cute with this animal-shaped desk organizer. Features multiple compartments for pens, pencils, and small office supplies. Choose from a cat, bear, or rabbit design.",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["New"],
      category: "Office",
      options: {
        sizes: ["Standard"],
        colors: ["White", "Pink", "Blue"]
      }
    },
    {
      id: "8",
      name: "Whimsical Fairy Lights",
      price: 14.99,
      description: "Delicate string lights to add a magical glow to any room",
      longDescription: "Create a enchanting atmosphere with these delicate fairy lights. Perfect for decorating bedrooms, living spaces, or outdoor areas. Battery-operated for easy placement anywhere.",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["Bestseller"],
      category: "Lighting",
      options: {
        sizes: ["10ft", "20ft"],
        colors: ["Warm White", "Multicolor"]
      }
    }
  ];
}

