# Generated by Django 4.1.6 on 2023-02-14 17:23

import address.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('address', '0003_auto_20200830_1851'),
    ]

    operations = [
        migrations.CreateModel(
            name='Students',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('start_date', models.DateField(auto_now_add=True)),
                ('instrument', models.CharField(max_length=60, null=True)),
                ('lesson_day', models.CharField(max_length=10)),
                ('parent_name', models.CharField(max_length=50, null=True)),
                ('phone', models.CharField(max_length=15)),
                ('email', models.EmailField(max_length=160)),
                ('address', address.models.AddressField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='address.address')),
                ('teacher', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
