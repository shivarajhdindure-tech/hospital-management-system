/* ============================================================
   HOSPITAL MANAGEMENT SYSTEM — js/app.js
   Shared vanilla JavaScript used across all pages.
   No frameworks, no libraries — beginner-friendly & well-commented.
   ============================================================ */

/* ─────────────────────────────────────────────────────────────
   2.  HELPER UTILITIES
───────────────────────────────────────────────────────────── */

/**
 * Get initials from a full name string.
 * e.g. "Ayaan Kapoor" → "AK"
 */
function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Return a badge HTML string for a given appointment status.
 * @param {string} status - "confirmed" | "pending" | "cancelled" | "completed"
 */
function buildBadge(status) {
  const labels = {
    confirmed: "Confirmed",
    pending: "Pending",
    cancelled: "Cancelled",
    completed: "Completed",
  };
  return `<span class="badge ${status}">${labels[status] || status}</span>`;
}

/**
 * Format a number with commas.
 * e.g. 1284 → "1,284"
 */
function formatNumber(n) {
  return n.toLocaleString("en-IN");
}

/* ─────────────────────────────────────────────────────────────
   3.  SIDEBAR & TOPBAR BEHAVIOUR
───────────────────────────────────────────────────────────── */

/**
 * Initialise mobile sidebar toggle.
 * Adds/removes the .open class on sidebar and .active on overlay.
 */
function initSidebar() {
  const toggleBtn = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  if (!toggleBtn || !sidebar) return; // guard if elements don't exist

  /* Open sidebar */
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // prevent scroll behind
  });

  /* Close sidebar when overlay is clicked */
  overlay.addEventListener("click", closeSidebar);

  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

/**
 * Mark the current page's nav item as active.
 * Matches using the href of each .nav-item anchor vs current filename.
 */
function setActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navItems = document.querySelectorAll(".nav-item[data-page]");

  navItems.forEach((item) => {
    if (item.dataset.page === currentPage) {
      item.classList.add("active");
    }
  });
}

/* ─────────────────────────────────────────────────────────────
   4.  MODAL SYSTEM
   Open/close any modal by ID.
───────────────────────────────────────────────────────────── */

/**
 * Open a modal overlay by its ID.
 * @param {string} modalId - the id attribute of the .modal-overlay element
 */
function openModal(modalId) {
  const overlay = document.getElementById(modalId);
  if (!overlay) return;
  overlay.classList.add("active");
  document.body.style.overflow = "hidden"; // lock page scroll
}

/**
 * Close a modal overlay by its ID.
 * @param {string} modalId
 */
function closeModal(modalId) {
  const overlay = document.getElementById(modalId);
  if (!overlay) return;
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

/**
 * Attach close behaviour to all .modal-close buttons and
 * close when clicking the overlay background.
 */
function initModals() {
  /* Close buttons inside modals */
  document.querySelectorAll(".modal-close").forEach((btn) => {
    btn.addEventListener("click", () => {
      const overlay = btn.closest(".modal-overlay");
      if (overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });

  /* Clicking the dark overlay itself also closes the modal */
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });

  /* ESC key closes any open modal */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.active").forEach((overlay) => {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      });
    }
  });
}

/* ─────────────────────────────────────────────────────────────
   5.  DASHBOARD PAGE FUNCTIONS
───────────────────────────────────────────────────────────── */

/**
 * Animate a number counting up from start to end.
 * @param {HTMLElement} el     - the element to update
 * @param {number}      start  - starting value
 * @param {number}      end    - ending value
 * @param {number}      duration - ms
 */

async function renderAppointmentsTable() {
  const tbody = document.getElementById("appointmentsTableBody");

  if (!tbody) return;

  try {
    const response = await fetch("http://localhost:5000/appointments");

    const appointments = await response.json();

    tbody.innerHTML = "";

    appointments.forEach((appt) => {
      const initials = getInitials(appt.patient_name);

      const row = document.createElement("tr");

      row.innerHTML = `

        <td>
          <div class="patient-cell">

            <div class="mini-avatar">
              ${initials}
            </div>

            <div>

              <div class="patient-name">
                ${appt.patient_name}
              </div>

              <div class="patient-id">
                ID: ${appt.patient_id}
              </div>

            </div>

          </div>
        </td>

        <td>
          ${appt.doctor_name}
        </td>

        <td>
          General
        </td>

        <td>
          ${appt.appointment_date}
          <br>
          <small style="color:var(--text-light)">
            ${appt.appointment_time}
          </small>
        </td>

        <td>

          <span class="badge confirmed">
            ${appt.status}
          </span>

        </td>

        <td>

          <div class="flex gap-8">

            <button
              class="btn-icon">
              👁️
            </button>

          </div>

        </td>
      `;

      tbody.appendChild(row);
    });
  } catch (error) {
    console.log(error);
  }
}

async function renderTodaySchedule() {
  const list = document.getElementById("scheduleList");

  if (!list) return;

  try {
    const response = await fetch("http://localhost:5000/appointments");

    const appointments = await response.json();

    list.innerHTML = "";

    appointments.slice(0, 5).forEach((appt) => {
      const item = document.createElement("div");

      item.className = "schedule-item";

      item.innerHTML = `

        <div class="time-block">

          ${appt.appointment_time}

        </div>

        <div class="appt-info">

          <strong>
            ${appt.patient_name}
          </strong>

          <span>

            ${appt.doctor_name}

          </span>

        </div>
      `;

      list.appendChild(item);
    });
  } catch (error) {
    console.log(error);
  }
}

/* ─────────────────────────────────────────────────────────────
   6.  APPOINTMENT FORM (in modal)
───────────────────────────────────────────────────────────── */

/**
 * Handle the New Appointment form submission.
 * Currently just shows an alert — replace with real logic later.
 */
function initAppointmentForm() {
  const form = document.getElementById("newAppointmentForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page reload

    /* Collect form values */
    const data = {
      patient: form.querySelector("#formPatient").value,
      doctor: form.querySelector("#formDoctor").value,
      date: form.querySelector("#formDate").value,
      time: form.querySelector("#formTime").value,
      department: form.querySelector("#formDepartment").value,
      notes: form.querySelector("#formNotes").value,
    };

    console.log("New appointment data:", data); // inspect in DevTools

    /* TODO: push to APP_DATA.recentAppointments and re-render table */
    alert(
      `✅ Appointment booked for ${data.patient} on ${data.date} at ${data.time}`,
    );

    /* Close modal and reset form */
    closeModal("newAppointmentModal");
    form.reset();
  });
}

/* ─────────────────────────────────────────────────────────────
   7.  CURRENT DATE / TIME IN TOPBAR
───────────────────────────────────────────────────────────── */

/**
 * Show a live clock and today's date in the topbar.
 */
function initClock() {
  const el = document.getElementById("topbarClock");
  if (!el) return;

  function update() {
    const now = new Date();
    const time = now.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const date = now.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    el.textContent = `${date}  •  ${time}`;
  }

  update();
  setInterval(update, 1000); // update every second
}

/* ─────────────────────────────────────────────────────────────
   8.  BOOTSTRAP — runs on every page load
───────────────────────────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {
  initSidebar(); // mobile sidebar toggle
  setActiveNav(); // highlight current page in nav
  initModals(); // wire up all modal close buttons
  initClock(); // live date/time display

  /* Dashboard-specific initialisers */

  renderAppointmentsTable();
  renderTodaySchedule();
  initAppointmentForm();
});
