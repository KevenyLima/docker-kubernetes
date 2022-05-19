// para inicializar o docker no windows e preciso utilizar um dos comandos abaixo  

// With Powershell:

// Open Powershell as administrator
// Launch command: & 'C:\Program Files\Docker\Docker\DockerCli.exe' -SwitchDaemon
// OR, with cmd:

// Open cmd as administrator
// Launch command: "C:\Program Files\Docker\Docker\DockerCli.exe" -SwitchDaemon

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
// e possível criar vários container a partir da mesma imagem elas serão aplicações que funcionaram de forma única

// nomeando imagens docker e criando versões de uma imagem utilizando tags diferentes
// docker tag {id da imagem}   {nomeação da imagem}:{tag da versão da imagem} 

// nomeando a imagem docker na sua criação  
// docker build -t {nomeação da imagem }:{nome da tag(versão)} .

// como mudar o modo como o container ira rodar mesmo no start
// docker start -i {nome do container}
//----------------------------------------------------------------------------
// docker rmi {nome da imagem} --> removendo uma imagem da maquina
// docker rmi -f {nome da imagem} --> removendo uma imagem da maquina na forca
// (observação usar a flag -f  vai remover a imagem mesmo que exista container usando ela podendo dar problemas)

//--------------------------------------------------------------------------------
// docker system prune --> comando para remover tudo que nao esta sendo usado 

// docker run --rm {nome container} --> a flag --rm vai remover o container assim que ele terminar de ser usado nao listando mais ele 

// observação para flag se usa -- para encurtamentos de flags se usa -
//------------------------------------------------------------------------------------------------------
// copiando arquivos de um container para outro diretório
// docker cp {nome do container ativo}:{caminha para arquivo que deseja copiar} {caminho para onde deseja que o arquivo seja copiado}
// exemplo
// --------------------------caminho absoluto caminho | relativo
// docker cp node_diferente:/app/app.js ./copia/
//-------------------------------------------------------------------------------------------------------
// comandos de logs
// docker top {nome do container ativo}  --> verificar processamento do container
// docker inspect {nome do container} --> mostra todas as configurações do container em um objeto json
// docker stats {nome do container} --> mostra o quanto de memoria e processador o container esta utilizando

//------------------------------------------------------------------------------------
// autenticação para poder subir imagens no dockerHub 
// docker login --> digita nome de usuário e a senha
// docker logout --> para des logar

//----------------------------------------------------------------------------------------
// subindo imagens de container para o dockerHub 
// 1- cria um novo repositório no dockerHub com o nome da imagem
// 2- logar no terminal 
// 3- build imagem com o nomeDeUsuário/nomeDaImagem
// 4- comando docker push para enviar para repositório
// docker push {nome da imagem} (observação o nome da imagem deve ser igual ao nome do repositório)

// para atualizar uma uma imagem adicionando uma nova versão e so criar-la com uma nova tag e depois da push
// exemplo 
// build
// docker build -t keveny/teste:newversion .
// push
// docker push keveny/teste:newversio

//----------------------------------------------------------------------------------------------------
// volume serve para guardar dados de um container de forma externa a ele podendo assim persistir dados

//anonymous volume
// docker run -d --nome {nome} -v /data {nome da imagem} --> flag -v cria um volume anonimo para o container

// docker volume ls --> lista todos os volumes existentes

// named volume
// docker run -v nomevolume:/data -->nomeando um volume para ser mais fácil acessa-lo posteriormente

//bind mounts (outro tipo de criação de volume)
// ---------------dir absoluto : dir do container que sera copiado
// docker run -v /dir/data:/data --> usa um diretório como volume
// exemplo
// docker run -d --name helloworlddocker -p 3000:80 C:\Users\keven\Desktop\Estudos\docker\volume_docker\messages:/var/www/html/messages  helloworld
// os dados podem ser compartilhados entre container que tenham o mesmo volume  

// o poder do bind mount
// bind mount consegue compartilhar o estado da aplicação com o container podendo atualizar em tempo real o que esta sendo modificado no projeto sem necessidade de fazer build de uma nova imagem 

// e necessário que a raiz do projeto  esteja linkada com a raiz do container

// e possível criar um volume manualmente que poderá ser utilizado entre containers
// criando volume
// docker volume create {nome do volume} 
// utilizando volume
// docker run -v {nome do volume ja criado}:{dir do container} {nome da imagem}

// inspecionar os volumes
// docker volume inspect {nome do volume}
// removendo volumes para remover um volume e preciso que ele nao esta sendo usado por nenhum container ativo ou nao ativo
// para apagar qualquer volume que nao estejam sendo utilizado
// docker volume prune

// criar volume apenas de leitura 
// docker run -d -v {diretório do volume}:ro {nome da imagem} --> o ro significa ready only para apenas leitura nao sendo possível escrever nesse volume

//---------------------------network container----------------------------------
// docker network create -d {tipo da rede} {nome da rede}
// tipos de networks (conexão)

// externa --> quando a aplicação expõe com uma porta faz requisições para api externas etc.
// com host --> 
// entre containers --> e preciso que na criação do container coloque o nome da network que elas vao compartilhar 
// quando dois container estão em uma mesma rede e possível chamar internamente um conexão entre eles
//exemplo da api em phyton

// tipos de redes(drives) que podem ser criadas
// bridge -> padrão
// host ->serve para comunicar com a maquina que o container esta rodando
// macvlan ->cria um ip para conexão
// none 
// plugin -> pode instalar códigos de terceiro para sua rede

// comandos networks 
// docker network create -d {tipo da rede} {nome da rede}
// docker run -d -p 3000:80 --name {name do container} --rm --network {nome da network} -e {variável de ambiente} {nome da imagem}

// docker network connect {nome da conexão} {nome do container}
// docker network disconnect {nome da conexão} {nome do container}

//