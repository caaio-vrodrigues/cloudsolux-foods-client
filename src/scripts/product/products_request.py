import requests

def get_products():
  login_response = requests.post(
    'http://localhost:8080/api/v1/auth/login',
    json={
      'email': 'admin@test.com',
      'password': 'admin1234'
    },
    timeout=10
  )

  login_response.raise_for_status()
  token = login_response.json()['token']
  
  products_response = requests.get(
    'http://localhost:8080/api/v1/products',
    headers={
      'Authorization': f'Bearer {token}'
    },
    timeout=10
  )
  products_response.raise_for_status()
  return products_response.json()['content']