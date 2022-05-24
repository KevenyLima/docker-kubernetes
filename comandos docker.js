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

//--------------------------------------------------------------------------------------------------

// comandos para aws

// comando para conectar-se pelo terminal com a maquina 1
// ssh -i "nodekey2.pem" ec2-user@ec2-18-228-196-163.sa-east-1.compute.amazonaws.com

// comando para conectar-se pelo terminal com a maquina 2
// ssh -i "nodekey2.pem" ec2-user@ec2-15-228-191-140.sa-east-1.compute.amazonaws.com

// comando para conectar-se pelo terminal com a maquina 3
//  ssh -i "nodekey2.pem" ec2-user@ec2-15-229-9-146.sa-east-1.compute.amazonaws.com

// observação para se conectar com a maquina sera necessário executar o comando acima estando no mesmo diretório da chave que libera o acesso (.pem)

//---------------------------------------------------------------------------------------------
// comandos para rodar na maquina linux
// observação o linux da aws nao utiliza apt-get para gerenciador de pacotes e sim o yum

// para update todos os pacotes
// sudo yum update -y

// instalando o docker no linux
// sudo yum install docker

// inicializar o docker no linux
// sudo service docker start

// comando para dar permissão de usuário para a maquina aws
// sudo usermod -a -G docker ec2-user

// mostrar as informações do docker
// sudo docker info

//-->para verificar se o swarm esta  no docker
// sudo docker swarm init 

// warning do comando sudo docker swarm init 
// To add a worker to this swarm, run the following command:

// docker swarm join --token SWMTKN-1-3sq05cdyqu34r560s7rmze2kyvttd0mwp30um07v77jshvbmpz-2r6l528bqh8uzjzbrqg5wsx62 172.31.30.55:2377

// To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.

// forca sair do swarm mesmo que ele seja o único que esta ativo e deixa o manager
// sudo docker swarm leave -f 

// adicionando workers para o swarm manager
// sudo docker swarm join --token {token que o container manager mostrar}

// listando os nodes que um manager node esta conectado
// docker node ls

// docker swarm init --advertise-addr {ip da instancia da maquina da aws}

// rodando uma imagem com docker swarm (criando um serviço)

// docker service create {nome do container} {flags adicionais} {nome da imagem} 

// exemplo
// docker service create --name nginxswarm -p 80:80 nginx

//-----------------------------------------------------
// observação somente o manager pode rodar  esse comandos 
// docker service ls --> mostra os container que estão rodando no swarm

//  removendo serviço swarm
// docker service rm {nome do serviço}

// orquestração com replicação(tasks)
// docker service create --name {nome da task} --replicas {numero de replicas} -p 80:80 {nome da imagem}
//exemplo
// sudo docker service create --name nginxreplicas --replicas 3 -p 80:80 nginx

// comando para mostrar o ip de conexão de um manager no swarm
// docker swarm join-token manager

//----------------------------------------------------------------------------------------------------------------------
// utilizado no works para desligar essa maquina
// sudo docker swarm leave --> vai ser liberado sendo listado pelo manager como down
//-----------------------------------------------------------------------------------------------------------------------
// macete para impedir que a maquina seja desconectado do terminal por inatividade
// digite os comandos no terminal da maquina
// vim ~/.ssh/config
// ServerAliveInterval 50 --> da um ping no servidor a cada 50 segundos
//-----------------------------------------------------------------------------------------------------------------------
// observação um problema que acontece no docker swarm 
// mesmo que a maquina que foi removida se reconecte ao swarm ele ainda sera listado como down e nao funcionar
// a única solução e reiniciar o swarm do manager e conectar todos os works novamente

// sudo docker service inspect {nome do service} --> descobrir mais sobre o service
// docker service ps {nome do serviço} -->comando para listar os container pelo manager
//

//-------------------------------------------------------------------------------
// usando docker-compose no swarm 


// para criar arquivo no terminal
// vim docker-compose.yaml
// apertar i para entrar em mode de edição
// escreve no arquivo compose
// depois 
// esc 
// :x!
//enter
// sudo docker stack deploy -c {nome do arquivo} {nome do serviço}
// exemplo 
// sudo docker stack deploy -c docker-compose.yaml nginx_swarm
//-----------------------------------------------------------------------------------------
// serve para escalar um serviço --> criar replicas a partir de um serviço ja ativo
// sudo docker service scale {nome do serviço}={numero de replicas}

//-----------------------------------------------------------------------

// comando para que um node pare de receber ordens de um manager(nao recebendo mais tasks)
// docker node update --availability drain {id do node(container)} 
// observação esse comando deve ser utilizado no manager

// comando para que um node(container) passe a receber ordens de um manager
// docker node update --availability active {id do node(container)} 

//------------------------------------------------------------------------
// atualizar a imagem de um serviço 
// sudo docker service update --image {nome da nova imagem} {nome da imagem}

// observação o swarm sempre tenta balancear as replicas de forma igual para cada maquina e caso nao haja maquinas suficientes para rodar apenas um node em cada ele colocara mais nodes(container) em uma mesma maquina

// -------------------------------------------------------------------

// criando network para services
// o tipo da network criada e overlay

// e necessário seguir dois passos

// criar a network quando 
// docker network create --driver overlay {nome da rede}

// na criação do service adicione a flag seguinte
// --network {nome da rede}

// exemplo 
// docker service create --name {nome do service} --replicas {numero de replicas} -p 80:80 --network swarm {nome da imagem}

// observação o create service por default conecta todos os nodes a mesma rede a criação de um rede overlay serve para criar um escopo um rede isolada para alguns serviços especificados

// adicionando uma network a um serviço apos a criação desse serviço 
// docker service update --network-add swarm {nome do serviço}

// ----------------------------------kubernetes-------------------------------------------------------------

// palavras chaves 
// control plane == manager do swarm 
// nodes  == uma maquina na nuvem
// deployment == maquina que roda uma imagem
// pod == um ou mais container em um node
// services == expõe os pods ao mundo externo
// kuberctl  == cliente de linha de comando para kubernetes

// minikube --> simula um ambiente de cloud kubernetes em um ambiente local

// --------------------------configurando ambiente para kubernetes--------------------------------

// install chocolatey no windows
// execute no terminal do powershell como administrador
// Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

// install o kubernetes-cli pelo chocolatey
// choco install kubernetes-cli

// instalar o minikube 
// choco install minikube 
//---------------------------------------------------------------------------
// inicializando o minikube com o docker
// minikube start --driver=docker
// minikube stop

// acessando o minikube
// minikube dashboard  
// para ter acesso a url que o minikube esta rodado
// minikube dashboard  --url

// ---------------------------------------------------------------------
// criando um container deployment no kubernetes
//kubectl create deployment {nome para o container} --image={imagem que sera buildada}

// exemplo :
// kubectl create deployment flask-deployment --image=battistti/flask-kub-projeto

// observação e preciso que a imagem esteja no dockerHub para que possa buildar esse container


// comandos kubernetes (kubectl)
// kubectl get deployment --> listar todos os containers deployments 
// kubectl describe deployments --> mostra os dados detalhados dos deployments

// kubectl get pods --> para mostrar quais pods estão rodando
// kubectl config view --> para mais detalhes de como esta configurado o kubernetes

// criando um service para expor um deployment
// kubectl expose deployment <nome do deployment> --type=<tipo do service> --port=<port>
// exemplo 
// kubectl expose deployment flask-deployment --type=LoadBalancer --port=5000

// para acessar o serviço
// minikube service {nome do service} --> esse comando vai dar o ip de acesso e abrira o projeto em uma aba do navegador 

// ------------------------------------------------------------------------------------------------------

// kubectl get services --> mostra os serviços que estão sendo executados
// kubectl describe services/{nome do service} --> mostra os detalhes dos serviços que estão sendo executados 
//-----------------------------------------------------------------------
// escalando os serviços no kubernetes
// kubectl scale deployment/{nome do serviço} --replicas={numero de replicas}

// observação para fazer o inverso e reduzir o numero de pods e so escrever um numero de replicas menor do que a atual e o kubernetes lidara de desligar alguns pods
// --------------------------------------------------------------------------------
// kubectl get rs --> listando o numero de replicas

// atualizando uma imagem em um service
// kubectl set image deployment/{nome do service} {nome do container } = {nova imagem}

// kubectl rollout status deployment/{nome do serviço} --> mostra se uma atualização teve sucesso (caso uma versão de uma imagem nao exita o container nao ira rodar)

// kubectl rollout undo deployment/{nome do serviço} --> para desfazer uma atualização
//-----------------------------deletes---------------------------------------
// kubectl delete service {nome do service} --> deleta o serviço (os pods nao poderão ser mais acessados sem um serviço para expo-los)

// kubectl delete deployment {nome do deployment } --> deleta o service

// -------------------------------------------------------------------

// executando um arquivo declarativo kubernetes
// kubectl apply -f {nome do arquivo declarativo kubernetes}

// parando um service de forma declarativa
// kubectl delete -f {nome do arquivo  declarativo kubernetes}

//-----------------------------------------------------------------
// observação para atualizar um projeto e so dar um apply novamente em um arquivo atualizado do service declarative 

// observação e possível juntar aquivos yaml para rodar dois serviços com apenas um comando apenas separando cada serviço por tres traços (---)

// (// snapshot --> serve para replicar uma maquina na aws com as mesmas configurações )