import { waitForMockApi } from "./mockApi";
export const getStats = () => waitForMockApi([
  { id: "elders", value: 320, suffix: "+", label: "Elders cared for" },
  { id: "years", value: 12, suffix: "", label: "Years of service" },
  { id: "volunteers", value: 85, suffix: "+", label: "Dedicated volunteers" },
  { id: "meals", value: 145000, suffix: "+", label: "Meals served" }
]);
