// Centralized Source of Truth for Services and Pricing
export const SERVICES = [
  {
    id: "wash-cut-style",
    name: "Wash, Cut & Style",
    price: "£35",
    priceNumber: 35,
    time: "45 MIN",
    category: "Hair Craft",
    shortDesc: "Experience a complete grooming transformation with our Wash, Cut & Style service. Begin with a refreshing shampoo, precision cut, and expert styling.",
    fullDesc: "Experience a complete grooming transformation with our Wash, Cut & Style service. Begin with a refreshing shampoo to cleanse and revitalize your hair, followed by a precision cut tailored to your unique look. Finish off with expert styling to ensure you leave looking sharp and feeling confident. Perfect for those who want the full treatment."
  },
  {
    id: "head-shave",
    name: "Head Shave",
    price: "£25",
    priceNumber: 25,
    time: "35 MIN",
    category: "Hair Craft",
    shortDesc: "Experience the ultimate in smooth and clean with precision techniques and high-quality products for a close, comfortable shave.",
    fullDesc: "Experience the ultimate in smooth and clean with our professional head shave service. Our expert barbers use precision techniques and high-quality products to give you a close, comfortable shave, leaving your scalp feeling refreshed and looking impeccable. Perfect for those who prefer a sleek, bald look or want to maintain a well-groomed head."
  },
  {
    id: "clippers-cut",
    name: "Clippers Cut (Same Number All Over)",
    price: "£20",
    priceNumber: 20,
    time: "25 MIN",
    category: "Hair Craft",
    shortDesc: "Achieve a clean, uniform look with the same clipper guard length across your entire head. Consistent, stylish, and easy to maintain.",
    fullDesc: "Achieve a clean, uniform look with our Clippers Cut service. Our skilled barbers use the same clipper guard length across your entire head, ensuring a consistent and stylish cut that's easy to maintain. Perfect for those who prefer a simple, sleek, and effortlessly neat appearance."
  },
  {
    id: "scissor-cut",
    name: "Scissor Cut",
    price: "£35",
    priceNumber: 35,
    time: "45 MIN",
    category: "Hair Craft",
    shortDesc: "Experience precision and style with expert scissor techniques to craft a personalized, sharp, and clean look tailored to your hair.",
    fullDesc: "Experience precision and style with our 'Scissor Cut' service. Our skilled barbers use expert scissor techniques to craft a personalized, sharp, and clean look tailored to your unique hair type and style preferences. Perfect for those seeking a refined, classic haircut with a touch of sophistication."
  },
  {
    id: "beard-shaping",
    name: "Beard Shaping",
    price: "£20",
    priceNumber: 20,
    time: "30 MIN",
    category: "Shave & Beard",
    shortDesc: "Transform your look with meticulous beard sculpting and refinement to enhance facial features and keep you looking sharp.",
    fullDesc: "Transform your look with our 'Beard Shaping' service! Our skilled barbers will meticulously sculpt and refine your beard to enhance your facial features and keep you looking sharp. Whether you want a clean, precise edge or a more natural, tapered style, we'll tailor the perfect shape to complement your individual style. Step out with confidence and a beard that's perfectly groomed."
  },
  {
    id: "hot-towel-wet-shave",
    name: "Hot Towel Wet Shave",
    price: "£25",
    priceNumber: 25,
    time: "40 MIN",
    category: "Shave & Beard",
    shortDesc: "Indulge in our Hot Towel Wet Shave for a luxurious, close shave. Warm towels and premium products soften beard and refresh skin.",
    fullDesc: "Indulge in our Hot Towel Wet Shave for a luxurious, close shave. Warm towels and premium products soften your beard and refresh your skin. Enjoy the ultimate in relaxation and precision with every shave."
  },
  {
    id: "eyebrows-threading",
    name: "Eyebrows Threading",
    price: "£15",
    priceNumber: 15,
    time: "15 MIN",
    category: "Grooming & Details",
    shortDesc: "Experience precision and elegance with fine cotton threads to meticulously shape and define your eyebrows.",
    fullDesc: "Experience precision and elegance with our Eyebrows Threading service. Our skilled technicians use fine, cotton threads to meticulously shape and define your eyebrows, ensuring a clean, natural look that enhances your facial features. Perfect for achieving sharp lines and a polished appearance, our threading technique provides a gentle, long-lasting result for beautifully sculpted brows."
  },
  {
    id: "haircut-beard-trim",
    name: "Haircut & Beard Trim",
    price: "£48",
    priceNumber: 48,
    time: "60 MIN",
    category: "Signature Combinations",
    shortDesc: "Experience the ultimate grooming session: fresh stylish haircut, precision cut, and a perfectly sculpted beard.",
    fullDesc: "Experience the ultimate grooming session with our \"Haircut & Beard Trim\" service. Whether you're looking for a fresh, stylish haircut or a sharp, well-defined beard, our expert barbers will deliver a precision cut and a perfectly sculpted beard to keep you looking your best. Relax and enjoy a top-notch grooming experience tailored to your unique style."
  }
];

export const SERVICE_CATEGORIES = [
  {
    category: "Hair Craft & Tailoring",
    tag: "Section 01",
    ids: ["wash-cut-style", "scissor-cut", "clippers-cut", "head-shave"]
  },
  {
    category: "Traditional Shaving & Beard Care",
    tag: "Section 02",
    ids: ["hot-towel-wet-shave", "beard-shaping", "eyebrows-threading"]
  },
  {
    category: "Master Combinations",
    tag: "Section 03",
    ids: ["haircut-beard-trim"]
  }
];

export function getServiceById(id) {
  if (!id) return SERVICES[0];
  return SERVICES.find(s => s.id.toLowerCase() === id.toLowerCase()) || SERVICES[0];
}
