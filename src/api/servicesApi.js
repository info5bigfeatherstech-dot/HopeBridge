import { waitForMockApi } from "./mockApi";

export const getServices = () =>
  waitForMockApi([
    {
      id: "shelter",
      icon: "House",
      title: "Shelter and Food",
      text: "A safe, welcoming home and balanced, freshly prepared meals every day.",
    },
    {
      id: "healthcare",
      icon: "HeartPulse",
      title: "Healthcare and Medicines",
      text: "Regular health check-ups, medication support and access to trusted doctors.",
    },
    {
      id: "emotional",
      icon: "MessagesSquare",
      title: "Emotional Support",
      text: "Patient listening, counselling and companionship through life's harder moments.",
    },
    {
      id: "activities",
      icon: "Flower2",
      title: "Activities and Yoga",
      text: "Gentle movement, creative hobbies and shared activities for body and mind.",
    },
    {
      id: "community",
      icon: "PartyPopper",
      title: "Festivals and Family Events",
      text: "Celebrations and family visits that keep traditions and relationships close.",
    },
    {
      id: "assistance",
      icon: "FileHeart",
      title: "Legal and Pension Assistance",
      text: "Practical help navigating entitlements, documentation and pension support.",
    },
  ]);
