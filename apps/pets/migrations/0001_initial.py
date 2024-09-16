# Generated by Django 5.1 on 2024-09-06 04:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pets',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('species', models.CharField(choices=[('dog', 'Perro'), ('cat', 'Gato'), ('exotic', 'Exótico')], max_length=10)),
                ('breed', models.CharField(blank=True, max_length=100)),
                ('age', models.PositiveIntegerField()),
                ('description', models.TextField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('available', models.BooleanField(default=True)),
            ],
        ),
    ]
