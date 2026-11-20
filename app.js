const seedItems = [
  {
    id: "found-sticker-bottle",
    type: "found",
    title: "Water Bottle with Cupertino ASB Stickers",
    category: "Water Bottles",
    color: "Clear with stickers",
    description: "Insulated bottle covered in stickers incl. a Cupertino ASB sticker and a yellow carabiner lid.",
    location: "200s Building · Floor 1",
    detail: "Room 213 windowsill",
    when: "Yesterday, 1:20 PM",
    age: "10h ago",
    image: "https://images.unsplash.com/photo-1687048982243-a0b6f61fb345?w=800&q=80",
    imageAlt: "Water bottle with Cupertino ASB stickers"
  },
  {
    id: "found-hoodie",
    type: "found",
    title: "CHS Pioneers Hoodie (Red/Gold)",
    category: "Apparel",
    color: "Red and gold",
    description: "Red pullover hoodie, size M, 'CUPERTINO PIONEERS' printed in gold on the back. Small ink stain on left cuff.",
    location: "Gym · Floor 1",
    detail: "Left on the bleachers after the rally",
    when: "Yesterday",
    age: "1d ago",
    image: "https://images.pexels.com/photos/10801614/pexels-photo-10801614.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Red hoodie"
  },
  {
    id: "found-ti84",
    type: "found",
    title: "TI-84 Plus CE Graphing Calculator",
    category: "Electronics",
    color: "Black",
    description: "Black TI-84 Plus CE with a slide cover. Initials scratched on the back near the battery door.",
    location: "300s Building · Floor 2",
    detail: "Room 317, under a desk in row 4 after AP Calc",
    when: "Monday",
    age: "2d ago",
    image: "https://images.unsplash.com/photo-1648201637025-1c77b9be3013?w=800&q=80",
    imageAlt: "Graphing calculator and pencil"
  },
  {
    id: "found-airpods",
    type: "found",
    title: "Apple AirPods with Charging Case",
    category: "Electronics",
    color: "White",
    description: "White AirPods case with both earbuds. No case cover, slight scuff on the hinge.",
    location: "Wagon Wheel · Outdoor",
    detail: "Lunch benches by the Wagon Wheel",
    when: "Sunday",
    age: "3d ago",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80",
    imageAlt: "White wireless earbuds and charging case"
  },
  {
    id: "found-racket",
    type: "found",
    title: "Wilson Tennis Racket (Blue/White)",
    category: "Sports Gear",
    color: "Blue and white",
    description: "Blue and white racket with a Pioneers Tennis grip tape, string slightly frayed.",
    location: "Girls' Lockers · Floor 1",
    detail: "Bench outside the girls' locker room",
    when: "Saturday",
    age: "4d ago",
    image: "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=800&q=80",
    imageAlt: "Blue and white tennis racket on a court"
  },
  {
    id: "found-backpack",
    type: "found",
    title: "Navy Backpack with Robotics Patch",
    category: "Bags",
    color: "Navy",
    description: "Navy backpack, small yellow logo, CHS Robotics team patch. Contains a chemistry binder.",
    location: "7200s Building · Floor 2",
    detail: "Room 7202 near the lab benches",
    when: "Friday",
    age: "5d ago",
    claimedBy: "Ethan",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    imageAlt: "Navy backpack with a small logo"
  },
  {
    id: "lost-burgundy-hoodie",
    type: "lost",
    title: "Burgundy Graphic Hoodie",
    category: "Apparel",
    color: "Burgundy",
    description: "Burgundy hoodie with cream text printed on the back, size S.",
    location: "500s Building · Floor 1",
    detail: "Room 507, left on chair",
    when: "Yesterday",
    age: "12h ago",
    image: "assets/hoodie.jpg",
    imageAlt: "Burgundy graphic hoodie"
  },
  {
    id: "lost-maroon-backpack",
    type: "lost",
    title: "Maroon Leather Backpack",
    category: "Bags",
    color: "Maroon",
    description: "Maroon leather backpack with a Pioneers keychain. Has my APUSH textbook inside.",
    location: "400s Building · Floor 1",
    detail: "Probably left in Room 419 after English",
    when: "Yesterday",
    age: "1d ago",
    image: "assets/backpack.jpg",
    imageAlt: "Maroon backpack"
  }
];

const campusLayouts = {
  "6200s Building": { left: "12%", top: "7%", width: "36%", height: "18%", depth: "44px" },
  "7200s Building": { left: "27%", top: "25%", width: "19%", height: "12%", depth: "22px" },
  "500s Building": { left: "64%", top: "15%", width: "8%", height: "16%", depth: "22px" },
  "900s Building": { left: "9%", top: "37%", width: "5%", height: "22%", depth: "22px" },
  "400s Building": { left: "19%", top: "38%", width: "11%", height: "22%", depth: "22px" },
  "300s Building": { left: "33%", top: "38%", width: "10%", height: "22%", depth: "22px" },
  "200s Building": { left: "48%", top: "38%", width: "10%", height: "22%", depth: "22px" },
  "100s Building": { left: "62%", top: "38%", width: "10%", height: "22%", depth: "22px" },
  "700s Building": { left: "14%", top: "68%", width: "8%", height: "7%", depth: "22px" },
  "800s Building": { left: "25%", top: "69%", width: "8%", height: "8%", depth: "22px" },
  "600s Building": { left: "38%", top: "69%", width: "8%", height: "9%", depth: "22px" },
  "Wagon Wheel": { left: "68%", top: "67%", width: "14%", height: "8%", depth: "10px" },
  Dance: { left: "83%", top: "58%", width: "8%", height: "8%", depth: "22px" },
  "Girls' Lockers": { left: "82%", top: "69%", width: "12%", height: "7%", depth: "22px" },
  Gym: { left: "79%", top: "83%", width: "18%", height: "10%", depth: "22px" }
};

const campusFloors = {
  "100s Building": ["1", "2"],
  "200s Building": ["1"],
  "300s Building": ["1"],
  "400s Building": ["1"],
  "500s Building": ["1"],
  "600s Building": ["1"],
  "700s Building": ["1"],
  "800s Building": ["1"],
  "900s Building": ["1"],
  "6200s Building": ["1", "2"],
  "7200s Building": ["1", "2"],
  "Wagon Wheel": ["1"],
  Dance: ["1"],
  "Girls' Lockers": ["1"],
  Gym: ["1", "2"]
};

document.querySelectorAll(".map-building").forEach(building => {
  const layout = campusLayouts[building.dataset.location];
  if (!layout) throw new Error(`Missing 3D campus layout for ${building.dataset.location}.`);
  Object.entries(layout).forEach(([property, value]) => {
    building.style.setProperty(`--${property}`, value);
  });
});

const storageKey = "chs-lost-found-items";
const grid = document.querySelector("#items-grid");
const searchInput = document.querySelector("#search-input");
const categoryFilter = document.querySelector("#category-filter");
const emptyState = document.querySelector("#empty-state");
const activeFilter = document.querySelector("#active-filter");
const reportDialog = document.querySelector("#report-dialog");
const claimDialog = document.querySelector("#claim-dialog");
const reportForm = document.querySelector("#report-form");
const claimForm = document.querySelector("#claim-form");
const toast = document.querySelector("#toast");
const reportPhotoInput = document.querySelector("#report-photo");
const reportBuildingSelect = document.querySelector("#report-building");
const reportFloorSelect = document.querySelector("#report-floor");
const photoPreview = document.querySelector("#photo-preview");
const photoPickerText = document.querySelector("#photo-picker-text");
const identificationStatus = document.querySelector("#identification-status");
let activeTab = "found";
let selectedLocation = "";
let toastTimeout;
let photoPreviewUrl = "";
let items = loadItems();

function loadItems() {
  try {
    const savedItems = localStorage.getItem(storageKey);
    if (!savedItems) return [...seedItems];
    const parsedItems = JSON.parse(savedItems);
    if (!Array.isArray(parsedItems) || !parsedItems.every(isValidItem)) {
      throw new Error("Saved lost and found data has an unexpected format.");
    }
    return parsedItems;
  } catch (error) {
    console.error("Could not load saved lost and found reports.", error);
    return [...seedItems];
  }
}

function photoForCategory(category) {
  return ({
    "Water Bottles": "assets/water-bottle.jpg",
    Electronics: "assets/calculator.jpg",
    "Sports Gear": "assets/tennis-racket.jpg",
    Apparel: "assets/hoodie.jpg",
    Bags: "assets/backpack.jpg"
  })[category] || "assets/water-bottle.jpg";
}

function isValidItem(item) {
  return item && typeof item.id === "string" &&
    (item.type === "found" || item.type === "lost") &&
    typeof item.title === "string" && typeof item.category === "string";
}

function saveItems() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(items));
  } catch (error) {
    console.error("Could not save this lost and found report.", error);
    showToast("The report could not be saved in this browser.");
    return false;
  }
  return true;
}

function safeText(value = "") {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function categoryIcon(category) {
  return ({
    "Water Bottles": '<svg viewBox="0 0 24 24"><path d="M8 3h8l1 18H7L8 3Zm1 4h6M10 3V2h4v1"/></svg>',
    Electronics: '<svg viewBox="0 0 24 24"><rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M10 5h4m-3 13.5h2"/></svg>',
    "Sports Gear": '<svg viewBox="0 0 24 24"><path d="M8 3h8v4a4 4 0 0 1-8 0V3ZM8 5H5v2a4 4 0 0 0 4 4m7-6h3v2a4 4 0 0 1-4 4m-3 0v4m-4 4h8m-7-4h6v4H9z"/></svg>',
    Apparel: '<svg viewBox="0 0 24 24"><path d="m8 4 4 1 4-1 4 2-2 5-2-1v10H8V10l-2 1-2-5 4-2Z"/></svg>',
    Bags: '<svg viewBox="0 0 24 24"><rect x="5" y="6" width="14" height="15" rx="3"/><path d="M9 6V4a3 3 0 0 1 6 0v2M5 11h14m-10 2v3m6-3v3"/></svg>'
  })[category] || '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>';
}

function filteredItems() {
  const search = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  return items.filter(item => {
    const matchesTab = item.type === activeTab;
    const matchesSearch = !search || [item.title, item.description, item.location, item.detail, item.color]
      .some(value => (value || "").toLowerCase().includes(search));
    const matchesCategory = category === "all" || item.category === category;
    const matchesLocation = !selectedLocation || item.location.startsWith(selectedLocation);
    return matchesTab && matchesSearch && matchesCategory && matchesLocation;
  });
}

function renderItems() {
  const visibleItems = filteredItems();
  grid.innerHTML = visibleItems.map(item => `
    <article class="item-card ${item.claimedBy ? "claimed" : ""}">
      <div class="item-photo-wrap">
        <img class="item-photo" src="${safeText(item.image || photoForCategory(item.category))}" alt="${safeText(item.imageAlt || `Reference photo for ${item.title}`)}">
        <span class="photo-category"><span class="category-icon" aria-hidden="true">${categoryIcon(item.category)}</span>${safeText(item.category)}</span>
        <button class="delete-item" type="button" data-delete="${safeText(item.id)}" aria-label="Delete post">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m3 0-.8 13H6.8L6 7m4 4v5m4-5v5"/></svg>
        </button>
        ${item.claimedBy ? `<span class="claimed-banner">✓ Claimed by ${safeText(item.claimedBy)}</span>` : ""}
      </div>
      <div class="item-card-body">
        <div class="item-card-head"><h3 class="item-title">${safeText(item.title)}</h3><span class="item-age">${safeText(item.age || item.when)}</span></div>
        <p class="item-description">${safeText(item.description || "No additional details provided.")}</p>
        <div class="item-meta">
          <div><div class="item-location"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>${safeText(item.location)}</div><div class="item-detail">${safeText(item.detail || `${item.color || "Details"} · ${item.when || "Recently"}`)}</div></div>
          ${item.type === "found" && !item.claimedBy ? `<button class="item-action" type="button" data-claim="${safeText(item.id)}">This is mine</button>` : item.type === "lost" ? `<button class="item-action" type="button" data-found-report="${safeText(item.id)}">I found this</button>` : ""}
        </div>
      </div>
    </article>
  `).join("");
  emptyState.hidden = visibleItems.length > 0;
  emptyState.innerHTML = activeTab === "lost"
    ? `<strong>Nothing here yet</strong><span>No matching lost reports.</span><button class="button button-outline" type="button" data-report="lost">Report a lost item</button>`
    : `<strong>Nothing here yet</strong><span>No matching found items.</span>`;
  emptyState.querySelector("[data-report]")?.addEventListener("click", () => openReportDialog("lost"));
  updateCounts();
  renderActiveFilter();
}

function updateCounts() {
  const foundCount = items.filter(item => item.type === "found" && !item.claimedBy).length;
  const lostCount = items.filter(item => item.type === "lost").length;
  document.querySelector("#found-count").textContent = foundCount;
  document.querySelector("#lost-count").textContent = lostCount;
  document.querySelector("#found-tab-count").textContent = foundCount;
  document.querySelector("#lost-tab-count").textContent = lostCount;
  document.querySelectorAll(".map-building").forEach(building => {
    const location = building.dataset.location;
    const count = items.filter(item => item.location.startsWith(location)).length;
    const badge = building.querySelector(".building-count");
    const markerLocations = [
      "6200s Building",
      "7200s Building",
      "300s Building",
      "200s Building",
      "100s Building",
      "Wagon Wheel",
      "Dance",
      "Girls' Lockers"
    ];
    badge.textContent = count || (markerLocations.includes(location) ? "!" : "");
    badge.classList.toggle("static-marker", count === 0 && markerLocations.includes(location));
    building.classList.toggle("has-items", count > 0);
    building.setAttribute("aria-label", `${building.querySelector("strong").textContent}, ${count} reported ${count === 1 ? "item" : "items"}`);
  });
}

function renderActiveFilter() {
  const filters = [];
  if (categoryFilter.value !== "all") filters.push(categoryFilter.value);
  if (filters.length === 0) {
    activeFilter.hidden = true;
    activeFilter.innerHTML = "";
    return;
  }
  activeFilter.hidden = false;
  activeFilter.innerHTML = `${filters.map(safeText).join(" · ")} <button class="clear-filter" type="button">Clear filters</button>`;
}

function updateMapFilter() {
  const mapFilter = document.querySelector("#map-filter");
  mapFilter.hidden = !selectedLocation;
  mapFilter.textContent = selectedLocation ? `${selectedLocation}  ×` : "";
}

function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll(".tab").forEach(button => {
    const selected = button.dataset.tab === tab;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-selected", String(selected));
  });
  renderItems();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("visible"), 3500);
}

function openReportDialog(type, relatedItem) {
  if (photoPreviewUrl) URL.revokeObjectURL(photoPreviewUrl);
  photoPreviewUrl = "";
  reportForm.reset();
  photoPreview.hidden = true;
  photoPreview.removeAttribute("src");
  photoPickerText.textContent = "Add photo";
  identificationStatus.textContent = "Automatic identification is not connected in this demo. Add a photo and enter the item details below.";
  reportFloorSelect.disabled = true;
  reportFloorSelect.innerHTML = '<option value="" selected disabled>Choose floor</option>';
  document.querySelector("#report-type").value = type;
  document.querySelector("#report-dialog-title").textContent = type === "lost" ? "Report a lost item" : "Report a found item";
  document.querySelector(".dialog-intro").textContent = type === "lost"
    ? "Add a photo and details so the right person can help you find it."
    : "Upload a photo and add details to help the right person recognize the item.";
  document.querySelector(".dialog-submit").textContent = type === "lost" ? "Post lost item" : "Post found item";
  if (relatedItem) {
    reportForm.elements.namedItem("title").value = relatedItem.title;
    reportForm.elements.namedItem("category").value = relatedItem.category;
    const [building, floorText] = relatedItem.location.split(" · Floor ");
    reportBuildingSelect.value = building;
    populateReportFloors();
    reportFloorSelect.value = floorText || "";
  }
  reportDialog.showModal();
}

document.querySelectorAll("[data-report]").forEach(button => {
  button.addEventListener("click", () => openReportDialog(button.dataset.report));
});

function readPhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      if (typeof reader.result !== "string") {
        reject(new Error("The selected photo could not be converted to an image."));
        return;
      }
      resolve(reader.result);
    });
    reader.addEventListener("error", () => reject(reader.error || new Error("The selected photo could not be read.")));
    reader.readAsDataURL(file);
  });
}

document.querySelectorAll(".dialog-close").forEach(button => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

document.querySelectorAll("[data-close-dialog]").forEach(button => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

function populateReportFloors() {
  const floors = campusFloors[reportBuildingSelect.value];
  reportFloorSelect.innerHTML = '<option value="" selected disabled>Choose floor</option>';
  if (!floors) {
    reportFloorSelect.disabled = true;
    return;
  }
  floors.forEach(floor => {
    const option = document.createElement("option");
    option.value = floor;
    option.textContent = floor === "1" ? "1st floor" : "2nd floor";
    reportFloorSelect.append(option);
  });
  reportFloorSelect.disabled = reportFloorSelect.options.length === 1;
}

reportBuildingSelect.addEventListener("change", populateReportFloors);

reportPhotoInput.addEventListener("change", () => {
  const file = reportPhotoInput.files[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    reportPhotoInput.value = "";
    showToast("Choose an image file for the item photo.");
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    reportPhotoInput.value = "";
    showToast("Choose a photo smaller than 2 MB.");
    return;
  }
  if (photoPreviewUrl) URL.revokeObjectURL(photoPreviewUrl);
  photoPreviewUrl = URL.createObjectURL(file);
  photoPreview.src = photoPreviewUrl;
  photoPreview.hidden = false;
  photoPickerText.textContent = "Change photo";
  identificationStatus.textContent = "Photo added. Automatic identification is not connected in this demo; enter the item details below.";
});

document.querySelectorAll(".tab").forEach(button => {
  button.addEventListener("click", () => switchTab(button.dataset.tab));
});

document.querySelectorAll(".main-nav [data-view]").forEach(link => {
  link.addEventListener("click", () => switchTab(link.dataset.view));
});

searchInput.addEventListener("input", renderItems);
categoryFilter.addEventListener("change", renderItems);

document.querySelector("#map-buildings").addEventListener("click", event => {
  const button = event.target.closest("[data-location]");
  if (!button) return;
  const location = button.dataset.location;
  selectedLocation = selectedLocation === location ? "" : location;
  document.querySelectorAll(".map-building").forEach(building => {
    building.classList.toggle("selected", building.dataset.location === selectedLocation);
  });
  updateMapFilter();
  renderItems();
});

document.querySelector("#map-filter").addEventListener("click", () => {
  selectedLocation = "";
  document.querySelectorAll(".map-building").forEach(building => building.classList.remove("selected"));
  updateMapFilter();
  renderItems();
});

activeFilter.addEventListener("click", event => {
  if (!event.target.closest(".clear-filter")) return;
  selectedLocation = "";
  categoryFilter.value = "all";
  document.querySelectorAll(".map-building").forEach(building => building.classList.remove("selected"));
  updateMapFilter();
  renderItems();
});

grid.addEventListener("click", event => {
  const deleteButton = event.target.closest("[data-delete]");
  if (deleteButton) {
    const item = items.find(entry => entry.id === deleteButton.dataset.delete);
    if (!item) {
      showToast("That item is no longer available.");
      return;
    }
    if (!window.confirm(`Delete "${item.title}" from the list?`)) return;
    const itemIndex = items.indexOf(item);
    items = items.filter(entry => entry.id !== item.id);
    if (!saveItems()) {
      items.splice(itemIndex, 0, item);
      renderItems();
      return;
    }
    renderItems();
    showToast("Post deleted.");
    return;
  }
  const button = event.target.closest("[data-claim]");
  if (!button) {
    const foundReportButton = event.target.closest("[data-found-report]");
    if (!foundReportButton) return;
    const lostItem = items.find(entry => entry.id === foundReportButton.dataset.foundReport);
    if (!lostItem) {
      showToast("That lost report is no longer available.");
      return;
    }
    openReportDialog("found", lostItem);
    return;
  }
  const item = items.find(entry => entry.id === button.dataset.claim);
  if (!item) {
    showToast("That item is no longer available.");
    return;
  }
  claimForm.dataset.itemId = item.id;
  claimForm.reset();
  document.querySelector("#claim-item-name").textContent = `${item.title} · ${item.location}`;
  claimDialog.showModal();
});

reportForm.addEventListener("submit", async event => {
  event.preventDefault();
  const formData = new FormData(reportForm);
  const type = formData.get("type");
  const title = String(formData.get("title")).trim();
  const building = String(formData.get("building"));
  const floor = String(formData.get("floor"));
  const spot = String(formData.get("spot")).trim();
  const when = "Just now";
  if (!title || !building || !floor || !spot) return;
  const location = `${building} · Floor ${floor}`;
  const photoFile = formData.get("photo");
  let photo = "";
  if (photoFile instanceof File && photoFile.size > 0) {
    if (!photoFile.type.startsWith("image/")) {
      showToast("Choose an image file for the item photo.");
      return;
    }
    if (photoFile.size > 2 * 1024 * 1024) {
      showToast("Choose a photo smaller than 2 MB.");
      return;
    }
    try {
      photo = await readPhoto(photoFile);
    } catch (error) {
      console.error("Could not read the selected item photo.", error);
      showToast("The selected photo could not be read.");
      return;
    }
  }
  const newItem = {
    id: `report-${Date.now()}`,
    type,
    title,
    category: String(formData.get("category")),
    color: String(formData.get("color")).trim(),
    description: String(formData.get("description")).trim(),
    location,
    detail: spot,
    when,
    age: "Just now",
    image: photo || photoForCategory(String(formData.get("category"))),
    imageAlt: photo ? `Uploaded photo of ${title}` : `Reference photo for ${title}`,
    photoUploaded: Boolean(photo),
    building,
    floor,
    reporterName: String(formData.get("reporterName")).trim(),
    reporterEmail: String(formData.get("reporterEmail")).trim()
  };
  items = [newItem, ...items];
  if (!saveItems()) {
    items = items.filter(item => item.id !== newItem.id);
    return;
  }
  reportDialog.close();
  searchInput.value = "";
  categoryFilter.value = "all";
  selectedLocation = "";
  document.querySelectorAll(".map-building").forEach(building => building.classList.remove("selected"));
  updateMapFilter();
  switchTab(type);
  showToast(type === "found" ? "Found item report added to this browser." : "Lost item report added to this browser.");
  document.querySelector("#items").scrollIntoView({ behavior: "smooth" });
});

claimForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!claimForm.reportValidity()) return;
  claimDialog.close();
  showToast("Claim details noted. Please verify and collect the item at the 100s office.");
});

renderItems();
