import { waitForMockApi } from "./mockApi";
export const getSiteContent = () => waitForMockApi({
  organization: "HopeBridge Foundation",
  donate: "Donate",
  navigation: [{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Our Care", href: "/our-care" }, { label: "Gallery", href: "/gallery" }, { label: "Contact", href: "/contact" }],
  pages: {
    about: {
      eyebrow: "Who we are",
      title: "A Neighbourhood Where Every Generation Belongs",
      description: "We build a caring community around older people through everyday companionship, thoughtful support and shared experiences.",
      image: "https://images.unsplash.com/photo-1764173039543-f9f197744e1b?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Older friends talking and smiling together as a community"
    },
    care: {
      eyebrow: "Our care",
      title: "A Safe Home, With Care for the Whole Person",
      description: "From daily meals to health check-ins and the comfort of companionship, our support responds to each elder as an individual.",
      image: "https://images.unsplash.com/photo-1765896387387-0538bc9f997e?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "A nurse smiling warmly with an older patient in a bright care room"
    },
    gallery: {
      eyebrow: "Life together",
      title: "The Everyday Moments That Make a Home",
      description: "See residents, caregivers and friends sharing activities, conversations and moments of care.",
      image: "https://images.unsplash.com/photo-1773227059780-5e865ce7fb13?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Older adults enjoying a social gathering together indoors"
    },
    contact: {
      eyebrow: "We are here to listen",
      title: "Let’s Start a Conversation",
      description: "Ask us about visiting, care for an older loved one, volunteering or supporting HopeBridge. Our team will be glad to help.",
      image: "https://images.unsplash.com/photo-1762955911431-4c44c7c3f408?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "A caregiver sharing a creative activity with older residents",
      formTitle: "Send us a message",
      nameLabel: "Your name",
      emailLabel: "Email address",
      subjectLabel: "What would you like to discuss?",
      subjectPlaceholder: "Choose a topic",
      subjectOptions: [{ value: "visit", label: "Arrange a visit" }, { value: "care", label: "Care and admission" }, { value: "volunteer", label: "Volunteering" }, { value: "support", label: "Donations and support" }, { value: "other", label: "Something else" }],
      messageLabel: "Your message",
      submit: "Send message",
      failure: "We couldn't send your message just now. Please try again or contact our team by phone.",
      success: "Thank you for reaching out. Our team will get back to you soon."
    },
    environment: {
      eyebrow: "Environment & cultural awareness",
      title: "Rooted in Care. Connected to Our World.",
      description: "We believe caring for one another also means caring for the places and traditions we share. Residents, volunteers and neighbours learn and take action together.",
      initiatives: [
        { id: "green", icon: "Sprout", title: "Growing greener together", text: "We plant trees, tend small gardens and encourage practical green habits like saving water, reusing materials and keeping shared spaces clean." },
        { id: "culture", icon: "CalendarHeart", title: "Celebrating across cultures", text: "From Yoga Day, Republic Day and Earth Day to festivals and international observances, our calendar makes space for learning and joyful participation." },
        { id: "awareness", icon: "Globe2", title: "Sharing messages that unite us", text: "Through stories, gentle activities and community gatherings, we promote unity, health, cultural understanding and awareness at every age." }
      ],
      closing: "Every act of celebration becomes a moment of learning and service.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Hands caring for a growing green plant in a garden"
    }
  },
  footer: {
    quickLinksTitle: "Quick links",
    servicesTitle: "Our care",
    contactTitle: "Get in touch",
    newsletterTitle: "A little hope in your inbox",
    newsletterText: "Occasional updates from our home and community.",
    newsletterPlaceholder: "Your email address",
    newsletterAction: "Subscribe",
    newsletterSuccess: "Thank you for staying connected with HopeBridge.",
    copyright: "HopeBridge Foundation. All rights reserved.",
    about: "A safe home, thoughtful healthcare and warm companionship for older people who deserve to feel valued.",
    address: "24 Garden Road, Bengaluru, Karnataka 560001",
    phone: "+91 80 4567 8900",
    email: "care@hopebridge.org",
    quickLinks: [{ label: "About us", href: "/about" }, { label: "Our care", href: "/our-care" }, { label: "Our gallery", href: "/gallery" }, { label: "Contact", href: "/contact" }],
    services: [{ label: "Shelter and food", href: "/our-care" }, { label: "Healthcare", href: "/our-care" }, { label: "Companionship", href: "/our-care" }, { label: "Family events", href: "/our-care" }],
    socialLabel: "Follow HopeBridge",
    socialLinks: [{ label: "Instagram", href: "https://www.instagram.com/" }, { label: "Facebook", href: "https://www.facebook.com/" }]
  }
});
