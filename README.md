
# 🎟️ Event Registration SPA

<br><br>

Aplicação front-end em **Vue 3** para listagem, inscrição e cancelamento de participação em eventos, com foco em responsividade, UX fluida e código bem estruturado.

---

## ⚙️ Tecnologias

- **Vue 3 + Composition API** com `<script setup>`
- **Vite** para desenvolvimento moderno e rápido
- **Tailwind CSS** para estilização utilitária e responsiva
- **JSON Server** como fake API backend

---

## 🧩 Arquitetura

- **Componentização clara:**  
  Separação entre páginas (`EventsPage.vue`, `ReservationsPage.vue`) e componentes reutilizáveis (`EventCard`, `BookingItem`, `SectionCard`, etc.)
  
- **Composables reutilizáveis (`useBookings.ts`)**:  
  Encapsulam lógica de negócio como fetch, inscrição e cancelamento de reservas, promovendo reuso e testabilidade.

- **Estilo com Tailwind CSS:**  
  Layouts responsivos com grid flexível, animações de carregamento com `animate-pulse`, e botões estilizados via utilitários.

---

## ✨ Funcionalidades

- ✅ Listagem de eventos com carregamento visual
- ✅ Inscrição em eventos com **UI otimista** (atualização instantânea antes da resposta da API)
- ✅ Visualização das reservas feitas
- ✅ Cancelamento de reservas com feedback imediato
- ✅ Animações de carregamento (Skeleton UI)

---

## 📦 Backend Simulado com JSON Server

- Utiliza [JSON Server](https://github.com/typicode/json-server) como backend fake
- Suporte a **latência customizável** com `--delay` para testar loaders e transições
- Permite simular interações reais sem back-end dedicado

```bash
json-server --watch db.json --port 3001 --delay 1500
````

---

## 🛡️ UX e Tratamento de Erros

* Skeletons (`LoadingEventCard`, `LoadingBookingItem`) simulam estrutura visual do conteúdo durante o carregamento
* Componente `ErrorCard` exibe mensagens amigáveis em falhas de rede, com opção de tentar novamente
* Toda chamada `fetch` é protegida por `try/catch`, com estados `loading` e `error`

---

## 🧪 Experiência Responsiva e Otimista

* **Optimistic UI**: alterações de estado (ex: cancelamento) são aplicadas imediatamente na UI antes da confirmação do servidor
* Comportamento natural, sem recarregamento desnecessário da página

---

## 🚀 Como Rodar

```bash
# Instalar dependências
npm install vue
npm create vite@latest
npm install tailwindcss @tailwindcss/vite

# Rodar o JSON Server
npx json-server --watch db.json --port 3001 --delay 1500

# Rodar a aplicação Vue
npm run dev
```
