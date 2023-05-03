# Validação de cartão de crédito #

Projeto criado junto ao bootcamp da Laboratória, com o objetivo de verificar cartões de crédito, simulando uma área de compra online. 

🔗 [Clique aqui para acessar](https://github.com/thaisalvespereira/SAP009-card-validation)

## Índice

* [1. Introdução](#1-Introdução)
* [2. Interface](#2-interface)
* [3. Objetivos alcançados](#3-objetivos-alcançados)
* [4. Ferramentas utilizadas](#4-ferramentas-utilizadas)

## 1. Introdução

Baseado na grande expansão das compras online, foi criada a área de validação de cartão com base numa página de pagamento, a fim de conferir privacidade e funcionalidade, foram utilizadas técnicas para mascarar os primeiros dígitos, deixando somente os 4 últimos visíveis e para validar o cartão, indicando se ele está disponível para compra ou não, através do [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm).

O algoritmo de Luhn, também chamado de módulo 10, é um método de soma de verificação, usado para validar números de identificação, como o IMEI de telefones celulares, cartões de crédito etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem ser multiplicados por dois; se esse número for maior ou igual a 10, devemos adicionar os dígitos do resultado; o número a verificar será válido se a soma de seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Interface

A proposta do projeto era apresentar uma interface intuitiva e limpa ![Desktop](./README/1.png) ![Desktop](./README/2.png), pensando em 4 situações possiveis de uso:

1. O usuário não digitar os números do cartão

![Desktop](./README/5.png)

2. O usuário digitar poucos números (abaixo de 13)

![Desktop](./README/6.png)

3. O cartão do usuário estar inválido

![Desktop](./README/4.png)

4. O cartão do usuário estar válido

![Desktop](./README/3.png)

## 3. Objetivos alcançados

✨ Criação de uma plataforma que permita ao usuário inserir o número do seu cartão de crédito e validá-lo

✨ Ocultação de todos os dígitos do cartão, com exceção dos 4 últimos

✨ Conhecer e trabalhar com as ferramentas de manutenção e melhoria no código (linters e testes unitários)

✨ Planejar e construir uma interface pensada no usuário, pautada, principalmente, na sua experiência

✨ Implementação de controle de versão com Git e Github

## 4. Ferramentas utlizadas
🛠️ HTML

🛠️ CSS

🛠️ JavaScript

🛠️ Git/Github
