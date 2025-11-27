import { invoke } from "@tauri-apps/api/core";

let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;

async function greet() {
  if (greetMsgEl && greetInputEl) {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsgEl.textContent = await invoke("greet", {
      name: greetInputEl.value,
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#test-btn")?.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Test button clicked");
  });
});

let APIMsgEl: HTMLElement | null;
let APIInputEl: HTMLInputElement | null;

async function callAPI() {
  let word = APIInputEl ? APIInputEl.value : "hello";

  if (APIMsgEl && APIInputEl) {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    APIMsgEl.textContent = await invoke("call_api", {
      word: word,
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  APIMsgEl = document.querySelector("#test-msg-api");
  APIInputEl = document.querySelector("#test-input-api");

  document.querySelector("#test-btn-api")?.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("API button clicked");
    callAPI();
  });
});
