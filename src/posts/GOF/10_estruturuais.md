---
icon: edit
date: 2024-11-27 20:40:00.00 -3
tag:
  - GOF
category:
  - aula
  - entrega
#navbar: false
order: 10
---

# Padrões de projeto estruturais

[^GAMMA]


Os padrões estruturais se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores. Os padrões estruturais de classes utilizam a herança para compor interfaces ou implementações. Dando um exemplo simples, considere como a herança múltipla mistura duas ou mais classes em uma outra. O resultado é uma classe que combina as propriedades das suas classes ancestrais. Esse padrão é particularmente útil para fazer bibliotecas de classes desenvolvidas independentemente trabalharem juntas. 

Um outro exemplo é a forma de classe do padrão [Adapter]. Em geral, um Adapter faz com que uma interface adaptada (em inglês, adaptee) seja compatível com outra, dessa forma fornecendo uma abstração uniforme de diferentes interfaces. A classe adaptadora (adapter) atinge esse objetivo herdando, privadamente, de uma classe adaptada. O adapter, então, exprime sua interface em termos da interface da classe adaptada.

Em lugar de compor interfaces ou implementações, os padrões estruturais de objetos descrevem maneiras de compor objetos para obter novas funcionalidades. A flexibilidade obtida pela composição de objetos provém da capacidade de mudar a composição em tempo de execução, o que é impossível com a composição estática de classes.

O [Composite] é um exemplo de um padrão estrutural de objetos. Ele descreve como construir uma hierarquia de classes composta para dois tipos de objetos: primitivos e compostos. Os objetos compostos permitem compor objetos primitivos e outros objetos compostos em estruturas arbitrariamente complexas. 

No padrão [Proxy], um procurador funciona como um substituto ou um marcador para outro objeto. Um proxy (procurador) pode ser usado de várias formas. Ele pode atuar como um representante local para um objeto situado num espaço de endereço remoto. Pode representar um grande objeto que deveria ser carregado por demanda. Pode proteger o acesso a um objeto sensível. Proxies fornecem um nível de referência indireta a propriedades específicas de objetos. Daí eles poderem restringir, aumentar ou alterar essas propriedades.

O padrão [Flyweight]  define uma estrutura para o compartilhamento de objetos. Os objetos são compartilhados por pelo menos duas razões: eficiência e consistência. O Flyweight focaliza o compartilhamento para uso eficiente de espaço. As aplicações que usam uma porção de objetos devem prestar atenção no custo de cada objeto. Pode-se obter economia substancial e usando o compartilhamento de objetos, em lugar de replicá-los. Mas objetos podem ser compartilhados somente se eles não definem estados dependentes do contexto.

Objetos Flyweight não possuem tais estados. Qualquer informação adicional de que necessitem para executar suas tarefas é passada aos mesmos quando necessário. Não tendo estados dependentes de contexto, os objetos Flyweight podem ser compartilhados livremente.

Enquanto o Flyweight mostra o que fazer com muitos objetos pequenos, [Façade] mostra como fazer um único objeto representar todo um subsistema. Um objeto façade (fachada) é uma representação para um conjunto de objetos. Façade executa suas responsabilidades repassando mensagens para os objetos que ela representa. O padrão [Bridge] separa a abstração de um objeto da sua implementação, de maneira que elas possam variar independentemente.

O [Decorator] descreve como acrescentar dinamicamente responsabilidades ao objetos. O Decorator é um padrão estrutural que compõe objetos recursivamente para permitir um número ilimitado de responsabilidades adicionais. Por exemplo, um objeto Decorator que contém um componente de uma interface de usuário pode adicionar uma decoração, como uma borda ou sombra, ao componente, ou pode adicionar uma funcionalidade como rolamento ou zoom. Podemos adicionar duas decorações simplesmente encaixando um objeto Decorator dentro do outro, e assim por diante, para outras decorações adicionais. Para conseguir isto, cada objeto Decorator deve oferecer a mesma interface do seu componente e repassar mensagens para ele. O Decorator pode executar o seu trabalho (tal como desenhar uma borda em volta do componente) antes ou depois de repassar uma mensagem.

O padrão [Bridge] é um padrão de projeto estrutural que permite separar uma abstração de sua implementação, de modo que ambas possam variar independentemente. O Bridge promove o baixo acoplamento, permitindo que as hierarquias de classes separadas trabalhem em conjunto.

No Bridge, a abstração (ou interface) é uma camada de alto nível que contém a lógica de controle, mas delega o trabalho de baixo nível para a implementação. A implementação declara a interface comum para todas as implementações concretas. As implementações concretas contêm código específico da plataforma. O padrão Bridge permite que você substitua o objeto de implementação dentro da abstração.


O padrão [Front Controller] é um padrão de projeto que visa centralizar o controle de requisições em aplicações web. Embora não faça parte do catálogo original do GoF (Gang of Four), ele é amplamente utilizado no desenvolvimento web para simplificar e organizar o fluxo de requisições.

Em essência, o Front Controller atua como um ponto de entrada único para todas as requisições da aplicação. Ele recebe a requisição inicial e, em seguida, delega o processamento para outros componentes, como handlers ou controllers específicos.

Uma das principais vantagens do uso do Front Controller é a centralização de todas as requisições, como autenticação, autorização, logging e tratamento de erros. Com o Front Controller é possível também alterar o fluxo de requisições facilmente, sem modificar o código de cada handler ou controller individualmente.

segue um pequeno resumo:

- **Adapter** Permitir que um objeto seja substituído por outro que, apesar de realizar a mesma tarefa, possui uma interface diferente.
- **Bridge** Separar uma abstração de sua representação, de forma que ambos possam variar e produzir tipos de objetos diferentes.
- **Composite** Agrupar objetos que fazem parte de uma relação parte-todo de forma a tratá-los sem distinção.
- **Decorator** Adicionar funcionalidade a um objeto dinamicamente.
- **Facade** Prover uma interface simplificada para a utilização de várias interfaces de um subsistema.
- **Front Controller** Centralizar todas as requisições a uma aplicação Web.
- **Flyweight** Compartilhar, de forma eficiente, objetos que são usados em grande quantidade.
- **Proxy** Controlar as chamadas a um objeto através de outro objeto de mesma interface.


## Entrega

Todas as equipes devem clicar no link do padrão de projeto para fazer as entregas. A equipe nominada (nomes listados ao lado do padrão) deve elaborar a apresentação do padrão. As outras equipes devem entregar dois exemplos da aplicação do padrão. De preferencia em um ambiente de um sistema WEB.

| Padrão                                                      | Aluno                                                                                                                                                                                   |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Adapter](https://classroom.github.com/a/EXqSqCf7)          | Leandro [Adapter](./estruturais/Adapter.md)                                                                                                                                             |
| [Bridge](https://classroom.github.com/a/7tokV-5k)           | <ul> <li>Adriano Victor Nascimento Ribeiro (20222TADSSAJ0024)</li> <li>Rafhael da Silva Oliveira (20222TADSSAJ0026)</li> <li>Pedro Victor Hipólito Cabral (20222TADSSAJ0010)</li> </ul> |
| [Composite](https://classroom.github.com/a/vn_g22mV)        | <ul> <li>Antônio Salgueiro Fernandes Neto (20222TADSSAJ0005)</li> <li>Kaio Sande Tavares (20222TADSSAJ0032)</li> <li>Tauynd Julia Silva Menezes (20222TADSSAJ0023)</li> </ul>           |
| [Decorator](https://classroom.github.com/a/4O19gzRX)        | Leandro [Decorator](./estruturais/Decorator.md)                                                                                                                                         |
| [Facade](https://classroom.github.com/a/kWHq9eTQ)           | Leandro [Facade](./estruturais/Facade.md)                                                                                                                                               |
| [Flyweight](https://classroom.github.com/a/r5O1mo2g)        | <ul> <li>Filipe Ribeiro de Almeida Silva (20222TADSSAJ0004)</li> <li>Matheus Lima Brazil Parenti (20221TADSSAJ0013)</li> <li>Isaque Lima da Silva (20221TADSSAJ0010)</li> </ul>         |
| [Front Controller](https://classroom.github.com/a/NraV0OUb) | <ul> <li>Jabes da Silva Cajazeira (20192TADSSAJ0014)</li> <li>Luis Guilherme Passos Ramos (20222TADSSAJ0015)</li> <li>Nathaly de Jesus Brito (20222TADSSAJ0025)</li> </ul>              |
| [Proxy](https://classroom.github.com/a/k8V-HMK1)            | <ul> <li>Rafael Borges Magalhães (20221TADSSAJ0019)</li> <li>Gustavo Vitor Oliveira de Andrade (20221TADSSAJ0003)</li> <li>Jaqueline Lima Andrade (20221TADSSAJ0007)</li> </ul>         |

## Estrutura da entrega

A entrega deve seguir a seguinte estrutura:

- Intenção do padrão
- Motivação (Cenário onde existe um problema para ser resolvido)
- UML do cenário (Situação antes da aplicação do padrão)
- UML da estrutura do padrão (GOF)
- UML e código após a refatoração fazendo referencia a estrutura (papeis) definidos no GOF

## Referências

<!-- @include: ../../../includes/bib.md -->

