# 🎈 JEM Festas & Eventos  

Repositório: [jjpmonteiro/projeto-jem-festas-e-eventos](https://github.com/jjpmonteiro/projeto-jem-festas-e-eventos.git)

## 🎉 Visão Geral  
O **João e Marina Festas & Eventos** é um site da minha empresa com minha esposa que utilizei como primeiro item do meu portfólio digital, desenvolvido para apresentar nossos serviços de locação de brinquedos e atrações para festas infantis.  
O projeto foi construído com foco em **design responsivo**, **organização visual** e **uso eficiente do CSS Grid**, que foi aplicado para estruturar o layout principal de forma moderna e flexível.  

O objetivo é oferecer uma página visualmente atraente, leve e fácil de navegar — refletindo a alegria e a diversão dos eventos oferecidos pela empresa.  

## 🧩 Funcionalidades Principais  
- Apresentação clara dos serviços: camas elásticas (3,66 m e 2,44 m), tobogã inflável, piscina de bolinhas, casinha inflável, pipoca e algodão-doce.  
- Galeria com **imagens e vídeos reais** dos brinquedos em funcionamento.  
- Navegação simples e intuitiva com menu fixo e âncoras para seções.  
- Layout **totalmente responsivo**, adaptando-se a telas grandes e pequenas.  
- Uso intensivo do **CSS Grid** para estruturar as seções de serviços, galeria e informações.  
- Integração com WhatsApp e/ou formulário de contato para orçamentos rápidos.  

## 🧰 Tecnologias Utilizadas  
- **HTML5** → estrutura semântica e acessível.  
- **CSS3 (Grid Layout + Flexbox)** → grid utilizado para o layout principal e flexbox em seções internas para alinhamento e responsividade.  
- **JavaScript** → pequenas interações, como rolagem suave, botão “voltar ao topo” e controle de menus.  
- **Design responsivo** com media queries e unidades flexíveis (%, fr, vw, vh).  


## 🧩 Destaque Técnico – CSS Grid  
O **CSS Grid Layout** foi amplamente utilizado para organizar o conteúdo principal do site com o objetivo de praticar esse tipo de estilo aplicável.  
Com ele foi possível criar:  
- Seções alinhadas em colunas e linhas proporcionais;  
- Galerias de imagens que se ajustam automaticamente conforme o tamanho da tela;  
- Distribuição equilibrada entre texto e imagens, mantendo estética e legibilidade;  
- Código mais limpo e reutilizável, facilitando futuras manutenções.  

Exemplo simplificado de uso no projeto:
```css
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
```

## 📋 Status do Projeto

✅ Layout principal concluído com CSS Grid.

✅ Responsividade implementada.

✅ Galeria e seções informativas prontas.

## 🚧 Em desenvolvimento: possíveis melhorias visuais, SEO e formulário funcional.

## 🚀 Próximos Passos

1) Adicionar animações CSS e transições suaves para melhorar a experiência visual.

2) Implementar formulário de contato funcional (via e-mail ou integração com API).

3) Otimizar imagens e vídeos para carregamento mais rápido.

4) Adicionar meta tags e SEO básico para aparecer melhor no Google.

5) Publicar versão final via GitHub Pages, Netlify ou domínio próprio.

## 👤 Autor

João Paulo S. M.

GitHub: @jjpmonteiro

Projeto desenvolvido para a empresa **João e Marina Festas & Eventos Infantis**, com foco em aprendizado, portfólio e presença digital.
