import './style.css'
import { lights } from './lights.js'

document.querySelector('#app').innerHTML = `
  <!-- Initial Dark Screen with Welcome Message -->
  <div id="welcomeScreen" class="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center transition-opacity duration-1000">
    <h1 class="text-white text-4xl md:text-5xl font-bold text-center mb-12 opacity-30">
      Welcome, please press the light switch to continue
    </h1>
    
    <!-- Light Switch Toggle -->
    <button id="initialLightSwitch" class="relative w-16 h-10 bg-gray-700 rounded-full transition-colors duration-300 hover:bg-gray-600">
      <div class="absolute top-1 left-1 w-8 h-8 bg-gray-400 rounded-full shadow-md transition-transform duration-300"></div>
    </button>
  </div>

  <!-- Main Content (hidden initially) -->
  <div id="mainContent" class="opacity-0 pointer-events-none transition-opacity duration-1000">
    <nav class="fixed top-4 left-1/2 -translate-x-1/2 z-20 bg-white rounded-full shadow-lg px-8 py-4 flex items-center gap-8">
      <a href="#" class="text-gray-700 hover:text-blue-500 transition-colors font-medium">Home</a>
      <a href="#" class="text-gray-700 hover:text-blue-500 transition-colors font-medium">Projects</a>
      <a href="#" class="text-gray-700 hover:text-blue-500 transition-colors font-medium">About</a>
      <a href="#" class="text-gray-700 hover:text-blue-500 transition-colors font-medium">Contact</a>
      
      <!-- Light Switch Toggle (starts in "on" position) -->
      <button id="lightSwitch" class="relative w-14 h-8 bg-blue-500 rounded-full transition-colors duration-300 hover:bg-blue-600 ml-4">
        <div class="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300" style="transform: translateX(20px)"></div>
      </button>
    </nav>
    
    <div class="pt-24 p-8">
      <h1 class="text-4xl font-bold text-center mb-8">Welcome to my site!</h1>
      <p class="text-center text-gray-600 mb-12">This is a basic design and sketch of a profile site which I intend to develop!</p>
    </div>
  </div>

  <div id="overlay" class="fixed inset-0 z-15 bg-black/85 hidden pointer-events-none transition-opacity duration-1000 opacity-0"></div>
`

lights()