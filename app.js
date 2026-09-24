const STORAGE_KEY = "rolemate_state_v2";

const seedJobs = [
  {
    id: "aurora-product-designer",
    title: "Senior Product Designer",
    company: "Aurora Payroll",
    initials: "AP",
    location: "Hybrid Jakarta",
    salary: "$58k to $74k",
    salaryMin: 58000,
    salaryMax: 74000,
    jobType: "Full time",
    stage: "Fast-track interviews",
    match: 94,
    summary:
      "Design end-to-end payroll workflows for regional HR teams. Strong systems thinking, research synthesis, and polished interaction design are valued.",
    requirements: ["Marketplace UX", "Figma", "Design systems", "Research"],
    benefits: ["4-day focus weeks", "Learning budget", "Visa support"],
    accent: "teal",
    remoteFriendly: false,
  },
  {
    id: "novagrid-pm",
    title: "Product Manager, Growth",
    company: "NovaGrid Energy",
    initials: "NG",
    location: "Remote APAC",
    salary: "$70k to $92k",
    salaryMin: 70000,
    salaryMax: 92000,
    jobType: "Contract to hire",
    stage: "Portfolio review",
    match: 88,
    summary:
      "Own acquisition experiments for a clean energy platform serving commercial buildings and property operators.",
    requirements: ["Growth loops", "Analytics", "B2B SaaS", "Experimentation"],
    benefits: ["Remote-first", "Equity", "Quarterly retreats"],
    accent: "sun",
    remoteFriendly: true,
  },
  {
    id: "craftlane-research",
    title: "UX Research Lead",
    company: "Craftlane Commerce",
    initials: "CC",
    location: "Singapore",
    salary: "$82k to $108k",
    salaryMin: 82000,
    salaryMax: 108000,
    jobType: "Full time",
    stage: "Hiring manager chat",
    match: 91,
    summary:
      "Build the research practice for merchant tools used by independent retailers, logistics partners, and catalog teams.",
    requirements: ["Research ops", "Interviews", "Jobs-to-be-done", "Strategy"],
    benefits: ["Relocation help", "Flexible hours", "Health cover"],
    accent: "coral",
    remoteFriendly: false,
  },
  {
    id: "atlas-frontend",
    title: "Frontend Engineer",
    company: "Atlas Talent",
    initials: "AT",
    location: "Remote",
    salary: "$64k to $86k",
    salaryMin: 64000,
    salaryMax: 86000,
    jobType: "Full time",
    stage: "Technical screen",
    match: 83,
    summary:
      "Build candidate-facing workflow tools, profile editing, and recruiter collaboration surfaces for high-volume hiring teams.",
    requirements: ["React", "Accessibility", "Design systems", "Testing"],
    benefits: ["Remote stipend", "Async culture", "Health cover"],
    accent: "navy",
    remoteFriendly: true,
  },
  {
    id: "lumina-data",
    title: "Data Analyst",
    company: "Lumina Finance",
    initials: "LF",
    location: "Jakarta",
    salary: "$38k to $55k",
    salaryMin: 38000,
    salaryMax: 55000,
    jobType: "Contract",
    stage: "Case study",
    match: 76,
    summary:
      "Analyze funnel performance, create dashboards, and help hiring and finance teams make cleaner operational decisions.",
    requirements: ["SQL", "Dashboards", "Forecasting", "Stakeholder updates"],
    benefits: ["Hybrid office", "Mentorship", "Project bonus"],
    accent: "teal",
    remoteFriendly: false,
  },
  {
    id: "kindred-ops",
    title: "People Operations Specialist",
    company: "Kindred Health",
    initials: "KH",
    location: "Remote Singapore",
    salary: "$45k to $61k",
    salaryMin: 45000,
    salaryMax: 61000,
    jobType: "Full time",
    stage: "Recruiter intro",
    match: 79,
    summary:
      "Coordinate hiring, onboarding, compliance, and internal employee support for distributed healthcare teams.",
    requirements: ["HR operations", "ATS", "Compliance", "Onboarding"],
    benefits: ["Remote-friendly", "Wellness budget", "Paid certification"],
    accent: "coral",
    remoteFriendly: true,
  },
];

const seedUsers = [
  {
    id: "user-nadia",
    role: "candidate",
    name: "Nadia Amalia",
    email: "nadia@demo.com",
    password: "demo123",
    profile: {
      name: "Nadia Amalia",
      headline: "Senior Product Designer",
      location: "Jakarta or remote",
      experience: "8 years",
      portfolio: "https://portfolio.example/nadia",
      availability: "Available in 30 days",
      summary:
        "Senior product designer focused on marketplace flows, onboarding, hiring tools, and design systems across B2B products.",
      skills: ["Marketplace UX", "Design systems", "Research", "Figma"],
      photo: "",
      documents: [
        {
          id: "doc-nadia-cv",
          name: "Nadia-Amalia-CV.pdf",
          type: "application/pdf",
          size: 386000,
          dataUrl: "",
        },
      ],
    },
    filters: {
      keyword: "",
      location: "any",
      jobType: "any",
      minSalary: 50000,
      remoteOnly: false,
    },
    skippedJobs: [],
  },
  {
    id: "user-reza",
    role: "candidate",
    name: "Reza Putra",
    email: "reza@demo.com",
    password: "demo123",
    profile: {
      name: "Reza Putra",
      headline: "Growth Product Manager",
      location: "Remote APAC",
      experience: "6 years",
      portfolio: "https://portfolio.example/reza",
      availability: "Available in 45 days",
      summary:
        "Growth PM who has scaled activation and referral programs for subscription and climate-tech products.",
      skills: ["SQL", "Growth loops", "Pricing", "Lifecycle"],
      photo: "",
      documents: [],
    },
    filters: {
      keyword: "product",
      location: "Remote",
      jobType: "any",
      minSalary: 60000,
      remoteOnly: true,
    },
    skippedJobs: [],
  },
  {
    id: "user-maya",
    role: "candidate",
    name: "Maya Chen",
    email: "maya@demo.com",
    password: "demo123",
    profile: {
      name: "Maya Chen",
      headline: "UX Research Lead",
      location: "Singapore",
      experience: "10 years",
      portfolio: "https://portfolio.example/maya",
      availability: "Available now",
      summary:
        "Research lead who built research repositories and continuous discovery programs for commerce teams.",
      skills: ["Research ops", "Synthesis", "JTBD", "Stakeholder workshops"],
      photo: "",
      documents: [],
    },
    filters: {
      keyword: "research",
      location: "Singapore",
      jobType: "Full time",
      minSalary: 70000,
      remoteOnly: false,
    },
    skippedJobs: [],
  },
  {
    id: "user-alex-hiring",
    role: "hiring",
    name: "Alex Morgan",
    email: "alex@demo.com",
    password: "demo123",
    managedJobIds: [
      "aurora-product-designer",
      "novagrid-pm",
      "craftlane-research",
      "atlas-frontend",
      "lumina-data",
      "kindred-ops",
    ],
    profile: {
      name: "Alex Morgan",
      headline: "Hiring Manager",
      company: "RoleMate Hiring Studio",
      location: "Singapore",
      photo: "",
      documents: [],
      skills: [],
    },
    filters: {
      keyword: "",
      location: "any",
      jobType: "any",
      minSalary: 0,
      remoteOnly: false,
    },
    skippedJobs: [],
  },
];

const seedApplications = [
  {
    id: "app-nadia-aurora",
    userId: "user-nadia",
    jobId: "aurora-product-designer",
    status: "pending",
    stage: "No answer yet",
    appliedAt: "2026-09-22",
    updatedAt: "2026-09-22",
  },
  {
    id: "app-reza-novagrid",
    userId: "user-reza",
    jobId: "novagrid-pm",
    status: "pending",
    stage: "No answer yet",
    appliedAt: "2026-09-21",
    updatedAt: "2026-09-21",
  },
  {
    id: "app-maya-craftlane",
    userId: "user-maya",
    jobId: "craftlane-research",
    status: "matched",
    stage: "Hiring process",
    appliedAt: "2026-09-20",
    updatedAt: "2026-09-23",
  },
  {
    id: "app-maya-aurora",
    userId: "user-maya",
    jobId: "aurora-product-designer",
    status: "denied",
    stage: "Recruiter declined",
    appliedAt: "2026-09-18",
    updatedAt: "2026-09-19",
  },
];

const seedConversations = {
  "app-maya-craftlane": [
    {
      from: "recruiter",
      text: "Hi Maya, your research operations work looks aligned with our UX Research Lead role.",
    },
    {
      from: "candidate",
      text: "Thank you. I can share a portfolio walkthrough and recent discovery program details.",
    },
  ],
};

let state = loadState();
let authMode = "login";
let authRole = "candidate";
let currentMode = "discover";
let selectedJobId = state.jobs[0].id;
let selectedMatchId = "";
let applicationFilter = "all";

const roleHomeModes = {
  candidate: "discover",
  hiring: "recruiter",
};

const roleModes = {
  candidate: ["discover", "applications", "profile", "chat", "settings"],
  hiring: ["recruiter", "chat"],
};

const authScreen = document.getElementById("authScreen");
const appShell = document.getElementById("appShell");
const authForm = document.getElementById("authForm");
const authName = document.getElementById("authName");
const authEmail = document.getElementById("authEmail");
const authPassword = document.getElementById("authPassword");
const authSubmit = document.getElementById("authSubmit");
const authMessage = document.getElementById("authMessage");
const demoCandidateButton = document.getElementById("demoCandidateButton");
const demoHiringButton = document.getElementById("demoHiringButton");
const logoutButton = document.getElementById("logoutButton");
const modeButtons = document.querySelectorAll(".mode-button");
const views = {
  discover: document.getElementById("discoverView"),
  applications: document.getElementById("applicationsView"),
  profile: document.getElementById("profileView"),
  recruiter: document.getElementById("recruiterView"),
  chat: document.getElementById("chatView"),
  settings: document.getElementById("settingsView"),
};

const jobCard = document.getElementById("jobCard");
const deckStatus = document.getElementById("deckStatus");
const profilePreview = document.getElementById("profilePreview");
const applicationTracker = document.getElementById("applicationTracker");
const applicationStatusFilter = document.getElementById("applicationStatusFilter");
const profileForm = document.getElementById("profileForm");
const profileCompleteness = document.getElementById("profileCompleteness");
const photoInput = document.getElementById("photoInput");
const documentInput = document.getElementById("documentInput");
const photoPreview = document.getElementById("photoPreview");
const documentList = document.getElementById("documentList");
const jobFilter = document.getElementById("jobFilter");
const candidateQueue = document.getElementById("candidateQueue");
const matchList = document.getElementById("matchList");
const chatPanel = document.getElementById("chatPanel");
const chatStatus = document.getElementById("chatStatus");
const settingsForm = document.getElementById("settingsForm");
const resetDataButton = document.getElementById("resetDataButton");
const sidebarAvatar = document.getElementById("sidebarAvatar");
const sidebarName = document.getElementById("sidebarName");
const sidebarTitle = document.getElementById("sidebarTitle");
const appliedCount = document.getElementById("appliedCount");
const matchCount = document.getElementById("matchCount");
const primaryStatLabel = document.getElementById("primaryStatLabel");
const secondaryStatLabel = document.getElementById("secondaryStatLabel");

function createSeedState() {
  return {
    users: seedUsers,
    jobs: seedJobs,
    applications: seedApplications,
    conversations: seedConversations,
    currentUserId: "",
  };
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return createSeedState();

  try {
    const parsed = JSON.parse(saved);
    const nextState = {
      ...createSeedState(),
      ...parsed,
      jobs: seedJobs,
    };
    const existingIds = new Set(nextState.users.map((user) => user.id));
    seedUsers.forEach((seedUser) => {
      if (!existingIds.has(seedUser.id)) {
        nextState.users.push(seedUser);
      }
    });
    nextState.users = nextState.users.map((user) => ({
      ...user,
      role: user.role || "candidate",
      managedJobIds:
        user.role === "hiring"
          ? user.managedJobIds || seedJobs.map((job) => job.id)
          : user.managedJobIds || [],
      profile: {
        documents: [],
        skills: [],
        ...user.profile,
      },
      filters: {
        keyword: "",
        location: "any",
        jobType: "any",
        minSalary: 0,
        remoteOnly: false,
        ...user.filters,
      },
      skippedJobs: user.skippedJobs || [],
    }));
    return nextState;
  } catch {
    return createSeedState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function currentUser() {
  return state.users.find((user) => user.id === state.currentUserId) || null;
}

function currentProfile() {
  const user = currentUser();
  return user ? user.profile : null;
}

function currentRole() {
  return currentUser()?.role || "candidate";
}

function isCandidate() {
  return currentRole() === "candidate";
}

function isHiringManager() {
  return currentRole() === "hiring";
}

function allowedModesForCurrentUser() {
  return roleModes[currentRole()] || roleModes.candidate;
}

function isModeAllowed(mode) {
  return allowedModesForCurrentUser().includes(mode);
}

function homeModeForCurrentUser() {
  return roleHomeModes[currentRole()] || "discover";
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(value) {
  if (!value) return "Today";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function initials(name) {
  return String(name || "User")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function statusLabel(status) {
  const labels = {
    pending: "No answer yet",
    matched: "Matched",
    denied: "Denied",
  };
  return labels[status] || "No answer yet";
}

function applyAccent(job) {
  const accents = {
    teal: "linear-gradient(135deg, rgba(25,49,66,.94), rgba(15,155,142,.78))",
    sun: "linear-gradient(135deg, rgba(61,80,53,.94), rgba(244,191,58,.78))",
    coral: "linear-gradient(135deg, rgba(52,42,68,.94), rgba(238,111,97,.78))",
    navy: "linear-gradient(135deg, rgba(25,49,66,.96), rgba(70,94,112,.82))",
  };
  return accents[job.accent] || accents.teal;
}

function getApplication(userId, jobId) {
  return state.applications.find((app) => app.userId === userId && app.jobId === jobId);
}

function userApplications(userId = state.currentUserId) {
  return state.applications.filter((app) => app.userId === userId);
}

function managedJobIds(user = currentUser()) {
  if (!user) return [];
  return user.managedJobIds?.length ? user.managedJobIds : state.jobs.map((job) => job.id);
}

function managedApplications(user = currentUser()) {
  const jobs = new Set(managedJobIds(user));
  return state.applications.filter((app) => jobs.has(app.jobId));
}

function getJob(jobId) {
  return state.jobs.find((job) => job.id === jobId);
}

function getUser(userId) {
  return state.users.find((user) => user.id === userId);
}

function profileSkills(profile) {
  return Array.isArray(profile.skills) ? profile.skills : [];
}

function profileCompletion(profile) {
  const checks = [
    profile.name,
    profile.headline,
    profile.location,
    profile.experience,
    profile.summary,
    profileSkills(profile).length,
    profile.portfolio,
    profile.availability,
    profile.photo,
    profile.documents?.length,
  ];
  const done = checks.filter(Boolean).length;
  return Math.round((done / checks.length) * 100);
}

function setAuthMode(mode) {
  authMode = mode;
  document.querySelectorAll(".auth-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.authMode === mode);
  });
  authName.closest("label").classList.toggle("hidden", mode === "login");
  authSubmit.textContent = mode === "login" ? "Login" : "Create account";
  authMessage.textContent = "";
  authPassword.autocomplete = mode === "login" ? "current-password" : "new-password";
}

function setAuthRole(role) {
  authRole = role;
  document.querySelectorAll(".role-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.authRole === role);
  });
  authEmail.placeholder = role === "hiring" ? "alex@demo.com" : "nadia@demo.com";
  authName.placeholder = role === "hiring" ? "Alex Morgan" : "Nadia Amalia";
  authMessage.textContent = "";
}

function handleAuth(event) {
  event.preventDefault();
  const email = authEmail.value.trim().toLowerCase();
  const password = authPassword.value;
  const name = authName.value.trim();

  if (authMode === "login") {
    const user = state.users.find(
      (item) =>
        item.email.toLowerCase() === email &&
        item.password === password &&
        item.role === authRole,
    );
    if (!user) {
      authMessage.textContent =
        authRole === "hiring"
          ? "No hiring manager account found for those details."
          : "No job seeker account found for those details.";
      return;
    }
    state.currentUserId = user.id;
  } else {
    if (!name) {
      authMessage.textContent = "Add your name to create an account.";
      return;
    }
    if (
      state.users.some(
        (item) => item.email.toLowerCase() === email && item.role === authRole,
      )
    ) {
      authMessage.textContent = "That email already has this account type.";
      return;
    }
    const user = {
      id: `user-${Date.now()}`,
      role: authRole,
      name,
      email,
      password,
      managedJobIds: authRole === "hiring" ? state.jobs.map((job) => job.id) : [],
      profile: {
        name,
        headline: authRole === "hiring" ? "Hiring Manager" : "Job seeker",
        company: authRole === "hiring" ? "New Company" : "",
        location: "Remote",
        experience: "",
        portfolio: "",
        availability: "",
        summary: "",
        skills: [],
        photo: "",
        documents: [],
      },
      filters: {
        keyword: "",
        location: "any",
        jobType: "any",
        minSalary: 0,
        remoteOnly: false,
      },
      skippedJobs: [],
    };
    state.users.push(user);
    state.currentUserId = user.id;
  }

  saveState();
  authForm.reset();
  bootstrap();
}

function logout() {
  state.currentUserId = "";
  saveState();
  bootstrap();
}

function setMode(mode) {
  if (!isModeAllowed(mode)) {
    mode = homeModeForCurrentUser();
  }
  currentMode = mode;
  modeButtons.forEach((button) => {
    const roles = (button.dataset.roles || "").split(",");
    const visible = roles.includes(currentRole());
    button.classList.toggle("hidden", !visible);
    button.classList.toggle("active", visible && button.dataset.mode === mode);
  });
  Object.entries(views).forEach(([key, view]) => {
    view.classList.toggle("active", key === mode && isModeAllowed(key));
  });
  render();
}

function filteredJobs() {
  const user = currentUser();
  if (!user || !isCandidate()) return [];

  const filters = user.filters;
  const keyword = filters.keyword.trim().toLowerCase();
  const skipped = new Set(user.skippedJobs || []);
  const applied = new Set(userApplications(user.id).map((app) => app.jobId));

  return state.jobs.filter((job) => {
    const haystack = [
      job.title,
      job.company,
      job.location,
      job.jobType,
      job.summary,
      ...job.requirements,
    ]
      .join(" ")
      .toLowerCase();
    const locationMatch =
      filters.location === "any" ||
      job.location.toLowerCase().includes(filters.location.toLowerCase());
    const typeMatch = filters.jobType === "any" || job.jobType === filters.jobType;
    const salaryMatch = !filters.minSalary || job.salaryMax >= Number(filters.minSalary);
    const remoteMatch = !filters.remoteOnly || job.remoteFriendly;

    return (
      !skipped.has(job.id) &&
      !applied.has(job.id) &&
      (!keyword || haystack.includes(keyword)) &&
      locationMatch &&
      typeMatch &&
      salaryMatch &&
      remoteMatch
    );
  });
}

function renderShell() {
  const user = currentUser();
  const profile = currentProfile();
  if (!user || !profile) return;

  const apps = isHiringManager() ? managedApplications(user) : userApplications(user.id);
  const matches = apps.filter((app) => app.status === "matched");
  sidebarName.textContent = profile.name || user.name;
  sidebarTitle.textContent = isHiringManager()
    ? profile.company || profile.headline || "Hiring manager"
    : profile.headline || "Job seeker";
  sidebarAvatar.textContent = profile.photo ? "" : initials(profile.name || user.name);
  sidebarAvatar.style.backgroundImage = profile.photo ? `url(${profile.photo})` : "";
  appliedCount.textContent = String(apps.length);
  matchCount.textContent = String(matches.length);
  primaryStatLabel.textContent = isHiringManager() ? "Candidates" : "Applied";
  secondaryStatLabel.textContent = "Matches";
}

function renderDiscoverView() {
  const user = currentUser();
  const profile = currentProfile();
  const deck = filteredJobs();
  const job = deck[0];

  deckStatus.textContent = `${deck.length} role${deck.length === 1 ? "" : "s"} available`;
  renderProfilePreview(profile);

  if (!job) {
    jobCard.innerHTML = `
      <div class="empty-state">
        <div>
          <h3>No jobs match the current filters</h3>
          <p>Adjust Settings or reset demo data to bring more roles back into the deck.</p>
        </div>
      </div>
    `;
    return;
  }

  jobCard.innerHTML = `
    <div class="job-cover" style="--cover-image: ${applyAccent(job)};">
      <div class="job-meta">
        <span class="company-mark">${escapeHTML(job.initials)}</span>
        <span class="status-pill">${job.match}% profile fit</span>
      </div>
      <div class="job-title">
        <h3>${escapeHTML(job.title)}</h3>
        <p>${escapeHTML(job.company)} / ${escapeHTML(job.location)}</p>
      </div>
    </div>
    <div class="job-body">
      <div class="detail-grid">
        <div><span>Salary</span><strong>${escapeHTML(job.salary)}</strong></div>
        <div><span>Work type</span><strong>${escapeHTML(job.jobType)}</strong></div>
        <div><span>Next step</span><strong>${escapeHTML(job.stage)}</strong></div>
      </div>
      <p>${escapeHTML(job.summary)}</p>
      <div class="tag-row">
        ${job.requirements.map((item) => `<span>${escapeHTML(item)}</span>`).join("")}
      </div>
      <div class="tag-row">
        ${job.benefits.map((item) => `<span>${escapeHTML(item)}</span>`).join("")}
      </div>
      <div class="action-row">
        <button class="secondary-button" data-action="skip" data-job="${job.id}" type="button">Skip</button>
        <button class="primary-button" data-action="apply" data-job="${job.id}" type="button">Apply with saved profile</button>
      </div>
    </div>
  `;

  if (!profile.summary || !profile.documents.length) {
    deckStatus.textContent = "Profile needs work";
  }
  void user;
}

function renderProfilePreview(profile) {
  const completion = profileCompletion(profile);
  profilePreview.innerHTML = `
    <div class="panel-heading">
      <p class="eyebrow">Your profile</p>
      <span class="status-pill">${completion}% complete</span>
    </div>
    <div class="profile-preview-top">
      <div class="avatar large-avatar" style="${profile.photo ? `background-image:url(${profile.photo})` : ""}">
        ${profile.photo ? "" : escapeHTML(initials(profile.name))}
      </div>
      <div>
        <h3>${escapeHTML(profile.name)}</h3>
        <p>${escapeHTML(profile.headline)}</p>
      </div>
    </div>
    <p>${escapeHTML(profile.summary || "Add a summary in Profile so recruiters can understand your fit faster.")}</p>
    <div class="profile-list">
      <span>${escapeHTML(profile.experience || "Experience missing")}</span>
      <span>${escapeHTML(profile.location || "Location missing")}</span>
      <span>${escapeHTML(profile.availability || "Availability missing")}</span>
      <span>${profile.documents.length} document${profile.documents.length === 1 ? "" : "s"}</span>
    </div>
    <div class="resume-block">
      <strong>Saved skills</strong>
      <p>${profileSkills(profile).map(escapeHTML).join(", ") || "No skills saved yet."}</p>
    </div>
    <button class="ghost-button" data-go-mode="profile" type="button">Edit profile</button>
  `;
}

function swipeJob(jobId, action) {
  const user = currentUser();
  if (!user || !isCandidate()) return;

  if (action === "apply") {
    if (!getApplication(user.id, jobId)) {
      state.applications.push({
        id: `app-${user.id}-${jobId}-${Date.now()}`,
        userId: user.id,
        jobId,
        status: "pending",
        stage: "No answer yet",
        appliedAt: today(),
        updatedAt: today(),
      });
    }
    user.skippedJobs = (user.skippedJobs || []).filter((id) => id !== jobId);
    setMode("applications");
  } else {
    user.skippedJobs = Array.from(new Set([...(user.skippedJobs || []), jobId]));
  }

  saveState();
  render();
}

function renderApplicationTracker() {
  if (!isCandidate()) return;
  const apps = userApplications();
  const filtered = apps.filter((app) => applicationFilter === "all" || app.status === applicationFilter);

  if (!filtered.length) {
    applicationTracker.innerHTML = `
      <div class="empty-state">
        <div>
          <h3>No applications here yet</h3>
          <p>Apply to jobs from Discover, then track recruiter responses here.</p>
        </div>
      </div>
    `;
    return;
  }

  applicationTracker.innerHTML = filtered
    .map((app) => {
      const job = getJob(app.jobId);
      return `
        <article class="tracker-card ${app.status}">
          <div class="tracker-top">
            <span class="company-mark">${escapeHTML(job.initials)}</span>
            <span class="status-pill">${statusLabel(app.status)}</span>
          </div>
          <h3>${escapeHTML(job.title)}</h3>
          <p>${escapeHTML(job.company)} / ${escapeHTML(job.location)}</p>
          <div class="detail-grid">
            <div><span>Applied</span><strong>${formatDate(app.appliedAt)}</strong></div>
            <div><span>Updated</span><strong>${formatDate(app.updatedAt)}</strong></div>
            <div><span>Stage</span><strong>${escapeHTML(app.stage)}</strong></div>
          </div>
          ${
            app.status === "matched"
              ? `<button class="primary-button" data-open-match="${app.id}" type="button">Open chat</button>`
              : ""
          }
        </article>
      `;
    })
    .join("");
}

function fillProfileForm() {
  if (!isCandidate()) return;
  const profile = currentProfile();
  if (!profile) return;

  profileForm.elements.name.value = profile.name || "";
  profileForm.elements.headline.value = profile.headline || "";
  profileForm.elements.location.value = profile.location || "";
  profileForm.elements.experience.value = profile.experience || "";
  profileForm.elements.portfolio.value = profile.portfolio || "";
  profileForm.elements.availability.value = profile.availability || "";
  profileForm.elements.summary.value = profile.summary || "";
  profileForm.elements.skills.value = profileSkills(profile).join(", ");
  profileCompleteness.textContent = `${profileCompletion(profile)}% complete`;
  renderUploads();
}

function renderUploads() {
  if (!isCandidate()) return;
  const profile = currentProfile();
  if (!profile) return;

  photoPreview.textContent = profile.photo ? "" : "Photo";
  photoPreview.style.backgroundImage = profile.photo ? `url(${profile.photo})` : "";
  documentList.innerHTML = profile.documents.length
    ? profile.documents
        .map(
          (doc) => `
            <div class="document-row">
              <div>
                <strong>${escapeHTML(doc.name)}</strong>
                <span>${Math.round(doc.size / 1024)} KB ${doc.dataUrl ? "saved" : "metadata"}</span>
              </div>
              ${
                doc.dataUrl
                  ? `<a class="ghost-link" href="${doc.dataUrl}" download="${escapeHTML(doc.name)}">Download</a>`
                  : ""
              }
              <button class="danger-link" data-remove-doc="${doc.id}" type="button">Remove</button>
            </div>
          `,
        )
        .join("")
    : `<div class="empty-small">No documents uploaded yet.</div>`;
}

function saveProfile(event) {
  event.preventDefault();
  const user = currentUser();
  if (!user || !isCandidate()) return;

  const data = new FormData(profileForm);
  user.name = data.get("name").trim();
  user.profile = {
    ...user.profile,
    name: data.get("name").trim(),
    headline: data.get("headline").trim(),
    location: data.get("location").trim(),
    experience: data.get("experience").trim(),
    portfolio: data.get("portfolio").trim(),
    availability: data.get("availability").trim(),
    summary: data.get("summary").trim(),
    skills: data
      .get("skills")
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean),
  };
  saveState();
  render();
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function uploadPhoto(event) {
  const file = event.target.files[0];
  const profile = currentProfile();
  if (!file || !profile || !isCandidate()) return;

  profile.photo = await readFileAsDataUrl(file);
  saveState();
  render();
  event.target.value = "";
}

async function uploadDocuments(event) {
  const files = Array.from(event.target.files || []);
  const profile = currentProfile();
  if (!files.length || !profile || !isCandidate()) return;

  for (const file of files) {
    const doc = {
      id: `doc-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: file.name,
      type: file.type || "application/octet-stream",
      size: file.size,
      dataUrl: "",
    };

    if (file.size <= 1500000) {
      doc.dataUrl = await readFileAsDataUrl(file);
    }

    profile.documents.push(doc);
  }

  saveState();
  render();
  event.target.value = "";
}

function renderJobFilter() {
  const visibleJobs = isHiringManager()
    ? state.jobs.filter((job) => managedJobIds().includes(job.id))
    : state.jobs;
  jobFilter.innerHTML = visibleJobs
    .map((job) => `<option value="${job.id}">${escapeHTML(job.title)} / ${escapeHTML(job.company)}</option>`)
    .join("");
  if (!visibleJobs.some((job) => job.id === selectedJobId)) {
    selectedJobId = visibleJobs[0]?.id || state.jobs[0].id;
  }
  jobFilter.value = selectedJobId;
}

function renderRecruiterView() {
  if (!isHiringManager()) return;
  const selectedJob = getJob(selectedJobId) || state.jobs[0];
  selectedJobId = selectedJob.id;
  const queue = managedApplications().filter((app) => app.jobId === selectedJob.id);

  if (!queue.length) {
    candidateQueue.innerHTML = `
      <div class="empty-state">
        <div>
          <h3>No right swipes yet</h3>
          <p>Candidate applications appear here after they swipe right on this role.</p>
        </div>
      </div>
    `;
    return;
  }

  candidateQueue.innerHTML = queue
    .map((app) => {
      const user = getUser(app.userId);
      const profile = user.profile;
      const isMatched = app.status === "matched";
      const isDenied = app.status === "denied";
      return `
        <article class="applicant-card">
          <div class="applicant-top">
            <div class="avatar" style="${profile.photo ? `background-image:url(${profile.photo})` : ""}">
              ${profile.photo ? "" : escapeHTML(initials(profile.name))}
            </div>
            <div>
              <h3>${escapeHTML(profile.name)}</h3>
              <p>${escapeHTML(profile.headline)}</p>
            </div>
          </div>
          <div class="score-card">
            <span>Profile fit</span>
            <strong>${selectedJob.match}% for ${escapeHTML(selectedJob.company)}</strong>
          </div>
          <p>${escapeHTML(profile.summary || "No summary saved.")}</p>
          <div class="skill-row">
            ${profileSkills(profile).map((skill) => `<span>${escapeHTML(skill)}</span>`).join("")}
          </div>
          <div class="detail-grid">
            <div><span>Experience</span><strong>${escapeHTML(profile.experience || "Missing")}</strong></div>
            <div><span>Location</span><strong>${escapeHTML(profile.location || "Missing")}</strong></div>
            <div><span>Status</span><strong>${statusLabel(app.status)}</strong></div>
          </div>
          <div class="document-strip">
            ${
              profile.documents.length
                ? profile.documents
                    .map((doc) => `<span>${escapeHTML(doc.name)}</span>`)
                    .join("")
                : "<span>No documents uploaded</span>"
            }
          </div>
          <div class="applicant-actions">
            <button class="danger-button" data-application="${app.id}" data-recruiter-action="deny" type="button" ${isMatched || isDenied ? "disabled" : ""}>Deny</button>
            <button class="primary-button" data-application="${app.id}" data-recruiter-action="continue" type="button" ${isMatched ? "disabled" : ""}>Continue</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function recruiterDecision(applicationId, action) {
  if (!isHiringManager()) return;
  const app = state.applications.find((item) => item.id === applicationId);
  if (!app) return;

  if (action === "continue") {
    app.status = "matched";
    app.stage = "Hiring process";
    state.conversations[app.id] = state.conversations[app.id] || [
      {
        from: "recruiter",
        text: `Thanks for applying. Your profile looks aligned and we would like to continue the process.`,
      },
    ];
    selectedMatchId = app.id;
  } else {
    app.status = "denied";
    app.stage = "Recruiter declined";
  }

  app.updatedAt = today();
  saveState();

  if (action === "continue") {
    setMode("chat");
    return;
  }

  render();
}

function getMatches() {
  if (isHiringManager()) {
    return managedApplications().filter((app) => app.status === "matched");
  }
  return userApplications().filter((app) => app.status === "matched");
}

function renderChatView() {
  const matches = getMatches();

  if (!matches.length) {
    chatStatus.textContent = "Locked";
    matchList.innerHTML = `
      <div class="empty-state">
        <p>No mutual matches yet.</p>
      </div>
    `;
    chatPanel.innerHTML = `
      <div class="empty-state">
        <div>
          <h3>Chat is locked</h3>
          <p>${isHiringManager() ? "Continue a candidate from the recruiter queue to open a matched conversation." : "A candidate can message a recruiter only after applying and the recruiter chooses Continue."}</p>
        </div>
      </div>
    `;
    return;
  }

  if (!selectedMatchId || !matches.some((match) => match.id === selectedMatchId)) {
    selectedMatchId = matches[0].id;
  }

  const selected = matches.find((match) => match.id === selectedMatchId);
  const job = getJob(selected.jobId);
  const thread = state.conversations[selected.id] || [];
  chatStatus.textContent = `${matches.length} active`;

  matchList.innerHTML = matches
    .map((app) => {
      const matchJob = getJob(app.jobId);
      const candidate = getUser(app.userId);
      return `
        <button class="match-button ${app.id === selectedMatchId ? "active" : ""}" data-match="${app.id}" type="button">
          <strong>${escapeHTML(isHiringManager() ? candidate.profile.name : matchJob.company)}</strong>
          <span>${escapeHTML(matchJob.title)}</span>
        </button>
      `;
    })
    .join("");

  chatPanel.innerHTML = `
    <h3>${escapeHTML(isHiringManager() ? getUser(selected.userId).profile.name : job.company)}</h3>
    <p>${escapeHTML(job.title)} / ${escapeHTML(job.company)}</p>
    <div class="chat-thread">
      ${thread.map((message) => `<div class="message ${message.from}">${escapeHTML(message.text)}</div>`).join("")}
    </div>
    <form class="chat-compose" id="chatForm">
      <input aria-label="Message" placeholder="Write a matched-message update" />
      <button class="primary-button" type="submit">Send</button>
    </form>
  `;
}

function sendMessage(event) {
  event.preventDefault();
  const input = event.target.querySelector("input");
  const text = input.value.trim();
  if (!text || !selectedMatchId) return;

  state.conversations[selectedMatchId] = state.conversations[selectedMatchId] || [];
  state.conversations[selectedMatchId].push({
    from: isHiringManager() ? "recruiter" : "candidate",
    text,
  });
  saveState();
  input.value = "";
  renderChatView();
}

function fillSettingsForm() {
  const user = currentUser();
  if (!user) return;

  settingsForm.elements.keyword.value = user.filters.keyword || "";
  settingsForm.elements.location.value = user.filters.location || "any";
  settingsForm.elements.jobType.value = user.filters.jobType || "any";
  settingsForm.elements.minSalary.value = user.filters.minSalary || 0;
  settingsForm.elements.remoteOnly.checked = Boolean(user.filters.remoteOnly);
}

function saveSettings(event) {
  event.preventDefault();
  const user = currentUser();
  if (!user || !isCandidate()) return;

  const data = new FormData(settingsForm);
  user.filters = {
    keyword: data.get("keyword").trim(),
    location: data.get("location"),
    jobType: data.get("jobType"),
    minSalary: Number(data.get("minSalary") || 0),
    remoteOnly: data.get("remoteOnly") === "on",
  };
  saveState();
  setMode("discover");
}

function resetData() {
  const currentEmail = currentUser()?.email;
  state = createSeedState();
  const user = state.users.find((item) => item.email === currentEmail) || state.users[0];
  state.currentUserId = user.id;
  selectedJobId = state.jobs[0].id;
  selectedMatchId = "";
  applicationFilter = "all";
  saveState();
  bootstrap();
}

function render() {
  if (!currentUser()) return;
  renderShell();
  renderChatView();

  if (isCandidate()) {
    renderDiscoverView();
    renderApplicationTracker();
    fillProfileForm();
    fillSettingsForm();
    candidateQueue.innerHTML = "";
    return;
  }

  renderJobFilter();
  renderRecruiterView();
}

function bootstrap() {
  const isLoggedIn = Boolean(currentUser());
  authScreen.classList.toggle("hidden", isLoggedIn);
  appShell.classList.toggle("hidden", !isLoggedIn);

  if (isLoggedIn) {
    if (!isModeAllowed(currentMode)) {
      currentMode = homeModeForCurrentUser();
    }
    setMode(currentMode);
  } else {
    setAuthMode(authMode);
    setAuthRole(authRole);
  }
}

document.querySelectorAll(".auth-tab").forEach((button) => {
  button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
});

document.querySelectorAll(".role-tab").forEach((button) => {
  button.addEventListener("click", () => setAuthRole(button.dataset.authRole));
});

authForm.addEventListener("submit", handleAuth);
demoCandidateButton.addEventListener("click", () => {
  state.currentUserId = "user-nadia";
  currentMode = "discover";
  saveState();
  bootstrap();
});
demoHiringButton.addEventListener("click", () => {
  state.currentUserId = "user-alex-hiring";
  currentMode = "recruiter";
  saveState();
  bootstrap();
});
logoutButton.addEventListener("click", logout);

modeButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

document.body.addEventListener("click", (event) => {
  const modeButton = event.target.closest("[data-go-mode]");
  if (modeButton) {
    setMode(modeButton.dataset.goMode);
  }
});

jobCard.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  swipeJob(button.dataset.job, button.dataset.action);
});

applicationStatusFilter.addEventListener("click", (event) => {
  const button = event.target.closest("[data-status-filter]");
  if (!button) return;
  applicationFilter = button.dataset.statusFilter;
  applicationStatusFilter.querySelectorAll("button").forEach((item) => {
    item.classList.toggle("active", item === button);
  });
  renderApplicationTracker();
});

applicationTracker.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open-match]");
  if (!button) return;
  selectedMatchId = button.dataset.openMatch;
  setMode("chat");
});

profileForm.addEventListener("submit", saveProfile);
photoInput.addEventListener("change", uploadPhoto);
documentInput.addEventListener("change", uploadDocuments);
documentList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-doc]");
  const profile = currentProfile();
  if (!button || !profile || !isCandidate()) return;
  profile.documents = profile.documents.filter((doc) => doc.id !== button.dataset.removeDoc);
  saveState();
  render();
});

jobFilter.addEventListener("change", (event) => {
  selectedJobId = event.target.value;
  renderRecruiterView();
});

candidateQueue.addEventListener("click", (event) => {
  const button = event.target.closest("[data-recruiter-action]");
  if (!button) return;
  recruiterDecision(button.dataset.application, button.dataset.recruiterAction);
});

matchList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-match]");
  if (!button) return;
  selectedMatchId = button.dataset.match;
  renderChatView();
});

chatPanel.addEventListener("submit", sendMessage);
settingsForm.addEventListener("submit", saveSettings);
resetDataButton.addEventListener("click", resetData);

bootstrap();
