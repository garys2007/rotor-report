document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = this.querySelector("input[type='email']");
    if (!input) return;

    const value = input.value.trim();
    if (!value) {
      input.focus();
      return;
    }

    alert("Thanks for subscribing: " + value);
    this.reset();
  });
});
