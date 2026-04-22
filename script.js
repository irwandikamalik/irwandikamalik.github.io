// Typing effect
const text = ["Robotics Engineer", "IoT Developer", "ROS Developer"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = text[i];
  document.getElementById("typing").textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) j++;
  else if (isDeleting && j > 0) j--;
  else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

// Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView();
}

// Modal data
const data = {
  robot: "Menggunakan encoder + IMU + EKF untuk estimasi posisi robot secara akurat.",
  udp: "Komunikasi real-time STM32 ke ROS menggunakan UDP + W5500 dengan latency rendah.",
  iot: "Monitoring pH, TDS, suhu dengan MQTT dan dashboard Node-RED.",
  yolo: "Deteksi objek menggunakan YOLOv8 dan ditampilkan di web monitoring."
};

function openModal(key) {
  document.getElementById('modal').classList.remove('hidden');
  document.getElementById('modal-title').textContent = key.toUpperCase();
  document.getElementById('modal-desc').textContent = data[key];
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

// Start typing
window.onload = type;
