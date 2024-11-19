https://docs.djangoproject.com/en/5.1/intro/tutorial02/

```sh
python manage.py shell
>>> from polls.models import Choice, Question
>>> from django.utils import timezone
>>> q = Question.objects.get(pk=1)
>>> q.choice_set.create(choice_text="Not much", votes=0)
<Choice: Choice object (1)>
>>> q.choice_set.create(choice_text="The sky", votes=0)
<Choice: Choice object (2)>
>>> c = q.choice_set.create(choice_text="Just hacking again", votes=0)
```