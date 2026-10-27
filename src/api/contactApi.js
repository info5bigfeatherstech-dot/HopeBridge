import { waitForMockApi } from "./mockApi";

/** Mock contact submission to keep the form integration replaceable by a backend. */
export const sendContactMessage = (message) => waitForMockApi({
  received: Boolean(message.name && message.email && message.subject && message.message)
});
