# Generated by Django 3.1.5 on 2021-02-08 13:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='location',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('location_name', models.TextField()),
                ('lat', models.CharField(max_length=50, null=True)),
                ('lng', models.CharField(max_length=50, null=True)),
                ('bike_count', models.IntegerField()),
                ('bike_count_now', models.IntegerField()),
            ],
        ),
    ]
