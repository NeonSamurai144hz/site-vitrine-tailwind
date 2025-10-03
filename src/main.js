import './style.css'
import 'three'
import * as THREE from 'three'
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
      <a href="#" class="text-shadow-black hover:text-blue-500 transition-colors font-medium">Home</a>
      <a href="#" class="text-shadow-black hover:text-blue-500 transition-colors font-medium">Projects</a>
      <a href="#" class="text-shadow-black hover:text-blue-500 transition-colors font-medium">About</a>
      <a href="#" class="text-shadow-black hover:text-blue-500 transition-colors font-medium">Contact</a>
      
      <!-- Light Switch Toggle (starts in "on" position) -->
      <button id="lightSwitch" class="relative w-14 h-8 bg-blue-500 rounded-full transition-colors duration-300 hover:bg-blue-600 ml-4">
        <div class="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300" style="transform: translateX(20px)"></div>
      </button>
    </nav>
    
    <section id="about" class="min-h-screen flex items-center">
      <div class="pt-24 p-8 w-full">
        <h1 class="text-white text-5xl font-bold text-center mb-6">Welcome to my site!</h1>
        <p class="text-center text-white mb-16 text-lg">This is a basic design and sketch of a profile site which I intend to develop!</p>
        
        <div class="max-w-5xl mx-auto">
          <h2 class="text-4xl text-white font-bold text-center mb-12">About Me</h2>
          
          <div class="grid gap-12 items-center mb-16">  
            <div class="space-y-6">
              <p class="text-white text-lg leading-relaxed text-center">
                Hi! I'm a passionate web developer with a love for creating beautiful and functional websites. 
                I specialize in modern web technologies and always strive to write clean, maintainable code.
              </p>
              <p class="text-white text-lg leading-relaxed text-center">
                With experience in HTML, CSS, JavaScript, and various frameworks, I enjoy turning complex 
                problems into simple, elegant solutions. I'm constantly learning and exploring new technologies 
                to stay at the forefront of web development.
              </p>
              <p class="text-white text-lg leading-relaxed text-center">
                When I'm not coding, you can find me exploring new design trends, contributing to open-source 
                projects, or sharing my knowledge with the developer community.
              </p>
            </div>
          </div>
          
          <!-- Stats/Highlights -->
          <div class="grid grid-cols-2 md:grid-cols-2 gap-6 mt-12">
            <div class="bg-white p-6 rounded-xl shadow-md text-center">
              <div class="text-4xl font-bold text-blue-600 mb-2">2</div>
              <div class="text-shadow-black font-medium">Years Experience</div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md text-center">
              <div class="text-4xl font-bold text-purple-600 mb-2">20+</div>
              <div class="text-shadow-black font-medium">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section id="projects" class="py-16 px-8">
      <h2 class="text-3xl font-bold text-center mb-12">Check out some of my projects!</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <!-- Project 1 -->
        <a href="#" class="relative group overflow-hidden rounded-lg shadow-lg aspect-video bg-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop" 
            alt="Project 1" 
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          >
          <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
            <h3 class="text-white text-2xl font-bold mb-3">Project Title 1</h3>
            <p class="text-white text-center">A brief description of this amazing project and the technologies used to build it.</p>
          </div>
        </a>
    
        <!-- Project 2 -->
        <a href="#" class="relative group overflow-hidden rounded-lg shadow-lg aspect-video bg-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
            alt="Project 2" 
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          >
          <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
            <h3 class="text-white text-2xl font-bold mb-3">Project Title 2</h3>
            <p class="text-white text-center">Another fantastic project showcasing different skills and creative solutions.</p>
          </div>
        </a>
    
        <!-- Project 3 -->
        <a href="#" class="relative group overflow-hidden rounded-lg shadow-lg aspect-video bg-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop" 
            alt="Project 3" 
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          >
          <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
            <h3 class="text-white text-2xl font-bold mb-3">Project Title 3</h3>
            <p class="text-white text-center">An innovative solution that demonstrates problem-solving and technical expertise.</p>
          </div>
        </a>
    
        <!-- Project 4 -->
        <a href="#" class="relative group overflow-hidden rounded-lg shadow-lg aspect-video bg-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
            alt="Project 4" 
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          >
          <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
            <h3 class="text-white text-2xl font-bold mb-3">Project Title 4</h3>
            <p class="text-white text-center">A creative project that pushes boundaries and explores new possibilities.</p>
          </div>
        </a>
      </div>
    </section>
    
    <section id="contact" class="py-16 px-8 bg-gradient-to-b">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Let's Connect!</h2>
        <p class=" mb-12">Feel free to reach out through any of these platforms</p>
        
        <div class="flex flex-wrap justify-center gap-6 mb-12">
          <!-- GitHub -->
          <a href="https://github.com/yourusername" target="_blank" class="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-40">
            <div class="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <span class="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">GitHub</span>
          </a>

          <!-- LinkedIn -->
          <a href="https://linkedin.com/in/yourusername" target="_blank" class="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-40">
            <div class="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <span class="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">LinkedIn</span>
          </a>

          <!-- Email -->
          <a href="mailto:your.email@example.com" class="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-40">
            <div class="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-red-400 transition-colors duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <span class="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Email</span>
          </a>

          <!-- Discord -->
          <a href="https://discord.com/users/youruserid" target="_blank" class="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-40">
            <div class="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center group-hover:bg-indigo-500 transition-colors duration-300">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </div>
            <span class="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Discord</span>
          </a>
        </div>

        <div class="pt-8 border-t border-gray-200">
          <p class="text-shadow-white text-sm">© 2025 Nikita Bobeica. All rights reserved.</p>
        </div>
      </div>
    </section>
    

  <div id="overlay" class="fixed inset-0 z-15 bg-black/85 hidden pointer-events-none transition-opacity duration-1000 opacity-0"></div>
`

lights()