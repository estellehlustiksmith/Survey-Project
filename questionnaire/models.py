from django.db import models

# Create your models here.
class Response(models.Model):
    questionA_1 = models.CharField(max_length=1028)
    questionA_2 = models.CharField(max_length=1028)
    questionA_3 = models.CharField(max_length=1028)
    questionA_4 = models.CharField(max_length=1028)
    questionA_5 = models.CharField(max_length=1028)
    questionB1_1 = models.CharField(max_length=2048)
    questionB1_2 = models.CharField(max_length=2048)
    questionB1_3 = models.CharField(max_length=2048)
    questionB1_4 = models.CharField(max_length=2048)
    questionB1_5 = models.CharField(max_length=2048)
    questionB1_6 = models.CharField(max_length=2048)
    questionB1_7 = models.CharField(max_length=2048)
    questionB1_8 = models.CharField(max_length=2048)
    questionB1_9 = models.CharField(max_length=2048)
    questionB1_10 = models.CharField(max_length=2048)
    questionB1_11 = models.CharField(max_length=2048)
    questionB1_12 = models.CharField(max_length=2048)

    drawing_0 = models.CharField(max_length=1000000000)
    drawing_1 = models.CharField(max_length=1000000000)
    drawing_2 = models.CharField(max_length=1000000000)

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
    name =  models.CharField(max_length=1028)
    email = models.CharField(max_length=1028)

class Interview_q(models.Model):
    name =  models.CharField(max_length=1028)
    int_drawing_0 = models.CharField(max_length=1000000000)
    int_drawing_1 = models.CharField(max_length=1000000000)

class Gallery(models.Model):
    questionA_1 = models.CharField(max_length=1028)
    questionA_2 = models.CharField(max_length=1028)
    questionA_3 = models.CharField(max_length=1028)
    questionA_4 = models.CharField(max_length=1028)
    questionA_5 = models.CharField(max_length=1028)
    questionB1_1 = models.CharField(max_length=2048)
    questionB1_2 = models.CharField(max_length=2048)
    questionB1_3 = models.CharField(max_length=2048)
    questionB1_4 = models.CharField(max_length=2048)
    questionB1_5 = models.CharField(max_length=2048)
    questionB1_6 = models.CharField(max_length=2048)
    questionB1_7 = models.CharField(max_length=2048)
    questionB1_8 = models.CharField(max_length=2048)
    questionB1_9 = models.CharField(max_length=2048)
    questionB1_10 = models.CharField(max_length=2048)
    questionB1_11 = models.CharField(max_length=2048)
    questionB1_12 = models.CharField(max_length=2048)

    drawing_0 = models.CharField(max_length=1000000000)
    drawing_1 = models.CharField(max_length=1000000000)
    drawing_2 = models.CharField(max_length=1000000000)