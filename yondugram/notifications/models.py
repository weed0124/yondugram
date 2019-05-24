from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from yondugram.users import models as user_models
from yondugram.images import models as image_models
from django.contrib.humanize.templatetags.humanize import naturaltime

class Notification(image_models.TimeStampedModel):

    TYPE_CHOICES = (
        ('like', 'Like'),
        ('comment', 'Comment'),
        ('follow', 'Follow')
    )

    creator = models.ForeignKey(user_models.User, related_name='creator', on_delete=models.CASCADE)
    to = models.ForeignKey(user_models.User, related_name='to', on_delete=models.CASCADE)
    notification_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    image = models.ForeignKey(image_models.Image, null=True, blank=True, on_delete=models.CASCADE)
    comment = models.TextField(null=True, blank=True)

    class Meta:
        ordering = ['-created_at']

    @property
    def natural_time(self):
        return naturaltime(self.created_at)

    def __str__(self):
        return 'From: {} - To: {}'.format(self.creator, self.to)