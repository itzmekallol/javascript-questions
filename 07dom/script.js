// ==================================================================
// All JavaScript lives here, grouped to match the question numbering.
// Comments explain WHAT each block does and WHY, per your request.
// ==================================================================

// PART1_JS

// 1. getElementById() finds the ONE element with that exact id — ids must be
// unique on a page, so this always returns a single element (or null if missing).
document.getElementById("q1-btn").addEventListener("click", () => {
  const target = document.getElementById("q1-target");
  target.textContent = "Text changed via getElementById()!";
});

// 2. querySelectorAll(".q2-item") returns a NodeList of every matching element.
// NodeList has a forEach method (in modern browsers), so we can loop directly.
document.getElementById("q2-btn").addEventListener("click", () => {
  const items = document.querySelectorAll(".q2-item");
  items.forEach((item, index) => {
    item.textContent = `Updated item ${index + 1}`;
  });
});

// 3. querySelector(".q3-para") stops at the FIRST match in document order —
// the second paragraph is left untouched.
document.getElementById("q3-btn").addEventListener("click", () => {
  const firstParagraph = document.querySelector(".q3-para");
  firstParagraph.style.background = "var(--accent-soft)";
});

// 4. Looping over querySelectorAll lets us apply a style to every match at once.
document.getElementById("q4-btn").addEventListener("click", () => {
  document.querySelectorAll(".q4-para").forEach((para) => {
    para.style.color = "#5b8cff";
  });
});

// 5. textContent strips out tags — "Hello World", without the <strong> markup.
document.getElementById("q5-btn").addEventListener("click", () => {
  const target = document.getElementById("q5-target");
  console.log("5) textContent:", target.textContent);
});

// 6. innerHTML keeps the tags as part of the string — useful when you need
// the markup itself, not just the visible text.
document.getElementById("q6-btn").addEventListener("click", () => {
  const target = document.getElementById("q6-target");
  console.log("6) innerHTML:", target.innerHTML);
});

// 7. A click listener runs a function that swaps the heading's text.
document.getElementById("q7-btn").addEventListener("click", () => {
  document.getElementById("q7-heading").textContent = "Heading changed!";
});

// 8. Overwriting innerHTML replaces the div's entire content — the old <p>
// is gone completely, not just hidden.
document.getElementById("q8-btn").addEventListener("click", () => {
  document.getElementById("q8-container").innerHTML =
    "<p>Brand new content!</p>";
});

// PART2_JS

// 9. style.backgroundColor sets an inline CSS property directly via JS.
document.getElementById("q9-btn").addEventListener("click", () => {
  document.getElementById("q9-box").style.backgroundColor = "#5b8cff";
});

// 10. style.fontSize accepts a CSS length string, e.g. "24px" — not a plain number.
document.getElementById("q10-btn").addEventListener("click", () => {
  document.getElementById("q10-text").style.fontSize = "24px";
});

// 11 & 12. Setting display to "none" removes the element visually (and from
// layout flow); setting it back to "block" restores it. This is different
// from deleting the element — it still exists in the DOM the whole time.
document.getElementById("q11-hide-btn").addEventListener("click", () => {
  document.getElementById("q11-text").style.display = "none";
});
document.getElementById("q12-show-btn").addEventListener("click", () => {
  document.getElementById("q11-text").style.display = "block";
});

// 13. classList.toggle() flips the class on/off — no need to check first
// whether the class is currently present.
document.getElementById("q13-btn").addEventListener("click", () => {
  document.getElementById("q13-text").classList.toggle("highlight-class");
});

// 14. classList.add() accepts multiple class names in a single call.
document.getElementById("q14-btn").addEventListener("click", () => {
  document
    .getElementById("q14-text")
    .classList.add("bold-class", "italic-class");
});

// 15. classList.remove() takes the class off the element; other classes
// (if any) are left untouched.
document.getElementById("q15-btn").addEventListener("click", () => {
  document.getElementById("q15-text").classList.remove("highlight-class");
});

// PART3_JS

// 16. setAttribute("src", ...) changes which image file the browser loads.
document.getElementById("q16-btn").addEventListener("click", () => {
  document
    .getElementById("q16-img")
    .setAttribute("src", "https://placehold.co/80x80/5b8cff/0f1420?text=B");
});

// 17. Same setAttribute pattern, applied to the "href" attribute of a link.
document.getElementById("q17-btn").addEventListener("click", () => {
  document
    .getElementById("q17-link")
    .setAttribute("href", "https://developer.mozilla.org");
});

// 18. dataset lets us set custom data-* attributes using camelCase property
// names — dataset.userId maps to the HTML attribute data-user-id.
document.getElementById("q18-btn").addEventListener("click", () => {
  const target = document.getElementById("q18-text");
  target.dataset.userId = "42";
  console.log("18) data-user-id is now:", target.dataset.userId);
});

// 19. removeAttribute() deletes the attribute entirely — the input becomes
// editable again once "disabled" is gone.
document.getElementById("q19-btn").addEventListener("click", () => {
  document.getElementById("q19-input").removeAttribute("disabled");
});

// 20. hasAttribute() returns a boolean without needing to read the actual
// attribute value — useful when you only care whether it's present at all.
document.getElementById("q20-btn").addEventListener("click", () => {
  const target = document.getElementById("q20-text");
  console.log("20) has title attribute?", target.hasAttribute("title"));
});

// PART4_JS

// 21. createElement() builds an element in memory only — nothing appears on
// the page until we attach it somewhere with appendChild().
document.getElementById("q21-btn").addEventListener("click", () => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "I was created with JavaScript!";
  document.getElementById("q21-container").appendChild(newParagraph);
});

// 22. Same createElement pattern, but for a <button>, plus giving it its
// own click behavior before inserting it into the page.
document.getElementById("q22-btn").addEventListener("click", () => {
  const newButton = document.createElement("button");
  newButton.textContent = "I'm dynamic!";
  newButton.className = "ghost";
  newButton.addEventListener("click", () => alert("Dynamic button clicked!"));
  document.getElementById("q22-container").appendChild(newButton);
});

// 23. insertAdjacentElement("beforebegin", ...) places the new node
// immediately BEFORE the target, as a sibling (not inside it).
document.getElementById("q23-before-btn").addEventListener("click", () => {
  const target = document.getElementById("q23-target");
  const newEl = document.createElement("p");
  newEl.textContent = "Inserted before";
  target.insertAdjacentElement("beforebegin", newEl);
});

// 24. "afterend" places the new node immediately AFTER the target, as a sibling.
document.getElementById("q24-after-btn").addEventListener("click", () => {
  const target = document.getElementById("q23-target");
  const newEl = document.createElement("p");
  newEl.textContent = "Inserted after";
  target.insertAdjacentElement("afterend", newEl);
});

// 25. remove() deletes the element from the DOM entirely (modern, simplest
// approach — older code used parentNode.removeChild(element) instead).
document.getElementById("q25-btn").addEventListener("click", () => {
  document.getElementById("q25-target").remove();
});

// 26. Setting innerHTML = "" wipes out every child element at once — simpler
// than looping and removing children one at a time.
document.getElementById("q26-btn").addEventListener("click", () => {
  document.getElementById("q26-list").innerHTML = "";
});

// 27. replaceWith() swaps the old element out for a new one in a single call.
document.getElementById("q27-btn").addEventListener("click", () => {
  const oldElement = document.getElementById("q27-old");
  const newElement = document.createElement("p");
  newElement.textContent = "I am the replacement!";
  oldElement.replaceWith(newElement);
});

// 28. cloneNode(true) copies the element AND all its descendants ("true" =
// deep clone). Without "true", only the element itself would be cloned,
// leaving out any nested content. Note: the clone's id is duplicated too,
// so in real projects you'd usually update or remove the id after cloning.
document.getElementById("q28-btn").addEventListener("click", () => {
  const original = document.getElementById("q28-original");
  const clone = original.cloneNode(true);
  clone.removeAttribute("id"); // avoid duplicate ids on the page
  clone.textContent += " (clone)";
  document.getElementById("q28-container").appendChild(clone);
});

// PART5_JS

// 29. The simplest event handler — run a function whenever "click" fires.
document.getElementById("q29-btn").addEventListener("click", () => {
  alert("Button was clicked!");
});

// 30. A counter variable declared OUTSIDE the handler persists between
// clicks (a closure keeps it alive), so it can keep incrementing.
let q30ClickCount = 0;
document.getElementById("q30-btn").addEventListener("click", () => {
  q30ClickCount += 1;
  document.getElementById("q30-output").textContent =
    `Clicks: ${q30ClickCount}`;
});

// 31. The "mousemove" event fires continuously as the cursor moves.
// event.offsetX/offsetY give coordinates relative to the element itself.
document.getElementById("q31-area").addEventListener("mousemove", (event) => {
  document.getElementById("q31-output").textContent =
    `X: ${event.offsetX}, Y: ${event.offsetY}`;
});

// 32 & 33. "mouseenter" fires once when the cursor enters the element;
// "mouseleave" fires once when it exits. We store the original text first
// so we can restore it exactly, rather than hardcoding it in two places.
const q32Text = document.getElementById("q32-text");
const q32OriginalText = q32Text.textContent;
q32Text.addEventListener("mouseenter", () => {
  q32Text.textContent = "You're hovering over me!";
});
q32Text.addEventListener("mouseleave", () => {
  q32Text.textContent = q32OriginalText;
});

// 34. The "keydown" event object includes event.key, which tells us
// exactly which key was pressed (e.g. "a", "Enter", "Shift").
document.getElementById("q34-input").addEventListener("keydown", (event) => {
  document.getElementById("q34-output").textContent = `Last key: ${event.key}`;
});

// 35. Forms reload the page by default on submit. preventDefault() stops
// that default browser behavior so we can handle the submission ourselves.
document.getElementById("q35-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("q35-output").textContent =
    "Form submission intercepted — page did not reload.";
});

// 36. The "input" event fires on every keystroke (and paste), unlike
// "change", which only fires once the field loses focus.
document.getElementById("q36-input").addEventListener("input", (event) => {
  document.getElementById("q36-output").textContent =
    `Current value: ${event.target.value}`;
});

// 37. Checking event.key === "Enter" inside a keydown handler lets us react
// specifically to that one key, ignoring all others.
document.getElementById("q37-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.getElementById("q37-output").textContent = "Enter was pressed!";
  }
});

// 38. Setting disabled = true inside the handler itself prevents any
// further clicks from triggering the listener again.
document.getElementById("q38-btn").addEventListener("click", (event) => {
  event.target.disabled = true;
  event.target.textContent = "Already clicked";
});

// PART6_JS

// 39. On submit, check that both fields have a non-empty, trimmed value.
// trim() removes leading/trailing spaces so " " doesn't count as "filled".
document.getElementById("q39-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("q39-username").value.trim();
  const password = document.getElementById("q39-password").value.trim();
  const errorEl = document.getElementById("q39-error");

  if (username === "" || password === "") {
    errorEl.textContent = "Both fields are required.";
  } else {
    errorEl.style.color = "var(--good)";
    errorEl.textContent = "Login form is valid!";
  }
});

// 40. A regular expression checks for the general shape of an email:
// characters, an "@", more characters, a ".", then more characters.
// This is a practical check, not a fully spec-compliant email validator.
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
document.getElementById("q40-btn").addEventListener("click", () => {
  const email = document.getElementById("q40-email").value;
  const output = document.getElementById("q40-output");
  if (isValidEmail(email)) {
    output.style.color = "var(--good)";
    output.textContent = "Valid email address.";
  } else {
    output.style.color = "var(--bad)";
    output.textContent = "Invalid email address.";
  }
});

// 41. A simple length check — real apps often also require a mix of
// character types, but the question only asks about length.
document.getElementById("q41-btn").addEventListener("click", () => {
  const password = document.getElementById("q41-password").value;
  const output = document.getElementById("q41-output");
  if (password.length >= 8) {
    output.style.color = "var(--good)";
    output.textContent = "Password length is valid.";
  } else {
    output.style.color = "var(--bad)";
    output.textContent = `Password must be at least 8 characters (currently ${password.length}).`;
  }
});

// 42. The error message lives in a dedicated element right below the input,
// so we just toggle its text depending on whether the input is empty.
document.getElementById("q42-btn").addEventListener("click", () => {
  const input = document.getElementById("q42-input");
  const errorEl = document.getElementById("q42-error");
  errorEl.textContent =
    input.value.trim() === "" ? "This field is required." : "";
});

// 43. form.reset() clears every field back to its original state —
// no need to reset each input manually.
document.getElementById("q43-btn").addEventListener("click", () => {
  document.getElementById("q43-form").reset();
});

// 44. On submit, read the input's value and build a small "card" element
// showing what was submitted — a common pattern before sending data to a server.
document.getElementById("q44-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name =
    document.getElementById("q44-name").value.trim() || "(no name entered)";
  document.getElementById("q44-card").innerHTML = `
    <div class="demo" style="margin-top:10px;">
      <strong>Submitted:</strong> ${name}
    </div>
  `;
});

// 45. The "input" event fires on every keystroke, so the character count
// stays in sync as the user types. maxlength="100" on the textarea itself
// stops the browser from allowing more than 100 characters in the first place.
document.getElementById("q45-textarea").addEventListener("input", (event) => {
  const currentLength = event.target.value.length;
  document.getElementById("q45-output").textContent = `${currentLength} / 100`;
});

// PART7_JS

// 46 & 47. Instead of attaching a click listener to every <li> (which would
// miss any items added later), we attach ONE listener to the parent <ul>.
// Because click events bubble up from child to parent, clicking any <li> —
// even one created after this listener was added — still triggers it.
// event.target tells us exactly which element was actually clicked.
document.getElementById("q46-list").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    document.getElementById("q46-output").textContent =
      `You clicked: "${event.target.textContent}"`;
  }
});

let q46NewItemCount = 1;
document.getElementById("q46-add-btn").addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `Dynamically added item ${q46NewItemCount}`;
  q46NewItemCount += 1;
  document.getElementById("q46-list").appendChild(newItem);
  // Notice: no new addEventListener call needed here — delegation handles it.
});

// 48. Clicking the innermost element fires its own handler, then the event
// "bubbles" upward, also firing the outer element's handler — both run.
document.getElementById("q48-outer").addEventListener("click", () => {
  document.getElementById("q48-output").textContent +=
    " → reached OUTER (bubbled)";
});
document.getElementById("q48-inner").addEventListener("click", () => {
  document.getElementById("q48-output").textContent = "Clicked INNER";
});

// 49. Calling event.stopPropagation() inside the innermost handler prevents
// the click from bubbling any further up — the outer handler above never runs
// for clicks that start here.
document
  .getElementById("q49-inner-stopped")
  .addEventListener("click", (event) => {
    event.stopPropagation();
    document.getElementById("q48-output").textContent =
      "Clicked deepest element — propagation stopped here.";
  });

// 50. addEventListener's third argument (true) makes the listener run during
// the CAPTURING phase (top-down) instead of the default bubbling phase
// (bottom-up). Click the inner box and watch the order build left-to-right:
// the capture-phase listener on the outer element fires FIRST, even though
// the outer element is "further away" from the click target.
document.getElementById("q50-outer").addEventListener(
  "click",
  () => {
    // Reset then write, all in this single capture-phase listener, so it
    // always runs first and starts the output fresh on every click.
    document.getElementById("q50-output").textContent = "Outer (capture) → ";
  },
  true, // useCapture = true
);
document.getElementById("q50-inner").addEventListener("click", () => {
  document.getElementById("q50-output").textContent += "Inner (target/bubble)";
});

// PART8_JS

// 51. parentElement walks UP the tree from a node to its direct container.
document.getElementById("q51-child").addEventListener("click", (event) => {
  const parent = event.target.parentElement;
  document.getElementById("q51-output").textContent =
    `Parent's id: "${parent.id}"`;
});

// 52. firstElementChild / lastElementChild skip over text nodes (like
// whitespace between tags) and return actual elements only.
document.getElementById("q52-btn").addEventListener("click", () => {
  const list = document.getElementById("q52-list");
  console.log("52) first child:", list.firstElementChild.textContent);
  console.log("52) last child:", list.lastElementChild.textContent);
});

// 53. previousElementSibling / nextElementSibling move sideways to
// neighboring elements at the same level of the tree.
document.getElementById("q53-middle").addEventListener("click", (event) => {
  const previous = event.target.previousElementSibling;
  const next = event.target.nextElementSibling;
  document.getElementById("q53-output").textContent =
    `Previous: "${previous.textContent}" | Next: "${next.textContent}"`;
});

// 54. children returns an HTMLCollection of only the element children
// (unlike childNodes, which also includes text and comment nodes).
document.getElementById("q54-btn").addEventListener("click", () => {
  const list = document.getElementById("q54-list");
  Array.from(list.children).forEach((child, index) => {
    console.log(`54) child ${index}:`, child.textContent);
  });
});

// PART9_JS

// ------------------------------------------------------------
// 55. TODO LIST
// ------------------------------------------------------------
// State lives in one array of task objects. Every user action (add,
// delete, toggle, filter) updates this array and then calls renderTodos()
// to redraw the list from scratch — a simple, predictable pattern that
// avoids the DOM and the data ever disagreeing with each other.
const todoTasks = [];
let todoIdCounter = 1;
let todoCurrentFilter = "all";

function renderTodos() {
  const listEl = document.getElementById("todo-list");
  listEl.innerHTML = ""; // clear before redrawing

  const visibleTasks = todoTasks.filter((task) => {
    if (todoCurrentFilter === "active") return !task.completed;
    if (todoCurrentFilter === "completed") return task.completed;
    return true; // "all"
  });

  visibleTasks.forEach((task) => {
    const item = document.createElement("li");
    item.style.cssText =
      "display:flex;align-items:center;gap:8px;padding:6px 0;";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      renderTodos();
    });

    const label = document.createElement("span");
    label.textContent = task.text;
    label.style.flex = "1";
    if (task.completed) {
      label.style.textDecoration = "line-through";
      label.style.color = "var(--muted)";
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "ghost";
    deleteBtn.addEventListener("click", () => {
      const index = todoTasks.findIndex((t) => t.id === task.id);
      todoTasks.splice(index, 1); // remove this one task from the array
      renderTodos();
    });

    item.append(checkbox, label, deleteBtn);
    listEl.appendChild(item);
  });
}

document.getElementById("todo-form").addEventListener("submit", (event) => {
  event.preventDefault(); // stop the form from reloading the page
  const input = document.getElementById("todo-input");
  const text = input.value.trim();
  if (text === "") return; // ignore empty submissions

  todoTasks.push({ id: todoIdCounter, text, completed: false });
  todoIdCounter += 1;
  input.value = "";
  renderTodos();
});

document.querySelectorAll(".todo-filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    todoCurrentFilter = btn.dataset.filter; // "all" | "active" | "completed"
    renderTodos();
  });
});

document.getElementById("todo-clear-btn").addEventListener("click", () => {
  todoTasks.length = 0; // empty the array in place
  renderTodos();
});

renderTodos(); // initial paint (empty list)

// ------------------------------------------------------------
// 56. COUNTER APP
// ------------------------------------------------------------
let counterValue = 0;
const counterHistory = []; // keeps a log of every change, most recent first

function renderCounter() {
  document.getElementById("counter-value").textContent = counterValue;
  document.getElementById("counter-history").textContent =
    counterHistory.length > 0 ? counterHistory.join(", ") : "(none yet)";
}

function updateCounter(amount, label) {
  counterValue += amount;
  counterHistory.unshift(`${label} → ${counterValue}`); // add to the front
  renderCounter();
}

document
  .getElementById("counter-inc")
  .addEventListener("click", () => updateCounter(1, "+1"));
document
  .getElementById("counter-dec")
  .addEventListener("click", () => updateCounter(-1, "-1"));
document.getElementById("counter-reset").addEventListener("click", () => {
  counterValue = 0;
  counterHistory.unshift("reset → 0");
  renderCounter();
});

renderCounter(); // initial paint

// ------------------------------------------------------------
// 57. IMAGE GALLERY
// ------------------------------------------------------------
// Using placeholder images with different colors/labels so the demo works
// without needing real uploaded photos.
const galleryImages = [
  "https://placehold.co/320x200/5b8cff/0f1420?text=Photo+1",
  "https://placehold.co/320x200/4ade80/0f1420?text=Photo+2",
  "https://placehold.co/320x200/f87171/0f1420?text=Photo+3",
  "https://placehold.co/320x200/facc15/0f1420?text=Photo+4",
];
let galleryCurrentIndex = 0;

function renderGallery() {
  document.getElementById("gallery-main").src =
    galleryImages[galleryCurrentIndex];

  const thumbsContainer = document.getElementById("gallery-thumbs");
  thumbsContainer.innerHTML = "";
  galleryImages.forEach((src, index) => {
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.width = 50;
    thumb.height = 32;
    thumb.style.cssText = `border-radius:4px;cursor:pointer;opacity:${index === galleryCurrentIndex ? 1 : 0.5};`;
    thumb.addEventListener("click", () => {
      galleryCurrentIndex = index;
      renderGallery();
    });
    thumbsContainer.appendChild(thumb);
  });
}

function showNextImage() {
  // The % (modulo) wraps the index back to 0 after the last image,
  // so "next" from the last photo loops around to the first.
  galleryCurrentIndex = (galleryCurrentIndex + 1) % galleryImages.length;
  renderGallery();
}

function showPreviousImage() {
  // Adding galleryImages.length before the modulo avoids a negative index
  // when going "previous" from the first image.
  galleryCurrentIndex =
    (galleryCurrentIndex - 1 + galleryImages.length) % galleryImages.length;
  renderGallery();
}

document
  .getElementById("gallery-next")
  .addEventListener("click", showNextImage);
document
  .getElementById("gallery-prev")
  .addEventListener("click", showPreviousImage);

// Keyboard navigation only responds when the main image has focus,
// so arrow keys elsewhere on the page (like in a text input) aren't hijacked.
document.getElementById("gallery-main").addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") showNextImage();
  if (event.key === "ArrowLeft") showPreviousImage();
});

renderGallery(); // initial paint

// ------------------------------------------------------------
// 58. DIGITAL CLOCK
// ------------------------------------------------------------
let clockUses24HourFormat = true;

function renderClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  let amPmLabel = "";

  if (!clockUses24HourFormat) {
    amPmLabel = hours >= 12 ? " PM" : " AM";
    hours = hours % 12;
    if (hours === 0) hours = 12; // 0 in 12-hour format should display as 12
  }

  const hoursDisplay = String(hours).padStart(2, "0");
  document.getElementById("clock-time").textContent =
    `${hoursDisplay}:${minutes}:${seconds}${amPmLabel}`;

  // toLocaleDateString formats the date in a readable, locale-aware way
  // instead of manually assembling it from getDate()/getMonth()/getFullYear().
  document.getElementById("clock-date").textContent = now.toLocaleDateString(
    undefined,
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );
}

document.getElementById("clock-toggle-format").addEventListener("click", () => {
  clockUses24HourFormat = !clockUses24HourFormat;
  renderClock();
});

renderClock();
setInterval(renderClock, 1000); // re-render every second to keep the time live

// ------------------------------------------------------------
// 59. NOTES APP (with localStorage persistence)
// ------------------------------------------------------------
// localStorage only stores strings, so we JSON.stringify() the notes array
// before saving and JSON.parse() it back into an array when loading.
const NOTES_STORAGE_KEY = "dom-practice-notes";

function loadNotes() {
  const stored = localStorage.getItem(NOTES_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveNotes(notes) {
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
}

let notesList = loadNotes();
let notesIdCounter =
  notesList.length > 0 ? Math.max(...notesList.map((n) => n.id)) + 1 : 1;

function renderNotes(searchTerm = "") {
  const container = document.getElementById("notes-list");
  container.innerHTML = "";

  const filteredNotes = notesList.filter((note) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (filteredNotes.length === 0) {
    container.innerHTML =
      '<p style="color:var(--muted);font-size:13px;">No notes found.</p>';
    return;
  }

  filteredNotes.forEach((note) => {
    const card = document.createElement("div");
    card.className = "demo";
    card.style.display = "flex";
    card.style.gap = "8px";
    card.style.alignItems = "center";

    const textEl = document.createElement("span");
    textEl.textContent = note.text;
    textEl.style.flex = "1";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "ghost";
    editBtn.addEventListener("click", () => {
      const updatedText = prompt("Edit note:", note.text);
      // prompt() returns null if the user clicks Cancel — only save if
      // they actually typed something and confirmed.
      if (updatedText !== null && updatedText.trim() !== "") {
        note.text = updatedText.trim();
        saveNotes(notesList);
        renderNotes(document.getElementById("notes-search").value);
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "ghost";
    deleteBtn.addEventListener("click", () => {
      notesList = notesList.filter((n) => n.id !== note.id);
      saveNotes(notesList);
      renderNotes(document.getElementById("notes-search").value);
    });

    card.append(textEl, editBtn, deleteBtn);
    container.appendChild(card);
  });
}

document.getElementById("notes-add-btn").addEventListener("click", () => {
  const input = document.getElementById("notes-input");
  const text = input.value.trim();
  if (text === "") return;

  notesList.push({ id: notesIdCounter, text });
  notesIdCounter += 1;
  saveNotes(notesList); // persist immediately so a page refresh doesn't lose it
  input.value = "";
  renderNotes(document.getElementById("notes-search").value);
});

document.getElementById("notes-search").addEventListener("input", (event) => {
  renderNotes(event.target.value);
});

renderNotes(); // initial paint — shows any notes saved from a previous visit

// ------------------------------------------------------------
// 60. QUIZ APP
// ------------------------------------------------------------
const quizQuestions = [
  {
    question: "Which keyword declares a variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    correctIndex: 2,
  },
  {
    question: "Which method converts a JSON string into a JS object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "Object.toJSON()",
      "JSON.toObject()",
    ],
    correctIndex: 1,
  },
  {
    question: "Which operator checks both value AND type?",
    options: ["==", "=", "===", "!="],
    correctIndex: 2,
  },
  {
    question: "Which array method adds an item to the end?",
    options: ["shift()", "unshift()", "pop()", "push()"],
    correctIndex: 3,
  },
];

// selectedAnswers[i] stores which option index the user picked for question i
// (or null if unanswered yet), so navigating back and forth preserves choices.
let quizCurrentIndex = 0;
let quizSelectedAnswers = new Array(quizQuestions.length).fill(null);
let quizFinished = false;

function renderQuiz() {
  const progressEl = document.getElementById("quiz-progress");
  const containerEl = document.getElementById("quiz-question-container");
  const resultsEl = document.getElementById("quiz-results");
  const restartBtn = document.getElementById("quiz-restart-btn");
  const nextBtn = document.getElementById("quiz-next-btn");
  const prevBtn = document.getElementById("quiz-prev-btn");

  if (quizFinished) {
    // Score is the count of answers that match their question's correctIndex.
    const score = quizSelectedAnswers.reduce((total, answer, index) => {
      return answer === quizQuestions[index].correctIndex ? total + 1 : total;
    }, 0);

    progressEl.textContent = "Quiz complete!";
    containerEl.innerHTML = "";
    prevBtn.classList.add("hidden");
    nextBtn.classList.add("hidden");
    restartBtn.classList.remove("hidden");

    const reviewHtml = quizQuestions
      .map((q, index) => {
        const userAnswerIndex = quizSelectedAnswers[index];
        const wasCorrect = userAnswerIndex === q.correctIndex;
        return `
          <div class="demo" style="margin-top:8px;">
            <strong>${index + 1}. ${q.question}</strong><br/>
            Your answer: ${userAnswerIndex !== null ? q.options[userAnswerIndex] : "(skipped)"}
            — <span style="color:${wasCorrect ? "var(--good)" : "var(--bad)"}">${wasCorrect ? "Correct" : "Incorrect"}</span><br/>
            ${!wasCorrect ? `Correct answer: ${q.options[q.correctIndex]}` : ""}
          </div>
        `;
      })
      .join("");

    resultsEl.innerHTML = `
      <p style="font-size:18px;">Score: ${score} / ${quizQuestions.length}</p>
      ${reviewHtml}
    `;
    return;
  }

  // Normal (in-progress) quiz view
  restartBtn.classList.add("hidden");
  prevBtn.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
  resultsEl.innerHTML = "";

  progressEl.textContent = `Question ${quizCurrentIndex + 1} of ${quizQuestions.length}`;
  prevBtn.disabled = quizCurrentIndex === 0; // can't go before the first question
  nextBtn.textContent =
    quizCurrentIndex === quizQuestions.length - 1 ? "Finish" : "Next →";

  const currentQuestion = quizQuestions[quizCurrentIndex];
  containerEl.innerHTML = `<p style="font-size:15px;">${currentQuestion.question}</p>`;

  currentQuestion.options.forEach((optionText, optionIndex) => {
    const optionBtn = document.createElement("button");
    optionBtn.textContent = optionText;
    optionBtn.style.display = "block";
    optionBtn.style.width = "100%";
    optionBtn.style.textAlign = "left";
    optionBtn.style.margin = "6px 0";
    // Highlight the previously selected option (if the user is revisiting
    // this question) so their choice is visibly remembered.
    optionBtn.className =
      quizSelectedAnswers[quizCurrentIndex] === optionIndex ? "" : "ghost";

    optionBtn.addEventListener("click", () => {
      quizSelectedAnswers[quizCurrentIndex] = optionIndex;
      renderQuiz(); // re-render so the selected option is highlighted
    });

    containerEl.appendChild(optionBtn);
  });
}

document.getElementById("quiz-next-btn").addEventListener("click", () => {
  if (quizCurrentIndex === quizQuestions.length - 1) {
    quizFinished = true; // "Finish" was clicked on the last question
  } else {
    quizCurrentIndex += 1;
  }
  renderQuiz();
});

document.getElementById("quiz-prev-btn").addEventListener("click", () => {
  if (quizCurrentIndex > 0) {
    quizCurrentIndex -= 1;
    renderQuiz();
  }
});

document.getElementById("quiz-restart-btn").addEventListener("click", () => {
  quizCurrentIndex = 0;
  quizSelectedAnswers = new Array(quizQuestions.length).fill(null);
  quizFinished = false;
  renderQuiz();
});

renderQuiz(); // initial paint
