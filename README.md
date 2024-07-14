

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


## Disponibilidade

A versão DEMO do MPV está disponível em [http://18.231.197.44/](http://18.231.197.44/)


## Outros Links

[Miro](https://miro.com/app/board/uXjVKzcTNLE=/)

[Github](https://www.figma.com/proto/3MtfLRHi1fcASZD6RzvoPT/Hacking.Her?node-id=1-2&t=UhNpN2ddADRW0UrA-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1)

[Figma] (https://www.notion.so/Hackathon-Hacking-Rio-b2e434d31d294ec08bc7eb8526589c3b)

[Notion] (https://www.notion.so/Hackathon-Hacking-Rio-b2e434d31d294ec08bc7eb8526589c3b)

## Outras informações

### Estrutura da Implementação

*Definição do Cargo e Competências:*

Cada cargo na empresa terá um contrato inteligente associado, que especifica as competências e habilidades necessárias para aquele cargo.
As competências podem ser descritas usando tokens ou identificadores específicos, que representam habilidades, certificações ou experiências.
Carteiras de Competências:

Cada funcionário ou candidato possui uma carteira digital (wallet) onde suas competências são armazenadas. Essas competências são validadas e registradas na blockchain.
Por exemplo, se alguém tem uma certificação em uma determinada tecnologia, essa informação é armazenada na carteira digital como um token ou NFT (Non-Fungible Token).

*Processo de Candidatura:*

Quando uma vaga é aberta, o contrato inteligente verifica automaticamente as carteiras dos candidatos para validar se eles possuem as competências necessárias.
Apenas os candidatos cujas carteiras atendem aos requisitos especificados no contrato podem concorrer à vaga.

*Validação e Transparência:*

Como todos os dados são armazenados na blockchain, há transparência e segurança na validação das competências.
A empresa pode verificar a autenticidade das certificações e experiências de forma descentralizada, sem a necessidade de intermediários.

*Recompensas e Incentivos:*

Contratos inteligentes podem ser usados para recompensar funcionários que adquirem novas competências ou atingem certos objetivos.
Tokens de recompensa podem ser emitidos automaticamente para os funcionários que completam treinamentos ou certificações adicionais.

### RH é seu aliado

A equipe de RH pode definir novos contratos inteligentes sem precisar escrever código através de uma interface amigável,
onde eles preenchem formulários simples com informações sobre a vaga, como o título do cargo e as 
competências necessárias. Esta interface traduz automaticamente esses dados em contratos inteligentes,
que são então implantados na blockchain, garantindo que apenas candidatos com as habilidades corretas em suas 
carteiras digitais possam se candidatar às vagas, tornando o processo de recrutamento mais eficiente e transparente.
