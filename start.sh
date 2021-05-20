npm ci;
name="deepspeech"
pm2 delete $name
pm2 start -f --name $name example/server.js
