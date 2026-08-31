function getPipelineStatus() {
  return "Pipeline Status: Ready";
}

if (typeof document !== "undefined") {
  const status = document.getElementById("status");

  if (status) {
    status.textContent = getPipelineStatus();
  }
}

if (typeof module !== "undefined") {
  module.exports = { getPipelineStatus };
}
