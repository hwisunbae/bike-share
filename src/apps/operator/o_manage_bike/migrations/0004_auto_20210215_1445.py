# Generated by Django 3.1.5 on 2021-02-15 14:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('o_manage_bike', '0003_operator_repair_history_operator_route'),
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
