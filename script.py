import requests

response = requests.get('http://localhost:8000/tasks')
print(response.json())

