from django.db import models

# Create your models here.
class Pets (models.Model):
    SPECIES_CHOICES = [
        ('dog', 'Perro'),
        ('cat', 'Gato'),
        ('exotic', 'Exótico'),
    ]
    
    name = models.CharField(max_length=100)
    species = models.CharField(max_length=10, choices=SPECIES_CHOICES)
    breed = models.CharField(max_length=100, blank=True)
    age = models.PositiveIntegerField()
    description = models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    available = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.name} ({self.get_species_display()})"