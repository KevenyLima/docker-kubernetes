// comandos para docker
// docker run {nome da imagem}
// docker run -it {nome da imagem}  ----> matem o container ativo e da acesso ao terminal da imagem

// docker ps --> serve para listar os container ativos
// docker ps -a --. a flag -a serve para mostrar todos os container que ja rodaram na maquina 
// docker container ls --> também lista os container que estão em execução 
// docker container ls -a --> todos os container que ha executaram

// docker stop {nome do container ou id do container} --> para o a execução do container

// docker run -d {nome da imagem} --> a flag -d serve para manter um container ativo mas nao ocupar o terminal ou seja do tipo detached 

// docker -p 80:80 --> a flag p serve para abrir uma porta no container no caso o primeiro 80 determina em qual porta vai refletir da maquina que esta rodando o container e o segundo 80 determina que porta o container vai abrir

// docker start {id do container} --> reaproveita um container que foi parado 

// docker run -d --nome {nome do container} --> a flag --name serve para nomear o container

// docker logs {nome do container} --> serve para mostrar todos os logs de um container

// docker rm {nome ou id do container} --> remove completamente um container nao podendo ser listado ou reativado

// docker rm {nome ou id } -f --> forca a remoção de um container desativando e excluindo caso esteja em execução


//-------------------------------------
// build de imagens docker
// docker build . --> build a imagem a partir do dockerfile que esta no diretório atual

// docker image ls --.para lista todas as imagens que tem instalada

// git pull e utilizado para baixar uma imagem sem precisar criar um container deixando pronta para ser usada posteriormente

//------------------------------------------------------------------------------------
// --help pode ser usada para entender o que um comando faz e aprender as possíveis flags que sao aceitas nesse comando
// múltiplas aplicações do mesmo container
//e possível criar vários container a partir da mesma imagem elas serão aplicações que funcionaram de forma única

// nomeando imagens docker e criando versões de uma imagem utilizando tags diferentes
// docker tag {id da imagem}   {nomeação da imagem}:{tag da versão da imagem} 

// nomeando a imagem docker na sua criação  
// docker build -t {nomeação da imagem }:{nome da tag(versão)} .