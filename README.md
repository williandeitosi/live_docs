
# Write together
![Captura de tela 2024-10-21 180948](https://github.com/user-attachments/assets/ea738178-0998-4c88-8b23-12ad0c4e4270)

Esta é uma aplicação web para edição colaborativa de documentos em tempo real. Ela permite que múltiplos usuários editem ou visualizem documentos simultaneamente, com gerenciamento de permissões pelo administrador. A autenticação é feita pelo Clerk, e o Sentry é usado para monitoramento de erros e performance.



[Visite o site](https://wt.williandeitosi.com)

## 🛠️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)**: Framework React moderno para desenvolvimento web.
- **[TypeScript](https://www.typescriptlang.org/)**: Superconjunto de JavaScript que adiciona tipagem estática ao projeto.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização rápida e customizável.
- **[ShadCN](https://shadcn.dev/)**: Componentes UI estilizados para facilitar a criação de interfaces com Tailwind CSS.
- **[Liveblocks](https://liveblocks.io/)**: Gerenciamento de edição em tempo real, permitindo que os usuários colaborem de forma simultânea.
- **[Clerk](https://go.clerk.com/BNbvGnJ)**: Autenticação e gerenciamento de usuários, garantindo segurança e simplicidade no login.
- **[Sentry](https://bit.ly/4abT6PG)**: Monitoramento de erros e performance, ajudando a identificar e resolver problemas rapidamente.

## ⚙️ Funcionalidades

- **Edição em Tempo Real**: Múltiplos usuários podem editar o mesmo documento simultaneamente.
- **Permissões de Acesso**: Administradores podem conceder permissões de edição ou definir visualização apenas.
- **Autenticação Segura**: Integração com Clerk para uma experiência de login rápida e segura, com acesso a documentos salvos.
- **Monitoramento de Erros**: Sentry para rastrear e corrigir possíveis falhas no sistema.

## 🚀 Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/williandeitosi/live_docs.git
   cd live_docs
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` e adicione suas chaves da API para Liveblocks, Clerk e Sentry.

4. Inicie o servidor:
   ```bash
   npm run dev
   ```

5. Acesse a aplicação em `http://localhost:3000`.

## 📖 Documentação

- **Next.js**: [Documentação Oficial](https://nextjs.org/docs)
- **TypeScript**: [Documentação Oficial](https://www.typescriptlang.org/docs/)
- **Tailwind CSS**: [Documentação Oficial](https://tailwindcss.com/docs)
- **ShadCN**: [Documentação Oficial](https://shadcn.dev/docs)
- **Liveblocks**: [Documentação Oficial](https://liveblocks.io/docs)
- **Clerk**: [Documentação Oficial](https://docs.clerk.dev/)
- **Sentry**: [Documentação Oficial](https://docs.sentry.io/)

## 📝 Contribuições

Sinta-se à vontade para abrir issues e enviar pull requests para melhorias ou correções.
