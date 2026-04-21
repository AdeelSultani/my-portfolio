import p1a from '../assets/projects/whatsapp/calls.jpg'
import p1b from '../assets/projects/whatsapp/onboarding.jpg'
import p1c from '../assets/projects/whatsapp/no.jpg'
import p1d from '../assets/projects/whatsapp/chat.jpg'
import p1e from '../assets/projects/whatsapp/status.jpg'
import p1f from '../assets/projects/whatsapp/header.jpg'
import p1g from '../assets/projects/whatsapp/otp.jpg'

///expanse tracker
import p2a from '../assets/projects/expanse tracker/expanselogo.jpeg'
import p2b from '../assets/projects/expanse tracker/expanse.jpeg'
import p2c from '../assets/projects/expanse tracker/loginexp.jpeg'
import p2d from '../assets/projects/expanse tracker/signupexp.jpeg'
import p2e from '../assets/projects/expanse tracker/homeexp.jpeg'
import p2f from '../assets/projects/expanse tracker/categoryexp.jpeg'
import p2g from '../assets/projects/expanse tracker/addexpanse.jpeg'
import p2h from '../assets/projects/expanse tracker/analyticsexp.jpeg'
import p2i from '../assets/projects/expanse tracker/profileexp.jpeg'

////SafeZone
import p3a from '../assets/projects/safezone/safezone.png'
import p3b from '../assets/projects/safezone/splash.jpeg'
import p3c from '../assets/projects/safezone/login.jpeg'
import p3d from '../assets/projects/safezone/signupuser.jpeg'
import p3e from '../assets/projects/safezone/signuppolice.jpeg'
import p3f from '../assets/projects/safezone/userdashboard.jpeg'
import p3g from '../assets/projects/safezone/reportcrime.jpeg'
import p3h from '../assets/projects/safezone/safetravel.jpeg'
import p3i from '../assets/projects/safezone/policedashboard.jpeg'
import p3j from '../assets/projects/safezone/reportverification.jpeg'

// ⚠️ FIX: missing weather image (temporary safe fix)
import p3 from '../assets/hostel.jpg'

const projects = [

      {
    id: 1,
    title: "Safe Zone App",
description: "A smart safety-focused mobile application designed to enhance personal security by detecting and analyzing nearby crime-prone areas in real time. The system uses location-based intelligence to highlight dangerous zones on the route and suggest safer alternatives when available. It features dynamic route analysis with color-coded risk visualization, emergency SOS functionality that instantly shares live location with trusted contacts, and a priority-based alert system that ensures critical notifications are delivered to family or emergency contacts first. The application aims to provide users with proactive safety guidance, quick emergency response, and real-time situational awareness while traveling.",
    image: p3a,
    screenshots: [p3a,p3b,p3c,p3d,p3e,p3f,p3g,p3h,p3i,p3j],
    githubLink: "https://github.com/AdeelSultani/Safe-Zone",
  tags: ["Flutter", "Dart", ".NET", "SQL", "Figma","Shared Preferences"]
  },
  {
    id: 2,
    title: "Smart Expanse Tracker",
 description: "A Smart Expense Tracker mobile application built using Flutter with Firebase and Provider for state management. The app includes secure Firebase Authentication, real-time data syncing using Firestore and Realtime Database, and allows users to efficiently manage their daily expenses. Users can add, update, and categorize expenses while viewing real-time analytics and summaries. The app follows a clean architecture with responsive UI and smooth state handling using Provider.",
    image: p2a,
    screenshots: [p2a,p2b,p2c,p2d,p2e,p2f,p2g,p2h,p2i],
    githubLink: "https://github.com/AdeelSultani/Smart-Expanse-Tracker",
    tags: ["Flutter", "Firebase", "Provider","Sqflite"]
  },
  {
    id: 3,
    title: "WhatsApp UI Clone",
    description:
      "This WhatsApp UI Clone is a high-fidelity Flutter application demonstrating pixel-perfect UI replication with TabBar navigation, Chats, Status, and Calls screens built using modular widgets and responsive design.",
    image: p1f,
    screenshots: [p1f, p1a, p1b, p1c, p1d, p1e, p1g],
    githubLink: "https://github.com/AdeelSultani/Whatsap-Ui",
    tags: ["Flutter", "Dart", "Figma"]
  },
   {
    id: 3,
    title: "Hostel Management System",
    description:
      "A system for managing hostel operations including student records, room allocation, and fee management in an efficient and organized way. This is a web-based Hostel Management System developed using ASP.NET (C#), Bootstrap, and SQL Server.",
    image: p3,
    githubLink: "https://github.com/AdeelSultani/Hostel-Management-System",
    tags: ["ASP.NET (C#)", "Sql", "Bootstrap"]
  },

]

export default projects