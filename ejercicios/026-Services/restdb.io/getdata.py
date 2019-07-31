import requests

url = "https://vecinos-06c2.restdb.io/rest/anuncios"

headers = {
    'content-type': "application/json",
    'x-apikey': "0e784d2e105df4508c2ad209726a2cc919d82",
    'cache-control': "no-cache"
    }

response = requests.request("GET", url, headers=headers)

print(response.text)