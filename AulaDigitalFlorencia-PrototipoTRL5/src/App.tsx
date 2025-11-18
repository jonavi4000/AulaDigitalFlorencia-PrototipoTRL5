import { useState } from 'react';
import { CourseCard } from './components/CourseCard';
import { ProgressIndicator } from './components/ProgressIndicator';
import { LoginPage } from './components/LoginPage';

type Role = 'docente' | 'estudiante';
type Section = 'inicio' | 'cursos' | 'recursos' | 'indicadores' | 'capacitacion' | 'soporte' | 'foro';

interface User {
  type: Role;
  username: string;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [activeSection, setActiveSection] = useState<Section>('inicio');

  const handleLogin = (userType: Role, username: string) => {
    setUser({ type: userType, username });
    setActiveSection('inicio');
  };

  const handleLogout = () => {
    setUser(null);
    setActiveSection('inicio');
  };

  // Si no hay usuario autenticado, mostrar página de login
  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-[#f4f8fb]">
      {/* Header */}
      <header className="bg-[#007acc] text-white p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-center flex-grow">
            <div className="text-xl">💻 Aula Digital Florencia</div>
            <div className="text-sm mt-1">
              Acceso institucional al aprendizaje digital en Florencia, Caquetá
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm">
                {user.type === 'docente' ? '👨‍🏫' : '🎓'} {user.username}
              </div>
              <div className="text-xs text-gray-200">
                {user.type === 'docente' ? 'Docente' : 'Estudiante'}
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-white text-[#007acc] px-4 py-2 rounded-lg hover:bg-gray-100 text-sm transition-colors"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex min-h-screen">
        {/* Navigation */}
        <nav className="w-[220px] bg-[#e6f2fa] py-5 shadow-[2px_0_5px_rgba(0,0,0,0.1)]">
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); setActiveSection('inicio'); }}
            className="block text-[#004c75] no-underline px-5 py-3 hover:bg-[#cde7f7]"
          >
            Inicio
          </a>
          <a
            href="#cursos"
            onClick={(e) => { e.preventDefault(); setActiveSection('cursos'); }}
            className="block text-[#004c75] no-underline px-5 py-3 hover:bg-[#cde7f7]"
          >
            Cursos
          </a>
          <a
            href="#recursos"
            onClick={(e) => { e.preventDefault(); setActiveSection('recursos'); }}
            className="block text-[#004c75] no-underline px-5 py-3 hover:bg-[#cde7f7]"
          >
            Recursos
          </a>
          <a
            href="#indicadores"
            onClick={(e) => { e.preventDefault(); setActiveSection('indicadores'); }}
            className="block text-[#004c75] no-underline px-5 py-3 hover:bg-[#cde7f7]"
          >
            Indicadores
          </a>
          <a
            href="#capacitacion"
            onClick={(e) => { e.preventDefault(); setActiveSection('capacitacion'); }}
            className="block text-[#004c75] no-underline px-5 py-3 hover:bg-[#cde7f7]"
          >
            Capacitación
          </a>
          <a
            href="#soporte"
            onClick={(e) => { e.preventDefault(); setActiveSection('soporte'); }}
            className="block text-[#004c75] no-underline px-5 py-3 hover:bg-[#cde7f7]"
          >
            Soporte
          </a>
          <a
            href="#foro"
            onClick={(e) => { e.preventDefault(); setActiveSection('foro'); }}
            className="block text-[#004c75] no-underline px-5 py-3 hover:bg-[#cde7f7]"
          >
            Foro
          </a>
        </nav>

        {/* Main Content */}
        <main className="flex-grow p-10 bg-white">
          {/* Content Area */}
          <div>
            {activeSection === 'inicio' && (
              <>
                {/* Introducción de Aula Digital Florencia */}
                <div className="bg-[#f9f9f9] rounded-[10px] p-6 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-5 border-l-4 border-[#007acc]">
                  <h2 className="text-[#007acc] mb-4">Bienvenido a Aula Digital Florencia</h2>
                  <p className="mb-3 text-gray-700">
                    Aula Digital Florencia es una plataforma creada para fortalecer el aprendizaje en las sedes educativas públicas del municipio, promoviendo el uso responsable y sostenible de las tecnologías digitales.
                  </p>
                  <p className="mb-3 text-gray-700">
                    Este proyecto busca cerrar la brecha digital entre las instituciones rurales y urbanas, ofreciendo acceso a herramientas tecnológicas, capacitación docente y recursos educativos de calidad.
                  </p>
                  <p className="text-gray-700">
                    Inspirado en el principio de inclusión y equidad educativa, Aula Digital Florencia integra tecnología, innovación y comunidad para mejorar la educación en la región del Caquetá.
                  </p>
                </div>

                {user.type === 'docente' ? (
                  <>
                    <div className="bg-[#f9f9f9] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-5">
                      <h2>Panel del Docente</h2>
                      <p>
                        Gestione sus cursos, publique materiales, revise evaluaciones y
                        visualice el progreso de los estudiantes.
                      </p>
                    </div>
                    <div className="bg-[#f9f9f9] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-5">
                      <h3>Herramientas principales:</h3>
                      <ul>
                        <li>📘 Crear y editar cursos.</li>
                        <li>📊 Consultar indicadores de desempeño.</li>
                        <li>📤 Subir materiales de apoyo.</li>
                        <li>💬 Comunicación con estudiantes.</li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-[#f9f9f9] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-5">
                      <h2>Panel del Estudiante</h2>
                      <p>
                        Acceda a sus cursos, descargue materiales, participe en foros y
                        consulte sus calificaciones.
                      </p>
                    </div>
                    <div className="bg-[#f9f9f9] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-5">
                      <h3>Herramientas disponibles:</h3>
                      <ul>
                        <li>📚 Visualizar cursos inscritos.</li>
                        <li>📥 Descargar recursos educativos.</li>
                        <li>🧩 Realizar actividades y evaluaciones.</li>
                        <li>📈 Ver su progreso académico.</li>
                      </ul>
                    </div>
                  </>
                )}
              </>
            )}

            {activeSection === 'cursos' && (
              <div>
                <h2 className="mb-6">📚 Catálogo de Cursos</h2>
                
                <CourseCard 
                  title="Alfabetización digital básica (estudiantes)"
                  description="Manejo de dispositivos, navegación web y uso de correo institucional."
                  duration="4 semanas"
                  level="Básico"
                />
                
                <CourseCard 
                  title="Uso pedagógico de TIC (docentes)"
                  description="Cómo integrar herramientas digitales (Canva, Kahoot, Classroom, etc.) en clases."
                  duration="4 semanas"
                  level="Intermedio"
                />
                
                <CourseCard 
                  title="Robótica y pensamiento lógico"
                  description="Conceptos de lógica, algoritmos y uso de herramientas de programación educativa."
                  duration="4 semanas"
                  level="Intermedio"
                />
                
                <CourseCard 
                  title="Creación de materiales educativos digitales"
                  description="Diseño de recursos educativos digitales (RED), materiales interactivos y guías multimedia."
                  duration="4 semanas"
                  level="Intermedio"
                />
                
                <CourseCard 
                  title="Seguridad y ciudadanía digital"
                  description="Ética digital, huella digital, comportamiento seguro en línea y protección de datos."
                  duration="4 semanas"
                  level="Básico"
                />
              </div>
            )}

            {activeSection === 'recursos' && (
              <div>
                <h2 className="mb-6">💾 Recursos Digitales</h2>
                <p className="text-gray-600 mb-6">Materiales de apoyo y guías para docentes y estudiantes</p>
                
                {/* Guías interactivas */}
                <div className="bg-[#f9f9f9] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📄</span>
                    <div className="flex-grow">
                      <h3 className="text-[#007acc] mb-2">Guías interactivas</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        PDF sobre herramientas digitales libres (Canva, Moodle, Google Workspace).
                      </p>
                      <button className="bg-[#007acc] text-white px-4 py-2 rounded-lg hover:bg-[#005b99] text-sm">
                        Descargar PDF
                      </button>
                    </div>
                  </div>
                </div>

                {/* Videotutoriales */}
                <div className="bg-[#f9f9f9] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎥</span>
                    <div className="flex-grow">
                      <h3 className="text-[#007acc] mb-2">Videotutoriales</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Serie "Aprende con TIC Florencia" - Tutoriales paso a paso para herramientas digitales.
                      </p>
                      <button className="bg-[#007acc] text-white px-4 py-2 rounded-lg hover:bg-[#005b99] text-sm">
                        Ver videos
                      </button>
                    </div>
                  </div>
                </div>

                {/* Biblioteca digital UNAD */}
                <div className="bg-[#f9f9f9] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📚</span>
                    <div className="flex-grow">
                      <h3 className="text-[#007acc] mb-2">Biblioteca digital UNAD</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Enlaces a materiales abiertos para el fortalecimiento académico.
                      </p>
                      <button className="bg-[#007acc] text-white px-4 py-2 rounded-lg hover:bg-[#005b99] text-sm">
                        Acceder a biblioteca
                      </button>
                    </div>
                  </div>
                </div>

                {/* Plantillas educativas */}
                <div className="bg-[#f9f9f9] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📋</span>
                    <div className="flex-grow">
                      <h3 className="text-[#007acc] mb-2">Plantillas educativas</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Formatos descargables para planeación de clases o tareas digitales.
                      </p>
                      <button className="bg-[#007acc] text-white px-4 py-2 rounded-lg hover:bg-[#005b99] text-sm">
                        Descargar plantillas
                      </button>
                    </div>
                  </div>
                </div>

                {/* Repositorio local */}
                <div className="bg-[#f9f9f9] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🗂️</span>
                    <div className="flex-grow">
                      <h3 className="text-[#007acc] mb-2">Repositorio local</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Banco de recursos compartidos entre docentes de las sedes rurales.
                      </p>
                      <button className="bg-[#007acc] text-white px-4 py-2 rounded-lg hover:bg-[#005b99] text-sm">
                        Explorar repositorio
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'indicadores' && (
              <div>
                <h2 className="mb-6">📊 Indicadores de Impacto TIC</h2>
                <p className="text-gray-600 mb-6">Medir el impacto del uso de las TIC en las instituciones</p>
                
                <ProgressIndicator 
                  label="% de conectividad activa"
                  current={78}
                  target={85}
                  icon="📈"
                />
                
                <ProgressIndicator 
                  label="Docentes capacitados en TIC"
                  current={65}
                  target={70}
                  icon="👩‍🏫"
                />
                
                <div className="bg-white rounded-lg p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">💻</span>
                    <span className="text-sm">Equipos en funcionamiento por sede</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#e6f2fa] p-3 rounded">
                      <div className="text-gray-600 text-xs mb-1">Sede Principal</div>
                      <div className="text-2xl text-[#007acc]">45</div>
                    </div>
                    <div className="bg-[#e6f2fa] p-3 rounded">
                      <div className="text-gray-600 text-xs mb-1">Sedes Rurales</div>
                      <div className="text-2xl text-[#007acc]">28</div>
                    </div>
                  </div>
                </div>
                
                <ProgressIndicator 
                  label="Participación en cursos digitales"
                  current={72}
                  target={80}
                  icon="🧠"
                />
                
                <ProgressIndicator 
                  label="Índice de mejora en competencias digitales"
                  current={68}
                  target={75}
                  icon="🎯"
                />
              </div>
            )}

            {activeSection === 'capacitacion' && (
              <div>
                <h2 className="mb-6">🧩 Capacitación</h2>
                <p className="text-gray-600 mb-6">Fortalecer habilidades de docentes y estudiantes</p>
                
                {/* Capacitación docente */}
                <div className="bg-[#f9f9f9] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-4">
                  <h3 className="text-[#007acc] mb-3">🔹 Capacitación docente</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Talleres en uso de plataformas, evaluación digital, y creación de recursos.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <button className="bg-[#007acc] text-white px-4 py-2 rounded-lg hover:bg-[#005b99] text-sm">
                      Inscribirse
                    </button>
                    <button className="bg-white text-[#007acc] px-4 py-2 rounded-lg hover:bg-[#e6f2fa] text-sm border border-[#007acc]">
                      Ver próximas sesiones
                    </button>
                    <button className="bg-white text-[#007acc] px-4 py-2 rounded-lg hover:bg-[#e6f2fa] text-sm border border-[#007acc]">
                      Descargar material
                    </button>
                  </div>
                </div>

                {/* Capacitación estudiantil */}
                <div className="bg-[#f9f9f9] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-4">
                  <h3 className="text-[#007acc] mb-3">🔹 Capacitación estudiantil</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Orientación sobre herramientas ofimáticas, trabajo en línea y seguridad digital.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <button className="bg-[#007acc] text-white px-4 py-2 rounded-lg hover:bg-[#005b99] text-sm">
                      Inscribirse
                    </button>
                    <button className="bg-white text-[#007acc] px-4 py-2 rounded-lg hover:bg-[#e6f2fa] text-sm border border-[#007acc]">
                      Ver próximas sesiones
                    </button>
                    <button className="bg-white text-[#007acc] px-4 py-2 rounded-lg hover:bg-[#e6f2fa] text-sm border border-[#007acc]">
                      Descargar material
                    </button>
                  </div>
                </div>

                {/* Capacitaciones comunitarias */}
                <div className="bg-[#f9f9f9] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-4">
                  <h3 className="text-[#007acc] mb-3">🔹 Capacitaciones comunitarias</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Espacios abiertos a padres o administrativos sobre alfabetización digital básica.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <button className="bg-[#007acc] text-white px-4 py-2 rounded-lg hover:bg-[#005b99] text-sm">
                      Inscribirse
                    </button>
                    <button className="bg-white text-[#007acc] px-4 py-2 rounded-lg hover:bg-[#e6f2fa] text-sm border border-[#007acc]">
                      Ver próximas sesiones
                    </button>
                    <button className="bg-white text-[#007acc] px-4 py-2 rounded-lg hover:bg-[#e6f2fa] text-sm border border-[#007acc]">
                      Descargar material
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'soporte' && (
              <div>
                <h2 className="mb-6">🛠️ Soporte Técnico y Pedagógico</h2>
                <p className="text-gray-600 mb-6">Ayuda técnica y pedagógica para la comunidad educativa</p>
                
                {/* Formulario de soporte */}
                <div className="bg-[#f9f9f9] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-4">
                  <h3 className="text-[#007acc] mb-3">💬 Reportar problema o consulta</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Complete el formulario para reportar fallas técnicas o dudas de uso.
                  </p>
                  <div className="space-y-3 mb-4">
                    <input 
                      type="text" 
                      placeholder="Nombre completo" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007acc]"
                    />
                    <input 
                      type="email" 
                      placeholder="Correo electrónico" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007acc]"
                    />
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007acc]">
                      <option>Tipo de consulta</option>
                      <option>Problema técnico</option>
                      <option>Duda pedagógica</option>
                      <option>Acceso a plataforma</option>
                      <option>Otro</option>
                    </select>
                    <textarea 
                      placeholder="Describa su consulta o problema" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007acc]"
                    />
                  </div>
                  <button className="bg-[#007acc] text-white px-6 py-2 rounded-lg hover:bg-[#005b99]">
                    Enviar consulta
                  </button>
                </div>

                {/* Contactos */}
                <div className="bg-[#f9f9f9] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-4">
                  <h3 className="text-[#007acc] mb-3">📞 Contactos</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">💻</span>
                      <div>
                        <div className="text-sm">Soporte técnico</div>
                        <a href="mailto:soporte@auladigitalflorencia.edu.co" className="text-sm text-[#007acc] hover:underline">
                          soporte@auladigitalflorencia.edu.co
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">👨‍🏫</span>
                      <div>
                        <div className="text-sm">Tutor pedagógico</div>
                        <a href="mailto:tutor@auladigitalflorencia.edu.co" className="text-sm text-[#007acc] hover:underline">
                          tutor@auladigitalflorencia.edu.co
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Manuales y guías */}
                <div className="bg-[#f9f9f9] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-4">
                  <h3 className="text-[#007acc] mb-3">📖 Manuales y guías</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white rounded border border-gray-200">
                      <div className="flex items-center gap-2">
                        <span>📄</span>
                        <span className="text-sm">Manual de usuario completo</span>
                      </div>
                      <button className="text-[#007acc] hover:underline text-sm">Descargar PDF</button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border border-gray-200">
                      <div className="flex items-center gap-2">
                        <span>⚡</span>
                        <span className="text-sm">Guía rápida de acceso a la plataforma</span>
                      </div>
                      <button className="text-[#007acc] hover:underline text-sm">Descargar PDF</button>
                    </div>
                  </div>
                </div>

                {/* Chat de ayuda */}
                <div className="bg-[#e6f2fa] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-4 border-2 border-[#007acc]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">💬</span>
                      <div>
                        <h3 className="text-[#007acc] mb-1">Chat de ayuda en línea</h3>
                        <p className="text-sm text-gray-600">Asistencia inmediata de lunes a viernes, 8am - 5pm</p>
                      </div>
                    </div>
                    <button className="bg-[#007acc] text-white px-6 py-2 rounded-lg hover:bg-[#005b99]">
                      Iniciar chat
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'foro' && (
              <div>
                <h2 className="mb-6">💬 Foro de Discusión</h2>
                <p className="text-gray-600 mb-6">Espacio para intercambiar ideas y experiencias</p>
                
                {/* Formulario de publicación */}
                <div className="bg-[#f9f9f9] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-4">
                  <h3 className="text-[#007acc] mb-3">✏️ Publicar nuevo tema</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Comparta sus pensamientos, preguntas o experiencias relacionadas con el uso de TIC.
                  </p>
                  <div className="space-y-3 mb-4">
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007acc]">
                      <option>Seleccione una categoría</option>
                      <option>🎓 Aprendizaje Digital</option>
                      <option>👨‍🏫 Pedagogía TIC</option>
                      <option>🔧 Soporte Técnico</option>
                      <option>💡 Ideas y Sugerencias</option>
                      <option>📢 Anuncios</option>
                    </select>
                    <input 
                      type="text" 
                      placeholder="Título del tema" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007acc]"
                    />
                    <textarea 
                      placeholder="Descripción del tema" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007acc]"
                    />
                  </div>
                  <button className="bg-[#007acc] text-white px-6 py-2 rounded-lg hover:bg-[#005b99]">
                    Publicar tema
                  </button>
                </div>

                {/* Categorías del foro */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow-[0_2px_6px_rgba(0,0,0,0.1)] border-l-4 border-[#007acc]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🎓</span>
                      <h3 className="text-[#007acc]">Aprendizaje Digital</h3>
                    </div>
                    <p className="text-sm text-gray-600">Temas sobre cursos, recursos y metodologías</p>
                    <p className="text-xs text-gray-500 mt-2">32 temas · 156 respuestas</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-[0_2px_6px_rgba(0,0,0,0.1)] border-l-4 border-[#007acc]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">👨‍🏫</span>
                      <h3 className="text-[#007acc]">Pedagogía TIC</h3>
                    </div>
                    <p className="text-sm text-gray-600">Estrategias de enseñanza con tecnología</p>
                    <p className="text-xs text-gray-500 mt-2">28 temas · 142 respuestas</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-[0_2px_6px_rgba(0,0,0,0.1)] border-l-4 border-[#007acc]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🔧</span>
                      <h3 className="text-[#007acc]">Soporte Técnico</h3>
                    </div>
                    <p className="text-sm text-gray-600">Ayuda con problemas técnicos</p>
                    <p className="text-xs text-gray-500 mt-2">45 temas · 198 respuestas</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-[0_2px_6px_rgba(0,0,0,0.1)] border-l-4 border-[#007acc]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">💡</span>
                      <h3 className="text-[#007acc]">Ideas y Sugerencias</h3>
                    </div>
                    <p className="text-sm text-gray-600">Comparta sus ideas para mejorar</p>
                    <p className="text-xs text-gray-500 mt-2">19 temas · 87 respuestas</p>
                  </div>
                </div>

                {/* Temas destacados */}
                <div className="bg-[#f9f9f9] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-4">
                  <h3 className="text-[#007acc] mb-4">🔥 Temas destacados</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-start gap-3 flex-grow">
                          <span className="text-2xl">👨‍🏫</span>
                          <div className="flex-grow">
                            <h4 className="text-sm mb-1">Cómo mejorar la interacción en clase con TIC</h4>
                            <p className="text-xs text-gray-500">Por María González · hace 2 días</p>
                          </div>
                        </div>
                        <div className="flex gap-3 text-xs text-gray-500">
                          <span>💬 23</span>
                          <span>👁️ 156</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Estoy buscando estrategias efectivas para mantener a los estudiantes participando activamente...
                      </p>
                      <button className="text-sm text-[#007acc] hover:underline">
                        Ver conversación completa →
                      </button>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-start gap-3 flex-grow">
                          <span className="text-2xl">🎓</span>
                          <div className="flex-grow">
                            <h4 className="text-sm mb-1">Recursos para la alfabetización digital en zonas rurales</h4>
                            <p className="text-xs text-gray-500">Por Carlos Ramírez · hace 3 días</p>
                          </div>
                        </div>
                        <div className="flex gap-3 text-xs text-gray-500">
                          <span>💬 18</span>
                          <span>👁️ 203</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        ¿Qué recursos han usado con éxito para enseñar alfabetización digital en zonas rurales?
                      </p>
                      <button className="text-sm text-[#007acc] hover:underline">
                        Ver conversación completa →
                      </button>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-start gap-3 flex-grow">
                          <span className="text-2xl">💡</span>
                          <div className="flex-grow">
                            <h4 className="text-sm mb-1">Propuesta: Banco de actividades TIC compartidas</h4>
                            <p className="text-xs text-gray-500">Por Ana Martínez · hace 5 días</p>
                          </div>
                        </div>
                        <div className="flex gap-3 text-xs text-gray-500">
                          <span>💬 31</span>
                          <span>👁️ 289</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Me gustaría proponer crear un repositorio donde los docentes puedan compartir actividades...
                      </p>
                      <button className="text-sm text-[#007acc] hover:underline">
                        Ver conversación completa →
                      </button>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-start gap-3 flex-grow">
                          <span className="text-2xl">🔧</span>
                          <div className="flex-grow">
                            <h4 className="text-sm mb-1">Problema de conectividad en sede rural El Paraíso</h4>
                            <p className="text-xs text-gray-500">Por Luis Gómez · hace 1 semana</p>
                          </div>
                        </div>
                        <div className="flex gap-3 text-xs text-gray-500">
                          <span>💬 12</span>
                          <span>👁️ 98</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Hemos estado experimentando problemas de conexión intermitente...
                      </p>
                      <button className="text-sm text-[#007acc] hover:underline">
                        Ver conversación completa →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Estadísticas del foro */}
                <div className="bg-[#e6f2fa] rounded-[10px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)]">
                  <h3 className="text-[#007acc] mb-3">📊 Estadísticas del foro</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl text-[#007acc] mb-1">124</div>
                      <div className="text-xs text-gray-600">Temas totales</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl text-[#007acc] mb-1">583</div>
                      <div className="text-xs text-gray-600">Respuestas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl text-[#007acc] mb-1">87</div>
                      <div className="text-xs text-gray-600">Miembros activos</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[#004c75] text-white py-4 text-center text-sm">
        <div className="mb-1">© 2025 Aula Digital Florencia - Todos los derechos reservados</div>
        <div className="text-xs text-gray-300">
          Desarrollado por: John Alexander Oviedo Mancera, Yenith Parra Alvarez, Elkin Octavio Araque Gallardo
        </div>
      </footer>
    </div>
  );
}