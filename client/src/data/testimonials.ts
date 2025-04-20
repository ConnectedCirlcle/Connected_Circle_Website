import { Testimonial } from "@/lib/types";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "This podcast has transformed how I approach difficult conversations with my kids. Every episode gives me something practical I can implement right away.",
    author: {
      name: "Sarah K.",
      role: "Mother of three",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  },
  {
    id: 2,
    text: "As a new parent, I was overwhelmed, but Heart & Household helped me realize I'm not alone. The expert interviews are incredibly insightful.",
    author: {
      name: "James T.",
      role: "First-time father",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  },
  {
    id: 3,
    text: "My husband and I listen together weekly. It's sparked meaningful conversations and brought us closer as we navigate parenthood together.",
    author: {
      name: "Elena R.",
      role: "Couples therapist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  }
];
