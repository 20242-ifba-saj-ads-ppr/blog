---
icon: edit
date: 2025-02-10 20:21:00.00 -3
tag:
  - Facade
  - gof
category:
  - aula
order: 2
excerpt: Apresentação do Padrão de Projeto Facade
---

# Facade

[^GAMMA]    

## Intenção

A intenção do padrão de projeto facade é fornecer uma interface unificada para um conjunto de interfaces em um subsistema.

Facade define uma interface de nível mais alto que torna o subsistema mais fácil de ser usado.

## Motivação

Apresenta uma situação em que o padrão de projeto Facade pode ser aplicado. O padrão Facade fornece uma interface unificada para um conjunto de interfaces em um subsistema, tornando o subsistema mais fácil de ser usado.



## Estrutura

<figure>

```plantuml
@startuml
class Facade {
  + operation(): void
  - c1: Class1
  - c2: Class2
  - c3: Class3
}
package "Subsystem" {
  class Class1 {
    + operation1(): void
    + operation2(): void
  }
  class Class2 {
    + operation1(): void
    + operation2(): void
  }
  class Class3 extends Class1 {
    + operation1(): void
    + operation2(): void
  }
  class Class4 {
    + operation1(): void
    + operation2(): void
  }
  class Class5 {
    + operation1(): void
    + operation2(): void
  }
  class Class6 {
    + operation1(): void
    + operation2(): void
  }
  class Class7 extends Class5 {
    + operation1(): void
    + operation2(): void
  }  
  Class1 --o Class4
  Class3 --o Class4
  Class2 --o Class6
  Class2 --> Class7
}

Facade o-- Class1
Facade o-- Class2
Facade o-- Class3

@enduml
```

<figcaption>Estrutura do Facade</figcaption>

</figure>


## Participantes

- Facade 
  - define uma interface de nível mais alto que torna o subsistema mais fácil de ser usado;
  - conhece quais as classes do subsistema são responsáveis pelo atendimento de uma solicitação;
  - delega solicitações de clientes a objetos apropriados do subsistema.
- Classes de subsistema 
  - implementam a funcionalidade do subsistema;
  - encarregam-se do trabalho atribuído a elas pelo objeto Façade;
  - não têm conhecimento da façade; isto é, não mantêm referências para a mesma

## Referências

<!-- @include: ../../../../includes/bib.md -->
