from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Pets
from .serializers import PetSerializer

class PetList(generics.ListCreateAPIView):
    queryset = Pets.objects.filter(available=True)
    serializer_class = PetSerializer

class PetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pets.objects.all()
    serializer_class = PetSerializer
