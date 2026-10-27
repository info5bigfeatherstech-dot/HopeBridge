import { waitForMockApi } from "./mockApi";
export const getFaqs = () =>
  waitForMockApi([
    {
      id: "donate",
      question: "How can I donate to HopeBridge?",
      answer:
        "Use the Donate button to contact our team and choose a one-time or recurring contribution. We will guide you through secure payment options and provide a receipt.",
    },
    {
      id: "visit",
      question: "Can I visit residents at the home?",
      answer:
        "Yes. Family members and community visitors are welcome. Please contact us in advance so we can arrange a comfortable visit for residents.",
    },
    {
      id: "admission",
      question: "How do you admit an elder?",
      answer:
        "Our care team first speaks with the elder and their family or representative, understands their needs, and explains available care and admission steps with compassion.",
    },
    {
      id: "tax",
      question: "Are donations tax-exempt?",
      answer:
        "Eligibility depends on your location and current regulations. Please ask our team for our registration details and the documentation available for your contribution.",
    },
    {
      id: "volunteer",
      question: "How can I volunteer?",
      answer:
        "We welcome volunteers for companionship, activities, events and professional support. Contact us with your interests and availability and we will find a suitable way to help.",
    },
  ]);
