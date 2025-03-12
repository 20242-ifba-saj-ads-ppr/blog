import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as s,b as e,d as n,e as l,f as a,r as d,o as c}from"./app-CQuKrEpA.js";const u={};function p(m,o){const t=d("RouteLink");return c(),i("div",null,[o[9]||(o[9]=s('<h1 id="padroes-de-projeto-criacionais" tabindex="-1"><a class="header-anchor" href="#padroes-de-projeto-criacionais"><span>Padrões de projeto criacionais</span></a></h1><p><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>Os padrões de criação abstraem o processo de instanciação. Eles ajudam a tornar um sistema independente de como seus objetos são criados, compostos e representados.</p><p>Um padrão de criação de classe usa a herança para variar a classe que é instanciada, enquanto que um um padrão de criação de objeto delegará a instanciação para outro objeto.</p><p>Os padrões de criação se tornam importantes à medida que os sistemas evoluem no sentido de depender mais da composição de objetos do que da herança de classes.</p><p>Quando isso acontece, a ênfase se desloca da codificação rígida de um conjunto fixo de comportamentos para a definição de um conjunto menor de comportamentos fundamentais, os quais podem ser compostos em qualquer número para definir comportamentos mais complexos. Assim, criar objetos com comportamentos particulares exige mais do que simplesmente instanciar uma classe.</p><p>Há dois temas recorrentes nesses padrões. Primeiro, todos encapsulam conhecimento sobre quais classes concretas são usadas pelo sistema. Segundo, ocultam o modo como as instâncias destas classes são criadas e compostas. Tudo o que o sistema sabe no geral sobre os objetos é que suas classes são definidas por classes abstratas.</p><p>Consequentemente, os padrões de criação dão muita flexibilidade ao que, como e quando é criado e a quem cria. Eles permitem configurar um sistema com “objetos-produto” que variam amplamente em estrutura e funcionalidade. A configuração pode ser estática (isto é, especificada em tempo de compilação) ou dinâmica (em tempo de execução).</p><p>Algumas vezes, os padrões de criação competem entre si. Por exemplo, há casos em que tanto [Prototype] como [Abstract Factory] podem ser usados proveitosamente. Em outras ocasiões, eles são complementares: [Builder] pode usar um dos outros padrões para implementar quais componentes são construídos. [Prototype] pode usar [Singleton] na sua implementação.</p><ul><li><strong>[Factory Method]</strong> Encapsular a escolha da classe concreta a ser utilizada na criação de objetos de um determinado tipo.</li><li><strong>[Abstract Factory]</strong> Encapsular a escolha das classes concretas a serem utilizadas na criação dos objetos de diversas famílias.</li><li><strong>[Builder]</strong> Separar o processo de construção de um objeto de sua representação e permitir a sua criação passo-a-passo. Diferentes tipos de objetos podem ser criados com implementações distintas de cada passo.</li><li><strong>[Prototype]</strong> Possibilitar a criação de novos objetos a partir da cópia de objetos existentes.</li><li><strong>[Singleton]</strong> Permitir a criação de uma única instância de uma classe e fornecer um modo para recuperá-la.</li><li><strong>[Multiton]</strong> Permitir a criação de uma quantidade limitada de instâncias de determinada classe e fornecer um modo para recuperá-las.<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></li><li><strong>[Object Pool]</strong> Possibilitar o reaproveitamento de objetos<sup class="footnote-ref"><a href="#footnote2">[2:1]</a><a class="footnote-anchor" id="footnote-ref2:1"></a></sup></li></ul><h2 id="entrega" tabindex="-1"><a class="header-anchor" href="#entrega"><span>Entrega</span></a></h2><p><a href="https://classroom.github.com/a/UvzdJrKi" target="_blank" rel="noopener noreferrer">https://classroom.github.com/a/UvzdJrKi</a></p>',12)),e("table",null,[o[7]||(o[7]=e("caption",null,"Lista de padrões de criação e responsáveis",-1)),o[8]||(o[8]=e("thead",null,[e("tr",null,[e("th",null,"Padrão"),e("th",null,"Aluno")])],-1)),e("tbody",null,[e("tr",null,[e("td",null,[n(t,{to:"/posts/GOF/criacionais/Factory_Method.html"},{default:l(()=>o[0]||(o[0]=[a("Factory Method")])),_:1})]),o[1]||(o[1]=e("td",null,"Leandro",-1))]),o[2]||(o[2]=e("tr",null,[e("td",null,[e("a",{href:"https://github.com/20242-ifba-saj-ads-ppr/seminario-ppr-criacional-abstractfactory",target:"_blank",rel:"noopener noreferrer"},"Abstract Factory")]),e("td",null,[e("ul",null,[e("li",null,"Antônio Salgueiro Fernandes Neto (20222TADSSAJ0005)"),a(),e("li",null,"Kaio Sande Tavares (20222TADSSAJ0032)"),a(),e("li",null,"Tauynd Julia Silva Menezes (20222TADSSAJ0023)")])])],-1)),o[3]||(o[3]=e("tr",null,[e("td",null,[e("a",{href:"https://github.com/20242-ifba-saj-ads-ppr/seminario-ppr-criacional-builder",target:"_blank",rel:"noopener noreferrer"},"Builder")]),e("td",null,[e("ul",null,[e("li",null,"Adriano Victor Nascimento Ribeiro (20222TADSSAJ0024)"),a(),e("li",null,"Rafhael da Silva Oliveira (20222TADSSAJ0026)"),a(),e("li",null,"Pedro Victor Hipólito Cabral (20222TADSSAJ0010)")])])],-1)),o[4]||(o[4]=e("tr",null,[e("td",null,[e("a",{href:"https://github.com/20242-ifba-saj-ads-ppr/seminario-ppr-criacional-prototype",target:"_blank",rel:"noopener noreferrer"},"Prototype")]),e("td",null,[e("ul",null,[e("li",null,"Rafael Borges Magalhães (20221TADSSAJ0019)"),a(),e("li",null,"Gustavo Vitor Oliveira de Andrade (20221TADSSAJ0003)"),a(),e("li",null,"Jaqueline Lima Andrade (20221TADSSAJ0007)")])])],-1)),o[5]||(o[5]=e("tr",null,[e("td",null,[e("ul",null,[e("li",null,[e("a",{href:"https://github.com/20242-ifba-saj-ads-ppr/seminario-ppr-criacional-singleton-multiton",target:"_blank",rel:"noopener noreferrer"},"Singleton")]),e("li",null,"Multiton")])]),e("td",null,[e("ul",null,[e("li",null,"Jabes da Silva Cajazeira (20192TADSSAJ0014)"),a(),e("li",null,"Luis Guilherme Passos Ramos (20222TADSSAJ0015)"),a(),e("li",null,"Nathaly de Jesus Brito (20222TADSSAJ0025)")])])],-1)),o[6]||(o[6]=e("tr",null,[e("td",null,[e("a",{href:"https://github.com/20242-ifba-saj-ads-ppr/seminario-ppr-criacional-object-pool",target:"_blank",rel:"noopener noreferrer"},"Object Pool")]),e("td",null,[e("ul",null,[e("li",null,"Filipe Ribeiro de Almeida Silva (20222TADSSAJ0004)"),a(),e("li",null,"Matheus Lima Brazil Parenti (20221TADSSAJ0013)"),a(),e("li",null,"Isaque Lima da Silva (20221TADSSAJ0010)")])])],-1))])]),o[10]||(o[10]=s('<h2 id="referencias" tabindex="-1"><a class="header-anchor" href="#referencias"><span>Referências</span></a></h2><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>GAMMA, Erich. et al. Padrões de projetos: Soluções reutilizáveis de software orientados a objetos Bookman editora, 2009. <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p>K19. Design Patterns em Java. 2012 <a href="#footnote-ref2" class="footnote-backref">↩︎</a> <a href="#footnote-ref2:1" class="footnote-backref">↩︎</a></p></li></ol></section>',3))])}const g=r(u,[["render",p],["__file","09_criacionais.html.vue"]]),h=JSON.parse('{"path":"/posts/GOF/09_criacionais.html","title":"Padrões de projeto criacionais","lang":"pt-BR","frontmatter":{"icon":"edit","date":"2024-11-27T23:30:00.000Z","tag":["GOF"],"category":["aula"],"order":9},"headers":[{"level":2,"title":"Entrega","slug":"entrega","link":"#entrega","children":[]},{"level":2,"title":"Referências","slug":"referencias","link":"#referencias","children":[]}],"git":{"createdTime":1732751730000,"updatedTime":1741785513000,"contributors":[{"name":"Leandro Costa","email":"leandro.costa@ifba.edu.br","commits":6},{"name":"leandro-costa","email":"leandro.costa@ifba.edu.br","commits":5}]},"readingTime":{"minutes":2.13,"words":639},"filePathRelative":"posts/GOF/09_criacionais.md","localizedDate":"27 de novembro de 2024"}');export{g as comp,h as data};
