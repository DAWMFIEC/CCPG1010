#https://docs.locust.io/en/latest/index.html
from locust import HttpLocust, TaskSet

def login(l):
    pass

def escritores(l):
    l.client.get("/escritores/xml")

def frases(l):
    l.client.get("/escritores/frases/xml")

class UserBehavior(TaskSet):
    tasks = {escritores: 100, frases: 100}

    def on_start(self):
        login(self)


class WebsiteUser(HttpLocust):
    task_set = UserBehavior
    min_wait = 5000
    max_wait = 9000