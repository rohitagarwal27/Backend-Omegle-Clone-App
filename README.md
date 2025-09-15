# Backend Omegle Clone App

Real-time one-on-one chat application inspired by Omegle. Provides video chat, media sharing, theme toggle, and anonymous matching.

---

## 🎯 Objective

The goal of this project is to provide a lightweight, responsive backend that supports real-time anonymous chats with video and media sharing functionality. Focus is on ease of connection, minimal friction, and good user experience for spontaneous interactions without forced registration.

---

## 🏷 Use Cases

- Users who want to chat anonymously without creating an account.  
- People looking to meet new friends or chat with strangers.  
- Social / educational events where quick random pairing is useful (language exchange, icebreakers).  
- Platforms or websites embedding “chat with strangers” features.  

---

## 🛠 Features

- Real-time video chat between anonymous users  
- Media & emoji sharing  
- Microphone mute / unmute  
- Dark mode / light mode theme toggle  

---

## 📋 Technologies Used

- Node.js  
- Express  
- (Socket.IO or WebRTC – depends on your signalling/video setup)  
- Media upload / handling libs  
- CSS / theming for UI (if applicable)  

---

## 🔧 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/rohitagarwal27/Backend-Omegle-Clone-App.git
cd Backend-Omegle-Clone-App

# Install dependencies
npm install

# Start the server
node app.js
```


---

## 🔍 How to Check If Your Changes Are Live

1. **Inspect the live site**: open `backend-omegle-clone.onrender.com` in the browser. Test something you changed locally (for example a new route, a different message, UI toggle, etc).

2. **Check deployment logs** on Render dashboard: see if the build / deploy happened after your last commit.  

3. **Check version info or commit hash**: you can include a version or commit hash in the app (in a footer or API endpoint) to verify what's deployed.  

4. **Clear cache / hard refresh** in browser. Sometimes old JS/CSS are cached.  

5. **Check environment**: make sure Render is using latest branch (main) and pulling from correct repo.

---

 
