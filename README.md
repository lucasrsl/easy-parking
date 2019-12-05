# Easy Parking

Projeto de aplicação mobile para gerenciamento de um estacionamento.

Desenvolvido utilizando as seguintes tecnologias:
- Ionic 4
- Docker
- SQLite - *Implementado, mas comentado para teste*

## Passos para rodar utilizando Docker 

Cria e roda container utilizando a imagem ionic 
```
sudo docker run -it -d -p 3000:3000 -v "<path do projeto ionic na máquina física>:/var/projeto" --name ionicLatest beevelop/ionic bash
 ```
 
 Lista todos os containers
 ```
 sudo docker ps -a
 ```
 
 Starta o container com terminal interativo
 ```
 sudo docker start -a -i <id do container>
 ```
 ### Dentro do terminal interativo do container
  
 Navega até o diretório do projeto
 ```
 cd /var/projeto
 ```
 
 Instala todos os pacotes utilizados na aplicação
 ```
 npm i
 ```
 
 Roda a aplicação no endereço acessível pelo localhost da máquina física na porta 3000
 ```
 ionic serve --address 0.0.0.0 -p 3000
 ```

##### Estudar
* [Tabelas Ionic 4](https://www.youtube.com/watch?v=_ym7bKfsMSs)

###### Atualmente em fase de desenvolvimento
