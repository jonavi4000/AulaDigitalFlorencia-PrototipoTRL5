import { useState } from 'react';

type UserType = 'docente' | 'estudiante';
type ModalType = 'forgot-password' | 'request-access' | null;

interface LoginPageProps {
  onLogin: (userType: UserType, username: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [selectedType, setSelectedType] = useState<UserType | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [resetEmail, setResetEmail] = useState('');
  const [requestName, setRequestName] = useState('');
  const [requestEmail, setRequestEmail] = useState('');
  const [requestType, setRequestType] = useState<UserType>('estudiante');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedType && username && password) {
      // En una aplicación real, aquí validarías las credenciales
      onLogin(selectedType, username);
    }
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar un correo de recuperación de contraseña
    setShowSuccess(true);
    setActiveModal(null);
  };

  const handleRequestAccess = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar una solicitud de acceso
    setShowSuccess(true);
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-[#f4f8fb] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo y título */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">💻</div>
          <h1 className="text-3xl text-[#007acc] mb-2">Aula Digital Florencia</h1>
          <p className="text-gray-600 text-sm">
            Acceso institucional al aprendizaje digital
          </p>
        </div>

        {/* Tarjeta de login */}
        <div className="bg-white rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-8">
          {!selectedType ? (
            <>
              <h2 className="text-xl text-center mb-6 text-gray-800">
                Seleccione su tipo de usuario
              </h2>
              
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedType('docente')}
                  className="w-full bg-[#007acc] text-white py-4 px-6 rounded-lg hover:bg-[#005b99] transition-colors flex items-center justify-center gap-3"
                >
                  <span className="text-2xl">👨‍🏫</span>
                  <span className="text-lg">Acceso Docente</span>
                </button>
                
                <button
                  onClick={() => setSelectedType('estudiante')}
                  className="w-full bg-[#007acc] text-white py-4 px-6 rounded-lg hover:bg-[#005b99] transition-colors flex items-center justify-center gap-3"
                >
                  <span className="text-2xl">🎓</span>
                  <span className="text-lg">Acceso Estudiante</span>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl text-gray-800">
                  {selectedType === 'docente' ? '👨‍🏫 Docente' : '🎓 Estudiante'}
                </h2>
                <button
                  onClick={() => {
                    setSelectedType(null);
                    setUsername('');
                    setPassword('');
                  }}
                  className="text-sm text-[#007acc] hover:underline"
                >
                  Cambiar
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Usuario o Correo Institucional
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder={selectedType === 'docente' ? 'docente@auladigital.edu.co' : 'estudiante@auladigital.edu.co'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007acc]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007acc]"
                    required
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-600">Recordarme</span>
                  </label>
                  <a href="#" className="text-[#007acc] hover:underline" onClick={(e) => { e.preventDefault(); setActiveModal('forgot-password'); }}>
                    ¿Olvidó su contraseña?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#007acc] text-white py-3 px-6 rounded-lg hover:bg-[#005b99] transition-colors"
                >
                  Iniciar Sesión
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-gray-600">
                  ¿No tiene una cuenta?{' '}
                  <a href="#" className="text-[#007acc] hover:underline" onClick={(e) => { e.preventDefault(); setActiveModal('request-access'); }}>
                    Solicitar acceso
                  </a>
                </p>
              </div>
            </>
          )}
        </div>

        {/* Información adicional */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Para soporte técnico: soporte@auladigitalflorencia.edu.co</p>
        </div>
      </div>

      {/* Modal de recuperación de contraseña */}
      {activeModal === 'forgot-password' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl text-gray-800">Recuperar Contraseña</h2>
              <button 
                onClick={() => { setActiveModal(null); setShowSuccess(false); setResetEmail(''); }}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Ingrese su correo institucional y le enviaremos las instrucciones para restablecer su contraseña.
            </p>
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Correo Institucional
                </label>
                <input
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="correo@auladigital.edu.co"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007acc]"
                  required
                />
              </div>

              {showSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 text-xl">✓</span>
                    <div className="text-sm text-green-800">
                      Se ha enviado un correo a <strong>{resetEmail}</strong> con instrucciones para restablecer su contraseña.
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-[#007acc] text-white py-3 px-6 rounded-lg hover:bg-[#005b99] transition-colors"
                >
                  Enviar instrucciones
                </button>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Modal de solicitud de acceso */}
      {activeModal === 'request-access' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl text-gray-800">Solicitar Acceso</h2>
              <button 
                onClick={() => { setActiveModal(null); setShowSuccess(false); setRequestName(''); setRequestEmail(''); }}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Complete el formulario y le enviaremos las credenciales de acceso a su correo institucional.
            </p>
            <form onSubmit={handleRequestAccess} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  value={requestName}
                  onChange={(e) => setRequestName(e.target.value)}
                  placeholder="Juan Pérez"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007acc]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Correo Institucional
                </label>
                <input
                  type="email"
                  value={requestEmail}
                  onChange={(e) => setRequestEmail(e.target.value)}
                  placeholder="correo@auladigital.edu.co"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007acc]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Tipo de Usuario
                </label>
                <select
                  value={requestType}
                  onChange={(e) => setRequestType(e.target.value as UserType)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007acc]"
                >
                  <option value="estudiante">Estudiante</option>
                  <option value="docente">Docente</option>
                </select>
              </div>

              {showSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 text-xl">✓</span>
                    <div className="text-sm text-green-800">
                      Su solicitud de acceso ha sido enviada a <strong>{requestEmail}</strong>. Le contactaremos pronto con sus credenciales.
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-[#007acc] text-white py-3 px-6 rounded-lg hover:bg-[#005b99] transition-colors"
                >
                  Enviar solicitud
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}