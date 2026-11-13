curl -i http://localhost:3000/citations reponse:
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 84
ETag: W/"54-YjY0Odwe5APJ6jrXRb52A+8mHKo"
Date: Fri, 13 Nov 2026 08:45:53 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"citations":[{"id":1,"texte":"Apprendre en pratiquant.","auteur":"Équipe du TP"}]}

curl -i http://localhost:3000/inconnue reponse:
HTTP/1.1 404 Not Found
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 31
ETag: W/"1f-AFRD0QOo46T8U4LEpHuMcvO80SY"
Date: Fri, 13 Nov 2026 08:46:19 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":"Route introuvable"}

req c'est la requéte enovoyer a l'api res c'est la reponse de l'api

/citations Content-Type: application/json; charset=utf-8 format: json
/ping Content-Type: text/plain; charset=utf-8 format: text


$ curl -i -X POST http://localhost:3000/citations -H 'Content-Type: application/json' -d '{"texte":" ","auteur":"Ada"}'
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 47
ETag: W/"2f-Z9kJJdkRPCJx9stX8/QXWvuiIkw"
Date: Fri, 13 Nov 2026 09:26:28 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":{"id":3,"texte":" ","auteur":"Ada"}}

$ curl -i -X POST http://localhost:3000/citations -H 'Content-Type: application/json' -d '{"texte":" ","auteur":"Ada"}'
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 47
ETag: W/"2f-Z9kJJdkRPCJx9stX8/QXWvuiIkw"
Date: Fri, 13 Nov 2026 09:26:28 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":{"id":3,"texte":" ","auteur":"Ada"}}

req.params.id recupére la valeur a la place de :id dans l'url req.body recuper le body de la requéte 