# Generated by Django 3.1.5 on 2021-02-19 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('u_biking', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bike_route',
            name='time',
            field=models.DateTimeField(),
        ),
    ]