// JALADOS TODOS EL MIERCOLES
import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para verificar el usuario y contraseña
    console.log('Usuario:', user);
    console.log('Contraseña:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
         
          
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-xl transition duration-300"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
