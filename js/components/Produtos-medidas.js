const modal = document.getElementById('product-modal');
  const modalImg = document.getElementById('modal-image');
  const modalDesc = document.getElementById('modal-description');
  const closeModal = document.getElementById('close-modal');

  const descriptions = {
  "Bacia Adenium": "Um toque de sofisticação minimalista. Ideal para realçar a beleza de Adeniums e suculentas, com formato que valoriza a simetria natural das plantas.",
  "Bacia Japonesa": "Inspirada na tradicional arte ceramista do oriente, esta peça traz serenidade e elegância para o cultivo de bonsais ou arranjos delicados.",
  "Jardineira Cuia": "Com curvas suaves e um design acolhedor, é perfeita para composições florais em ambientes internos, proporcionando charme e leveza.",
  "Gominha": "Pequena no tamanho, mas grande no estilo. Ideal para destacar mini suculentas ou servir de toque decorativo sutil em mesas e estantes.",
  "Cachepot Americano": "Clássico e atemporal, combina perfeitamente com ambientes modernos e sofisticados, valorizando qualquer composição.",
  "Palla": "Sua forma esférica transmite equilíbrio e requinte. Ideal como peça central, destacando o charme natural das plantas.",
  "Trivial": "Simples, funcional e indispensável. Um modelo coringa para o dia a dia com um toque de praticidade.",
  "Pezinho": "Com base elevada, oferece drenagem eficiente e um visual leve e elevado, ideal para interiores iluminados.",
  "Cachepot Bally": "Linhas suaves e modernas definem este cachepot, ideal para composições discretas e elegantes.",
  "Cachepot Bola": "Seu formato arredondado traz suavidade e movimento, ideal para decorações leves e descontraídas.",
  "Cachepot Esfera": "Design simétrico e refinado que se integra com facilidade a espaços contemporâneos e minimalistas.",
  "Cilindro Baixo": "Estável e robusto, é ideal para plantas volumosas ou composições densas, com um toque de sofisticação.",
  "Cilíndro Alto": "Verticalidade imponente que valoriza arranjos altos e sofisticados, ideal para ambientes elegantes.",
  "Cilíndro Esfera": "Fusão entre formas cilíndricas e curvas esféricas, trazendo equilíbrio e presença marcante.",
  "Cantil": "Com visual inspirado em recipientes antigos, é uma peça charmosa para composições rústicas ou retrôs.",
  "Continental": "Elegância europeia traduzida em cerâmica. Versátil, combina com os mais diversos estilos de decoração.",
  "Espiral": "Textura envolvente que remete ao movimento da natureza. Um convite à contemplação e sofisticação.",
  "Garrafa": "Formato alongado e delicado, ideal para flores com hastes finas ou composições verticais elegantes.",
  "Jarro": "Tradicional e acolhedor, remete aos lares de antigamente com um toque de carinho e rusticidade.",
  "Spa": "Design suave e relaxante, perfeito para ambientes de bem-estar e composições que inspiram calma.",
  "Torre": "Verticalidade moderna em uma peça compacta. Ideal para espaços pequenos que pedem estilo.",
  "Pote": "Funcional e versátil, perfeito para uso em ambientes internos e externos, sempre com charme.",
  "Seat Garden": "Peça multifuncional: pode ser usada como vaso, assento ou destaque decorativo.",
  "Bacia Bérgamo": "Curvas italianas e acabamento refinado fazem desta peça uma verdadeira obra de arte.",
  "Belga": "Elegância clássica com influência europeia. Ideal para composições delicadas e sofisticadas.",
  "Prato": "Elemento complementar essencial, com acabamento refinado que evita respingos ao regar.",
  "Bacia Especial": "Acabamento diferenciado e presença marcante tornam esta bacia única e cheia de personalidade.",
  "Bacia Etiópia": "Inspirada no artesanato africano, esta peça exala autenticidade e beleza étnica.",
  "Egito": "Design imponente com detalhes que evocam o esplendor das civilizações antigas.",
  "Toscano": "Rusticidade charmosa inspirada nas paisagens campestres da Toscana italiana.",
  "Espanhol": "Traços elegantes e tradicionais que remetem à nobreza da cerâmica ibérica.",
  "Marrocos": "Detalhes ricos e traços étnicos fazem desta peça uma celebração da arte marroquina.",
  "Itália": "Estilo mediterrâneo clássico com acabamento que valoriza qualquer composição floral.",
  "São Marino": "Sutileza e nobreza se encontram nesta peça com influência europeia refinada.",
  "Toscano Esfera": "Mistura entre rusticidade toscana e a simetria envolvente das formas esféricas.",
  "Tunes": "Estilo árabe com detalhes ornamentais delicados, perfeito para decorações ousadas e artísticas.",
  "Egito Esfera": "Fusão entre a imponência egípcia e o design esférico contemporâneo.",
  "Bally": "Design minimalista e moderno que se adapta com leveza a qualquer ambiente claro.",
  "Montreal": "Inspirado no urbanismo canadense, esta peça traz modernidade com um toque cosmopolita.",
  "Lisboa": "Linhas suaves e toque nostálgico homenageiam a tradição ceramista portuguesa.",
  "Provença": "Romântica e delicada, como os campos floridos do sul da França.",
  "Real": "Presença clássica e imponente. Ideal para ambientes que pedem elegância duradoura.",
  "São Marino com Alça": "Alças decorativas acrescentam charme e funcionalidade a esta peça de inspiração europeia.",
  "Medelim": "Elegância discreta com forte influência lusitana. Um toque de tradição com frescor moderno.",
  "Atlanta": "Versatilidade urbana com linhas modernas, ideal para composições contemporâneas.",
  "Atlanta com alça": "Combina estilo e praticidade em uma peça funcional e decorativa.",
  "Fonte Atlanta": "Elemento decorativo e funcional que proporciona som e movimento com estilo moderno.",
  "Fonte Tunes": "Riqueza de detalhes artesanais inspirados nas fontes tradicionais do norte da África.",
  "Cuba": "Peça ampla e rasa, perfeita para arranjos criativos com visual orgânico e expressivo."
  };

  document.querySelectorAll('.product').forEach(card => {
    card.addEventListener('click', () => {
      const productName = card.querySelector('.product-name').textContent.trim();
      const imagePath = `assets/medidas/${productName}.png`;

      modalImg.src = imagePath;
      modalDesc.textContent = descriptions[productName] || "Descrição não disponível no momento.";
      modal.style.display = 'flex';
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });