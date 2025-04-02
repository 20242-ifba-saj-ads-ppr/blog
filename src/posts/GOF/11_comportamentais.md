---
icon: edit
date: 2024-11-27 20:50:00.00 -3
tag:
  - GOF
category:
  - aula
order: 11
---

# Padrões de projeto comportamentais

[^GAMMA]

Os padrões comportamentais se preocupam com algoritmos e a atribuição de responsabilidades entre objetos. Os padrões comportamentais não descrevem apenas padrões de objetos ou classes, mas também os padrões de comunicação entre eles. Esses padrões caracterizam fluxos de controle difíceis de seguir em tempo de execução. Eles afastam o foco do fluxo de controle para permitir que você se concentre somente na maneira como os objetos são interconectados.

Os padrões comportamentais de classe utilizam a herança para distribuir o comportamento entre classes. Este capítulo inclui dois padrões desse tipo. O [Template Method] é o mais simples e o mais comum dos dois. Um método template é uma definição abstrata de um algoritmo. Ele define o algoritmo passo a passo. Cada passo invoca uma operação abstrata ou uma operação primitiva. Uma subclasse encarna um algoritmo através da definição das operações abstratas. O outro padrão comportamental de classe é [Interpreter] , o qual representa uma gramática como uma hierarquia de classes e implementa um interpretador como uma operação em instâncias destas classes.

Os padrões comportamentais de objetos utilizam a composição de objetos em vez da herança. Alguns descrevem como um grupo de objetos-pares cooperam para a execução de uma tarefa que nenhum objeto sozinho poderia executar por si mesmo. Um aspecto importante aqui é como os objetos-pares conhecem uns aos outros. Os pares poderiam manter referências explícitas uns para os outros, mas isso aumentaria o seu acoplamento. Levado ao extremo, cada objeto teria conhecimento de cada um dos demais. O padrão [Mediator] evita essa situação pela introdução de um objeto mediador entre os objetos-pares. Um mediador fornece o referenciamento indireto necessário para um acoplamento fraco.

O padrão [Chain of Responsibility] fornece um acoplamento ainda mais fraco. Ele permite enviar solicitações implicitamente para um objeto através de uma cadeia de objetos candidatos. Qualquer candidato pode satisfazer a solicitação dependendo de condições em tempo de execução. O número de candidatos é aberto e você pode selecionar quais candidatos participam da cadeia em tempo de execução.

O padrão [Observer]  define e mantém uma dependência entre objetos. O exemplo clássico do Observer está no Model/View/Controller da Smalltalk, onde todas as visões do modelo são notificadas sempre que o estado do modelo muda.

Outros padrões comportamentais de objetos se preocupam com o encapsulamento de comportamento em um objeto e com a delegação de solicitações para ele. O padrão [Strategy] encapsula um algoritmo num objeto. Strategy torna fácil especificar e mudar o algoritmo que um objeto usa. O padrão [Command] encapsula uma solicitação num objeto, de maneira que possa ser passada como um parâmetro, armazenada numa lista histórica ou manipulada de outras formas. O padrão [State] encapsula os estados de um objeto, de maneira que o objeto possa mudar o seu comportamento quando o seu objeto-estado mudar. [Visitor]  encapsula comportamento que, de outra forma, seria distribuído entre classes, [Iterator] abstrai a maneira como objetos de um agregado são acessados e percorridos.

- **Chain of Responsibility** é um padrão de projeto comportamental que permite que você passe pedidos por uma corrente de handlers. Ao receber um pedido, cada handler decide se processa o pedido ou o passa adiante para o próximo handler na corrente.
- **Interpreter** Dada uma linguagem, definir uma representação para a sua gramática juntamente com um interpretador que usa a representação para interpretar sentenças dessa linguagem
- **Memento** é um padrão de projeto comportamental que permite que você salve e restaure o estado anterior de um objeto sem revelar os detalhes de sua implementação.
- **Command** Controlar as chamadas a um determinado componente, modelando cada requisição como um objeto. Permitir que as operações possam ser desfeitas, enfileiradas ou registradas.
- **Iterator** Fornecer um modo eficiente para percorrer sequencialmente os elementos de uma coleção, sem que a estrutura interna da coleção seja exposta.
- **Mediator** Diminuir a quantidade de “ligações” entre objetos introduzindo um mediador, através do qual toda comunicação entre os objetos será realizada.
- **Observer** Definir um mecanismo eficiente para reagir às alterações realizadas em determinados objetos.
- **State** Alterar o comportamento de um determinado objeto de acordo com o estado no qual ele se encontra.
- **Strategy** Permitir de maneira simples a variação dos algoritmos utilizados na resolução de um determinado problema.
- **Template Method** Definir a ordem na qual determinados passos devem ser realizados na resolução de um problema e permitir que esses passos possam ser realizados de formas diferentes de acordo com a situação.
- **Visitor** Permitir atualizações específicas em uma coleção de objetos de acordo com o tipo particular de cada objeto atualizado.

| Padrão                  | Aluno                                                   |
| ----------------------- | ------------------------------------------------------- |
| Chain of Responsibility | <ul> <li>Adriano Victor Nascimento Ribeiro (20222TADSSAJ0024)</li> <li>Rafhael da Silva Oliveira (20222TADSSAJ0026)</li> <li>Pedro Victor Hipólito Cabral (20222TADSSAJ0010)</li> </ul> |
| Interpreter             | <ul> <li>Antônio Salgueiro Fernandes Neto (20222TADSSAJ0005)</li> <li>Kaio Sande Tavares (20222TADSSAJ0032)</li> <li>Tauynd Julia Silva Menezes (20222TADSSAJ0023)</li> </ul>           |
| Memento                 | <ul> <li>Filipe Ribeiro de Almeida Silva (20222TADSSAJ0004)</li> <li>Matheus Lima Brazil Parenti (20221TADSSAJ0013)</li> <li>Isaque Lima da Silva (20221TADSSAJ0010)</li> </ul>         |
| Command                 | <ul> <li>Jabes da Silva Cajazeira (20192TADSSAJ0014)</li> <li>Luis Guilherme Passos Ramos (20222TADSSAJ0015)</li> <li>Nathaly de Jesus Brito (20222TADSSAJ0025)</li> </ul>              |
| Iterator                | <ul> <li>Rafael Borges Magalhães (20221TADSSAJ0019)</li> <li>Gustavo Vitor Oliveira de Andrade (20221TADSSAJ0003)</li> <li>Jaqueline Lima Andrade (20221TADSSAJ0007)</li> </ul>         |
| Mediator                | <ul> <li>Adriano Victor Nascimento Ribeiro (20222TADSSAJ0024)</li> <li>Rafhael da Silva Oliveira (20222TADSSAJ0026)</li> <li>Pedro Victor Hipólito Cabral (20222TADSSAJ0010)</li> </ul> |
| Observer                | <ul> <li>Antônio Salgueiro Fernandes Neto (20222TADSSAJ0005)</li> <li>Kaio Sande Tavares (20222TADSSAJ0032)</li> <li>Tauynd Julia Silva Menezes (20222TADSSAJ0023)</li> </ul>           |
| State                   | <ul> <li>Filipe Ribeiro de Almeida Silva (20222TADSSAJ0004)</li> <li>Matheus Lima Brazil Parenti (20221TADSSAJ0013)</li> <li>Isaque Lima da Silva (20221TADSSAJ0010)</li> </ul>         |
| Strategy                |                                                                                                                                                                                         |
| Template Method         | <ul> <li>Jabes da Silva Cajazeira (20192TADSSAJ0014)</li> <li>Luis Guilherme Passos Ramos (20222TADSSAJ0015)</li> <li>Nathaly de Jesus Brito (20222TADSSAJ0025)</li> </ul>              |
| Visitor                 | <ul> <li>Rafael Borges Magalhães (20221TADSSAJ0019)</li> <li>Gustavo Vitor Oliveira de Andrade (20221TADSSAJ0003)</li> <li>Jaqueline Lima Andrade (20221TADSSAJ0007)</li> </ul>         |



## Entrega


[link](https://classroom.github.com/a/i1yS8t-6)





## Referências

<!-- @include: ../../../includes/bib.md -->
