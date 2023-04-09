from rest_framework import serializers
from .models import Students

class StudentsSerializer(serializers.ModelSerializer):

    teacher = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Students
        fields = ['id', 'first_name', 'last_name', 'start_date',
        'instrument', 'teacher', 'lesson_day', 'parent_name', 'address', 
        'phone', 'email']
        depth = 1
    