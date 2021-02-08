# Generated by Django 3.1.5 on 2021-02-08 13:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('a_manage_bike', '0002_bike_malfunction_history_bike_route'),
        ('u_login', '0002_auto_20210208_1314'),
    ]

    operations = [
        migrations.CreateModel(
            name='user_repair_history',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('question_type', models.CharField(max_length=50, null=True)),
                ('question_place', models.CharField(max_length=50, null=True)),
                ('question_in_detail', models.TextField()),
                ('image1', models.CharField(max_length=200, null=True)),
                ('image2', models.CharField(max_length=200, null=True)),
                ('image3', models.CharField(max_length=200, null=True)),
                ('image4', models.CharField(max_length=200, null=True)),
                ('image5', models.CharField(max_length=200, null=True)),
                ('is_finished', models.BooleanField()),
                ('bike_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='a_manage_bike.bike')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='u_login.user_account')),
            ],
        ),
        migrations.CreateModel(
            name='user_history',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('fee', models.FloatField()),
                ('start_time', models.TimeField(auto_now_add=True)),
                ('end_time', models.TimeField()),
                ('ratings', models.TextField()),
                ('is_finished', models.BooleanField()),
                ('reason_not_finished', models.TextField()),
                ('bike_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='a_manage_bike.bike')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='u_login.user_account')),
            ],
        ),
    ]