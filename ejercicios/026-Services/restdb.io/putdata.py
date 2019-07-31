import requests
import json

url = "https://vecinos-06c2.restdb.io/rest/anuncios"

payload = json.dumps( {"nombe": "José","apellido": "Gómez"} )
headers = {
    'content-type': "application/json",
    'x-apikey': "0e784d2e105df4508c2ad209726a2cc919d82",
    'cache-control': "no-cache"
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)