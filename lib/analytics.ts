type EventParameters = Record<string, string | number | boolean | null | undefined>;

export function trackEvent(eventName: string, parameters: EventParameters = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...parameters });
}
