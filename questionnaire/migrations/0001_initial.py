# Generated by Django 3.0.5 on 2020-05-03 19:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Response',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question1', models.CharField(max_length=1028)),
                ('question2', models.CharField(max_length=1028)),
                ('question3', models.CharField(max_length=1028)),
                ('drawing', models.CharField(max_length=1000000000)),
            ],
        ),
    ]
