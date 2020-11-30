from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import MindSerializer      # add this
from .models import Mindlog                     # add this

class MindlogView(viewsets.ModelViewSet):       # add this
  serializer_class = MindSerializer          # add this
  queryset = Mindlog.objects.all()              # add this