---
icon: edit
date: 2024-11-27 20:30:00.00 -3
tag:
  - GOF
category:
  - aula
#navbar: false
order: 9
---

# Padrões de projeto criacionais

[^GAMMA]

Os padrões de criação abstraem o processo de instanciação. Eles ajudam a tornar um sistema independente de como seus objetos são criados, compostos e representados.

Um padrão de criação de classe usa a herança para variar a classe que é instanciada, enquanto que um um padrão de criação de objeto delegará a instanciação para outro objeto.

Os padrões de criação se tornam importantes à medida que os sistemas evoluem no sentido de depender mais da composição de objetos do que da herança de classes.

Quando isso acontece, a ênfase se desloca da codificação rígida de um conjunto fixo de comportamentos para a definição de um conjunto menor de comportamentos fundamentais, os quais podem ser compostos em qualquer número para definir comportamentos mais complexos. Assim, criar objetos com comportamentos particulares exige mais do que simplesmente instanciar uma classe.

Há dois temas recorrentes nesses padrões. Primeiro, todos encapsulam conhecimento sobre quais classes concretas são usadas pelo sistema. Segundo, ocultam o modo como as instâncias destas classes são criadas e compostas. Tudo o que o sistema sabe no geral sobre os objetos é que suas classes são definidas por classes abstratas.

Consequentemente, os padrões de criação dão muita flexibilidade ao que, como e quando é criado e a quem cria. Eles permitem configurar um sistema com “objetos-produto” que variam amplamente em estrutura e funcionalidade. A configuração pode ser estática (isto é, especificada em tempo de compilação) ou dinâmica (em tempo de execução).

Algumas vezes, os padrões de criação competem entre si. Por exemplo, há casos em que tanto [Prototype] como [Abstract Factory] podem ser usados proveitosamente. Em outras ocasiões, eles são complementares: [Builder] pode usar um dos outros padrões para implementar quais componentes são construídos. [Prototype] pode usar [Singleton] na sua implementação.

- **[Factory Method]** Encapsular a escolha da classe concreta a ser utilizada na criação de objetos de um determinado tipo.
- **[Abstract Factory]** Encapsular a escolha das classes concretas a serem utilizadas na criação dos objetos de diversas famílias.
- **[Builder]** Separar o processo de construção de um objeto de sua representação e permitir a sua criação passo-a-passo. Diferentes tipos de objetos podem ser criados com implementações distintas de cada passo.
- **[Prototype]** Possibilitar a criação de novos objetos a partir da cópia de objetos existentes.
- **[Singleton]** Permitir a criação de uma única instância de uma classe e fornecer um modo para recuperá-la.
- **[Multiton]** Permitir a criação de uma quantidade limitada de instâncias de determinada classe e fornecer um modo para recuperá-las.[^K19]
- **[Object Pool]** Possibilitar o reaproveitamento de objetos[^K19]

## Entrega

https://classroom.github.com/a/UvzdJrKi


| Padrão                                                                                                                                | Aluno                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Factory Method](./criacionais/Factory_Method.md)                                                                                     | Leandro                                                                                                                                                                                 |
| [Abstract Factory](https://github.com/20242-ifba-saj-ads-ppr/seminario-ppr-criacional-abstractfactory)                                | <ul> <li>Antônio Salgueiro Fernandes Neto (20222TADSSAJ0005)</li> <li>Kaio Sande Tavares (20222TADSSAJ0032)</li> <li>Tauynd Julia Silva Menezes (20222TADSSAJ0023)</li> </ul>           |
| [Builder](https://github.com/20242-ifba-saj-ads-ppr/seminario-ppr-criacional-builder)                                                 | <ul> <li>Adriano Victor Nascimento Ribeiro (20222TADSSAJ0024)</li> <li>Rafhael da Silva Oliveira (20222TADSSAJ0026)</li> <li>Pedro Victor Hipólito Cabral (20222TADSSAJ0010)</li> </ul> |
| [Prototype](https://github.com/20242-ifba-saj-ads-ppr/seminario-ppr-criacional-prototype)                                             | <ul> <li>Rafael Borges Magalhães (20221TADSSAJ0019)</li> <li>Gustavo Vitor Oliveira de Andrade (20221TADSSAJ0003)</li> <li>Jaqueline Lima Andrade (20221TADSSAJ0007)</li> </ul>         |
| <ul><li>[Singleton](https://github.com/20242-ifba-saj-ads-ppr/seminario-ppr-criacional-singleton-multiton)</li><li>Multiton</li></ul> | <ul> <li>Jabes da Silva Cajazeira (20192TADSSAJ0014)</li> <li>Luis Guilherme Passos Ramos (20222TADSSAJ0015)</li> <li>Nathaly de Jesus Brito (20222TADSSAJ0025)</li> </ul>              |
| [Object Pool](https://github.com/20242-ifba-saj-ads-ppr/seminario-ppr-criacional-object-pool)                                         | <ul> <li>Filipe Ribeiro de Almeida Silva (20222TADSSAJ0004)</li> <li>Matheus Lima Brazil Parenti (20221TADSSAJ0013)</li> <li>Isaque Lima da Silva (20221TADSSAJ0010)</li> </ul>         |

## Referências

<!-- @include: ../../../includes/bib.md -->
