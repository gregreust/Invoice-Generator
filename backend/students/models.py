from django.db import models
from address.models import AddressField
from django.contrib.auth.models import User 

class Students (models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    start_date = models.DateField(auto_now_add=True)
    instrument = models.CharField(max_length=60, null=True)
    teacher = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    lesson_day = models.CharField(max_length=10)
    parent_name = models.CharField(max_length=50, null=True)
    address = AddressField(null=True)
    phone = models.CharField(max_length=15)
    email = models.EmailField(max_length=160)


