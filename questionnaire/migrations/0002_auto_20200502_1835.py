# Generated by Django 3.0.5 on 2020-05-02 17:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questionnaire', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='response',
            name='question1',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='response',
            name='question2',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='response',
            name='question3',
            field=models.TextField(blank=True),
        ),
    ]
