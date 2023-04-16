from django.db import models
from address.models import AddressField
from phone_field import PhoneField
from django.contrib.auth.models import User 

class Students (models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    start_date = models.DateField(auto_now_add=True)
    instrument = models.CharField(max_length=60, null=True, blank=True)
    teacher = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    lesson_day = models.CharField(max_length=10, null=True, blank=True)
    parent_name = models.CharField(max_length=50, null=True, blank=True)
    email = models.EmailField(max_length=160, null=True, blank=True)
    address = AddressField(null=True, blank=True)
    phone = PhoneField(null=True, blank=True, help_text='Contact phone number')


