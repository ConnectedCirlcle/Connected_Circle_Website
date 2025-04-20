import { Episode } from "@/lib/types";

export const featuredEpisodes: Episode[] = [
  {
    id: 1,
    title: "Navigating Difficult Conversations with Teens",
    summary: "Learn effective strategies for opening honest dialogue with your teenagers about challenging topics while maintaining trust and respect.",
    image: "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "43 min",
    topics: ["Parenting"],
    audioUrl: "https://example.com/podcast/ep1.mp3",
  },
  {
    id: 2,
    title: "Financial Harmony: Joint Money Management",
    summary: "Expert advice on how couples can approach finances as a team, set shared goals, and navigate different money styles and habits.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "38 min",
    topics: ["Money"],
    audioUrl: "https://example.com/podcast/ep2.mp3",
  },
  {
    id: 3,
    title: "Self-Care Isn't Selfish: Mental Health for Parents",
    summary: "Why maintaining your own emotional wellbeing is crucial for your family, with practical strategies for incorporating self-care into busy family life.",
    image: "https://images.unsplash.com/photo-1516900448138-898720802bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "51 min",
    topics: ["Wellness"],
    audioUrl: "https://example.com/podcast/ep3.mp3",
  },
  {
    id: 4,
    title: "Creating Meaningful Family Traditions",
    summary: "How to establish rituals and traditions that strengthen family bonds and create lasting memories for children of all ages.",
    image: "https://images.unsplash.com/photo-1523113501066-4b77fb869c06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "45 min",
    topics: ["Parenting", "Home Life"],
    audioUrl: "https://example.com/podcast/ep4.mp3",
  },
  {
    id: 5,
    title: "Effective Co-Parenting After Separation",
    summary: "Strategies for maintaining a healthy co-parenting relationship focused on the well-being of children after divorce or separation.",
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "49 min",
    topics: ["Parenting", "Relationships"],
    audioUrl: "https://example.com/podcast/ep5.mp3",
  },
  {
    id: 6,
    title: "Building Emotional Intelligence in Children",
    summary: "How parents can foster emotional awareness and healthy emotional expression in children from toddlerhood through the teenage years.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "55 min",
    topics: ["Parenting", "Mental Health"],
    audioUrl: "https://example.com/podcast/ep6.mp3",
  }
];

export const allEpisodes: Episode[] = [
  ...featuredEpisodes,
  {
    id: 7,
    title: "Digital Wellness: Technology in Family Life",
    summary: "Finding the right balance with technology use in your household and establishing healthy boundaries with screens.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "47 min",
    topics: ["Home Life", "Wellness"],
    audioUrl: "https://example.com/podcast/ep7.mp3",
  },
  {
    id: 8,
    title: "The Science of Sleep for Families",
    summary: "Understanding sleep needs across different ages and how to create routines that support restful nights for everyone.",
    image: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "42 min",
    topics: ["Wellness", "Parenting"],
    audioUrl: "https://example.com/podcast/ep8.mp3",
  },
  {
    id: 9,
    title: "Navigating Career and Family Balance",
    summary: "Realistic approaches to balancing professional ambitions with family priorities, featuring working parents sharing their strategies.",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "50 min",
    topics: ["Home Life", "Relationships"],
    audioUrl: "https://example.com/podcast/ep9.mp3",
  }
];
