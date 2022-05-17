# e como se extendesse esta imagem para criar a nossa
# quando se usa :{numero} esta se especificando um versao da imagem que se deseja ser baixada
from node:14
# diretorio que sera o root da aplicacao
workdir app
# copia esses arquivos para o diretorio . (workdir no caso app)
copy package*.json .
# sera o primeiro comando que ira rodar quando o container inicializar (instalando as dependencias do container)
run npm install
# copia tudo do diretorio root para a imagem para o workdir
copy . .
# expose na porta 3000 para que possa haver um comunicacao com coisas externas ao container
expose 3000
# comando que e executado para rodar a aplicacao no container
cmd ["node", "app.js"]

# observacao: a criacao de uma imagem e feita em camadas(layers) para se otimizar a build de uma alteracao onde so e atualizado da camada alterada para baixo