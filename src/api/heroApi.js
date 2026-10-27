import { waitForMockApi } from "./mockApi";

const copy = {
  heroImage: {
    src: "https://images.unsplash.com/photo-1765896387387-0538bc9f997e?auto=format&fit=crop&w=1200&q=85",
    alt: "A nurse smiling warmly with an older patient in a bright care room",
  },
  eyebrow: "Old Age Home & Elder Care NGO",
  title: "A Place Where Every Elder Feels Loved and Respected",
  description:
    "HopeBridge Foundation provides a safe home, medical care and warm companionship to elderly people who have no one to turn to.",
  primaryAction: "Donate Now",
  secondaryAction: "Visit Our Home",
  trustPoints: [
    { title: "Free shelter", detail: "A safe place to call home" },
    { title: "24/7 care", detail: "Support around the clock" },
    { title: "Registered NGO", detail: "Care you can trust" },
  ],
  reassurance: {
    title: "Care with dignity, every day.",
    description: "A caring team, a welcoming home, a community that listens.",
  },
  about: {
    eyebrow: "About HopeBridge",
    title: "Bridging the Gap Between Loneliness and Care",
    body: "HopeBridge began with a simple belief: every older person deserves to feel safe, valued and connected. We bring shelter, attentive healthcare and the comfort of community together under one roof.",
    missionTitle: "Our mission",
    mission:
      "To offer compassionate, dependable care that protects dignity and helps every elder feel at home.",
    visionTitle: "Our vision",
    vision:
      "A community where no older person is left to face later life alone.",
    action: "Learn More",
    images: [
      {
        src: "https://images.unsplash.com/photo-1773227055624-07b515ba87c5?auto=format&fit=crop&w=900&q=85",
        alt: "A caregiver helping an older woman walk safely with her walker",
      },
      {
        src: "https://images.unsplash.com/photo-1764173039543-f9f197744e1b?auto=format&fit=crop&w=800&q=85",
        alt: "Three older friends talking and smiling together",
      },
    ],
  },
  servicesSection: {
    eyebrow: "How we care",
    title: "Care That Meets Every Need",
    subtitle:
      "Practical support and human connection, thoughtfully brought together.",
  },
  statsSection: {
    eyebrow: "Our impact",
    title: "A Community Growing Stronger Together",
  },
  gallerySection: {
    eyebrow: "Moments at HopeBridge",
    title: "A Home Full of Life",
    subtitle: "Everyday moments of friendship, care and belonging.",
    action: "View Full Gallery",
    closeImage: "Close image",
    viewImage: "View photo",
    modalTitle: "A moment at HopeBridge",
  },
  faqSection: { eyebrow: "Questions and answers", title: "How Can We Help?" },
  dailyLife: {
    eyebrow: "Life at HopeBridge",
    title: "A Day Filled with Care and Connection",
    description:
      "Gentle routines make room for good health, meaningful moments and the freedom to enjoy each day.",
    moments: [
      {
        id: "morning",
        label: "Morning",
        title: "A gentle start",
        text: "Fresh air, a nourishing breakfast, morning medicines and optional yoga help everyone begin at their own pace.",
        image:
          "https://images.unsplash.com/photo-1713296416975-c1b5366be94b?auto=format&fit=crop&w=1100&q=85",
        alt: "An older couple taking a gentle walk together outdoors",
      },
      {
        id: "afternoon",
        label: "Afternoon",
        title: "Care and conversation",
        text: "Health check-ins, home-cooked lunch and time for reading, hobbies or a friendly chat fill the afternoon.",
        image:
          "https://images.unsplash.com/photo-1762955911431-4c44c7c3f408?auto=format&fit=crop&w=1100&q=85",
        alt: "A caregiver sharing a coloring activity with an older couple",
      },
      {
        id: "evening",
        label: "Evening",
        title: "Together at the close of day",
        text: "A shared dinner, music and visits from friends bring the day to a calm and connected close.",
        image:
          "https://images.unsplash.com/photo-1773227059780-5e865ce7fb13?auto=format&fit=crop&w=1100&q=85",
        alt: "Older adults enjoying a social gathering together indoors",
      },
    ],
  },
  involvement: {
    eyebrow: "Be part of the change",
    title: "There Is a Place for You Here",
    description:
      "A little time, a thoughtful gift or a year of support can make a lasting difference.",
    items: [
      {
        id: "donate",
        title: "Donate",
        text: "Help provide meals, medicines and a safe place to call home.",
        action: "Make a donation",
        icon: "Heart",
      },
      {
        id: "volunteer",
        title: "Volunteer",
        text: "Share your time, skills and kindness with our residents.",
        action: "Become a volunteer",
        icon: "HandHeart",
      },
      {
        id: "sponsor",
        title: "Sponsor an Elder",
        text: "Offer consistent, personal support for an elder's everyday needs.",
        action: "Sponsor an elder",
        icon: "UsersRound",
      },
    ],
  },
  cta: {
    title: "Be the Bridge to Someone's Hope.",
    description:
      "Your kindness can help an elder feel safe, seen and cared for.",
    donate: "Donate today",
    contact: "Talk to our team",
  },
  donateModal: {
    title: "Help someone feel at home",
    description:
      "Tell us how to reach you and our team will share secure ways to support HopeBridge.",
    name: "Your name",
    email: "Email address",
    amount: "Contribution amount",
    amountPlaceholder: "Choose an amount",
    amountOptions: [
      { value: "500", label: "₹500" },
      { value: "1000", label: "₹1,000" },
      { value: "2500", label: "₹2,500" },
      { value: "custom", label: "Another amount" },
    ],
    submit: "Continue with donation",
    success: "Thank you. Our team will be in touch about your contribution.",
    privacy: "We will only use your details to follow up about your donation.",
  },
};

export const getHeroContent = () => waitForMockApi(copy);
