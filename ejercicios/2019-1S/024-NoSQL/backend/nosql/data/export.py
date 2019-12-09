import os


command = "mongoimport -h ds255857.mlab.com:55857 -d vecinos -c anuncio -u admin -p adminadmin1 --file anuncios.csv --type csv --headerline"
os.system(command)