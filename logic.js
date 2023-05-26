const btnEncrypt = document.getElementById("encrypt");
const btnDecrypt = document.getElementById("decrypt");
const btnCopy = document.getElementById("copy");
const msgInput = document.getElementById("messageInput");
const msgOutput = document.getElementById("messageOutput");
const no_found = document.getElementById("no_found");
const Keys = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];
function encrypt(msg) {
  for (const key of Keys) {
    msg = msg.replaceAll(key[0], key[1]);
  }
  return msg;
}
function decrypt(msg) {
  for (const key of Keys) {
    msg = msg.replaceAll(key[1], key[0]);
  }
  return msg;
}
function showMsgOutput(value) {
  if (value) {
    no_found.setAttribute("class", "hide");
    msgOutput.setAttribute("class", "message");
  } else {
    no_found.setAttribute("class", "no_found");
    msgOutput.setAttribute("class", "hide");
  }
}
function define(msg) {
  if (window.innerWidth < 1275) {
    autosize(msg);
  }
}
btnEncrypt.onclick = () => {
  showMsgOutput(msgInput.value !== "");
  msgOutput.value = encrypt(msgInput.value);
  define(msgOutput);
  msgOutput.scrollIntoView({ behavior: "smooth" });
};
btnDecrypt.onclick = () => {
  showMsgOutput(msgInput.value !== "");
  msgOutput.value = decrypt(msgInput.value);
  define(msgOutput);
  msgOutput.scrollIntoView({ behavior: "smooth" });
};

btnCopy.onclick = () => {
  navigator.clipboard.writeText(msgOutput.value).catch((err) => {
    console.error("Error al copiar al portapapeles:", err);
  });
};

msgInput.onkeydown = (e) => {
  if (e.ctrlKey === true && e.key === "y") {
    msgInput.value = "";
    define(msgInput);
    msgInput.scrollIntoView({ behavior: "smooth" });
  } else {
    define(msgInput);
  }
};

window.onresize = () => {
  if (window.innerWidth > 1275) {
    msgInput.removeAttribute("style");
    msgOutput.removeAttribute("style");
  }else{
    autosize(msgInput)
    autosize(msgOutput)
  }
};
function autosize(el) {
  setTimeout(function () {
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  }, 0);
}
