

# AXIA: Promovendo Equidade e Transparência: Uma Plataforma Inovadora de Avaliação de Profissionais 

Nossa plataforma combina tecnologia blockchain para redefinir como
avaliamos e reconhecemos o desempenho e a contratação de profissionais.
Esta metodologia prioriza a competência, garante que homens e mulheres tenham oportunidades iguais com 
base em suas habilidades demonstradas, eliminando viéses de gênero e qualquer forma de discriminação. 
Utilizando contratos inteligentes e registros imutáveis, nossa plataforma assegura transparência total nas avaliações,
sendo capaz de avaliar objetivamente tanto `hard skills` como `soft skills`.
Este modelo não só melhora a gestão de talentos, 
mas também impulsiona uma cultura organizacional inclusiva e equitativa, alinhada com os valores contemporâneos 
de diversidade e justiça.

## Detalhes técnicos

- Frontend: Desenvolvido em React, o frontend oferece uma interface intuitiva e amigável, 
  permitindo que os usuários façam login, vejam suas avaliações e acompanhem seu progresso.

- Backend: Utiliza Django para gerenciar a lógica de negócios, autenticação e interação com a blockchain. 
  A API RESTful é responsável por conectar o frontend com o backend.

- Blockchain: Ethereum é usado para armazenar dados de avaliação de forma transparente e imutável.
  Smart contracts gerenciam as avaliações e recompensas dos funcionários, garantindo que o processo seja 
  justo e verificável.


## Requisitos

- Linux OS (Para esse MVP usamos Ubuntu 22.04)
- geth (Etherium). Para instalar use: `sudo apt-get install -y ethereum`
- Executar etherium no servidor: 
   ``` geth --syncmode full --cache=1024 --http --http.addr="localhost" --http.port="8545" --http.api="eth,net,web3,personal" --allow-insecure-unlock```
- solc (Solidity Compiler): Necessário para compilar contratos inteligentes escritos em Solidity.

## Instalação da aplicação

```
sudo snap install solc
sudo apt-get update


``` 

## Disponibilidade

A versão DEMO do MPV está disponível em [http://18.231.197.44/](http://18.231.197.44/)





