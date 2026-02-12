import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-white to-emerald-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://raw.githubusercontent.com/fikrisyahid/adzanid/refs/heads/main/assets/icon.png" 
              alt="Adzanid Logo" 
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-teal-700">Adzanid</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-600 hover:text-teal-600 transition">Features</a>
            <a href="#screenshots" className="text-gray-600 hover:text-teal-600 transition">Screenshots</a>
            <a href="#download" className="text-gray-600 hover:text-teal-600 transition">Download</a>
            <a href="https://github.com/fikrisyahid/adzanid" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition">GitHub</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src="https://raw.githubusercontent.com/fikrisyahid/adzanid/refs/heads/main/assets/icon.png" 
              alt="Adzanid" 
              className="w-32 h-32 drop-shadow-2xl animate-float"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Adzanid
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Jadwal Sholat Indonesia
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Desktop prayer times application for Indonesian cities. Simple, elegant, and always on time.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="#download" 
              className="px-8 py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition transform hover:scale-105 shadow-lg"
            >
              Download for Windows
            </a>
            <a 
              href="#screenshots" 
              className="px-8 py-4 bg-white text-teal-600 border-2 border-teal-600 rounded-xl font-semibold hover:bg-teal-50 transition transform hover:scale-105 shadow-lg"
            >
              View Gallery
            </a>
            <a 
              href="https://github.com/fikrisyahid/adzanid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition transform hover:scale-105 shadow-lg"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Fitur Unggulan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard 
              icon="📅"
              title="Waktu Sholat Real-Time"
              description="Jadwal sholat hari ini (Subuh, Dzuhur, Ashar, Maghrib, Isya) otomatis dan akurat"
            />
            <FeatureCard 
              icon="🕌"
              title="100+ Kota Indonesia"
              description="Mencakup semua ibu kota provinsi dan kota-kota besar di seluruh Indonesia"
            />
            <FeatureCard 
              icon="🔔"
              title="Notifikasi Audio"
              description="Mainkan suara adzan saat waktu sholat dengan file MP3 yang dapat disesuaikan"
            />
            <FeatureCard 
              icon="🎨"
              title="Dark Mode"
              description="Beralih antara tema terang dan gelap sesuai preferensi Anda"
            />
            <FeatureCard 
              icon="💻"
              title="Integrasi System Tray"
              description="Minimalkan ke system tray dan terima notifikasi waktu sholat"
            />
            <FeatureCard 
              icon="🚀"
              title="Auto-Start"
              description="Berjalan otomatis saat sistem startup (Windows, macOS, Linux)"
            />
            <FeatureCard 
              icon="⏰"
              title="Live Clock"
              description="Jam yang selalu terlihat menampilkan waktu saat ini"
            />
            <FeatureCard 
              icon="🌐"
              title="Multi-Platform"
              description="Bekerja di Windows, macOS, dan Linux"
            />
            <FeatureCard 
              icon="🎵"
              title="Custom Audio"
              description="Gunakan file MP3 adzan favorit Anda sendiri"
            />
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-16 px-6 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Tampilan Aplikasi
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Lihat antarmuka Adzanid yang bersih dan modern dengan dukungan tema terang dan gelap
          </p>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Schedule Screenshots */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-800 text-center mb-3">📅 Jadwal Sholat</h3>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <img 
                      src="/schedule_white.png" 
                      alt="Jadwal Sholat - Light Mode" 
                      className="w-full rounded-lg shadow-lg border border-gray-200 hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-center text-gray-500 text-xs">☀️ Light Mode</p>
                  </div>
                  <div className="space-y-1">
                    <img 
                      src="/schedule_black.png" 
                      alt="Jadwal Sholat - Dark Mode" 
                      className="w-full rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-center text-gray-500 text-xs">🌙 Dark Mode</p>
                  </div>
                </div>
              </div>

              {/* Settings Screenshots */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-800 text-center mb-3">⚙️ Pengaturan</h3>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <img 
                      src="/setting_white.png" 
                      alt="Pengaturan - Light Mode" 
                      className="w-full rounded-lg shadow-lg border border-gray-200 hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-center text-gray-500 text-xs">☀️ Light Mode</p>
                  </div>
                  <div className="space-y-1">
                    <img 
                      src="/setting_black.png" 
                      alt="Pengaturan - Dark Mode" 
                      className="w-full rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-center text-gray-500 text-xs">🌙 Dark Mode</p>
                  </div>
                </div>
              </div>

              {/* About Screenshots */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-800 text-center mb-3">ℹ️ Tentang</h3>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <img 
                      src="/about_white.png" 
                      alt="Tentang - Light Mode" 
                      className="w-full rounded-lg shadow-lg border border-gray-200 hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-center text-gray-500 text-xs">☀️ Light Mode</p>
                  </div>
                  <div className="space-y-1">
                    <img 
                      src="/about_black.png" 
                      alt="Tentang - Dark Mode" 
                      className="w-full rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-center text-gray-500 text-xs">🌙 Dark Mode</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Download Sekarang
          </h2>
          
          {/* Windows Download */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-teal-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🪟</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Windows</h3>
                <p className="text-gray-600">Ready to use - No Python required!</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Download executable versi Windows. Langsung ekstrak dan jalankan file <code className="bg-gray-100 px-2 py-1 rounded">Adzanid.exe</code>
            </p>
            <a 
              href="https://github.com/fikrisyahid/adzanid/releases/download/v1.1.0/Adzanid-Windows-v1.1.0.zip" 
              className="inline-block px-8 py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition transform hover:scale-105 shadow-lg"
              download
            >
              📥 Download Adzanid v1.1.0 for Windows
            </a>
            <p className="text-sm text-gray-500 mt-4">
              ⚠️ <strong>Windows SmartScreen Warning:</strong> Anda mungkin melihat peringatan keamanan. 
              Klik "More info" lalu "Run anyway". Aplikasi ini aman - Anda dapat memverifikasi source code di GitHub.
            </p>
          </div>

          {/* macOS & Linux */}
          <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-2xl shadow-xl p-8 border-2 border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🍎🐧</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">macOS & Linux</h3>
                <p className="text-gray-600">Automated installation</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-sm text-yellow-800">
                <strong>⚠️ Penting:</strong> Memerlukan Python 3.10, 3.11, atau 3.12 (bukan 3.13 atau lebih tinggi karena kompatibilitas PyInstaller).
              </p>
            </div>

            <p className="text-gray-600 mb-4">
              Gunakan script instalasi otomatis yang menangani semuanya untuk Anda:
            </p>
            
            {/* Automated Installation */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Instalasi Otomatis</h4>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                <div className="text-green-400"># Clone repository</div>
                <div>git clone https://github.com/fikrisyahid/adzanid.git</div>
                <div>cd adzanid</div>
                <div className="mt-4 text-green-400"># Buat script executable</div>
                <div>chmod +x install.sh</div>
                <div className="mt-4 text-green-400"># Jalankan instalasi dengan sudo</div>
                <div>sudo ./install.sh</div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-sm text-blue-800 mb-2">
                <strong>📦 Yang dilakukan script:</strong>
              </p>
              <ul className="text-sm text-blue-900 space-y-1 ml-4 list-disc">
                <li>Validasi instalasi Python dan versi</li>
                <li>Membuat virtual environment</li>
                <li>Install semua dependencies</li>
                <li>Build aplikasi dengan PyInstaller</li>
                <li>Copy assets ke lokasi yang tepat</li>
                <li>Install ke system directory (<code className="bg-blue-100 px-1 rounded">/opt/adzanid</code> atau <code className="bg-blue-100 px-1 rounded">/Applications</code>)</li>
                <li>Membuat shortcut command-line: <code className="bg-blue-100 px-1 rounded">adzanid</code></li>
              </ul>
            </div>

            <p className="text-gray-600 mb-4">
              Setelah instalasi, cari Adzanid di application menu Anda atau jalankan <code className="bg-gray-100 px-2 py-1 rounded">adzanid</code> di terminal.
            </p>

            <a 
              href="https://github.com/fikrisyahid/adzanid#installation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition"
            >
              📖 Lihat Petunjuk Lengkap & Instalasi Manual
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="https://raw.githubusercontent.com/fikrisyahid/adzanid/refs/heads/main/assets/icon.png" 
              alt="Adzanid" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold">Adzanid</span>
          </div>
          <p className="text-gray-400 mb-6">
            Made with ❤️ for the Muslim community in Indonesia
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://github.com/fikrisyahid/adzanid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>
            <a 
              href="https://github.com/fikrisyahid/adzanid/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              Report Issues
            </a>
            <a 
              href="https://github.com/fikrisyahid/adzanid#license" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              MIT License
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © 2026 Adzanid. Prayer times powered by <a href="https://aladhan.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">Aladhan API</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default App
