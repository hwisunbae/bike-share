# Generated by Django 3.1.5 on 2021-02-08 13:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('u_login', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_account',
            name='password',
            field=models.CharField(max_length=32, null=True),
        ),
        migrations.AlterField(
            model_name='user_account',
            name='username',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
