## Instalação

Após abrir o projeto execute o seguinte comando no terminal para instalar as dependências.

```bash
yarn
```
## Antes de executar o projeto

Na linha 13 do arquivo src/index.js existe um constante que recebe o endereço do arquivo .txt que é lido. Alterar o endereço para o diretório do novo arquivo que será validado. 

```javascript
const enderecoDoArquivo = "./regex.txt";
```

## Executar em produção

```bash
yarn start
```

## Executar em desenvolvimento

```bash
yarn dev
```

## Executar testes unitários

```bash
yarn test
```

## Dependências

#### [Axios](https://www.npmjs.com/package/axios)

Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quando no NodeJs.

#### [Nodemon](https://nodemon.io/)

É um utilitário que monitora todas as alterações nos arquivos de sua aplicação e reinicia automaticamente o servidor quando for necessário.

#### [Jest](https://jestjs.io/)

É um poderoso Framework de Testes em JavaScript com um foco na simplicidade.

# Especificações Técnicas

**Linguagem de Programação:** JavaScript

**IDE:** [VS Code](https://code.visualstudio.com/)

**Sistema Operacional:** Windows 10

**Gerenciador de Pacotes:** [Yarn](https://yarnpkg.com/)

## License
[MIT](https://choosealicense.com/licenses/mit/)



