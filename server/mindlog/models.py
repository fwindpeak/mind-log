from django.db import models

# Create your models here.

class Todo(models.Model):
  content = models.CharField(max_length=256)
  visible = models.BooleanField(default=True)
  createdTime = models.DateTimeField(auto_now=True)


  def _str_(self):
    return self.title