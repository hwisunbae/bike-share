# Generated by Django 3.1.5 on 2021-02-08 13:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('o_manage_bike', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='operator_route',
            name='bike_id',
        ),
        migrations.RemoveField(
            model_name='operator_route',
            name='user_id',
        ),
        migrations.DeleteModel(
            name='operator_repair_history',
        ),
        migrations.DeleteModel(
            name='operator_route',
        ),
    ]