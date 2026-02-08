import React from 'react';

interface NavbarProps {
  userEmail?: string;
  isAdmin?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ userEmail, isAdmin }) => {
  return (
    <nav className="bg-[#F2A922] text-[#4B241C] px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold font-serif">Quentin</div>
      
      <div className="flex gap-6 items-center font-medium">
        <a href="/" className="hover:opacity-80">Home</a>
        <a href="/cardapio" className="hover:opacity-80">Cardápio</a>
        
        {/* Só aparece se for o seu e-mail de admin */}
        {isAdmin && (
          <a href="/admin" className="bg-[#4B241C] text-[#FFF9ED] px-4 py-1 rounded-full text-sm">
            Painel Admin
          </a>
        )}
        
        <div className="flex items-center gap-2">
          {userEmail ? (
            <span className="text-sm border-l border-[#4B241C] pl-4">{userEmail}</span>
          ) : (
            <a href="/login" className="underline">Entrar</a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;