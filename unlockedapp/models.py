from django.db import models

# Create your models here.
class InterestedPerson(models.Model):
    name = models.CharField(max_length=254)
    email = models.EmailField(max_length=254)
    message = models.TextField()

    def __str__(self):
        return self.name
