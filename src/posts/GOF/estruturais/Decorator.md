---
icon: edit
date: 2025-02-10 20:21:00.00 -3
tag:
  - Decorator
  - gof
category:
  - aula
order: 2
excerpt: Apresentação do Padrão de Projeto Decorator
---

# Decorator

[^GAMMA]    

Dinamicamente, agregar responsabilidades adicionais a um objeto. Os Decorators fornecem uma alternativa flexível ao uso de subclasses para extensão de funcionalidades.

## Intenção

Com o decorador, podemos adicionar funcionalidades a um objeto sem ter que alterar a classe do objeto.

## Também conhecido como

Wrapper

## Motivação


## Estrutura

<figure>

```plantuml
@startuml
skinparam linetype ortho


class Component {
  + operation(): void
}
class ConcreteComponent extends Component { 
  + operation(): void
}
class Decorator extends Component{
  - component: Component
  + operation(): void
}

class ConcreteDecoratorA extends Decorator {
  + operation(): void
  + addedState: string
}
class ConcreteDecoratorB extends Decorator {
  + operation(): void
  + addedBehavior(): void
}

Decorator o-> Component
ConcreteComponent -[hidden] Decorator
ConcreteDecoratorA -[hidden] ConcreteDecoratorB

note right of Decorator::component
  component.operation()
end note

note right of ConcreteDecoratorB::operation
  addedBehavior()
end note

@enduml
```

<figcaption>Estrutura do Decorator</figcaption>

</figure>

## Participantes
- Component
  - define a interface para objetos que podem ter responsabilidades acrescenta das aos mesmos dinamicamente.
- ConcreteComponent 
  - define um objeto para o qual responsabilidades adicionais podem ser atribuídas.
- Decorator
  - mantém uma referência para um objeto Component e define uma interface que segue a interface de Component.
- ConcreteDecorator 
  - acrescenta responsabilidades ao componente.

## Referências

<!-- @include: ../../../../includes/bib.md -->
