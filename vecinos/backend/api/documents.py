from server import dbNoSQL

class Anuncio(dbNoSQL.Document):
    nombre = dbNoSQL.StringField()
    apellido = dbNoSQL.StringField()
    familia = dbNoSQL.StringField()
    barrio = dbNoSQL.StringField()
    titulo_anuncio = dbNoSQL.StringField()
    texto_anuncio = dbNoSQL.StringField()
    fecha = dbNoSQL.StringField()

    def __str__(self):
        return self.nombre