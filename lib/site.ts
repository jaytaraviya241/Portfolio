const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const site = {
  name: "Jay Taraviya",
  role: "Shopify Developer",
  tagline: "Storefronts engineered to sell.",
  email: "jay.taraviya1124@gmail.com",
  linkedin: "https://linkedin.com/in/jaytaraviya241",
  github: "https://github.com/jaytaraviya241",
  location: "Rajkot, India",
  availability: "Available for select projects",
  profileImage: `${basePath}/reel-image.jpg`,
} as const;
