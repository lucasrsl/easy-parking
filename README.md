# Easy Parking

Projeto de aplicação mobile para gerenciamento de um estacionamento.

Desenvolvido utilizando as seguintes tecnologias:
- Ionic 4
- SQLite
- Docker

### Comandos Docker 

Cria e roda container utilizando a imagem ionic 
```
docker run -it -d -p 3000:3000 -v "<path na máquina física com projetos ionic>:/var/projetos" --name <nome para o container> beevelop/ionic bash
 ```
 
 Lista todos os containers
 ```
 docker ps -la
 ```
 
 Starta o container com terminal interativo
 ```
 docker start -a -i <id do container>
 ```
 
 Roda a aplicação no endereço acessível pelo localhost da máquina física
 ```
 ionic serve --address 0.0.0.0 -p 3000
 ```

###### Atualmente em fase de desenvolvimento
