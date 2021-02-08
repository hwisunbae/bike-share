# Generated by Django 3.1.5 on 2021-02-08 13:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('a_manage_bike', '0002_bike_malfunction_history_bike_route'),
        ('o_login', '0001_initial'),
        ('o_bike_history', '0002_delete_operator_port_history'),
    ]

    operations = [
        migrations.CreateModel(
            name='operator_port_history',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('time', models.TimeField()),
                ('location', models.CharField(max_length=500, null=True)),
                ('image1', models.CharField(max_length=200, null=True)),
                ('image2', models.CharField(max_length=200, null=True)),
                ('image3', models.CharField(max_length=200, null=True)),
                ('image4', models.CharField(max_length=200, null=True)),
                ('image5', models.CharField(max_length=200, null=True)),
                ('bike_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='a_manage_bike.bike')),
                ('operator_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='o_login.operator_account')),
            ],
        ),
    ]
