# Generated by Django 3.1.5 on 2021-02-19 15:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('u_rent_bike', '0005_user_route'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_route',
            name='start_time',
            field=models.TimeField(),
        ),
    ]
