# Generated by Django 3.1.5 on 2021-02-15 14:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('o_manage_bike', '0004_auto_20210215_1445'),
        ('u_history', '0002_auto_20210215_1445'),
        ('u_rent_bike', '0004_delete_user_route'),
        ('o_bike_history', '0004_delete_operator_port_history'),
        ('a_manage_bike', '0002_bike_malfunction_history_bike_route'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bike_malfunction_history',
            name='bike_id',
        ),
        migrations.RemoveField(
            model_name='bike_malfunction_history',
            name='operator_id',
        ),
        migrations.RemoveField(
            model_name='bike_route',
            name='bike_id',
        ),
        migrations.RemoveField(
            model_name='bike_route',
            name='user_id',
        ),
        migrations.DeleteModel(
            name='bike',
        ),
        migrations.DeleteModel(
            name='bike_malfunction_history',
        ),
        migrations.DeleteModel(
            name='bike_route',
        ),
    ]