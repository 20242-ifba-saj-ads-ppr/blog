---
icon: edit
date: 2024-11-15 21:40:00.00 -3
tag:
  - solid
category:
  - aula
order: 6
---

# Princípio da Segregação de Interface (ISP)

Adaptado de [^JoaoRobertoSOLID].

<!-- @include: ../../includes/SOLID.md -->

## Princípio da Segregação de Interface (ISP)

[^JACKHISTON] [^MACORATTI_ISP]

### O que é uma interface?

Uma interface define um contrato que uma classe deve seguir, especificando quais métodos ela deve implementar. Quando `Cliente` deseja interagir com `ServicoA`, v se comunicará por meio da interface `Servico`, para a qual `ServicoA` e `Cliente` se entendem mutuamente.

<figure>

```plantuml
class Cliente
class ServicoA implements Servico 

Cliente . Servico 
```

<figcaption>Uso de interface pela classe Cliente</figcaption>
</figure>

Interfaces são úteis para polimorfismo. o objeto `Cliente` apenas entende ou sabe sobre a interface `Servico`, o que significa que ele não sabe que o objeto `ServicoA` existe. Isso significa que pode ocorrer polimorfismo - ou seja, o objeto `Servico` pode ser substituído por muitas implementações diferentes, sem afetar o objeto `Cliente`

### Definição

O Princípio da Segregação de Interface trata da coesão de interfaces e diz que 

::: tip Definição
Clientes não devem ser forçados a depender de métodos que não usam.
:::

Este princípio afirma que os clientes não devem ser forçados a depender das interfaces que eles não usam. Quando temos interfaces não coesas, o ISP nos orienta a criar múltiplas interfaces menores e coesas.


::: warning 
Coesão é o nível de integralidade interna de uma classe e mede o grau em que uma classe ou seus métodos fazem sentido, ou seja, quão claro é o entendimento do que a classe ou método possui. Uma alta coesão indica responsabilidades bem definidas.
::: 

Quando você aplica o ISP, a classe e suas dependências se comunicam usando interfaces fortemente focadas, minimizando as dependências de membros não utilizados e reduzindo o acoplamento de acordo.

Interfaces menores são mais fáceis de implementar, melhorando a flexibilidade e a possibilidade de reutilização. Como menos classes compartilham interfaces, o número de alterações necessárias em resposta a uma modificação da interface é reduzido, e, isso aumenta a robustez.

```java
   public interface Pedido{
        void compra();
        void processarCartaoCredito();
    }

    public class PedidoOnline implements Pedido{
        public void compra(){
            //código da compra
        }
        public void processarCartaoCredito(){
            //processo do cartão
        }
    }

    public class PedidoPresencial implements Pedido{
        public void compra(){
            //código da compra
        }
        public void processarCartaoCredito(){
            //Não precisa para boleto
            throw new UnsupportedOperationException();
        }
    }
```

Neste código temos a interface `Pedido` sendo implementada pelas classes `PedidoOnline` e `PedidoPresencial`.

Aparentemente tudo esta correto e o código vai funcionar.

Mas este código esta violando o princípio ISP pois a interface `Pedido` esta sendo implementada pela classe `PedidoPresencial` mas esta classe não esta implementando o método `processarCartaoCredito`.

Assim a classe esta sendo forçada a depender do método `processarCartaoCredito` que ela não precisa usar.

Para adequar o código ao princípio ISP podemos fazer assim:


```java
   public interface Pedido{ 
        void compra();
    }
   public interface PagamentoCartao{
        void processarCartaoCredito();
    }

    public class PedidoOnline implements Pedido, PagamentoCartao{
        public void compra(){
            //código da compra
        }
        public void processarCartaoCredito(){
            //processo do cartão
        }
    }

    public class PedidoPresencial implements Pedido{
        public void compra(){
            //código da compra
        }        
    }
```

Agora temos interfaces específicas `Pedido` e `PagamentoCartao`, e, nenhuma classe esta sendo obrigada a implementa um método que não utiliza.



## Referências

<!-- @include: ../../includes/bib.md -->