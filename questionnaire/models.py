from django.db import models

# Create your models here.
class Response(models.Model):
    question1 = models.CharField(max_length=1028)
    question2 = models.CharField(max_length=1028)
    question3 = models.CharField(max_length=1028)