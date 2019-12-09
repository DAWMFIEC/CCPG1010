file = open("frases","r", encoding="utf-8")

autores = dict()
frases = dict()

cont = 0
for frase in file:
	frase = frase.strip()
	comp = frase.split("-")
	autores[comp[2]]=cont
	cont+=1
	if comp[2] not in frases.keys():
		frases[comp[2]] = list()
	frases[comp[2]].append(comp[1])

fr = list()
for k1,v1 in frases.items():
	for frase in v1:
		fr.append({"id_autor":autores[k1],"frase":frase})

at = list()
for k1,v1 in autores.items():
	at.append({"id":v1,"nombre":k1})

print(at)
print(fr)

file.close()