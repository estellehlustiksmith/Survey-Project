from django.db import models

# Create your models here.
class Response(models.Model):
    questionA_1 = models.CharField(max_length=1028)
    questionA_2 = models.CharField(max_length=1028)
    questionA_3 = models.CharField(max_length=1028)
    questionA_4 = models.CharField(max_length=1028)
    questionA_5 = models.CharField(max_length=1028)
    questionB1_6 = models.CharField(max_length=1028)
    questionB1_7 = models.CharField(max_length=1028)
    questionB1_8 = models.CharField(max_length=1028)
    questionB1_9 = models.CharField(max_length=1028)
    questionB1_10 = models.CharField(max_length=1028)
    questionB1_11 = models.CharField(max_length=1028)

    drawing = models.CharField(max_length=1000000000)

class Consent(models.Model):
    consent0 = models.BooleanField()
    consent1 = models.BooleanField()
    consent2 = models.BooleanField()
    consent3 = models.BooleanField()
    consent4 = models.BooleanField()
    consent5 = models.BooleanField()
    consent6 = models.BooleanField()
    consent7 = models.BooleanField()
    consent8 = models.BooleanField()

class Interview(models.Model):
    over18 = models.BooleanField()
    email = models.CharField(max_length=1028)
