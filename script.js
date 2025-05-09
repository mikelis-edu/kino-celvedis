
function login() {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    z-index: 1000;
  `;

  const content = `
    <div style="text-align: center;">
      <img src="kinocelvedis.png" alt="Logo" style="width: 60px; margin-bottom: 20px;">
      <h2 style="margin: 0 0 20px 0;">Ienāc</h2>
      <div style="margin-bottom: 15px;">
        <button onclick="loginWithGoogle()" style="
          width: 100%;
          padding: 10px;
          margin: 5px 0;
          border: 1px solid #ccc;
          border-radius: 5px;
          background: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        ">
          <img src="https://www.google.com/favicon.ico" style="width: 20px;">
          Ar Google
        </button>
      </div>
      <div style="margin-bottom: 15px;">
        <input type="email" placeholder="Ar Email" style="
          width: calc(100% - 22px);
          padding: 10px;
          margin: 5px 0;
          border: 1px solid #ccc;
          border-radius: 5px;
        ">
      </div>
    </div>
  `;

  modal.innerHTML = content;

  // Add backdrop
  const backdrop = document.createElement('div');
  backdrop.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 999;
  `;

  // Close modal when clicking outside
  backdrop.onclick = () => {
    document.body.removeChild(modal);
    document.body.removeChild(backdrop);
  };

  document.body.appendChild(backdrop);
  document.body.appendChild(modal);
}

function loginWithGoogle() {
  // Here you would implement actual Google login
  console.log('Google login clicked');
}
