// ===== GLOBAL STATE =====
let currentSlide = 1;
let currentPlantIndex = 0;
let plantRevealed = false;

// Camouflage wrong-click counters (for slides 21, 23, 25)
let wrongClicks21 = 0;
let wrongClicks23 = 0;
let wrongClicks25 = 0;

// Butterfly hub visited tracking (slide 29)
const visitedButterflies = new Set();

// ===== PLANT DATA =====
const plants = [
  {
    plant: "Milkweed",
    butterfly: "Monarch",
    plantImage: "images/milkweed.jpg",
    butterflyImage: "images/monarch_milkweed.jpg",
    desc: "Monarch caterpillars feed exclusively on milkweed. The toxins in milkweed make Monarchs taste bad to predators!"
  },
  {
    plant: "Carrot",
    butterfly: "Black Swallowtail",
    plantImage: "images/carrot.jpg",
    butterflyImage: "images/swallowtail_carrot.jpg",
    desc: "Black Swallowtail caterpillars love plants in the carrot family, including parsley, dill, and fennel."
  },
  {
    plant: "Pawpaw",
    butterfly: "Zebra Swallowtail",
    plantImage: "images/pawpaw.jpg",
    butterflyImage: "images/zebra_pawpaw.jpg",
    desc: "The Zebra Swallowtail depends on pawpaw trees. Its striking black and white stripes make it easy to identify!"
  },
  {
    plant: "Nettle",
    butterfly: "Red Admiral",
    plantImage: "images/nettle.jpg",
    butterflyImage: "images/admiral_nettle.jpg",
    desc: "Red Admiral caterpillars feed on stinging nettles. Despite the plant's sting, these tough caterpillars thrive on it!"
  },
  {
    plant: "Clover",
    butterfly: "Orange Sulphur",
    plantImage: "images/clover.jpg",
    butterflyImage: "images/sulphur_clover.jpg",
    desc: "Orange Sulphur butterflies are common in meadows and fields where clover grows abundantly."
  },
  {
    plant: "Cabbage",
    butterfly: "Cabbage White",
    plantImage: "images/cabbage.jpg",
    butterflyImage: "images/cabbage_white.jpg",
    desc: "Cabbage White butterflies lay eggs on cabbage and related plants. Gardeners often see their green caterpillars!"
  },
  {
    plant: "Violet",
    butterfly: "Fritillary",
    plantImage: "images/violet.jpg",
    butterflyImage: "images/fritillary_violet.jpg",
    desc: "Fritillary butterflies depend on violets. Their orange wings with silver spots shimmer in the sunlight!"
  },
  {
    plant: "Sunflower",
    butterfly: "Silvery Checkerspot",
    plantImage: "images/sunflower.jpg",
    butterflyImage: "images/checkerspot_sunflower.jpg",
    desc: "Silvery Checkerspots use sunflowers and related plants. Their checkered wing pattern is a beautiful sight!"
  }
];

// ===== NAVIGATION =====
function goToSlide(num) {
  var prev = document.getElementById('slide-' + currentSlide);
  var next = document.getElementById('slide-' + num);
  if (!next) return;

  if (prev) {
    prev.classList.remove('active');
    prev.style.display = 'none';
    prev.style.opacity = '0';
  }

  currentSlide = num;
  next.style.display = 'flex';
  void next.offsetWidth;
  next.classList.add('active');
  next.style.opacity = '1';

  if (num === 12) {
    renderPlant();
  }
  if (num === 29) {
    updateHubVisited();
  }
}

// ===== HOST PLANTS LOGIC =====
function startHostPlants() {
  currentPlantIndex = 0;
  plantRevealed = false;
  goToSlide(12);
}

function renderPlant() {
  var plant = plants[currentPlantIndex];
  if (!plant) return;

  document.getElementById('plant-title').textContent = plant.plant;
  document.getElementById('plant-image').style.background = '#f5f5f5';
  document.getElementById('plant-image').innerHTML =
    '<img src="' + plant.plantImage + '" alt="' + plant.plant + '" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 12px;">' +
    '<span style="position:absolute;bottom:0.5rem;font-size:0.85rem;color:#666;">Click the plant!</span>';
  document.getElementById('plant-reveal').classList.remove('show');
  document.getElementById('plant-next-btn').style.display = 'none';
  document.getElementById('butterfly-name').textContent = '';
  document.getElementById('butterfly-desc').textContent = '';
  document.getElementById('butterfly-emoji').textContent = '';
  plantRevealed = false;

  var dotsHTML = '';
  for (var i = 0; i < plants.length; i++) {
    var cls = 'progress-dot';
    if (i < currentPlantIndex) cls += ' done';
    if (i === currentPlantIndex) cls += ' active';
    dotsHTML += '<div class="' + cls + '"></div>';
  }
  document.getElementById('plant-progress').innerHTML = dotsHTML;
}

function revealButterfly() {
  if (plantRevealed) return;
  plantRevealed = true;
  var plant = plants[currentPlantIndex];

  // Switch to butterfly+plant image
  document.getElementById('plant-image').innerHTML =
    '<img src="' + plant.butterflyImage + '" alt="' + plant.butterfly + ' on ' + plant.plant + '" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 12px;">';

  document.getElementById('butterfly-name').textContent = plant.butterfly + ' Butterfly';
  document.getElementById('butterfly-desc').textContent = plant.desc;
  document.getElementById('butterfly-emoji').textContent = '';
  document.getElementById('plant-reveal').classList.add('show');
  document.getElementById('plant-next-btn').style.display = 'flex';
}

function nextPlant() {
  currentPlantIndex++;
  if (currentPlantIndex >= plants.length) {
    goToSlide(10);
    currentPlantIndex = 0;
  } else {
    renderPlant();
  }
}

// ===== CAMOUFLAGE LOGIC (Original - Slide 17) =====
function camoCorrectClick(event) {
  event.stopPropagation();
  goToSlide(18);
}

function camoWrongClick(event) {
  if (event.target.closest('.camo-hidden-butterfly')) return;
  showError("Sorry, that's not the butterfly. Try again!", true);
}

// ===== CAMOUFLAGE LOGIC (Slide 21) =====
function camoCorrectClick21(event) {
  event.stopPropagation();
  wrongClicks21 = 0;
  goToSlide(22);
}

function camoWrongClick21(event) {
  if (event.target.closest('.camo-hidden-butterfly')) return;
  wrongClicks21++;
  if (wrongClicks21 >= 3) {
    document.getElementById('hidden-butterfly-21').classList.add('hint-outline');
  }
  showError("Sorry, that's not the butterfly. Try again!", true);
}

// ===== CAMOUFLAGE LOGIC (Slide 23) =====
function camoCorrectClick23(event) {
  event.stopPropagation();
  wrongClicks23 = 0;
  goToSlide(24);
}

function camoWrongClick23(event) {
  if (event.target.closest('.camo-hidden-butterfly')) return;
  wrongClicks23++;
  if (wrongClicks23 >= 3) {
    document.getElementById('hidden-butterfly-23').classList.add('hint-outline');
  }
  showError("Sorry, that's not the butterfly. Try again!", true);
}

// ===== CAMOUFLAGE LOGIC (Slide 25) =====
function camoCorrectClick25(event) {
  event.stopPropagation();
  wrongClicks25 = 0;
  goToSlide(26);
}

function camoWrongClick25(event) {
  if (event.target.closest('.camo-hidden-butterfly')) return;
  wrongClicks25++;
  if (wrongClicks25 >= 3) {
    document.getElementById('hidden-butterfly-25').classList.add('hint-outline');
  }
  showError("Sorry, that's not the butterfly. Try again!", true);
}

// ===== BUTTERFLY HUB LOGIC (Slide 29) =====
function visitButterfly(slideNum) {
  visitedButterflies.add(slideNum);
  goToSlide(slideNum);
}

function returnToHub(slideNum) {
  visitedButterflies.add(slideNum);
  if (visitedButterflies.size >= 6) {
    goToSlide(36);
  } else {
    goToSlide(29);
  }
}

function updateHubVisited() {
  [31, 32, 33, 34, 35, 36].forEach(function(num) {
    var btn = document.getElementById('hub-btn-' + num);
    if (btn && visitedButterflies.has(num)) {
      btn.classList.add('visited');
    }
  });
}

// ===== ERROR HANDLING =====
var errorStayOnScreen = false;

function showError(message, stayOnScreen) {
  errorStayOnScreen = !!stayOnScreen;
  document.getElementById('error-message').textContent = message || "It looks like you flew too far!";
  document.getElementById('error-modal').classList.add('show');
}

function closeError() {
  document.getElementById('error-modal').classList.remove('show');
  if (!errorStayOnScreen) {
    goToSlide(10);
  }
}

// ===== DISABLE ARROW KEYS =====
document.addEventListener('keydown', function(e) {
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
    e.preventDefault();
  }
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.screen').forEach(function(el) {
    if (el.id !== 'slide-1') {
      el.classList.remove('active');
      el.style.display = 'none';
    }
  });
});
