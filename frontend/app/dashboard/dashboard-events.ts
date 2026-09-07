/**
 * Tiny cross-component signal for the dashboard shell.
 *
 * When a page changes something that affects the bell / sidebar badges
 * (opening an order, marking it processed, deleting it), it calls
 * `refreshDashboardBadges()`. The layout listens and refetches its counts
 * straight away instead of waiting for the next poll.
 *
 * The counts themselves always come from the backend — this only decides
 * *when* to ask, never what the number is.
 */
export const DASHBOARD_BADGES_EVENT = "dashboard:refresh-badges";

export function refreshDashboardBadges() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(DASHBOARD_BADGES_EVENT));
}
