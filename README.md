# Easy Parking

Projeto de aplicação mobile para gerenciamento de um estacionamento.

Desenvolvido utilizando as seguintes tecnologias:
- Ionic 4
- SQLite
- Docker

### Comandos Docker 

Cria e roda container utilizando a imagem informada 
```
docker run -it -d -p 3000:3000 -v "<path na máquina física com projetos ionic>:/var/projetos" --name <nome para o container> beevelop/ionic
 ```
 
 Lista todos os containers
 ```
 docker ps 
 ```
 
 Starta o container com terminal interativo
 ```
 docker start -a -i <id do container>
 ```

###### Atualmente em fase de desenvolvimento
