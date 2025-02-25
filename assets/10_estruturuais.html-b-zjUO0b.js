import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,a as r,o as t}from"./app-CaX3pqsm.js";const s={};function i(d,e){return t(),o("div",null,e[0]||(e[0]=[r('<h1 id="padroes-de-projeto-estruturais" tabindex="-1"><a class="header-anchor" href="#padroes-de-projeto-estruturais"><span>Padrões de projeto estruturais</span></a></h1><p><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>Os padrões estruturais se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores. Os padrões estruturais de classes utilizam a herança para compor interfaces ou implementações. Dando um exemplo simples, considere como a herança múltipla mistura duas ou mais classes em uma outra. O resultado é uma classe que combina as propriedades das suas classes ancestrais. Esse padrão é particularmente útil para fazer bibliotecas de classes desenvolvidas independentemente trabalharem juntas.</p><p>Um outro exemplo é a forma de classe do padrão [Adapter]. Em geral, um Adapter faz com que uma interface adaptada (em inglês, adaptee) seja compatível com outra, dessa forma fornecendo uma abstração uniforme de diferentes interfaces. A classe adaptadora (adapter) atinge esse objetivo herdando, privadamente, de uma classe adaptada. O adapter, então, exprime sua interface em termos da interface da classe adaptada.</p><p>Em lugar de compor interfaces ou implementações, os padrões estruturais de objetos descrevem maneiras de compor objetos para obter novas funcionalidades. A flexibilidade obtida pela composição de objetos provém da capacidade de mudar a composição em tempo de execução, o que é impossível com a composição estática de classes.</p><p>O [Composite] é um exemplo de um padrão estrutural de objetos. Ele descreve como construir uma hierarquia de classes composta para dois tipos de objetos: primitivos e compostos. Os objetos compostos permitem compor objetos primitivos e outros objetos compostos em estruturas arbitrariamente complexas.</p><p>No padrão [Proxy], um procurador funciona como um substituto ou um marcador para outro objeto. Um proxy (procurador) pode ser usado de várias formas. Ele pode atuar como um representante local para um objeto situado num espaço de endereço remoto. Pode representar um grande objeto que deveria ser carregado por demanda. Pode proteger o acesso a um objeto sensível. Proxies fornecem um nível de referência indireta a propriedades específicas de objetos. Daí eles poderem restringir, aumentar ou alterar essas propriedades.</p><p>O padrão [Flyweight] define uma estrutura para o compartilhamento de objetos. Os objetos são compartilhados por pelo menos duas razões: eficiência e consistência. O Flyweight focaliza o compartilhamento para uso eficiente de espaço. As aplicações que usam uma porção de objetos devem prestar atenção no custo de cada objeto. Pode-se obter economia substancial e usando o compartilhamento de objetos, em lugar de replicá-los. Mas objetos podem ser compartilhados somente se eles não definem estados dependentes do contexto.</p><p>Objetos Flyweight não possuem tais estados. Qualquer informação adicional de que necessitem para executar suas tarefas é passada aos mesmos quando necessário. Não tendo estados dependentes de contexto, os objetos Flyweight podem ser compartilhados livremente.</p><p>Enquanto o Flyweight mostra o que fazer com muitos objetos pequenos, [Façade] mostra como fazer um único objeto representar todo um subsistema. Um objeto façade (fachada) é uma representação para um conjunto de objetos. Façade executa suas responsabilidades repassando mensagens para os objetos que ela representa. O padrão [Bridge] separa a abstração de um objeto da sua implementação, de maneira que elas possam variar independentemente.</p><p>O [Decorator] descreve como acrescentar dinamicamente responsabilidades ao objetos. O Decorator é um padrão estrutural que compõe objetos recursivamente para permitir um número ilimitado de responsabilidades adicionais. Por exemplo, um objeto Decorator que contém um componente de uma interface de usuário pode adicionar uma decoração, como uma borda ou sombra, ao componente, ou pode adicionar uma funcionalidade como rolamento ou zoom. Podemos adicionar duas decorações simplesmente encaixando um objeto Decorator dentro do outro, e assim por diante, para outras decorações adicionais. Para conseguir isto, cada objeto Decorator deve oferecer a mesma interface do seu componente e repassar mensagens para ele. O Decorator pode executar o seu trabalho (tal como desenhar uma borda em volta do componente) antes ou depois de repassar uma mensagem.</p><p>O padrão [Bridge] é um padrão de projeto estrutural que permite separar uma abstração de sua implementação, de modo que ambas possam variar independentemente. O Bridge promove o baixo acoplamento, permitindo que as hierarquias de classes separadas trabalhem em conjunto.</p><p>No Bridge, a abstração (ou interface) é uma camada de alto nível que contém a lógica de controle, mas delega o trabalho de baixo nível para a implementação. A implementação declara a interface comum para todas as implementações concretas. As implementações concretas contêm código específico da plataforma. O padrão Bridge permite que você substitua o objeto de implementação dentro da abstração.</p><p>O padrão [Front Controller] é um padrão de projeto que visa centralizar o controle de requisições em aplicações web. Embora não faça parte do catálogo original do GoF (Gang of Four), ele é amplamente utilizado no desenvolvimento web para simplificar e organizar o fluxo de requisições.</p><p>Em essência, o Front Controller atua como um ponto de entrada único para todas as requisições da aplicação. Ele recebe a requisição inicial e, em seguida, delega o processamento para outros componentes, como handlers ou controllers específicos.</p><p>Uma das principais vantagens do uso do Front Controller é a centralização de todas as requisições, como autenticação, autorização, logging e tratamento de erros. Com o Front Controller é possível também alterar o fluxo de requisições facilmente, sem modificar o código de cada handler ou controller individualmente.</p><p>segue um pequeno resumo:</p><ul><li><strong>Adapter</strong> Permitir que um objeto seja substituído por outro que, apesar de realizar a mesma tarefa, possui uma interface diferente.</li><li><strong>Bridge</strong> Separar uma abstração de sua representação, de forma que ambos possam variar e produzir tipos de objetos diferentes.</li><li><strong>Composite</strong> Agrupar objetos que fazem parte de uma relação parte-todo de forma a tratá-los sem distinção.</li><li><strong>Decorator</strong> Adicionar funcionalidade a um objeto dinamicamente.</li><li><strong>Facade</strong> Prover uma interface simplificada para a utilização de várias interfaces de um subsistema.</li><li><strong>Front Controller</strong> Centralizar todas as requisições a uma aplicação Web.</li><li><strong>Flyweight</strong> Compartilhar, de forma eficiente, objetos que são usados em grande quantidade.</li><li><strong>Proxy</strong> Controlar as chamadas a um objeto através de outro objeto de mesma interface.</li></ul><h2 id="entrega" tabindex="-1"><a class="header-anchor" href="#entrega"><span>Entrega</span></a></h2><p>Todas as equipes devem clicar no link do padrão de projeto para fazer as entregas. A equipe nominada (nomes listados ao lado do padrão) deve elaborar a apresentação do padrão. As outras equipes devem entregar dois exemplos da aplicação do padrão. De preferencia em um ambiente de um sistema WEB.</p><table><thead><tr><th>Padrão</th><th>Aluno</th></tr></thead><tbody><tr><td><a href="https://classroom.github.com/a/EXqSqCf7" target="_blank" rel="noopener noreferrer">Adapter</a></td><td></td></tr><tr><td><a href="https://classroom.github.com/a/7tokV-5k" target="_blank" rel="noopener noreferrer">Bridge</a></td><td></td></tr><tr><td><a href="https://classroom.github.com/a/vn_g22mV" target="_blank" rel="noopener noreferrer">Composite</a></td><td></td></tr><tr><td><a href="https://classroom.github.com/a/4O19gzRX" target="_blank" rel="noopener noreferrer">Decorator</a></td><td></td></tr><tr><td><a href="https://classroom.github.com/a/kWHq9eTQ" target="_blank" rel="noopener noreferrer">Facade</a></td><td></td></tr><tr><td><a href="https://classroom.github.com/a/r5O1mo2g" target="_blank" rel="noopener noreferrer">Flyweight</a></td><td><ul><li>Filipe Ribeiro de Almeida Silva (20222TADSSAJ0004)</li> <li>Matheus Lima Brazil Parenti (20221TADSSAJ0013)</li> <li>Isaque Lima da Silva (20221TADSSAJ0010)</li></ul></td></tr><tr><td><a href="https://classroom.github.com/a/NraV0OUb" target="_blank" rel="noopener noreferrer">Front Controller</a></td><td></td></tr><tr><td><a href="https://classroom.github.com/a/k8V-HMK1" target="_blank" rel="noopener noreferrer">Proxy</a></td><td></td></tr></tbody></table><h2 id="referencias" tabindex="-1"><a class="header-anchor" href="#referencias"><span>Referências</span></a></h2><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>GAMMA, Erich. et al. Padrões de projetos: Soluções reutilizáveis de software orientados a objetos Bookman editora, 2009. <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',24)]))}const p=a(s,[["render",i],["__file","10_estruturuais.html.vue"]]),l=JSON.parse('{"path":"/posts/GOF/10_estruturuais.html","title":"Padrões de projeto estruturais","lang":"pt-BR","frontmatter":{"icon":"edit","date":"2024-11-27T23:40:00.000Z","tag":["GOF"],"category":["aula","entrega"],"order":10},"headers":[{"level":2,"title":"Entrega","slug":"entrega","link":"#entrega","children":[]},{"level":2,"title":"Referências","slug":"referencias","link":"#referencias","children":[]}],"git":{"createdTime":1732751730000,"updatedTime":1740489007000,"contributors":[{"name":"Leandro Costa","email":"leandro.costa@ifba.edu.br","commits":6}]},"readingTime":{"minutes":3.64,"words":1093},"filePathRelative":"posts/GOF/10_estruturuais.md","localizedDate":"27 de novembro de 2024"}');export{p as comp,l as data};
