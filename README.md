# JAVASCRIPT-TEST
Test del módulo JavaScript Grupo C4

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm --version
nvm -v
nvm install node
source ~/.bashrc
npm install -g json-server@0.17.4
json-server --watch db.json
