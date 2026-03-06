document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.querySelector(".search-bar");

  if (!searchForm) {
    return;
  }

  searchForm.addEventListener("submit", (event) => {
    // Placeholder behavior until search backend is implemented.
    event.preventDefault();
  });
});
