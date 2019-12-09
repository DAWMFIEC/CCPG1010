import requests

url = 'https://pokeapi.co/api/v2/pokemon/1/'

resp = requests.get(url=url)
data = resp.json() 

print("Bulbasaur")
print("Habilidades")

#JSON Parsing
for idx in range(len(data["abilities"])):

	ability = data["abilities"][idx]['ability']
	print("\t"+ability['name'])
