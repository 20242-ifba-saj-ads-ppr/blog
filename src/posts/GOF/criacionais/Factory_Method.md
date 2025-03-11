---
icon: edit
date: 2025-02-10 20:21:00.00 -3
tag:
  - Factory Method
  - gof
category:
  - aula
order: 10
excerpt: Apresentação do Padrão de Projeto Factory Method
---

# Factory Method

[^GAMMA]    

## Intenção

Definir uma interface para criar um objeto, mas deixar as subclasses decidirem que classe instanciar. O Factory Method permite adiar a instanciação para subclasses.

## Também conhecido como

Virtual Constructor

## Motivação

Considere um sistema de gestão de documentos para escritórios. Ele deve ser capaz de criar documentos em diferentes formatos, como `docx`, `pptx` e `xlsx`.

O tratamento de cada formato de documento é feito por uma classe específica. Essas classes são responsáveis por criar e manipular os documentos em seus respectivos formatos.

<figure>

```plantuml
@startuml

class DocxDocument {
  + String getContent()
  + void setContent(String content)
  + void save()
  + void open()
  + void close()
  + void print()
  + void saveAs(String path)
}

class PptxDocument {
  + String getContent()
  + void setContent(String content)
  + void save()
  + void open()
  + void close()
  + void print()
  + void saveAs(String path)
}

class XlsxDocument {
  + String getContent()
  + void setContent(String content)
  + void save()
  + void open()
  + void close()
  + void print()
  + void saveAs(String path)
}

DocxDocument -[hidden] PptxDocument
PptxDocument -[hidden] XlsxDocument

class DocxAplication{
  - DocxDocument docxDocument
  + void createDocument()
  + void openDocument()
  + void saveDocument()
  + void printDocument()
  + void closeDocument()
  + void saveAsDocument()

}

class PptxAplication{
  - PptxDocument pptxDocument
  + void createDocument()
  + void openDocument()
  + void saveDocument()
  + void printDocument()
  + void closeDocument()
  + void saveAsDocument()

}

class XlsxAplication{
  - XlsxDocument xlsxDocument
  + void createDocument()
  + void openDocument()
  + void saveDocument()
  + void printDocument()
  + void closeDocument()
  + void saveAsDocument()

}

DocxDocument <-- DocxAplication
PptxDocument <-- PptxAplication
XlsxDocument <-- XlsxAplication

@enduml

```

<figcaption>Diagrama de classes do sistema de gestão de documentos</figcaption>
</figure>


Os frameworks usam classes abstratas para definir e manter relacionamentos entre objetos. Um framework é frequentemente responsável também pela criação desses  objetos

Refatorando o código para usar o padrão Factory Method, podemos criar uma classe abstrata chamada `Document` que será a representação de um documento genérico. Essa classe terá métodos abstratos para criar, abrir, salvar, imprimir e salvar como.

Devemos ter uma classe abstrata chamada `Aplication` que será a representação de uma aplicação genérica. Essa classe terá métodos abstratos para criar, abrir, salvar, imprimir e salvar como documento.

A classe `Aplication` terá um método chamado `createDocument` que será responsável por criar um documento, mas nesse momento não sabemos qual tipo de documento será criado. Esse método será abstrato e será implementado pelas subclasses, postergando a decisão de qual tipo de documento será criado.


<figure>

```plantuml
@startuml
skinparam linetype ortho

abstract class Document {
  + String getContent()
  + void setContent(String content)
  + void save()
  + void open()
  + void close()
  + void print()
  + void saveAs(String path)
}

abstract class Aplication {
  + Document document
  + Document {abstract} createDocument()
  + void openDocument()
  + void saveDocument()
  + void printDocument()
  + void closeDocument()
  + void saveAsDocument()
}

DocxDocument ---|> Document
PptxDocument ---|> Document
XlsxDocument ---|> Document


class DocxAplication extends Aplication {
  + Document createDocument()
}
class PptxAplication extends Aplication {
  + Document createDocument()
}
class XlsxAplication extends Aplication {
  + Document createDocument()
}


DocxAplication ---> DocxDocument 
PptxAplication ---> PptxDocument
XlsxAplication ---> XlsxDocument

note left of Aplication::openDocument
  ...
  document = createDocument();
  ...  
end note

note bottom of DocxAplication: Cria um documento do tipo Docx
note bottom of PptxAplication: Cria um documento do tipo Pptx
note bottom of XlsxAplication: Cria um documento do tipo Xlsx
@enduml

```

<figcaption>Diagrama de classes do sistema de gestão de documentos refatorado</figcaption>
</figure>


## Estrutura


<figure>

```plantuml
@startuml

interface Product {
  + void operation()
}

class ConcreteProduct implements Product {
  + void operation()
}

abstract class Creator {
  + Product {abstract} factoryMethod()
  + void anOperation()
}

class ConcreteCreator extends Creator {
  + Product factoryMethod()
}


ConcreteProduct <- ConcreteCreator


note right of Creator::anOperation
  ...
  product = factoryMethod();
  ...
end note

note right of ConcreteCreator::factoryMethod
  ...
  return new ConcreteProduct();
end note

@enduml
```
<figcaption>Estrutura do padrão Factory Method</figcaption>
</figure>


## Participantes

- **Product (Document)**: Representa o produto que será criado pelo Creator.
- **ConcreteProduct (DocxDocument, PptxDocument, XlsxDocument)**: Representa um produto concreto que será criado pelo Creator.
- **Creator (Aplication)**: É a classe abstrata que define o método de fábrica que será implementado pelas subclasses.
- **ConcreteCreator (DocxAplication, PptxAplication, XlsxAplication)**: Representa uma classe concreta que implementa o método de fábrica.


## Referências

<!-- @include: ../../../../includes/bib.md -->
