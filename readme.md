## Como instalar las dependecias del programa

```bash
npm i
```

## Instalar pm2

```bash
npm install pm2@latest -g
```

## Para instalar powershell, descargar de Microsoft Store

> [!CAUTION]
> **Nota Mental**
> Ejecutar powershell como administrador

## Ejecutar PM2

```bash
pm2 start src/index.js --name slackbotmessages
pm2 save
```

## Reiniciar PM2

```bash
pm2 restart slackbotmessages
```
