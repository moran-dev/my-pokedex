# 14 - Desafio Final

Apesar de suas diferenças, os desenvolvedores de front-end e back-end se completam na maioria dos casos e, principalmente, quando o assunto é desenvolvimento web. Primeiramente vamos focar no Back-end. 

A ideia é começar pelo Back-end. Vamos unir o que foi feito dos desafios anteriores de MongoDB e Express, então vamos criar Endpoints GET e POST, para a busca e a criação de algo - o que? - Vocês decidem.

Lembrem de tratar os erros que tiverem e devolver uma resposta de erro para a requsição `res.send("Deu erro")`. Em express encontrei muitos erros e fins de fluxo, em que não davam uma resposta para a requisição, então a requisição só terminava no Timeout.

Para o front-end vocês podem optar por desenvolver com React ou React Native e também podem escolher se farão com Typescript ou sem.

### Requisitos do App Final:

- Deve ter um Layout no Front-End, então será cobrado quanto a estética do App:
    - Caso escolha React Native, tudo deve funcionar, tanto no Android quanto num iPhone. 
    - Caso escolha React JS, o layout deve ser responsivo e utilizar de práticas básicas do PWA para salvar o site na tela inicial e ter os icones personalizados. 
- Separar o desenvolvimento em 2 branchs do GIT diferentes, `entrega-back-end`, `entrega-front-end` - Cada um será entregue neste mesmo repositório. (para criar entre a entrega 1 e 2 basta usar `git checkout -b entrega-front-end` estando na branch `entrega-back-end`, isso replicará o conteúdo da branch)

1. Qual a sua ideia para o App final?
2. Para o Front-end, o que você usuará, React JS ou React Native?
3. Crie um *pequeno* fluxo de como o seu App funcionará. (Ferramenta para auxilio: Lucidchart)
4. Quantos e quais endpoints você criará?

**TODOS DEVEM APRESENTAR A SUA IDEIA VIA SLACK COM OS TÓPICOS ABAIXO RESPONDIDOS ANTES DE COMEÇAREM A CODAR**

Após enviado no Slack, marcado para o Gustavo e o Gabriel e o feedback de que esta tudo certo para seguir.

# Parte 1 - Back-end (10/12)

Pensem e planejem o App Final de vocês. Nessa fase inicial, vamos pensar no Back-end primeiro, nas coisas que vocês irão precisar para mostrar na tela e também para salvar em seu banco de dados.

- Criar um Endpoint GET que servirá para a busca
- Criar um Endpoint POST que servirá para a criação de um registro
- Criar um Endpoint PATCH ou PUT que servirá para a atualização de um registro
- Criar um Endpoint DELETE que servirá para a deleção de um registro
- O uso do MongoDB é obrigatório, mas você pode utilizar APIs que já existem para auxiliar nas buscas de conteúdos.

# Parte 2 - Front-end (17/12)

Com o back-end pronto, vocês deverão começar o Front-end, como já dito deve ser feito com React ou React Native (a escolha é de vocês), podendo ou não usar Typescript.

Pense na interface de modo com que todos Endpoints que foram entregues na **Parte 1** sejam utilizados, eles serão obrigatórios. Caso vocês necessitem de outro Endpoint após a entrega da Parte 1, NÃO TEM PROBLEMA, você poderá cria-lo e utiliza-lo normalmente.
