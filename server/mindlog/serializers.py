from rest_framework import serializers
from .models import Mindlog

class MindSerializer(serializers.ModelSerializer):
  class Meta:
    model = Mindlog
    fields = ('id', 'content', 'createdTime')