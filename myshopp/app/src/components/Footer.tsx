export default function Footer() {
    
  return (
    <footer className="bg-[#FFF9ED] border-t border-[#4B241C]/10 text-[#4B241C] py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-xl font-bold mb-4">Quentin</h3>
          <p className="text-sm italic">Pão de queijo quentinho, feito com amor e tradição brasileira.</p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 text-sm uppercase">Institucional</h4>
          <ul className="text-sm space-y-2">
            <li><a href="/sobre" className="hover:underline">Nossa História</a></li>
            <li><a href="/politicas" className="hover:underline">Trocas e Devoluções</a></li>
            <li><a href="/privacidade" className="hover:underline">Privacidade</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm uppercase">Contato</h4>
          <p className="text-sm">contato@quentin.com.br</p>
          <p className="text-sm">Fortaleza, CE</p>
        </div>
      </div>
      <div className="text-center mt-10 text-xs opacity-60">
        © 2026 Quentin - Quentinho de Casa. Todos os direitos reservados.
      </div>
    </footer>
  );
};