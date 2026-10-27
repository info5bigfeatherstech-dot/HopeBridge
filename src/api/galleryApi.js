import { waitForMockApi } from "./mockApi";
export const getGallery = () => waitForMockApi([
  { id: "care", src: "https://images.unsplash.com/photo-1765896387387-0538bc9f997e?auto=format&fit=crop&w=900&q=85", alt: "A nurse smiling warmly with an older patient in a bright care room" },
  { id: "activity", src: "https://images.unsplash.com/photo-1762955911431-4c44c7c3f408?auto=format&fit=crop&w=900&q=85", alt: "A caregiver assisting an older couple with a creative activity" },
  { id: "support", src: "https://images.unsplash.com/photo-1773227055624-07b515ba87c5?auto=format&fit=crop&w=900&q=85", alt: "A caregiver helping an older woman walk safely with her walker" },
  { id: "gathering", src: "https://images.unsplash.com/photo-1773227059780-5e865ce7fb13?auto=format&fit=crop&w=900&q=85", alt: "Older adults enjoying a social gathering together indoors" },
  { id: "companions", src: "https://images.unsplash.com/photo-1764173039543-f9f197744e1b?auto=format&fit=crop&w=900&q=85", alt: "Three older friends talking and smiling together" },
  { id: "chess", src: "https://images.unsplash.com/photo-1758691031288-eda755f22a94?auto=format&fit=crop&w=900&q=85", alt: "Two older friends sharing a game of chess indoors" }
]);
