export const LINKTRACKER = (PAGES, CALLBACK) => {
  const query = window.location.search.slice(1).trim();
  const path = window.location.pathname.replace(/^\/+/, "").trim();
  const route = (query || path || "home").toLowerCase();
  if (PAGES[route]) {
    PAGES[route]();
  } else {
    CALLBACK();
  };
};