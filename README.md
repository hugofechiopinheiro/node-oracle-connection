# node-oracle-connection
Exemplo de integração node em docker com banco oracle de versão antiga

### DESCRIÇÃO
* O problema abordado aqui foi o caminho para integrar uma aplicação nodejs à um banco de dados oracle com versão abaixo da 12.
* Um ORM como o Sequelize por exemplo oferece suporte apenas para versões acima da 18..3

### OBJETIVO
* Criar ambiente local com docker, nodejs e oracle em versões antigas.

## PASSOS
* Baixar localmente a versão zip que será simulada em ambiente local. Referência: https://www.oracle.com/br/cloud/cloud-native/container-registry/
* Inserir o zip da raiz do projeto. (Neste caso eu subi um exemplo da 11g)
* Manipular o docker-compose como quiser, porém se seguir o padrão do exemplo, deve-se criar a network (docker network create <nome da rede>).
* Não troque as versões do orabledb e libaio!
* Executar o compose -> docker-compose up --build -d

### PREREQUISITOS
* docker e docker-compose instalados
* realizar as configurações no oracle após primeira subida do container [1]

[1] - Após subir a aplicação pela primeira vez. Como postei aqui apenas um exemplo, o banco não estará ainda configurado para
o usuário e password contidos no docker-compose.env (Não criei tampouco um script de execução inicial para isso...). Dessa forma
conecte-se com o administrador de banco de sua preferência e crie o usuário e senha de acordo com o dc.env

---
ADD: para iniciantes... 
SID: xe
Usuário: sys
Senha: oracle

### Execução (oracle): 

create user legacyoracle identified by "legacyoracle";
grant ALL PRIVILEGES to legacyoracle;

Exemplo para o user/password do docker-compose.env
Não enche com relação a permissionamento!!! O foco era na integração node/oracle




